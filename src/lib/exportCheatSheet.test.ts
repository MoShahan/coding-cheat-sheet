import { describe, expect, it } from 'vitest'

import { cheatSheetBasename, packBlockHeights } from './exportCheatSheet'

describe('exportCheatSheet', () => {
  it('packs blocks onto as many pages as they need', () => {
    expect(packBlockHeights([100, 100, 100], 250)).toEqual([
      { indexes: [0, 1], extraHeight: 0 },
      { indexes: [2], extraHeight: 0 },
    ])
  })

  it('gives an oversized block its own taller page', () => {
    expect(packBlockHeights([80, 400, 90], 250)).toEqual([
      { indexes: [0], extraHeight: 0 },
      { indexes: [1], extraHeight: 150 },
      { indexes: [2], extraHeight: 0 },
    ])
  })

  it('builds a file name from the topic type', () => {
    expect(cheatSheetBasename('React')).toBe('react-cheat-sheet')
    expect(cheatSheetBasename('Node.js')).toBe('node-js-cheat-sheet')
  })
})
