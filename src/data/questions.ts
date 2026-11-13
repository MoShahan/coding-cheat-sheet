import { categoryData } from './questionData'
import {
  countQuestions,
  sortCategoriesByType,
  withSortedQuestions,
} from './questionUtils'

export type { Category, Question, Topic } from './questionUtils'
export {
  answerText,
  countQuestions,
  sortCategoriesByType,
  sortQuestions,
  withSortedQuestions,
} from './questionUtils'

export const categories = sortCategoriesByType(
  withSortedQuestions(categoryData),
)

export function getTotalQuestionCount(): number {
  return categories.reduce((sum, category) => sum + countQuestions(category), 0)
}
