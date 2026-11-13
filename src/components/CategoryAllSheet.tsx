import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { categories, type Category } from '../data/questions'
import { cn } from '../lib/cn'

import { TopicVisual } from './TopicVisual'

type CategoryAllSheetProps = {
  open: boolean
  activeCategoryId: string
  matchCountFor: (category: Category) => number
  dimEmptyMatches: boolean
  onSelect: (categoryId: string) => void
  onClose: () => void
}

export function CategoryAllSheet({
  open,
  activeCategoryId,
  matchCountFor,
  dimEmptyMatches,
  onSelect,
  onClose,
}: CategoryAllSheetProps) {
  const titleId = useId()
  const searchId = useId()
  const searchRef = useRef<HTMLInputElement>(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    searchRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  const normalizedFilter = filter.trim().toLowerCase()
  const visibleCategories = useMemo(() => {
    if (!normalizedFilter) return categories
    return categories.filter(
      (category) =>
        category.type.toLowerCase().includes(normalizedFilter) ||
        category.name.toLowerCase().includes(normalizedFilter) ||
        category.blurb.toLowerCase().includes(normalizedFilter),
    )
  }, [normalizedFilter])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-end justify-center md:items-center md:p-6">
      <button
        type="button"
        className="absolute inset-0 cursor-pointer border-0 bg-[rgb(8_14_20/0.55)] backdrop-blur-[2px]"
        aria-label="Close category list"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[1] flex max-h-[min(88svh,720px)] w-full max-w-lg flex-col rounded-t-[22px] border border-line bg-paper shadow-shell md:rounded-[22px]"
      >
        <div className="flex shrink-0 flex-col gap-2 border-b border-line px-3 pt-3 pb-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p
                id={titleId}
                className="m-0 font-display text-[1rem] font-bold tracking-[-0.03em] text-ink"
              >
                All categories
              </p>
              <p className="mt-0.5 mb-0 text-[0.75rem] text-muted">
                {normalizedFilter
                  ? `${visibleCategories.length} of ${categories.length}`
                  : `${categories.length} topics`}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent text-ink-soft transition-colors duration-200 ease-out-quart hover:bg-category-hover hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              aria-label="Close"
              onClick={onClose}
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.5 3.5l9 9M12.5 3.5l-9 9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <label className="sr-only" htmlFor={searchId}>
            Search categories
          </label>
          <input
            ref={searchRef}
            id={searchId}
            type="search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Search…"
            autoComplete="off"
            className="w-full rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[0.85rem] text-ink transition-[border-color,box-shadow] duration-200 ease-out-quart placeholder:text-placeholder focus:border-accent-strong focus:shadow-[0_0_0_3px_var(--focus-ring)] focus:outline-none"
          />
        </div>

        {visibleCategories.length === 0 ? (
          <p className="m-0 px-3 py-4 text-[0.85rem] text-muted">
            No categories match “{filter.trim()}”.
          </p>
        ) : (
          <ul className="m-0 grid list-none gap-0.5 overflow-y-auto overscroll-contain px-2 py-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {visibleCategories.map((category) => {
              const isActive = category.id === activeCategoryId
              const matchCount = matchCountFor(category)
              return (
                <li key={category.id}>
                  <button
                    type="button"
                    className={cn(
                      'flex w-full min-h-9 cursor-pointer items-center justify-between gap-2 rounded-lg border px-2 py-1.5 text-left font-semibold transition-[background,color,border-color,opacity] duration-200 ease-out-quart',
                      isActive
                        ? 'border-accent-strong bg-accent-soft text-ink'
                        : 'border-transparent bg-transparent text-ink-soft hover:bg-category-hover hover:text-ink',
                      dimEmptyMatches && matchCount === 0 && 'opacity-45',
                    )}
                    aria-current={isActive ? 'true' : undefined}
                    aria-label={`${category.type}: ${category.name}, ${matchCount} ${matchCount === 1 ? 'note' : 'notes'}`}
                    onClick={() => {
                      onSelect(category.id)
                      onClose()
                    }}
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <TopicVisual
                        type={category.type}
                        className="h-6 w-6 shrink-0 rounded-md"
                      />
                      <span className="flex min-w-0 items-baseline gap-1.5">
                        <span className="shrink-0 font-display text-[0.88rem] font-bold tracking-[-0.02em]">
                          {category.type}
                        </span>
                        <span className="truncate text-[0.7rem] font-medium text-muted">
                          {category.name}
                        </span>
                      </span>
                    </span>
                    <span
                      className={cn(
                        'min-w-5 shrink-0 text-center text-[0.7rem] font-bold tabular-nums',
                        isActive ? 'text-accent-strong' : 'opacity-65',
                      )}
                    >
                      {matchCount}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>,
    document.body,
  )
}
