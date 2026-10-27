# Coding Cheat Sheet

Personal interview revision site-not a quiz. Skim short notes across frontend, backend, and databases whenever you need a quick refresh.

**🚀 Live Demo:** [Open Coding Cheat Sheet](https://moshahan.github.io/coding-cheat-sheet/)

License: [MIT](LICENSE)

![Coding Cheat Sheet app preview](docs/screenshots/app-preview.png)

![JS Playground preview](docs/screenshots/playground-preview.png)

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Vitest + Testing Library

## Topics

**Frontend:** HTML, CSS, JavaScript, TypeScript, React, React Native, Flutter, Vue, Angular, Browser & DOM, state, performance, network & security, testing, linting (ESLint, Oxlint), Git hooks / Husky, PRs and commits, CI/CD and GitHub Actions

**Backend & fullstack:** Node.js, common backend layering (MVC, repository, service), Express, NestJS, Next.js, Python, Django, Flask, Ruby on Rails, Rust, Go

**Databases:** SQL, PostgreSQL, MongoDB, Redis

**Files:** S3-style buckets, image and video uploads, what to store in the database

**ORMs:** Prisma, Drizzle

**Algorithms:** searching (linear, binary, jump), sorting (bubble, selection, insertion, merge, quick, heap)

**Data structures:** arrays, stacks, queues, hash maps, linked lists, trees, graphs

**DSA interview:** Big-O, time and space complexity classes, two pointers, sliding window, DP, greedy, backtracking, classic problems

**Playground:** `/playground` - run vanilla JavaScript in a browser console (link from the home hero).

## Scripts

```bash
npm install
npm run dev       # local app
npm run build     # production build
npm run preview   # preview build
npm test          # unit tests
npm run test:watch
npm run lint
```

## Contributing

Want to add questions? Fork the repo, add your notes, and open a pull request. Helpful contributions are welcome-new prompts, clearer answers, or whole new topics.

## Adding notes

Edit `src/data/questionData.ts`. Types and sort helpers live in `src/data/questionUtils.ts`.

Structure: **category → topic → questions**, where each question has:

- `question` - prompt text
- `answer` - short bullet lines (`string[]`)
- `difficulty` - `easy` | `medium` | `hard`

Notes sort by difficulty, then A-Z. Add a matching icon in `src/components/TopicVisual.tsx` when you create a new category type.

Keep answers as bullets (not paragraphs). A bullet can be one or two sentences so the meaning stays clear.

Mark code yourself. The app does not guess snippets from English:

- Inline: `` Use a real `<button>`. ``
- Block: put a fenced snippet in the string, including the newlines:

```ts
'```\nfunction makeCounter() {\n  let n = 0\n  return () => ++n\n}\n``` each call gets its own `n`.'
```

Run `npm run lint` and `npm test` before you open a PR.
