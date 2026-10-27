import { describe, expect, it } from 'vitest'

import { getCheatSheet } from './cheatSheets'
import { categories } from './questions'

describe('cheatSheets', () => {
  it('has an A4 sheet for every category', () => {
    for (const category of categories) {
      const sheet = getCheatSheet(category.id)
      expect(sheet, category.id).toBeDefined()
      expect(sheet?.sections.length, category.id).toBeGreaterThan(0)
    }
  })
})
