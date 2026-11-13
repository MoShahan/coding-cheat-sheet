import { describe, expect, it } from 'vitest'

import {
  categories,
  type Category,
  type Question,
  sortCategoriesByType,
  sortQuestions,
} from './questions'

describe('sortQuestions', () => {
  it('sorts by difficulty then alphabetically', () => {
    const input: Question[] = [
      {
        id: '1',
        question: 'Zebra topic?',
        answer: ['a'],
        difficulty: 'easy',
      },
      {
        id: '2',
        question: 'Alpha topic?',
        answer: ['b'],
        difficulty: 'hard',
      },
      {
        id: '3',
        question: 'Middle topic?',
        answer: ['c'],
        difficulty: 'medium',
      },
      {
        id: '4',
        question: 'Another easy?',
        answer: ['d'],
        difficulty: 'easy',
      },
    ]

    expect(sortQuestions(input).map((item) => item.id)).toEqual([
      '4',
      '1',
      '3',
      '2',
    ])
  })
})

describe('sortCategoriesByType', () => {
  it('sorts by type A-Z regardless of input order', () => {
    const input: Category[] = [
      {
        id: 'react',
        type: 'React',
        name: 'React',
        blurb: '',
        topics: [],
      },
      {
        id: 'html',
        type: 'HTML',
        name: 'HTML',
        blurb: '',
        topics: [],
      },
      {
        id: 'algo',
        type: 'Algo',
        name: 'Algorithms',
        blurb: '',
        topics: [],
      },
    ]

    expect(sortCategoriesByType(input).map((c) => c.type)).toEqual([
      'Algo',
      'HTML',
      'React',
    ])
  })

  it('exports categories already sorted by type', () => {
    const types = categories.map((c) => c.type)
    expect(types).toEqual(
      [...types].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' }),
      ),
    )
  })
})
