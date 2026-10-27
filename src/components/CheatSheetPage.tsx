import type { CheatSheet } from '../data/cheatSheets'
import type { Category } from '../data/questions'

import { TopicVisual } from './TopicVisual'

type CheatSheetPageProps = {
  category: Category
  sheet: CheatSheet
}

/** Fixed A4 print page. Hex colors only so html-to-image stays reliable. */
export function CheatSheetPage({ category, sheet }: CheatSheetPageProps) {
  return (
    <article
      data-cheat-sheet
      style={{
        boxSizing: 'border-box',
        width: '210mm',
        height: '297mm',
        padding: '11mm 12mm 10mm',
        background: '#f4f7fb',
        color: '#101820',
        fontFamily: 'Figtree, ui-sans-serif, system-ui, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '12px',
          paddingBottom: '9px',
          marginBottom: '10px',
          borderBottom: '2px solid #2563eb',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <TopicVisual
            type={category.type}
            className="h-12 w-12 shrink-0 rounded-[12px]"
          />
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#2563eb',
              }}
            >
              Coding Cheat Sheet · A4
            </p>
            <h1
              style={{
                margin: '2px 0 0',
                fontFamily: 'Bricolage Grotesque, Figtree, sans-serif',
                fontSize: '26px',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                fontWeight: 800,
              }}
            >
              {category.name}
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#5f6b7a' }}>
              {sheet.tagline}
            </p>
          </div>
        </div>
        <span
          style={{
            flexShrink: 0,
            borderRadius: '8px',
            background: '#dbeafe',
            color: '#1e3a8a',
            fontSize: '10px',
            fontWeight: 700,
            padding: '5px 8px',
            letterSpacing: '0.04em',
          }}
        >
          {category.type}
        </span>
      </header>

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridAutoRows: 'min-content',
          gap: '8px 14px',
          alignContent: 'start',
          minHeight: 0,
        }}
      >
        {sheet.sections.map((section) => (
          <section
            key={section.title}
            style={{
              breakInside: 'avoid',
              background: '#ffffff',
              border: '1px solid rgba(16, 24, 32, 0.08)',
              borderRadius: '10px',
              padding: '8px 10px 9px',
            }}
          >
            <h2
              style={{
                margin: '0 0 6px',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#2563eb',
              }}
            >
              {section.title}
            </h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {section.items.map((item) => (
                <li
                  key={item.term}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1px',
                    padding: '3.5px 0',
                    borderTop: '1px solid rgba(16, 24, 32, 0.06)',
                    fontSize: '11px',
                    lineHeight: 1.35,
                  }}
                >
                  <span style={{ fontWeight: 700, color: '#101820' }}>
                    {item.term}
                  </span>
                  {item.note ? (
                    <span style={{ color: '#3d4a59' }}>{item.note}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer
        style={{
          marginTop: '8px',
          paddingTop: '6px',
          borderTop: '1px solid rgba(16, 24, 32, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '9px',
          color: '#5f6b7a',
          fontWeight: 600,
          letterSpacing: '0.04em',
        }}
      >
        <span>coding cheat sheet · interview pocket card</span>
        <span>one A4 · {category.type}</span>
      </footer>
    </article>
  )
}
