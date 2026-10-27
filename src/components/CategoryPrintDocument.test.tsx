import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { categories } from '../data/questions'
import { getAnswerDisplayParts } from '../lib/formatAnswer'

import { CategoryPrintDocument } from './CategoryPrintDocument'

describe('CategoryPrintDocument', () => {
  it('prints every question and answer from the live category', () => {
    const category = categories.find((item) => item.type === 'React')
    expect(category).toBeDefined()
    if (!category) return

    render(<CategoryPrintDocument category={category} />)

    for (const topic of category.topics) {
      expect(screen.getByRole('heading', { name: topic.title })).toBeInTheDocument()
      for (const item of topic.questions) {
        expect(
          screen.getByRole('heading', { name: item.question }),
        ).toBeInTheDocument()
        for (const line of item.answer) {
          for (const part of getAnswerDisplayParts(line)) {
            const text = part.value.replace(/\s+/g, ' ').trim()
            if (text) expect(document.body).toHaveTextContent(text)
          }
        }
      }
    }
  })
})
