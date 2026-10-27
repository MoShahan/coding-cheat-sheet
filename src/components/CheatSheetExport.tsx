import { useState } from 'react'
import { createRoot } from 'react-dom/client'

import type { Category } from '../data/questions'
import { cn } from '../lib/cn'
import { exportCategoryPdf } from '../lib/exportCheatSheet'

import { CategoryPrintDocument } from './CategoryPrintDocument'

type CheatSheetExportProps = {
  category: Category
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
      <path
        d="M10 3.5v8.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M6.6 8.6 10 12.1l3.4-3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.2 14.8h11.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 animate-spin" aria-hidden="true" fill="none">
      <circle
        cx="10"
        cy="10"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        opacity="0.28"
      />
      <path
        d="M10 3.5a6.5 6.5 0 0 1 6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

async function renderAndExport(category: Category) {
  const host = document.createElement('div')
  host.setAttribute('aria-hidden', 'true')
  host.style.cssText =
    'position:fixed;left:-10000px;top:0;pointer-events:none;z-index:-1;'
  document.body.appendChild(host)

  const root = createRoot(host)
  root.render(<CategoryPrintDocument category={category} />)

  try {
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    })
    if (document.fonts?.ready) {
      await document.fonts.ready
    }
    await exportCategoryPdf(host, {
      title: category.name,
      type: category.type,
    })
  } finally {
    root.unmount()
    host.remove()
  }
}

export function CheatSheetExport({ category }: CheatSheetExportProps) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const label = error ? 'Export failed - try again' : busy ? 'Printing PDF' : 'Print PDF'

  async function handleExport() {
    if (busy) return
    setBusy(true)
    setError(false)
    try {
      await renderAndExport(category)
    } catch {
      setError(true)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      type="button"
      className={cn(
        'inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-[10px] bg-accent-strong text-white transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong disabled:cursor-wait disabled:opacity-80 dark:text-[#0b1016]',
      )}
      onClick={() => void handleExport()}
      disabled={busy}
      aria-busy={busy}
      aria-label={label}
      title={label}
    >
      {busy ? <SpinnerIcon /> : <DownloadIcon />}
    </button>
  )
}
