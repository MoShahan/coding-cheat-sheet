import { type KeyboardEvent, useId, useState } from 'react'
import { Link } from 'react-router-dom'

import { ThemeToggle } from '../components/ThemeToggle'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/cn'
import { type ConsoleLine, runJs } from '../lib/runJs'

const STARTER = `// Vanilla JS playground
const name = 'world'
console.log('Hello,', name)

const nums = [1, 2, 3]
console.log('sum:', nums.reduce((a, b) => a + b, 0))
console.log('doubled:', nums.map((n) => n * 2))

console.warn('This is a warning')
console.error('This is an error message')
`

export function PlaygroundPage() {
  const editorId = useId()
  const { theme, toggleTheme } = useTheme()
  const [code, setCode] = useState(STARTER)
  const [output, setOutput] = useState<ConsoleLine[]>([])

  function handleRun() {
    setOutput(runJs(code))
  }

  function handleClearOutput() {
    setOutput([])
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault()
      handleRun()
    }
  }

  return (
    <div className="mx-auto w-[min(1180px,calc(100%-2rem))] pt-5 pb-[max(3rem,calc(1.5rem+env(safe-area-inset-bottom)))] max-md:w-[min(100%-1rem,1180px)]">
      <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="mb-1 text-[0.7rem] font-bold tracking-[0.1em] text-accent-strong uppercase">
            Playground
          </p>
          <h1 className="m-0 font-display text-[clamp(1.6rem,3vw,2.2rem)] tracking-[-0.04em] text-ink">
            JavaScript console
          </h1>
          <p className="mt-1 mb-0 text-sm text-muted">
            Run vanilla JS in the browser. Use Ctrl/Cmd + Enter to run.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center rounded-xl border border-line bg-surface px-3 py-2 text-[0.78rem] font-bold tracking-wide text-ink no-underline transition-[border-color,background] duration-200 ease-out-quart hover:border-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          >
            Back home
          </Link>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="flex min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-shell backdrop-blur-[14px]">
          <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-3">
            <h2 className="m-0 text-sm font-bold text-ink">Editor</h2>
            <div className="flex gap-2">
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-line bg-transparent px-3 py-1.5 text-xs font-bold text-muted transition-[border-color,color] duration-200 hover:border-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
                onClick={() => {
                  setCode('')
                  setOutput([])
                }}
              >
                Reset
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-transparent bg-accent-strong px-3 py-1.5 text-xs font-bold text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong dark:text-[#0b1016]"
                onClick={handleRun}
              >
                Run
              </button>
            </div>
          </div>
          <label className="sr-only" htmlFor={editorId}>
            JavaScript code
          </label>
          <textarea
            id={editorId}
            value={code}
            onChange={(event) => setCode(event.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            className="min-h-0 w-full flex-1 resize-none border-0 bg-transparent px-4 py-3 font-mono text-sm leading-relaxed text-ink outline-none"
          />
        </section>

        <section className="flex min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-shell backdrop-blur-[14px]">
          <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-3">
            <h2 className="m-0 text-sm font-bold text-ink">Console</h2>
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-line bg-transparent px-3 py-1.5 text-xs font-bold text-muted transition-[border-color,color] duration-200 hover:border-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              onClick={handleClearOutput}
            >
              Clear
            </button>
          </div>
          <div
            className="scrollbar-thin min-h-0 flex-1 overflow-auto px-4 py-3 font-mono text-sm leading-relaxed"
            aria-live="polite"
          >
            {output.length === 0 ? (
              <p className="m-0 text-muted">Output appears here after you run code.</p>
            ) : (
              <ul className="m-0 grid list-none gap-2 p-0">
                {output.map((line) => (
                  <li
                    key={line.id}
                    className={cn(
                      'whitespace-pre-wrap break-words',
                      line.kind === 'error' && 'text-red-500 dark:text-red-400',
                      line.kind === 'warn' && 'text-amber-600 dark:text-amber-300',
                      line.kind === 'result' && 'text-accent-strong',
                      (line.kind === 'log' || line.kind === 'info') &&
                        'text-ink-soft',
                    )}
                  >
                    <span className="mr-2 text-[0.7rem] font-bold tracking-wide text-muted uppercase">
                      {line.kind}
                    </span>
                    {line.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
