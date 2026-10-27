export type AnswerPart = {
  type: 'text' | 'code'
  value: string
  block?: boolean
}

function flushText(parts: AnswerPart[], line: string, start: number, end: number) {
  if (end > start) {
    parts.push({ type: 'text', value: line.slice(start, end) })
  }
}

function readFence(line: string, start: number): { value: string; next: number } | null {
  if (!line.startsWith('```', start)) return null

  let i = start + 3
  const langStart = i
  while (i < line.length && /[A-Za-z0-9_+-]/.test(line[i] ?? '')) {
    i += 1
  }
  if (line[i] === '\r') i += 1
  if (line[i] === '\n') {
    i += 1
  } else {
    i = langStart
  }

  const close = line.indexOf('```', i)
  const raw = line.slice(i, close === -1 ? line.length : close)
  const value = raw.replace(/^\n/, '').replace(/\n$/, '')
  return {
    value,
    next: close === -1 ? line.length : close + 3,
  }
}

export function parseAnswerParts(line: string): AnswerPart[] {
  const parts: AnswerPart[] = []
  let cursor = 0
  let i = 0

  while (i < line.length) {
    const fence = readFence(line, i)
    if (fence) {
      flushText(parts, line, cursor, i)
      if (fence.value.length > 0) {
        parts.push({ type: 'code', value: fence.value, block: true })
      }
      cursor = fence.next
      i = fence.next
      continue
    }

    if (line[i] === '`') {
      const close = line.indexOf('`', i + 1)
      if (close > i) {
        flushText(parts, line, cursor, i)
        const value = line.slice(i + 1, close)
        if (value.length > 0) {
          parts.push({ type: 'code', value })
        }
        cursor = close + 1
        i = close + 1
        continue
      }
    }

    i += 1
  }

  flushText(parts, line, cursor, line.length)
  return parts.filter((part) => part.value.length > 0)
}

export function isCodeBlock(part: AnswerPart | string) {
  if (typeof part === 'string') return part.includes('\n')
  return Boolean(part.block)
}

export function getAnswerDisplayParts(line: string): AnswerPart[] {
  return parseAnswerParts(line)
}
