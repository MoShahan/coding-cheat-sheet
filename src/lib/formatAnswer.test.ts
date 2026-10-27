import { describe, expect, it } from 'vitest'

import {
  getAnswerDisplayParts,
  isCodeBlock,
  parseAnswerParts,
} from './formatAnswer'

function codes(line: string) {
  return parseAnswerParts(line)
    .filter((part) => part.type === 'code')
    .map((part) => part.value)
}

describe('parseAnswerParts', () => {
  it('keeps unmarked prose as a single text part', () => {
    expect(
      parseAnswerParts('Prefer const by default; use let when the binding must change.'),
    ).toEqual([
      {
        type: 'text',
        value: 'Prefer const by default; use let when the binding must change.',
      },
    ])
    expect(
      parseAnswerParts(
        'Use a real <button> instead of a <div role="button">.',
      ),
    ).toEqual([
      {
        type: 'text',
        value: 'Use a real <button> instead of a <div role="button">.',
      },
    ])
  })

  it('extracts inline backtick snippets', () => {
    expect(parseAnswerParts('Run `npm test` after edits.')).toEqual([
      { type: 'text', value: 'Run ' },
      { type: 'code', value: 'npm test' },
      { type: 'text', value: ' after edits.' },
    ])
    expect(
      codes('Use a real `<button>` instead of a `<div role="button">`.'),
    ).toEqual(['<button>', '<div role="button">'])
  })

  it('extracts fenced blocks and marks them as blocks', () => {
    const line =
      '```\nfunction makeCounter() {\n  let n = 0\n  return () => ++n\n}\n``` each call gets its own `n`.'
    expect(parseAnswerParts(line)).toEqual([
      {
        type: 'code',
        value: 'function makeCounter() {\n  let n = 0\n  return () => ++n\n}',
        block: true,
      },
      { type: 'text', value: ' each call gets its own ' },
      { type: 'code', value: 'n' },
      { type: 'text', value: '.' },
    ])
  })

  it('strips an optional language tag on a fence', () => {
    expect(codes('```js\nconst x = 1\n```')).toEqual(['const x = 1'])
    expect(isCodeBlock(parseAnswerParts('```sql\nSELECT 1\n```')[0]!)).toBe(true)
  })

  it('leaves a lone backtick as text', () => {
    expect(parseAnswerParts('Score was 8.5` out of 10.')).toEqual([
      { type: 'text', value: 'Score was 8.5` out of 10.' },
    ])
  })
})

describe('getAnswerDisplayParts', () => {
  it('is the same as parseAnswerParts', () => {
    const line = 'Keep `package.json` next to the lockfile.'
    expect(getAnswerDisplayParts(line)).toEqual(parseAnswerParts(line))
  })
})
