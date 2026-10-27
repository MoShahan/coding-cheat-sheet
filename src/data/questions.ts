import { categoryData } from './questionData'
import { countQuestions, withSortedQuestions } from './questionUtils'

export type { Category, Question, Topic } from './questionUtils'
export {
  answerText,
  countQuestions,
  sortQuestions,
  withSortedQuestions,
} from './questionUtils'

export const categories = withSortedQuestions(categoryData)

export function getTotalQuestionCount(): number {
  return categories.reduce((sum, category) => sum + countQuestions(category), 0)
}
