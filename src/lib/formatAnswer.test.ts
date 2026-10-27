import { describe, expect, it } from 'vitest'

import {
  formatCodeForDisplay,
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
  it('keeps plain prose as a single text part', () => {
    expect(parseAnswerParts('Prefer const by default; use let when the binding must change.')).toEqual(
      [
        {
          type: 'text',
          value: 'Prefer const by default; use let when the binding must change.',
        },
      ],
    )
    expect(
      parseAnswerParts(
        'SQL (Structured Query Language) is how you talk to a relational database: create tables, read and write rows, join them, and enforce keys.',
      ),
    ).toEqual([
      {
        type: 'text',
        value:
          'SQL (Structured Query Language) is how you talk to a relational database: create tables, read and write rows, join them, and enforce keys.',
      },
    ])
  })

  it('extracts JavaScript function snippets', () => {
    const line =
      'function makeCounter() { let n = 0; return () => ++n } - each call to makeCounter() gets its own n.'
    expect(codes(line)[0]).toContain('function makeCounter()')
    expect(codes(line).some((code) => code.includes('makeCounter()'))).toBe(true)
  })

  it('extracts SQL statements without wrapping the word SELECT in prose', () => {
    const line =
      'SELECT reads rows: SELECT id, name FROM users WHERE age > 18 ORDER BY name.'
    const found = codes(line)
    expect(found.some((code) => code.startsWith('SELECT id, name FROM users'))).toBe(
      true,
    )
    expect(found.some((code) => code === 'SELECT')).toBe(false)
  })

  it('formats HTML tags as code', () => {
    expect(codes('Use a real <button> instead of a <div role="button">.')).toEqual(
      expect.arrayContaining(['<button>', '<div role="button">']),
    )
  })

  it('formats method chains and package files', () => {
    expect(codes('prisma.user.findMany({ where: { city } }) and package.json')).toEqual(
      expect.arrayContaining([
        'prisma.user.findMany({ where: { city } })',
        'package.json',
      ]),
    )
    expect(codes('Edit settings.py, Gemfile.lock, or go.mod.')).toEqual(
      expect.arrayContaining(['settings.py', 'Gemfile.lock', 'go.mod']),
    )
  })

  it('honors backtick-wrapped snippets', () => {
    expect(codes('Run `npm test` after edits.')).toEqual(['npm test'])
  })

  it('does not treat English parentheticals as function calls', () => {
    expect(
      codes(
        '<nav> is a block of major links (site menu, table of contents) - not every list.',
      ),
    ).toEqual(['<nav>'])
  })

  it('does not swallow the English sentence after Big-O notation', () => {
    const line =
      'Time O(log n) , extra space O(1) iterative (O(log n) stack if recursive). The array must be sorted in the same order you compare.'
    expect(codes(line)).toEqual(['O(log n)', 'O(1)', 'O(log n)'])
    expect(parseAnswerParts(line).some((part) => part.value.includes('The array'))).toBe(
      true,
    )
  })

  it('stops a short assignment before the English explanation', () => {
    const line =
      'var x = 1 is hoisted as x = undefined, then assigned 1 later.'
    expect(codes(line)[0]).toBe('var x = 1')
    expect(codes(line).some((code) => code.includes('hoisted'))).toBe(false)
  })

  it('does not treat “if” in English as a JavaScript if-statement', () => {
    const line =
      'Still O(log n) if values are unique. Duplicates like `[2, 2, 2, 1, 2]` can force you to shrink one side and go O(n) worst case.'
    expect(codes(line)).toEqual(['O(log n)', '[2, 2, 2, 1, 2]', 'O(n)'])
  })

  it('stops a SQL statement at the next English sentence', () => {
    expect(
      codes('UPDATE users SET age = 37 WHERE id = 1. Always include WHERE.'),
    ).toEqual(['UPDATE users SET age = 37 WHERE id = 1'])
  })
})

