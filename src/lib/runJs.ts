export type ConsoleLine = {
  id: string
  kind: 'log' | 'warn' | 'error' | 'info' | 'result'
  text: string
}

function formatArg(value: unknown): string {
  if (typeof value === 'string') return value
  if (typeof value === 'undefined') return 'undefined'
  if (typeof value === 'symbol') return value.toString()
  if (typeof value === 'bigint') return `${value}n`
  if (typeof value === 'function') {
    return `[Function${value.name ? `: ${value.name}` : ''}]`
  }
  try {
    return JSON.stringify(value, null, 2) ?? String(value)
  } catch {
    return Object.prototype.toString.call(value)
  }
}

function formatArgs(args: unknown[]): string {
  return args.map(formatArg).join(' ')
}

/** Run vanilla JS in the page context and capture console output. */
export function runJs(code: string): ConsoleLine[] {
  const lines: ConsoleLine[] = []
  let seq = 0

  function push(kind: ConsoleLine['kind'], text: string) {
    seq += 1
    lines.push({ id: `${seq}-${kind}`, kind, text })
  }

  const fakeConsole = {
    log: (...args: unknown[]) => push('log', formatArgs(args)),
    info: (...args: unknown[]) => push('info', formatArgs(args)),
    warn: (...args: unknown[]) => push('warn', formatArgs(args)),
    error: (...args: unknown[]) => push('error', formatArgs(args)),
    clear: () => {
      lines.length = 0
    },
  }

  try {
    // Async functions return a Promise; surface that clearly.
    const runner = new Function(
      'console',
      `"use strict";\n${code}\n`,
    ) as (console: typeof fakeConsole) => unknown
    const result = runner(fakeConsole)
    if (result !== undefined) {
      push('result', formatArg(result))
    }
  } catch (error) {
    push(
      'error',
      error instanceof Error ? `${error.name}: ${error.message}` : String(error),
    )
  }

  if (lines.length === 0) {
    push('info', '(no output)')
  }

  return lines
}
