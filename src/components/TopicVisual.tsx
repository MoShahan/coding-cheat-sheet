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
            fill="#1d4ed8"
            opacity="0.9"
          />
          <path d="M28 30h24l-1.2 14H40v-5h8.2l.5-6H29.2l.5 6H38v5H29.5L28 30z" fill="#eff6ff" />
        </svg>
      )
    case 'CSS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <circle cx="28" cy="30" r="10" fill="#0ea5e9" />
          <circle cx="52" cy="34" r="12" fill="#0284c7" opacity="0.85" />
          <rect x="18" y="52" width="44" height="10" rx="5" fill="#0369a1" />
        </svg>
      )
    case 'JS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fef3c7" />
          <text
            x="40"
            y="52"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="28"
            fontWeight="700"
            fill="#92400e"
          >
            {'{}'}
          </text>
        </svg>
      )
    case 'TS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dbeafe" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="26"
            fontWeight="700"
            fill="#1d4ed8"
          >
            TS
          </text>
        </svg>
      )
    case 'React':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#eff6ff" />
          <ellipse cx="40" cy="40" rx="22" ry="9" fill="none" stroke="#2563eb" strokeWidth="3" />
          <ellipse
            cx="40"
            cy="40"
            rx="22"
            ry="9"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            transform="rotate(60 40 40)"
          />
          <ellipse
            cx="40"
            cy="40"
            rx="22"
            ry="9"
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="3"
            transform="rotate(-60 40 40)"
          />
          <circle cx="40" cy="40" r="4" fill="#1d4ed8" />
        </svg>
      )
    case 'RN':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ecfeff" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#0e7490"
          >
            RN
          </text>
        </svg>
      )
    case 'Flutter':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#0369a1"
          >
            Fl
          </text>
        </svg>
      )
    case 'Vue':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dcfce7" />
          <path d="M16 22h16l8 14 8-14h16L40 62 16 22z" fill="#166534" opacity="0.35" />
          <path d="M28 22h12l8 14 8-14h12L40 54 28 22z" fill="#16a34a" />
        </svg>
      )
    case 'Angular':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <path d="M40 14l22 8-4 36-18 10-18-10-4-36 22-8z" fill="#dc2626" />
          <text
            x="40"
            y="48"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#fff7f7"
          >
            A
          </text>
        </svg>
      )
    case 'DOM':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#f1f5f9" />
          <rect x="18" y="18" width="44" height="14" rx="4" fill="#334155" />
          <rect x="24" y="40" width="20" height="10" rx="3" fill="#2563eb" />
          <rect x="48" y="40" width="14" height="10" rx="3" fill="#64748b" />
          <rect x="24" y="56" width="32" height="10" rx="3" fill="#94a3b8" />
        </svg>
      )
    case 'Node':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dcfce7" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#15803d"
          >
            JS
          </text>
        </svg>
      )
    case 'Backend':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e2e8f0" />
          <rect x="18" y="20" width="44" height="10" rx="3" fill="#334155" />
          <rect x="18" y="35" width="44" height="10" rx="3" fill="#475569" />
          <rect x="18" y="50" width="44" height="10" rx="3" fill="#64748b" />
        </svg>
      )
    case 'Express':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e2e8f0" />
          <text
            x="40"
            y="48"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="18"
            fontWeight="700"
            fill="#0f172a"
          >
            ex
          </text>
        </svg>
      )
    case 'Nest':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <circle cx="40" cy="40" r="16" fill="none" stroke="#e11d48" strokeWidth="4" />
          <circle cx="40" cy="40" r="5" fill="#e11d48" />
        </svg>
      )
    case 'Next':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#0f172a" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#f8fafc"
          >
            N
          </text>
        </svg>
      )
    case 'Mongo':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dcfce7" />
          <path d="M40 16c0 20 10 28 10 44 0 6-4 10-10 10s-10-4-10-10c0-16 10-24 10-44z" fill="#16a34a" />
          <rect x="38" y="48" width="4" height="16" rx="2" fill="#14532d" />
        </svg>
      )
    case 'SQL':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <rect x="18" y="20" width="44" height="40" rx="6" fill="#0284c7" />
          <rect x="18" y="20" width="44" height="10" rx="6" fill="#0369a1" />
          <rect x="24" y="36" width="12" height="4" rx="1.5" fill="#e0f2fe" />
          <rect x="40" y="36" width="16" height="4" rx="1.5" fill="#bae6fd" />
          <rect x="24" y="44" width="12" height="4" rx="1.5" fill="#e0f2fe" />
          <rect x="40" y="44" width="16" height="4" rx="1.5" fill="#bae6fd" />
          <rect x="24" y="52" width="12" height="4" rx="1.5" fill="#e0f2fe" />
          <rect x="40" y="52" width="16" height="4" rx="1.5" fill="#bae6fd" />
        </svg>
      )
    case 'Postgres':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#dbeafe" />
          <ellipse cx="40" cy="28" rx="16" ry="8" fill="#1d4ed8" />
          <path d="M24 28v20c0 6 7 10 16 10s16-4 16-10V28" fill="none" stroke="#1d4ed8" strokeWidth="4" />
          <ellipse cx="40" cy="48" rx="16" ry="8" fill="none" stroke="#1d4ed8" strokeWidth="4" />
        </svg>
      )
    case 'Prisma':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ccfbf1" />
          <path d="M28 58V22l24 14-10 6 14 16-28-0z" fill="#0f766e" />
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
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#ca8a04"
          >
            py
          </text>
        </svg>
      )
    case 'Django':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#d1fae5" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#047857"
          >
            dj
          </text>
        </svg>
      )
    case 'Flask':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#f3f4f6" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#374151"
          >
            fl
          </text>
        </svg>
      )
    case 'Rails':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#b91c1c"
          >
            RoR
          </text>
        </svg>
      )
    case 'Rust':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ffedd5" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#c2410c"
          >
            rs
          </text>
        </svg>
      )
    case 'Go':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0f2fe" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#0369a1"
          >
            Go
          </text>
        </svg>
      )
    case 'Algo':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ede9fe" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="20"
            fontWeight="700"
            fill="#6d28d9"
          >
            O(n)
          </text>
        </svg>
      )
    case 'DS':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#e0e7ff" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#3730a3"
          >
            DS
          </text>
        </svg>
      )
    case 'DSA':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#ffe4e6" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="18"
            fontWeight="700"
            fill="#9f1239"
          >
            DSA
          </text>
        </svg>
      )
    case 'Redis':
      return (
        <svg className={className} viewBox="0 0 80 80" role="img" aria-label={title}>
          <rect width="80" height="80" rx="20" fill="#fee2e2" />
          <text
            x="40"
            y="50"
            textAnchor="middle"
            fontFamily="Bricolage Grotesque, sans-serif"
            fontSize="16"
            fontWeight="700"
            fill="#b91c1c"
          >
            Rd
          </text>
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