describe('isCodeBlock', () => {
  it('uses a block for longer statements', () => {
    expect(isCodeBlock('SELECT id, name FROM users WHERE age > 18')).toBe(true)
    expect(isCodeBlock('<button>')).toBe(false)
  })
})

describe('formatCodeForDisplay', () => {
  it('pretty-prints one-line functions onto separate lines', () => {
    expect(
      formatCodeForDisplay(
        'function makeCounter() { let n = 0; return () => ++n }',
      ),
    ).toBe('function makeCounter() {\n  let n = 0;\n  return () => ++n\n}')
  })

  it('keeps an arrow function after return ()', () => {
    expect(
      codes(
        'function makeCounter() { let n = 0; return () => ++n } - each call.',
      )[0],
    ).toContain('return () => ++n')
  })

  it('keeps a second const statement after a fetch', () => {
    expect(
      codes('const res = await fetch(url); const data = await res.json()')[0],
    ).toBe('const res = await fetch(url); const data = await res.json()')
  })

  it('keeps chained calls after ); as one snippet', () => {
    expect(
      codes(
        'const app = express(); app.use(express.json()); app.listen(3000). Still common.',
      )[0],
    ).toBe('const app = express(); app.use(express.json()); app.listen(3000)')
  })

  it('breaks statements inside a callback body', () => {
    expect(
      formatCodeForDisplay(
        'app.get("/users", async (req, res) => { const users = await db.user.findMany(); res.json(users) })',
      ),
    ).toBe(
      'app.get("/users", async (req, res) => {\n  const users = await db.user.findMany();\n  res.json(users)\n})',
    )
  })

  it('indents a callback body even without semicolons', () => {
    expect(
      formatCodeForDisplay(
        'app.post("/users", (req, res) => { /* req.body */ res.status(201).json(created) })',
      ),
    ).toBe(
      'app.post("/users", (req, res) => {\n  /* req.body */\n  res.status(201).json(created)\n})',
    )
  })

  it('drops a leftover sentence period after a code block', () => {
    const parts = getAnswerDisplayParts(
      'app.get("/users", async (req, res) => { const users = await db.user.findMany(); res.json(users) }).',
    )
    expect(parts.some((part) => part.value.trim() === '.')).toBe(false)
    expect(parts.some((part) => part.type === 'text')).toBe(false)
  })

  it('keeps the next sentence after stripping the leftover period', () => {
    const parts = getAnswerDisplayParts(
      'app.post("/users", (req, res) => { /* req.body */ res.status(201).json(created) }). Same for put, patch, delete.',
    )
    expect(parts.map((part) => part.value)).toContain(
      'Same for put, patch, delete.',
    )
  })

  it('breaks chained statements after top-level semicolons', () => {
    expect(
      formatCodeForDisplay(
        'const app = express(); app.use(express.json()); app.listen(3000)',
      ),
    ).toBe(
      'const app = express();\napp.use(express.json());\napp.listen(3000)',
    )
  })

  it('does not break semicolons inside for-loop headers', () => {
    expect(
      formatCodeForDisplay('for (let i = 0; i < arr.length; i++) doWork(i)'),
    ).toBe('for (let i = 0; i < arr.length; i++) doWork(i)')
  })

  it('keeps short object literals compact', () => {
    expect(formatCodeForDisplay('res.json({ ok: true })')).toBe(
      'res.json({ ok: true })',
    )
  })

  it('keeps existing multiline indentation', () => {
    const src =
      'function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i\n  }\n  return -1\n}'
    expect(formatCodeForDisplay(src)).toBe(src)
  })

  it('pretty-prints SQL onto clause lines', () => {
    expect(
      formatCodeForDisplay('SELECT id, name FROM users WHERE age > 18 ORDER BY name'),
    ).toBe('SELECT id, name\nFROM users\nWHERE age > 18\nORDER BY name')
  })

  it('leaves JSX tags unchanged', () => {
    expect(
      formatCodeForDisplay(
        '<input value={name} onChange={e => setName(e.target.value)} />',
      ),
    ).toBe('<input value={name} onChange={e => setName(e.target.value)} />')
  })
})
