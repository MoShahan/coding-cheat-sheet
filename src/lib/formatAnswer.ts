export type AnswerPart = {
  type: 'text' | 'code'
  value: string
}

const SQL_START =
  /^(?:SELECT\s+(?:DISTINCT(?:\s+ON\s*\([^)]+\))?\s+)?(?:\*|COUNT\s*\(|SUM\s*\(|AVG\s*\(|MIN\s*\(|MAX\s*\(|[A-Za-z_]\w*(?:\s+AS\s+\w+)?(?:\s*,\s*[\w.*]+)+\s+FROM\b|[A-Za-z_]\w*(?:\s+AS\s+\w+)?\s+FROM\b)|INSERT\s+INTO\b|UPDATE\s+[A-Za-z_]\w*\s+SET\b|DELETE\s+FROM\b|CREATE\s+(?:UNIQUE\s+)?INDEX\b|CREATE\s+TABLE\b|ALTER\s+TABLE\b|TRUNCATE\s+[A-Za-z_]\w*|EXPLAIN(?:\s*\(|\s+ANALYZE\b)|BEGIN;|COMMIT;|ROLLBACK;|WITH\s+[A-Za-z_]\w*\s+AS\b|DROP\s+(?:TABLE|INDEX)\b)/i

const CLI_START = /^(?:npm|npx|pnpm|yarn|prisma|drizzle-kit)(?:\s+[A-Za-z@./:_-][A-Za-z0-9@./:_-]*)+/

function isIdentChar(ch: string | undefined) {
  return ch !== undefined && /[A-Za-z0-9_$]/.test(ch)
}

function isWordStart(line: string, index: number) {
  return index === 0 || !isIdentChar(line[index - 1])
}

function skipString(line: string, start: number): number {
  const quote = line[start]
  if (quote !== "'" && quote !== '"' && quote !== '`') return start
  let i = start + 1
  while (i < line.length) {
    if (line[i] === '\\') {
      i += 2
      continue
    }
    if (line[i] === quote) return i + 1
    i += 1
  }
  return line.length
}

function looksLikeMoreJs(line: string, index: number) {
  const rest = line.slice(index).replace(/^\s*;\s*/, '')
  return /^(?:\s*(?:const|let|var|function|class|import|export)\b|\s*async\s+(?:function\b|\()|\s*(?:if|while|for|switch)\s*\(|\s*else(?:\s+if\s*\(|\s*\{)|\s*(?:try|catch|finally)\s*\{|\s*(?:return|await|throw|new)\s+\S|\s*=>|\s*\{|\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*\(|\s*\.[A-Za-z_$])/.test(
    rest,
  )
}

function consumeBalancedJs(line: string, start: number): number {
  let i = start
  let paren = 0
  let brace = 0
  let bracket = 0
  let sawBody = false
  let sawEquals = false

  while (i < line.length) {
    if (
      paren + brace + bracket === 0 &&
      (sawBody || sawEquals) &&
      i > start &&
      /[\w)\]'"`]/.test(line[i - 1] ?? '') &&
      /^\s+[a-z]{2,}\b/.test(line.slice(i)) &&
      !/^\s+(?:in|instanceof)\b/.test(line.slice(i)) &&
      !/\b(?:const|let|var|function|class|return|await|throw|new)$/.test(
        line.slice(start, i).trimEnd(),
      ) &&
      !looksLikeMoreJs(line, i)
    ) {
      return i
    }

    const ch = line[i] ?? ''
    if (ch === "'" || ch === '"' || ch === '`') {
      i = skipString(line, i)
      sawBody = true
      continue
    }
    if (ch === '/' && line[i + 1] === '/') {
      const dash = line.indexOf(' - ', i)
      return dash === -1 ? line.length : dash
    }
    if (ch === '=' && paren + brace + bracket === 0) {
      sawEquals = true
    }
    if (ch === '(') {
      paren += 1
      sawBody = true
    } else if (ch === ')') {
      paren -= 1
      sawBody = true
    } else if (ch === '{') {
      brace += 1
      sawBody = true
    } else if (ch === '}') {
      brace -= 1
      sawBody = true
    } else if (ch === '[') {
      bracket += 1
      sawBody = true
    } else if (ch === ']') {
      bracket -= 1
      sawBody = true
    }

    const depth = paren + brace + bracket
    if (depth < 0) return i
    if (depth === 0 && sawBody) {
      if (line.startsWith(' - ', i + 1) || line.startsWith(' - ', i)) {
        return ch === ';' ? i + 1 : i + (ch === '.' ? 0 : 1)
      }
      if (ch === ';' && looksLikeMoreJs(line, i + 1)) {
        i += 1
        continue
      }
      if (ch === ';' || ch === ',') {
        i += 1
        if (looksLikeMoreJs(line, i)) continue
        return i
      }
      if (ch === ')' || ch === '}' || ch === ']') {
        const next = line.slice(i + 1)
        if (/^\s*\.[A-Za-z_$]/.test(next)) {
          i += 1
          continue
        }
        if (looksLikeMoreJs(line, i + 1)) {
          i += 1
          continue
        }
        return i + 1
      }
    }
    i += 1
  }
  return i
}

function consumeSql(line: string, start: number): number {
  let i = start
  let paren = 0
  while (i < line.length) {
    const ch = line[i] ?? ''
    if (ch === "'" || ch === '"') {
      i = skipString(line, i)
      continue
    }
    if (ch === '(') paren += 1
    if (ch === ')') paren -= 1
    if (paren <= 0 && line.startsWith(' - ', i)) return i
    if (paren <= 0 && ch === ';') return i + 1
    if (paren <= 0 && ch === '.' && /^ [A-Z]/.test(line.slice(i + 1))) return i
    i += 1
  }
  return i
}

function matchAt(line: string, index: number): number {
  const slice = line.slice(index)
  if (!slice) return -1

  if (slice[0] === '`' && slice.length > 1) {
    const close = slice.indexOf('`', 1)
    if (close > 0) return index + close + 1
  }

  if (slice[0] === '<' && /[A-Za-z/]/.test(slice[1] ?? '')) {
    const close = slice.indexOf('>')
    if (close > 0) return index + close + 1
  }

  if (!isWordStart(line, index)) return -1

  const sql = slice.match(SQL_START)
  if (sql?.[0]) return consumeSql(line, index)

  const cli = slice.match(CLI_START)
  if (cli?.[0]) return index + cli[0].length

  if (
    /^(?:const|let|var)\s+(?:[A-Za-z_$][\w$]*|\[[^\]]*\]|\{[^}]*\})\s*=/.test(
      slice,
    ) ||
    /^(?:async\s+)?function\s+[A-Za-z_$][\w$]*\s*\(/.test(slice) ||
    /^(?:import\s+(?:type\s+)?(?:['"{]|[\w*$]+\s+from))/.test(slice) ||
    /^export\s+(?:\{|default\s+|async\s+|function\s+|const\s+|type\s+|class\s+)/.test(
      slice,
    ) ||
    /^new\s+[A-Za-z_$][\w$]*\s*\(/.test(slice) ||
    /^(?:async\s+)?\([^)]*\)\s*=>/.test(slice)
  ) {
    return consumeBalancedJs(line, index)
  }

  const generic = slice.match(/^[A-Za-z_$][\w$]*<[^<>]+>/)
  if (generic?.[0]) return index + generic[0].length

  const header = slice.match(
    /^(?:Authorization|Content-Type|Access-Control-Allow-Origin|Upgrade|Connection|Sec-WebSocket-[A-Za-z]+):\s+\S+/,
  )
  if (header?.[0]) return index + header[0].length

  const url = slice.match(/^(?:https?|wss?):\/\/[^\s,)]+/)
  if (url?.[0]) return index + url[0].length

  const path = slice.match(/^\/[A-Za-z][\w-]*(?:\/[\w-]*)*(?:\?[^\s)]*)?/)
  if (path?.[0]) return index + path[0].length

  const file = slice.match(
    /^\.?[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)+(?:\/[A-Za-z0-9._-]+)*/,
  )
  if (
    file?.[0] &&
    /\.(?:js|ts|tsx|json|prisma|env|mjs|css|html|example|py|rb|go|rs|toml|lock|mod)\b/.test(
      file[0],
    )
  ) {
    return index + file[0].length
  }

  const attr = slice.match(
    /^(?:role|aria-[\w-]+|type|tabindex|href|src|alt|for|id)="[^"]*"/,
  )
  if (attr?.[0]) return index + attr[0].length

  if (/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)+\(/.test(slice)) {
    return consumeBalancedJs(line, index)
  }

  if (/^[A-Za-z_$][\w$]*\(/.test(slice)) {
    const call = consumeBalancedJs(line, index)
    if (call > index + 2) return call
  }

  const dotted = slice.match(/^\.[A-Za-z_$][\w$]*(?=\s|\(|$|[.,;:])/)
  if (dotted?.[0]) {
    if (slice[dotted[0].length] === '(') return consumeBalancedJs(line, index)
    return index + dotted[0].length
  }

  const env = slice.match(/^process\.env(?:\.[A-Za-z_][\w]*)?/)
  if (env?.[0]) return index + env[0].length

  return -1
}

export function parseAnswerParts(line: string): AnswerPart[] {
  const parts: AnswerPart[] = []
  let cursor = 0
  let i = 0

  while (i < line.length) {
    const end = matchAt(line, i)
    if (end > i) {
      if (i > cursor) {
        parts.push({ type: 'text', value: line.slice(cursor, i) })
      }
      const raw = line.slice(i, end)
      const value =
        raw.startsWith('`') && raw.endsWith('`') && raw.length >= 2
          ? raw.slice(1, -1)
          : raw
      parts.push({ type: 'code', value })
      cursor = end
      i = end
      continue
    }
    i += 1
  }

  if (cursor < line.length) {
    parts.push({ type: 'text', value: line.slice(cursor) })
  }

  return parts.filter((part) => part.value.length > 0)
}

export function isCodeBlock(code: string) {
  if (code.includes('\n')) return true
  if (code.length >= 42) return true
  if (/[{;]/.test(code) && code.length >= 24) return true
  return /\b(?:SELECT|INSERT|UPDATE|DELETE|CREATE|EXPLAIN|function)\b/i.test(code) &&
    code.length >= 28
}

function findMatching(
  code: string,
  start: number,
  open: string,
  close: string,
): number {
  let depth = 0
  let i = start
  while (i < code.length) {
    const ch = code[i] ?? ''
    if (ch === "'" || ch === '"' || ch === '`') {
      i = skipString(code, i)
      continue
    }
    if (ch === open) depth += 1
    else if (ch === close) {
      depth -= 1
      if (depth === 0) return i
    }
    i += 1
  }
  return -1
}

function prettySql(code: string): string {
  return code
    .replace(/\s+/g, ' ')
    .replace(
      /\s+\b(FROM|WHERE|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|OUTER JOIN|GROUP BY|ORDER BY|LIMIT|OFFSET|SET|VALUES|HAVING|UNION(?: ALL)?|ON)\b/gi,
      '\n$1',
    )
    .trim()
}

function prettyJs(code: string): string {
  let out = ''
  let indent = 0
  let paren = 0
  let i = 0
  const braceParen: number[] = []

  const breakLine = () => {
    out += `\n${'  '.repeat(indent)}`
  }

  const atStatement = () => paren === (braceParen[braceParen.length - 1] ?? 0)

  while (i < code.length) {
    const ch = code[i] ?? ''

    if (ch === "'" || ch === '"' || ch === '`') {
      const end = skipString(code, i)
      out += code.slice(i, end)
      i = end
      continue
    }

    if (ch === '/' && code[i + 1] === '/') {
      const nl = code.indexOf('\n', i)
      out += code.slice(i, nl === -1 ? code.length : nl)
      i = nl === -1 ? code.length : nl
      continue
    }

    if (ch === '/' && code[i + 1] === '*') {
      const end = code.indexOf('*/', i + 2)
      const close = end === -1 ? code.length : end + 2
      out += code.slice(i, close)
      i = close
      while (code[i] === ' ') i += 1
      if (atStatement() && i < code.length && code[i] !== '}' && code[i] !== '\n') {
        breakLine()
      }
      continue
    }

    if (ch === '(') {
      paren += 1
      out += ch
      i += 1
      continue
    }

    if (ch === ')') {
      paren = Math.max(0, paren - 1)
      out += ch
      i += 1
      continue
    }

    if (ch === '{') {
      const close = findMatching(code, i, '{', '}')
      const inner = close === -1 ? '' : code.slice(i + 1, close)
      const compact = close !== -1 && isCompactBrace(inner)
      if (compact) {
        out += code.slice(i, close + 1)
        i = close + 1
        continue
      }
      indent += 1
      braceParen.push(paren)
      out += '{'
      i += 1
      while (code[i] === ' ') i += 1
      breakLine()
      continue
    }

    if (ch === '}') {
      indent = Math.max(0, indent - 1)
      braceParen.pop()
      out = out.replace(/[ \t]+$/, '')
      if (!out.endsWith('\n')) out += '\n'
      out += `${'  '.repeat(indent)}}`
      i += 1
      continue
    }

    if (ch === ';' && atStatement()) {
      out += ';'
      i += 1
      while (code[i] === ' ') i += 1
      if (i < code.length && code[i] !== '}' && code[i] !== '\n') {
        breakLine()
      }
      continue
    }

    out += ch
    i += 1
  }

  return out.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim()
}

function isCompactBrace(inner: string): boolean {
  const t = inner.trim()
  if (t.length === 0) return true
  if (t.length >= 48) return false
  if (t.includes(';') || t.includes('{') || t.includes('/*') || t.includes('//')) {
    return false
  }
  if (/\b(?:return|const|let|var|if|await|throw|new|for|while)\b/.test(t)) {
    return false
  }
  if (/[A-Za-z_$][\w$]*\s*\(/.test(t)) return false
  return true
}

export function formatCodeForDisplay(code: string): string {
  const trimmed = code.replace(/^\n+/, '').replace(/\n+$/, '').replace(/[ \t]+$/gm, '')
  const formatted = trimmed.includes('\n')
    ? trimmed
    : trimmed.startsWith('<') && trimmed.includes('>')
      ? trimmed
      : SQL_START.test(trimmed)
        ? prettySql(trimmed)
        : /[{;]/.test(trimmed)
          ? prettyJs(trimmed)
          : trimmed
  return formatted.replace(/(?<=[A-Za-z_)\]])\.$/m, '')
}

export function getAnswerDisplayParts(line: string): AnswerPart[] {
  const parts: AnswerPart[] = []
  for (const part of parseAnswerParts(line)) {
    if (part.type === 'code') {
      parts.push({ type: 'code', value: formatCodeForDisplay(part.value) })
      continue
    }
    const prev = parts[parts.length - 1]
    let value = part.value
    if (prev?.type === 'code' && isCodeBlock(prev.value)) {
      value = value.replace(/^\s*\.\s*/, '')
    }
    if (value.length > 0) parts.push({ type: 'text', value })
  }
  return parts
}
