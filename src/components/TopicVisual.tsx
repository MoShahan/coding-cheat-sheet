type TopicVisualProps = {
  type: string
  className?: string
}

/** Small on-brand mark for each topic type. */
export function TopicVisual({ type, className }: TopicVisualProps) {
  const title = `${type} illustration`

  switch (type) {
    case 'HTML':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dbeafe" />
          <path
            d="M22 20h36l-3 40-15 6-15-6-3-40z"
            fill="#e34f26"
            opacity="0.95"
          />
          <path d="M28 30h24l-1.2 14H40v-5h8.2l.5-6H29.2l.5 6H38v5H29.5L28 30z" fill="#fff" />
        </svg>
      )
    case 'CSS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <path d="M22 20h36l-3 40-15 6-15-6-3-40z" fill="#264de4" />
          <path d="M40 28v36l11-3.5 2.2-24.5H40zm8.5 10.5.4 4.5H40v-4.5h8.5zM40 48.5h4.2l.3 3.2L40 53v4.2l7-1.9.7-7.8H40v-4z" fill="#fff" />
        </svg>
      )
    case 'JS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#f7df1e" />
          <path
            d="M36 52.5c0 4.2 2.5 7.3 6.1 7.3 3.1 0 4.9-1.6 4.9-4.4V36h4.8v19.5c0 6.8-4 10.1-9.8 10.1-5.7 0-10-3.5-10-9.1L36 52.5zm-8.2 6.8c1.1 2 2.8 3.5 5.7 3.5 2.9 0 4.7-1.5 4.7-3.6 0-2.5-1.8-3.4-5-4.4l-1.7-.6c-4.8-1.9-8-4.3-8-9.4 0-4.7 3.6-8.3 9.2-8.3 4 0 6.9 1.4 9 5l-4.9 3.1c-1.1-2-2.3-2.8-4.1-2.8-1.9 0-3.1 1.2-3.1 2.8 0 2 1.3 2.8 4.3 4l1.8.7c5.7 2.3 8.9 4.7 8.9 10 0 5.7-4.5 8.8-10.5 8.8-5.9 0-9.8-2.8-11.7-6.5l5.4-3.2z"
            fill="#323330"
          />
        </svg>
      )
    case 'TS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#3178c6" />
          <path
            d="M37.5 42h5V36H24v6h5v22h8.5V42zm14.2 22.5c-5.3 0-9.2-2.5-11.2-6.2l5.5-3.2c1.1 2 2.7 3.2 5.2 3.2 2.1 0 3.5-.9 3.5-2.3 0-1.7-1.2-2.4-4.4-3.4l-2.3-.8c-5.1-1.7-8.5-4.4-8.5-9.3 0-4.8 3.9-8.3 9.5-8.3 4.2 0 7.3 1.4 9.6 4.8l-5.2 3.3c-1.1-1.8-2.5-2.6-4.4-2.6-1.8 0-3 .9-3 2.2 0 1.5 1.1 2.3 3.9 3.2l2.3.8c5.9 2 9.3 4.6 9.3 9.7 0 5.5-4.3 8.9-10.8 8.9z"
            fill="#fff"
          />
        </svg>
      )
    case 'React':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#0b1220" />
          <ellipse cx="40" cy="40" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" />
          <ellipse
            cx="40"
            cy="40"
            rx="22"
            ry="9"
            fill="none"
            stroke="#61dafb"
            strokeWidth="3"
            transform="rotate(60 40 40)"
          />
          <ellipse
            cx="40"
            cy="40"
            rx="22"
            ry="9"
            fill="none"
            stroke="#61dafb"
            strokeWidth="3"
            transform="rotate(-60 40 40)"
          />
          <circle cx="40" cy="40" r="4" fill="#61dafb" />
        </svg>
      )
    case 'RN':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ecfeff" />
          <rect x="28" y="14" width="24" height="52" rx="5" fill="none" stroke="#0e7490" strokeWidth="3" />
          <rect x="36" y="18" width="8" height="3" rx="1.5" fill="#0e7490" />
          <ellipse cx="40" cy="42" rx="14" ry="5.5" fill="none" stroke="#0891b2" strokeWidth="2.2" />
          <ellipse
            cx="40"
            cy="42"
            rx="14"
            ry="5.5"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2.2"
            transform="rotate(60 40 42)"
          />
          <ellipse
            cx="40"
            cy="42"
            rx="14"
            ry="5.5"
            fill="none"
            stroke="#0e7490"
            strokeWidth="2.2"
            transform="rotate(-60 40 42)"
          />
          <circle cx="40" cy="42" r="2.5" fill="#0e7490" />
        </svg>
      )
    case 'Flutter':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <path d="M48 14L18 44h18l18-18-6-12z" fill="#027DFD" />
          <path d="M48 38L36 50l12 12 18-18-18-6z" fill="#0256C7" />
          <path d="M36 50l12 12v-12H36z" fill="#45D1FD" opacity="0.9" />
        </svg>
      )
    case 'Vue':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dcfce7" />
          <path d="M16 22h16l8 14 8-14h16L40 62 16 22z" fill="#41b883" />
          <path d="M28 22h12l8 14 8-14h12L40 54 28 22z" fill="#35495e" />
        </svg>
      )
    case 'Angular':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <path d="M40 12l24 8.5-3.8 38.5L40 70 19.8 59 16 20.5 40 12z" fill="#dd0031" />
          <path d="M40 16.5l18.5 6.5-2.8 29.5L40 62.5V16.5z" fill="#c3002f" />
          <path d="M40 28l-9.5 22h5.2l1.9-4.8h8.8l1.9 4.8H54L40 28zm0 7.2 3.2 7.8h-6.4L40 35.2z" fill="#fff" />
        </svg>
      )
    case 'DOM':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#f1f5f9" />
          <rect x="18" y="16" width="44" height="14" rx="4" fill="#334155" />
          <path d="M40 30v8" stroke="#94a3b8" strokeWidth="3" />
          <rect x="16" y="38" width="22" height="12" rx="3" fill="#2563eb" />
          <rect x="42" y="38" width="22" height="12" rx="3" fill="#64748b" />
          <path d="M27 50v8M53 50v8" stroke="#94a3b8" strokeWidth="3" />
          <rect x="16" y="58" width="22" height="10" rx="3" fill="#94a3b8" />
          <rect x="42" y="58" width="22" height="10" rx="3" fill="#cbd5e1" />
        </svg>
      )
    case 'State':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ede9fe" />
          <circle cx="40" cy="40" r="10" fill="#7c3aed" />
          <circle cx="40" cy="18" r="6" fill="#a78bfa" />
          <circle cx="58" cy="52" r="6" fill="#8b5cf6" />
          <circle cx="22" cy="52" r="6" fill="#8b5cf6" />
          <path
            d="M40 28v2M48 46l-2-1.2M32 46l2-1.2"
            stroke="#c4b5fd"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'Perf':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ffedd5" />
          <path
            d="M20 52a20 20 0 1140 0"
            fill="none"
            stroke="#ea580c"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M40 52l14-16" stroke="#c2410c" strokeWidth="4" strokeLinecap="round" />
          <circle cx="40" cy="52" r="4" fill="#9a3412" />
        </svg>
      )
    case 'Network':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <circle cx="40" cy="40" r="18" fill="none" stroke="#0284c7" strokeWidth="3" />
          <ellipse cx="40" cy="40" rx="8" ry="18" fill="none" stroke="#0ea5e9" strokeWidth="3" />
          <path d="M22 40h36M24 30h32M24 50h32" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'Node':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dcfce7" />
          <path
            d="M40 14l22 12.5v27L40 66 18 53.5v-27L40 14z"
            fill="#339933"
          />
          <path
            d="M40 22l13 7.5v16L40 53 27 45.5v-16L40 22z"
            fill="#dcfce7"
          />
          <path d="M40 30v20l8-4.5V34.5L40 30z" fill="#339933" />
        </svg>
      )
    case 'Backend':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e2e8f0" />
          <ellipse cx="40" cy="24" rx="20" ry="8" fill="#334155" />
          <path d="M20 24v12c0 4.4 9 8 20 8s20-3.6 20-8V24" fill="#475569" />
          <path d="M20 36v12c0 4.4 9 8 20 8s20-3.6 20-8V36" fill="#64748b" />
          <path d="M20 48v10c0 4.4 9 8 20 8s20-3.6 20-8V48" fill="#94a3b8" />
        </svg>
      )
    case 'Express':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e2e8f0" />
          <path
            d="M18 42c8-10 14-14 22-14 6 0 10 3 10 8 0 5-4 8-12 12l-6 3c-7 3.5-11 7-11 13h28"
            fill="none"
            stroke="#0f172a"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52 28v28M52 42h12"
            fill="none"
            stroke="#0f172a"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'Nest':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <path
            d="M40 16c8 8 18 14 18 28 0 12-8 22-18 26-10-4-18-14-18-26 0-14 10-20 18-28z"
            fill="#e0234e"
          />
          <path
            d="M40 28c4 5 10 9 10 16 0 7-4.5 12.5-10 15-5.5-2.5-10-8-10-15 0-7 6-11 10-16z"
            fill="#fff1f2"
          />
          <circle cx="40" cy="44" r="4" fill="#e0234e" />
        </svg>
      )
    case 'Next':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#0f172a" />
          <circle cx="40" cy="40" r="22" fill="#fff" />
          <path d="M34 28h6.5v16.2L52 52h-7.2L34 44.5V28z" fill="#0f172a" />
          <path d="M46 28h6v24h-6V28z" fill="#0f172a" opacity="0.35" />
        </svg>
      )
    case 'Mongo':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dcfce7" />
          <path d="M40 14c0 22 12 30 12 46 0 7-5 12-12 12s-12-5-12-12c0-16 12-24 12-46z" fill="#10b981" />
          <path d="M40 14c0 22-8 28-10 40 4 2 8 4 10 12 2-8 6-10 10-12-2-12-10-18-10-40z" fill="#059669" />
          <rect x="38" y="52" width="4" height="14" rx="2" fill="#14532d" />
        </svg>
      )
    case 'SQL':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <rect x="16" y="18" width="48" height="44" rx="6" fill="#0284c7" />
          <rect x="16" y="18" width="48" height="12" rx="6" fill="#0369a1" />
          <rect x="22" y="38" width="14" height="5" rx="1.5" fill="#e0f2fe" />
          <rect x="40" y="38" width="18" height="5" rx="1.5" fill="#bae6fd" />
          <rect x="22" y="48" width="14" height="5" rx="1.5" fill="#e0f2fe" />
          <rect x="40" y="48" width="18" height="5" rx="1.5" fill="#bae6fd" />
        </svg>
      )
    case 'Postgres':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dbeafe" />
          <ellipse cx="40" cy="42" rx="18" ry="22" fill="#336791" />
          <ellipse cx="40" cy="28" rx="14" ry="10" fill="#3e7aa3" />
          <path d="M28 34c0 8 4 18 12 26 8-8 12-18 12-26" fill="none" stroke="#1e3a5f" strokeWidth="3" />
          <circle cx="33" cy="30" r="2.5" fill="#fff" />
          <circle cx="47" cy="30" r="2.5" fill="#fff" />
          <path d="M40 38v16" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 'Prisma':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ccfbf1" />
          <path d="M28 58V22l24 14-10 6 14 16-28 0z" fill="#0f766e" />
          <path d="M28 22l24 14-10 6-14-20z" fill="#14b8a6" />
        </svg>
      )
    case 'Drizzle':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fef9c3" />
          <path d="M32 18c0 14-10 18-10 28a10 10 0 0020 0c0-10-10-14-10-28z" fill="#ca8a04" />
          <path d="M50 24c0 12-8 16-8 24a8 8 0 0016 0c0-8-8-12-8-24z" fill="#eab308" />
        </svg>
      )
    case 'Python':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fef3c7" />
          <path
            d="M40 16c-10 0-12 4.5-12 10v7h12v2H24c-7 0-12 4-12 13s5 13 12 13h5v-7c0-6 5-11 12-11h12c6 0 10-3 10-9V26c0-6-5-10-13-10H40zm-5.5 6.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
            fill="#3776ab"
          />
          <path
            d="M40 64c10 0 12-4.5 12-10v-7H40v-2h16c7 0 12-4 12-13s-5-13-12-13h-5v7c0 6-5 11-12 11H27c-6 0-10 3-10 9v7c0 6 5 10 13 10H40zm5.5-6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
            fill="#ffd43b"
          />
        </svg>
      )
    case 'Django':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#0c4b33" />
          <path
            d="M30 22h10c8 0 13 4 13 12.5S48 47 40 47h-4v15h-6V22zm6 6v13h3.5c4.5 0 7-2 7-6.5S44 28 39.5 28H36zM48 36h6v26h-6V36z"
            fill="#fff"
          />
        </svg>
      )
    case 'Flask':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#f3f4f6" />
          <path
            d="M34 16h12l-2 18 10 22c2 4 1 10-6 12H36c-7-2-8-8-6-12l10-22-2-18z"
            fill="#1f2937"
          />
          <path d="M32 56c4 6 12 6 16 0-2 10-14 10-16 0z" fill="#9ca3af" />
          <rect x="30" y="14" width="20" height="6" rx="2" fill="#374151" />
        </svg>
      )
    case 'Rails':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <path
            d="M40 14l18 10v12c0 14-8 24-18 30-10-6-18-16-18-30V24l18-10z"
            fill="#cc0000"
          />
          <path d="M40 24l10 6v8c0 8-4 14-10 18-6-4-10-10-10-18v-8l10-6z" fill="#fff" opacity="0.9" />
        </svg>
      )
    case 'Rust':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ffedd5" />
          <circle cx="40" cy="40" r="16" fill="none" stroke="#c2410c" strokeWidth="4" />
          <circle cx="40" cy="40" r="7" fill="#c2410c" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect
              key={deg}
              x="37"
              y="14"
              width="6"
              height="10"
              rx="2"
              fill="#c2410c"
              transform={`rotate(${deg} 40 40)`}
            />
          ))}
        </svg>
      )
    case 'Go':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <ellipse cx="40" cy="42" rx="24" ry="16" fill="#00add8" />
          <ellipse cx="28" cy="38" rx="4" ry="5" fill="#fff" />
          <ellipse cx="48" cy="38" rx="4" ry="5" fill="#fff" />
          <circle cx="29" cy="39" r="2" fill="#0f172a" />
          <circle cx="49" cy="39" r="2" fill="#0f172a" />
          <path d="M34 48c2 2 10 2 12 0" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 34c2-8 8-12 14-10M62 34c-2-8-8-12-14-10" fill="none" stroke="#00add8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    case 'C#':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ede9fe" />
          <path
            d="M40 16l20 11.5v25L40 64 20 52.5v-25L40 16z"
            fill="#68217a"
          />
          <path
            d="M40 26c-8 0-12 5-12 14s4 14 12 14c5 0 9-2 11-6l-5-3c-1 2-3 3-6 3-4 0-6-3-6-8s2-8 6-8c3 0 5 1 6 3l5-3c-2-4-6-6-11-6z"
            fill="#fff"
          />
          <path
            d="M54 36v4h-4v4h4v4h4v-4h4v-4h-4v-4h-4zm0 12v4h-4v4h4v4h4v-4h4v-4h-4v-4h-4z"
            fill="#fff"
          />
        </svg>
      )
    case 'ASP':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0e7ff" />
          <path
            d="M18 40c8-16 18-22 28-16 6 3 8 10 6 16-2 8-8 12-16 10"
            fill="none"
            stroke="#512bd4"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M62 40c-8 16-18 22-28 16-6-3-8-10-6-16 2-8 8-12 16-10"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'VB':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dbeafe" />
          <rect x="18" y="22" width="44" height="36" rx="4" fill="#00539c" />
          <path d="M26 30l6 20h6l6-20h-6l-3 12-3-12h-6zm20 0v20h14v-5H52v-3h7v-4h-7v-3h8v-5H46z" fill="#fff" />
        </svg>
      )
    case 'Algo':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ede9fe" />
          <rect x="18" y="48" width="10" height="16" rx="2" fill="#8b5cf6" />
          <rect x="32" y="36" width="10" height="28" rx="2" fill="#7c3aed" />
          <rect x="46" y="24" width="10" height="40" rx="2" fill="#6d28d9" />
          <rect x="60" y="30" width="10" height="34" rx="2" fill="#a78bfa" />
        </svg>
      )
    case 'DS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0e7ff" />
          <circle cx="40" cy="20" r="7" fill="#4338ca" />
          <circle cx="24" cy="42" r="7" fill="#6366f1" />
          <circle cx="56" cy="42" r="7" fill="#6366f1" />
          <circle cx="16" cy="64" r="6" fill="#818cf8" />
          <circle cx="32" cy="64" r="6" fill="#818cf8" />
          <circle cx="48" cy="64" r="6" fill="#818cf8" />
          <circle cx="64" cy="64" r="6" fill="#818cf8" />
          <path
            d="M40 27v8M33 36l-5 4M47 36l5 4M24 49v8M20 52l-2 6M56 49v8M52 52l-2 6M60 52l2 6"
            stroke="#a5b4fc"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'DSA':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ffe4e6" />
          <rect x="16" y="46" width="8" height="18" rx="2" fill="#fb7185" />
          <rect x="28" y="34" width="8" height="30" rx="2" fill="#f43f5e" />
          <rect x="40" y="22" width="8" height="42" rx="2" fill="#e11d48" />
          <circle cx="60" cy="28" r="6" fill="#9f1239" />
          <circle cx="52" cy="48" r="5" fill="#be123c" />
          <circle cx="66" cy="52" r="5" fill="#be123c" />
          <path d="M60 34v8M56 45l-2 2M64 45l2 2" stroke="#fda4af" strokeWidth="2.5" />
        </svg>
      )
    case 'Redis':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <path d="M40 18l22 10-22 10L18 28 40 18z" fill="#dc382d" />
          <path d="M18 32l22 10 22-10v8L40 50 18 40v-8z" fill="#a41e11" />
          <path d="M18 44l22 10 22-10v8L40 62 18 52v-8z" fill="#dc382d" />
          <path d="M40 28l10-4-10 14-10-14 10 4z" fill="#fff" opacity="0.35" />
        </svg>
      )
    case 'Files':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ffedd5" />
          <path d="M22 34h36l-6 24H28L22 34z" fill="#ea580c" />
          <path d="M28 28h16l4 6h16v6H22v-6h6z" fill="#c2410c" />
        </svg>
      )
    case 'Testing':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dcfce7" />
          <circle cx="40" cy="40" r="20" fill="#16a34a" />
          <path
            d="M28 41l8 8 16-18"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'Tooling':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#f1f5f9" />
          <path
            d="M48 18a14 14 0 00-12 22l-14 14a6 6 0 008.5 8.5l14-14A14 14 0 1048 18zm0 8a6 6 0 110 12 6 6 0 010-12z"
            fill="#334155"
          />
          <path
            d="M22 54l8 8"
            stroke="#64748b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dbeafe" />
          <rect x="22" y="20" width="36" height="40" rx="6" fill="#1d4ed8" />
          <rect x="28" y="28" width="24" height="3" rx="1.5" fill="#93c5fd" />
          <rect x="28" y="36" width="18" height="3" rx="1.5" fill="#93c5fd" />
          <rect x="28" y="44" width="22" height="3" rx="1.5" fill="#93c5fd" />
        </svg>
      )
  }
}
