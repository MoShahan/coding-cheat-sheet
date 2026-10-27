import { type CSSProperties, useId, useState } from 'react'
import { Link } from 'react-router-dom'

import heroRevision from '../assets/hero-revision.jpg'
import { AnswerNotes } from '../components/AnswerNotes'
import { CheatSheetExport } from '../components/CheatSheetExport'
import { ThemeToggle } from '../components/ThemeToggle'
import { TopicVisual } from '../components/TopicVisual'
import {
  answerText,
  categories,
  type Category,
  countQuestions,
  getTotalQuestionCount,
  sortQuestions,
  type Topic,
} from '../data/questions'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../lib/cn'

type CategorySort = 'default' | 'alpha'

type ResultGroup = {
  category: Category
  topics: Topic[]
}

function filterTopics(topics: Topic[], normalized: string): Topic[] {
  return topics
    .map((topic) => ({
      ...topic,
      questions: sortQuestions(
        normalized
          ? topic.questions.filter(
              (item) =>
                item.question.toLowerCase().includes(normalized) ||
                answerText(item.answer).toLowerCase().includes(normalized),
            )
          : topic.questions,
      ),
    }))
    .filter((topic) => topic.questions.length > 0)
}

function SearchIcon() {
  return (
    <svg
      className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M10.5 10.5L14 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HomePage() {
  const searchId = useId()
  const { theme, toggleTheme } = useTheme()
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id)
  const [query, setQuery] = useState('')
  const [categorySort, setCategorySort] = useState<CategorySort>('default')
  const [searchAllCategories, setSearchAllCategories] = useState(false)

  const orderedCategories =
    categorySort === 'alpha'
      ? [...categories].sort((a, b) =>
          a.type.localeCompare(b.type, undefined, { sensitivity: 'base' }),
        )
      : categories

  const activeCategory =
    categories.find((category) => category.id === activeCategoryId) ??
    categories[0]

  const normalized = query.trim().toLowerCase()
  const searchingAll = searchAllCategories && normalized.length > 0

  const resultGroups: ResultGroup[] = searchingAll
    ? orderedCategories
        .map((category) => ({
          category,
          topics: filterTopics(category.topics, normalized),
        }))
        .filter((group) => group.topics.length > 0)
    : [
        {
          category: activeCategory,
          topics: filterTopics(activeCategory.topics, normalized),
        },
      ].filter((group) => group.topics.length > 0)

  const visibleCount = resultGroups.reduce(
    (sum, group) =>
      sum +
      group.topics.reduce(
        (topicSum, topic) => topicSum + topic.questions.length,
        0,
      ),
    0,
  )

  function handleCategoryChange(categoryId: string) {
    setActiveCategoryId(categoryId)
    if (searchAllCategories) {
      setSearchAllCategories(false)
    }
  }

  const panelCategory = searchingAll ? null : activeCategory

  return (
    <div className="mx-auto w-[min(1180px,calc(100%-2rem))] pt-5 pb-[max(4.5rem,calc(2.5rem+env(safe-area-inset-bottom)))] pl-[max(0px,env(safe-area-inset-left))] pr-[max(0px,env(safe-area-inset-right))] max-md:w-[min(100%-1rem,1180px)] max-md:pt-3 max-md:pb-[max(2.75rem,calc(1.5rem+env(safe-area-inset-bottom)))] max-sm:w-full max-sm:px-0 max-sm:pt-0 max-sm:pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <header className="animate-hero-in relative isolate mb-7 min-h-[min(62svh,520px)] overflow-hidden rounded-[28px] border border-line max-md:mb-4 max-md:min-h-0 max-md:rounded-[20px] max-sm:mb-3 max-sm:rounded-none max-sm:border-x-0 max-sm:border-t-0">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={heroRevision}
            alt=""
            width={1600}
            height={900}
            className="animate-hero-ken block h-full w-full scale-105 object-cover object-[70%_center] max-md:object-center"
          />
        </div>

        <div className="bg-hero-scrim relative z-[1] grid min-h-[inherit] content-between gap-7 p-[clamp(1.25rem,3vw,2rem)] max-md:gap-[1.15rem] max-md:p-4 max-sm:bg-hero-scrim-mobile max-sm:gap-5 max-sm:pt-[max(0.85rem,env(safe-area-inset-top))] max-sm:pr-4 max-sm:pb-[1.1rem] max-sm:pl-4">
          <div className="flex items-start justify-between gap-4 max-md:items-center">
            <p className="brand animate-rise m-0 font-display text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.055em] text-balance text-hero-ink max-md:max-w-[12ch] max-md:text-[clamp(2rem,10vw,3rem)] max-sm:text-[clamp(1.9rem,11vw,2.6rem)]">
              Coding Cheat Sheet
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <Link
                to="/playground"
                className="inline-flex items-center rounded-xl border border-white/20 bg-black/35 px-3 py-2 text-[0.78rem] font-bold tracking-wide text-hero-ink no-underline backdrop-blur-md transition-[border-color,background] duration-200 ease-out-quart hover:border-sky-300/55 hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                JS Playground
              </Link>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
          </div>

          <div className="animate-rise max-w-xl [animation-delay:50ms]">
            <h1 className="m-0 max-w-[20ch] font-display text-[clamp(1.35rem,2.6vw,1.9rem)] leading-tight font-semibold tracking-[-0.03em] text-hero-ink max-md:max-w-none max-md:text-[clamp(1.15rem,4.6vw,1.45rem)] max-[380px]:text-[1.1rem]">
              A personal revision sheet for interview day.
            </h1>
            <p className="mt-3.5 mb-0 max-w-[42ch] text-[1.05rem] leading-normal text-hero-muted max-md:max-w-none max-md:text-[0.98rem]">
              {getTotalQuestionCount()} notes across {categories.length} topics.
              Skim frontend, backend, databases, and more whenever you want a
              quick memory refresh.
            </p>
          </div>

          <div className="animate-rise grid w-[min(100%,360px)] justify-items-start gap-[0.55rem] [animation-delay:100ms] max-md:w-full">
            <label
              className="text-[0.72rem] font-bold tracking-[0.08em] text-hero-muted uppercase"
              htmlFor={searchId}
            >
              {searchAllCategories
                ? 'Search in all topics'
                : `Search in ${activeCategory.type}`}
            </label>
            <span className="relative block w-full">
              <SearchIcon />
              <input
                id={searchId}
                type="search"
                placeholder="Filter topics…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoComplete="off"
                className="w-full rounded-[14px] border border-white/20 bg-white/95 py-[0.95rem] pr-4 pl-10 text-[#101820] transition-[border-color,box-shadow,transform] duration-200 ease-out-quart placeholder:text-placeholder focus:border-accent-strong focus:shadow-[0_0_0_3px_var(--focus-ring)] focus:-translate-y-px focus:outline-none max-md:min-h-[2.85rem] max-md:text-base dark:border-white/15 dark:bg-[rgb(22_28_36/0.92)] dark:text-ink"
              />
            </span>
            <button
              type="button"
              className="m-0 inline-flex cursor-pointer items-center gap-[0.55rem] border-0 bg-transparent p-[0.1rem_0] text-[0.84rem] leading-tight font-semibold whitespace-nowrap text-hero-ink select-none focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent-strong"
              role="switch"
              aria-checked={searchAllCategories}
              onClick={() => setSearchAllCategories((current) => !current)}
            >
              <span
                className={cn(
                  'relative h-[1.3rem] w-[2.35rem] shrink-0 rounded-full border transition-[background,border-color] duration-200 ease-out-quart',
                  searchAllCategories
                    ? 'border-transparent bg-accent-strong'
                    : 'border-white/30 bg-white/20',
                )}
                aria-hidden="true"
              >
                <span
                  className={cn(
                    'absolute top-1/2 h-[0.95rem] w-[0.95rem] -translate-y-1/2 rounded-full bg-slate-50 shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-[left] duration-200 ease-out-quart',
                    searchAllCategories ? 'left-[1.15rem]' : 'left-[0.15rem]',
                  )}
                />
              </span>
              <span className="block leading-tight">Search all categories</span>
            </button>
          </div>
        </div>
      </header>

      <div className="animate-rise grid grid-cols-[minmax(0,250px)_minmax(0,1fr)] items-start gap-5 [animation-delay:120ms] max-md:grid-cols-1 max-md:gap-3.5 max-sm:mx-auto max-sm:w-[min(100%-1rem,1180px)] max-sm:gap-2.5">
        <nav
          className="rounded-2xl border border-line bg-surface px-[0.7rem] py-[0.9rem] shadow-shell backdrop-blur-[14px] max-md:px-[0.65rem] max-md:pt-[0.7rem] max-md:pb-[0.75rem] max-sm:rounded-[14px]"
          aria-label="Topic types"
        >
          <div className="mx-[0.3rem] mb-[0.7rem] flex items-center justify-between gap-2 max-md:mx-[0.15rem] max-md:mb-[0.55rem]">
            <p className="m-0 text-[0.68rem] font-bold tracking-[0.1em] text-muted uppercase">
              Browse by topic
            </p>
            <button
              type="button"
              className={cn(
                'cursor-pointer rounded-lg border border-line bg-transparent px-[0.45rem] py-[0.2rem] text-[0.68rem] font-bold tracking-wide text-muted transition-[background,color,border-color] duration-200 ease-out-quart hover:border-accent-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong',
                categorySort === 'alpha' &&
                  'border-accent-strong bg-accent-soft text-accent-strong',
              )}
              aria-pressed={categorySort === 'alpha'}
              aria-label={
                categorySort === 'alpha'
                  ? 'Sort categories by default order'
                  : 'Sort categories alphabetically'
              }
              title={
                categorySort === 'alpha'
                  ? 'Default order'
                  : 'Alphabetical (A-Z)'
              }
              onClick={() =>
                setCategorySort((current) =>
                  current === 'alpha' ? 'default' : 'alpha',
                )
              }
            >
              A-Z
            </button>
          </div>
          <ul className="m-0 grid list-none gap-[0.15rem] p-0 max-md:flex max-md:gap-[0.4rem] max-md:overflow-x-auto max-md:overscroll-x-contain max-md:scroll-smooth max-md:px-[0.1rem] max-md:pt-[0.1rem] max-md:pb-[0.35rem] max-md:[scroll-snap-type:x_proximity] max-md:scrollbar-none">
            {orderedCategories.map((category) => {
              const isActive =
                !searchingAll && category.id === activeCategory.id
              return (
                <li key={category.id}>
                  <button
                    type="button"
                    className={cn(
                      'flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border-0 bg-transparent px-[0.7rem] py-[0.65rem] text-left font-semibold text-ink-soft transition-[background,color] duration-200 ease-out-quart hover:bg-category-hover hover:text-ink max-md:min-h-11 max-md:shrink-0 max-md:whitespace-nowrap max-md:[scroll-snap-align:start]',
                      isActive &&
                        'bg-category-active-bg text-category-active-fg',
                    )}
                    onClick={() => handleCategoryChange(category.id)}
                    aria-current={isActive ? 'true' : undefined}
                    aria-label={`${category.type}: ${category.name}`}
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <TopicVisual
                        type={category.type}
                        className={cn(
                          'h-[1.85rem] w-[1.85rem] shrink-0 rounded-lg max-[380px]:h-6 max-[380px]:w-6',
                          isActive &&
                            'outline outline-1 outline-sky-300/50',
                        )}
                      />
                      <span className="min-w-0 font-display text-[0.95rem] font-bold tracking-[-0.02em] max-[380px]:text-[0.88rem]">
                        {category.type}
                      </span>
                    </span>
                    <span
                      className={cn(
                        'min-w-6 shrink-0 text-center text-xs font-bold tabular-nums opacity-65',
                        isActive &&
                          'text-category-active-count opacity-100',
                      )}
                    >
                      {countQuestions(category)}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <main
          className="animate-panel-in min-w-0 rounded-[22px] border border-line bg-surface px-[1.7rem] pt-6 pb-8 shadow-shell backdrop-blur-[14px] max-md:rounded-[18px] max-md:px-[0.95rem] max-md:pt-[1.15rem] max-md:pb-[1.4rem] max-md:shadow-none max-sm:rounded-[14px] max-sm:px-[0.85rem] max-sm:pt-4 max-sm:pb-5"
          key={searchingAll ? `search-${normalized}` : activeCategory.id}
        >
          <header className="mb-6 border-b border-line pb-5 max-md:mb-[1.15rem] max-md:pb-4">
            <div className="flex min-w-0 items-start gap-4 max-md:gap-3 max-sm:flex-wrap">
              {panelCategory ? (
                <TopicVisual
                  type={panelCategory.type}
                  className="h-[4.25rem] w-[4.25rem] shrink-0 rounded-[14px] max-md:h-[3.4rem] max-md:w-[3.4rem] max-md:rounded-xl max-[380px]:h-12 max-[380px]:w-12"
                />
              ) : (
                <TopicVisual
                  type="All"
                  className="h-[4.25rem] w-[4.25rem] shrink-0 rounded-[14px] max-md:h-[3.4rem] max-md:w-[3.4rem] max-md:rounded-xl max-[380px]:h-12 max-[380px]:w-12"
                />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3 max-md:flex-wrap max-md:items-center">
                  <div className="min-w-0">
                    <p className="mb-[0.35rem] text-[0.7rem] font-bold tracking-[0.1em] text-accent-strong uppercase">
                      {searchingAll
                        ? 'Search · All topics'
                        : `Topic · ${activeCategory.type}`}
                    </p>
                    <h2 className="m-0 font-display text-[clamp(1.85rem,3.2vw,2.45rem)] leading-[1.05] tracking-[-0.045em] text-ink max-md:text-[clamp(1.55rem,7vw,2rem)]">
                      {searchingAll
                        ? 'Results across topics'
                        : activeCategory.name}
                    </h2>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2 max-md:flex-row max-md:flex-wrap max-md:items-center">
                    <p
                      className="mt-[0.15rem] shrink-0 rounded-[10px] bg-accent-soft px-[0.7rem] py-[0.4rem] text-[0.82rem] font-bold whitespace-nowrap text-result-meta-fg max-md:m-0"
                      aria-live="polite"
                    >
                      <span className="tabular-nums">{visibleCount}</span>
                      {visibleCount === 1 ? ' note' : ' notes'}
                      {normalized ? ' found' : ''}
                      {searchingAll ? ` · ${resultGroups.length} topics` : ''}
                    </p>
                    {panelCategory ? (
                      <CheatSheetExport category={panelCategory} />
                    ) : null}
                  </div>
                </div>
                <p className="mt-2 mb-0 max-w-[44ch] text-muted max-md:max-w-none">
                  {searchingAll
                    ? `Showing matches for “${query.trim()}” in every category.`
                    : activeCategory.blurb}
                </p>
              </div>
            </div>
          </header>

          {resultGroups.length === 0 ? (
            <p className="m-0 px-1 py-5 text-muted">
              Nothing matches “{query.trim()}”{' '}
              {searchAllCategories
                ? 'in any category.'
                : `in ${activeCategory.type}.`}{' '}
              Try another term
              {searchAllCategories ? '.' : ' or enable search all categories.'}
            </p>
          ) : (
            resultGroups.map((group, groupIndex) => (
              <div
                key={group.category.id}
                className="[&+&]:mt-8 [&+&]:border-t [&+&]:border-line [&+&]:pt-6"
              >
                {searchingAll ? (
                  <header className="mb-[1.1rem] flex items-center gap-3">
                    <TopicVisual
                      type={group.category.type}
                      className="h-10 w-10 rounded-[10px]"
                    />
                    <div>
                      <p className="m-0 text-[0.68rem] font-bold tracking-[0.08em] text-accent-strong uppercase">
                        {group.category.type}
                      </p>
                      <h3 className="mt-[0.1rem] mb-0 font-display text-xl font-bold tracking-[-0.03em] text-ink">
                        {group.category.name}
                      </h3>
                    </div>
                  </header>
                ) : null}

                {group.topics.map((topic, topicIndex) => (
                  <section
                    key={`${group.category.id}-${topic.id}`}
                    className="animate-rise [&+&]:mt-8 max-sm:[&+&]:mt-6"
                    style={
                      {
                        animationDelay: `${(groupIndex * 3 + topicIndex) * 40}ms`,
                      } as CSSProperties
                    }
                  >
                    <h3 className="mb-[0.35rem] font-display text-[0.78rem] font-bold tracking-[0.08em] text-muted uppercase">
                      {topic.title}
                    </h3>
                    <ul className="m-0 grid list-none gap-0 p-0">
                      {topic.questions.map((item) => (
                        <li
                          key={item.id}
                          className="border-0 border-b border-note-rule border-l-[3px] border-l-transparent py-[1.05rem] pr-0 pl-4 transition-[border-color,background] duration-200 ease-out-quart last:border-b-0 hover:border-l-accent-strong hover:bg-category-hover max-md:py-[0.95rem] max-md:pl-3"
                        >
                          <h4 className="mb-[0.7rem] font-display text-[1.12rem] leading-snug font-bold tracking-[-0.025em] text-ink [overflow-wrap:anywhere] max-md:text-[1.05rem]">
                            {item.question}
                          </h4>
                          <AnswerNotes lines={item.answer} />
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  )
}
