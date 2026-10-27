export type Question = {
  id: string
  question: string
  /** Bullet lines only - each can be a short sentence or two, not a paragraph. */
  answer: string[]
  difficulty: 'easy' | 'medium' | 'hard'
}

export type Topic = {
  id: string
  title: string
  questions: Question[]
}

export type Category = {
  id: string
  /** Short type label shown in the nav (JS, TS, React, …). */
  type: string
  /** Full title shown in the content panel. */
  name: string
  blurb: string
  topics: Topic[]
}

const DIFFICULTY_ORDER: Record<Question['difficulty'], number> = {
  easy: 0,
  medium: 1,
  hard: 2,
}

/** Easy → medium → hard, then A-Z by prompt text. */
export function sortQuestions(questions: Question[]): Question[] {
  return [...questions].sort((a, b) => {
    const byDifficulty =
      DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]
    if (byDifficulty !== 0) return byDifficulty
    return a.question.localeCompare(b.question, undefined, {
      sensitivity: 'base',
    })
  })
}

export function answerText(answer: string[]): string {
  return answer.join(' ')
}

export function withSortedQuestions(list: Category[]): Category[] {
  return list.map((category) => ({
    ...category,
    topics: category.topics.map((topic) => ({
      ...topic,
      questions: sortQuestions(topic.questions),
    })),
  }))
}

export function countQuestions(category: Category): number {
  return category.topics.reduce((sum, topic) => sum + topic.questions.length, 0)
}
