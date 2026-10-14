export type Question = {
  id: string
  question: string
  /** Short refresh lines - keep each line skim-friendly. */
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

function withSortedQuestions(list: Category[]): Category[] {
  return list.map((category) => ({
    ...category,
    topics: category.topics.map((topic) => ({
      ...topic,
      questions: sortQuestions(topic.questions),
    })),
  }))
}

const categoryData: Category[] = [
  {
    id: 'html',
    type: 'HTML',
    name: 'HTML',
    blurb: 'Semantics, accessibility, and document structure.',
    topics: [
      {
        id: 'html-semantics',
        title: 'Semantics & structure',
        questions: [
          {
            id: 'html-1',
            question: 'What is the difference between <section>, <article>, and <div>?',
            answer: [
              '<section>: related content with a theme/heading',
              '<article>: self-contained (post, card, widget)',
              '<div>: no meaning - last resort container',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-2',
            question: 'Why does semantic HTML matter in interviews and production?',
            answer: [
              'Better a11y for screen readers',
              'Helps SEO and document outline',
              'Clearer, more maintainable markup',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-3',
            question: 'What is the purpose of the <label> element?',
            answer: [
              'Ties text to a control (for/id or wrap)',
              'Clicking label focuses the input',
              'Required for accessible forms',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'html-a11y',
        title: 'Accessibility basics',
        questions: [
          {
            id: 'html-4',
            question: 'What does aria-label do, and when should you avoid it?',
            answer: [
              'Sets an accessible name when visible text is missing',
              'Prefer a real <label> or visible text first',
              'Rule: don’t use ARIA if a native element works',
            ],
            difficulty: 'medium',
          },
          {
            id: 'html-5',
            question: 'Explain the difference between role="button" and a real <button>.',
            answer: [
              '<button>: focus, keyboard, semantics built in',
              'role="button" on a div: you add all of that yourself',
              'Prefer native elements',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'css',
    type: 'CSS',
    name: 'CSS',
    blurb: 'Layout, cascade, responsive design, and modern CSS.',
    topics: [
      {
        id: 'css-layout',
        title: 'Layout',
        questions: [
          {
            id: 'css-1',
            question: 'Flexbox vs Grid-when do you choose each?',
            answer: [
              'Flex: one axis (nav, align items in a row/column)',
              'Grid: two axes (page layout, card grids)',
              'Grid for structure, Flex inside components',
            ],
            difficulty: 'easy',
          },
          {
            id: 'css-2',
            question: 'What is the CSS box model, and how does box-sizing: border-box help?',
            answer: [
              'Box = content + padding + border (+ margin outside)',
              'content-box: width = content only',
              'border-box: width includes padding + border (prefer this)',
            ],
            difficulty: 'easy',
          },
          {
            id: 'css-3',
            question: 'How does stacking context work (z-index)?',
            answer: [
              'z-index only compares inside the same stacking context',
              'New contexts: positioned + z-index, opacity < 1, transform, filter…',
              'A child can’t jump above a sibling of its parent’s context',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'css-modern',
        title: 'Modern CSS',
        questions: [
          {
            id: 'css-4',
            question: 'What are CSS custom properties useful for?',
            answer: [
              'Themes and design tokens',
              'Live updates from JS',
              'They cascade (unlike Sass variables)',
            ],
            difficulty: 'medium',
          },
          {
            id: 'css-5',
            question: 'Explain specificity and how you’d override a style cleanly.',
            answer: [
              'Order: inline > IDs > classes/attrs > elements',
              'Prefer better structure over !important',
              'Use @layer or clear naming to control overrides',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'javascript',
    type: 'JS',
    name: 'JavaScript',
    blurb: 'Core language, closures, event loop, and async queues.',
    topics: [
      {
        id: 'js-core',
        title: 'Core concepts',
        questions: [
          {
            id: 'js-1',
            question: 'What is the difference between var, let, and const in JavaScript?',
            answer: [
              'var: function-scoped, hoisted as undefined',
              'let/const: block-scoped, TDZ until declared',
              'const: no reassignment (object contents can still change)',
              'Prefer const by default; then let; avoid var',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-2',
            question: 'What is a closure?',
            answer: [
              'A function that remembers its outer scope',
              'Still works after the outer function finished',
              'Keeps those variables alive while the inner fn is reachable',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-11',
            question: 'How is a closure used in real life? Give a practical example.',
            answer: [
              'Debounce: returned fn closes over timer + delay',
              'Private state in a factory/module',
              'Also: event handlers, timers, React hooks',
              'In interviews: walk one example end-to-end',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-3',
            question: 'What is the difference between == and ===?',
            answer: [
              '=== : strict, no coercion',
              '== : coerces types (0 == false)',
              'Prefer === / !==',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-4',
            question: 'How does this work in JavaScript?',
            answer: [
              'Depends on call site (method, call/apply/bind, new, default)',
              'Strict mode default: undefined',
              'Arrows: lexical this (can’t rebind)',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-28',
            question: 'What is the difference between call, apply, and bind?',
            answer: [
              'All set this for a function (not arrow functions)',
              'call(thisArg, a, b): invoke now; args listed one by one',
              'apply(thisArg, [a, b]): invoke now; args as an array',
              'bind(thisArg, …partialArgs): returns a new fn with this fixed',
              'Use bind when you need a callback later; call/apply when you need to run now',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-7',
            question: 'What is hoisting in JavaScript?',
            answer: [
              'Declarations are set up before line-by-line run',
              'Function declarations: fully hoisted',
              'var: hoisted as undefined',
              'let/const: hoisted but TDZ until the line',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'js-loops',
        title: 'Loops, objects & iteration',
        questions: [
          {
            id: 'js-8',
            question:
              'What is the difference between for...in, for...of, and forEach?',
            answer: [
              'for...in: keys on objects (avoid for arrays)',
              'for...of: values of iterables (arrays, Maps…)',
              'forEach: array method; no break',
              'Need break/await? use for / for...of',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-12',
            question:
              'What are Object.keys, Object.values, and Object.entries-and how do they relate to loops?',
            answer: [
              'keys → ["a","b"]',
              'values → [1,2]',
              'entries → [["a",1],["b",2]]',
              'Turn objects into arrays → for...of / forEach / map',
              'Own enumerable keys only (not inherited like for...in can be)',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-13',
            question:
              'When should you use for...in vs Object.keys / Object.entries?',
            answer: [
              'Default: Object.keys / entries (+ for...of)',
              'for...in: only if you want inherited enumerable keys',
              'Never use for...in as your main array loop',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-9',
            question: 'map vs filter vs reduce-when do you use each?',
            answer: [
              'map: transform each item → new array',
              'filter: keep items that pass a test',
              'reduce: fold into one value',
              'Prefer map/filter when they’re clearer',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'js-async',
        title: 'Asynchronous JS & event loop',
        questions: [
          {
            id: 'js-29',
            question: 'What is the difference between synchronous and asynchronous code?',
            answer: [
              'Sync: each line waits; next runs only after the current finishes',
              'Async: start work, continue other code; finish later via callback/Promise',
              'Sync blocks the call stack (long loops freeze the UI)',
              'Async keeps the page responsive for I/O (fetch, timers, events)',
              'JS is still single-threaded - async schedules work, it doesn’t invent threads',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-5',
            question: 'What is the event loop in JavaScript?',
            answer: [
              'JS runs on one call stack (single-threaded)',
              'Async work is queued; the event loop feeds the stack',
              'Typical turn: one macrotask → drain all microtasks → (maybe render)',
              'Keeps the runtime responsive without true parallelism in JS itself',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-6',
            question: 'What is the difference between Promises and async/await?',
            answer: [
              'Same model under the hood',
              'async/await = clearer sequential Promise code',
              'Still know .then and Promise.all / race / allSettled',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-30',
            question:
              'For calling an API, is Promise.then/.catch better, or async/await with try/catch?',
            answer: [
              'Same runtime cost - choose readability, not “speed”',
              'Prefer async/await + try/catch for sequential steps (fetch → json → use)',
              'try/catch covers await failures in one familiar block',
              '.then/.catch shines for short pipelines or when you return a Promise chain',
              'Mixing both is fine; avoid deeply nested .then pyramids',
              'Always handle errors (catch / try-catch) and check res.ok for HTTP failures',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-10',
            question: 'What is the difference between microtasks and macrotasks?',
            answer: [
              'Macrotask (task): setTimeout, setInterval, I/O, UI events…',
              'Microtask: Promise.then/catch/finally, queueMicrotask, MutationObserver',
              'After each macrotask, the microtask queue runs to empty',
              'New microtasks scheduled while draining also run before the next macrotask',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-20',
            question:
              'If a Promise and setTimeout(fn, 0) are scheduled together, why does the Promise callback run first?',
            answer: [
              'Promise.then lands on the microtask queue',
              'setTimeout lands on the macrotask (task) queue',
              'After the current stack clears, microtasks run before the next timer task',
              'So even setTimeout(0) waits behind pending microtasks',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-21',
            question: 'What is the microtask queue, and why does it have higher priority than setTimeout?',
            answer: [
              'A queue of jobs that must finish before yielding to the next task',
              'Priority: keep Promise chains / await continuations consistent ASAP',
              'Not “faster timers” - different queue + drain rules',
              'Starvation risk: endless microtasks can delay timers and paint',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-22',
            question:
              'What is the rough priority / order the browser event loop follows?',
            answer: [
              '1) Run sync code on the call stack',
              '2) Drain microtasks (Promises, queueMicrotask) until empty',
              '3) Next macrotask from the task queue (timer, I/O, message…)',
              '4) Repeat; browsers may paint / run rAF between tasks',
              'Interview shorthand: stack → microtasks → macrotask → (render) → …',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-23',
            question:
              'What kinds of work go on which queues? (macro, micro, and related)',
            answer: [
              'Microtask: Promise.then/catch/finally, async await resume, queueMicrotask',
              'Macrotask / task: setTimeout, setInterval, setImmediate (Node), MessageChannel',
              'Also macrotask-ish: many DOM/UI events, network callbacks (as tasks)',
              'Rendering path: style/layout/paint; requestAnimationFrame before paint',
              'I/O: host schedules a task when the operation completes (not “its own JS thread”)',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-24',
            question:
              'Where do requestAnimationFrame, setTimeout, and Promise.then sit relative to each other?',
            answer: [
              'Promise.then: microtask - before the next task / often before paint',
              'setTimeout: macrotask - after current microtasks; delay is a minimum',
              'rAF: before the next paint (rendering pipeline), not a microtask',
              'Typical: sync → microtasks → (rAF + paint) → next timer task…',
              'Exact interleaving can vary slightly by browser; know the model, not every edge',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-25',
            question:
              'Walk through: console.log → setTimeout(0) → Promise.resolve().then → console.log',
            answer: [
              'Both console.logs (sync) run first, in order',
              'Then Promise.then (microtask)',
              'Then setTimeout callback (macrotask)',
              'Output order: sync, sync, promise, timeout',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-26',
            question: 'What is the difference between the call stack, task queue, and microtask queue?',
            answer: [
              'Call stack: what’s running now (frames)',
              'Task (macro) queue: upcoming turn-based work (timers, events…)',
              'Microtask queue: “finish this related work before the next task”',
              'Event loop: picks from queues when the stack is empty',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-27',
            question: 'Node.js vs browser: any queue differences worth knowing?',
            answer: [
              'Same idea: microtasks before the next timer/I/O phase',
              'Node has phases (timers, poll, check…) via libuv',
              'process.nextTick (Node) runs even before other microtasks',
              'setImmediate (Node) ≈ check-phase macrotask; not in browsers',
              'In interviews: lead with the shared micro vs macro model',
            ],
            difficulty: 'hard',
          },
        ],
      },
    ],
  },
  {
    id: 'typescript',
    type: 'TS',
    name: 'TypeScript',
    blurb: 'Types that make application code safer and clearer.',
    topics: [
      {
        id: 'ts-basics',
        title: 'Essentials',
        questions: [
          {
            id: 'ts-5',
            question: 'What are the primitive types in TypeScript?',
            answer: [
              'string, number, boolean, bigint, symbol, null, undefined',
              'Also: void (no useful return), never (can’t happen)',
              'Prefer string over String wrapper types',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-1',
            question: 'What is the difference between type and interface in TypeScript?',
            answer: [
              'Both describe object shapes',
              'interface: can merge; good for public object APIs',
              'type: unions, mapped/conditional types, aliases',
              'Pick one style for objects; use type for unions',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ts-2',
            question: 'What is the difference between unknown and any?',
            answer: [
              'any: turns checking off',
              'unknown: must narrow before use',
              'Prefer unknown for untrusted input',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-3',
            question: 'What are generics in TypeScript?',
            answer: [
              'Type parameters that keep type info reusable',
              'Example: identity<T>(value: T): T',
              'Seen in useState<T>, Array<T>, Promise<T>',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ts-4',
            question: 'What is the difference between interface extending and type intersections?',
            answer: [
              'extends and & often look similar for objects',
              'extends: stricter conflicts on object shapes',
              '& : can collapse conflicting props to never',
              'extends for hierarchies; & for composing aliases',
            ],
            difficulty: 'hard',
          },
        ],
      },
    ],
  },
  {
    id: 'vue',
    type: 'Vue',
    name: 'Vue',
    blurb: 'Basics of Vue components, reactivity, and Composition API.',
    topics: [
      {
        id: 'vue-basics',
        title: 'Vue basics',
        questions: [
          {
            id: 'vu-1',
            question: 'What is Vue.js?',
            answer: [
              'A progressive UI framework for building web interfaces',
              'Component-based, like React/Angular',
              'Often praised for gentle learning curve and clear templates',
            ],
            difficulty: 'easy',
          },
          {
            id: 'vu-2',
            question: 'What is the difference between Options API and Composition API?',
            answer: [
              'Options API: data, methods, computed, watch as object options',
              'Composition API: setup() / <script setup> with ref, reactive, computed',
              'Composition: better logic reuse and TypeScript ergonomics',
              'Both are valid; Vue 3 leans Composition for new code',
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-3',
            question: 'What are ref and reactive in Vue?',
            answer: [
              'ref: reactive wrapper for a value (.value in script)',
              'reactive: reactive object (no .value; loses reactivity if reassigned)',
              'Templates auto-unwrap refs',
              'Prefer ref for primitives; either is fine for objects',
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-4',
            question: 'What is v-model?',
            answer: [
              'Two-way binding shorthand for form inputs / components',
              'On input: value + @input under the hood (Vue 3: modelValue + update)',
              'Keeps UI and state in sync without manual wiring',
            ],
            difficulty: 'easy',
          },
          {
            id: 'vu-5',
            question: 'computed vs watch-when do you use each?',
            answer: [
              'computed: derived value, cached until deps change',
              'watch: run side effects when something changes',
              'Prefer computed for “calculate from state”',
              'Use watch for async work, logging, syncing external systems',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'angular',
    type: 'Angular',
    name: 'Angular',
    blurb: 'Basics of modern Angular (and how it differs from AngularJS).',
    topics: [
      {
        id: 'angular-basics',
        title: 'Angular basics',
        questions: [
          {
            id: 'ng-1',
            question: 'What is the difference between AngularJS and Angular?',
            answer: [
              'AngularJS = Angular 1.x (old, controllers / $scope)',
              'Angular = 2+ rewrite (TypeScript, components, modules/standalone)',
              'Not the same codebase - “Angular” in interviews usually means 2+',
              'AngularJS is legacy; new apps use modern Angular',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ng-2',
            question: 'What is Angular (modern)?',
            answer: [
              'A full framework: UI, routing, forms, HTTP, DI built in',
              'TypeScript-first, component-based',
              'Opinionated structure vs lighter libraries like React/Vue',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ng-3',
            question: 'What are components, modules, and services in Angular?',
            answer: [
              'Component: UI + logic (template + class)',
              'NgModule / standalone: groups declarations and imports',
              'Service: shared logic; often provided via dependency injection',
              'Modern Angular prefers standalone components over NgModules',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ng-4',
            question: 'What is data binding in Angular?',
            answer: [
              'Interpolation: {{ value }}',
              'Property binding: [prop]="expr"',
              'Event binding: (click)="handler()"',
              'Two-way: [(ngModel)] for forms (needs FormsModule)',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ng-5',
            question: 'What is dependency injection in Angular?',
            answer: [
              'Angular creates and injects dependencies (services) for you',
              'Constructor injection: constructor(private api: ApiService)',
              'providedIn: "root" for app-wide singletons',
              'Makes testing easier with mocks/substitutes',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'react',
    type: 'React',
    name: 'React',
    blurb: 'Hooks, effects, derived state, and React internals.',
    topics: [
      {
        id: 'react-hooks',
        title: 'Popular hooks',
        questions: [
          {
            id: 're-7',
            question:
              'What are the most common React hooks, and what does each do?',
            answer: [
              'useState - local state',
              'useEffect - after paint (fetch, subscriptions)',
              'useLayoutEffect - before paint (measure DOM)',
              'useRef - mutable box / DOM node (no re-render)',
              'useMemo / useCallback - cache value / fn identity',
              'useContext / useReducer - shared or complex state',
              'useTransition / useDeferredValue - non-urgent UI',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-2',
            question: 'What is the difference between useEffect and useLayoutEffect?',
            answer: [
              'useEffect: after paint (default choice)',
              'useLayoutEffect: before paint (avoid flicker)',
              'Use layout only when you must measure/mutate DOM',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-8',
            question: 'When should you use useMemo or useCallback?',
            answer: [
              'When unstable identity causes real cost',
              'Heavy children, deps arrays, expensive calc',
              'Don’t wrap everything - measure first',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'react-effects-state',
        title: 'Effects & derived state',
        questions: [
          {
            id: 're-20',
            question:
              'Why avoid calling setState inside useEffect to sync or derive state?',
            answer: [
              'Causes an extra render after paint (cascade)',
              'Easy to miss deps → stale bugs or loops',
              'Often means the value should not be separate state',
              'React docs: “You Might Not Need an Effect”',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-21',
            question:
              'What are the alternatives when you feel like setState-ing in useEffect?',
            answer: [
              'Derive during render: const x = f(props/state)',
              'useMemo for expensive derived values',
              'Update state in the event handler that caused the change',
              'Reset UI with a changing key (remount)',
              'Keep useEffect for real side effects: fetch, DOM, subscriptions',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-22',
            question:
              'When do you use useMemo instead of storing a computed value in state + useEffect?',
            answer: [
              'Value is pure from props/state - compute, don’t store',
              'useMemo caches so you skip heavy work when deps unchanged',
              'Cheap calc: just compute inline; no useMemo needed',
              'Example: filteredList = useMemo(() => items.filter(...), [items, q])',
              'Avoid: useEffect(() => setFiltered(...), [items, q])',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-23',
            question:
              'How do you reset related state when a prop changes (without setState in useEffect)?',
            answer: [
              'Pass key={userId} so the form remounts clean',
              'Or adjust state during render when the id changes (pattern with prev id)',
              'Prefer key remount - simplest mental model',
              'Don’t: useEffect(() => setForm(initial), [userId]) as default',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-24',
            question: 'When is setState inside useEffect actually appropriate?',
            answer: [
              'Syncing with an external system (rare UI mirror cases)',
              'After an async fetch completes (set data / error / loading)',
              'Subscribing and updating from an external store',
              'Still prefer libraries / useSyncExternalStore when fitting',
              'Not for: filtering, sorting, or “props → local copy” mirroring',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-25',
            question: 'useMemo vs useEffect vs useState for a derived list - which and why?',
            answer: [
              'useState + useEffect: extra render; usually wrong for derive',
              'Inline / useMemo: one render path; value always in sync',
              'useState alone: only if the user can edit that list independently',
              'Rule: if you can calculate it, don’t store it',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-26',
            question: 'What belongs in useEffect, and what does not?',
            answer: [
              'Yes: network, timers, subscriptions, imperative DOM, analytics',
              'No: transforming data for render (derive / useMemo)',
              'No: handling a click - use the event handler',
              'No: copying props into state “just in case”',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'react-fundamentals',
        title: 'Fundamentals',
        questions: [
          {
            id: 're-1',
            question: 'What triggers a re-render in React-and what does not?',
            answer: [
              'Does: setState / useState updater (or useReducer dispatch)',
              'Does: context value change for consumers of that context',
              'Does: parent re-renders → child re-renders by default (new props object or not)',
              'Does: props changing from the parent’s render (usual path for “props update”)',
              'Does not: assigning a normal let/const variable inside the component',
              'Does not: mutating a ref (.current = …) - no re-render by design',
              'Does not: mutating state/props in place without setState (UI won’t update reliably)',
              'memo can skip a child re-render if its props are shallow-equal',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-3',
            question: 'Why are keys important in lists?',
            answer: [
              'Help React match items across renders',
              'Unstable index keys → wrong state reuse',
              'Prefer stable IDs from data',
            ],
            difficulty: 'easy',
          },
          {
            id: 're-4',
            question: 'What is the difference between controlled and uncontrolled components?',
            answer: [
              'Controlled: value in React state + onChange',
              'Uncontrolled: DOM holds value; read via ref',
              'Controlled is usually clearer for forms',
            ],
            difficulty: 'easy',
          },
          {
            id: 're-27',
            question:
              'For rendering and performance, which is better: controlled or uncontrolled inputs?',
            answer: [
              'Uncontrolled often wins on raw perf: typing doesn’t re-render React each keystroke',
              'Controlled: every onChange → setState → re-render (can get costly in big forms/trees)',
              'Prefer uncontrolled when you only need the value on submit / blur',
              'Prefer controlled when UI must react live (validation, filters, disable buttons, format)',
              'Middle ground: debounce updates, isolate state, or libs like React Hook Form (uncontrolled-first)',
              'Default: controlled for clarity; switch when profiling shows input jank',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-9',
            question: 'What is createPortal in React, and when do you use it?',
            answer: [
              'Render children into another DOM node',
              'Keeps React tree/context; escapes overflow/stacking',
              'Use for modals, tooltips, dropdowns, toasts',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-28',
            question: 'What is the difference between React and React Native?',
            answer: [
              'React: builds web UIs that render to the browser DOM (div, span, …)',
              'React Native: builds mobile apps that render to native views (View, Text, …)',
              'Same ideas: components, props, state, hooks, reconciliation',
              'Different primitives and styling (CSS vs StyleSheet / flex-first native layout)',
              'Navigation, gestures, and platform APIs differ; not a drop-in web app',
              'Shared: JS/TS logic and many patterns; UI layer is platform-specific',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'react-internals',
        title: 'Rendering internals',
        questions: [
          {
            id: 're-10',
            question: 'What is reconciliation in React?',
            answer: [
              'Diff previous UI tree vs next',
              'Reuse nodes when type/keys match',
              'Remount when types differ',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-11',
            question: 'What is React’s diffing algorithm (at a high level)?',
            answer: [
              'Different element type → remount',
              'Keys identify siblings in lists',
              'Diffs level by level (not arbitrary deep search)',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-12',
            question: 'What is batching in React?',
            answer: [
              'Multiple setStates → one re-render',
              'React 18+: batched in events, promises, timeouts…',
              'flushSync only when you must force sync DOM read',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-6',
            question: 'What exactly is the Virtual DOM in React?',
            answer: [
              'A lightweight in-memory tree of React elements (plain JS objects), not real DOM nodes',
              'Created when you write JSX / call createElement - describes what the UI should look like',
              'On update, React diffs the new virtual tree vs the previous one (reconciliation)',
              'Only the real DOM changes that are needed get committed',
              'Goal: predictable UI updates and less manual DOM work - not “always faster than touching the DOM”',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-5',
            question: 'How would you avoid unnecessary re-renders?',
            answer: [
              'Colocate state; split contexts',
              'memo heavy pure children when needed',
              'Virtualize long lists',
              'Measure before heavy memoization',
            ],
            difficulty: 'hard',
          },
        ],
      },
    ],
  },
  {
    id: 'browser',
    type: 'DOM',
    name: 'Browser & DOM',
    blurb: 'Events, rendering, storage, and Web APIs.',
    topics: [
      {
        id: 'browser-events',
        title: 'Events',
        questions: [
          {
            id: 'br-2',
            question:
              'What is event bubbling vs event capturing (trickling)?',
            answer: [
              'Capture: window → target',
              'Bubble: target → window',
              'Default listeners: bubble phase',
              '{ capture: true } for capturing',
            ],
            difficulty: 'medium',
          },
          {
            id: 'br-4',
            question: 'What is event delegation?',
            answer: [
              'One listener on a parent',
              'Handle via event.target / closest',
              'Great for dynamic lists; less memory',
            ],
            difficulty: 'medium',
          },
          {
            id: 'br-5',
            question: 'What is the difference between event.preventDefault() and event.stopPropagation()?',
            answer: [
              'preventDefault: block browser default (submit, link…)',
              'stopPropagation: stop travel to other listeners',
              'Sometimes you need both',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'browser-render',
        title: 'Rendering & storage',
        questions: [
          {
            id: 'br-1',
            question: 'Describe the critical rendering path.',
            answer: [
              'HTML → DOM, CSS → CSSOM',
              'Render tree → layout → paint → composite',
              'Blocking CSS/JS delays first paint',
            ],
            difficulty: 'hard',
          },
          {
            id: 'br-3',
            question: 'localStorage vs sessionStorage vs cookies?',
            answer: [
              'localStorage: persists, not sent with requests',
              'sessionStorage: tab session only',
              'cookies: small, sent to server; use for server-needed auth',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'state',
    type: 'State',
    name: 'State management',
    blurb: 'Local state, context, and libraries like Redux and Zustand.',
    topics: [
      {
        id: 'state-libs',
        title: 'Libraries & patterns',
        questions: [
          {
            id: 'st-1',
            question:
              'What are common React state management options, and when do you use each?',
            answer: [
              'Local state: useState / useReducer',
              'Context: rare updates (theme, auth)',
              'Zustand: simple global client state',
              'Redux Toolkit: large apps, strict patterns',
              'TanStack Query: server/async cache',
              'Pick the smallest tool that fits',
            ],
            difficulty: 'medium',
          },
          {
            id: 'st-2',
            question: 'Why do many teams prefer Zustand over Redux?',
            answer: [
              'Less boilerplate; tiny store + hooks',
              'Selectors → fewer re-renders',
              'Redux still wins for huge teams / heavy tooling',
              '“Better” = better fit, not always',
            ],
            difficulty: 'medium',
          },
          {
            id: 'st-3',
            question: 'When is Context a bad choice for state?',
            answer: [
              'High-churn values with many consumers',
              'Any update re-renders all consumers',
              'Prefer local state or a store with selectors',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'performance',
    type: 'Perf',
    name: 'Performance',
    blurb: 'Large lists, rate limiting, and Core Web Vitals.',
    topics: [
      {
        id: 'perf-large-lists',
        title: 'Large lists (10k-100k+ items)',
        questions: [
          {
            id: 'pf-10',
            question:
              'If a list has ~100,000 items, how do you render it on the frontend without freezing the UI?',
            answer: [
              'Don’t mount 100k DOM nodes at once',
              'Virtualize: render only the visible window (+ small overscan)',
              'Libs: react-window, react-virtualized, TanStack Virtual',
              'Keep row components cheap and stable keys',
              'Prefer fixed/estimated row height for smoother scroll',
            ],
            difficulty: 'hard',
          },
          {
            id: 'pf-11',
            question:
              'How do you search a huge list efficiently on the frontend?',
            answer: [
              'Debounce the input (e.g. 200-300ms)',
              'Search a plain data array, not the DOM',
              'For huge sets: filter on the server / with pagination',
              'Optional: Web Worker so filtering doesn’t block paint',
              'Index fields you search often if you stay client-side',
            ],
            difficulty: 'hard',
          },
          {
            id: 'pf-12',
            question: 'How should filtering work when there are tens of thousands of rows?',
            answer: [
              'Filter the source data, then virtualize the result',
              'Avoid re-filtering on every keystroke - debounce',
              'Memoize filtered results when inputs are stable',
              'Best at scale: server-side filter + page/cursor API',
              'Show loading / “N results” so the UI feels responsive',
            ],
            difficulty: 'hard',
          },
          {
            id: 'pf-13',
            question: 'How do you sort a very large list without jank?',
            answer: [
              'Sorting 100k in the main thread can hitch the UI',
              'Prefer server-side ORDER BY + paginated fetch',
              'If client-side: sort in a Web Worker, then set state once',
              'Don’t re-sort on every render - cache until sort key changes',
              'Virtual list still only paints the visible slice after sort',
            ],
            difficulty: 'hard',
          },
          {
            id: 'pf-14',
            question:
              'Virtualization vs pagination vs infinite scroll - which fits a huge list?',
            answer: [
              'Virtualization: one big scroll, only visible rows in DOM',
              'Pagination: fetch/show pages (best with server data)',
              'Infinite scroll: load next page as you near the bottom',
              '100k local rows → virtualize',
              '100k on a server → paginate or infinite + virtualize the page window',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-15',
            question:
              'What else breaks with huge lists besides rendering too many nodes?',
            answer: [
              'Heavy row UI (images, charts) inside each cell',
              'Inline lambdas / new objects causing constant re-renders',
              'Measuring layout on every scroll (layout thrash)',
              'Running filter/sort/map on every keystroke on the main thread',
              'Holding duplicate copies of the same giant array in state',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-16',
            question:
              'How would you design an effective UI for browsing 100k records?',
            answer: [
              'Server query: page/cursor + sort + filter params',
              'Virtualized table/list for the current window',
              'Debounced search; clear empty/loading states',
              'Don’t download all 100k unless the product truly needs offline',
              'Profile with React Profiler / Performance panel before micro-optimizing',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'perf-timing',
        title: 'Timing & rate limiting',
        questions: [
          {
            id: 'pf-3',
            question: 'What are polling, throttling, and debouncing?',
            answer: [
              'Debounce: run once after calls stop (search)',
              'Throttle: run at most once per interval (scroll)',
              'Poll: fetch on a timer when you lack push/WS',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-4',
            question: 'When would you choose throttling over debouncing?',
            answer: [
              'Throttle: need updates during the activity',
              'Debounce: only the final value matters',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'perf-web',
        title: 'Web performance',
        questions: [
          {
            id: 'pf-1',
            question: 'What are LCP, INP, and CLS?',
            answer: [
              'LCP: loading (largest paint)',
              'INP: responsiveness to input',
              'CLS: visual stability',
              'Together: Core Web Vitals',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-2',
            question: 'How do you reduce JavaScript bundle size?',
            answer: [
              'Code-split routes',
              'Tree-shake; drop heavy libs',
              'Dynamic import rare features',
              'Analyze the bundle',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'network',
    type: 'Network',
    name: 'Network & Security',
    blurb: 'HTTP, CORS, auth, and common web threats.',
    topics: [
      {
        id: 'net-http',
        title: 'HTTP & APIs',
        questions: [
          {
            id: 'nt-1',
            question: 'What is CORS and why do browsers enforce it?',
            answer: [
              'Cross-origin response reading needs server opt-in',
              'Stops evil sites from reading your authenticated data',
              'Controlled via response headers',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-2',
            question: 'GET vs POST vs PUT vs PATCH vs DELETE?',
            answer: [
              'GET: read (safe/idempotent)',
              'POST: create / non-idempotent action',
              'PUT: replace; PATCH: partial update',
              'DELETE: remove',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-3',
            question: 'XSS vs CSRF-how do you mitigate each?',
            answer: [
              'XSS: escape/sanitize; CSP; avoid dangerous HTML APIs',
              'CSRF: SameSite cookies; CSRF tokens',
              'Design auth carefully (cookie vs Bearer)',
            ],
            difficulty: 'hard',
          },
        ],
      },
    ],
  },
  {
    id: 'node',
    type: 'Node',
    name: 'Node.js',
    blurb: 'JavaScript on the server: runtime basics and the event loop.',
    topics: [
      {
        id: 'node-basics',
        title: 'Node basics',
        questions: [
          {
            id: 'no-1',
            question: 'What is Node.js?',
            answer: [
              'A JavaScript runtime built on V8 (outside the browser)',
              'Lets you build servers, CLIs, and tooling in JS/TS',
              'Single-threaded JS + async I/O via libuv',
            ],
            difficulty: 'easy',
          },
          {
            id: 'no-2',
            question: 'What is npm, and what is package.json for?',
            answer: [
              'npm: package manager for Node projects',
              'package.json: name, scripts, dependency ranges',
              'npm install / npm run <script> are day-to-day commands',
            ],
            difficulty: 'easy',
          },
          {
            id: 'no-3',
            question: 'require vs import in Node?',
            answer: [
              'require / module.exports: CommonJS (older default)',
              'import / export: ES modules (modern; "type": "module")',
              'Prefer ESM for new apps; know both in interviews',
            ],
            difficulty: 'medium',
          },
          {
            id: 'no-4',
            question: 'Why is Node good for I/O-heavy APIs?',
            answer: [
              'Non-blocking I/O: waits don’t freeze the process',
              'Event loop handles many concurrent connections',
              'CPU-heavy work can still block - offload or scale carefully',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'express',
    type: 'Express',
    name: 'Express',
    blurb: 'Minimal Node web framework for APIs and middleware.',
    topics: [
      {
        id: 'express-basics',
        title: 'Express basics',
        questions: [
          {
            id: 'ex-1',
            question: 'What is Express?',
            answer: [
              'A small Node framework for HTTP servers and APIs',
              'Routing + middleware is the core model',
              'Very common for REST backends in JS/TS',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-2',
            question: 'What is middleware in Express?',
            answer: [
              'Functions (req, res, next) that run in a pipeline',
              'Examples: logging, auth, parsing JSON, error handlers',
              'Call next() to continue; send a response to end',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-3',
            question: 'How do you define a basic route in Express?',
            answer: [
              'app.get("/users", handler)',
              'app.post("/users", handler) for create',
              'Params: /users/:id → req.params.id',
              'Query: ?page=1 → req.query.page',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-4',
            question: 'How do you handle errors in Express?',
            answer: [
              'Throw/pass errors to next(err)',
              'Use a 4-arg error middleware: (err, req, res, next)',
              'Don’t leak stack traces in production responses',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'nest',
    type: 'Nest',
    name: 'NestJS',
    blurb: 'Structured Node framework with modules, DI, and TypeScript.',
    topics: [
      {
        id: 'nest-basics',
        title: 'Nest basics',
        questions: [
          {
            id: 'ne-1',
            question: 'What is NestJS?',
            answer: [
              'A TypeScript Node framework inspired by Angular’s structure',
              'Modules, controllers, providers (services), DI built in',
              'Good for larger APIs that need clear architecture',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ne-2',
            question: 'Controller vs service (provider) in Nest?',
            answer: [
              'Controller: HTTP routes / request handling',
              'Service: business logic, reusable via DI',
              'Keep controllers thin; put logic in services',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ne-3',
            question: 'What is a Nest module?',
            answer: [
              'Groups related controllers and providers',
              'exports: what other modules can inject',
              'AppModule is usually the root',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ne-4',
            question: 'Nest vs Express-when pick which?',
            answer: [
              'Express: tiny, flexible, fast to start',
              'Nest: structure, DI, testing patterns out of the box',
              'Nest can still use Express (or Fastify) under the hood',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'next',
    type: 'Next',
    name: 'Next.js',
    blurb: 'React framework for SSR, routing, and full-stack features.',
    topics: [
      {
        id: 'next-basics',
        title: 'Next basics',
        questions: [
          {
            id: 'nx-1',
            question: 'What is Next.js?',
            answer: [
              'A React framework with routing, rendering modes, and tooling',
              'Can do SSR, SSG, and client components',
              'Often used for production React apps and fullstack JS',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nx-2',
            question: 'SSR vs SSG vs CSR in Next (simple view)?',
            answer: [
              'CSR: render in the browser (classic SPA feel)',
              'SSR: HTML on each request (fresh data, SEO)',
              'SSG: HTML at build time (fast, more static)',
              'App Router also uses Server/Client Components',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nx-3',
            question: 'What are Server Components vs Client Components?',
            answer: [
              'Server Components: run on server by default (App Router)',
              'Client Components: "use client" - hooks, events, browser APIs',
              'Fetch data on server when you can; push client only when needed',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nx-4',
            question: 'What is an API route / Route Handler in Next?',
            answer: [
              'Server endpoints living in the Next app',
              'App Router: route.ts / route.js handlers (GET, POST…)',
              'Useful for BFF-style APIs next to your UI',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'mongodb',
    type: 'Mongo',
    name: 'MongoDB',
    blurb: 'Document database basics: collections, documents, and queries.',
    topics: [
      {
        id: 'mongo-basics',
        title: 'MongoDB basics',
        questions: [
          {
            id: 'mo-1',
            question: 'What is MongoDB?',
            answer: [
              'A NoSQL document database',
              'Stores JSON-like BSON documents in collections',
              'Flexible schema compared to rigid SQL tables',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-2',
            question: 'Document vs collection vs database?',
            answer: [
              'Document: one record (like a row, but nested OK)',
              'Collection: group of documents (like a table)',
              'Database: named container for collections',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-3',
            question: 'When would you choose MongoDB over SQL?',
            answer: [
              'Flexible / evolving document shapes',
              'Nested data that maps cleanly to JSON',
              'Horizontal scaling patterns (with tradeoffs)',
              'Not automatic “better” - joins/transactions still matter',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-4',
            question: 'What is an index in MongoDB (and why care)?',
            answer: [
              'Speeds up reads for fields you query/sort often',
              'Without indexes, large collections scan more',
              'Too many indexes slow writes - index with intent',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'postgres',
    type: 'Postgres',
    name: 'PostgreSQL',
    blurb: 'Relational SQL database basics: tables, keys, and queries.',
    topics: [
      {
        id: 'postgres-basics',
        title: 'PostgreSQL basics',
        questions: [
          {
            id: 'pg-1',
            question: 'What is PostgreSQL?',
            answer: [
              'A powerful open-source relational (SQL) database',
              'Tables, rows, columns, constraints, transactions',
              'Strong reliability and rich SQL feature set',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-2',
            question: 'Primary key vs foreign key?',
            answer: [
              'Primary key: uniquely identifies a row',
              'Foreign key: references another table’s key',
              'Enforces relationships and referential integrity',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-3',
            question: 'What do SELECT, INSERT, UPDATE, DELETE do?',
            answer: [
              'SELECT: read rows',
              'INSERT: add rows',
              'UPDATE: change existing rows',
              'DELETE: remove rows (use WHERE carefully)',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-4',
            question: 'What is a JOIN (at a basic level)?',
            answer: [
              'Combines rows from related tables',
              'INNER JOIN: only matching rows',
              'LEFT JOIN: all left rows + matches from right',
              'Used when data is normalized across tables',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-5',
            question: 'What is a transaction (ACID idea, simply)?',
            answer: [
              'Group statements that succeed or fail together',
              'BEGIN → work → COMMIT (or ROLLBACK on error)',
              'Keeps data consistent (e.g. money transfer)',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'django',
    type: 'Django',
    name: 'Django',
    blurb: 'Python web framework basics: MVT, ORM, and batteries included.',
    topics: [
      {
        id: 'django-basics',
        title: 'Django basics',
        questions: [
          {
            id: 'dj-1',
            question: 'What is Django?',
            answer: [
              'A high-level Python web framework',
              '“Batteries included”: ORM, admin, auth, forms…',
              'Follows MTV/MVT: Model, Template/View patterns',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-2',
            question: 'What is the Django ORM?',
            answer: [
              'Talk to the DB with Python models instead of raw SQL',
              'Model class ↔ table; fields ↔ columns',
              'QuerySets: Model.objects.filter(...)',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-3',
            question: 'urls.py vs views vs templates (simple flow)?',
            answer: [
              'URL → routes to a view',
              'View: handles request, talks to models',
              'Template: renders HTML response (or return JSON in APIs)',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-4',
            question: 'What are Django migrations?',
            answer: [
              'Versioned DB schema changes from model updates',
              'makemigrations → migrate',
              'Keep schema in sync across environments',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'rails',
    type: 'Rails',
    name: 'Ruby on Rails',
    blurb: 'Ruby web framework basics: MVC, Active Record, and conventions.',
    topics: [
      {
        id: 'rails-basics',
        title: 'Rails basics',
        questions: [
          {
            id: 'rb-1',
            question: 'What is Ruby on Rails?',
            answer: [
              'A full-stack web framework written in Ruby',
              'Convention over configuration',
              'MVC + Active Record ORM by default',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-2',
            question: 'What does MVC mean in Rails?',
            answer: [
              'Model: data + business rules (often Active Record)',
              'View: templates (ERB/Haml…) that render UI',
              'Controller: receives requests, calls models, renders views',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-3',
            question: 'What is Active Record?',
            answer: [
              'Rails ORM: classes map to tables',
              'User.find(1), user.save, validations, associations',
              'has_many / belongs_to for relationships',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-4',
            question: 'What are Rails routes and REST resources?',
            answer: [
              'config/routes.rb maps URLs to controller actions',
              'resources :posts → index/show/create/update/destroy…',
              'RESTful conventions keep APIs predictable',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'testing',
    type: 'Testing',
    name: 'Testing & Tooling',
    blurb: 'Tests, bundling, and npm dependency types.',
    topics: [
      {
        id: 'test-basics',
        title: 'Testing mindset',
        questions: [
          {
            id: 'te-1',
            question: 'Unit vs integration vs E2E tests?',
            answer: [
              'Unit: one piece in isolation',
              'Integration: a few pieces together',
              'E2E: real browser flows',
              'Many fast tests; few critical E2E',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-2',
            question: 'What does “test behavior, not implementation” mean?',
            answer: [
              'Assert what users see/do',
              'Not internal state or CSS classes',
              'Survives refactors; fits Testing Library',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-3',
            question: 'What is tree-shaking?',
            answer: [
              'Bundler drops unused exports',
              'Needs ES modules + few side effects',
              'Heavy barrels can block elimination',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'tooling-npm',
        title: 'npm & tooling',
        questions: [
          {
            id: 'te-4',
            question:
              'What is the difference between dependencies and devDependencies?',
            answer: [
              'dependencies: needed to run the app (React…)',
              'devDependencies: build/test only (Vite, ESLint…)',
              'npm i pkg vs npm i -D pkg',
              'Don’t put React in devDeps or Vite in deps for apps',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-5',
            question: 'What is the difference between package-lock.json and package.json?',
            answer: [
              'package.json: allowed version ranges',
              'lockfile: exact resolved tree',
              'Commit lockfile; use npm ci in CI',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
]

export const categories: Category[] = withSortedQuestions(categoryData)

export function countQuestions(category: Category): number {
  return category.topics.reduce((sum, topic) => sum + topic.questions.length, 0)
}

export function getTotalQuestionCount(): number {
  return categories.reduce((sum, category) => sum + countQuestions(category), 0)
}
