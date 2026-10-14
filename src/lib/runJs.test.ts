import { describe, expect, it } from 'vitest'

import { runJs } from './runJs'

describe('runJs', () => {
  it('captures console.log output', () => {
    const lines = runJs(`console.log('hi', 2 + 2)`)
    expect(lines.some((line) => line.text.includes('hi 4'))).toBe(true)
  })

  it('captures thrown errors', () => {
    const lines = runJs(`throw new Error('boom')`)
    expect(lines[0]?.kind).toBe('error')
    expect(lines[0]?.text).toMatch(/boom/)
  })
})
