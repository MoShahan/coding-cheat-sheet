import { describe, expect, it } from 'vitest'

import { type Question,sortQuestions } from './questions'

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
