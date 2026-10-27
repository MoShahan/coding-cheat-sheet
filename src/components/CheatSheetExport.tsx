import { useState } from 'react'
import { createRoot } from 'react-dom/client'

import { getCheatSheet } from '../data/cheatSheets'
import type { Category } from '../data/questions'
import { cn } from '../lib/cn'
import {
  type CheatExportFormat,
  cheatSheetBasename,
  exportA4Node,
} from '../lib/exportCheatSheet'

import { CheatSheetPage } from './CheatSheetPage'

type CheatSheetExportProps = {
  category: Category
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true" fill="none">
      <rect
        x="3"
        y="4.5"
        width="14"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="7.2" cy="8.4" r="1.3" fill="currentColor" />
      <path
        d="M4.5 13.2 8 10.2l2.2 1.8 3.1-3.3 2.2 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PdfIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden="true" fill="none">
      <path
        d="M6 3.5h5.2L16 8.2V16a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 16V5a1.5 1.5 0 0 1 1-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M11 3.6V8h4.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.2 12.6h1.7c.8 0 1.3-.4 1.3-1.1 0-.7-.5-1.1-1.3-1.1H7.2v4.4M12.6 10.4v4.4M12.6 12.6h1.6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

async function renderAndExport(category: Category, format: CheatExportFormat) {
  const sheet = getCheatSheet(category.id)
  if (!sheet) return

  const host = document.createElement('div')
  host.setAttribute('aria-hidden', 'true')
  host.style.cssText =
    'position:fixed;left:0;top:0;opacity:0;pointer-events:none;z-index:-1;'
  document.body.appendChild(host)

  const root = createRoot(host)
  root.render(<CheatSheetPage category={category} sheet={sheet} />)

  try {
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    })
    if (document.fonts?.ready) {
      await document.fonts.ready
    }
    const node = host.querySelector('[data-cheat-sheet]')
    if (!(node instanceof HTMLElement)) {
      throw new Error('Cheat sheet node missing')
    }
    await exportA4Node(node, format, cheatSheetBasename(category.type))
  } finally {
    root.unmount()
    host.remove()
  }
}

export function CheatSheetExport({ category }: CheatSheetExportProps) {
  const [busy, setBusy] = useState<CheatExportFormat | null>(null)
  const [error, setError] = useState(false)
  const sheet = getCheatSheet(category.id)

  if (!sheet) return null

  async function handleExport(format: CheatExportFormat) {
    if (busy) return
    setBusy(format)
    setError(false)
    try {
      await renderAndExport(category, format)
    } catch {
      setError(true)
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="flex shrink-0 flex-col items-end gap-1.5">
      <div
        className="inline-flex overflow-hidden rounded-xl border border-line bg-paper/80 shadow-[0_1px_0_rgba(16,24,32,0.04)] dark:bg-white/5"
        role="group"
        aria-label={`Print ${category.type} A4 cheat sheet`}
      >
        <button
          type="button"
          className={cn(
            'inline-flex cursor-pointer items-center gap-1.5 px-3 py-2 text-[0.78rem] font-bold tracking-wide text-ink-soft transition-[background,color] duration-200 ease-out-quart hover:bg-accent-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong disabled:cursor-wait disabled:opacity-70',
          )}
          onClick={() => void handleExport('png')}
          disabled={busy !== null}
          aria-label={`Download ${category.type} cheat sheet as PNG image`}
        >
          <ImageIcon />
          {busy === 'png' ? 'Saving…' : 'Image'}
        </button>
        <span className="w-px self-stretch bg-line" aria-hidden="true" />
        <button
          type="button"
          className={cn(
            'inline-flex cursor-pointer items-center gap-1.5 bg-accent-strong px-3 py-2 text-[0.78rem] font-bold tracking-wide text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong disabled:cursor-wait disabled:opacity-70 dark:text-[#0b1016]',
          )}
          onClick={() => void handleExport('pdf')}
          disabled={busy !== null}
          aria-label={`Download ${category.type} cheat sheet as PDF`}
        >
          <PdfIcon />
          {busy === 'pdf' ? 'Saving…' : 'PDF'}
        </button>
      </div>
      <p className="m-0 text-[0.68rem] font-semibold tracking-wide text-muted uppercase">
        {error ? 'Export failed - try again' : 'A4 cheat sheet'}
      </p>
    </div>
  )
}
