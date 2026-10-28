function scrollToTop() {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? 'auto' : 'smooth',
  })
}

export function ScrollToTopButton() {
  return (
    <button
      type="button"
      className="fixed right-[max(0.7rem,env(safe-area-inset-right))] bottom-[max(0.7rem,env(safe-area-inset-bottom))] z-30 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#101820] shadow-[0_6px_18px_rgba(16,24,32,0.28)] transition-[transform,box-shadow] duration-200 ease-out-quart hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(16,24,32,0.34)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong print:hidden md:h-10 md:w-10 dark:border-white/15 dark:bg-[#eef2f6]"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 12.5V3.5M8 3.5L3.75 7.75M8 3.5l4.25 4.25"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
