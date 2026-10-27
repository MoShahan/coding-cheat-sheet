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
              '<section> groups related content that shares one theme - give it a heading so the outline makes sense (a “Pricing” block, a “Comments” block).',
              '<article> is self-contained: it should still make sense if you pulled it out of the page (a blog post, a tweet, a product card).',
              '<div> has no meaning. Use it only when you need a box for CSS or JS and no semantic tag fits.',
              'Interview tip: start with the meaning, not the layout. Style comes from CSS; HTML is the document structure.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-2',
            question: 'Why does semantic HTML matter in interviews and production?',
            answer: [
              'Screen readers announce landmarks and headings, so <nav>, <main>, and real <h1>-<h6> are how users jump around the page.',
              'Search engines and browser reader modes use the outline (title, headings, article) to understand the page.',
              'Teammates can read the markup and see intent: a <button> is clickable, a <table> is tabular data, a <div> is just a box.',
              'You also get built-in keyboard behavior (Enter on a button, Tab into a form) without extra ARIA.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-3',
            question: 'What is the purpose of the <label> element?',
            answer: [
              'It names a control for everyone: visible users, screen readers, and automated tests.',
              'Wire it with <label for="email"> + <input id="email">, or wrap the input inside the label.',
              'Clicking the label focuses (or toggles) the control - a bigger hit target on mobile checkboxes.',
              'Placeholder text is not a label. It disappears while typing and is often too faint to count as an accessible name.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-6',
            question: 'What do <header>, <nav>, <main>, <aside>, and <footer> mean?',
            answer: [
              '<header> is introductory content for the page or a section (logo, title, maybe nav). You can have more than one.',
              '<nav> is a block of major links (site menu, table of contents) - not every list of links needs it.',
              '<main> is the unique primary content of this page. One per page; skip links often jump here.',
              '<aside> is related but secondary (sidebar, pull quote). <footer> is closing info (copyright, related links).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-7',
            question: 'What is the difference between block, inline, and inline-block in HTML/CSS?',
            answer: [
              'Block elements (<div>, <p>, <section>) start on a new line and take the full available width.',
              'Inline elements (<span>, <a>, <em>) sit in the text flow. Width/height and vertical margin do not apply the same way.',
              'inline-block is in the text flow but accepts width, height, and padding like a box - useful for nav pills.',
              'HTML default display comes from the tag; CSS display can change it. Don’t pick a tag just to get a layout.',
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
              'aria-label sets the accessible name when there is no useful visible text (an icon-only button: aria-label="Close").',
              'If visible text already names the control, extra aria-label can override it and confuse people - don’t duplicate.',
              'Prefer a real <label>, button text, or visually-hidden text before reaching for ARIA.',
              'First rule of ARIA: don’t use it if a native element already does the job.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'html-5',
            question: 'Explain the difference between role="button" and a real <button>.',
            answer: [
              '<button> already gets keyboard focus, Enter/Space activation, form submit behavior, and the right role.',
              'A <div role="button"> is just a box until you add tabindex="0", key handlers, and disabled/pressed states yourself.',
              'You will miss cases (screen reader modes, voice control, form implicit submit). Native wins.',
              'Same idea for <a href> vs role="link", and <input type="checkbox"> vs a styled div.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'html-8',
            question: 'What should go on an <img>, and what are alt, width, and srcset for?',
            answer: [
              'alt describes the image if it doesn’t load and for screen readers. Decorative images use alt="".',
              'Don’t start alt with “image of” - the <img> role already says that. Describe the content or skip it.',
              'width and height (or aspect-ratio in CSS) reserve space so the page doesn’t jump when the image loads (helps CLS).',
              'srcset + sizes let the browser pick a file size for the screen: srcset="hero-400.jpg 400w, hero-800.jpg 800w".',
            ],
            difficulty: 'medium',
          },
          {
            id: 'html-9',
            question: 'What is the difference between <script>, defer, and async?',
            answer: [
              'A plain <script src> in <head> blocks HTML parsing until the file downloads and runs - slow first paint.',
              'defer downloads in parallel and runs after the document is parsed, in order. Default choice for app bundles.',
              'async downloads in parallel and runs as soon as it is ready - order is not guaranteed. Fine for independent analytics.',
              'type="module" scripts are deferred by default. Put classic scripts at the end of <body> if you skip defer.',
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
              'Flexbox is one-dimensional: a row or a column. Use it for nav bars, toolbars, centering a button, or spacing items along one line.',
              'Grid is two-dimensional: rows and columns together. Use it for page shells, card galleries, and “this sits in column 2 / row 1”.',
              'A common pattern: Grid (or another layout) for the page structure, Flex inside each component to align its children.',
              'Syntax: display: flex; gap: 8px; align-items: center; vs display: grid; grid-template-columns: 1fr 2fr; gap: 16px;',
            ],
            difficulty: 'easy',
          },
          {
            id: 'css-2',
            question: 'What is the CSS box model, and how does box-sizing: border-box help?',
            answer: [
              'Every box is content + padding + border, with margin outside the border (margin does not add to width).',
              'box-sizing: content-box (default): width: 200px is only the content. Padding and border make the used width larger than 200px.',
              'box-sizing: border-box: width: 200px includes padding and border, so the box stays 200px. Layout math stays predictable.',
              'Most apps set *, *::before, *::after { box-sizing: border-box } once. Tailwind and modern resets already do this.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'css-3',
            question: 'How does stacking context work (z-index)?',
            answer: [
              'z-index only compares siblings inside the same stacking context. A child cannot climb above a neighbor of its parent.',
              'A new context is created by position + z-index other than auto, opacity < 1, transform, filter, isolation: isolate, and a few others.',
              'If a modal is trapped under a header, check the parent’s z-index / transform, not only the modal’s z-index: 9999.',
              'Keep z-index scales small (e.g. dropdown 10, modal 20). Huge numbers are a sign the stacking tree is messy.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'css-6',
            question: 'What is the difference between static, relative, absolute, fixed, and sticky?',
            answer: [
              'static: default flow. top/left/z-index do nothing.',
              'relative: stays in flow, but top/left nudge it. Also becomes the containing block for absolute children.',
              'absolute: removed from flow; positioned against the nearest non-static ancestor (or the viewport).',
              'fixed: pinned to the viewport (unless a transform ancestor creates a new containing block). sticky: in flow until a scroll threshold, then sticks (needs a scroll ancestor and a top/bottom).',
            ],
            difficulty: 'medium',
          },
          {
            id: 'css-7',
            question: 'When do you use px, rem, em, %, and vw/vh?',
            answer: [
              'px: one device pixel (after zoom). Fine for 1px borders; less ideal as your only type size.',
              'rem: relative to the root font size. Preferred for type and spacing so user font-size settings still scale the UI.',
              'em: relative to the current element’s font size. Useful inside components; can compound if nested.',
              '% is of the parent; vw/vh are of the viewport. min(100%, 40rem) or clamp() is safer than raw 100vw (scrollbar quirks).',
            ],
            difficulty: 'easy',
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
              'They are runtime variables: :root { --bg: #fff; --accent: #2563eb } then color: var(--accent).',
              'Unlike Sass $vars, they cascade and can change live - theme toggles, component tokens, JS-driven values.',
              'document.documentElement.style.setProperty("--bg", "#0b1016") updates every rule that uses var(--bg).',
              'Fallback: var(--accent, blue). Prefer tokens on :root or a theme class, not a random one-off on every node.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'css-5',
            question: 'Explain specificity and how you’d override a style cleanly.',
            answer: [
              'Rough score: inline style > #id > .class / [attr] / :hover > element / :pseudo. Equal scores: later rule wins.',
              'Don’t fight with #id or !important. Use a clearer class, nest under a modifier, or lower the original selector.',
              '@layer reset, base, components, utilities; later layers win even with weaker selectors - useful in design systems.',
              'Interview: explain the score, then say you’d refactor the selector instead of sprinkling !important.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'css-8',
            question: 'display: none vs visibility: hidden vs opacity: 0?',
            answer: [
              'display: none removes the box from layout and the a11y tree. No space, not focusable. Use when the thing is gone.',
              'visibility: hidden hides it but keeps the space. Descendants can become visible again. Usually still not announced.',
              'opacity: 0 makes it invisible but it still takes space, can receive clicks/focus unless you also set pointer-events: none.',
              'For “hide visually, keep for screen readers” use a sr-only class (clip/position), not display: none.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'css-9',
            question: 'How do media queries work, and what is a mobile-first query?',
            answer: [
              'They apply CSS only when a condition matches: @media (min-width: 768px) { .grid { grid-template-columns: 1fr 1fr } }.',
              'Mobile-first: write the small-screen styles as the default, then add min-width breakpoints for larger screens.',
              'max-width queries are desktop-first (override downward). Teams usually prefer min-width so the base file is the phone UI.',
              'Also useful: prefers-reduced-motion, prefers-color-scheme: dark, (hover: hover). Don’t rely on width alone for “is touch”.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'css-10',
            question: 'What is a reflow vs a repaint, and what CSS is “cheap”?',
            answer: [
              'Reflow (layout): the browser recalculates sizes/positions. Triggered by changing width, height, top, font-size, adding DOM, reading offsetHeight in a loop.',
              'Repaint: pixels change but geometry stays (color, background, visibility). Cheaper than reflow, still not free.',
              'Composite-only changes (transform, opacity) can stay on the GPU layer and skip layout - preferred for animation.',
              'Avoid layout thrashing: don’t read layout (clientHeight) then write styles in a tight loop. Batch reads, then writes.',
            ],
            difficulty: 'hard',
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
              'var is function-scoped: a var inside an if still exists for the whole function. It is hoisted and starts as undefined, so you can read it before the line (and get undefined, not a throw).',
              'let and const are block-scoped ({ }). They are hoisted too, but stay in the Temporal Dead Zone until the declaration line - reading them early throws ReferenceError.',
              'const cannot be reassigned (const x = 1; x = 2 throws). Object and array contents can still change: const user = {}; user.name = "Ada" is fine.',
              'Prefer const by default; use let when the binding must change; avoid var in new code.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-2',
            question: 'What is a closure?',
            answer: [
              'A closure is a function bundled with the variables from the scope where it was created (its lexical environment).',
              'Those outer variables stay alive after the outer function returns, as long as something still holds the inner function.',
              'function makeCounter() { let n = 0; return () => ++n } - each call to makeCounter() gets its own n. const c = makeCounter(); c() // 1; c() // 2.',
              'n is private: code outside cannot read or reset it except through the returned function. That is the usual interview “private state” story.',
              'One-liner: “a function plus the scope it was born in.” Not the same as a global variable - each closure can have its own copy.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-11',
            question: 'How is a closure used in real life? Give a practical example.',
            answer: [
              'Debounce: function debounce(fn, ms) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms) } }. The returned function closes over t and ms so later keystrokes share one timer.',
              'Factory / module privacy: function createWallet() { let balance = 0; return { add(n) { balance += n }, get() { return balance } } }. balance is not on the returned object.',
              'Event handlers and setTimeout callbacks close over values from the function that registered them. If those values change later, you can see a “stale closure” unless you re-bind or read from a ref.',
              'React hooks use the same idea: an effect or event handler closes over props and state from that render.',
              'In an interview, walk one example end-to-end: create → return inner fn → call it later → point at the closed variable.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-3',
            question: 'What is the difference between == and ===?',
            answer: [
              '=== (strict) compares type and value. 1 === "1" is false. No conversion.',
              '== (loose) coerces types first. 1 == "1" is true, 0 == false is true, null == undefined is true. Easy to get wrong.',
              '[] == false is true, "" == 0 is true - these are the examples interviewers use to show why == is risky.',
              'Prefer === and !== everywhere. The only common exception people mention is == null, which matches both null and undefined.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-4',
            question: 'How does this work in JavaScript?',
            answer: [
              'this is set by how the function is called, not where it was written (except arrow functions).',
              'obj.method() → this is obj. fn() in strict mode → this is undefined (sloppy mode: globalThis). new Fn() → this is the new instance.',
              'call/apply/bind can set this explicitly: fn.call(obj, a, b). Arrow functions do not get their own this - they use the this of the enclosing scope, and bind cannot change it.',
              'Losing this: const fn = obj.method; fn() is a bare call, so this is not obj. Fix with obj.method.bind(obj), or wrap as () => obj.method().',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-28',
            question: 'What is the difference between call, apply, and bind?',
            answer: [
              'All three set this for a regular function. They do not change this on arrow functions.',
              'fn.call(thisArg, a, b) runs fn now with this = thisArg and arguments listed one by one.',
              'fn.apply(thisArg, [a, b]) is the same, but arguments come as an array (older style; spread + call is more common now).',
              'fn.bind(thisArg, a) returns a new function with this (and optional leading args) fixed. It does not run until you call the result.',
              'Use bind for callbacks you will pass later (onClick, setTimeout). Use call/apply when you want to run immediately.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-7',
            question: 'What is hoisting in JavaScript?',
            answer: [
              'The engine sets up bindings before running the body line by line. Declarations are “moved up”; assignments stay put.',
              'function greet() {} is fully hoisted - you can call greet() above its line. function expressions (const greet = function () {}) are not.',
              'var x = 1 is hoisted as x = undefined, then assigned 1 later. That is why you can “use” it early and get undefined.',
              'let/const are hoisted but uninitialized (TDZ). Access before the line throws. Class declarations behave like let.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-31',
            question: 'What is the difference between null and undefined?',
            answer: [
              'undefined means “no value assigned yet”: a missing function argument, an object property that does not exist, a function with no return.',
              'null is an intentional empty value you assign: user.middleName = null. APIs often use it for “we looked; nothing is there.”',
              'typeof undefined === "undefined", but typeof null === "object" (a famous language bug). Check with value == null for either, or value === null / === undefined separately.',
              'JSON.stringify drops undefined in objects and turns it into null in arrays. null is kept. Don’t mix them randomly in the same field.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-32',
            question: 'What are rest and spread, and how do they differ?',
            answer: [
              'Spread expands: const copy = [...arr]; const obj2 = { ...obj, name: "Ada" }; Math.max(...nums).',
              'Rest collects: function sum(...nums) { return nums.reduce((a, b) => a + b, 0) } and const { id, ...rest } = user.',
              'Same ... token; meaning depends on position. In a call or literal it spreads; in a parameter or destructure it gathers.',
              'Spread on objects is a shallow copy: nested objects are still shared references. Spread on arrays copies one level of items the same way.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-33',
            question: 'What is the difference between a shallow copy and a deep copy?',
            answer: [
              'Shallow: new wrapper, same nested refs. const b = { ...a } or a.slice() / [...a]. Change b.nested.x and a.nested.x changes too.',
              'Deep: clone the whole tree so nested objects are new. structuredClone(a) is the built-in. JSON.parse(JSON.stringify(a)) drops functions, undefined, Dates, Maps.',
              'Assignment (const b = a) is not a copy - both names point at the same object.',
              'Interview: say when shallow is enough (one-level state updates) and when you need structuredClone or a library.',
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
              'for...in walks enumerable keys (strings) on an object, including inherited ones. for (const k in obj) { obj[k] }. Do not use it as your main array loop - you can hit extra keys and the order is not a real index walk.',
              'for...of walks values of an iterable: arrays, strings, Maps, Sets. for (const item of arr) { }. You can break, continue, and await inside it.',
              'arr.forEach((item, i) => { }) is an array method. It cannot break or return out of the outer function the way a for loop can, and await inside it does not pause the loop.',
              'Need early exit or await per item? Use for or for...of. Need a new array? Prefer map/filter over forEach.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-12',
            question:
              'What are Object.keys, Object.values, and Object.entries-and how do they relate to loops?',
            answer: [
              'For { a: 1, b: 2 }: Object.keys → ["a","b"], Object.values → [1,2], Object.entries → [["a",1],["b",2]].',
              'Once you have an array, you can for...of, map, filter, or Object.fromEntries(entries) to build a new object.',
              'These methods only see the object’s own enumerable keys - not inherited ones on the prototype.',
              'Typical loop: for (const [key, value] of Object.entries(user)) { }. That is the usual interview alternative to for...in.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-13',
            question:
              'When should you use for...in vs Object.keys / Object.entries?',
            answer: [
              'Default to Object.keys / Object.entries plus for...of. The set of keys is clear and you stay on own properties.',
              'for...in also visits inherited enumerable keys (unless you filter with Object.hasOwn(obj, key)). That surprise is why it is a weak default.',
              'Never use for...in as your main array loop. Array indexes are strings, and extra enumerable properties can show up.',
              'If you only need values, Object.values(obj) or for...of on a Map/Set is simpler than for...in.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-9',
            question: 'map vs filter vs reduce-when do you use each?',
            answer: [
              'map transforms every item and returns a new array of the same length: nums.map(n => n * 2).',
              'filter keeps items that pass a test: users.filter(u => u.active). Length can shrink; items are unchanged unless you also map.',
              'reduce folds the list into one value (number, object, even another array): nums.reduce((sum, n) => sum + n, 0). Always pass an initial value.',
              'Chain map + filter when that reads clearly. Use reduce when you are truly accumulating one result - not as a clever map.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-34',
            question: 'How do you loop an object and an array in everyday code?',
            answer: [
              'Array: for (const item of arr), or arr.map / filter / find. Use for (let i = 0; i < arr.length; i++) when you need the index and a break.',
              'Object: Object.entries(obj) then for...of. Avoid for...in unless you really want prototype keys.',
              'Map/Set are already iterable: for (const [k, v] of myMap), for (const v of mySet).',
              'Don’t use .map() if you ignore the returned array - that is a forEach (or a for) in disguise.',
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
              'JavaScript runs on one call stack: one function at a time. A long loop on that stack freezes clicks and paint - there is no extra JS thread for your code.',
              'Slow I/O (fetch, timers) is handed to the host. When it finishes, a callback is queued. The event loop waits until the stack is empty, then pulls the next job onto the stack.',
              'A typical turn: run one macrotask (timer, click, I/O callback) → drain every microtask (Promise.then, queueMicrotask) → maybe paint → next macrotask.',
              'That is how one thread stays responsive. It is not parallelism: two JS functions still never run at the same instant in one realm.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-36',
            question: 'What is a Promise in JavaScript?',
            answer: [
              'A Promise is an object that represents a value that is not ready yet - usually the result of async work (fetch, a timer, a file read).',
              'It has three states: pending (waiting), fulfilled (succeeded), rejected (failed). It starts pending and then settles once, forever.',
              'You create one with new Promise((resolve, reject) => { … }). The executor runs now; resolve/reject are how you finish it later.',
              'Once settled, anything waiting on it (.then / await) can run. That is the whole point: “do this when the result exists.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-37',
            question: 'What is resolve (and reject) on a Promise?',
            answer: [
              'resolve and reject are functions the Promise constructor gives your executor. You call one of them to settle the Promise.',
              'resolve(value) means success. The Promise becomes fulfilled with that value. reject(error) means failure. The Promise becomes rejected with that reason.',
              'new Promise((resolve) => { setTimeout(() => resolve("done"), 1000) }) - after 1s the Promise fulfills with "done".',
              'Call resolve or reject only once. Later calls are ignored. If the executor throws, the Promise rejects automatically.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-38',
            question: 'What is .then, and how is it related to resolve?',
            answer: [
              '.then(onFulfilled, onRejected) registers callbacks that run after the Promise settles. promise.then((value) => { … }) runs when it fulfills.',
              'resolve and .then are two ends of the same pipe. resolve(value) puts the value in; the first argument of .then is where that value comes out.',
              'Example: new Promise((resolve) => resolve(42)).then((n) => console.log(n)) prints 42. n is exactly what you passed to resolve.',
              'If you resolve with another Promise, .then waits for that inner one and then gets its value. .catch(err => …) is the reject side of the same pipe.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-39',
            question:
              'Where does the argument in resolve() go, and where does the argument in .then() come from?',
            answer: [
              'resolve(x) stores x as the fulfillment value of that Promise. It does not call your .then function by itself - it only settles the Promise.',
              'When you write .then((result) => { … }), result is that stored value. So resolve("hi") → result === "hi". The name (result, data, value) is yours; the data is from resolve.',
              'The function you pass to .then is the callback. You do not pass the data into .then - you pass a function that will receive the data later.',
              'If you return something from .then, that becomes the fulfillment value of the next Promise in the chain: resolve(1).then(n => n + 1).then(n => …) - the second n is 2, from the previous return, not from the original resolve.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-6',
            question: 'What is the difference between Promises and async/await?',
            answer: [
              'async/await is syntax on top of Promises. An async function always returns a Promise; await pauses that function until the Promise settles.',
              'Sequential steps read top-down: const res = await fetch(url); const data = await res.json(); vs fetch(url).then(r => r.json()).then(data => …).',
              'You still need Promise.all([a, b]) to run work in parallel. Awaiting a then b in sequence waits for a before starting b.',
              'Know .then/.catch, Promise.all (fail-fast), Promise.allSettled (wait for all), Promise.race (first to settle). await is not a replacement for those.',
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
              'Output order: first log, second log, then the Promise.then, then the timeout. That is the classic interview trace.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-26',
            question: 'What is the difference between the call stack, task queue, and microtask queue?',
            answer: [
              'Call stack: the functions that are running right now. Each call pushes a frame; return pops it. When it is empty, the event loop can take new work.',
              'Task (macro) queue: upcoming “turns” - setTimeout callbacks, many DOM events, some I/O. The loop takes one task, runs it, then looks at microtasks.',
              'Microtask queue: Promise.then/catch/finally, queueMicrotask, MutationObserver. These must finish before the next macrotask (and usually before paint).',
              'Event loop: the scheduler. It does not run JS itself; it decides which queue feeds the empty stack next.',
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
              'In interviews: lead with the shared micro vs macro model, then mention nextTick / phases if they ask about Node.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-35',
            question: 'How do you handle errors from fetch and Promises?',
            answer: [
              'fetch only rejects on network failure. HTTP 404/500 still resolve - check if (!res.ok) throw new Error(res.statusText) before res.json().',
              'async/await: wrap the sequence in try/catch. .then chains need .catch at the end (or a try/catch in the caller that awaits).',
              'Promise.all rejects on the first failure. Promise.allSettled([{ status, value/reason }, …]) if you need every result.',
              'Always surface a user-facing error and log the real one. Unhandled rejections can crash Node and are noisy in browsers.',
            ],
            difficulty: 'medium',
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
              'The JS primitives: string, number, boolean, bigint, symbol, null, undefined. TS adds void (function returns nothing useful) and never (cannot happen).',
              'Use lowercase: string, number, boolean. String / Number / Boolean are wrapper object types and almost never what you want.',
              'let name: string = "Ada"; let age: number = 36; let ok: boolean = true. Arrays: string[] or Array<string>.',
              'unknown is the type-safe “I do not know yet.” any turns the checker off. Prefer unknown for untrusted input.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-1',
            question: 'What is the difference between type and interface in TypeScript?',
            answer: [
              'Both can describe object shapes: interface User { name: string } and type User = { name: string }.',
              'interface can declaration-merge (two interface User blocks become one). Handy for extending library types; surprising if you did not mean to merge.',
              'type can do unions, intersections, mapped types, and aliases: type Id = string | number; type Flags = { [K in Key]: boolean }.',
              'Team style: pick one for objects (many teams use interface for public object APIs, type for unions and helpers). Both are fine.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ts-2',
            question: 'What is the difference between unknown and any?',
            answer: [
              'any disables checking. You can call, index, and assign it anywhere - bugs compile. Avoid it except as a last-resort escape hatch.',
              'unknown is “this value exists, but I have not proven what it is.” You must narrow before using it: if (typeof x === "string") x.toUpperCase().',
              'Use unknown for JSON.parse results, req.body, and other untrusted input until you validate (zod, type guards).',
              'as SomeType is an assertion, not a runtime check. Prefer a type guard: function isUser(v: unknown): v is User { … }.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-3',
            question: 'What are generics in TypeScript?',
            answer: [
              'A generic is a type parameter - a placeholder you fill in later so one function stays typed for many shapes.',
              'function identity<T>(value: T): T { return value } - identity("hi") makes T string. You keep the input type instead of widening to any.',
              'Everyday: Array<T>, Promise<T>, useState<T>, Record<K, V>. Constraints: function pick<T extends { id: string }>(row: T).',
              'Interview: “reuse logic without losing type information.” Don’t jump to any just because the type varies.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ts-4',
            question: 'What is the difference between interface extending and type intersections?',
            answer: [
              'interface Child extends Parent { extra: number } and type Child = Parent & { extra: number } often look the same for simple objects.',
              'extends is stricter on conflicting properties (same name, incompatible types) - TS errors instead of silently becoming never.',
              'A & B can collapse a conflict to never, which then shows up later as a confusing error. Fine for composing aliases, easy to misuse.',
              'Use extends for named object hierarchies. Use & when combining type aliases, unions, or utility types.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'ts-6',
            question: 'What do optional, union, and type narrowing look like?',
            answer: [
              'Optional: name?: string means string | undefined. Read with user.name?.toUpperCase() (optional chaining).',
              'Union: type Status = "idle" | "loading" | "error". A function can take string | number and you narrow with typeof or ===.',
              'Narrowing: if (typeof x === "string") { x /* string */ }. switch (status) { case "error": … } does the same for literals.',
              '?? is nullish coalescing: value ?? "default" only replaces null/undefined, not 0 or "". || would also replace 0.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-7',
            question: 'What are utility types like Partial, Pick, Omit, and Record?',
            answer: [
              'Partial<User> makes every field optional - useful for update payloads: prisma.user.update({ data: Partial<User> }).',
              'Pick<User, "id" | "name"> keeps those keys. Omit<User, "password"> drops a key. Common for API response shapes.',
              'Record<string, number> is { [key: string]: number }. Record<"a" | "b", boolean> is a closed map of those keys.',
              'These are types only - they do not change runtime objects. You still write the actual object; TS checks the shape.',
            ],
            difficulty: 'medium',
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
              'A progressive UI framework: you can drop it on one page or build a full SPA with the same component model.',
              'You write templates (or JSX) plus a script. Components own their state, props in, events out - similar idea to React.',
              'Vue 3 is the current line (Composition API, <script setup>, Vite). Vue 2 is legacy; mention the version in interviews.',
              'People pick it for readable templates, built-in reactivity, and a smaller “decisions to make” surface than React.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'vu-2',
            question: 'What is the difference between Options API and Composition API?',
            answer: [
              'Options API: export default { data() { return { count: 0 } }, methods: { inc() { this.count++ } }, computed, watch }.',
              'Composition API: <script setup> const count = ref(0); function inc() { count.value++ }. Logic is grouped by feature, not by option type.',
              'Composition is easier to extract into composables (useMouse, useFetch) and usually types more cleanly.',
              'Both work in Vue 3. New code and Vue docs lean Composition. You will still read Options API in older codebases.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-3',
            question: 'What are ref and reactive in Vue?',
            answer: [
              'ref(value) wraps any value. In script you use count.value; in the template {{ count }} is auto-unwrapped.',
              'reactive({ name: "Ada" }) makes a reactive object. You read user.name with no .value. If you replace the whole object (user = {…}) you lose the proxy.',
              'Prefer ref for primitives and when you may reassign the whole value. ref + reactive objects is also common.',
              'toRefs(reactiveObj) turns fields back into refs so you can destructure without breaking reactivity.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-4',
            question: 'What is v-model?',
            answer: [
              'Two-way binding shorthand. <input v-model="name"> keeps the input and name in sync as the user types.',
              'On a native input it is roughly :value="name" plus @input="name = $event.target.value".',
              'On a Vue 3 component it is modelValue + emit("update:modelValue"). Multiple: v-model:title="title".',
              'Use it for forms. For one-way data, prefer :value + @change so the parent stays the source of truth.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'vu-5',
            question: 'computed vs watch-when do you use each?',
            answer: [
              'computed(() => items.filter(i => i.active)) is a cached derived value. It reruns only when items change. Use it instead of a copied “filtered” ref.',
              'watch(source, (next, prev) => { … }) runs a side effect: fetch, write localStorage, sync a third-party widget.',
              'watchEffect(() => { … }) tracks whatever you read inside and reruns - handy, but easier to over-subscribe.',
              'Rule: if you can calculate it, use computed. If you must do something, use watch. Same idea as “no setState in useEffect to derive.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-6',
            question: 'How do props and emits work in Vue?',
            answer: [
              'Parent passes data down: <UserCard :user="user" />. Child declares defineProps<{ user: User }>() (or props: { user: Object }).',
              'Child talks back with events: const emit = defineEmits<{ (e: "select", id: string): void }>(); emit("select", user.id).',
              'Do not mutate a prop. Emit an event and let the parent update state (or use v-model).',
              'v-bind="$attrs" falls unused attrs through to a root element - useful in wrapper components.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'vu-7',
            question: 'What is a Vue composable?',
            answer: [
              'A function (usually named useX) that uses ref/computed/lifecycle and returns state + methods - Vue’s version of a React hook.',
              'Example: function useCounter() { const n = ref(0); const inc = () => n.value++; return { n, inc } }.',
              'Each call gets its own state unless you put a shared ref at module scope on purpose.',
              'Keep composables free of UI. Components call them; tests can call them without mounting a template.',
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
              'AngularJS is 1.x: JavaScript, controllers, $scope, digest cycle. It is legacy and in long-term support only.',
              'Angular (2+) is a rewrite: TypeScript, components, modules or standalone APIs, RxJS, a real compiler (Ivy).',
              'They do not share a codebase. “Angular” in a job interview almost always means 2+ (today: 17/18/19+).',
              'If a resume says AngularJS, ask which one - migrating 1.x to modern Angular is a rewrite, not a bump.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ng-2',
            question: 'What is Angular (modern)?',
            answer: [
              'A batteries-included TypeScript framework: components, router, forms, HttpClient, and dependency injection are official.',
              'Opinionated folders and patterns (feature modules or standalone routes) vs React, where you pick a router and a data library.',
              'Templates use Angular’s syntax ({{ }}, [prop], (event), *ngIf / @if). Logic lives in the component class.',
              'Good fit when the team wants one official way to build large apps. Heavier than Vue/React for a tiny widget.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ng-3',
            question: 'What are components, modules, and services in Angular?',
            answer: [
              'A component is a class + template + styles: @Component({ selector: "app-user", template: `{{ user.name }}` }).',
              'A service is a class with @Injectable() for shared logic (API calls, state). Components stay thin and call services.',
              'NgModule used to declare and import features. Modern Angular prefers standalone: @Component({ standalone: true, imports: [CommonModule] }).',
              'You will still see AppModule in older apps. In interviews, mention both and say standalone is the current default.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ng-4',
            question: 'What is data binding in Angular?',
            answer: [
              'Interpolation: {{ user.name }} prints a value in the template.',
              'Property binding: [src]="imageUrl" sets a DOM/component property from an expression.',
              'Event binding: (click)="save()" or (ngSubmit)="onSubmit()". $event is the payload.',
              'Two-way: [(ngModel)]="name" (FormsModule) or [value] + (valueChange). Banana-in-a-box is sugar for property + event.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ng-5',
            question: 'What is dependency injection in Angular?',
            answer: [
              'Angular creates class instances and passes them in. You ask for a type; the injector finds or creates it.',
              'constructor(private api: ApiService) or the inject(ApiService) function in standalone / field initializers.',
              '@Injectable({ providedIn: "root" }) makes a singleton for the whole app. Provide at a component to scope a fresh instance.',
              'Tests replace the real service with a mock in the testing module. That is the main reason DI shows up in interviews.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ng-6',
            question: 'What are Angular pipes and structural directives (*ngIf / @if)?',
            answer: [
              'Pipes format values in the template: {{ price | currency }} or {{ date | date:"short" }}. They should be pure and cheap.',
              '*ngIf="user" and *ngFor="let item of items; trackBy: trackId" add/remove DOM. New syntax: @if (user) { } @for (item of items; track item.id) { }.',
              'trackBy / track stops Angular from destroying every row when the array reference changes - important for large lists.',
              'Don’t put heavy work in a pipe that runs every change detection. Compute in the component or use OnPush + signals.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ng-7',
            question: 'What is change detection in Angular (and OnPush)?',
            answer: [
              'Default: Angular walks the component tree when events, timers, XHR, or other patched async work fire (Zone.js).',
              'OnPush skips a component unless its inputs change by reference, it fires an event, or you mark it dirty. Cheaper for large trees.',
              'Signals (signal(), computed()) update views more locally and are the newer model - mention them if the role is current Angular.',
              'Mutating an input object in place can fail to update an OnPush child. Replace the reference or use a signal.',
            ],
            difficulty: 'hard',
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
              'useState(initial) holds local state. const [n, setN] = useState(0). Calling setN queues a re-render with the new value.',
              'useEffect(fn, deps) runs fn after paint. Use it for fetch, subscriptions, timers. Return a cleanup function to unsubscribe.',
              'useLayoutEffect runs before the browser paints - measure DOM or sync scroll to avoid a flicker. Default to useEffect.',
              'useRef(x) is a mutable box ({ current }) that does not re-render. Also how you hold a DOM node: ref={el}.',
              'useMemo / useCallback cache a value or function identity. useContext reads a context. useReducer is state + actions. useTransition marks updates non-urgent.',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-2',
            question: 'What is the difference between useEffect and useLayoutEffect?',
            answer: [
              'useEffect: React paints, the user may see the frame, then your effect runs. Fine for fetch, logging, and subscriptions.',
              'useLayoutEffect: React applies DOM updates, your effect runs, then the browser paints. Use it to measure (getBoundingClientRect) or write layout before the user sees a flash.',
              'Layout effects block paint, so they can make the UI feel slower if you do heavy work there.',
              'Rule: start with useEffect. Switch only when you see a flicker or you must read layout synchronously.',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-8',
            question: 'When should you use useMemo or useCallback?',
            answer: [
              'useMemo(() => heavy(list), [list]) skips redo when list is the same reference. Worth it for expensive filters/sorts, not for `1 + 1`.',
              'useCallback(fn, deps) keeps the same function reference so memo() children or effect deps do not churn every render.',
              'Wrapping everything adds memory and comparison cost. Profile first. Unstable inline objects in props ({ style: {…} }) often matter more.',
              'If a child is cheap, extra memo is noise. If a child is heavy and you pass a new lambda every time, memo + useCallback can help.',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-29',
            question: 'What is the rules of hooks, and why does order matter?',
            answer: [
              'Only call hooks at the top of a function component or custom hook - not inside if, loops, or nested functions.',
              'React matches hook state by call order. If you skip a useState when a flag is false, the next hook reads the wrong slot.',
              'Custom hooks (useAuth, useDebouncedValue) are just functions that call hooks. They must follow the same rule.',
              'eslint-plugin-react-hooks catches most mistakes. If you need a conditional effect, put the if inside the effect, not around the hook.',
            ],
            difficulty: 'easy',
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
              'useState + useEffect to set a filtered list causes a second render and can go stale if you miss a dep. Usually the wrong way to derive.',
              'Compute during render: const visible = items.filter(...) or wrap it in useMemo when the filter is expensive. One path, always in sync.',
              'useState alone is right only if the user can edit that list independently (they add/remove items that are not just “items + query”).',
              'Rule: if you can calculate it from props/state, don’t store it. Store the inputs; derive the output.',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-26',
            question: 'What belongs in useEffect, and what does not?',
            answer: [
              'Yes - talking to the outside world: fetch, WebSocket, timers, document listeners, focusing an input, sending analytics.',
              'No - turning props/state into another value for render. Compute it in the function body or useMemo, not setState in an effect.',
              'No - a click, submit, or keypress. Put that in the event handler so it runs because the user did something, not after paint.',
              'No - copying props into state “just in case.” That extra copy goes stale. Use the prop, or remount with key={id} when the identity changes.',
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
              'Keys tell React which list item is which between renders so it can reuse the same component instance and DOM node.',
              'key={item.id} from your data is the default. Indexes (key={i}) break when you insert, delete, or sort - input state jumps to the wrong row.',
              'Never use a random key={Math.random()} - every render remounts the row and you lose state and focus.',
              'Keys must be unique among siblings, not globally unique. Two lists can both use id="1".',
            ],
            difficulty: 'easy',
          },
          {
            id: 're-4',
            question: 'What is the difference between controlled and uncontrolled components?',
            answer: [
              'Controlled: React state is the source of truth. <input value={name} onChange={e => setName(e.target.value)} />. Every keystroke updates state and re-renders.',
              'Uncontrolled: the DOM keeps the value. You give defaultValue and read it later with a ref (inputRef.current.value) on submit.',
              'Controlled is easier when the UI must react live (disable Save, show validation, filter a list).',
              'Uncontrolled (or React Hook Form) is lighter when you only care at submit time and the form is large.',
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
              'createPortal(child, domNode) renders child into domNode (often document.body) while keeping it in the React tree.',
              'Context, events in React, and hooks still work as if the portal lived in the parent. Only the DOM parent changes.',
              'Use it when overflow: hidden, stacking, or z-index on an ancestor would clip a modal, tooltip, dropdown, or toast.',
              'You still need focus trap, Escape to close, and an accessible dialog role - the portal only solves placement.',
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
              'After you set state, React builds a new element tree (from JSX) and compares it to the previous tree - that compare step is reconciliation.',
              'If the element type and key match, React reuses the existing component/DOM node and updates changed props.',
              'If the type changes (div → span, or <List> → <Grid>), React unmounts the old tree and mounts a new one. State on that subtree is lost.',
              'You describe UI; React decides the minimum DOM edits. You do not move nodes by hand.',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-11',
            question: 'What is React’s diffing algorithm (at a high level)?',
            answer: [
              'It is a heuristic, not a perfect tree-edit distance. It walks level by level and assumes different component types mean “replace this subtree.”',
              'Lists use keys to match old and new siblings. Without keys, React may reuse the wrong row and keep the wrong input state.',
              'It does not search the whole tree for a moved node. A node that changes parent looks like a delete + insert unless you keep the same parent and key.',
              'Interview: type change → remount; same type + same key → update; lists need stable keys.',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-12',
            question: 'What is batching in React?',
            answer: [
              'React groups several setState calls into one re-render. setA(1); setB(2) in the same handler does not render twice.',
              'React 18 batches in events, promises, timeouts, and native handlers - not only in click handlers like older versions.',
              'If you must read the DOM between updates (measure after setState), flushSync(() => setX(1)) forces a sync render. Rare.',
              'Functional updates (setN(n => n + 1)) are the safe way to chain updates that depend on the previous value inside a batch.',
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
              'Put state as close as possible to where it is used. A keystroke in the header should not re-render a 200-row table.',
              'Split context (theme vs cart) so a cart change does not rerender every themed button. Or use a store with selectors (Zustand).',
              'memo() a heavy child when its props are stable. Fix the props (useMemo objects, useCallback, primitive values) or memo does nothing.',
              'Virtualize long lists. Profile with React DevTools before wrapping the whole app in memo.',
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
              'The event travels in three phases: capture (window → target), target, then bubble (target → window).',
              'addEventListener("click", fn) listens on the bubble phase by default. addEventListener("click", fn, true) or { capture: true } listens on the way down.',
              'Most app code uses bubbling. Capture is useful for intercepting before a child (e.g. a modal overlay, analytics).',
              'e.target is the deepest node that was clicked. e.currentTarget is the node whose listener is running.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'br-4',
            question: 'What is event delegation?',
            answer: [
              'You put one listener on a parent and decide what to do from the event target, instead of a listener on every child.',
              'list.addEventListener("click", (e) => { const btn = e.target.closest("button[data-id]"); if (!btn || !list.contains(btn)) return; … }).',
              'Rows you add later still work - they do not need their own listener. Fewer listeners, less memory, no rebinding after render.',
              'React already delegates many events at the root. You still use the same idea with onClick on a <ul>, not on each of 10k rows if you can.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'br-5',
            question: 'What is the difference between event.preventDefault() and event.stopPropagation()?',
            answer: [
              'preventDefault() stops the browser’s default action: form submit, following an <a href>, checking a checkbox if you cancel it.',
              'stopPropagation() stops the event from reaching other listeners on ancestors (and later phases). The default action can still happen.',
              'A form handler often needs preventDefault() so the page does not reload. It rarely needs stopPropagation().',
              'stopImmediatePropagation() also blocks other listeners on the same node. Use sparingly - it makes debugging harder.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'br-6',
            question: 'What is the difference between addEventListener and onclick=?',
            answer: [
              'el.addEventListener("click", fn) can attach many listeners, use capture, and removeEventListener(fn) with the same function reference.',
              'el.onclick = fn (or onclick="..." in HTML) replaces whatever was there. You cannot stack two onclick handlers cleanly.',
              'Always prefer addEventListener in application code. In React, onClick={fn} is React’s wrapper, not the DOM onclick property.',
              'To remove a listener you must pass the same function: store it, don’t pass an inline lambda if you need to remove it later.',
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
              'The browser parses HTML into the DOM and CSS into the CSSOM. JS can block parsing if a script has no defer/async.',
              'DOM + CSSOM become the render tree (visible nodes + their styles). display: none nodes are left out.',
              'Then layout (geometry), paint (pixels), and composite (layers to the screen). That is first meaningful paint.',
              'Render-blocking CSS and sync JS delay first paint. Defer JS, minify CSS, and avoid huge blocking fonts if you care about LCP.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'br-3',
            question: 'localStorage vs sessionStorage vs cookies?',
            answer: [
              'localStorage: string key/value, ~5MB, survives tabs and restarts, same origin. Never sent to the server automatically.',
              'sessionStorage: same API, but one tab’s session. A new tab gets a copy of the top-level session; closing the tab clears it.',
              'Cookies: small (~4KB), sent on matching HTTP requests. Use for server-read auth (with HttpOnly, Secure, SameSite). Not for big JSON.',
              'All three are JS-readable except HttpOnly cookies. Do not store access tokens in localStorage if XSS is a concern - an injected script can steal them.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'br-7',
            question: 'What is the same-origin policy, and what counts as a different origin?',
            answer: [
              'Origin = scheme + host + port. https://app.com ≠ http://app.com ≠ https://app.com:3000 ≠ https://api.app.com.',
              'Browsers block a page from reading another origin’s DOM, storage, and most responses. That is the same-origin policy.',
              'You can still embed images and scripts from other origins; you just cannot read their contents from JS (except CORS-enabled fetches).',
              'CORS is the server opt-in that lets fetch/XHR read a cross-origin response. postMessage is the explicit way for windows to talk.',
            ],
            difficulty: 'medium',
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
              'useState / useReducer: component or small tree state (form fields, open/closed). Start here.',
              'Context: values that change rarely and are needed deep in the tree (theme, current user, locale). Not a high-frequency store.',
              'Zustand / Jotai: global client state with selectors so only subscribed components re-render. Little boilerplate.',
              'Redux Toolkit: large teams, time-travel, middleware, strict action patterns. More setup; still common in older codebases.',
              'TanStack Query (React Query): server state - cache, refetch, retries. Don’t copy API data into Redux “just because.”',
              'Pick the smallest tool. Many apps are local state + one query library + maybe a tiny store.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'st-2',
            question: 'Why do many teams prefer Zustand over Redux?',
            answer: [
              'A Zustand store is a few lines: const useStore = create((set) => ({ count: 0, inc: () => set(s => ({ count: s.count + 1 })) })).',
              'Components subscribe with selectors: useStore(s => s.count). Only those components re-render when count changes.',
              'Redux Toolkit is more ceremony (slices, dispatch, providers) but gives DevTools, middleware, and a shared mental model for big teams.',
              '“Better” means better fit. Don’t rewrite a working Redux app for taste. Don’t add Redux for a theme toggle.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'st-3',
            question: 'When is Context a bad choice for state?',
            answer: [
              'Every consumer of that context re-renders when the value changes, even if they only need one field.',
              'A context that holds { user, cart, setCart } will rerender the whole tree on every cart add. That is the usual footgun.',
              'Split contexts (UserContext vs CartContext) or use a store with selectors. Keep context for stable or rare values.',
              'memo() on a child does not help if the child still useContexts the changing value.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'st-4',
            question: 'What is server state vs client state?',
            answer: [
              'Server state already lives on the server (users, products). You cache it, it can be stale, it needs refetch, retry, and pagination.',
              'Client state exists only in the UI: modal open, selected tab, draft form text that was never saved.',
              'Treat server state with a query library (TanStack Query, SWR). Treat client state with useState or a small store.',
              'Duplicating fetched data into Redux without cache rules is how apps get two sources of truth.',
            ],
            difficulty: 'easy',
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
              'Debounce: wait until calls stop, then run once. Search boxes: wait 200-300ms after the last keystroke before fetching.',
              'function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms) } }.',
              'Throttle: run at most once per interval while events keep firing. Scroll or resize handlers: update at 16-100ms, not every event.',
              'Polling: fetch on a timer (setInterval) when you have no websocket/SSE. Always clear the interval and back off on errors.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-4',
            question: 'When would you choose throttling over debouncing?',
            answer: [
              'Throttle when you need updates *during* the activity: a progress bar while scrolling, a drag preview, a live window-size label.',
              'Debounce when only the last value matters: search query, window resize that triggers an expensive layout, “save draft” after typing.',
              'Leading-edge throttle runs immediately then ignores extras. Trailing debounce waits until quiet. Some helpers offer both.',
              'Wrong choice: debounce a scroll position (the UI feels dead) or throttle a search (you fire half-typed queries).',
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
              'LCP (Largest Contentful Paint): when the main content (hero image or big text) appears. Aim under ~2.5s. Fix by shrinking images, not blocking JS, server speed.',
              'INP (Interaction to Next Paint): how fast the page responds to clicks/keys. Long JS tasks on the main thread hurt this. Split work, debounce, yield.',
              'CLS (Cumulative Layout Shift): unexpected jumps. Reserve image sizes, don’t inject banners above existing content, use font-display carefully.',
              'Together they are Core Web Vitals - Google’s field metrics. Measure with Lighthouse and CrUX, not only your laptop.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-2',
            question: 'How do you reduce JavaScript bundle size?',
            answer: [
              'Code-split routes: lazy(() => import("./Settings")) so the first page does not download the admin screen.',
              'Tree-shake ES modules; avoid import _ from "lodash" (use lodash-es or import debounce from "lodash/debounce"). Drop moment for date-fns/Temporal.',
              'Dynamic import() rare features (charts, markdown, rich text) on click or viewport.',
              'Run a bundle analyzer (rollup-plugin-visualizer, source-map-explorer). Guessing which library is heavy is usually wrong.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-5',
            question: 'What is a long task, and how do you keep the main thread free?',
            answer: [
              'A long task is ~50ms+ of JS on the main thread. The page cannot paint or handle input during that time (hurts INP).',
              'Break work: process 100k items in chunks with requestIdleCallback or setTimeout(0), or move it to a Web Worker.',
              'Don’t parse huge JSON or run heavy filters on every keystroke in the component body.',
              'Chrome Performance panel → “Long task” bars. React startTransition can mark UI updates as interruptible, not the heavy compute itself.',
            ],
            difficulty: 'hard',
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
              'A page on https://evil.com must not read https://bank.com/api/me just because the user is logged in. That is the point of CORS.',
              'The browser sends the request; the server must opt in with Access-Control-Allow-Origin (and credentials headers if cookies are used).',
              'A “preflight” OPTIONS request happens for non-simple methods/headers (PUT, JSON content-type). The real request runs only if OPTIONS succeeds.',
              'CORS is a browser rule. curl and server-to-server calls are not blocked. Fix CORS on the API, not by turning off the browser.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-2',
            question: 'GET vs POST vs PUT vs PATCH vs DELETE?',
            answer: [
              'GET: read. Safe and idempotent - no body side effects. Cacheable. Don’t put secrets in the query string.',
              'POST: create or “do something” (not idempotent). /orders with a body. Repeating it may create two orders.',
              'PUT: replace the whole resource at that URL. Sending the same PUT twice should leave the same result (idempotent).',
              'PATCH: partial update ({ "name": "Ada" }). DELETE: remove. Idempotent in theory - deleting twice should still be “gone.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-3',
            question: 'XSS vs CSRF-how do you mitigate each?',
            answer: [
              'XSS (Cross-Site Scripting): attacker runs JS on your origin. Escape output, don’t use dangerouslySetInnerHTML with user HTML, set a strict CSP.',
              'Once they have XSS they can steal localStorage tokens and act as the user. Treat XSS as game over for client-side secrets.',
              'CSRF (Cross-Site Request Forgery): a third-party page makes the browser send your cookies to your API (form POST). The user didn’t mean to.',
              'Mitigate CSRF with SameSite=Lax/Strict cookies, CSRF tokens, and not accepting cookie auth on CORS * APIs. Bearer tokens in headers are not sent by foreign forms.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'nt-4',
            question: 'What is the difference between JWT, cookies, and session auth?',
            answer: [
              'Session cookie: server stores the session; browser sends an HttpOnly cookie. Server can revoke by deleting the session. Classic and still solid.',
              'JWT: a signed token the client sends (often Authorization: Bearer). The server can verify without a DB lookup, but revoke is harder (short expiry + denylist).',
              'Don’t store JWTs in localStorage if you can use HttpOnly cookies - XSS can read localStorage.',
              'Interview: explain tradeoffs (revocation, XSS, CSRF) instead of “JWT is modern therefore better.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-5',
            question: 'What do HTTP status codes 200, 201, 204, 400, 401, 403, 404, and 500 mean?',
            answer: [
              '200 OK: success with a body. 201 Created: a new resource (often with Location). 204 No Content: success, nothing to return (DELETE).',
              '400 Bad Request: the client sent a bad body/query. 401 Unauthorized: not authenticated (missing/bad token). 403 Forbidden: authenticated but not allowed.',
              '404 Not Found: no such resource. 409 Conflict: state clash (duplicate email). 422: validation errors (common in APIs).',
              '500: your server crashed. 502/503: gateway/upstream down. Don’t return 200 with { error: true } - use the right code.',
            ],
            difficulty: 'easy',
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
              'A JavaScript runtime built on Chrome’s V8 engine, plus APIs for files, networks, and processes that browsers do not give you.',
              'You write servers, CLIs, and build tools in JS/TS. There is no DOM, window, or document unless you add a library.',
              'Your JS still runs on one thread. libuv handles async I/O (sockets, files) so many connections can wait without a thread each.',
              'process.argv, fs, http, path, crypto are core modules: import fs from "node:fs/promises".',
            ],
            difficulty: 'easy',
          },
          {
            id: 'no-2',
            question: 'What is npm, and what is package.json for?',
            answer: [
              'npm (and yarn/pnpm) install packages into node_modules and record them in package.json.',
              'package.json holds name, "type", scripts ("dev": "vite"), and version ranges: "react": "^19.0.0".',
              'npm install / npm i adds deps. npm i -D eslint adds a devDependency. npm run dev runs the script.',
              'package-lock.json pins exact versions. Commit it. Use npm ci in CI for a clean, lockfile-only install.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'no-3',
            question: 'require vs import in Node?',
            answer: [
              'CommonJS: const fs = require("fs"); module.exports = { fn }. Older default. Synchronous load, works without "type": "module".',
              'ES modules: import fs from "node:fs"; export function fn() {}. Need "type": "module" in package.json or a .mjs file.',
              'You cannot freely mix them in one file. CJS can dynamic-import ESM; ESM loading CJS is awkward. New apps should be ESM.',
              'Interview: say both exist, show one import and one require, and mention "type": "module".',
            ],
            difficulty: 'medium',
          },
          {
            id: 'no-4',
            question: 'Why is Node good for I/O-heavy APIs?',
            answer: [
              'Waiting on DB or HTTP does not block the process - the event loop starts other requests while one is waiting.',
              'Thousands of idle connections are cheap compared to one OS thread per request (classic thread-per-connection servers).',
              'CPU-heavy work (image resize, big JSON parse, crypto in a loop) blocks the single JS thread. Everyone else waits.',
              'Offload CPU to a Worker thread, a queue, or another service. Scale Node horizontally with more processes (cluster, containers).',
            ],
            difficulty: 'medium',
          },
          {
            id: 'no-5',
            question: 'What is process.env, and how do you handle secrets?',
            answer: [
              'process.env.PORT and process.env.DATABASE_URL are environment variables. In local dev, dotenv loads a .env file.',
              'Never commit .env with real secrets. Commit .env.example with empty keys so others know what to set.',
              'Read env at startup and fail fast if a required key is missing. Don’t scatter process.env.X in every file - one config module.',
              'In production, the host injects env (Docker, Vercel, systemd). Rotating a secret means changing env and restarting, not editing code.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'no-6',
            question: 'fs.readFile vs fs.readFileSync - which do you use in a server?',
            answer: [
              'readFileSync blocks the event loop until the disk is done. Fine in a one-off script or at process startup.',
              'In a request handler, use fs.promises.readFile or fs.readFile with a callback so other requests can run.',
              'Same rule for any sync API: crypto.pbkdf2Sync, JSON.parse of a 50MB file - they stall every connection.',
              'Streams (createReadStream) are better for large files so you don’t load the whole thing into memory.',
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
              'A thin Node HTTP framework. You mount routes and middleware; it does not include an ORM, auth, or a view layer unless you add them.',
              'const app = express(); app.use(express.json()); app.get("/health", (req, res) => res.json({ ok: true })); app.listen(3000).',
              'Still the most common “just an API” choice in JS. Nest, Fastify, and Hono sit on top of or next to the same idea.',
              'Interview: routing + middleware pipeline, then show req.params / req.body / res.status(201).json(data).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-2',
            question: 'What is middleware in Express?',
            answer: [
              'A function (req, res, next) => { }. It can read the request, mutate req, send a response, or call next() to pass down the chain.',
              'app.use(express.json()) parses JSON bodies into req.body. app.use(authMiddleware) can reject 401 before the route runs.',
              'Order matters. Logging first, then JSON parser, then auth, then routes, then the error handler last.',
              'If you neither send a response nor call next(), the request hangs. That is a frequent bug.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-3',
            question: 'How do you define a basic route in Express?',
            answer: [
              'app.get("/users", async (req, res) => { const users = await db.user.findMany(); res.json(users) }).',
              'app.post("/users", (req, res) => { /* req.body */ res.status(201).json(created) }). Same for put, patch, delete.',
              'Route params: app.get("/users/:id", …) → req.params.id. Query: /users?page=2 → req.query.page (strings).',
              'Router: const r = express.Router(); r.get("/", list); app.use("/users", r) keeps files small.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-4',
            question: 'How do you handle errors in Express?',
            answer: [
              'In async routes, wrap and call next(err) or use a wrapper. Thrown errors in async handlers are not caught unless you pass them on (or use Express 5).',
              'Error middleware has four args: (err, req, res, next) => { res.status(err.status ?? 500).json({ error: err.message }) }.',
              'Put that middleware after all routes. Don’t leak stack traces to clients in production; log them server-side.',
              '404: a final app.use((req, res) => res.status(404).json({ error: "Not found" })) if no route matched.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ex-5',
            question: 'What is the difference between app.use, app.get, and a Router?',
            answer: [
              'app.use(fn) runs for every method and path prefix. app.use("/api", fn) matches /api and /api/anything.',
              'app.get("/users", fn) only GET /users (exact-ish; trailing slash settings vary).',
              'express.Router() is a mini-app you mount: app.use("/users", usersRouter). Helps split files by resource.',
              'Middleware on a router only applies to that router’s routes - good for resource-specific auth.',
            ],
            difficulty: 'easy',
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
              'A TypeScript framework for Node APIs, inspired by Angular: modules, controllers, injectable services, decorators.',
              '@Controller("users") class UsersController { constructor(private users: UsersService) {} @Get() findAll() { return this.users.findAll() } }.',
              'It sits on Express (default) or Fastify. You get a folder structure, DI, pipes, guards, and testing utilities.',
              'Pick it when the API will grow and you want one official architecture. Overkill for a 3-route prototype.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ne-2',
            question: 'Controller vs service (provider) in Nest?',
            answer: [
              'Controller: HTTP surface. Decorators map routes: @Get(), @Post(), @Param("id"), @Body(). It should not talk to the DB directly.',
              'Service / provider: @Injectable() class with business logic and DB calls. Controllers inject it in the constructor.',
              'Keep controllers thin: validate input, call a service, return the result. Services are easier to unit-test without HTTP.',
              'A provider is anything Nest can inject (service, repo, config). @Injectable() + listing it in the module’s providers.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ne-3',
            question: 'What is a Nest module?',
            answer: [
              '@Module({ imports: [DbModule], controllers: [UsersController], providers: [UsersService], exports: [UsersService] }).',
              'imports bring other modules. exports make a provider available to modules that import this one.',
              'AppModule is the root. Feature modules (UsersModule, AuthModule) keep the graph readable.',
              'If you forget to export a service, another module cannot inject it - a common Nest error.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ne-4',
            question: 'Nest vs Express-when pick which?',
            answer: [
              'Express: few files, you choose every library. Fast to a first endpoint, easy to make a mess at scale.',
              'Nest: DI, modules, guards, pipes, OpenAPI decorators. More files on day one, clearer on day 200.',
              'Nest still uses Express or Fastify under the hood - you are not leaving Node HTTP, you are adding structure.',
              'Interview: “Express for small/simple, Nest when the team wants Angular-like structure and testable services.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ne-5',
            question: 'What are guards, pipes, and interceptors in Nest?',
            answer: [
              'Guard: canActivate(context) → boolean. Auth and roles: @UseGuards(JwtAuthGuard). Runs before the handler.',
              'Pipe: transform or validate input. ValidationPipe + class-validator on a DTO class rejects bad bodies with 400.',
              'Interceptor: wrap the call (logging, mapping, timeout). Can tap the result before it goes to the client.',
              'Exception filters turn thrown errors into HTTP responses. Together they keep controllers free of boilerplate.',
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
              'A React framework: file-based routing, bundling, image/font helpers, and ways to render on the server or at build time.',
              'App Router (app/) is the current model: folders are routes, page.tsx is the UI, layout.tsx wraps children.',
              'You can fetch data on the server, expose Route Handlers, and still use client components for interactivity.',
              'Used for marketing sites, SaaS apps, and fullstack JS. Not required for every React app - Vite SPA is still fine.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nx-2',
            question: 'SSR vs SSG vs CSR in Next (simple view)?',
            answer: [
              'CSR: the server sends a shell; JS renders in the browser. Fast to deploy, weaker first paint/SEO unless you add more.',
              'SSR: on each request the server renders HTML with fresh data. Good for personalized or often-changing pages.',
              'SSG: HTML is built once at build time (or ISR: rebuild on a timer). Fast CDN pages - blogs, docs, marketing.',
              'App Router mixes these: Server Components + fetch cache/revalidate options replace the old getServerSideProps / getStaticProps split.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nx-3',
            question: 'What are Server Components vs Client Components?',
            answer: [
              'Server Components (default in app/) run on the server. They can read files, call DBs, and send less JS to the browser. No useState or onClick.',
              'Client Components need "use client" at the top. They can use hooks, events, and browser APIs. They still hydrate in the browser.',
              'Keep a leaf interactive (a button, a form) as client, and keep the page/layout as server so data fetching stays on the server.',
              'You cannot pass functions or class instances from server to client as props - only serializable data.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nx-4',
            question: 'What is an API route / Route Handler in Next?',
            answer: [
              'app/api/users/route.ts exports HTTP functions: export async function GET() { return Response.json(users) }.',
              'export async function POST(req: Request) { const body = await req.json(); … return Response.json(created, { status: 201 }) }.',
              'Useful as a BFF: cookies, secrets, and DB stay on the server; the browser calls /api/... on the same origin (no CORS fight).',
              'Pages Router used pages/api/*.ts. App Router Route Handlers are the current equivalent.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nx-5',
            question: 'What are page.tsx, layout.tsx, loading.tsx, and next/link?',
            answer: [
              'page.tsx is the route UI. app/blog/[slug]/page.tsx → /blog/hello with params.slug.',
              'layout.tsx wraps all child routes and keeps state on navigation. Root app/layout.tsx is required (html/body).',
              'loading.tsx shows a Suspense fallback while the page’s server work finishes. error.tsx is an error boundary.',
              '<Link href="/about"> is client-side navigation with prefetch. Use it instead of <a> for in-app routes so you don’t full-reload.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nx-6',
            question: 'How does caching / revalidate work in the App Router?',
            answer: [
              'fetch(url, { next: { revalidate: 60 } }) caches the result and refreshes at most every 60 seconds (ISR-style).',
              'fetch(url, { cache: "no-store" }) is always fresh (SSR-like). export const dynamic = "force-dynamic" on a page does the same idea.',
              'revalidatePath("/blog") or revalidateTag("posts") after a mutation so the next view is not stale.',
              'Defaults have changed across Next versions - say “I check the current cache default and set no-store when the data must be live.”',
            ],
            difficulty: 'hard',
          },
        ],
      },
    ],
  },
  {
    id: 'mongodb',
    type: 'Mongo',
    name: 'MongoDB',
    blurb: 'Document database: collections, CRUD, lookups, and query operators.',
    topics: [
      {
        id: 'mongo-basics',
        title: 'MongoDB basics',
        questions: [
          {
            id: 'mo-1',
            question: 'What is MongoDB?',
            answer: [
              'A document database (NoSQL). You store JSON-like BSON documents instead of rows with a fixed set of columns.',
              'A document can nest objects and arrays: { name: "Ada", addresses: [{ city: "London" }] } - no extra table required.',
              'Schema is flexible: two documents in the same collection can have different fields. You still usually enforce a schema in the app or with JSON Schema validators.',
              'Good when the document matches how the API already thinks. Not a free win if you need heavy joins and strict constraints.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-2',
            question: 'Document vs collection vs database?',
            answer: [
              'Document: one record, like a row, but it can nest. Has an _id (ObjectId by default) that uniquely identifies it.',
              'Collection: a named group of documents, like a table (users, orders). No enforced columns unless you add a validator.',
              'Database: a named container for collections on the server (mydb.users).',
              'SQL mapping people use: database ≈ database, collection ≈ table, document ≈ row, field ≈ column.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-3',
            question: 'When would you choose MongoDB over SQL?',
            answer: [
              'The shape changes often, or you store nested blobs that would become many SQL tables (CMS pages, event payloads, product catalogs).',
              'You read a whole aggregate at once (a user with embedded settings) more often than you join across many entities.',
              'You want to scale out with replica sets / sharding and can accept weaker join support than Postgres.',
              'Don’t pick it only because “NoSQL is modern.” If you need multi-row constraints, reporting joins, and SQL tooling, Postgres is often simpler.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-4',
            question: 'What is an index in MongoDB (and why care)?',
            answer: [
              'An index is a side data structure on a field (or fields) so find/sort do not scan every document. db.users.createIndex({ email: 1 }).',
              '1 is ascending, -1 is descending. Unique: createIndex({ email: 1 }, { unique: true }). Compound: { city: 1, age: -1 }.',
              'Without an index, a filter on a large collection is a collection scan - slow and expensive on CPU/IO.',
              'Each index costs RAM and slows writes (insert/update must maintain the index). Index the queries you actually run; explain() to check.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'mongo-crud',
        title: 'Insert, select, update, delete',
        questions: [
          {
            id: 'mo-5',
            question: 'How do you insert a document?',
            answer: [
              'db.users.insertOne({ name: "Ada", age: 36 }) returns { acknowledged, insertedId }. If you omit _id, Mongo creates an ObjectId.',
              'db.users.insertMany([{ name: "Ada" }, { name: "Lin" }]) inserts a batch. Use { ordered: false } if you want later docs to still insert after one failure.',
              'In drivers / Mongoose: User.create({ name: "Ada" }) or new User({…}).save(). Same idea - one document in, _id out.',
              'Inserting the same unique field twice (unique index on email) throws a duplicate-key error. Catch E11000.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-6',
            question: 'How do you select / find documents?',
            answer: [
              'db.users.find({}) returns a cursor of every document. In the shell it prints a page; in a driver you await .toArray() or iterate.',
              'db.users.find({ age: 36 }) is the filter (like WHERE age = 36). Combine fields for AND: { city: "Paris", age: { $gte: 18 } }.',
              'db.users.findOne({ name: "Ada" }) returns one document or null - use it when you expect a single match.',
              'Projection: find({ }, { name: 1, _id: 0 }) returns only name. Don’t pull huge unused fields over the network.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-7',
            question: 'How do you update a document?',
            answer: [
              'db.users.updateOne({ name: "Ada" }, { $set: { age: 37 } }) changes age and leaves other fields alone.',
              'Always use an operator ($set, $inc, $push, $unset). Passing a raw object as the update can replace the whole document and drop fields.',
              'updateMany({ city: "Paris" }, { $set: { country: "FR" } }) updates every match. Check matchedCount / modifiedCount.',
              '$inc: { views: 1 } increments. $push: { tags: "js" } appends to an array. $unset: { temp: "" } removes a field.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-8',
            question: 'How do you delete a document?',
            answer: [
              'db.users.deleteOne({ _id: id }) removes the first match. Prefer _id so you cannot delete the wrong “Ada”.',
              'db.users.deleteMany({ age: { $lt: 18 } }) removes every match. Returns deletedCount.',
              'deleteMany({}) deletes the entire collection’s documents. Treat it like DELETE FROM users without WHERE.',
              'drop() removes the collection (and indexes). Use it for teardown, not for “delete some users.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-9',
            question: 'update vs replaceOne?',
            answer: [
              'updateOne + $set changes only the fields you name. Other fields stay. That is the usual “edit this user” path.',
              'replaceOne(filter, newDoc) swaps the whole document for newDoc. Fields you omit are gone. Use it when you have a full new version of the record.',
              'replaceOne still keeps the original _id. You cannot change _id by replacing.',
              'If you pass a plain object to updateOne without $set, older drivers treated it like a replace and you could wipe fields - always use operators.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-10',
            question: 'What does upsert do?',
            answer: [
              'updateOne({ email }, { $set: { name } }, { upsert: true }) updates the match, or inserts a new document if none exists.',
              'One round-trip instead of find-then-insert, so two requests cannot both think “missing” and insert twice as easily (still use a unique index).',
              'The inserted doc is the filter fields plus the update operators (and $setOnInsert for fields only on insert).',
              'Same idea as SQL INSERT ON CONFLICT or Prisma upsert. Always put a unique index on the filter field.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'mongo-joins',
        title: 'Joins & related data',
        questions: [
          {
            id: 'mo-11',
            question: 'How do you “join” in MongoDB?',
            answer: [
              'There is no SQL JOIN keyword on find(). You either embed related data in the same document or store an id and resolve it later.',
              'Embed: { name: "Ada", address: { city: "London" } }. One read, no join. Best when you always load the child with the parent.',
              'Reference: orders have userId. Then either a second find({ userId }) or an aggregation $lookup.',
              'Think in access patterns: if you always need the child with the parent and it does not grow forever, embed. If many children or reuse, reference.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-12',
            question: 'What is $lookup (the join operator)?',
            answer: [
              '$lookup is an aggregation stage that pulls matching docs from another collection onto each input doc.',
              '{ $lookup: { from: "orders", localField: "_id", foreignField: "userId", as: "orders" } } - users._id equals orders.userId.',
              'The new field (as: "orders") is always an array. No match → []. That behaves like a LEFT JOIN, not an INNER JOIN.',
              'It is heavier than a find on one collection. Index foreignField (userId) and use $lookup after a tight $match.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-13',
            question: 'Embed vs reference - when to use each?',
            answer: [
              'Embed when the child is small, not reused, and loaded with the parent: a user’s current address, settings, a few tags.',
              'Reference when the child is reused or grows without bound: users → thousands of orders, products shared by many carts.',
              'A 16MB document limit exists. Embedding an ever-growing array will hit it. That is a hard reason to reference.',
              'Mongo’s old “prefer embed” advice still holds for simple trees - not for every relationship. Design from the query, not from SQL habits.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-14',
            question: 'How do you flatten $lookup results?',
            answer: [
              '{ $unwind: "$orders" } turns the orders array into one output document per order (like exploding a LEFT JOIN into rows).',
              'preserveNullAndEmptyArrays: false (the default) drops users with no orders - closer to INNER JOIN. Set true to keep them (LEFT JOIN).',
              'Pipeline form: $lookup: { from: "orders", let: { uid: "$_id" }, pipeline: [{ $match: { $expr: { $eq: ["$userId", "$$uid"] }, paid: true } }], as: "orders" }.',
              'Use the pipeline form when the join needs extra filters, sorts, or limits on the other collection.',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'mongo-queries',
        title: 'Basic queries & operators',
        questions: [
          {
            id: 'mo-15',
            question: 'How do comparison filters work?',
            answer: [
              '{ age: { $gt: 18 } } is age > 18. Also $gte (≥), $lt, $lte, $ne (not equal). Equality is just { age: 18 }.',
              '{ name: { $in: ["Ada", "Lin"] } } matches if name is any value in the list - like SQL IN.',
              '{ city: { $nin: ["X", "Y"] } } matches if city is none of those. $exists: true / false checks whether the field is present.',
              'Regex: { name: /^A/ } or { name: { $regex: "ada", $options: "i" } }. Prefer prefix regex + an index; leading-wildcard regex cannot use the index well.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-16',
            question: 'How do $and / $or work?',
            answer: [
              'Two fields in one object are AND: { city: "Paris", age: { $gte: 18 } } means both must match.',
              '{ $or: [{ age: 20 }, { name: "Ada" }] } matches if either clause is true. $nor is “none of these.”',
              'You need $and as an array when one field has two operators you cannot merge, or when you mix $or groups: { $and: [{ $or: […] }, { active: true }] }.',
              'Keep filters simple enough to hit an index. A huge $or across unindexed fields becomes a collection scan.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-17',
            question: 'How do you project, sort, skip, and limit?',
            answer: [
              'Projection picks fields: find(filter, { name: 1, email: 1, _id: 0 }). 1 means include, 0 means exclude. Don’t mix include and exclude except for _id.',
              'sort({ age: -1, name: 1 }) is age descending, then name ascending. 1 = asc, -1 = desc. Sort on indexed fields when the set is large.',
              'skip(10).limit(5) skips 10 then returns 5 - page 3 of size 5 if you count from 0. Fine for small offsets; skip gets slow on huge pages.',
              'In drivers: collection.find(filter).project({ name: 1 }).sort({ age: -1 }).limit(5).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-18',
            question: 'What is the aggregation pipeline?',
            answer: [
              'A list of stages that transform documents in order: db.orders.aggregate([{ $match }, { $group }, { $sort }, { $project }]).',
              '$match filters early (like WHERE) - put it first so later stages see fewer docs and can use indexes.',
              '$group: { _id: "$city", total: { $sum: "$amount" }, n: { $count: {} } } is GROUP BY city with aggregates.',
              'Also: $lookup (join), $unwind (array → rows), $project (shape). Use it for reports; use find() for simple CRUD.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-19',
            question: 'How do you page results in MongoDB (and why skip gets slow)?',
            answer: [
              'find(filter).sort({ _id: 1 }).skip(page * size).limit(size) works for small offsets.',
              'skip(100000) still walks 100000 index entries - gets slower as the page number grows.',
              'Keyset / cursor paging: find({ _id: { $gt: lastId } }).sort({ _id: 1 }).limit(size) uses the index and stays cheap.',
              'Always sort on a unique, indexed field when paging so rows do not jump between pages.',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'mongo-indexes',
        title: 'Indexes & lookup types',
        questions: [
          {
            id: 'mo-20',
            question: 'What kinds of indexes does MongoDB have?',
            answer: [
              'Single-field: db.users.createIndex({ email: 1 }). The default _id index is unique and always there.',
              'Compound: { city: 1, age: -1 } - one index on several fields. Order matters: it can serve { city } and { city, age }, not { age } alone.',
              'Multikey: automatic when you index an array field. Each array value gets an index entry. { tags: 1 } on { tags: ["js", "db"] }.',
              'Also: unique, partial, sparse, TTL, text, hashed, wildcard. Pick from the query, not “index every field.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-21',
            question: 'What are unique, partial, sparse, and TTL indexes in Mongo?',
            answer: [
              'Unique: createIndex({ email: 1 }, { unique: true }) - two docs cannot share that value. Needed for “find this user by email” to stay honest.',
              'Partial: { unique: true, partialFilterExpression: { email: { $type: "string" } } } indexes only docs that match the filter. Smaller, and unique applies only to those docs.',
              'Sparse: skip docs that are missing the field. Older alternative to partial. Prefer partial - it is more precise.',
              'TTL: createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }) deletes the doc after that date. Sessions, OTPs, cache rows.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-22',
            question: 'What are text, hashed, and wildcard indexes in Mongo?',
            answer: [
              'Text: createIndex({ title: "text", body: "text" }) then find({ $text: { $search: "postgres join" } }). Word search, not a replacement for Elasticsearch.',
              'Hashed: createIndex({ userId: "hashed" }) - even shard key distribution. Equality only; cannot range-scan a hashed index.',
              'Wildcard: createIndex({ "$**": 1 }) or { "settings.$**": 1 } indexes unknown/dynamic field names. Useful for mixed documents; easy to over-index.',
              'Hashed ≠ unique email lookup. Text ≠ prefix LIKE. Use a normal B-tree (1 / -1) for equality and range on a known field.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'mo-23',
            question: 'What are the different types of $lookup in MongoDB?',
            answer: [
              'Equality lookup: { $lookup: { from: "orders", localField: "_id", foreignField: "userId", as: "orders" } }. Match localField to foreignField. Result is an array (LEFT JOIN).',
              'Pipeline lookup: { $lookup: { from: "orders", let: { uid: "$_id" }, pipeline: [{ $match: { $expr: { $eq: ["$userId", "$$uid"] } } }, { $limit: 5 }], as: "orders" } }.',
              'Use the pipeline form when the join needs extra $match, $sort, $limit, or a computed key - not only field == field.',
              'Uncorrelated pipeline (no let / no $expr to the parent) just attaches the same sub-pipeline result to every parent. Rare; know it exists.',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'mongo-find',
        title: 'Find many vs find unique',
        questions: [
          {
            id: 'mo-24',
            question: 'What is the difference between find, findOne, and findMany in Mongo?',
            answer: [
              'find(filter) returns a cursor of every matching document - “find many.” In Node: const users = await col.find({ city: "Paris" }).toArray().',
              'findOne(filter) returns the first match or null - “find one.” No cursor. Use it when you expect at most one useful row (or you only need any one).',
              'There is no findMany() in the shell. Drivers and ORMs (Mongoose Model.find, Prisma findMany) are the many form; findOne / findUnique are the one form.',
              'find({}).limit(1) is still a cursor. Prefer findOne when you want a single document object.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-25',
            question: 'How do you look up one unique document in Mongo?',
            answer: [
              'By _id: findOne({ _id: new ObjectId("…") }) or findOne({ _id: id }). The _id index is unique - this is the default unique lookup.',
              'By another unique field: findOne({ email: "a@x.com" }) only stays unique if you created a unique index on email. Without it, two Adas can exist.',
              'Mongoose: User.findById(id), User.findOne({ email }). Prisma: findUnique({ where: { email } }) - Prisma will not compile findUnique on a non-unique field.',
              'If the field is not unique, use find (many) or findOne and accept “first match,” not “the only match.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-26',
            question: 'When do you use find (many) vs a unique lookup?',
            answer: [
              'Find many: lists, filters, search, “all orders for this user” - find({ userId }).sort({ createdAt: -1 }).limit(20).',
              'Find unique: login by email, get-by-id, “does this slug exist?” - findOne / findUnique on a unique index.',
              'A unique lookup should hit one index entry and stop. A many-query uses the index (or a scan) and may return thousands - always sort + limit.',
              'Interview: “unique means the database enforces one row; findOne without a unique index only means we took the first.”',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'mongo-sql-vs-nosql',
        title: 'SQL vs NoSQL & documents',
        questions: [
          {
            id: 'mo-27',
            question: 'What is the difference between SQL and NoSQL?',
            answer: [
              'SQL (relational) stores data in tables with fixed columns. You query with SQL: SELECT, JOIN, WHERE. Postgres, MySQL, SQLite.',
              'NoSQL is a label for stores that are not “tables + SQL as the main model.” Mongo is document NoSQL. Others: key-value (Redis), wide-column (Cassandra), graph (Neo4j).',
              'SQL: schema up front, strong constraints, joins, transactions. NoSQL documents: flexible shape, nest related data, scale-out patterns - joins and constraints are weaker or app-enforced.',
              'Neither is “better.” SQL is the default for most apps. Document NoSQL fits evolving JSON-shaped aggregates. Interview: explain the model, not a brand war.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-28',
            question: 'What is table-based data vs a JSON / document structure?',
            answer: [
              'A table is a grid: every row has the same columns. users: id | name | email. One cell, one value. Extra facts (orders) live in another table.',
              'A document is a JSON-like tree: { _id, name, email, orders: [{ id, total }] }. Nested objects and arrays are allowed in one record.',
              'Table = fixed shape, many relations. Document = one object that can look like your API response. Mongo stores BSON (binary JSON), not a text .json file.',
              'You can put JSON inside a SQL column (Postgres JSONB) - that is still a table row with a JSON cell, not a document database.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-29',
            question: 'How does inserting a user + orders differ in JSON vs a relational table?',
            answer: [
              'Document: one insertOne({ name: "Ada", orders: [{ total: 10 }, { total: 20 }] }). The child data is inside the parent. One write, one _id.',
              'Relational: INSERT INTO users (name) VALUES (\'Ada\') RETURNING id; then INSERT INTO orders (user_id, total) VALUES (1, 10), (1, 20); two tables, a foreign key.',
              'To add a new order later: Mongo $push: { orders: { total: 30 } } (or a second orders collection). SQL: one INSERT into orders - users table does not change.',
              'Document insert is simpler when you always load the whole blob. Table insert is simpler when orders are shared, huge, or queried on their own.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-30',
            question: 'How does data look in the database if it is not JSON?',
            answer: [
              'In Postgres it looks like rows: a users table might be id=1, name=Ada, email=a@x.com on one line; the next line is id=2, name=Lin, …',
              'Related data is not nested. Ada’s orders are other rows in orders: id=10, user_id=1, total=10. You JOIN to see them together.',
              'On disk it is pages of typed columns (integers, text), not a JSON string. The SQL client prints a grid; that grid is the mental model.',
              'Mongo’s on-disk form is BSON (binary). The shell prints JSON because that is the readable view. “Not JSON” in SQL means: grid of columns, not a tree.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-31',
            question: 'What stays the same, and what do you give up, with documents vs tables?',
            answer: [
              'Same: you still have a database, collections/tables, ids, indexes, and CRUD. You still think about unique keys and “how will I query this?”',
              'Documents give up: cheap arbitrary joins, one place for “email must be unique across all uses,” and a single schema everyone agrees on.',
              'Tables give up: stuffing a whole page/object in one write, and changing shape without a migration (you add a column or a JSONB field).',
              'Hybrid: Postgres JSONB for a flexible bag on a row; Mongo references + $lookup when the document would grow too large.',
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
    blurb: 'Relational SQL: tables, CRUD, joins, and everyday queries.',
    topics: [
      {
        id: 'postgres-basics',
        title: 'PostgreSQL basics',
        questions: [
          {
            id: 'pg-1',
            question: 'What is PostgreSQL?',
            answer: [
              'An open-source relational database. Data lives in tables (rows and columns) and you talk to it with SQL.',
              'It enforces types, primary/foreign keys, unique constraints, and ACID transactions - the usual “SQL database” contract.',
              'Richer than many people expect: JSONB, full-text search, arrays, CTEs, window functions, and strong concurrency (MVCC).',
              'Default choice for most new backends unless you have a specific document or analytics store reason not to.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-2',
            question: 'Primary key vs foreign key?',
            answer: [
              'Primary key uniquely identifies a row: id SERIAL PRIMARY KEY or id UUID PRIMARY KEY. One per table; cannot be NULL.',
              'Foreign key points at another table’s key: user_id INT REFERENCES users(id). Postgres rejects an order whose user does not exist.',
              'ON DELETE CASCADE removes children when the parent goes. ON DELETE RESTRICT / NO ACTION blocks the parent delete. Pick on purpose.',
              'Together they keep relationships honest so you don’t store orders for missing users.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-3',
            question: 'What do SELECT, INSERT, UPDATE, DELETE do?',
            answer: [
              'SELECT reads rows: SELECT id, name FROM users WHERE age > 18 ORDER BY name.',
              'INSERT adds rows: INSERT INTO users (name, age) VALUES (\'Ada\', 36) RETURNING id.',
              'UPDATE changes existing rows: UPDATE users SET age = 37 WHERE id = 1. Always include WHERE unless you mean the whole table.',
              'DELETE removes rows: DELETE FROM users WHERE id = 1. Same WHERE warning. These four are CRUD in SQL.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-4',
            question: 'What is a JOIN (at a basic level)?',
            answer: [
              'A JOIN combines rows from two tables using a related column, usually a foreign key: orders.user_id = users.id.',
              'INNER JOIN keeps only pairs that match. LEFT JOIN keeps every left row and fills the right side with NULL when there is no match.',
              'You need joins because data is normalized: users and orders are separate tables instead of one wide, duplicated table.',
              'SELECT u.name, o.total FROM users u INNER JOIN orders o ON o.user_id = u.id;',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-5',
            question: 'What is a transaction (ACID idea, simply)?',
            answer: [
              'A transaction is a group of SQL statements that all commit or all roll back. BEGIN; … COMMIT; or ROLLBACK; on error.',
              'Atomic: transfer money with two UPDATEs - if the second fails, the first is undone. Consistent: constraints still hold at commit.',
              'Isolated: other sessions don’t see your half-finished work (default READ COMMITTED in Postgres). Durable: after COMMIT it survives a crash.',
              'In ORMs: prisma.$transaction([...]) or db.transaction(async (tx) => { … }). Use them whenever two writes must stay together.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'postgres-crud',
        title: 'Insert, select, update, delete',
        questions: [
          {
            id: 'pg-6',
            question: 'How do you INSERT a row?',
            answer: [
              'INSERT INTO users (name, age) VALUES (\'Ada\', 36); lists columns so table order cannot silently swap values.',
              'Several rows: INSERT INTO users (name) VALUES (\'Ada\'), (\'Lin\'), (\'Grace\'); one statement, one round-trip.',
              'INSERT INTO users (name) SELECT name FROM staging; copies from a query. DEFAULT / DEFAULT VALUES fills serials and defaults.',
              'Add RETURNING id, name if the app needs the generated id without a second SELECT.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-7',
            question: 'How do you SELECT rows?',
            answer: [
              'SELECT name, age FROM users WHERE age > 18; - name the columns you need. SELECT * is fine in the console, noisy in app code.',
              'Add ORDER BY name ASC, LIMIT 20. Without ORDER BY the row order is not a guarantee you should rely on.',
              'Table aliases keep joins readable: SELECT u.name FROM users AS u. Qualify columns (u.name) once two tables are involved.',
              'DISTINCT removes duplicate result rows. DISTINCT ON (user_id) is Postgres-specific for “one row per user.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-8',
            question: 'How do you UPDATE rows?',
            answer: [
              'UPDATE users SET age = 37, city = \'Paris\' WHERE id = 1; only the rows that match WHERE change.',
              'No WHERE updates every row. Treat that as a production incident waiting to happen.',
              'SET views = views + 1 increments from the current value. SET name = name || \'!\'; expressions are allowed.',
              'UPDATE users u SET last_order = o.created FROM orders o WHERE o.user_id = u.id - update from another table. RETURNING * to see the new row.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-9',
            question: 'How do you DELETE rows?',
            answer: [
              'DELETE FROM users WHERE id = 1; removes matching rows. Prefer the primary key so you cannot delete the wrong “Ada.”',
              'DELETE FROM users; with no WHERE deletes the whole table (data only). Constraints and indexes stay.',
              'TRUNCATE users; is faster for “empty this table” - it is DDL-ish, cannot take a WHERE, and can CASCADE to children.',
              'DELETE FROM users WHERE id = 1 RETURNING *; if you need the deleted row. Soft-delete (SET deleted_at) is an app choice, not SQL DELETE.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-10',
            question: 'What does RETURNING do?',
            answer: [
              'RETURNING asks Postgres to send back columns from the rows that were just inserted, updated, or deleted.',
              'INSERT INTO users (name) VALUES (\'Ada\') RETURNING id, name; - you get the serial id without a follow-up SELECT.',
              'UPDATE users SET age = 37 WHERE id = 1 RETURNING *; DELETE FROM users WHERE id = 1 RETURNING id; same idea.',
              'ORMs expose this as .returning() (Drizzle) or the object create/update returns (Prisma). Use it to avoid extra queries.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-11',
            question: 'How do you upsert in Postgres?',
            answer: [
              'INSERT INTO users (email, name) VALUES (\'a@x.com\', \'Ada\') ON CONFLICT (email) DO UPDATE SET name = EXCLUDED.name;',
              'EXCLUDED.name is the value you tried to insert. ON CONFLICT DO NOTHING skips the row if the unique key already exists.',
              'The conflict target must be a PRIMARY KEY or UNIQUE constraint (email in the example). Without it, ON CONFLICT cannot run.',
              'This is one statement - safer than SELECT then INSERT when two requests race. Same idea as Mongo upsert / Prisma upsert.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'postgres-joins',
        title: 'Joins',
        questions: [
          {
            id: 'pg-12',
            question: 'What is an INNER JOIN?',
            answer: [
              'INNER JOIN keeps a result row only when the join condition matches on both tables. No match → that pair is dropped.',
              'SELECT u.name, o.total FROM users u INNER JOIN orders o ON o.user_id = u.id; - users with zero orders do not appear.',
              'Write INNER JOIN (or just JOIN, same default) plus ON. Putting the condition only in WHERE on a comma join is older style.',
              'Use it when you need the relationship to exist: “orders with a known user,” “posts that have an author.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-13',
            question: 'What is a LEFT (OUTER) JOIN?',
            answer: [
              'LEFT JOIN keeps every row from the left table. If the right side has no match, its columns are NULL.',
              'SELECT u.name, o.id FROM users u LEFT JOIN orders o ON o.user_id = u.id; - Ada still appears even with no orders; o.id is NULL.',
              'WHERE o.id IS NULL after a LEFT JOIN is the usual “users with no orders” query. Do not put right-side filters in WHERE if you still want unmatched left rows - put them in ON.',
              'LEFT OUTER JOIN is the same as LEFT JOIN. “Outer” just stresses that unmatched left rows stay.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-14',
            question: 'What is a RIGHT (OUTER) JOIN?',
            answer: [
              'RIGHT JOIN keeps every row from the right table and NULLs the left columns when there is no match - the mirror of LEFT JOIN.',
              'SELECT u.name, o.id FROM users u RIGHT JOIN orders o ON o.user_id = u.id; keeps every order, even if the user row is missing.',
              'Most teams flip the table order and write a LEFT JOIN instead so the “keep these” table is always on the left.',
              'Know it for interviews; you will rarely type RIGHT JOIN in app SQL.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-15',
            question: 'What is a FULL OUTER JOIN?',
            answer: [
              'FULL OUTER JOIN keeps unmatched rows from both sides. Match when keys are equal; otherwise the missing side is NULL.',
              'SELECT a.id, b.id FROM team_a a FULL OUTER JOIN team_b b ON a.email = b.email; - in A only, in B only, or in both.',
              'Useful for diffs and reconciliations (“who is in this export but not that table?”). Heavy if both tables are large.',
              'FULL JOIN is the short name. Not every database supports it; Postgres does.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-16',
            question: 'What is a CROSS JOIN?',
            answer: [
              'CROSS JOIN is every left row paired with every right row - a Cartesian product. 10 colors × 8 sizes = 80 rows.',
              'SELECT * FROM colors CROSS JOIN sizes; has no ON clause. That is correct for “all combinations.”',
              'A JOIN with a condition that is always true (or a forgotten ON in some engines) can accidentally do this and explode the result.',
              'Use it on purpose for combinations or generating series. Never as a substitute for INNER JOIN.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-17',
            question: 'What is a SELF JOIN?',
            answer: [
              'A self join is a join from a table to itself. You must alias both sides so SQL can tell the two roles apart.',
              'Employees and managers live in one table: SELECT e.name, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id.',
              'Same idea for comments + parent comment, or a category + parent category.',
              'Without aliases (e, m) the query cannot say which id is the child and which is the manager.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-18',
            question: 'INNER vs OUTER JOIN - when to pick each?',
            answer: [
              'INNER JOIN when a row is useless without a match: “paid orders with a user.” Unmatched rows would only add noise.',
              'LEFT JOIN when the left side must appear anyway: “all users, plus their orders if any,” dropdowns, dashboards.',
              'FULL OUTER JOIN when you need both leftovers: “rows in file A, file B, or both.” Rare in CRUD apps, common in reports.',
              'If you LEFT JOIN and then WHERE right.id IS NOT NULL, you just wrote an INNER JOIN the long way.',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'postgres-queries',
        title: 'Basic queries',
        questions: [
          {
            id: 'pg-19',
            question: 'How do WHERE, ORDER BY, LIMIT, and OFFSET work?',
            answer: [
              'WHERE runs per row before grouping: WHERE age > 18 AND city = \'Paris\'. Use AND / OR / parentheses.',
              'ORDER BY age DESC, name ASC sorts the result. First key wins; later keys break ties. Add a unique key last so paging is stable.',
              'LIMIT 10 OFFSET 20 returns 10 rows after skipping 20 (page 3 of size 10). OFFSET gets slower on huge pages - keyset (WHERE id > last) is better.',
              'Logical order to remember: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-20',
            question: 'How do LIKE, IN, and BETWEEN work?',
            answer: [
              'LIKE \'A%\' matches a prefix; LIKE \'%ing\' a suffix; _ is one character. ILIKE is the case-insensitive Postgres version.',
              'id IN (1, 2, 3) or email IN (SELECT email FROM vip). NOT IN is dangerous with NULLs in the list - prefer NOT EXISTS.',
              'id BETWEEN 10 AND 20 is inclusive (10 and 20 both match). Works for dates too: created_at BETWEEN \'2026-01-01\' AND \'2026-01-31\'.',
              'Leading-wildcard LIKE \'%foo\' cannot use a normal B-tree index well. Prefix LIKE \'foo%\' can.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-21',
            question: 'How do GROUP BY and HAVING work?',
            answer: [
              'GROUP BY city collapses rows that share a city into one result row. Non-grouped columns must be aggregated.',
              'SELECT city, COUNT(*) AS n FROM users GROUP BY city; - one line per city with how many users.',
              'WHERE filters rows before grouping. HAVING COUNT(*) > 5 filters groups after. “Cities with more than 5 users” is HAVING, not WHERE.',
              'SELECT city, COUNT(*) FROM users WHERE active = true GROUP BY city HAVING COUNT(*) > 5 ORDER BY n DESC;',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-22',
            question: 'What are COUNT, SUM, AVG, MIN, MAX?',
            answer: [
              'Aggregates compute one value from many rows: COUNT, SUM, AVG, MIN, MAX (and more: BOOL_OR, ARRAY_AGG, STRING_AGG).',
              'COUNT(*) counts rows. COUNT(email) skips NULL emails. COUNT(DISTINCT city) counts unique cities.',
              'They work on the whole table (SELECT COUNT(*) FROM users) or per GROUP BY. AVG ignores NULL; SUM of no rows is NULL, not 0 - wrap with COALESCE if you need 0.',
              'Window version: COUNT(*) OVER (PARTITION BY city) keeps detail rows and adds a total column - not the same as GROUP BY.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-23',
            question: 'How do you handle NULL in queries?',
            answer: [
              'NULL means “unknown.” WHERE col = NULL is never true. Use WHERE col IS NULL or IS NOT NULL.',
              'COALESCE(col, 0) returns col unless it is NULL, then 0. Useful in SELECT and in SUM edge cases.',
              'LEFT JOIN fills unmatched right columns with NULL. WHERE o.id IS NULL is the usual “users with no orders” pattern.',
              'UNIQUE allows multiple NULLs in Postgres (NULL ≠ NULL). If you need one empty email, use a partial unique index.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-24',
            question: 'What is an index in Postgres, and when do you add one?',
            answer: [
              'CREATE INDEX idx_users_email ON users (email); speeds WHERE email = $1 and some ORDER BY email.',
              'Primary keys and UNIQUE already have indexes. You add extras for foreign keys you join/filter on and for hot search columns.',
              'EXPLAIN ANALYZE SELECT … shows Seq Scan (read the table) vs Index Scan. Use it instead of guessing.',
              'Writes get slower with each index. Don’t index every column. Partial indexes (WHERE active) keep them small.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-25',
            question: 'What is normalization, and why not one giant table?',
            answer: [
              'Normalization splits repeated data into related tables so you store a user’s email once, not on every order row.',
              '1NF: atomic cells. 2NF/3NF: no repeating groups or transitive facts (city → zip stored once, not per order).',
              'Joins put the pieces back together at read time. That is the trade: cleaner writes, more JOINs on read.',
              'You can denormalize later (cache a count) when a join is proven hot - not as the default schema.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'postgres-indexes',
        title: 'Index types & lookups',
        questions: [
          {
            id: 'pg-26',
            question: 'What kinds of indexes does PostgreSQL have?',
            answer: [
              'B-tree (default): CREATE INDEX ON users (email); equality, range (<, >), ORDER BY, LIKE \'foo%\'. Use this unless you have a reason not to.',
              'Hash: equality only (=). Rarely worth it over B-tree. CREATE INDEX ON users USING HASH (email);',
              'GIN: values inside a container - JSONB keys, arrays, full-text tsvector. CREATE INDEX ON products USING GIN (data jsonb_path_ops);',
              'GiST / SP-GiST: geometry, ranges, some text. BRIN: huge append-only tables (time-series) - tiny index, coarse. Name the type in USING ….',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-27',
            question: 'What are unique, partial, expression, and covering indexes in Postgres?',
            answer: [
              'Unique: CREATE UNIQUE INDEX ON users (email); or UNIQUE on the column. Enforces one row per value and is the index for “find unique.”',
              'Partial: CREATE INDEX ON users (email) WHERE deleted_at IS NULL; only active rows. Smaller, and unique can apply only to that slice.',
              'Expression: CREATE INDEX ON users (lower(email)); so WHERE lower(email) = \'ada@x.com\' can use the index. Index the expression you query.',
              'Covering: CREATE INDEX ON users (email) INCLUDE (name); an Index Only Scan can return name without touching the table heap.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-28',
            question: 'What is an index lookup vs a sequential scan in Postgres?',
            answer: [
              'Index Scan / Index Only Scan: jump to matching keys via the index, then (maybe) fetch the heap row. Good for selective WHERE (email = $1, id = $1).',
              'Bitmap Index Scan: collect many matching pages, then read the table in order. Common for “fairly selective but not one row.”',
              'Seq Scan: read the whole table. Faster when you need most rows - random index jumps would be worse. Not always a bug.',
              'EXPLAIN ANALYZE shows which one ran. “Lookup” in interviews usually means Index Scan on a unique/PK key: one row, one index probe.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'pg-29',
            question: 'How do you look up related rows in Postgres (join vs subquery)?',
            answer: [
              'Join lookup: SELECT u.*, o.total FROM users u JOIN orders o ON o.user_id = u.id WHERE u.id = 1 - pull related rows in one query.',
              'Subquery lookup: SELECT * FROM orders WHERE user_id = (SELECT id FROM users WHERE email = \'a@x.com\'); or WHERE user_id IN (SELECT …).',
              'EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id) is a “does a related row exist?” lookup - often faster than COUNT(*) > 0.',
              'These are the SQL versions of Mongo $lookup. Prefer a join when you need columns from both; EXISTS when you only need yes/no.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'postgres-find',
        title: 'Find many vs find unique',
        questions: [
          {
            id: 'pg-30',
            question: 'How do you find many rows vs one unique row in Postgres?',
            answer: [
              'Find many: SELECT id, name FROM users WHERE city = \'Paris\' ORDER BY name LIMIT 20; zero, one, or many rows.',
              'Find unique: SELECT * FROM users WHERE id = 1; or WHERE email = \'a@x.com\' when email is UNIQUE. You expect one row or none.',
              'SQL has no findMany() name. The many form is a filtered SELECT. The unique form is SELECT … WHERE on a PRIMARY KEY or UNIQUE column.',
              'In ORMs: prisma.user.findMany({ where: { city } }) vs findUnique({ where: { id } }). Drizzle: .where(eq(users.city, "Paris")) vs .where(eq(users.id, 1)).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-31',
            question: 'What makes a lookup “unique” in Postgres?',
            answer: [
              'A PRIMARY KEY or UNIQUE constraint (or unique index). The database will not store two rows with that key - that is the guarantee.',
              'SELECT * FROM users WHERE email = $1 is a unique lookup only if email is unique. Without the constraint it is “find first of many.”',
              'LIMIT 1 without UNIQUE is not uniqueness. You just threw extra rows away. Two requests can still insert two Adas.',
              'Prisma findUnique only accepts unique fields for this reason. Raw SQL will happily WHERE a non-unique column - you must know the schema.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-32',
            question: 'When do you SELECT many vs look up one row?',
            answer: [
              'Many: list pages, search, “all orders for user 1,” reports. Always ORDER BY and usually LIMIT / keyset. This can use a non-unique index.',
              'One: get-by-id, login by email, “load this slug.” Use the PK/unique index so the plan is an Index Scan that stops at one row.',
              'SELECT * FROM users is find-many of the whole table - fine in a console, not in a request handler.',
              'Interview: many = set of rows + pagination; unique = one key, one row, unique index.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'postgres-sql-vs-docs',
        title: 'Tables vs JSON / SQL vs NoSQL',
        questions: [
          {
            id: 'pg-33',
            question: 'What is the difference between SQL and NoSQL?',
            answer: [
              'SQL databases are relational: tables, columns, keys, SQL language. Postgres is the usual example. You model entities and relations, then JOIN.',
              'NoSQL means “not this model as the core.” Document stores (Mongo) keep JSON-like records. Key-value, wide-column, and graph stores are other NoSQL families.',
              'SQL strengths: constraints, joins, ad-hoc queries, transactions, reporting. Document strengths: nested data that matches the app object, fewer joins for that aggregate.',
              'Postgres can store JSONB too - it is still SQL. “NoSQL” is the primary access model, not “has no JSON” or “has no schema at all.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-34',
            question: 'How does data look in a relational table (if it is not JSON)?',
            answer: [
              'A table is a named grid. Columns are declared: id INT, name TEXT, email TEXT. Every row fills those columns (or NULL).',
              'Example users rows: (1, Ada, ada@x.com), (2, Lin, lin@x.com). The client shows a spreadsheet-like result, not a nested object.',
              'An order is not inside the user row. It is a row in orders: (10, user_id=1, total=10). The link is the number 1, not a nested array.',
              'On disk: typed columns in pages. You see JSON only if you stored a JSON/JSONB column, or if your driver maps a JOIN result into objects.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-35',
            question: 'What is the difference between table-based data and a JSON structure?',
            answer: [
              'Table: same columns for every row, one value per cell, relations via keys. JSON: keys can appear or vanish; values can be objects or arrays.',
              'To show “user + orders” from tables you JOIN (or run two queries) and assemble an object in the app. In Mongo that object may already be the document.',
              'Tables enforce types and NOT NULL at the column. JSON is a blob unless you add CHECK / JSON Schema / app validation.',
              'Use tables for core facts you query, join, and constrain (users, payments). Use JSON (or Mongo) for a bag of optional settings you mostly read as a whole.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-36',
            question: 'How does adding data differ in a JSON document vs relational tables?',
            answer: [
              'Tables: INSERT INTO users (name, email) VALUES (\'Ada\', \'a@x.com\'); then INSERT INTO orders (user_id, total) VALUES (1, 10); - two statements, two rows.',
              'You cannot stuff an orders array into users unless you add a JSONB column or a second table. New order = new row, not a rewrite of the user.',
              'Document: one insert of { name, email, orders: [{ total: 10 }] }. Adding an order later often $push or replaces the array - the parent document changes.',
              'Relational writes scale to “millions of orders” without rewriting the user row. Document writes are nicer when the whole aggregate is small and saved together.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-37',
            question: 'When would you use JSONB inside Postgres instead of extra tables (or Mongo)?',
            answer: [
              'JSONB is a column type: extras JSONB. You still have a table row; one cell holds a JSON object you can index and query (extras->>\'theme\').',
              'Good for optional, document-shaped bags on an otherwise relational row (UI prefs, a webhook payload you rarely join on).',
              'Bad as the only place for data you need to JOIN, UNIQUE, or aggregate hard (don’t put order lines only in JSONB if you report on them).',
              'If the whole database is documents and you never want SQL joins, Mongo is a clearer model than “everything is JSONB in one table.”',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'prisma',
    type: 'Prisma',
    name: 'Prisma',
    blurb: 'TypeScript ORM: schema, CRUD, and relation queries.',
    topics: [
      {
        id: 'prisma-basics',
        title: 'Prisma basics',
        questions: [
          {
            id: 'pr-1',
            question: 'What is Prisma?',
            answer: [
              'A TypeScript ORM: you declare models in schema.prisma, run prisma generate, and get a typed client (prisma.user.findMany()).',
              'It talks to Postgres, MySQL, SQLite, SQL Server, Mongo (and more) with the same client API.',
              'You write queries as objects (where, include, data) instead of SQL strings. Prisma turns them into SQL (or Mongo commands).',
              'Good TypeScript DX and migrations. Less control than writing SQL / Drizzle when you need unusual queries - then use $queryRaw.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-2',
            question: 'What lives in schema.prisma?',
            answer: [
              'datasource db { provider = "postgresql" url = env("DATABASE_URL") } and generator client { provider = "prisma-client-js" }.',
              'model User { id Int @id @default(autoincrement()); email String @unique; posts Post[] }.',
              'Relations: on Post, author User @relation(fields: [authorId], references: [id]) and authorId Int.',
              'Change the schema, then migrate (or db push) and prisma generate so the client matches the database.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-3',
            question: 'migrate vs db push?',
            answer: [
              'prisma migrate dev creates a versioned SQL file in prisma/migrations and applies it. Teams review those files; prod uses migrate deploy.',
              'prisma db push updates the database to match the schema without a migration history. Fast for local prototypes, risky for shared/prod DBs.',
              'Use migrate as soon as more than one person (or prod) depends on the schema.',
              'Never edit the production database by hand and forget to add a migration - the next deploy will fight you.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'prisma-crud',
        title: 'Insert, select, update, delete',
        questions: [
          {
            id: 'pr-4',
            question: 'How do you insert with Prisma?',
            answer: [
              'const user = await prisma.user.create({ data: { name: "Ada", email: "a@x.com" } }) returns the created row (including id).',
              'createMany({ data: [{…}, {…}] }) inserts a batch. Some databases don’t return the rows; skipDuplicates: true ignores unique clashes.',
              'Nested: prisma.user.create({ data: { email, posts: { create: [{ title: "Hi" }] } } }) writes user + posts in one call.',
              'Unique violations throw. Catch P2002 or validate first. Use upsert when “create or update” is the real intent.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-5',
            question: 'How do you select / find records?',
            answer: [
              'findMany({ where: { active: true }, orderBy: { name: "asc" } }) returns an array (empty if nothing matches).',
              'findUnique({ where: { id: 1 } }) or { where: { email } } needs a unique field. Returns the row or null.',
              'findFirst({ where: { name: "Ada" } }) is the first match of a non-unique filter, or null.',
              'findUniqueOrThrow / findFirstOrThrow throw if missing - handy when a missing row is a 404, not a normal case.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-6',
            question: 'How do you update with Prisma?',
            answer: [
              'prisma.user.update({ where: { id: 1 }, data: { name: "Lin" } }) - where must be unique. Returns the updated row.',
              'updateMany({ where: { age: { lt: 18 } }, data: { active: false } }) can match many. Returns { count }, not the rows.',
              'Partial data is fine: only the fields you set change. Use increment: { views: { increment: 1 } } for counters.',
              'update throws if the unique where misses. Check existence or use updateMany if “zero rows is ok.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-7',
            question: 'How do you delete with Prisma?',
            answer: [
              'prisma.user.delete({ where: { id: 1 } }) deletes one unique row and returns it. Throws if it does not exist.',
              'deleteMany({ where: { active: false } }) deletes matches and returns { count }.',
              'deleteMany({}) deletes every row in the table. Always pass a filter unless you mean a wipe.',
              'Foreign keys can block delete (RESTRICT) or cascade - that comes from the schema, not from the client call.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-8',
            question: 'How do you upsert?',
            answer: [
              'await prisma.user.upsert({ where: { email }, create: { email, name: "Ada" }, update: { name: "Ada" } }).',
              'If a row with that unique where exists, Prisma runs update. If not, it runs create. One call, one unique key.',
              'where must be a unique field (@unique) or a @@unique / @@id. A non-unique where will not compile.',
              'Same idea as SQL ON CONFLICT. Still put the unique constraint in the database so two racing upserts cannot insert twice.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'prisma-joins',
        title: 'Relations & joins',
        questions: [
          {
            id: 'pr-9',
            question: 'How does Prisma do joins?',
            answer: [
              'You do not write JOIN SQL. You name relations from the schema and Prisma loads them (JOIN or extra queries under the hood).',
              'prisma.user.findMany({ include: { posts: true } }) returns each user plus a posts array. Users with no posts still appear (posts: []) - LEFT-style.',
              'Filter the parent and the child separately: include: { posts: { where: { published: true }, orderBy: { createdAt: "desc" } } }.',
              'Check the generated SQL in the logs if you care about N+1. include on a list can be more than one query; that is OK if you understand it.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-10',
            question: 'include vs select?',
            answer: [
              'include: { posts: true } keeps every scalar field on the parent and adds the relation. Fast to write, can over-fetch.',
              'select: { id: true, name: true, posts: { select: { title: true } } } is a whitelist. Use it when you want a small payload.',
              'You cannot set both include and select on the same object. Pick one. Nested relations use select (or include) inside that relation.',
              'Interview: include = “plus relations,” select = “only these fields.” Prefer select on public APIs so you don’t leak password hashes.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pr-11',
            question: 'How do you query on a relation (join filter)?',
            answer: [
              'Filter parents by children: prisma.user.findMany({ where: { posts: { some: { published: true } } } }) - users who have at least one published post.',
              'some = at least one child matches. every = all children match. none = no child matches. These are the relation filters.',
              'That is different from include: { posts: { where: { published: true } } }, which still returns every user and only filters the nested array.',
              'Combine them when you need both: only users with a published post, and only those posts in the payload.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pr-12',
            question: 'How do you create related rows in one call?',
            answer: [
              'Nested writes: prisma.user.create({ data: { email, posts: { create: [{ title: "Hi" }] } } }) inserts the user and the post together.',
              'connect: { id: 1 } attaches an existing row (set the foreign key). connectOrCreate finds by unique field or creates it.',
              'createMany on a relation inserts several children. create vs connect is “new row” vs “existing row.”',
              'These run in a transaction. If the child insert fails, the parent is not left behind.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'prisma-queries',
        title: 'Basic queries',
        questions: [
          {
            id: 'pr-13',
            question: 'How do where, orderBy, take, and skip work?',
            answer: [
              'where: { age: { gte: 18 }, name: { contains: "A", mode: "insensitive" } } is the filter. equals, lt, lte, gt, gte, in, notIn, startsWith, contains.',
              'orderBy: { createdAt: "desc" } or a list: [{ role: "asc" }, { name: "asc" }].',
              'take: 10 is LIMIT 10. skip: 20 is OFFSET 20. Same paging warning as SQL - large skip is slow; cursor: { id: lastId } is better at scale.',
              'Put them on findMany (and on nested include). findUnique only needs where on a unique field.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-14',
            question: 'AND / OR / NOT in Prisma?',
            answer: [
              'Two fields in one where object are AND: { active: true, age: { gte: 18 } }.',
              'OR: { OR: [{ email: q }, { name: { contains: q } }] } matches either clause. NOT: { NOT: { role: "admin" } }.',
              'AND: [{ OR: […] }, { active: true }] when you mix groups. Same as SQL parentheses.',
              'Readable filters beat nested puzzles. If the where is hard to say in English, split the query.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-15',
            question: 'How do you count or aggregate?',
            answer: [
              'prisma.user.count({ where: { active: true } }) returns a number - use it for “how many?” without loading rows.',
              'prisma.user.aggregate({ _avg: { age: true }, _min: { age: true }, _sum: { age: true } }) computes over the table/filter.',
              'prisma.user.groupBy({ by: ["city"], _count: { _all: true }, orderBy: { city: "asc" } }) is GROUP BY city.',
              'For complex SQL (window functions, CTEs) use prisma.$queryRaw`SELECT …` and type the result yourself.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pr-16',
            question: 'How do you run a transaction in Prisma?',
            answer: [
              'Sequential: await prisma.$transaction([prisma.account.update(…), prisma.account.update(…)]) - all succeed or all fail.',
              'Interactive: await prisma.$transaction(async (tx) => { await tx.order.create(…); await tx.item.update(…) }). Use tx, not prisma, inside.',
              'Set a timeout for long interactive transactions. Don’t hold a transaction open while calling an external HTTP API.',
              'Use a transaction whenever two writes must stay in sync (debit + credit, order + stock).',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'drizzle',
    type: 'Drizzle',
    name: 'Drizzle',
    blurb: 'TypeScript SQL ORM: schema, CRUD, and explicit joins.',
    topics: [
      {
        id: 'drizzle-basics',
        title: 'Drizzle basics',
        questions: [
          {
            id: 'dr-1',
            question: 'What is Drizzle?',
            answer: [
              'A TypeScript ORM that looks like SQL: db.select().from(users).where(eq(users.id, 1)). You see the query shape in the code.',
              'Schema is TypeScript (pgTable, mysqlTable, sqliteTable), not a separate .prisma DSL. Types come from that schema.',
              'Thin: it generates SQL and maps rows. You stay closer to indexes, joins, and EXPLAIN than with a heavier client API.',
              'Works with Postgres, MySQL, SQLite, and others. drizzle-kit handles generate/push/migrate.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-2',
            question: 'How do you define a table?',
            answer: [
              'export const users = pgTable("users", { id: serial("id").primaryKey(), email: text("email").notNull().unique(), name: text("name") }).',
              'Relations are optional and separate: relations(users, ({ many }) => ({ orders: many(orders) })). Needed for db.query.users.findMany({ with: { orders: true } }).',
              'drizzle-kit generate writes SQL migrations from schema changes; drizzle-kit push applies the schema without files (local only, like Prisma db push).',
              'Import the table objects into queries - columns are users.email, not magic strings.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-3',
            question: 'Drizzle vs Prisma (simple view)?',
            answer: [
              'Drizzle: you write joins, where, and returning yourself. Feels like SQL with types. Easier to predict the exact query.',
              'Prisma: prisma.user.findMany({ include: { posts: true } }). Faster to type everyday CRUD; SQL is generated for you.',
              'Pick Drizzle when the team is comfortable with SQL and wants control. Pick Prisma when the team wants a client API and migrations first.',
              'Both are fine. Don’t rewrite a working ORM for taste in an interview - explain the tradeoff.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'drizzle-crud',
        title: 'Insert, select, update, delete',
        questions: [
          {
            id: 'dr-4',
            question: 'How do you insert with Drizzle?',
            answer: [
              'await db.insert(users).values({ name: "Ada", age: 36 }) inserts one row.',
              '.values([{ name: "Ada" }, { name: "Lin" }]) inserts many in one statement.',
              'On Postgres, .returning({ id: users.id, name: users.name }) gives you the inserted columns (like INSERT … RETURNING).',
              'Chain .onConflictDoNothing() or .onConflictDoUpdate({…}) for upserts instead of catching a unique error.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-5',
            question: 'How do you select with Drizzle?',
            answer: [
              'await db.select().from(users) returns all columns as an array of objects.',
              'db.select({ name: users.name, age: users.age }).from(users) picks columns - better than * on wide tables.',
              '.where(eq(users.id, 1)) is WHERE id = 1. Combine with and(eq(…), gt(users.age, 18)).',
              'Add .orderBy(asc(users.name)).limit(10).offset(20) for sorted pages. Empty array means no match, not an error.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-6',
            question: 'How do you update with Drizzle?',
            answer: [
              'await db.update(users).set({ age: 37 }).where(eq(users.id, 1)) - same as UPDATE users SET age = 37 WHERE id = 1.',
              'If you omit .where(...), every row is updated. Treat that as a bug unless you truly mean it.',
              '.returning() (Postgres) gives the updated rows back so you don’t need a second SELECT.',
              'set({ age: sql`${users.age} + 1` }) or similar for increments when a helper isn’t enough.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-7',
            question: 'How do you delete with Drizzle?',
            answer: [
              'await db.delete(users).where(eq(users.id, 1)) deletes matching rows.',
              'No .where() deletes the whole table - same danger as SQL DELETE FROM users.',
              '.returning({ id: users.id }) on Postgres tells you what went away.',
              'Respect foreign keys: a parent with children may fail unless you delete children first or ON DELETE CASCADE.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-8',
            question: 'How do you upsert with Drizzle?',
            answer: [
              'await db.insert(users).values({ email, name }).onConflictDoUpdate({ target: users.email, set: { name } }) - insert, or update name if email exists.',
              'onConflictDoNothing() keeps the existing row and skips the insert. Useful for “ensure this row exists.”',
              'target must be a primary key or unique column (the conflict target in SQL ON CONFLICT).',
              'This is Postgres-style upsert. MySQL uses onDuplicateKeyUpdate. Check the dialect helper if you are not on Postgres.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'drizzle-joins',
        title: 'Joins',
        questions: [
          {
            id: 'dr-9',
            question: 'How do you INNER JOIN in Drizzle?',
            answer: [
              'await db.select().from(users).innerJoin(orders, eq(orders.userId, users.id)) - only pairs that match on userId = users.id.',
              'Users with no orders disappear. Same meaning as SQL INNER JOIN.',
              'Default row shape is nested: { users: {…}, orders: {…} }. Name columns if you want a flat object (see pick-columns note).',
              'The second argument is the ON condition. Forget it and you do not have an inner join - you have a mistake.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-10',
            question: 'How do you LEFT / RIGHT / FULL JOIN?',
            answer: [
              '.leftJoin(orders, eq(orders.userId, users.id)) keeps every user. Missing orders come back as null fields on that side.',
              '.rightJoin(...) keeps every order (even if the user is missing). .fullJoin(...) keeps unmatched rows from both tables.',
              'Same rules as SQL: filter extra conditions on the right table in the ON clause if you still want unmatched left rows.',
              'Teams usually write leftJoin and put the “must keep” table in from(...).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-11',
            question: 'What about query API / with (relational queries)?',
            answer: [
              'db.query.users.findMany({ with: { orders: true } }) returns users with a nested orders array - Prisma-style include.',
              'Drizzle still emits SQL joins (or follow-up queries). You must define relations() on the schema or with: will not type-check.',
              'Add extras: with: { orders: { where: eq(orders.paid, true), limit: 5 } }. Good for app reads; use the sql-shaped API when you need a custom join.',
              'Two styles, one database. Pick the sql API when you want to see every join; pick query when the graph is simple.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dr-12',
            question: 'How do you pick columns from a join?',
            answer: [
              'db.select({ userName: users.name, total: orders.total }).from(users).leftJoin(orders, eq(orders.userId, users.id)) flattens the result.',
              'The keys in that object are the JSON keys you get back. That is usually nicer than { users, orders } blobs.',
              'Avoid select() (all columns) on wide joins - you pull unused text/json and make the mapping heavier.',
              'Ambiguous names (both tables have id) are why you alias: { userId: users.id, orderId: orders.id }.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'drizzle-queries',
        title: 'Basic queries',
        questions: [
          {
            id: 'dr-13',
            question: 'How do where, orderBy, limit, and offset work?',
            answer: [
              '.where(and(gt(users.age, 18), eq(users.city, "Paris"))) is WHERE age > 18 AND city = \'Paris\'. Import and, eq, gt from drizzle-orm.',
              '.orderBy(desc(users.age), asc(users.name)) is ORDER BY age DESC, name ASC. First key wins; second breaks ties.',
              '.limit(10).offset(20) is a page of 10 after skipping 20. Same OFFSET cost as SQL - prefer a WHERE id > lastId cursor for deep pages.',
              'Chain them on select/update/delete: db.select().from(users).where(...).orderBy(...).limit(10).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-14',
            question: 'eq, and, or, inArray, like?',
            answer: [
              'Comparison helpers: eq, ne, gt, gte, lt, lte - eq(users.id, 1) is id = 1. Always compare a column object, not a string name.',
              'Combine with and(condA, condB) and or(condA, condB). Nest them like SQL parentheses.',
              'inArray(users.id, [1, 2, 3]) is IN (1,2,3). isNull(users.deletedAt) is IS NULL.',
              'like(users.name, "A%") and ilike(users.name, "a%") (Postgres, case-insensitive). Same wildcard rules as SQL LIKE.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-15',
            question: 'How do you group and aggregate?',
            answer: [
              'db.select({ city: users.city, n: count() }).from(users).groupBy(users.city) - one row per city with a count.',
              'Import count, sum, avg, min, max, eq, and, or from drizzle-orm. Use them in select / where / having.',
              '.having(sql`count(*) > 5`) (or having(gt(count(), 5)) depending on version) filters groups after GROUP BY.',
              'This is the same idea as SQL SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 5.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dr-16',
            question: 'How do you run a transaction in Drizzle?',
            answer: [
              'await db.transaction(async (tx) => { await tx.update(accounts).set(…).where(…); await tx.update(accounts).set(…).where(…) }).',
              'Use tx for every query inside the callback. Using db inside the callback is not part of the transaction.',
              'If the callback throws, Drizzle rolls back. Return a value from the callback if you need the created row outside.',
              'Same rule as any SQL transaction: don’t do slow external HTTP inside it.',
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
              'A batteries-included Python web framework: ORM, admin, auth, forms, and an HTTP layer ship together.',
              'You map URLs → views → models, and either render a template or return JSON (Django REST Framework for APIs).',
              'MTV/MVT: Model (data), Template (HTML), View (request logic). Same idea as MVC with different names.',
              'Good when you want one official way to build a server-rendered app or a REST API in Python. Heavier than Flask/FastAPI for a tiny service.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-2',
            question: 'What is the Django ORM?',
            answer: [
              'Python classes map to tables: class User(models.Model): email = models.EmailField(unique=True).',
              'User.objects.filter(age__gte=18).order_by("-created") is a QuerySet (lazy - hits the DB when you iterate or list()).',
              'Create: User.objects.create(email="a@x.com"). Update: user.name = "Ada"; user.save(). Delete: user.delete() or QuerySet.delete().',
              'Joins: User.objects.select_related("profile") (FK/one-to-one) and prefetch_related("orders") (reverse/M2M) to avoid N+1 queries.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-3',
            question: 'urls.py vs views vs templates (simple flow)?',
            answer: [
              'urls.py: path("users/<int:id>/", views.user_detail, name="user-detail") maps a URL to a view function or class.',
              'The view receives the request, loads models, and returns HttpResponse, render(request, "user.html", context), or JsonResponse.',
              'A template is HTML with {{ user.name }} and {% for order in orders %}. Keep logic light - compute in the view.',
              'Request path: URL → view → (model) → template or JSON. That is the sentence interviewers want.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-4',
            question: 'What are Django migrations?',
            answer: [
              'Python files that describe schema changes. After you edit models: python manage.py makemigrations then python manage.py migrate.',
              'They are versioned and committed. Every environment applies the same history so columns match the code.',
              'Don’t edit a migration that already ran in prod - add a new one. Same rule as Prisma/Rails migrations.',
              'python manage.py showmigrations tells you what is applied. Run migrate in deploy, not only on your laptop.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dj-5',
            question: 'What is the Django admin, and what is a ModelForm?',
            answer: [
              'Admin is an auto CRUD UI for models. Register: @admin.register(User) class UserAdmin(admin.ModelAdmin): list_display = ("email",).',
              'Great for internal tools. Don’t expose it to the public internet without auth and hardening.',
              'ModelForm builds a form from a model’s fields. form.save() creates/updates the instance after is_valid().',
              'For APIs, DRF serializers play a similar role (validate + create/update) without HTML forms.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-6',
            question: 'How do you avoid N+1 queries in Django?',
            answer: [
              'N+1: you load users, then each user.profile hits the DB again. 1 + N queries for N rows.',
              'select_related("profile") does a SQL JOIN for foreign keys / one-to-one. Use it when you will access that FK on every row.',
              'prefetch_related("orders") runs a second query IN (user_ids) for reverse relations and many-to-many.',
              'django-debug-toolbar or query logging shows the count. If you see a query per row, add select/prefetch.',
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
              'A full-stack web framework in Ruby. You get routing, MVC, Active Record, views, and generators in one box.',
              'Convention over configuration: User model → users table, UsersController, views/users/. You write less glue if you follow names.',
              'Famous for CRUD apps and REST APIs that ship fast. Still widely used; many “Rails way” interview questions assume these conventions.',
              'You can serve HTML (ERB) or JSON (API mode). The same controller actions map to REST verbs.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-2',
            question: 'What does MVC mean in Rails?',
            answer: [
              'Model: data and rules (User, validations, callbacks). Usually an Active Record class backed by a table.',
              'View: templates (app/views/users/show.html.erb) that render HTML with <%= @user.name %>.',
              'Controller: receives the request, loads models, sets instance variables, renders a view or JSON. Keep it thin.',
              'Request path: routes.rb → UsersController#show → User.find(params[:id]) → show.html.erb.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-3',
            question: 'What is Active Record?',
            answer: [
              'Rails ORM: class User < ApplicationRecord maps to table users. Columns become attributes (user.email).',
              'Read: User.find(1), User.find_by(email:), User.where(active: true). Create: User.create!(email:, name:). user.update!(name:). user.destroy.',
              'belongs_to :user / has_many :orders declare associations. user.orders loads related rows (watch N+1 - use includes(:orders)).',
              'Validations: validates :email, presence: true, uniqueness: true. Invalid create returns false; create! raises.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-4',
            question: 'What are Rails routes and REST resources?',
            answer: [
              'config/routes.rb: resources :posts gives index, show, new, create, edit, update, destroy mapped to HTTP verbs and /posts/:id.',
              'GET /posts → PostsController#index. POST /posts → #create. PATCH /posts/:id → #update. DELETE /posts/:id → #destroy.',
              'rails routes prints the table. Named helpers: posts_path, post_path(post) keep templates free of hardcoded URLs.',
              'API-only apps still use the same REST map; they render json: @posts instead of HTML.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'rb-5',
            question: 'What are Rails migrations?',
            answer: [
              'bin/rails generate migration AddAgeToUsers age:integer creates a file with change { add_column :users, :age, :integer }.',
              'bin/rails db:migrate applies pending files. They are committed so every environment gets the same schema.',
              'Don’t edit an old migration that already ran - generate a new one. db:rollback undoes the last change locally.',
              'schema.rb (or structure.sql) is the current snapshot. Migrate in deploy, same as Django/Prisma.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-6',
            question: 'How do you avoid N+1 queries in Rails?',
            answer: [
              'N+1: @users.each { |u| u.orders.size } fires one orders query per user after the users query.',
              'User.includes(:orders) (or preload / eager_load) loads associations in a small number of queries.',
              'Bullet gem (dev) warns when you add N+1. Check the log: if you see SELECT "orders" * N, add includes.',
              'select/pluck when you only need one column. Don’t load full Active Record objects for a simple id list.',
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
              'Unit: one function or component in isolation. Fast, many of them. Example: sortQuestions() returns easy before hard.',
              'Integration: a few real pieces together (page + router + a mocked API). Catches wiring bugs units miss.',
              'E2E: a real browser (Playwright/Cypress) clicks through a flow. Slow and flaky if overused - keep a few critical paths.',
              'Pyramid: lots of unit, some integration, few E2E. Don’t try to E2E every CSS hover.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-2',
            question: 'What does “test behavior, not implementation” mean?',
            answer: [
              'Assert what a user or caller can observe: getByRole("button", { name: /save/i }), the JSON status, the returned array.',
              'Don’t assert internal state, CSS class strings, or that useState was called. Those break when you refactor and still work for users.',
              'Testing Library’s motto: “The more your tests resemble the way your software is used, the more confidence they give you.”',
              'If you rename a CSS module and tests fail, you tested implementation. If you break the Save button and tests fail, you tested behavior.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-3',
            question: 'What is tree-shaking?',
            answer: [
              'The bundler drops exported code that nothing imports. import { debounce } from "lodash-es" can keep debounce and drop the rest.',
              'Needs ES modules (import/export) and files without surprising side effects at import time.',
              'Barrel files (export * from "./a"; export * from "./b") often pull the whole folder and block shaking.',
              'CommonJS require() is harder to shake. Prefer named ESM exports for libraries you care about shipping small.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-6',
            question: 'What is mocking, and when should you mock?',
            answer: [
              'A mock replaces a real dependency (fetch, DB, clock) with a fake you control: vi.fn().mockResolvedValue({ ok: true }).',
              'Mock slow or flaky edges: network, time, randomness. Don’t mock the unit you are testing or you prove nothing.',
              'Prefer a fake in-memory repo over mocking every method of a huge ORM if the test is about your service logic.',
              'Too many mocks make tests pass while the wiring is wrong - that is when you add an integration test.',
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
              'dependencies: packages the app needs to run in production (react, react-router-dom). npm i pkg.',
              'devDependencies: build, test, lint only (vite, typescript, eslint, vitest). npm i -D pkg.',
              'In an app, React is a dependency (the browser needs it). Vite is a devDependency (you don’t run Vite in prod; you serve the build).',
              'Libraries sometimes put types in devDependencies. For apps, if production code imports it, it belongs in dependencies.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-5',
            question: 'What is the difference between package-lock.json and package.json?',
            answer: [
              'package.json lists allowed ranges: "react": "^19.0.0" means 19.x, not 20. Two laptops can resolve different exact versions without a lockfile.',
              'package-lock.json (or pnpm-lock.yaml) records the exact tree that was installed, including transitive deps.',
              'Commit the lockfile. CI should use npm ci, which installs from the lockfile and fails if it does not match package.json.',
              'Don’t delete the lockfile to “fix” a bug - change the intended range and reinstall so the lock updates on purpose.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-7',
            question: 'What is the difference between npm install and npm ci?',
            answer: [
              'npm install uses package.json, may update the lockfile, and is what you use while developing.',
              'npm ci deletes node_modules and installs exactly from the lockfile. Faster and deterministic - use it in CI and production image builds.',
              'npm ci fails if package.json and the lockfile disagree. That is a feature: it catches a forgotten lockfile commit.',
              'Don’t run npm ci and then npm install in the same pipeline unless you meant to change the lock.',
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
