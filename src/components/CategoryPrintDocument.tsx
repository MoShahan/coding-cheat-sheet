import { type CSSProperties } from 'react'

import { type Category, countQuestions } from '../data/questions'
import { getAnswerDisplayParts, isCodeBlock } from '../lib/formatAnswer'

import { TopicVisual } from './TopicVisual'

type CategoryPrintDocumentProps = {
  category: Category
}

const avoidBreak: CSSProperties = {
  breakInside: 'avoid',
}

export function CategoryPrintDocument({ category }: CategoryPrintDocumentProps) {
  return (
    <article
      data-print-document
      style={{
        boxSizing: 'border-box',
        width: '746px',
        background: '#f4f7fb',
        color: '#101820',
        fontFamily: 'Figtree, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <header
        data-print-block
        style={{
          ...avoidBreak,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '4px 0 14px',
          marginBottom: '8px',
          borderBottom: '2px solid #2563eb',
        }}
      >
        <TopicVisual
          type={category.type}
          className="h-12 w-12 shrink-0 rounded-[12px]"
        />
        <div style={{ minWidth: 0, flex: 1 }}>
          <p
            style={{
              margin: 0,
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#2563eb',
            }}
          >
            Coding Cheat Sheet
          </p>
          <h1
            style={{
              margin: '2px 0 0',
              fontFamily: 'Bricolage Grotesque, Figtree, sans-serif',
              fontSize: '28px',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              fontWeight: 800,
            }}
          >
            {category.name}
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: '15px', color: '#5f6b7a' }}>
            {category.blurb}
          </p>
        </div>
        <span
          style={{
            flexShrink: 0,
            borderRadius: '8px',
            background: '#dbeafe',
            color: '#1e3a8a',
            fontSize: '12px',
            fontWeight: 700,
            padding: '5px 8px',
          }}
        >
          {countQuestions(category)} notes
        </span>
      </header>

      {category.topics.map((topic) => (
        <section key={topic.id}>
          <h2
            data-print-block
            style={{
              ...avoidBreak,
              margin: '16px 0 8px',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2563eb',
            }}
          >
            {topic.title}
          </h2>
          {topic.questions.map((item) => (
            <div
              key={item.id}
              data-print-block
              style={{
                ...avoidBreak,
                background: '#ffffff',
                border: '1px solid rgba(16, 24, 32, 0.1)',
                borderLeft: '3px solid #2563eb',
                borderRadius: '10px',
                padding: '14px 16px 15px',
                marginBottom: '10px',
              }}
            >
              <h3
                style={{
                  margin: '0 0 10px',
                  fontFamily: 'Bricolage Grotesque, Figtree, sans-serif',
                  fontSize: '18px',
                  lineHeight: 1.35,
                  letterSpacing: '-0.025em',
                  fontWeight: 700,
                  color: '#101820',
                  overflowWrap: 'anywhere',
                }}
              >
                {item.question}
              </h3>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                {item.answer.map((line) => (
                  <li
                    key={line}
                    style={{
                      position: 'relative',
                      padding: '0 0 7px 15px',
                      fontSize: '16px',
                      lineHeight: 1.45,
                      color: '#2a3441',
                      overflowWrap: 'anywhere',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.58em',
                        width: '5px',
                        height: '5px',
                        borderRadius: '1px',
                        background: '#2563eb',
                      }}
                    />
                    {getAnswerDisplayParts(line).map((part, index) => {
                      if (part.type !== 'code') {
                        return (
                          <span key={`${part.value}-${index}`}>{part.value}</span>
                        )
                      }
                      const block = isCodeBlock(part)
                      return (
                        <code
                          key={`${part.value}-${index}`}
                          style={{
                            display: block ? 'block' : 'inline',
                            margin: block ? '6px 0' : 0,
                            padding: block ? '8px 10px' : '1px 5px',
                            borderRadius: block ? '8px' : '4px',
                            background: '#e4ebf4',
                            color: '#16324f',
                            fontFamily:
                              'IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                            fontSize: block ? '13px' : '0.86em',
                            fontWeight: 500,
                            lineHeight: 1.55,
                            whiteSpace: 'pre-wrap',
                            overflowWrap: 'break-word',
                            wordBreak: 'normal',
                            tabSize: 2,
                          }}
                        >
                          {part.value}
                        </code>
                      )
                    })}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </article>
  )
}
