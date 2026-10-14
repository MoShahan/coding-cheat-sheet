import { cn } from '../lib/cn'
import type { Theme } from '../theme'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="relative inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/20 bg-black/35 px-1.5 py-1.5 text-hero-ink backdrop-blur-md transition-[border-color,background] duration-200 ease-out-quart hover:border-sky-300/55 hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong max-md:px-1.5 md:pr-2.5 md:pl-1.5"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <span
        className="relative h-[1.45rem] w-[2.6rem] rounded-lg bg-sky-400/25"
        aria-hidden="true"
      >
        <span
          className={cn(
            'absolute top-1/2 h-[0.7rem] w-[0.7rem] -translate-y-1/2 rounded-full bg-amber-500 shadow-[0_0_0_2px_rgba(245,158,11,0.2)] transition-opacity duration-200',
            'left-[0.28rem]',
            isDark ? 'opacity-40' : 'opacity-100',
          )}
        />
        <span
          className={cn(
            'absolute top-1/2 h-[0.7rem] w-[0.7rem] -translate-y-1/2 rounded-full transition-opacity duration-200',
            'right-[0.28rem]',
            isDark
              ? 'bg-slate-200 opacity-100 shadow-[0_0_0_2px_rgba(226,232,240,0.15)]'
              : 'bg-slate-300 opacity-45',
          )}
        />
      </span>
      <span className="hidden text-[0.78rem] font-bold tracking-wide md:inline">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}
