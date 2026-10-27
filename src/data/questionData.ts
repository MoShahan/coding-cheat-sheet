import type { Category } from './questionUtils'

export const categoryData: Category[] = [
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
              "`<section>` groups related content that shares one theme - give it a heading so the outline makes sense (a “Pricing” block, a “Comments” block).",
              "`<article>` is self-contained: it should still make sense if you pulled it out of the page (a blog post, a tweet, a product card).",
              "`<div>` has no meaning. Use it only when you need a box for CSS or JS and no semantic tag fits.",
              'Interview tip: start with the meaning, not the layout. Style comes from CSS; HTML is the document structure.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-2',
            question: 'Why does semantic HTML matter in interviews and production?',
            answer: [
              "Screen readers announce landmarks and headings, so `<nav>`, `<main>`, and real `<h1>`-`<h6>` are how users jump around the page.",
              'Search engines and browser reader modes use the outline (title, headings, article) to understand the page.',
              "Teammates can read the markup and see intent: a `<button>` is clickable, a `<table>` is tabular data, a `<div>` is just a box.",
              'You also get built-in keyboard behavior (Enter on a button, Tab into a form) without extra ARIA.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-3',
            question: 'What is the purpose of the <label> element?',
            answer: [
              'It names a control for everyone: visible users, screen readers, and automated tests.',
              "Wire it with `<label for=\"email\">` + `<input id=\"email\">`, or wrap the input inside the label.",
              'Clicking the label focuses (or toggles) the control - a bigger hit target on mobile checkboxes.',
              'Placeholder text is not a label. It disappears while typing and is often too faint to count as an accessible name.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-6',
            question: 'What do <header>, <nav>, <main>, <aside>, and <footer> mean?',
            answer: [
              "`<header>` is introductory content for the page or a section (logo, title, maybe nav). You can have more than one.",
              "`<nav>` is a block of major links (site menu, table of contents) - not every list of links needs it.",
              "`<main>` is the unique primary content of this page. One per page; skip links often jump here.",
              "`<aside>` is related but secondary (sidebar, pull quote). `<footer>` is closing info (copyright, related links).",
            ],
            difficulty: 'easy',
          },
          {
            id: 'html-7',
            question: 'What is the difference between block, inline, and inline-block in HTML/CSS?',
            answer: [
              "Block elements (`<div>`, `<p>`, `<section>`) start on a new line and take the full available width.",
              "Inline elements (`<span>`, `<a>`, `<em>`) sit in the text flow. Width/height and vertical margin do not apply the same way.",
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
              "aria-label sets the accessible name when there is no useful visible text (an icon-only button: `aria-label=\"Close\"`).",
              'If visible text already names the control, extra aria-label can override it and confuse people - don’t duplicate.',
              "Prefer a real `<label>`, button text, or visually-hidden text before reaching for ARIA.",
              'First rule of ARIA: don’t use it if a native element already does the job.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'html-5',
            question: 'Explain the difference between role="button" and a real <button>.',
            answer: [
              "`<button>` already gets keyboard focus, Enter/Space activation, form submit behavior, and the right role.",
              "A `<div role=\"button\">` is just a box until you add `tabindex=\"0\"`, key handlers, and disabled/pressed states yourself.",
              'You will miss cases (screen reader modes, voice control, form implicit submit). Native wins.',
              "Same idea for `<a href>` vs `role=\"link\"`, and `<input type=\"checkbox\">` vs a styled div.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'html-8',
            question: 'What should go on an <img>, and what are alt, width, and srcset for?',
            answer: [
              "alt describes the image if it doesn’t load and for screen readers. Decorative images use `alt=\"\"`.",
              "Don’t start alt with “image of” - the `<img>` role already says that. Describe the content or skip it.",
              'width and height (or aspect-ratio in CSS) reserve space so the page doesn’t jump when the image loads (helps CLS).',
              'srcset + sizes let the browser pick a file size for the screen: srcset="hero-400.jpg 400w, hero-800.jpg 800w".',
            ],
            difficulty: 'medium',
          },
          {
            id: 'html-9',
            question: 'What is the difference between <script>, defer, and async?',
            answer: [
              "A plain `<script src>` in `<head>` blocks HTML parsing until the file downloads and runs - slow first paint.",
              'defer downloads in parallel and runs after the document is parsed, in order. Default choice for app bundles.',
              'async downloads in parallel and runs as soon as it is ready - order is not guaranteed. Fine for independent analytics.',
              "`type=\"module\"` scripts are deferred by default. Put classic scripts at the end of `<body>` if you skip defer.",
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
              "% is of the parent; vw/vh are of the viewport. `min(100%, 40rem)` or `clamp()` is safer than raw 100vw (scrollbar quirks).",
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
              "They are runtime variables: :root { --bg: #fff; --accent: #2563eb } then color: `var(--accent)`.",
              'Unlike Sass $vars, they cascade and can change live - theme toggles, component tokens, JS-driven values.',
              "```\ndocument.documentElement.style.setProperty(\"--bg\", \"#0b1016\")\n``` updates every rule that uses `var(--bg)`.",
              "Fallback: `var(--accent, blue)`. Prefer tokens on :root or a theme class, not a random one-off on every node.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'css-5',
            question: 'Explain specificity and how you’d override a style cleanly.',
            answer: [
              "Rough score: inline style > #id > `.class` / [attr] / :hover > element / :pseudo. Equal scores: later rule wins.",
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
              "They apply CSS only when a condition matches: @media (min-width: 768px) { `.grid` { grid-template-columns: 1fr 1fr } }.",
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
              "const cannot be reassigned (```\nconst x = 1;\nx = 2\n``` throws). Object and array contents can still change: `const user = {}`; user.name = \"Ada\" is fine.",
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
              "```\nfunction makeCounter() {\n  let n = 0;\n  return () => ++n\n}\n``` - each call to `makeCounter()` gets its own n. ```\nconst c = makeCounter();\nc()\n``` // 1; `c()` // 2.",
              'n is private: code outside cannot read or reset it except through the returned function. That is the usual interview “private state” story.',
              'One-liner: “a function plus the scope it was born in.” Not the same as a global variable - each closure can have its own copy.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-11',
            question: 'How is a closure used in real life? Give a practical example.',
            answer: [
              "Debounce: ```\nfunction debounce(fn, ms) {\n  let t;\n  return (...args) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...args), ms)\n  }\n}\n``` The returned function closes over t and ms so later keystrokes share one timer.",
              "Factory / module privacy: ```\nfunction createWallet() {\n  let balance = 0;\n  return {\n    add(n) { balance += n }, get() {\n      return balance\n    }\n  }\n}\n``` balance is not on the returned object.",
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
              "`obj.method()` → this is obj. `fn()` in strict mode → this is undefined (sloppy mode: globalThis). `new Fn()` → this is the new instance.",
              "call/apply/bind can set this explicitly: `fn.call(obj, a, b)`. Arrow functions do not get their own this - they use the this of the enclosing scope, and bind cannot change it.",
              "Losing this: ```\nconst fn = obj.method;\nfn()\n``` is a bare call, so this is not obj. Fix with `obj.method.bind(obj)`, or wrap as `() => obj.method()`.",
            ],
            difficulty: 'hard',
          },
          {
            id: 'js-28',
            question: 'What is the difference between call, apply, and bind?',
            answer: [
              'All three set this for a regular function. They do not change this on arrow functions.',
              "`fn.call(thisArg, a, b)` runs fn now with this = thisArg and arguments listed one by one.",
              "`fn.apply(thisArg, [a, b])` is the same, but arguments come as an array (older style; spread + call is more common now).",
              "`fn.bind(thisArg, a)` returns a new function with this (and optional leading args) fixed. It does not run until you call the result.",
              'Use bind for callbacks you will pass later (onClick, setTimeout). Use call/apply when you want to run immediately.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-7',
            question: 'What is hoisting in JavaScript?',
            answer: [
              'The engine sets up bindings before running the body line by line. Declarations are “moved up”; assignments stay put.',
              "`function greet() {}` is fully hoisted - you can call `greet()` above its line. ```\nfunction expressions (const greet = function () {})\n``` are not.",
              "`var x = 1` is hoisted as x = undefined, then assigned 1 later. That is why you can “use” it early and get undefined.",
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
              "Spread expands: ```\nconst copy = [...arr];\nconst obj2 = { ...obj, name: \"Ada\" };\nMath.max(...nums)\n```",
              "Rest collects: ```\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0)\n}\n``` and `const { id, ...rest }` = user.",
              'Same ... token; meaning depends on position. In a call or literal it spreads; in a parameter or destructure it gathers.',
              'Spread on objects is a shallow copy: nested objects are still shared references. Spread on arrays copies one level of items the same way.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-33',
            question: 'What is the difference between a shallow copy and a deep copy?',
            answer: [
              "Shallow: new wrapper, same nested refs. `const b = { ...a }` or `a.slice()` / [...a]. Change b.nested.x and a.nested.x changes too.",
              "Deep: clone the whole tree so nested objects are new. `structuredClone(a)` is the built-in. `JSON.parse(JSON.stringify(a))` drops functions, undefined, Dates, Maps.",
              "Assignment (`const b = a`) is not a copy - both names point at the same object.",
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
              "for..`.in` walks enumerable keys (strings) on an object, including inherited ones. for (const k in obj) { obj[k] }. Do not use it as your main array loop - you can hit extra keys and the order is not a real index walk.",
              "for..`.of` walks values of an iterable: arrays, strings, Maps, Sets. for (const item of arr) { }. You can break, continue, and await inside it.",
              "```\narr.forEach((item, i) => { })\n``` is an array method. It cannot break or return out of the outer function the way a for loop can, and await inside it does not pause the loop.",
              "Need early exit or await per item? Use for or for..`.of`. Need a new array? Prefer map/filter over forEach.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-12',
            question:
              'What are Object.keys, Object.values, and Object.entries-and how do they relate to loops?',
            answer: [
              'For { a: 1, b: 2 }: Object.keys → ["a","b"], Object.values → [1,2], Object.entries → [["a",1],["b",2]].',
              "Once you have an array, you can for..`.of`, map, filter, or `Object.fromEntries(entries)` to build a new object.",
              'These methods only see the object’s own enumerable keys - not inherited ones on the prototype.',
              "Typical loop: for (const [key, value] of `Object.entries(user)`) { }. That is the usual interview alternative to for..`.in`.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-13',
            question:
              'When should you use for...in vs Object.keys / Object.entries?',
            answer: [
              "Default to Object.keys / Object.entries plus for..`.of`. The set of keys is clear and you stay on own properties.",
              "for..`.in` also visits inherited enumerable keys (unless you filter with `Object.hasOwn(obj, key)`). That surprise is why it is a weak default.",
              "Never use for..`.in` as your main array loop. Array indexes are strings, and extra enumerable properties can show up.",
              "If you only need values, `Object.values(obj)` or for..`.of` on a Map/Set is simpler than for..`.in`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-9',
            question: 'map vs filter vs reduce-when do you use each?',
            answer: [
              "map transforms every item and returns a new array of the same length: `nums.map(n => n * 2)`.",
              "filter keeps items that pass a test: `users.filter(u => u.active)`. Length can shrink; items are unchanged unless you also map.",
              "reduce folds the list into one value (number, object, even another array): `nums.reduce((sum, n) => sum + n, 0)`. Always pass an initial value.",
              'Chain map + filter when that reads clearly. Use reduce when you are truly accumulating one result - not as a clever map.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-34',
            question: 'How do you loop an object and an array in everyday code?',
            answer: [
              "Array: for (const item of arr), or arr.map / filter / find. Use for (```\nlet i = 0;\ni < arr.length;\ni++\n```) when you need the index and a break.",
              "Object: `Object.entries(obj)` then for..`.of`. Avoid for..`.in` unless you really want prototype keys.",
              'Map/Set are already iterable: for (const [k, v] of myMap), for (const v of mySet).',
              "Don’t use `.map()` if you ignore the returned array - that is a forEach (or a for) in disguise.",
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
              "You create one with ```\nnew Promise((resolve, reject) => { … })\n``` The executor runs now; resolve/reject are how you finish it later.",
              "Once settled, anything waiting on it (`.then` / await) can run. That is the whole point: “do this when the result exists.”",
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-37',
            question: 'What is resolve (and reject) on a Promise?',
            answer: [
              'resolve and reject are functions the Promise constructor gives your executor. You call one of them to settle the Promise.',
              "`resolve(value)` means success. The Promise becomes fulfilled with that value. `reject(error)` means failure. The Promise becomes rejected with that reason.",
              "```\nnew Promise((resolve) => {\n  setTimeout(() => resolve(\"done\"), 1000)\n})\n``` - after 1s the Promise fulfills with \"done\".",
              'Call resolve or reject only once. Later calls are ignored. If the executor throws, the Promise rejects automatically.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'js-38',
            question: 'What is .then, and how is it related to resolve?',
            answer: [
              "`.then(onFulfilled, onRejected)` registers callbacks that run after the Promise settles. ```\npromise.then((value) => { … })\n``` runs when it fulfills.",
              "resolve and `.then` are two ends of the same pipe. `resolve(value)` puts the value in; the first argument of `.then` is where that value comes out.",
              "Example: ```\nnew Promise((resolve) => resolve(42)).then((n) => console.log(n))\n``` prints 42. n is exactly what you passed to resolve.",
              "If you resolve with another Promise, `.then` waits for that inner one and then gets its value. `.catch(err => …)` is the reject side of the same pipe.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-39',
            question:
              'Where does the argument in resolve() go, and where does the argument in .then() come from?',
            answer: [
              "`resolve(x)` stores x as the fulfillment value of that Promise. It does not call your `.then` function by itself - it only settles the Promise.",
              "When you write ```\n.then((result) => { … })\n```, result is that stored value. So `resolve(\"hi\")` → result === \"hi\". The name (result, data, value) is yours; the data is from resolve.",
              "The function you pass to `.then` is the callback. You do not pass the data into `.then` - you pass a function that will receive the data later.",
              "If you return something from `.then`, that becomes the fulfillment value of the next Promise in the chain: `resolve(1).then(n => n + 1).then(n => …)` - the second n is 2, from the previous return, not from the original resolve.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'js-6',
            question: 'What is the difference between Promises and async/await?',
            answer: [
              'async/await is syntax on top of Promises. An async function always returns a Promise; await pauses that function until the Promise settles.',
              "Sequential steps read top-down: ```\nconst res = await fetch(url);\nconst data = await res.json()\n```; vs ```\nfetch(url).then(r => r.json()).then(data => …)\n```",
              "You still need `Promise.all([a, b])` to run work in parallel. Awaiting a then b in sequence waits for a before starting b.",
              "Know .then/`.catch`, Promise.all (fail-fast), Promise.allSettled (wait for all), Promise.race (first to settle). await is not a replacement for those.",
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
              ".then/`.catch` shines for short pipelines or when you return a Promise chain",
              "Mixing both is fine; avoid deeply nested `.then` pyramids",
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
              "So even `setTimeout(0)` waits behind pending microtasks",
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
              "fetch only rejects on network failure. HTTP 404/500 still resolve - check if (!res.ok) throw `new Error(res.statusText)` before `res.json`().",
              "async/await: wrap the sequence in try/catch. `.then` chains need `.catch` at the end (or a try/catch in the caller that awaits).",
              "Promise.all rejects on the first failure. ```\nPromise.allSettled([{ status, value/reason }, …])\n``` if you need every result.",
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
              "let name: string = \"Ada\"; let age: number = 36; let ok: boolean = true. Arrays: string[] or `Array<string>`.",
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
              'Both accept every value. The difference is what you are allowed to do next. any turns the checker off; unknown does not.',
              'any: you can call it, index it, and assign it to a string without a check. Bugs compile. any also spreads - a function that returns any poisons callers.',
              "unknown: “this value exists, but I have not proven what it is.” You must narrow first: if (typeof x === \"string\") `x.toUpperCase()`. Assigning unknown to string is an error.",
              'Use unknown for JSON.parse, req.body, and other untrusted input until you validate (zod, type guards). Keep any as a last-resort escape hatch.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-12',
            question: 'Why is unknown preferred over any if they both accept every value?',
            answer: [
              'They are similar at the boundary (you can put anything into them). They are not similar when you use the value. That is the whole point.',
              'unknown forces a check. You cannot call methods or pass it to a typed function until typeof, a type guard, or a validator proves the shape. That is where bugs are caught.',
              "any is contagious. ```\nfunction parse(x: any) {\n  return x.name\n}\n``` makes the return type any, so the rest of the app stops being checked. unknown stops at the door.",
              'Interview: “I use unknown for untrusted input because I still have to narrow. I use any only when I am escaping a type hole I cannot model yet.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ts-3',
            question: 'What are generics in TypeScript?',
            answer: [
              'A generic is a type parameter - a placeholder you fill in later so one function stays typed for many shapes.',
              "function `identity<T>`(value: T): T { return value } - `identity(\"hi\")` makes T string. You keep the input type instead of widening to any.",
              "Everyday: `Array<T>`, `Promise<T>`, `useState<T>`, `Record<K, V>`. Constraints: function ```\npick<T extends { id: string }>\n```(row: T).",
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
              "Optional: name?: string means string | undefined. Read with user.name?`.toUpperCase()` (optional chaining).",
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
              "`Partial<User>` makes every field optional - useful for update payloads: ```\nprisma.user.update({ data: Partial<User> })\n```",
              "`Pick<User, \"id\" | \"name\">` keeps those keys. `Omit<User, \"password\">` drops a key. Common for API response shapes.",
              "`Record<string, number>` is { [key: string]: number }. `Record<\"a\" | \"b\", boolean>` is a closed map of those keys.",
              'These are types only - they do not change runtime objects. You still write the actual object; TS checks the shape.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'ts-type-vs-interface',
        title: 'type vs interface',
        questions: [
          {
            id: 'ts-8',
            question: 'Can a type alias be redeclared?',
            answer: [
              'No. A type name is one binding in that scope. type User = { name: string }; type User = { age: number } is a duplicate identifier error.',
              'You cannot “add fields later” by writing the type again. Change the original alias, or make a new name: type UserWithAge = User & { age: number }.',
              'That is why type is predictable in app code: the name always means exactly what you wrote in one place.',
              'Libraries almost never ask you to re-open a type alias. If you need merging, that is an interface job.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-9',
            question: 'Can an interface be redeclared?',
            answer: [
              'Yes. Two interface User blocks in the same scope merge into one type. interface User { name: string } plus interface User { age: number } becomes { name: string; age: number }.',
              'This is declaration merging. Same name, same scope (or across modules that augment) - fields are combined.',
              'Useful for extending a library type: declare a second interface Window { myFlag: boolean } and TS treats Window as having myFlag.',
              'It is also a footgun. A second interface User in another file can silently add fields. If you did not want a merge, use type (it will error instead).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-10',
            question: 'Can a type be a primitive, and can an interface?',
            answer: [
              'A type alias can name anything: type Id = string; type Count = number; type Flag = boolean; type Maybe = string | null; type Pair = [string, number].',
              'An interface cannot be a primitive. There is no interface Id = string. An interface always describes an object-like shape: fields, optional methods, or a call/construct signature.',
              'interface User { name: string } is fine. interface Id { } is an empty object type, not “string.” If you need a primitive or a union, that must be a type.',
              'Interview: “interface = object contract (and it can merge). type = alias for any type, including primitives, unions, and tuples.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ts-11',
            question: 'What uses extends, and what uses & - type vs interface?',
            answer: [
              'To combine object shapes on an interface, use extends: interface Admin extends User { role: string }. You can list several: interface Admin extends User, Timestamps {}.',
              'To combine type aliases, use &: type Admin = User & { role: string }. There is no type Admin extends User { } syntax - that is not valid.',
              "extends also shows up on types in other places: generic constraints (function `pick<T extends User>`) and conditionals (T extends string ? A : B). That is not the same as interface inheritance.",
              '& works on interfaces too if you write a type alias: type Admin = User & Timestamp where User is an interface. Pick extends for named object hierarchies; pick & for aliases, unions, and utilities.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ts-13',
            question: 'What else is different between type and interface?',
            answer: [
              'Unions and mapped types are type-only: type Status = "on" | "off"; type Flags = { [K in Key]: boolean }. You cannot write those as an interface.',
              'Tuples and primitive aliases are type-only: type Pair = [string, number]. Interfaces can look like arrays via index signatures, but a real tuple is a type.',
              'interface can merge and is a bit better for public object APIs and class implements User. type is better for unions, intersections, and one-off helpers.',
              'For a plain object shape, either works. Many teams: interface for exported object contracts, type for everything else. Don’t fight the file - match the neighbors.',
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
              "Vue 3 is the current line (Composition API, `<script setup>`, Vite). Vue 2 is legacy; mention the version in interviews.",
              'People pick it for readable templates, built-in reactivity, and a smaller “decisions to make” surface than React.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'vu-2',
            question: 'What is the difference between Options API and Composition API?',
            answer: [
              "Options API: ```\nexport default {\n  data() {\n    return { count: 0 }\n  }, methods: {\n    inc() { this.count++ }\n  }, computed, watch\n}\n```",
              "Composition API: `<script setup>` ```\nconst count = ref(0);\nfunction inc() { count.value++ }\n``` Logic is grouped by feature, not by option type.",
              'Composition is easier to extract into composables (useMouse, useFetch) and usually types more cleanly.',
              'Both work in Vue 3. New code and Vue docs lean Composition. You will still read Options API in older codebases.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-3',
            question: 'What are ref and reactive in Vue?',
            answer: [
              "`ref(value)` wraps any value. In script you use count.value; in the template {{ count }} is auto-unwrapped.",
              "```\nreactive({ name: \"Ada\" })\n``` makes a reactive object. You read user.name with no `.value`. If you replace the whole object (user = {…}) you lose the proxy.",
              'Prefer ref for primitives and when you may reassign the whole value. ref + reactive objects is also common.',
              "`toRefs(reactiveObj)` turns fields back into refs so you can destructure without breaking reactivity.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-4',
            question: 'What is v-model?',
            answer: [
              "Two-way binding shorthand. `<input v-model=\"name\">` keeps the input and name in sync as the user types.",
              'On a native input it is roughly :value="name" plus @input="name = $event.target.value".',
              "On a Vue 3 component it is modelValue + `emit(\"update:modelValue\")`. Multiple: v-model:title=\"title\".",
              'Use it for forms. For one-way data, prefer :value + @change so the parent stays the source of truth.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'vu-5',
            question: 'computed vs watch-when do you use each?',
            answer: [
              "```\ncomputed(() => items.filter(i => i.active))\n``` is a cached derived value. It reruns only when items change. Use it instead of a copied “filtered” ref.",
              "```\nwatch(source, (next, prev) => { … })\n``` runs a side effect: fetch, write localStorage, sync a third-party widget.",
              "```\nwatchEffect(() => { … })\n``` tracks whatever you read inside and reruns - handy, but easier to over-subscribe.",
              'Rule: if you can calculate it, use computed. If you must do something, use watch. Same idea as “no setState in useEffect to derive.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'vu-6',
            question: 'How do props and emits work in Vue?',
            answer: [
              "Parent passes data down: `<UserCard :user=\"user\" />`. Child declares ```\ndefineProps<{ user: User }>\n```() (or props: { user: Object }).",
              "Child talks back with events: ```\nconst emit = defineEmits<{ (e: \"select\", id: string): void }\n```>(); `emit(\"select\", user.id)`.",
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
              "Example: ```\nfunction useCounter() {\n  const n = ref(0);\n  const inc = () => n.value++;\n  return { n, inc }\n}\n```",
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
              "A component is a class + template + styles: @```\nComponent({\n  selector: \"app-user\", template: `{{ user.name }}`\n})\n```",
              "A service is a class with @`Injectable()` for shared logic (API calls, state). Components stay thin and call services.",
              "NgModule used to declare and import features. Modern Angular prefers standalone: @```\nComponent({ standalone: true, imports: [CommonModule] })\n```",
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
              "Event binding: (click)=\"`save()`\" or (ngSubmit)=\"`onSubmit()`\". $event is the payload.",
              'Two-way: [(ngModel)]="name" (FormsModule) or [value] + (valueChange). Banana-in-a-box is sugar for property + event.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ng-5',
            question: 'What is dependency injection in Angular?',
            answer: [
              'Angular creates class instances and passes them in. You ask for a type; the injector finds or creates it.',
              "`constructor(private api: ApiService)` or the ```\ninject(ApiService) function in\n``` standalone / field initializers.",
              "@```\nInjectable({ providedIn: \"root\" })\n``` makes a singleton for the whole app. Provide at a component to scope a fresh instance.",
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
              "Default: Angular walks the component tree when events, timers, XHR, or other patched async work fire (`Zone.js`).",
              'OnPush skips a component unless its inputs change by reference, it fires an event, or you mark it dirty. Cheaper for large trees.',
              "Signals (`signal()`, `computed()`) update views more locally and are the newer model - mention them if the role is current Angular.",
              'Mutating an input object in place can fail to update an OnPush child. Replace the reference or use a signal.',
            ],
            difficulty: 'hard',
          },
          {
            id: 'ng-8',
            question: 'What is an HTTP interceptor in Angular?',
            answer: [
              "A class (or functional interceptor) that every HttpClient call goes through: `intercept(req, next)`.",
              "Common jobs: clone the request and set `Authorization: Bearer` ${token}; log; catch 401 and refresh the token.",
              "You must call `next.handle(req)` to send it. You can tap the response without replacing it.",
              "Register with ```\nprovideHttpClient(withInterceptors([authInterceptor]))\n``` or HTTP_INTERCEPTORS in older NgModule apps.",
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
              "`useState(initial)` holds local state. `const [n, setN]` = `useState(0)`. Calling setN queues a re-render with the new value.",
              "`useEffect(fn, deps)` runs fn after paint. Use it for fetch, subscriptions, timers. Return a cleanup function to unsubscribe.",
              'useLayoutEffect runs before the browser paints - measure DOM or sync scroll to avoid a flicker. Default to useEffect.',
              "`useRef(x)` is a mutable box ({ current }) that does not re-render. Also how you hold a DOM node: ref={el}.",
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
              "`useMemo(() => heavy(list), [list])` skips redo when list is the same reference. Worth it for expensive filters/sorts, not for `1 + 1`.",
              "`useCallback(fn, deps)` keeps the same function reference so `memo()` children or effect deps do not churn every render.",
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
              "Derive during render: `const x = f(props/state)`",
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
              "Example: filteredList = ```\nuseMemo(() => items.filter(...), [items, q])\n```",
              "Avoid: ```\nuseEffect(() => setFiltered(...), [items, q])\n```",
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
              "Don’t: ```\nuseEffect(() => setForm(initial), [userId])\n``` as default",
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
              "Compute during render: `const visible = items.filter(...)` or wrap it in useMemo when the filter is expensive. One path, always in sync.",
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
              "Does not: mutating a ref (`.current` = …) - no re-render by design",
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
              "Never use a random key={`Math.random()`} - every render remounts the row and you lose state and focus.",
              "Keys must be unique among siblings, not globally unique. Two lists can both use `id=\"1\"`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 're-4',
            question: 'What is the difference between controlled and uncontrolled components?',
            answer: [
              "Controlled: React state is the source of truth. ```\n<input value={name} onChange={e =>\n``` `setName(e.target.value)`} />. Every keystroke updates state and re-renders.",
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
              "`createPortal(child, domNode)` renders child into domNode (often document.body) while keeping it in the React tree.",
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
          {
            id: 're-30',
            question: 'What is a microfrontend, why use one, and how do you use it?',
            answer: [
              'A microfrontend splits a large UI into separately built and deployed apps (checkout, admin, catalog) that compose into one product.',
              'Why: separate teams ship on their own cadence, you can migrate a legacy app piece by piece, or keep a second framework in one shell. Skip it for a small team and one repo.',
              'How: a host/shell loads remotes. Common tools are webpack Module Federation (also Vite/Rspack), single-spa, Next multi-zones, or iframes/web components.',
              'You still share auth, routing, design tokens, and error boundaries. Cost: duplicate deps, CSS clashes, and more ops. Interview: “independent deploy of UI slices, not a folder in a monolith.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-31',
            question: 'What is React Strict Mode?',
            answer: [
              'A development-only wrapper: `<StrictMode><App /></StrictMode>`. Vite and Create React App wrap the root by default. It renders no extra DOM and takes no props.',
              'It turns on extra checks for the tree inside it so impure renders, missing cleanups, and deprecated APIs show up while you develop.',
              'Production ignores those checks. Users do not get a double mount. Strict Mode is not a faster or “stricter types” mode.',
              'Interview: “dev-only extra checks on a subtree. Wrap the whole app on a new project; move it down if one island is not ready.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 're-32',
            question: 'What exactly does React Strict Mode do?',
            answer: [
              'In development it re-renders each component an extra time (and re-runs state/memo initializers) so mutations during render show up as flicker or wrong values.',
              'It remounts Effects: setup → cleanup → setup. A fetch or subscribe without cleanup looks like a double call. That is the point: write cleanup, or use an abort/ignore flag.',
              'It also re-runs ref callbacks (mount → cleanup → mount) and warns on deprecated APIs (unsafe class lifecycles, `findDOMNode`, legacy context).',
              'There is no opt-out for a child inside the tree. Seeing `useEffect` fire twice in React 18+ dev is Strict Mode, not a production double-run.',
            ],
            difficulty: 'medium',
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
              "If the type changes (div → span, or `<List>` → `<Grid>`), React unmounts the old tree and mounts a new one. State on that subtree is lost.",
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
              "React groups several setState calls into one re-render. ```\nsetA(1);\nsetB(2)\n``` in the same handler does not render twice.",
              'React 18 batches in events, promises, timeouts, and native handlers - not only in click handlers like older versions.',
              "If you must read the DOM between updates (measure after setState), `flushSync(() => setX(1))` forces a sync render. Rare.",
              "Functional updates (`setN(n => n + 1)`) are the safe way to chain updates that depend on the previous value inside a batch.",
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
              "`memo()` a heavy child when its props are stable. Fix the props (useMemo objects, useCallback, primitive values) or memo does nothing.",
              'Virtualize long lists. Profile with React DevTools before wrapping the whole app in memo.',
            ],
            difficulty: 'hard',
          },
          {
            id: 're-33',
            question: 'What is the React Compiler, and what does it do?',
            answer: [
              'A build-time optimizer (`babel-plugin-react-compiler`). 1.0 shipped in 2025. It reads your components, follows the Rules of React, and inserts memoization so you do not hand-wrap every value.',
              'It skips cascading re-renders (parent update, child props unchanged) and skips redo of expensive work in render. It can memoize after an early return, which `useMemo` cannot.',
              'You keep writing normal function components. If a function breaks the rules (mutate props, side effects in render), the compiler skips that function instead of changing behavior.',
              'Best on React 19 (runtime is in `react`). 17/18 need `react-compiler-runtime` and `target: "18"`. Interview: “automatic memoization at build time, not a new runtime API.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 're-34',
            question:
              'What changes in your code after you turn on the React Compiler?',
            answer: [
              'Source usually stays the same. You do not write the cache slots (`_c` / `c(n)`). Those appear only in compiled output. Add the Babel plugin and run it first in the plugin list.',
              'New code: stop sprinkling `useMemo`, `useCallback`, and `React.memo`. Keep them when you need a stable identity on purpose (often an effect dependency).',
              'Existing memo: leave it, or remove it only after you test. Deleting it can change what the compiler emits. Opt out one function with `"use no memo"`.',
              'Follow the Rules of React or that component is skipped. `eslint-plugin-react-hooks` now surfaces compiler diagnostics. Interview: “the compiler writes the memo; you write readable components.”',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'react-native',
    type: 'RN',
    name: 'React Native',
    blurb: 'React for iOS and Android, and how it differs from React on the web.',
    topics: [
      {
        id: 'rn-basics',
        title: 'React Native basics',
        questions: [
          {
            id: 'rn-1',
            question: 'What is React Native?',
            answer: [
              'A framework for building iOS and Android apps with React. You write JS/TS components; they render real native views, not HTML in a WebView (that is Cordova / older hybrids).',
              'Same mental model as React: components, props, state, hooks. The host components change: `View`, `Text`, `Image`, `Pressable` instead of `div`, `span`, `img`, `button`.',
              'Metro bundles JS. A native shell (iOS/Android) loads the bundle. The New Architecture uses JSI / Fabric; older talks mention the “bridge.”',
              'Interview: “React for mobile, native widgets, one JS codebase.” Expo is the common toolchain for starting without Xcode/Android Studio on day one.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rn-2',
            question: 'What is the difference between React and React Native?',
            answer: [
              "React (web) renders to the DOM. React Native renders to platform primitives (UIView / Android View). There is no `document`, no CSS file, no `div`.",
              "Styling: web uses CSS (classes, cascade, media queries). RN uses a `StyleSheet` object: ```\n{ flex: 1, padding: 16 }\n``` Flexbox is the layout system (column is the default direction, unlike web).",
              'Navigation is not react-router. You use React Navigation (stack/tabs) or Expo Router. Links and URLs exist in Expo Router; classic RN is screen names.',
              "You can share hooks, validation, and API clients. You cannot drop a web page into RN unchanged: replace HTML/CSS, browser APIs, and `window`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rn-3',
            question: 'Which React ideas still work in React Native, and which do not?',
            answer: [
              'Still work: function components, hooks, context, the same state rules, TypeScript, most JS libraries that do not touch the DOM.',
              'Do not work: `className`, CSS files, `dangerouslySetInnerHTML`, `window` / `document`, `react-dom`, semantic HTML, hover-only UX (no mouse).',
              'Events: `onPress` not `onClick`. Lists: `FlatList` / `SectionList` (virtualized) not a mapped `div`. Text must live in `<Text>`; a raw string in `View` is an error.',
              'Interview: “same React, different renderer and styling.” That is the one-line difference.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rn-4',
            question: 'How do you style and lay out a screen in React Native?',
            answer: [
              "```\nStyleSheet.create({\n  box: { flex: 1, padding: 16, backgroundColor: \"#fff\" }\n})\n``` then `style={styles.box}`. You can also pass an array of styles.",
              "Flexbox: default `flexDirection` is `column`. `flex: 1` fills leftover space. There is no grid or float. Use `gap` on newer RN.",
              "Units are density-independent pixels, not CSS `px`/`rem`. No cascade: a child does not inherit `fontSize` unless you pass it (or use a Text wrapper).",
              "Platform splits: `Platform.OS === \"ios\"`, `Platform.select`, or `Button.ios.tsx` / `Button.android.tsx`. Safe area: `SafeAreaView` or react-native-safe-area-context.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rn-5',
            question: 'How do you handle lists, presses, and navigation?',
            answer: [
              "`FlatList` for long lists (windowing). `map` of `View`s is fine for a handful of items, not for 1k rows.",
              "`Pressable` (or `TouchableOpacity`) for taps. `onPress` fires on touch. There is no CSS `:hover` as a primary affordance.",
              "React Navigation: a stack of screens, ```\nnavigation.navigate(\"Details\", { id })\n``` Expo Router uses files as routes if you want a Next-like feel.",
              "Images: `Image` with a size (or it may collapse). Remote images need `uri`. Local images use `require(\"./icon.png\")`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rn-6',
            question: 'When do you pick React Native vs a React website vs Flutter?',
            answer: [
              'React Native: you already know React, you want iOS + Android, and some native look. Expo speeds the start. You can add a web target, but it is not a drop-in Next app.',
              'React web: SEO, URLs, CSS, the browser. Do not use RN if the product is a website.',
              'Flutter: you want one UI toolkit (Dart + widgets) that paints its own pixels, very consistent across platforms. The team must learn Dart, not reuse React.',
              'Interview: skill of the team + whether you need native widgets (RN) or a custom-drawn UI (Flutter) + whether web is the main surface (React).',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'flutter',
    type: 'Flutter',
    name: 'Flutter',
    blurb: 'Dart UI toolkit for iOS, Android, and more.',
    topics: [
      {
        id: 'flutter-basics',
        title: 'Flutter basics',
        questions: [
          {
            id: 'flut-1',
            question: 'What is Flutter?',
            answer: [
              'Google’s UI toolkit. You write Dart, build a widget tree, and Flutter paints it with its own engine (Impeller / Skia). Not a WebView, not a wrap of OEM widgets by default.',
              'One codebase can target iOS, Android, web, and desktop. The look is yours (Material / Cupertino widgets) rather than “whatever the OEM button is.”',
              "`flutter run` + hot reload is the daily loop. `pubspec.yaml` is the package file (like `package.json`).",
              'Interview: “Dart + widgets + own renderer.” Contrast with React Native (JS + native views).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'flut-2',
            question: 'What is a widget, and StatelessWidget vs StatefulWidget?',
            answer: [
              'Everything is a widget: text, padding, a screen, even the app. `build()` returns a tree of widgets. Rebuilds are cheap descriptions; the framework updates the render objects.',
              '`StatelessWidget`: no mutable state. Looks only at constructor fields. Use it until you need to change over time.',
              '`StatefulWidget` + `State`: `setState(() => count++)` marks that subtree dirty. Put the changing fields on `State`, not on the widget class.',
              'Interview: same idea as React function component + `useState`, different API. Prefer composing small widgets over one giant `build`.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'flut-3',
            question: 'How do layout and theming work in Flutter?',
            answer: [
              'No CSS. You nest layout widgets: `Column`, `Row`, `Expanded`, `Padding`, `Container`, `ListView`. Constraints flow down; size flows up.',
              '`MaterialApp` + `ThemeData` (or `CupertinoApp`) sets colors and text styles. `const` constructors skip rebuild work when the config is compile-time constant.',
              'Lists: `ListView.builder` for long lists (lazy). A `Column` of 1k children will jank.',
              '`Navigator` / `go_router` for screens. Pass arguments on the route; do not hide app state only in the widget that got popped.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'flut-4',
            question: 'What are the differences between Flutter and React Native?',
            answer: [
              'Language: Dart vs JavaScript/TypeScript. Flutter is not React; there are no hooks unless you add a package that mimics them.',
              'Rendering: Flutter draws its own pixels (consistent UI, custom look is easy). RN maps to native views (platform look, you drop to Swift/Kotlin for some widgets).',
              "Ecosystem: RN reuses ```\nnpm and React knowledge. Flutter reuses pub.dev and one official toolkit. Team skill is usually the deciding vote\n```",
              'Both do iOS + Android. Both can do web; neither replaces a purpose-built React/Next site if the web app is the product.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'flut-5',
            question: 'What is hot reload, and how do you talk to native code?',
            answer: [
              'Hot reload injects new Dart into a running app and keeps state. Hot restart resets state. A full rebuild is for native/plugin changes.',
              'Platform channels (or JNI / pigeon / FFI) call Swift/Kotlin when a plugin does not exist. Most apps stay in Dart via official plugins (camera, path_provider).',
              'State at app scale: `setState` for local, then Provider / Riverpod / Bloc for shared state. Same “lift state up” idea as React.',
              'Interview: hot reload is the DX headline; platform channels are how you escape the Dart sandbox.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'flut-6',
            question: 'When do you pick Flutter over React Native?',
            answer: [
              'Pick Flutter when you want one visual language on every OS, heavy custom UI/animation, or the team is happy in Dart.',
              'Pick RN when the team is a React shop, you want to share logic with a React web app, or you need OEM widgets and existing native modules.',
              'Pick neither for a content/SEO site: that is React or another web stack. A thin RN/Flutter web export is a bonus, not a marketing site.',
              'Interview: “renderer + language + team.” There is no universal winner; say what you would optimize for.',
            ],
            difficulty: 'easy',
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
              "`addEventListener(\"click\", fn)` listens on the bubble phase by default. `addEventListener(\"click\", fn, true)` or { capture: true } listens on the way down.",
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
              "```\nlist.addEventListener(\"click\", (e) => {\n  const btn = e.target.closest(\"button[data-id]\");\n  if (!btn || !list.contains(btn)) return;\n  …\n})\n```",
              'Rows you add later still work - they do not need their own listener. Fewer listeners, less memory, no rebinding after render.',
              "React already delegates many events at the root. You still use the same idea with onClick on a `<ul>`, not on each of 10k rows if you can.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'br-5',
            question: 'What is the difference between event.preventDefault() and event.stopPropagation()?',
            answer: [
              "`preventDefault()` stops the browser’s default action: form submit, following an `<a href>`, checking a checkbox if you cancel it.",
              "`stopPropagation()` stops the event from reaching other listeners on ancestors (and later phases). The default action can still happen.",
              "A form handler often needs `preventDefault()` so the page does not reload. It rarely needs `stopPropagation()`.",
              "`stopImmediatePropagation()` also blocks other listeners on the same node. Use sparingly - it makes debugging harder.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'br-6',
            question: 'What is the difference between addEventListener and onclick=?',
            answer: [
              "`el.addEventListener(\"click\", fn)` can attach many listeners, use capture, and `removeEventListener(fn)` with the same function reference.",
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
              "Origin = scheme + host + port. `https://app.com` ≠ `http://app.com` ≠ `https://app.com:3000` ≠ `https://api.app.com`",
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
              "A Zustand store is a few lines: ```\nconst useStore = create((set) => ({\n  count: 0, inc: () => set(s => ({ count: s.count + 1 }))\n}))\n```",
              "Components subscribe with selectors: `useStore(s => s.count)`. Only those components re-render when count changes.",
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
              "`memo()` on a child does not help if the child still useContexts the changing value.",
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
    blurb: 'Large lists, Lighthouse, rate limiting, and Core Web Vitals.',
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
              "```\nfunction debounce(fn, ms) {\n  let t;\n  return (...a) => {\n    clearTimeout(t);\n    t = setTimeout(() => fn(...a), ms)\n  }\n}\n```",
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
              "Code-split routes: `lazy(() => import(\"./Settings\"))` so the first page does not download the admin screen.",
              "Tree-shake ES modules; avoid ```\nimport _ from \"lodash\" (use lodash-es or import debounce from \"lodash/debounce\")\n``` Drop moment for date-fns/Temporal.",
              "Dynamic `import()` rare features (charts, markdown, rich text) on click or viewport.",
              'Run a bundle analyzer (rollup-plugin-visualizer, source-map-explorer). Guessing which library is heavy is usually wrong.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-5',
            question: 'What is a long task, and how do you keep the main thread free?',
            answer: [
              'A long task is ~50ms+ of JS on the main thread. The page cannot paint or handle input during that time (hurts INP).',
              "Break work: process 100k items in chunks with requestIdleCallback or `setTimeout(0)`, or move it to a Web Worker.",
              'Don’t parse huge JSON or run heavy filters on every keystroke in the component body.',
              'Chrome Performance panel → “Long task” bars. React startTransition can mark UI updates as interruptible, not the heavy compute itself.',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'perf-lighthouse',
        title: 'Lighthouse',
        questions: [
          {
            id: 'pf-17',
            question: 'What is Lighthouse, and what does a Lighthouse report measure?',
            answer: [
              'Lighthouse is a Chrome (and CI) audit. It loads your page in a controlled lab, then scores how it performed, how accessible it is, and whether it follows common web checks.',
              'The report has four main categories, each 0-100: Performance, Accessibility, Best Practices, and SEO. Older reports also had a PWA / installability section.',
              'Performance is the one people mean by “Lighthouse score.” It is a weighted mix of lab metrics (FCP, LCP, TBT, CLS, Speed Index) - not one timer.',
              'You run it from Chrome DevTools → Lighthouse, PageSpeed Insights, or CI (lighthouse-ci). Always say which device preset you used (mobile is the default that matters).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pf-18',
            question: 'What is a good Lighthouse score?',
            answer: [
              'Each category is 0-100. Chrome paints 90-100 green (good), 50-89 orange (needs work), 0-49 red (poor). “Good” for Performance is 90+ on the mobile preset.',
              '90 is the bar, not 100. Chasing 100 often means fighting noise (extensions, A/B banners, third-party ads) that users still see.',
              'Read all four categories. A 95 Performance with 40 Accessibility is not a healthy page. SEO and Best Practices are cheaper wins than squeezing 92 → 98.',
              'Compare like with like: mobile vs desktop, same URL, same throttling. A desktop 99 and a mobile 62 can both be true.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pf-19',
            question: 'What do the Lighthouse Performance metrics mean?',
            answer: [
              'FCP (First Contentful Paint): first text or image appears. LCP (Largest Contentful Paint): the main hero/text is painted. Aim LCP under ~2.5s (same idea as Core Web Vitals).',
              'TBT (Total Blocking Time): how long the main thread was busy with long tasks after FCP. This is the lab stand-in for INP / “the page feels janky.”',
              'CLS (Cumulative Layout Shift): unexpected jumps. Speed Index: how quickly content visually fills in (a filmstrip score, not one paint).',
              'The overall Performance number is a weighted average of these (LCP and TBT weigh a lot). Fixing the heaviest metric moves the score more than shaving 20ms of FCP.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-20',
            question: 'How do you improve a Lighthouse Performance score?',
            answer: [
              'Start with the Opportunities and Diagnostics lists. They are ordered by estimated savings - don’t guess, open the biggest item first.',
              'Images: right size, modern formats (WebP/AVIF), width/height (helps CLS), lazy-load below the fold. The LCP image should be discoverable early (not only in JS).',
              'JavaScript: code-split routes, defer non-critical work, cut unused libraries. High TBT is almost always “too much JS on the main thread.”',
              'Server and CSS: faster TTFB (CDN, cache), less render-blocking CSS, subset fonts with font-display. Then re-run Lighthouse on mobile before you call it done.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-21',
            question: 'Why does Lighthouse disagree with “it feels fast on my laptop”?',
            answer: [
              'Lighthouse is lab data: a simulated mid-tier phone, CPU slowdown, and a throttled network. Your desktop wifi is not that environment.',
              'Field data (CrUX, Search Console, RUM) is real users. A page can score 88 in Lighthouse and still fail LCP in India on 4G - or the reverse if the lab hit a slow origin once.',
              'Extensions, logged-in HTML, and A/B banners change the run. Use an incognito window, the same URL, and average a few runs. One screenshot is not a trend.',
              'Interview: treat Lighthouse as a reproducible checklist. Treat CrUX / CWV as what Google Search and users actually felt. You want both.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pf-22',
            question: 'What do Accessibility, Best Practices, and SEO in Lighthouse actually check?',
            answer: [
              'Accessibility: contrast, labels, button vs div, heading order, alt text, focus. It is automated axe-core rules - it will not catch every UX issue, but a low score is a real bug list.',
              'Best Practices: HTTPS, no browser errors, valid images, no deprecated APIs, permissions policy. Small items, easy points, good hygiene.',
              'SEO: title, meta description, crawlable text, robots, viewport, legible font sizes, tap targets. It is not “you will rank #1” - it is “the page is not broken for a crawler.”',
              'Fix these even when Performance is the headline. They are usually faster to land than a 10-point Performance jump, and they show up in the same report.',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'network',
    type: 'Network',
    name: 'Network & Security',
    blurb: 'HTTP, WebSockets, CORS, OAuth, and common web threats.',
    topics: [
      {
        id: 'net-http',
        title: 'HTTP & APIs',
        questions: [
          {
            id: 'nt-1',
            question: 'What is CORS and why do browsers enforce it?',
            answer: [
              "A page on `https://evil.com` must not read `https://bank.com/api/me` just because the user is logged in. That is the point of CORS.",
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
              "POST: create or “do something” (not idempotent). `/orders` with a body. Repeating it may create two orders.",
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
              "JWT: a signed token the client sends (often `Authorization: Bearer)` The server can verify without a DB lookup, but revoke is harder (short expiry + denylist).",
              'Don’t store JWTs in localStorage if you can use HttpOnly cookies - XSS can read localStorage.',
              'Interview: explain tradeoffs (revocation, XSS, CSRF) instead of “JWT is modern therefore better.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-5',
            question: 'What do HTTP status codes 200, 201, 204, 400, 401, 403, 404, and 500 mean?',
            answer: [
              "200 OK: success with a body. 201 Created: a `new resource (often with Location)`. 204 No Content: success, nothing to return (DELETE).",
              '400 Bad Request: the client sent a bad body/query. 401 Unauthorized: not authenticated (missing/bad token). 403 Forbidden: authenticated but not allowed.',
              '404 Not Found: no such resource. 409 Conflict: state clash (duplicate email). 422: validation errors (common in APIs).',
              '500: your server crashed. 502/503: gateway/upstream down. Don’t return 200 with { error: true } - use the right code.',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'net-websockets',
        title: 'WebSockets',
        questions: [
          {
            id: 'nt-6',
            question: 'What are WebSockets?',
            answer: [
              'A WebSocket is a long-lived, two-way connection between a browser (or other client) and a server over TCP.',
              'After an HTTP upgrade handshake, both sides can send messages at any time. You are not waiting for a new request for each message.',
              "The URL scheme is ws:// or wss:// (TLS). In the browser: ```\nconst ws = new WebSocket(\"wss://api.example.com/chat\")\n```",
              'Use them for live data: chat, presence, multiplayer, collaborative cursors, live prices. Not for a one-shot “fetch a user.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-7',
            question: 'How is a WebSocket different from HTTP request/response?',
            answer: [
              'HTTP is request → response → connection usually done. The client speaks first. Each call is independent (unless you reuse keep-alive).',
              "A WebSocket stays open. Either side can push. The server can say “new message” without the client polling `/chat`.",
              'HTTP is stateless by default (you resend cookies/tokens). A socket is stateful: the process holds the connection until it closes.',
              'You still start with HTTP (the upgrade). After 101 Switching Protocols, frames are WebSocket, not REST JSON over GET/POST.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-8',
            question: 'When do you use WebSockets vs polling or Server-Sent Events?',
            answer: [
              "Polling: client GETs `/updates` every few seconds. Simple, cacheable, works everywhere. Wasteful if most polls are empty; latency is the poll interval.",
              'SSE (EventSource): server pushes text events over one HTTP response. Great for one-way feeds (notifications, logs). Client cannot send on the same stream.',
              'WebSockets: both sides talk often. Chat, games, “who is typing,” shared documents. Heavier to proxy, load-balance, and reconnect.',
              'Interview: start with “do I need server → client push?” If yes and only that, SSE is enough. If both directions, WebSocket. If rare updates, poll.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-9',
            question: 'How does a WebSocket connection start?',
            answer: [
              "The client sends a normal HTTP GET with `Upgrade: websocket,` `Connection: Upgrade,` Sec-WebSocket-Key, and `Sec-WebSocket-Version: 13.`",
              'The server replies 101 Switching Protocols and Sec-WebSocket-Accept (a hash of the key). After that, the TCP socket carries WebSocket frames.',
              "Browsers do this inside `new WebSocket(url)`. On the server you use ws, Socket.IO, or the platform’s upgrade handler (Express + ws, Nest gateway).",
              'Proxies must allow the upgrade (nginx proxy_set_header Upgrade). A load balancer that closes idle HTTP will drop quiet sockets unless you ping.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-10',
            question: 'What do you need to handle once the socket is open?',
            answer: [
              "Auth: you cannot set Authorization on `new WebSocket()` in a browser. Send a token as a query (worse) or as the first message after connect; or use a cookie on the upgrade.",
              'Reconnect: phones drop. The client should retry with backoff and resume (last event id) so you do not miss messages.',
              'Heartbeat: ping/pong so NATs and load balancers do not kill idle connections. Server should drop half-open sockets.',
              'Scale: each connection lives on one Node process. Sticky sessions or a pub/sub (Redis) so a message for user A reaches the box that holds A’s socket.',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'net-oauth',
        title: 'OAuth',
        questions: [
          {
            id: 'nt-11',
            question: 'What is OAuth 2.0?',
            answer: [
              'OAuth 2.0 is a way for a user to grant your app limited access to their data on another service without giving you their password.',
              'Example: “Allow MyApp to read my Google Calendar.” Google is the authorization server. MyApp never sees the Google password.',
              "Your app gets an access token (and often a refresh token). It calls the other API with `Authorization: Bearer` `<token>`.",
              'OAuth is authorization (“what may this app do?”), not a full login protocol by itself. Login-with-Google is usually OAuth + OpenID Connect.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-12',
            question: 'What is an OAuth provider?',
            answer: [
              'The provider (authorization server + usually a resource API) is the service the user already has an account on: Google, GitHub, Apple, Microsoft, Auth0, Okta, Keycloak.',
              'It shows the consent screen, checks the user, and issues tokens to your app (the client) if the user says yes.',
              "You register an app with the provider: client id, redirect URI (`https://myapp.com/callback`), and sometimes a client secret for confidential servers.",
              '“Social login” and “Sign in with X” are products on top of this. The provider owns the identity; you store the provider user id, not their password.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-13',
            question: 'What is the authorization code flow?',
            answer: [
              "The usual web flow. Browser goes to the provider: ```\n/authorize?client_id&redirect_uri&scope&state\n``` (and PKCE code_challenge).",
              'User logs in and consents. Provider redirects to your redirect_uri with ?code=…&state=…. You check state to stop CSRF.',
              "Your backend POSTs the code + client secret (or PKCE verifier) to `/token` and receives access_token (and refresh_token, id_token if OIDC).",
              "The code is one-time and short-lived. Never complete the `/token` step in a public SPA with a client secret - use PKCE and a backend or BFF.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-14',
            question: 'OAuth vs OpenID Connect - what is the difference?',
            answer: [
              'OAuth 2.0: “this app may call that API as the user.” It was not designed only for “who is this person?”',
              'OpenID Connect (OIDC) sits on OAuth. The scope openid plus an ID token (JWT) tells you who logged in: sub, email, name.',
              'Sign in with Google/GitHub (when you want an account) is OIDC or a provider-specific identity API. Calling Gmail on the user’s behalf is OAuth scopes.',
              'Interview: “OAuth = access; OIDC = login identity + access.” Don’t say “OAuth is how you log in” without mentioning OIDC or the ID token.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-15',
            question: 'Access token vs refresh token vs ID token?',
            answer: [
              'Access token: short-lived key for APIs (minutes). Send it as Bearer. Treat it like a password - HTTPS only, not in logs or URLs.',
              'Refresh token: longer-lived, used only at the token endpoint to get a new access token. Store it on the server (or HttpOnly cookie), not in localStorage if you can avoid it.',
              'ID token (OIDC): a JWT about the user for your app. Use it to create a session. Do not send the ID token as the API Bearer unless the API asked for it.',
              'Revoke: providers let you revoke refresh tokens. Access tokens usually expire on their own - keep them short.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'nt-16',
            question: 'What should you not do with OAuth?',
            answer: [
              'Do not use the old implicit flow (token in the URL hash). Use authorization code + PKCE for SPAs and native apps.',
              'Do not put access tokens in query strings or referrer-leaking links. Do not ship a client secret in a mobile app or frontend bundle.',
              'Redirect URIs must be exact and HTTPS. An open redirect lets an attacker steal the code.',
              'Validate state (and nonce for OIDC). Request the smallest scopes. “Login with GitHub” does not need repo admin.',
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'net-auth',
        title: 'Auth tokens & sessions',
        questions: [
          {
            id: 'nt-17',
            question: 'What is cookie-based authentication?',
            answer: [
              'After login the server Set-Cookie a session id or a JWT. The browser stores it and sends it on later requests to that site.',
              'Best flags: HttpOnly (JS cannot read it), Secure (HTTPS only), SameSite=Lax or Strict (cuts most CSRF).',
              'The server looks up the session (or verifies the JWT) and knows the user. Logout deletes the session and/or clears the cookie.',
              'Used for same-site web apps and a BFF. Foreign pages can still trigger cookie-sent POSTs unless you add SameSite and/or a CSRF token.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-18',
            question: 'What is localStorage-based authentication?',
            answer: [
              'After login the client saves an access token in localStorage (or sessionStorage) and attaches it by hand on each call.',
              "Typical: ```\nfetch(url, {\n  headers: {\n    Authorization: `Bearer ${localStorage.getItem(\"token\")}`\n  }\n})\n``` The browser will not send it for you.",
              'No CSRF from a foreign form (the header is not auto-attached). XSS can read localStorage and steal the account.',
              'Common in SPAs that talk to a separate API. Prefer an HttpOnly cookie via a BFF if you can. Clear the key on logout.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-19',
            question: 'What is an access token?',
            answer: [
              'A short-lived credential that proves the caller may use the API. Often a JWT; sometimes an opaque string the server looks up.',
              'The client sends it on each request. The server checks the signature and expiry (JWT) or the session store (opaque).',
              'Minutes-long is typical. Pair with a refresh token so the user does not log in every 15 minutes.',
              'Access token = “may call this API.” Not an ID token. Do not log it or put it in a query string.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-20',
            question: 'What is a Bearer token?',
            answer: [
              "Bearer means whoever holds this string is allowed in. The usual header is `Authorization: Bearer` `<access_token>`.",
              "```\nfetch(url, {\n  headers: {\n    Authorization: `Bearer ${accessToken}`\n  }\n})\n``` Axios and Angular interceptors often set this for you.",
              'If someone steals the token they are you until it expires. HTTPS only. Do not put it in URLs or referrer-leaking links.',
              'Cookie session auth is not Bearer. An API key in a header is the same idea with a different name.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'nt-21',
            question: 'What is an HTTP interceptor on the client (Axios), and why use one?',
            answer: [
              'A hook on every outgoing request and incoming response so each page does not attach auth by hand.',
              "```\naxios.interceptors.request.use((cfg) => {\n  cfg.headers.Authorization = `Bearer ${getToken()}`;\n  return cfg\n})\n```",
              'Response interceptor: if status is 401, try a refresh, retry the call, or send the user to login.',
              'Angular HttpInterceptor is the same job. Keep them small - a bug here breaks every API call.',
            ],
            difficulty: 'medium',
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
              "process.argv, fs, http, path, crypto are core modules: `import fs from \"node:fs/promises\".`",
            ],
            difficulty: 'easy',
          },
          {
            id: 'no-2',
            question: 'What is npm, and what is package.json for?',
            answer: [
              "npm (and yarn/pnpm) install packages into node_modules and record them in `package.json`.",
              "`package.json` holds name, \"type\", scripts (\"dev\": \"vite\"), and version ranges: \"react\": \"^19.0.0\".",
              "```\nnpm install / npm i adds deps. npm i -D eslint adds a devDependency. npm run dev runs the script\n```",
              "`package-lock.json` pins exact versions. Commit it. Use `npm ci in CI for a clean`, lockfile-only install.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'no-3',
            question: 'require vs import in Node?',
            answer: [
              "CommonJS: `const fs = require(\"fs\")`; module.exports = { fn }. Older default. Synchronous load, works without \"type\": \"module\".",
              "ES modules: ```\nimport fs from \"node:fs\";\nexport function fn() {}\n``` Need \"type\": \"module\" in `package.json` or a `.mjs` file.",
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
              "`process.env.PORT` and `process.env.DATABASE_URL` are environment variables. In local dev, dotenv loads a `.env` file.",
              "Never commit `.env` with real secrets. Commit `.env.example` with empty keys so others know what to set.",
              "Read env at startup and fail fast if a required key is missing. Don’t scatter `process.env.X` in every file - one config module.",
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
    id: 'backend',
    type: 'Backend',
    name: 'Backend',
    blurb: 'Shared API layering: MVC, models, repositories, services, and controllers.',
    topics: [
      {
        id: 'backend-layers',
        title: 'Layers & MVC',
        questions: [
          {
            id: 'be-1',
            question:
              'What are the model, repository, route, service, and controller files for?',
            answer: [
              'This is common backend layering, not a framework feature. Express, Nest, Django, Laravel, and Spring Boot use the same jobs with different file names.',
              "Route (or router): maps HTTP to a function. GET `/users/`:id → usersController.getById. No business rules, no SQL.",
              'Controller: HTTP only. Read params / body, call a service, return status + JSON (or a template). Do not write queries here.',
              'Service: business rules and orchestration. “Can this user cancel this order?” Talks to one or more repositories, starts a transaction.',
              'Repository: data access only. findById, create, update. Hides Prisma, SQL, or an ORM so the service does not care which DB.',
              'Model: the shape of the data. A Mongoose schema, a Prisma model, an Eloquent/Active Record class, or a TypeScript type plus validation.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'be-2',
            question: 'What is the MVC pattern, and is it frontend or backend?',
            answer: [
              'MVC means Model, View, Controller: split data, what the user sees, and the code that handles input.',
              'It started on the backend (Rails, Django MTV, Laravel, Spring, ASP.NET). The server loads a Model, a Controller decides, a View (HTML or JSON) is the response.',
              'Frontends use the same idea: Angular was MVC/MVVM; React is usually “components + a store,” not strict MVC. The names still help in interviews.',
              'Model = data and rules. View = UI or template. Controller = glue (an HTTP handler, or a UI event handler). Repository/service folders are MVC plus an extra data layer.',
            ],
            difficulty: 'easy',
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
              "```\nconst app = express();\napp.use(express.json());\napp.get(\"/health\", (req, res) => res.json({ ok: true }));\napp.listen(3000)\n```",
              'Still the most common “just an API” choice in JS. Nest, Fastify, and Hono sit on top of or next to the same idea.',
              "Interview: routing + middleware pipeline, then show req.params / req.body / `res.status(201).json(data)`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-2',
            question: 'What is middleware in Express?',
            answer: [
              "A function `(req, res, next) => { }`. It can read the request, mutate req, send a response, or call `next()` to pass down the chain.",
              "`app.use(express.json())` parses JSON bodies into req.body. `app.use(authMiddleware)` can reject 401 before the route runs.",
              'Order matters. Logging first, then JSON parser, then auth, then routes, then the error handler last.',
              "If you neither send a response nor call `next()`, the request hangs. That is a frequent bug.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-3',
            question: 'How do you define a basic route in Express?',
            answer: [
              "```\napp.get(\"/users\", async (req, res) => {\n  const users = await db.user.findMany();\n  res.json(users)\n})\n```",
              "```\napp.post(\"/users\", (req, res) => {\n  /* req.body */\n  res.status(201).json(created)\n})\n``` Same for put, patch, delete.",
              "Route params: `app.get(\"/users/:id\", …)` → req.params.id. Query: `/users?page=2` → req.query.page (strings).",
              "Router: ```\nconst r = express.Router();\nr.get(\"/\", list);\napp.use(\"/users\", r)\n``` keeps files small.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-4',
            question: 'How do you handle errors in Express?',
            answer: [
              "In async routes, wrap and call `next(err)` or use a wrapper. Thrown errors in async handlers are not caught unless you pass them on (or use Express 5).",
              "Error middleware has four args: ```\n(err, req, res, next) => {\n  res.status(err.status ?? 500).json({ error: err.message })\n}\n```",
              'Put that middleware after all routes. Don’t leak stack traces to clients in production; log them server-side.',
              "404: a final ```\napp.use((req, res) => res.status(404).json({ error: \"Not found\" }))\n``` if no route matched.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'ex-5',
            question: 'What is the difference between app.use, app.get, and a Router?',
            answer: [
              "`app.use(fn)` runs for every method and path prefix. `app.use(\"/api\", fn)` matches `/api` and `/api/anything`.",
              "`app.get(\"/users\", fn)` only GET `/users` (exact-ish; trailing slash settings vary).",
              "`express.Router()` is a mini-app you mount: `app.use(\"/users\", usersRouter)`. Helps split files by resource.",
              'Middleware on a router only applies to that router’s routes - good for resource-specific auth.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-6',
            question: 'Why do you use middleware, and where does it run?',
            answer: [
              'It is a shared step on the request path so many routes do not copy the same job: parse JSON, log, CORS, auth, rate limit.',
              "It runs on the way in before the route handler. After you call `next()`, later middleware and the route run; you can also work after `next()` awaits (or on res.finish).",
              "Put it on app.use for the whole app, or on a Router for one prefix (`/admin`, `/api`). That is “where” in Express, Nest, Django, and Rails.",
              'Interview: “pipeline around the handler.” Name json parser, auth, then the error handler last.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ex-7',
            question: 'What kinds of middleware are there?',
            answer: [
              "Application: `app.use(fn)` for every route. Built-in: `express.json()`, `express.urlencoded()`, `express.static(\"public\")`.",
              "Router: `usersRouter.use(requireAuth)` only wraps that router. Third-party: cors, helmet, cookie-parser, morgan, multer.",
              'Error: (err, req, res, next) with four args. Must be registered after routes. It turns thrown errors into HTTP responses.',
              "Custom: load a session, set req.user, then `next()`. If you send a response (401) you do not call `next()`.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'ex-8',
            question:
              'In Express middleware, what are req, res, next, and err, and when do you call each?',
            answer: [
              '`req` is the incoming request. Read `req.params`, `req.query`, `req.body` (after `express.json()`), headers, cookies. You can attach `req.user` for later layers. You do not call `req`.',
              '`res` is the outgoing response. Call `res.status(200).json(...)`, `res.send()`, or `res.redirect()` when this layer is the one talking to the client. After you send, the request is done: do not call `next()`.',
              '`next()` with no argument means “I am finished, keep going.” Call it after logging, parsing, or setting `req.user` so the next middleware or route can run. If you neither send nor `next()`, the request hangs.',
              '`next(err)` means “this failed.” Express skips the remaining `(req, res, next)` functions and jumps to the first error handler. Call it on a bad token, a thrown DB error, or any failure you want one shared response for.',
              '`err` is only on error middleware, which Express detects by arity: `(err, req, res, next)`. That `err` is whatever you passed to `next(err)`. Read `err.status` / `err.message`, log it, then `res.status(...).json(...)`. Call `next(err)` again only if this handler cannot finish.',
              'Interview: one of three: answer with `res`, continue with `next()`, or fail with `next(err)`. Never both `res.json()` and `next()` (headers already sent).',
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
              'A TypeScript framework for Node APIs, inspired by Angular: modules, controllers, injectable services, decorators.',
              "@```\nController(\"users\") class UsersController {\n  constructor(private users: UsersService) {} @Get() findAll() {\n    return this.users.findAll()\n  }\n}\n```",
              'It sits on Express (default) or Fastify. You get a folder structure, DI, pipes, guards, and testing utilities.',
              'Pick it when the API will grow and you want one official architecture. Overkill for a 3-route prototype.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ne-2',
            question: 'Controller vs service (provider) in Nest?',
            answer: [
              "Controller: HTTP surface. Decorators map routes: @`Get()`, @`Post()`, @`Param(\"id\")`, @`Body()`. It should not talk to the DB directly.",
              "Service / provider: @`Injectable() class with` business logic and DB calls. Controllers inject it in the constructor.",
              'Keep controllers thin: validate input, call a service, return the result. Services are easier to unit-test without HTTP.',
              "A provider is anything Nest can inject (service, repo, config). @`Injectable()` + listing it in the module’s providers.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ne-3',
            question: 'What is a Nest module?',
            answer: [
              "@```\nModule({\n  imports: [DbModule], controllers: [UsersController], providers: [UsersService], exports: [UsersService]\n})\n```",
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
              "Guard: `canActivate(context)` → boolean. Auth and roles: @`UseGuards(JwtAuthGuard)`. Runs before the handler.",
              'Pipe: transform or validate input. ValidationPipe + class-validator on a DTO class rejects bad bodies with 400.',
              'Interceptor: wrap the call (logging, mapping, timeout). Can tap the result before it goes to the client.',
              'Exception filters turn thrown errors into HTTP responses. Together they keep controllers free of boilerplate.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'ne-6',
            question: 'What is an interceptor, and how is it different from middleware?',
            answer: [
              'An interceptor wraps the controller method: it can run before, then after, and change the return value (map to { data }, add timing, timeout).',
              'Nest middleware is Express-style (req, res, next) and runs first, before guards. Interceptors run later, after guards and pipes, around the handler.',
              'Use interceptors for response shape, logging duration, caching, and transforming Observables. Use middleware for raw HTTP (cookies, body, CORS).',
              'Client-side “interceptors” (Axios, Angular HttpClient) are the same idea on the way out: attach a Bearer token or retry a 401.',
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
              "App Router (app/) is the current model: folders are routes, `page.tsx` is the UI, `layout.tsx` wraps children.",
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
              "app/api/users/`route.ts` exports HTTP functions: ```\nexport async function GET() {\n  return Response.json(users)\n}\n```",
              "```\nexport async function POST(req: Request) {\n  const body = await req.json();\n  … return Response.json(created, { status: 201 })\n}\n```",
              "Useful as a BFF: cookies, secrets, and DB stay on the server; the browser calls `/api/`... on the same origin (no CORS fight).",
              "Pages Router used pages/api/*`.ts`. App Router Route Handlers are the current equivalent.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'nx-5',
            question: 'What are page.tsx, layout.tsx, loading.tsx, and next/link?',
            answer: [
              "`page.tsx` is the route UI. app/blog/[slug]`/page``.tsx` → `/blog/hello` with params.slug.",
              "`layout.tsx` wraps all child routes and keeps state on navigation. Root app/`layout.tsx` is required (html/body).",
              "`loading.tsx` shows a Suspense fallback while the page’s server work finishes. `error.tsx` is an error boundary.",
              "`<Link href=\"/about\">` is client-side navigation with prefetch. Use it instead of `<a>` for in-app routes so you don’t full-reload.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'nx-6',
            question: 'How does caching / revalidate work in the App Router?',
            answer: [
              "```\nfetch(url, {\n  next: { revalidate: 60 }\n})\n``` caches the result and refreshes at most every 60 seconds (ISR-style).",
              "```\nfetch(url, { cache: \"no-store\" })\n``` is always fresh (SSR-like). `export const dynamic = \"force-dynamic\"` on a page does the same idea.",
              "`revalidatePath(\"/blog\")` or `revalidateTag(\"posts\")` after a mutation so the next view is not stale.",
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
              "An index is a side data structure on a field (or fields) so find/sort do not scan every document. ```\ndb.users.createIndex({ email: 1 })\n```",
              "1 is ascending, -1 is descending. Unique: ```\ncreateIndex({ email: 1 }, { unique: true })\n``` Compound: { city: 1, age: -1 }.",
              'Without an index, a filter on a large collection is a collection scan - slow and expensive on CPU/IO.',
              "Each index costs RAM and slows writes (insert/update must maintain the index). Index the queries you actually run; `explain() to check`",
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
              "```\ndb.users.insertOne({ name: \"Ada\", age: 36 })\n``` returns { acknowledged, insertedId }. If you omit _id, Mongo creates an ObjectId.",
              "```\ndb.users.insertMany([{ name: \"Ada\" }, { name: \"Lin\" }])\n``` inserts a batch. Use { ordered: false } if you want later docs to still insert after one failure.",
              "In drivers / Mongoose: ```\nUser.create({ name: \"Ada\" })\n``` or `new User({…}).save()`. Same idea - one document in, _id out.",
              'Inserting the same unique field twice (unique index on email) throws a duplicate-key error. Catch E11000.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-6',
            question: 'How do you select / find documents?',
            answer: [
              "`db.users.find({})` returns a cursor of every document. In the shell it prints a page; in a driver you await `.toArray()` or iterate.",
              "```\ndb.users.find({ age: 36 })\n``` is the filter (like WHERE age = 36). Combine fields for AND: { city: \"Paris\", age: { $gte: 18 } }.",
              "```\ndb.users.findOne({ name: \"Ada\" })\n``` returns one document or null - use it when you expect a single match.",
              "Projection: ```\nfind({ }, { name: 1, _id: 0 })\n``` returns only name. Don’t pull huge unused fields over the network.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-7',
            question: 'How do you update a document?',
            answer: [
              "```\ndb.users.updateOne({ name: \"Ada\" }, {\n  $set: { age: 37 }\n})\n``` changes age and leaves other fields alone.",
              'Always use an operator ($set, $inc, $push, $unset). Passing a raw object as the update can replace the whole document and drop fields.',
              "```\nupdateMany({ city: \"Paris\" }, {\n  $set: { country: \"FR\" }\n})\n``` updates every match. Check matchedCount / modifiedCount.",
              '$inc: { views: 1 } increments. $push: { tags: "js" } appends to an array. $unset: { temp: "" } removes a field.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-8',
            question: 'How do you delete a document?',
            answer: [
              "```\ndb.users.deleteOne({ _id: id })\n``` removes the first match. Prefer _id so you cannot delete the wrong “Ada”.",
              "```\ndb.users.deleteMany({\n  age: { $lt: 18 }\n})\n``` removes every match. Returns deletedCount.",
              "`deleteMany({})` deletes the entire collection’s documents. Treat it like ```\nDELETE\nFROM users without\nWHERE\n```",
              "`drop()` removes the collection (and indexes). Use it for teardown, not for “delete some users.”",
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-9',
            question: 'update vs replaceOne?',
            answer: [
              'updateOne + $set changes only the fields you name. Other fields stay. That is the usual “edit this user” path.',
              "`replaceOne(filter, newDoc)` swaps the whole document for newDoc. Fields you omit are gone. Use it when you have a full new version of the record.",
              'replaceOne still keeps the original _id. You cannot change _id by replacing.',
              'If you pass a plain object to updateOne without $set, older drivers treated it like a replace and you could wipe fields - always use operators.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-10',
            question: 'What does upsert do?',
            answer: [
              "```\nupdateOne({ email }, {\n  $set: { name }\n}, { upsert: true })\n``` updates the match, or inserts a new document if none exists.",
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
              "There is no SQL JOIN keyword on `find()`. You either embed related data in the same document or store an id and resolve it later.",
              'Embed: { name: "Ada", address: { city: "London" } }. One read, no join. Best when you always load the child with the parent.',
              "Reference: orders have userId. Then either a second `find({ userId })` or an aggregation $lookup.",
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
              "The `new field (as: \"orders\")` is always an array. No match → []. That behaves like a LEFT JOIN, not an INNER JOIN.",
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
              "Projection picks fields: ```\nfind(filter, { name: 1, email: 1, _id: 0 })\n```1 means include, 0 means exclude. Don’t mix include and exclude except for _id.",
              "```\nsort({ age: -1, name: 1 })\n``` is age descending, then name ascending. 1 = asc, -1 = desc. Sort on indexed fields when the set is large.",
              "`skip(10).limit(5)` skips 10 then returns 5 - page 3 of size 5 if you count from 0. Fine for small offsets; skip gets slow on huge pages.",
              "In drivers: ```\ncollection.find(filter).project({ name: 1 }).sort({ age: -1 }).limit(5)\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-18',
            question: 'What is the aggregation pipeline?',
            answer: [
              "A list of stages that transform documents in order: ```\ndb.orders.aggregate([{ $match }, { $group }, { $sort }, { $project }])\n```",
              '$match filters early (like WHERE) - put it first so later stages see fewer docs and can use indexes.',
              '$group: { _id: "$city", total: { $sum: "$amount" }, n: { $count: {} } } is GROUP BY city with aggregates.',
              "Also: $lookup (join), $unwind (array → rows), $project (shape). Use it for reports; use `find()` for simple CRUD.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-19',
            question: 'How do you page results in MongoDB (and why skip gets slow)?',
            answer: [
              "```\nfind(filter).sort({ _id: 1 }).skip(page * size).limit(size)\n``` works for small offsets.",
              "`skip(100000)` still walks 100000 index entries - gets slower as the page number grows.",
              "Keyset / cursor paging: ```\nfind({\n  _id: { $gt: lastId }\n}).sort({ _id: 1 }).limit(size)\n``` uses the index and stays cheap.",
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
              "Single-field: ```\ndb.users.createIndex({ email: 1 })\n``` The default _id index is unique and always there.",
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
              "Unique: ```\ncreateIndex({ email: 1 }, { unique: true })\n``` - two docs cannot share that value. Needed for “find this user by email” to stay honest.",
              'Partial: { unique: true, partialFilterExpression: { email: { $type: "string" } } } indexes only docs that match the filter. Smaller, and unique applies only to those docs.',
              'Sparse: skip docs that are missing the field. Older alternative to partial. Prefer partial - it is more precise.',
              "TTL: ```\ncreateIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })\n``` deletes the doc after that date. Sessions, OTPs, cache rows.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'mo-22',
            question: 'What are text, hashed, and wildcard indexes in Mongo?',
            answer: [
              "Text: ```\ncreateIndex({ title: \"text\", body: \"text\" })\n``` then ```\nfind({\n  $text: { $search: \"postgres join\" }\n})\n``` Word search, not a replacement for Elasticsearch.",
              "Hashed: ```\ncreateIndex({ userId: \"hashed\" })\n``` - even shard key distribution. Equality only; cannot range-scan a hashed index.",
              "Wildcard: ```\ncreateIndex({ \"$**\": 1 })\n``` or { \"settings.$**\": 1 } indexes unknown/dynamic field names. Useful for mixed documents; easy to over-index.",
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
              "`find(filter)` returns a cursor of every matching document - “find many.” In Node: ```\nconst users = await col.find({ city: \"Paris\" }).toArray()\n```",
              "`findOne(filter)` returns the first match or null - “find one.” No cursor. Use it when you expect at most one useful row (or you only need any one).",
              "There is no `findMany()` in the shell. Drivers and ORMs (Mongoose Model.find, Prisma findMany) are the many form; findOne / findUnique are the one form.",
              "`find({}).limit(1)` is still a cursor. Prefer findOne when you want a single document object.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-25',
            question: 'How do you look up one unique document in Mongo?',
            answer: [
              "By _id: ```\nfindOne({\n  _id: new ObjectId(\"…\")\n})\n``` or `findOne({ _id: id })`. The _id index is unique - this is the default unique lookup.",
              "By another unique field: ```\nfindOne({ email: \"a@x.com\" })\n``` only stays unique if you created a unique index on email. Without it, two Adas can exist.",
              "Mongoose: `User.findById(id)`, `User.findOne({ email })`. Prisma: ```\nfindUnique({\n  where: { email }\n})\n``` - Prisma will not compile findUnique on a non-unique field.",
              'If the field is not unique, use find (many) or findOne and accept “first match,” not “the only match.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-26',
            question: 'When do you use find (many) vs a unique lookup?',
            answer: [
              "Find many: lists, filters, search, “all orders for this user” - ```\nfind({ userId }).sort({ createdAt: -1 }).limit(20)\n```",
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
              "Table = fixed shape, many relations. Document = one object that can look like your API response. Mongo stores BSON (binary JSON), not a text `.json` file.",
              'You can put JSON inside a SQL column (Postgres JSONB) - that is still a table row with a JSON cell, not a document database.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'mo-29',
            question: 'How does inserting a user + orders differ in JSON vs a relational table?',
            answer: [
              "Document: one ```\ninsertOne({\n  name: \"Ada\", orders: [{ total: 10 }, { total: 20 }]\n})\n``` The child data is inside the parent. One write, one _id.",
              "Relational: ```\nINSERT INTO users (name)\nVALUES ('Ada') RETURNING id;\n``` then ```\nINSERT INTO orders (user_id, total)\nVALUES (1, 10), (1, 20);\n``` two tables, a foreign key.",
              "To add a new order later: Mongo $push: { orders: { total: 30 } } (or a second orders collection). SQL: one `INSERT into orders` - users table does not change.",
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
    id: 'sql',
    type: 'SQL',
    name: 'SQL',
    blurb: 'The shared relational language: tables, CRUD, joins, and queries that work in MySQL, Postgres, SQLite, and others.',
    topics: [
      {
        id: 'sql-basics',
        title: 'SQL basics',
        questions: [
          {
            id: 'sql-1',
            question: 'What is SQL?',
            answer: [
              'SQL (Structured Query Language) is how you talk to a relational database: create tables, read and write rows, join them, and enforce keys.',
              'The same core language shows up in PostgreSQL, MySQL, MariaDB, SQLite, and SQL Server. Dialects differ on extras (RETURNING, ILIKE, LIMIT vs TOP).',
              'Data lives in tables (rows and columns). You query with SELECT, change with INSERT / UPDATE / DELETE, and group related tables with keys and JOINs.',
              'Interview: SQL is the language and the model (tables + relations). Postgres or MySQL is a product that speaks SQL.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-2',
            question: 'Primary key vs foreign key?',
            answer: [
              'Primary key uniquely identifies a row: id INT PRIMARY KEY or a UUID. One per table; cannot be NULL.',
              "Foreign key points at another table’s key: user_id INT REFERENCES `users(id)`. The database rejects an order whose user does not exist.",
              'ON DELETE CASCADE removes children when the parent goes. ON DELETE RESTRICT / NO ACTION blocks the parent delete. Pick on purpose.',
              'Together they keep relationships honest so you don’t store orders for missing users. This is standard SQL, not a Postgres-only idea.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-3',
            question: 'What do SELECT, INSERT, UPDATE, DELETE do?',
            answer: [
              "SELECT reads rows: ```\nSELECT id, name\nFROM users\nWHERE age > 18\nORDER BY name\n```",
              "INSERT adds rows: ```\nINSERT INTO users (name, age)\nVALUES ('Ada', 36)\n```",
              "UPDATE changes existing rows: ```\nUPDATE users\nSET age = 37\nWHERE id = 1\n``` Always include WHERE unless you mean the whole table.",
              "DELETE removes rows: ```\nDELETE\nFROM users\nWHERE id = 1\n``` Same WHERE warning. These four are CRUD in SQL.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-4',
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
            id: 'sql-5',
            question: 'What is a transaction (ACID idea, simply)?',
            answer: [
              "A transaction is a group of SQL statements that all commit or all roll back. START TRANSACTION / `BEGIN;` … `COMMIT;` or `ROLLBACK;` on error.",
              'Atomic: transfer money with two UPDATEs - if the second fails, the first is undone. Consistent: constraints still hold at commit.',
              'Isolated: other sessions don’t see your half-finished work. Durable: after COMMIT it survives a crash.',
              "In ORMs: `prisma.$transaction([...])` or ```\ndb.transaction(async (tx) => { … })\n``` Use them whenever two writes must stay together.",
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'sql-crud',
        title: 'Insert, select, update, delete',
        questions: [
          {
            id: 'sql-6',
            question: 'How do you INSERT a row?',
            answer: [
              "```\nINSERT INTO users (name, age)\nVALUES ('Ada', 36);\n``` lists columns so table order cannot silently swap values.",
              "Several rows: ```\nINSERT INTO users (name)\nVALUES ('Ada'), ('Lin'), ('Grace');\n``` one statement, one round-trip.",
              "```\nINSERT INTO users (name) SELECT name\nFROM staging;\n``` copies from a query. DEFAULT fills serials, identities, and default columns.",
              "Getting the new id differs by engine: `last_insert_id()` in MySQL, RETURNING id in Postgres, or the driver’s insertId. Don’t assume one syntax.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-7',
            question: 'How do you SELECT rows?',
            answer: [
              "```\nSELECT name, age\nFROM users\nWHERE age > 18;\n``` - name the columns you need. ```\nSELECT * is fine in the console, noisy in app code\n```",
              'Add ORDER BY name ASC, LIMIT 20 (SQL Server uses TOP / OFFSET FETCH). Without ORDER BY the row order is not a guarantee you should rely on.',
              'Table aliases keep joins readable: SELECT u.name FROM users AS u. Qualify columns (u.name) once two tables are involved.',
              'DISTINCT removes duplicate result rows. That is standard. “One row per user” extras like DISTINCT ON are engine-specific.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-8',
            question: 'How do you UPDATE rows?',
            answer: [
              "```\nUPDATE users\nSET age = 37, city = 'Paris'\nWHERE id = 1;\n``` only the rows that match WHERE change.",
              'No WHERE updates every row. Treat that as a production incident waiting to happen.',
              "SET views = views + 1 increments from the current value. SET name = `CONCAT(name, '!')`; expressions are allowed (|| in some engines).",
              'Updating from another table is dialect-specific (UPDATE … JOIN in MySQL, UPDATE … FROM in Postgres). Learn the one your shop uses.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-9',
            question: 'How do you DELETE rows?',
            answer: [
              "```\nDELETE\nFROM users\nWHERE id = 1;\n``` removes matching rows. Prefer the primary key so you cannot delete the wrong “Ada.”",
              "```\nDELETE\nFROM users;\n``` with no WHERE deletes the whole table (data only). Constraints and indexes stay.",
              "`TRUNCATE users;` is faster for “empty this table” - it cannot take a WHERE, and may CASCADE to children depending on the engine.",
              'Soft-delete (SET deleted_at) is an app choice, not SQL DELETE. Some engines can RETURNING the deleted row; others cannot.',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'sql-joins',
        title: 'Joins',
        questions: [
          {
            id: 'sql-10',
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
            id: 'sql-11',
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
            id: 'sql-12',
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
            id: 'sql-13',
            question: 'What is a FULL OUTER JOIN?',
            answer: [
              'FULL OUTER JOIN keeps unmatched rows from both sides. Match when keys are equal; otherwise the missing side is NULL.',
              'SELECT a.id, b.id FROM team_a a FULL OUTER JOIN team_b b ON a.email = b.email; - in A only, in B only, or in both.',
              'Useful for diffs and reconciliations (“who is in this export but not that table?”). Heavy if both tables are large.',
              'FULL JOIN is the short name. Postgres and SQL Server have it. MySQL added it later; older MySQL needs a UNION of LEFT and RIGHT.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'sql-14',
            question: 'What is a CROSS JOIN?',
            answer: [
              'CROSS JOIN is every left row paired with every right row - a Cartesian product. 10 colors × 8 sizes = 80 rows.',
              "```\nSELECT *\nFROM colors CROSS\nJOIN sizes;\n``` has no ON clause. That is correct for “all combinations.”",
              'A JOIN with a condition that is always true (or a forgotten ON in some engines) can accidentally do this and explode the result.',
              'Use it on purpose for combinations or generating series. Never as a substitute for INNER JOIN.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'sql-15',
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
            id: 'sql-16',
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
        id: 'sql-queries',
        title: 'Basic queries',
        questions: [
          {
            id: 'sql-17',
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
            id: 'sql-18',
            question: 'How do LIKE, IN, and BETWEEN work?',
            answer: [
              'LIKE \'A%\' matches a prefix; LIKE \'%ing\' a suffix; _ is one character. Case folding depends on the engine and collation (MySQL often case-insensitive).',
              "id IN (1, 2, 3) or email IN (```\nSELECT email\nFROM vip)\n``` NOT IN is dangerous with NULLs in the list - prefer NOT EXISTS.",
              'id BETWEEN 10 AND 20 is inclusive (10 and 20 both match). Works for dates too: created_at BETWEEN \'2026-01-01\' AND \'2026-01-31\'.',
              'Leading-wildcard LIKE \'%foo\' cannot use a normal B-tree index well. Prefix LIKE \'foo%\' can.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-19',
            question: 'How do GROUP BY and HAVING work?',
            answer: [
              'GROUP BY city collapses rows that share a city into one result row. Non-grouped columns must be aggregated.',
              "SELECT city, `COUNT(*)` AS n FROM users GROUP BY city; - one line per city with how many users.",
              "WHERE filters rows before grouping. HAVING `COUNT(*)` > 5 filters groups after. “Cities with more than 5 users” is HAVING, not WHERE.",
              "SELECT city, `COUNT(*)` FROM users WHERE active = true GROUP BY city HAVING `COUNT(*)` > 5 ORDER BY n DESC;",
            ],
            difficulty: 'medium',
          },
          {
            id: 'sql-20',
            question: 'What are COUNT, SUM, AVG, MIN, MAX?',
            answer: [
              'Aggregates compute one value from many rows: COUNT, SUM, AVG, MIN, MAX (and extras like GROUP_CONCAT / STRING_AGG).',
              "`COUNT(*)` counts rows. `COUNT(email)` skips NULL emails. `COUNT(DISTINCT city)` counts unique cities.",
              "They work on the whole table (```\nSELECT COUNT(*)\nFROM users) or per\nGROUP BY\n``` AVG ignores NULL; SUM of no rows is NULL, not 0 - wrap with COALESCE if you need 0.",
              "Window version: `COUNT(*)` OVER (PARTITION BY city) keeps detail rows and adds a total column - not the same as GROUP BY.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-21',
            question: 'How do you handle NULL in queries?',
            answer: [
              'NULL means “unknown.” WHERE col = NULL is never true. Use WHERE col IS NULL or IS NOT NULL.',
              "`COALESCE(col, 0)` returns col unless it is NULL, then 0. Useful in SELECT and in SUM edge cases.",
              'LEFT JOIN fills unmatched right columns with NULL. WHERE o.id IS NULL is the usual “users with no orders” pattern.',
              'Whether UNIQUE allows several NULLs depends on the engine. Don’t assume - check the docs or use a partial / filtered unique index.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'sql-22',
            question: 'What is an index, and when do you add one?',
            answer: [
              "```\nCREATE INDEX idx_users_email\nON users (email);\n``` speeds WHERE email = ? and some ORDER BY email. Same idea in MySQL, Postgres, SQLite.",
              'Primary keys and UNIQUE already have indexes. You add extras for foreign keys you join/filter on and for hot search columns.',
              "```\nEXPLAIN (or EXPLAIN ANALYZE) shows a table scan vs an index lookup\n``` Use it instead of guessing.",
              'Writes get slower with each index. Don’t index every column. Index the columns you actually filter and join on.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'sql-23',
            question: 'What is normalization, and why not one giant table?',
            answer: [
              'Normalization splits repeated data into related tables so you store a user’s email once, not on every order row.',
              '1NF: atomic cells. 2NF/3NF: no repeating groups or transitive facts (city → zip stored once, not per order).',
              'Joins put the pieces back together at read time. That is the trade: cleaner writes, more JOINs on read.',
              'You can denormalize later (cache a count) when a join is proven hot - not as the default schema.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'sql-24',
            question: 'How do you look up related rows (join vs subquery)?',
            answer: [
              'Join lookup: SELECT u.*, o.total FROM users u JOIN orders o ON o.user_id = u.id WHERE u.id = 1 - pull related rows in one query.',
              "Subquery lookup: ```\nSELECT *\nFROM orders\nWHERE user_id = (SELECT id\nFROM users\nWHERE email = 'a@x.com');\n``` or WHERE user_id IN (SELECT …).",
              "EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id) is a “does a related row exist?” lookup - often faster than `COUNT(*)` > 0.",
              'Prefer a join when you need columns from both; EXISTS when you only need yes/no. This is the SQL version of Mongo $lookup.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'sql-find',
        title: 'Find many vs find unique',
        questions: [
          {
            id: 'sql-25',
            question: 'How do you find many rows vs one unique row?',
            answer: [
              "Find many: ```\nSELECT id, name\nFROM users\nWHERE city = 'Paris'\nORDER BY name\nLIMIT 20;\n``` zero, one, or many rows.",
              "Find unique: ```\nSELECT *\nFROM users\nWHERE id = 1;\n``` or WHERE email = 'a@x.com' when email is UNIQUE. You expect one row or none.",
              "SQL has no `findMany()` name. The many form is a filtered SELECT. The unique form is SELECT … WHERE on a PRIMARY KEY or UNIQUE column.",
              "In ORMs: ```\nprisma.user.findMany({\n  where: { city }\n})\n``` vs ```\nfindUnique({\n  where: { id }\n})\n``` Same SQL underneath on MySQL or Postgres.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-26',
            question: 'What makes a lookup “unique”?',
            answer: [
              'A PRIMARY KEY or UNIQUE constraint (or unique index). The database will not store two rows with that key - that is the guarantee.',
              "```\nSELECT *\nFROM users\nWHERE email = ? is a unique lookup only if email is unique\n``` Without the constraint it is “find first of many.”",
              'LIMIT 1 without UNIQUE is not uniqueness. You just threw extra rows away. Two requests can still insert two Adas.',
              'Prisma findUnique only accepts unique fields for this reason. Raw SQL will happily WHERE a non-unique column - you must know the schema.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-27',
            question: 'When do you SELECT many vs look up one row?',
            answer: [
              'Many: list pages, search, “all orders for user 1,” reports. Always ORDER BY and usually LIMIT / keyset. This can use a non-unique index.',
              'One: get-by-id, login by email, “load this slug.” Use the PK/unique index so the plan stops at one row.',
              "```\nSELECT *\nFROM users is find-many of the whole table\n``` - fine in a console, not in a request handler.",
              'Interview: many = set of rows + pagination; unique = one key, one row, unique index.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'sql-vs-nosql',
        title: 'SQL vs NoSQL & tables vs JSON',
        questions: [
          {
            id: 'sql-28',
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
            id: 'sql-29',
            question: 'What is table-based data vs a JSON / document structure?',
            answer: [
              'A table is a grid: every row has the same columns. users: id | name | email. One cell, one value. Extra facts (orders) live in another table.',
              'A document is a JSON-like tree: { _id, name, email, orders: [{ id, total }] }. Nested objects and arrays are allowed in one record.',
              'Table = fixed shape, many relations. Document = one object that can look like your API response.',
              'You can put JSON inside a SQL column (JSON / JSONB) - that is still a table row with a JSON cell, not a document database.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'sql-30',
            question: 'How does inserting a user + orders differ in JSON vs a relational table?',
            answer: [
              "Relational: ```\nINSERT INTO users (name)\nVALUES ('Ada');\n``` then ```\nINSERT INTO orders (user_id, total)\nVALUES (1, 10), (1, 20);\n``` two tables, a foreign key.",
              "Document: one ```\ninsertOne({\n  name: \"Ada\", orders: [{ total: 10 }, { total: 20 }]\n})\n``` The child data is inside the parent. One write, one id.",
              "To add a new order later: SQL is one `INSERT into orders` - the users table does not change. Mongo often $push into the parent (or uses a second collection).",
              'Document insert is simpler when you always load the whole blob. Table insert is simpler when orders are shared, huge, or queried on their own.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'sql-31',
            question: 'How does data look in the database if it is not JSON?',
            answer: [
              'It looks like rows: a users table might be id=1, name=Ada, email=a@x.com on one line; the next line is id=2, name=Lin, …',
              'Related data is not nested. Ada’s orders are other rows in orders: id=10, user_id=1, total=10. You JOIN to see them together.',
              'On disk it is pages of typed columns (integers, text), not a JSON string. The SQL client prints a grid; that grid is the mental model.',
              '“Not JSON” in SQL means: grid of columns, not a tree. A driver may still map a JOIN result into objects in your app.',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'postgres',
    type: 'Postgres',
    name: 'PostgreSQL',
    blurb: 'Postgres-specific SQL: JSONB, RETURNING, index types, and extras beyond the shared language.',
    topics: [
      {
        id: 'postgres-basics',
        title: 'PostgreSQL extras',
        questions: [
          {
            id: 'pg-1',
            question: 'What is PostgreSQL?',
            answer: [
              'An open-source relational database that speaks SQL. Tables, keys, and ACID transactions are the shared SQL contract.',
              'What is Postgres-specific is the extra surface: JSONB, arrays, full-text search, DISTINCT ON, RETURNING, ILIKE, and a rich index toolbox.',
              'Concurrency uses MVCC. Readers do not block writers the way a naive lock-everything engine would. Default isolation is READ COMMITTED.',
              'Default choice for most new backends unless you have a specific document or analytics store reason not to.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-2',
            question: 'What does Postgres add on top of standard SQL?',
            answer: [
              "RETURNING on INSERT / UPDATE / DELETE so you get the `new row (or id)` without a second SELECT. MySQL uses `last_insert_id()` instead.",
              'ON CONFLICT … DO UPDATE / DO NOTHING for upserts. MySQL’s closest cousin is ON DUPLICATE KEY UPDATE.',
              'DISTINCT ON (user_id), ILIKE, arrays, JSONB with @> / ->> , and GENERATE_SERIES. These are the answers that are not “just SQL.”',
              'Interview: put JOINs and GROUP BY in the SQL topic. Put RETURNING, JSONB, and GIN indexes here.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-3',
            question: 'How do transactions work in Postgres?',
            answer: [
              "`BEGIN;` … `COMMIT;` or `ROLLBACK;`. Same ACID idea as other SQL engines, implemented with MVCC (row versions, not “lock the table to read”).",
              'Default isolation is READ COMMITTED: you see rows committed before each statement. REPEATABLE READ and SERIALIZABLE are stricter if you ask.',
              'A long transaction holds row versions and blocks VACUUM. Don’t do HTTP calls inside BEGIN … COMMIT.',
              'SET TRANSACTION ISOLATION LEVEL SERIALIZABLE when two-step checks must not race (unique booking of the last seat). Be ready to retry serialization failures.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-10',
            question: 'What does RETURNING do?',
            answer: [
              'RETURNING asks Postgres to send back columns from the rows that were just inserted, updated, or deleted.',
              "```\nINSERT INTO users (name)\nVALUES ('Ada') RETURNING id, name;\n``` - you get the serial / identity id without a follow-up SELECT.",
              "```\nUPDATE users\nSET age = 37\nWHERE id = 1 RETURNING *;\n``` ```\nDELETE\nFROM users\nWHERE id = 1 RETURNING id;\n``` same idea.",
              "MySQL does not have RETURNING in older versions. ORMs expose this as `.returning()` (Drizzle) or the object create/update returns (Prisma).",
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-11',
            question: 'How do you upsert in Postgres?',
            answer: [
              "```\nINSERT INTO users (email, name)\nVALUES ('a@x.com', 'Ada')\nON CONFLICT (email) DO UPDATE\nSET name = EXCLUDED.name;\n```",
              'EXCLUDED.name is the value you tried to insert. ON CONFLICT DO NOTHING skips the row if the unique key already exists.',
              'The conflict target must be a PRIMARY KEY or UNIQUE constraint (email in the example). Without it, ON CONFLICT cannot run.',
              "This is one statement - safer than SELECT then INSERT when two requests race. MySQL: ON DUPLICATE KEY UPDATE. Prisma: `upsert()`.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-12',
            question: 'What is DISTINCT ON?',
            answer: [
              'DISTINCT ON (user_id) is Postgres-only: keep one result row per user_id. Standard DISTINCT removes fully duplicate rows.',
              "```\nSELECT DISTINCT\nON (user_id) user_id, created_at\nFROM events\nORDER BY user_id, created_at DESC;\n``` - latest event per user.",
              'ORDER BY must start with the DISTINCT ON columns, then the “which row wins” key (created_at DESC).',
              "Other engines use a window: `ROW_NUMBER()` OVER (PARTITION BY user_id ORDER BY created_at DESC) AND n = 1. That also works in Postgres.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-13',
            question: 'What is ILIKE, and how is LIKE different in Postgres?',
            answer: [
              'LIKE is case-sensitive in Postgres (unlike typical MySQL collations). LIKE \'ada%\' does not match Ada.',
              'ILIKE is the case-insensitive Postgres version: ILIKE \'ada%\' matches Ada and ADA.',
              "Prefix ILIKE 'ada%' can still use an index if you have ```\nCREATE INDEX\nON users (lower(email)) and query lower(email) LIKE 'ada%'.\n```",
              'For real search, prefer full-text (to_tsvector / to_tsquery) or a trigram GIN index (pg_trgm) over leading-wildcard ILIKE \'%ada%\'.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pg-14',
            question: 'How do UNIQUE and NULL interact in Postgres?',
            answer: [
              "UNIQUE allows multiple NULLs in Postgres because NULL ≠ NULL. Two rows with email NULL both pass a `UNIQUE(email)`.",
              "If you need “at most one empty email,” use a partial unique index: ```\nCREATE UNIQUE INDEX\nON users (email)\nWHERE email IS NOT NULL;\n``` plus a separate rule for the blank case.",
              'Or store a sentinel and a real UNIQUE, or use a COALESCE expression index. Don’t assume MySQL’s UNIQUE + NULL rules are the same.',
              'Partial unique indexes are also how you enforce “one active row per user” (WHERE deleted_at IS NULL).',
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
              "B-tree (default): ```\nCREATE INDEX\nON users (email);\n``` equality, range (<, >), ORDER BY, LIKE 'foo%'. Use this unless you have a reason not to.",
              "Hash: equality only (=). Rarely worth it over B-tree. ```\nCREATE INDEX\nON users USING HASH (email);\n```",
              "GIN: values inside a container - JSONB keys, arrays, full-text tsvector. ```\nCREATE INDEX\nON products USING GIN (data jsonb_path_ops);\n```",
              'GiST / SP-GiST: geometry, ranges, some text. BRIN: huge append-only tables (time-series) - tiny index, coarse. Name the type in USING ….',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-27',
            question: 'What are unique, partial, expression, and covering indexes in Postgres?',
            answer: [
              "Unique: ```\nCREATE UNIQUE INDEX\nON users (email);\n``` or UNIQUE on the column. Enforces one row per value and is the index for “find unique.”",
              "Partial: ```\nCREATE INDEX\nON users (email)\nWHERE deleted_at IS NULL;\n``` only active rows. Smaller, and unique can apply only to that slice.",
              "Expression: ```\nCREATE INDEX\nON users (lower(email));\n``` so WHERE `lower(email)` = 'ada@x.com' can use the index. Index the expression you query.",
              "Covering: ```\nCREATE INDEX\nON users (email) INCLUDE (name);\n``` an Index Only Scan can return name without touching the table heap.",
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
              "```\nEXPLAIN ANALYZE shows which one ran. “Lookup” in interviews usually means Index Scan\non a unique/PK key: one row, one index probe\n```",
            ],
            difficulty: 'hard',
          },
          {
            id: 'pg-29',
            question: 'What is EXPLAIN ANALYZE in Postgres?',
            answer: [
              "EXPLAIN shows the planner’s estimate (Seq Scan vs Index Scan, join type, row counts). ```\nEXPLAIN ANALYZE runs the query and adds real time and rows\n```",
              'Read it bottom-up: the inner node runs first. Compare estimated rows vs actual - a huge miss means bad stats or a wrong index.',
              'Look for Seq Scan on a huge table with a selective WHERE (missing index) and for Nested Loop on a large inner side (maybe Hash Join is better).',
              "Use ```\nEXPLAIN (ANALYZE, BUFFERS) when you care about cache hits\n``` Don’t run ANALYZE on a heavy write in production without a WHERE you trust.",
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'postgres-jsonb',
        title: 'JSONB',
        questions: [
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
          {
            id: 'pg-38',
            question: 'How do you query and index JSONB?',
            answer: [
              'extras->>\'theme\' is text. extras->\'theme\' is jsonb. extras @> \'{"theme":"dark"}\'::jsonb asks “does this document contain this?”',
              "```\nCREATE INDEX\nON users USING GIN (extras);\n``` or jsonb_path_ops for containment (@>) only. Without an index, @> on a large table is a seq scan.",
              'You can UNIQUE or CHECK extracted fields: UNIQUE ((extras->>\'external_id\')). Prefer a real column if you join or constrain it often.',
              'json vs jsonb: json stores the exact text; jsonb is parsed and indexable. Use jsonb unless you must preserve key order and duplicate keys.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'pg-39',
            question: 'How do you UPDATE a JSONB field without replacing the whole object?',
            answer: [
              "```\njsonb_set(extras, '{theme}', '\"dark\"')\n``` writes one key. ```\nUPDATE users\nSET extras = jsonb_set(extras, '{theme}', '\"dark\"')\nWHERE id = 1;\n```",
              'extras || \'{"theme":"dark"}\'::jsonb merges at the top level. Deep merge needs jsonb_set or jsonb_insert.',
              'Remove a key: extras - \'theme\'. Don’t string-replace JSON in the app if you can do it in SQL - races will clobber other keys.',
              'If you update the same keys all the time, that is a hint to promote them to columns.',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'redis',
    type: 'Redis',
    name: 'Redis',
    blurb: 'In-memory key-value store for cache, sessions, and pub/sub.',
    topics: [
      {
        id: 'redis-basics',
        title: 'Redis basics',
        questions: [
          {
            id: 'rd-1',
            question: 'What is Redis?',
            answer: [
              'An in-memory key-value store. Keys are strings; values can be strings, hashes, lists, sets, sorted sets, or streams.',
              'Data lives in RAM, so reads and writes are microseconds. You can persist with RDB snapshots and/or AOF logs.',
              'You talk to it with simple commands: GET, SET, HGET, LPUSH, PUBLISH. Node clients: ioredis or redis.',
              'Interview: “fast ephemeral state and cache, not the source-of-truth user table.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rd-2',
            question: 'Where is Redis used?',
            answer: [
              'Cache: after a Postgres/Mongo read, SET user:42 with a TTL so the next request skips the DB.',
              'Sessions: cookie holds a session id; Redis holds { userId }. Rate limits, distributed locks, job queues (BullMQ).',
              'Pub/sub or streams so one Node process can fan a WebSocket message out to the box that holds that user.',
              'Also: leaderboards (sorted sets), carts, feature flags, short-lived OTPs. Not for complex joins or the only copy of money.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rd-3',
            question: 'Why is Redis used?',
            answer: [
              'RAM plus simple commands is much faster than hitting the primary DB for hot keys.',
              'Shared across many app servers, unlike an in-process Map that dies with the process.',
              'TTL is built in: SET key value EX 300 so a cache entry expires on its own.',
              'Atomic ops (INCR, SET NX) make counters and locks safe without a SQL transaction.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rd-4',
            question: 'How do you use Redis in an app?',
            answer: [
              "```\nconst redis = new Redis(process.env.REDIS_URL);\nawait redis.set(\"user:1\", JSON.stringify(user), \"EX\", 60);\nconst raw = await redis.get(\"user:1\")\n```",
              'Cache-aside: GET the key; on miss, read the DB, SET, return. On write, update the DB and DEL (or SET) the key.',
              'Sessions: express-session + connect-redis. The cookie is the id; Redis is the store.',
              'If Redis is down, fall back to the DB or fail closed. Do not let a cache outage take the whole site if you can avoid it.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'rd-5',
            question: 'Redis vs your primary database?',
            answer: [
              'Redis: memory-first, simple keys, optional persist. Postgres/Mongo: durable, queried, source of truth.',
              'If Redis restarts without persistence you lose cache (you rebuild it). You must not have stored the only copy of users or payments there.',
              'Use both: the DB for truth, Redis for speed and coordination between processes.',
              'Interview: “I cache reads in Redis; I commit writes to Postgres first.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'rd-6',
            question: 'What Redis data types show up in interviews?',
            answer: [
              'String: cached JSON, INCR view counts. Hash: one object with fields (HSET user:1 name Ada).',
              'List: queues (LPUSH / BRPOP). Set: unique likes. Sorted set: rank by score (leaderboard).',
              'Pub/sub or streams: events between services or WebSocket fan-out.',
              'Pick the type that matches the access pattern. Do not always JSON.stringify into one string.',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'files',
    type: 'Files',
    name: 'Files & storage',
    blurb: 'Object storage buckets, image and video uploads, and what belongs in the database.',
    topics: [
      {
        id: 'files-basics',
        title: 'Buckets, images & video',
        questions: [
          {
            id: 'file-1',
            question: 'What is object storage, and what is a bucket?',
            answer: [
              'A bucket is a named container in object storage (S3, GCS, Azure Blob, R2, MinIO). Objects live at keys like images/user/12/avatar.webp.',
              'Each object is bytes plus metadata (Content-Type, Cache-Control). You get a URL, not a SQL row of pixels.',
              'Used for images, videos, PDFs, and backups: large, mostly write-once files.',
              'Interview: “files in a bucket, metadata in the database.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'file-2',
            question: 'What kinds of buckets and object stores are there?',
            answer: [
              'Cloud: AWS S3, Google Cloud Storage, Azure Blob, Cloudflare R2, Backblaze B2. Self-hosted: MinIO (S3 API).',
              'Public bucket or public prefix: anyone with the URL can GET. Fine for marketing images. Easy to leak private uploads.',
              'Private bucket: only your server or a signed URL can read. Default for user uploads, invoices, originals.',
              'Image CDNs (Cloudinary, imgix, ImageKit) sit on a bucket and resize or transcode on the fly.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'file-3',
            question: 'How are images stored?',
            answer: [
              'The browser picks a file (input type=file). The client uploads to your API or directly to the bucket with a presigned PUT.',
              'The bucket stores the bytes. Your DB stores the key or URL, width, height, and content-type - not a huge BYTEA/base64 blob.',
              'Make variants: original plus a thumb/WebP via Sharp, or let the CDN transform. Serve through CloudFront (or similar), not Node, for every view.',
              'Validate type and size on upload. Do not trust the file extension alone.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'file-4',
            question: 'How are videos stored?',
            answer: [
              'Same bucket idea, larger objects. Use multipart upload (S3 uploadPart) so a 1GB file does not go in one request.',
              'A worker (MediaConvert, ffmpeg) then makes HLS/DASH renditions (1080p, 720p) and a poster image.',
              'The player requests a manifest (.m3u8) from the CDN. Do not stream the raw upload through Express for every viewer.',
              'DB row: key, duration, status (processing / ready), poster URL. Update status when the job finishes.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'file-5',
            question: 'What do you store in the database vs the bucket?',
            answer: [
              'Bucket: the bytes. Database: id, userId, bucket, key, url, mime, size, width/height or duration, createdAt.',
              'Do not store user images or videos as base64 in Mongo/Postgres as the main plan. Rows get huge, backups hurt, you cannot CDN them well.',
              'Tiny icons as a data URL in CSS is fine. Avatars and videos are not tiny.',
              'On delete, remove the object and the row (or mark deleted and garbage-collect later) so you do not leak storage.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'file-6',
            question: 'How do you upload images or videos from application code?',
            answer: [
              'Server path: multer or busboy streams the file to S3 PutObject (@aws-sdk/client-s3). Then insert the metadata row.',
              'Direct-to-bucket: the server issues a presigned URL; the browser PUTs the file; your API never sees the bytes. Then the client tells you the key.',
              "`Next.js`: a route handler or server action can sign or proxy the same way. Never put AWS keys in the frontend bundle.",
              'Interview: “presigned upload + DB metadata + CDN read” is the usual production answer.',
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
              "A TypeScript ORM: you declare models in `schema.prisma`, run `prisma generate`, and get a typed client (`prisma.user.findMany()`).",
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
              "datasource db { provider = \"postgresql\" url = `env(\"DATABASE_URL\")` } and generator client { provider = \"prisma-client-js\" }.",
              "model User { id Int @id @`default(autoincrement())`; email String @unique; posts Post[] }.",
              "Relations: on Post, author User @```\nrelation(fields: [authorId], references: [id])\n``` and authorId Int.",
              "Change the schema, then migrate (or db push) and ```\nprisma generate so the client matches the database\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-3',
            question: 'migrate vs db push?',
            answer: [
              "```\nprisma migrate dev creates a versioned SQL file in prisma/migrations and applies it. Teams review those files\n```; prod uses migrate deploy.",
              "```\nprisma db push updates the database to match the schema without a migration history. Fast for local prototypes\n```, risky for shared/prod DBs.",
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
              "```\nconst user = await prisma.user.create({\n  data: { name: \"Ada\", email: \"a@x.com\" }\n})\n``` returns the created row (including id).",
              "```\ncreateMany({\n  data: [{…}, {…}]\n})\n``` inserts a batch. Some databases don’t return the rows; skipDuplicates: true ignores unique clashes.",
              "Nested: ```\nprisma.user.create({\n  data: {\n    email, posts: {\n      create: [{ title: \"Hi\" }]\n    }\n  }\n})\n``` writes user + posts in one call.",
              'Unique violations throw. Catch P2002 or validate first. Use upsert when “create or update” is the real intent.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-5',
            question: 'How do you select / find records?',
            answer: [
              "```\nfindMany({\n  where: { active: true }, orderBy: { name: \"asc\" }\n})\n``` returns an array (empty if nothing matches).",
              "```\nfindUnique({\n  where: { id: 1 }\n})\n``` or { where: { email } } needs a unique field. Returns the row or null.",
              "```\nfindFirst({\n  where: { name: \"Ada\" }\n})\n``` is the first match of a non-unique filter, or null.",
              'findUniqueOrThrow / findFirstOrThrow throw if missing - handy when a missing row is a 404, not a normal case.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-6',
            question: 'How do you update with Prisma?',
            answer: [
              "```\nprisma.user.update({\n  where: { id: 1 }, data: { name: \"Lin\" }\n})\n``` - where must be unique. Returns the updated row.",
              "```\nupdateMany({\n  where: {\n    age: { lt: 18 }\n  }, data: { active: false }\n})\n``` can match many. Returns { count }, not the rows.",
              'Partial data is fine: only the fields you set change. Use increment: { views: { increment: 1 } } for counters.',
              'update throws if the unique where misses. Check existence or use updateMany if “zero rows is ok.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-7',
            question: 'How do you delete with Prisma?',
            answer: [
              "```\nprisma.user.delete({\n  where: { id: 1 }\n})\n``` deletes one unique row and returns it. Throws if it does not exist.",
              "```\ndeleteMany({\n  where: { active: false }\n})\n``` deletes matches and returns { count }.",
              "`deleteMany({})` deletes every row in the table. Always pass a filter unless you mean a wipe.",
              'Foreign keys can block delete (RESTRICT) or cascade - that comes from the schema, not from the client call.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'pr-8',
            question: 'How do you upsert?',
            answer: [
              "await ```\nprisma.user.upsert({\n  where: { email }, create: { email, name: \"Ada\" }, update: { name: \"Ada\" }\n})\n```",
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
              "```\nprisma.user.findMany({\n  include: { posts: true }\n})\n``` returns each user plus a posts array. Users with no posts still appear (posts: []) - LEFT-style.",
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
              "Filter parents by children: ```\nprisma.user.findMany({\n  where: {\n    posts: {\n      some: { published: true }\n    }\n  }\n})\n``` - users who have at least one published post.",
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
              "Nested writes: ```\nprisma.user.create({\n  data: {\n    email, posts: {\n      create: [{ title: \"Hi\" }]\n    }\n  }\n})\n``` inserts the user and the post together.",
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
              "```\nprisma.user.count({\n  where: { active: true }\n})\n``` returns a number - use it for “how many?” without loading rows.",
              "```\nprisma.user.aggregate({\n  _avg: { age: true }, _min: { age: true }, _sum: { age: true }\n})\n``` computes over the table/filter.",
              "```\nprisma.user.groupBy({\n  by: [\"city\"], _count: { _all: true }, orderBy: { city: \"asc\" }\n})\n``` is GROUP BY city.",
              "For complex SQL (window functions, CTEs) use prisma.$queryRaw`SELECT …` and type the result yourself.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'pr-16',
            question: 'How do you run a transaction in Prisma?',
            answer: [
              "Sequential: await ```\nprisma.$transaction([prisma.account.update(…), prisma.account.update(…)])\n``` - all succeed or all fail.",
              "Interactive: await ```\nprisma.$transaction(async (tx) => {\n  await tx.order.create(…);\n  await tx.item.update(…)\n})\n``` Use tx, not prisma, inside.",
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
              "A TypeScript ORM that looks like SQL: ```\ndb.select().from(users).where(eq(users.id, 1))\n``` You see the query shape in the code.",
              "Schema is TypeScript (pgTable, mysqlTable, sqliteTable), not a separate `.prisma` DSL. Types come from that schema.",
              'Thin: it generates SQL and maps rows. You stay closer to indexes, joins, and EXPLAIN than with a heavier client API.',
              "Works with Postgres, MySQL, SQLite, and others. `drizzle-kit handles generate/push/migrate`",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-2',
            question: 'How do you define a table?',
            answer: [
              "```\nexport const users = pgTable(\"users\", {\n  id: serial(\"id\").primaryKey(), email: text(\"email\").notNull().unique(), name: text(\"name\")\n})\n```",
              "Relations are optional and separate: ```\nrelations(users, ({ many }) => ({\n  orders: many(orders)\n}))\n``` Needed for ```\ndb.query.users.findMany({\n  with: { orders: true }\n})\n```",
              "```\ndrizzle-kit generate writes SQL migrations from schema changes\n```; ```\ndrizzle-kit push applies the schema without files\n``` (local only, like Prisma db push).",
              'Import the table objects into queries - columns are users.email, not magic strings.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-3',
            question: 'Drizzle vs Prisma (simple view)?',
            answer: [
              'Drizzle: you write joins, where, and returning yourself. Feels like SQL with types. Easier to predict the exact query.',
              "Prisma: ```\nprisma.user.findMany({\n  include: { posts: true }\n})\n``` Faster to type everyday CRUD; SQL is generated for you.",
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
              "await ```\ndb.insert(users).values({ name: \"Ada\", age: 36 })\n``` inserts one row.",
              "```\n.values([{ name: \"Ada\" }, { name: \"Lin\" }])\n``` inserts many in one statement.",
              "On Postgres, ```\n.returning({ id: users.id, name: users.name })\n``` gives you the inserted columns (like INSERT … RETURNING).",
              "Chain `.onConflictDoNothing()` or ```\n.onConflictDoUpdate({…})\n``` for upserts instead of catching a unique error.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-5',
            question: 'How do you select with Drizzle?',
            answer: [
              "await `db.select().from(users)` returns all columns as an array of objects.",
              "```\ndb.select({ name: users.name, age: users.age }).from(users)\n``` picks columns - better than * on wide tables.",
              "`.where(eq(users.id, 1))` is WHERE id = 1. Combine with `and(eq(…), gt(users.age, 18))`.",
              "Add ```\n.orderBy(asc(users.name)).limit(10).offset(20)\n``` for sorted pages. Empty array means no match, not an error.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-6',
            question: 'How do you update with Drizzle?',
            answer: [
              "await ```\ndb.update(users).set({ age: 37 }).where(eq(users.id, 1))\n``` - same as ```\nUPDATE users\nSET age = 37\nWHERE id = 1.\n```",
              "If you omit `.where(...)`, every row is updated. Treat that as a bug unless you truly mean it.",
              "`.returning()` (Postgres) gives the updated rows back so you don’t need a second SELECT.",
              "```\nset({\n  age: sql`${users.age} + 1`\n})\n``` or similar for increments when a helper isn’t enough.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-7',
            question: 'How do you delete with Drizzle?',
            answer: [
              "await ```\ndb.delete(users).where(eq(users.id, 1))\n``` deletes matching rows.",
              "No `.where()` deletes the whole table - same danger as SQL ```\nDELETE\nFROM users\n```",
              "```\n.returning({ id: users.id })\n``` on Postgres tells you what went away.",
              'Respect foreign keys: a parent with children may fail unless you delete children first or ON DELETE CASCADE.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-8',
            question: 'How do you upsert with Drizzle?',
            answer: [
              "await ```\ndb.insert(users).values({ email, name }).onConflictDoUpdate({\n  target: users.email, set: { name }\n})\n``` - insert, or update name if email exists.",
              "`onConflictDoNothing()` keeps the existing row and skips the insert. Useful for “ensure this row exists.”",
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
              "await ```\ndb.select().from(users).innerJoin(orders, eq(orders.userId, users.id))\n``` - only pairs that match on userId = users.id.",
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
              "```\n.leftJoin(orders, eq(orders.userId, users.id))\n``` keeps every user. Missing orders come back as null fields on that side.",
              "`.rightJoin(...)` keeps every order (even if the user is missing). `.fullJoin(...)` keeps unmatched rows from both tables.",
              'Same rules as SQL: filter extra conditions on the right table in the ON clause if you still want unmatched left rows.',
              "Teams usually write leftJoin and put the “must keep” table in `from(...)`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-11',
            question: 'What about query API / with (relational queries)?',
            answer: [
              "```\ndb.query.users.findMany({\n  with: { orders: true }\n})\n``` returns users with a nested orders array - Prisma-style include.",
              "Drizzle still emits SQL joins (or follow-up queries). You must define `relations()` on the schema or with: will not type-check.",
              "Add extras: with: { orders: { where: `eq(orders.paid, true)`, limit: 5 } }. Good for app reads; use the sql-shaped API when you need a custom join.",
              'Two styles, one database. Pick the sql API when you want to see every join; pick query when the graph is simple.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dr-12',
            question: 'How do you pick columns from a join?',
            answer: [
              "```\ndb.select({ userName: users.name, total: orders.total }).from(users).leftJoin(orders, eq(orders.userId, users.id))\n``` flattens the result.",
              'The keys in that object are the JSON keys you get back. That is usually nicer than { users, orders } blobs.',
              "Avoid `select()` (all columns) on wide joins - you pull unused text/json and make the mapping heavier.",
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
              "```\n.where(and(gt(users.age, 18), eq(users.city, \"Paris\")))\n``` is WHERE age > 18 AND city = 'Paris'. Import and, eq, gt from drizzle-orm.",
              "```\n.orderBy(desc(users.age), asc(users.name))\n``` is ORDER BY age DESC, name ASC. First key wins; second breaks ties.",
              "`.limit(10).offset(20)` is a page of 10 after skipping 20. Same OFFSET cost as SQL - prefer a WHERE id > lastId cursor for deep pages.",
              "Chain them on select/update/delete: ```\ndb.select().from(users).where(...).orderBy(...).limit(10)\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-14',
            question: 'eq, and, or, inArray, like?',
            answer: [
              "Comparison helpers: eq, ne, gt, gte, lt, lte - `eq(users.id, 1)` is id = 1. Always compare a column object, not a string name.",
              "Combine with `and(condA, condB)` and `or(condA, condB)`. Nest them like SQL parentheses.",
              "`inArray(users.id, [1, 2, 3])` is IN (1,2,3). `isNull(users.deletedAt)` is IS NULL.",
              "`like(users.name, \"A%\")` and `ilike(users.name, \"a%\")` (Postgres, case-insensitive). Same wildcard rules as SQL LIKE.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dr-15',
            question: 'How do you group and aggregate?',
            answer: [
              "```\ndb.select({\n  city: users.city, n: count()\n}).from(users).groupBy(users.city)\n``` - one row per city with a count.",
              'Import count, sum, avg, min, max, eq, and, or from drizzle-orm. Use them in select / where / having.',
              "```\n.having(sql`count(*) > 5`)\n``` (or `having(gt(count(), 5))` depending on version) filters groups after GROUP BY.",
              "This is the same idea as SQL SELECT city, `COUNT(*)` FROM users GROUP BY city HAVING `COUNT(*)` > 5.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dr-16',
            question: 'How do you run a transaction in Drizzle?',
            answer: [
              "await ```\ndb.transaction(async (tx) => {\n  await tx.update(accounts).set(…).where(…);\n  await tx.update(accounts).set(…).where(…)\n})\n```",
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
    id: 'python',
    type: 'Python',
    name: 'Python',
    blurb: 'Language basics: types, mutability, and how Python runs.',
    topics: [
      {
        id: 'python-basics',
        title: 'Python basics',
        questions: [
          {
            id: 'py-1',
            question: 'What is Python?',
            answer: [
              'A high-level, interpreted language. You write `.py` files; CPython compiles them to bytecode and runs them on a VM.',
              'Indentation is syntax (blocks are spaces, not braces). Dynamic types: `x = 3` then `x = "hi"` is legal; the type lives on the value.',
              'Batteries included: lists, dicts, pathlib, json, venv. Used for web (Django/Flask), scripts, data, and interviews.',
              'Interview: say interpreted, indentation, dynamic typing, then name one runtime (CPython) and one web stack.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'py-2',
            question: 'list vs tuple vs dict vs set?',
            answer: [
              "list: ordered, mutable. `nums = [1, 2]`; `nums.append(3)`. Index with `nums[0]`. Duplicates allowed.",
              "tuple: ordered, immutable. `point = (3, 4)`. Use as a dict key or a fixed record. `(\"a\",)` is a one-item tuple (the comma matters).",
              "dict: key to value. ```\nuser = {\"id\": 1, \"name\": \"Ada\"}\n``` Keys must be hashable (str, int, tuple). Lookup is average `O(1)`.",
              "set: unordered unique values. `{1, 2, 2}` is `{1, 2}`. Fast membership: `x in seen`. No index.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'py-3',
            question: 'What is mutable vs immutable?',
            answer: [
              'Immutable: int, float, str, bool, tuple, frozenset. Changing “it” makes a new object. `s = s + "!"` is a new string.',
              'Mutable: list, dict, set, most objects. `nums.append(1)` edits the same list. Two names can share that object.',
              'Default args are evaluated once: `def add(item, bag=[])` reuses the same list. Use `bag=None` and create a new list inside.',
              'Interview trap: `a = b = []` then `a.append(1)` also changes `b`. Copy with `list(a)` or `a.copy()` (shallow).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'py-4',
            question: 'What is the difference between == and is?',
            answer: [
              '`==` compares values (`__eq__`). `[1, 2] == [1, 2]` is True even if they are two lists.',
              '`is` compares identity: the same object in memory. Use it for `x is None`, not for numbers or strings.',
              'CPython interned small ints and some strings can make `is` look True by accident. Do not rely on that.',
              'Rule: `==` for values, `is` / `is not` for None (and sometimes sentinels).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'py-5',
            question: 'What are *args and **kwargs?',
            answer: [
              '`def f(*args, **kwargs)` collects extra positional args into a tuple and extra keywords into a dict.',
              'Call site: `f(1, 2, x=3)` → args is `(1, 2)`, kwargs is `{"x": 3}`. Unpack with `f(*nums, **data)`.',
              'Useful for wrappers and forwarders: pass `*args, **kwargs` through to the wrapped function.',
              'The names are convention. `*rest` / `**opts` work too. A bare `*` in the signature forces later args to be keyword-only.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'py-6',
            question: 'What is a list comprehension?',
            answer: [
              "`squares = [n * n for n in nums if n > 0]` builds a list in one expression: map plus an optional filter.",
              "Dict/set forms: ```\n{\n  k: v.upper() for k, v in pairs\n}\n``` and ```\n{\n  x.lower() for x in names\n}\n```",
              'Prefer a comprehension when it stays one line and readable. Use a for-loop when you have side effects or nested logic.',
              "A generator expression `(n * n for n in nums)` is lazy: it does not build the whole list. Wrap in `list(...)` if you need it.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'py-7',
            question: 'What is the GIL?',
            answer: [
              'The Global Interpreter Lock: CPython lets only one thread run Python bytecode at a time.',
              'Threads still help for I/O (waiting on a socket releases the GIL). They do not speed up CPU-bound Python loops.',
              'For CPU work use multiprocessing, a C extension that releases the GIL, or another runtime (or a service in Go/Rust).',
              'Interview: threads for I/O, processes for CPU. asyncio is one thread with many I/O waits.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'py-8',
            question: 'How do venv and pip work?',
            answer: [
              '`python -m venv .venv` creates an isolated env. Activate it so `python` and `pip` point at that folder, not the system.',
              '`pip install flask` writes into the venv. `pip freeze > requirements.txt` snapshots versions. `pip install -r requirements.txt` restores them.',
              'Never install project packages onto the global Python. Two apps can need different Flask versions.',
              'Commit `requirements.txt` (or `pyproject.toml` / a lockfile). Do not commit `.venv`.',
            ],
            difficulty: 'easy',
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
              "Python classes map to tables: class `User(models.Model)`: email = `models.EmailField(unique=True)`.",
              "```\nUser.objects.filter(age__gte=18).order_by(\"-created\")\n``` is a QuerySet (lazy - hits the DB when you iterate or `list()`).",
              "Create: ```\nUser.objects.create(email=\"a@x.com\")\n``` Update: user.name = \"Ada\"; `user.save()`. Delete: `user.delete()` or `QuerySet.delete()`.",
              "Joins: `User.objects.select_related(\"profile\")` (FK/one-to-one) and `prefetch_related(\"orders\")` (reverse/M2M) to avoid N+1 queries.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-3',
            question: 'urls.py vs views vs templates (simple flow)?',
            answer: [
              "`urls.py`: ```\npath(\"users/<int:id>/\", views.user_detail, name=\"user-detail\")\n``` maps a URL to a view function or class.",
              "The view receives the request, loads models, and returns HttpResponse, `render(request, \"user.html\", context)`, or JsonResponse.",
              'A template is HTML with {{ user.name }} and {% for order in orders %}. Keep logic light - compute in the view.',
              'Request path: URL → view → (model) → template or JSON. That is the sentence interviewers want.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-4',
            question: 'What are Django migrations?',
            answer: [
              "Python files that describe schema changes. After you edit models: python `manage.py` makemigrations then python `manage.py` migrate.",
              'They are versioned and committed. Every environment applies the same history so columns match the code.',
              'Don’t edit a migration that already ran in prod - add a new one. Same rule as Prisma/Rails migrations.',
              "python `manage.py` showmigrations tells you what is applied. Run migrate in deploy, not only on your laptop.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dj-5',
            question: 'What is the Django admin, and what is a ModelForm?',
            answer: [
              "Admin is an auto CRUD UI for models. Register: @```\nadmin.register(User) class UserAdmin(admin.ModelAdmin)\n```: list_display = (\"email\",).",
              'Great for internal tools. Don’t expose it to the public internet without auth and hardening.',
              "ModelForm builds a form from a model’s fields. `form.save()` creates/updates the instance after `is_valid()`.",
              'For APIs, DRF serializers play a similar role (validate + create/update) without HTML forms.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-6',
            question: 'How do you avoid N+1 queries in Django?',
            answer: [
              'N+1: you load users, then each user.profile hits the DB again. 1 + N queries for N rows.',
              "`select_related(\"profile\")` does a SQL JOIN for foreign keys / one-to-one. Use it when you will access that FK on every row.",
              "`prefetch_related(\"orders\")` runs a second query IN (user_ids) for reverse relations and many-to-many.",
              'django-debug-toolbar or query logging shows the count. If you see a query per row, add select/prefetch.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dj-7',
            question: 'What is Django middleware?',
            answer: [
              'A hook around every request: process the request on the way in, the response on the way out. CSRF, auth, and sessions are middleware.',
              'Order in `MIDDLEWARE` in `settings.py` matters. Security and session usually sit high; your custom request-id can go near the top.',
              'A middleware is a callable that takes `get_response` and returns a function that takes `request` and returns a response.',
              'Use it for cross-cutting work (logging, locale). Do not put business logic that belongs in a view or service.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dj-8',
            question: 'What are manage.py, settings.py, and INSTALLED_APPS?',
            answer: [
              '`manage.py` is the project CLI: `python manage.py runserver`, `migrate`, `createsuperuser`, `shell`.',
              '`settings.py` holds DEBUG, SECRET_KEY, DATABASES, INSTALLED_APPS, MIDDLEWARE. Never commit a real SECRET_KEY.',
              '`INSTALLED_APPS` lists Django apps (`django.contrib.auth`, your `users` app). Models and admin only load if the app is installed.',
              'A project is the folder with settings. An app is a feature package (users, billing). One project, many apps.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dj-9',
            question: 'How do CSRF and auth work in Django?',
            answer: [
              'CSRF middleware blocks unsafe POST, PUT, and DELETE requests that come from other sites. HTML forms need `{% csrf_token %}`. APIs use a CSRF cookie plus header, or token auth.',
              '`django.contrib.auth` gives User, login, logout, permissions. `@login_required` on a view redirects anonymous users.',
              '`request.user` is the logged-in user (or AnonymousUser). Check `user.is_authenticated`, not `if request.user`.',
              'For JSON APIs, Django REST Framework usually uses token, session, or JWT auth instead of cookie CSRF on every SPA call.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dj-10',
            question: 'When do you pick Django over Flask?',
            answer: [
              'Django when you want ORM, admin, auth, forms, and a default layout. Faster to a CRUD product or an internal tool.',
              'Flask when the app is a small API or you want to pick SQLAlchemy and a custom structure.',
              'Both are Python. Django is opinionated; Flask is a toolkit. FastAPI is another option when the job is typed JSON APIs.',
              'Interview: pick from product shape, not hype. A 4-table admin app is a Django problem.',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'flask',
    type: 'Flask',
    name: 'Flask',
    blurb: 'Minimal Python web framework: routes, requests, and blueprints.',
    topics: [
      {
        id: 'flask-basics',
        title: 'Flask basics',
        questions: [
          {
            id: 'fl-1',
            question: 'What is Flask?',
            answer: [
              'A lightweight Python web framework. You get routing, requests, and Jinja templates. No built-in ORM or admin.',
              "```\nfrom flask import Flask;\napp = Flask(__name__);\n@app.route(\"/\")\n``` then `def home(): return \"ok\"`.",
              'You add SQLAlchemy, Flask-Login, and so on yourself. Good for small APIs and services. Django is the batteries-included alternative.',
              'Interview: “microframework” means small core plus extensions, not “only for tiny apps.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'fl-2',
            question: 'How do you define a route in Flask?',
            answer: [
              '`@app.route("/users/<int:id>")` maps a URL to a view function. Methods default to GET; pass `methods=["POST"]` for writes.',
              'Path vars become arguments: `def show(id):`. Query string is `request.args.get("page")`. JSON body is `request.get_json()`.',
              'Return a string, a `(body, status)` tuple, or `jsonify(user)` for JSON. `redirect(url_for("home"))` for 302s.',
              '`url_for("show", id=3)` builds `/users/3` from the function name so templates do not hardcode paths.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'fl-3',
            question: 'What are request, jsonify, and the app context?',
            answer: [
              '`request` is a context local: it is the current HTTP request inside a view. Do not stash it on a global for later.',
              '`jsonify({"ok": True})` returns a JSON response with the right Content-Type. `request.get_json()` parses an incoming body.',
              'The application context holds `current_app` and `g` (per-request scratch). Flask pushes these when it handles a request.',
              'Outside a request (a script, a test), wrap work in `with app.app_context():` so `current_app` exists.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'fl-4',
            question: 'What is a Flask blueprint?',
            answer: [
              "A Blueprint is a slice of routes you register on the app: ```\nusers_bp = Blueprint(\"users\", __name__, url_prefix=\"/users\")\n```",
              "`@users_bp.route(\"/\")` then `app.register_blueprint(users_bp)`. Keeps a large app in modules instead of one file.",
              'Each blueprint can have its own templates and static folder. Error handlers can be blueprint-local.',
              'Interview: Flask has no official “apps” like Django. Blueprints are how you split features.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'fl-5',
            question: 'How do Flask templates work?',
            answer: [
              "```\nreturn render_template(\"user.html\", user=user)\n``` looks in the `templates/` folder. Jinja renders ```\n{\n  { user.name }\n}\n```",
              "```\n{\n  % for order in orders %\n}\n``` loops. ```\n{\n  % if user %\n}\n``` branches. Keep logic light; compute in the view.",
              "```\n{\n  { value }\n}\n``` is escaped by default (XSS-safe). `|safe` or `Markup` only for trusted HTML.",
              "`url_for` and `get_flashed_messages()` are available in templates. Same idea as Django templates, different tags.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'fl-6',
            question: 'When do you pick Flask over Django?',
            answer: [
              'Flask: you want a small API, custom architecture, or to choose your own ORM. Fewer batteries, more decisions.',
              'Django: you want admin, auth, ORM, forms, and a default project layout on day one. Better for a full CRUD product.',
              'Both can serve JSON. Flask plus SQLAlchemy is common; Django REST Framework is the usual Django API layer.',
              'Interview: size of the problem and how much convention you want, not “Flask is faster.”',
            ],
            difficulty: 'easy',
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
              "View: templates (app/views/users/`show.html.erb`) that render HTML with <%= @user.name %>.",
              'Controller: receives the request, loads models, sets instance variables, renders a view or JSON. Keep it thin.',
              "Request path: `routes.rb` → UsersController#show → `User.find(params[:id])` → `show.html.erb`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-3',
            question: 'What is Active Record?',
            answer: [
              'Rails ORM: class User < ApplicationRecord maps to table users. Columns become attributes (user.email).',
              "Read: `User.find(1)`, `User.find_by(email:)`, `User.where(active: true)`. Create: User.create!(email:, name:). user.update!(name:). user.destroy.",
              "belongs_to :user / has_many :orders declare associations. user.orders loads related rows (watch N+1 - use `includes(:orders)`).",
              'Validations: validates :email, presence: true, uniqueness: true. Invalid create returns false; create! raises.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-4',
            question: 'What are Rails routes and REST resources?',
            answer: [
              "config/`routes.rb`: resources :posts gives index, show, new, create, edit, update, destroy mapped to HTTP verbs and `/posts/`:id.",
              "GET `/posts` → PostsController#index. POST `/posts` → #create. PATCH `/posts/`:id → #update. DELETE `/posts/`:id → #destroy.",
              "rails routes prints the table. Named helpers: posts_path, `post_path(post)` keep templates free of hardcoded URLs.",
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
              "`schema.rb` (or structure.sql) is the current snapshot. Migrate in deploy, same as Django/Prisma.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-6',
            question: 'How do you avoid N+1 queries in Rails?',
            answer: [
              'N+1: @users.each { |u| u.orders.size } fires one orders query per user after the users query.',
              "`User.includes(:orders)` (or preload / eager_load) loads associations in a small number of queries.",
              'Bullet gem (dev) warns when you add N+1. Check the log: if you see SELECT "orders" * N, add includes.',
              'select/pluck when you only need one column. Don’t load full Active Record objects for a simple id list.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'rb-7',
            question: 'What are strong parameters?',
            answer: [
              "Mass-assignment protection. ```\nparams.require(:user).permit(:name, :email)\n``` is the only hash you pass to `User.new` / `update`.",
              "Without permit, `User.create(params[:user])` could set `admin: true` if the client sent it. That is the classic Rails bug.",
              "Nested attrs: ```\npermit(:name, addresses_attributes: [:id, :city])\n``` Permit arrays with `permit(tag_ids: [])`.",
              'Interview: require the root key, permit each writable field, never pass raw params into Active Record.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-8',
            question: 'What are Gemfile and Bundler?',
            answer: [
              "`Gemfile` lists gems and version ranges. `bundle install` installs them and writes `Gemfile.lock`.",
              "Commit the lockfile. `bundle exec rails s` runs the binary from that bundle so you do not pick up a system gem.",
              "`gem \"puma\"` is a runtime gem. `gem \"rspec-rails\", group: :test` stays out of production.",
              "Same idea as `package.json` plus a lockfile. `bundle update gem_name` bumps one gem on purpose.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-9',
            question: 'What are params, session, and flash?',
            answer: [
              "`params` merges route, query, and body. `params[:id]`, `params[:user][:email]`. Treat it as untrusted input.",
              "`session` is a cookie-backed hash for the signed-in user id and other small data. Do not store huge objects there.",
              "`flash[:notice] = \"Saved\"` lives for the next request, then clears. Use it for “created” messages after a redirect.",
              "```\nredirect_to user_path(@user), notice: \"Saved\"\n``` is the usual create/update pattern (PRG: post, redirect, get).",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rb-10',
            question: 'What is rails generate, and what is the console?',
            answer: [
              "```\nbin/rails generate scaffold Post title:string\n``` builds model, migration, controller, views, and routes. `generate model` / `controller` are smaller.",
              'Generators follow convention. You still edit the output (strong params, validations). Do not treat scaffold as finished product code.',
              "`bin/rails console` opens IRB with models loaded. `User.find(1)` is how you poke data. `reload!` after you edit a class.",
              "`bin/rails routes` and `bin/rails db:migrate` are the other daily commands. Interviewers expect you to know the CLI.",
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'rust',
    type: 'Rust',
    name: 'Rust',
    blurb: 'Ownership, borrowing, and Result-based error handling.',
    topics: [
      {
        id: 'rust-basics',
        title: 'Rust basics',
        questions: [
          {
            id: 'rs-1',
            question: 'What is Rust?',
            answer: [
              'A compiled systems language: no garbage collector, memory safety at compile time, performance close to C++.',
              'Used for CLIs, browsers (parts of Firefox), backends (Actix, Axum), and WASM. `cargo` is the build tool and package manager.',
              'The type system (ownership, lifetimes, Result) makes many bugs fail to compile instead of crashing at runtime.',
              'Interview: “memory safety without a garbage collector” is the headline. Then mention cargo and rustc.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rs-2',
            question: 'What is ownership?',
            answer: [
              'Every value has one owner. When the owner goes out of scope, Rust drops the value (frees the heap data).',
              'Move: `let b = a` transfers ownership. Using `a` after that does not compile (unless the type is Copy, like i32).',
              'Clone: `a.clone()` is an explicit copy when you need two owners. It is not implicit.',
              'This is why Rust has no GC pause and no use-after-free: the compiler tracks who owns the memory.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rs-3',
            question: 'What are borrowing and references?',
            answer: [
              '`&T` is an immutable borrow. `&mut T` is a mutable borrow. The owner stays; the caller only borrows.',
              'Rule: many `&T` at once, or exactly one `&mut T`, never both. This stops data races at compile time.',
              'A reference must not outlive the value. Lifetimes (`\'a`) are how the compiler checks that.',
              '`fn len(s: &String) -> usize` borrows. `fn take(s: String)` takes ownership. Prefer `&str` / `&[T]` for read-only views.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'rs-4',
            question: 'What are Option and Result?',
            answer: [
              "`Option<T>` is `Some(value)` or None. Use it instead of null. `value.unwrap()` panics if None; prefer `if let`, `match`, or `?`.",
              "`Result<T, E>` is `Ok(value)` or `Err(e)`. Library I/O returns Result. `?` returns the Err early from the current function.",
              'Do not unwrap in library code. unwrap is for tests or when you have proven it cannot fail.',
              'Interview: Option means missing, Result means failure. They are enums, not exceptions.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'rs-5',
            question: 'What is cargo, and what is a crate?',
            answer: [
              "`cargo new app` scaffolds. `cargo build` / `cargo run` / `cargo test` compile and run. `cargo add serde` adds a crate.",
              "A crate is a package. Crates.io is the registry. `Cargo.toml` lists deps; `Cargo.lock` pins exact versions (commit it for bins).",
              "`mod` and `use` organize modules. `pub` makes an item visible outside the module.",
              "Format: `cargo fmt`. Lints: `cargo clippy`. Same idea as `npm scripts`, one official tool.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'rs-6',
            question: 'What is a trait?',
            answer: [
              "A trait is a shared behavior: ```\ntrait Summary {\n  fn summarize(&self) -> String;\n}\n``` Types `impl Summary for Article`.",
              "Generics plus traits: `fn notify<T: Summary>(item: &T)` accepts any type that implements Summary (static dispatch).",
              "`dyn Summary` is a trait object (runtime dispatch) when the concrete type is not known at compile time.",
              "Common traits: Debug, Clone, Copy, Default, From/Into, Iterator. `#[derive(Debug, Clone)]` implements the obvious ones.",
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'golang',
    type: 'Go',
    name: 'Go',
    blurb: 'Compiled backend language: goroutines, slices, and explicit errors.',
    topics: [
      {
        id: 'go-basics',
        title: 'Go basics',
        questions: [
          {
            id: 'go-1',
            question: 'What is Go?',
            answer: [
              'A compiled language from Google: simple syntax, a garbage collector, and great built-in concurrency.',
              'One binary, fast compile, official formatter. Used for APIs, CLIs, and infra (Docker, Kubernetes, a lot of cloud tooling).',
              'Packages are folders. `func main()` in `package main` is the entry. `go run .` / `go build` / `go test` are the daily commands.',
              'Interview: simple, compiled, goroutines. Then mention modules (`go.mod`) and that errors are values, not exceptions.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'go-2',
            question: 'What are goroutines and channels?',
            answer: [
              '`go doWork()` starts a goroutine: a cheap concurrent function the runtime multiplexes onto OS threads.',
              'A channel sends values between goroutines: `ch := make(chan int)` then send with `ch <- 1` and receive with `n := <-ch`.',
              'Send and receive block until the other side is ready (unbuffered). `make(chan int, 8)` is buffered and does not block until full.',
              'Do not share mutable memory if you can send a value instead. Close a channel from the sender. `select` waits on several channels.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'go-3',
            question: 'How does error handling work in Go?',
            answer: [
              "Functions return an error as a last value: `f, err := os.Open(path)` then ```\nif err != nil {\n  return err\n}\n```",
              "There are no exceptions in normal flow. `panic` / `recover` exist for true crashes, not for “file not found.”",
              "`errors.Is(err, os.ErrNotExist)` and `errors.As` unwrap wrapped errors. `fmt.Errorf(\"open %s: %w\", path, err)` wraps with `%w`.",
              "Interview: check every err. Swallowing with `_ =` is a bug unless you can explain why.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'go-4',
            question: 'slice vs array vs map?',
            answer: [
              "Array: fixed length, part of the type. `[3]int` is not the same type as `[4]int`. Rare in APIs.",
              "Slice: a view over an array (pointer, length, capacity). `nums := []int{1, 2}`; `append(nums, 3)` may allocate a new backing array.",
              "Map: ```\nages := map[string]int{\"ada\": 36}\n``` Lookup: `v, ok := ages[\"ada\"]`. Zero value of a map is nil; `make(map[string]int)` before write.",
              'Appending in a loop can reallocate. If two slices share a backing array, writing one can surprise the other. Copy when you need isolation.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'go-5',
            question: 'What is a Go interface?',
            answer: [
              "A set of methods. ```\ntype Reader interface {\n  Read(p []byte) (int, error)\n}\n``` Any type with that method implements it (implicit).",
              "You do not write `implements`. `io.Reader` is the classic example: files, buffers, HTTP bodies all Read.",
              "Accept interfaces, return structs: functions take `io.Reader`, return `*os.File` or your concrete type.",
              'A nil interface vs a nil pointer inside an interface is a common trap: the interface value can be non-nil while the pointer is nil.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'go-6',
            question: 'What are go.mod, packages, and defer?',
            answer: [
              '`go mod init github.com/you/app` creates `go.mod`. `go get` / `go mod tidy` manage deps. Commit `go.mod` and `go.sum`.',
              'A package is a folder of `.go` files with the same `package` name. Exported names start with a capital letter: `Serve`, not `serve`.',
              '`defer f.Close()` runs when the surrounding function returns. Good for unlock/close. Defers stack; last deferred runs first.',
              '`gofmt` (or `go fmt`) is not optional style: the compiler does not care, every team does. Interviews expect formatted snippets.',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'algorithms',
    type: 'Algo',
    name: 'Algorithms',
    blurb: 'Search and sort interview classics, with small snippets.',
    topics: [
      {
        id: 'algo-search',
        title: 'Searching',
        questions: [
          {
            id: 'al-s1',
            question: 'What is linear search?',
            answer: [
              'Walk the list from left to right until you find the target or run out of items. Works on unsorted data.',
              "Time `O(n)`, extra space `O(1)`. Best case is the first item; worst case is missing or last.",
              'Use it for tiny lists, unsorted arrays, or linked lists (no random access, so binary search is useless).',
              "```\nfunction linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i\n  }\n  return -1\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-s2',
            question: 'What is binary search?',
            answer: [
              'On a sorted array, check the middle. If the target is smaller, search the left half; if larger, the right. Repeat until found or the range is empty.',
              "Time `O(log n)`, extra space `O(1)` iterative (`O(log n)` stack if recursive). The array must be sorted in the same order you compare.",
              "Interview: say “halve the search space each step,” then write the `lo` / `hi` / `mid` loop. Off-by-one on `lo <= hi` is the usual bug.",
              "```\nfunction binarySearch(arr, target) {\n  let lo = 0, hi = arr.length - 1\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2)\n    if (arr[mid] === target) return mid\n    if (arr[mid] < target) lo = mid + 1\n    else hi = mid - 1\n  }\n  return -1\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-s3',
            question: 'When do you pick linear search vs binary search?',
            answer: [
              'Linear: unsorted data, n is small, or you cannot jump to an index (linked list, stream).',
              'Binary: random-access sorted array (or a sorted view). After ~20 items, log n starts to win; at 1e6 items it is ~20 compares vs 1e6.',
              "If you search once, sorting first (`O(n log n)`) plus binary is worse than one linear scan. If you search many times, sort once then binary.",
              'Interview: “sorted + random access → binary; otherwise linear.” Mention you can binary-search a predicate (first true) not only an exact value.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-s4',
            question: 'Why must the array be sorted for binary search?',
            answer: [
              'The middle compare tells you which half to throw away. That is only true if every item on the left is <= mid and every item on the right is >= mid.',
              'On `[3, 1, 4, 2]`, mid might be 1 while 3 is on the left. You discard the wrong half and miss the target.',
              'Same order as your comparator: ascending search on a descending array is also wrong unless you flip the branches.',
              'Rotated-sorted arrays (interview follow-up) are still “almost sorted.” You check which half is sorted, then decide.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-s5',
            question: 'Iterative vs recursive binary search?',
            answer: [
              "Same idea. Iterative keeps `lo`/`hi` in a loop. Recursive calls on `arr[lo..mid)` or `arr[mid+1..hi]`.",
              "Prefer iterative in interviews unless they ask for recursion: no stack, easier to talk about `O(1)` extra space.",
              "Recursive depth is `O(log n)`. Fine for arrays; still use `lo <= hi` and return -1 on empty range.",
              "```\nfunction binarySearchRec(arr, target, lo = 0, hi = arr.length - 1) {\n  if (lo > hi) return -1\n  const mid = Math.floor((lo + hi) / 2)\n  if (arr[mid] === target) return mid\n  if (arr[mid] < target) return binarySearchRec(arr, target, mid + 1, hi)\n  return binarySearchRec(arr, target, lo, mid - 1)\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'al-s6',
            question: 'What is jump search?',
            answer: [
              "On a sorted array, jump ahead by `sqrt(n)` steps until you pass the target, then linear-scan that block.",
              "Time `O(sqrt(n))`, extra space `O(1)`. Slower than binary, faster than linear on a big sorted array if compares are cheap.",
              'Less common than binary in interviews. Mention it if they ask “what besides linear and binary?” Interpolation search is the other name that comes up.',
              "```\nfunction jumpSearch(arr, target) {\n  const n = arr.length\n  const jump = Math.floor(Math.sqrt(n))\n  let prev = 0, step = jump\n  while (arr[Math.min(step, n) - 1] < target) {\n    prev = step\n    step += jump\n    if (prev >= n) return -1\n  }\n  for (let i = prev; i < Math.min(step, n); i++) if (arr[i] === target) return i\n  return -1\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'al-s7',
            question: 'How do you find the first or last occurrence with binary search?',
            answer: [
              'Duplicates: a normal binary search can land on any match. Keep searching the half that might hold an earlier (or later) copy.',
              "First: when `arr[mid] === target`, record mid and set `hi = mid - 1`. Last: record mid and set `lo = mid + 1`.",
              "Same `O(log n)`. This is the “lower bound / upper bound” question (first index where value >= target).",
              "```\nfunction firstIndex(arr, target) {\n  let lo = 0, hi = arr.length - 1, ans = -1\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2)\n    if (arr[mid] === target) { ans = mid; hi = mid - 1 }\n    else if (arr[mid] < target) lo = mid + 1\n    else hi = mid - 1\n  }\n  return ans\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'al-s8',
            question: 'How do you binary search a rotated sorted array?',
            answer: [
              "Example: `[4, 5, 6, 1, 2, 3]`. One half of `[lo..hi]` is still sorted. Check which half is sorted, then see if the target sits in it.",
              "If `arr[lo] <= arr[mid]`, left is sorted. Target in `[arr[lo], arr[mid]]` → move `hi`, else move `lo`. Mirror for a sorted right half.",
              "Still `O(log n)` if values are unique. Duplicates like `[2, 2, 2, 1, 2]` can force you to shrink one side and go `O(n)` worst case.",
              "```\nfunction searchRotated(arr, target) {\n  let lo = 0, hi = arr.length - 1\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2)\n    if (arr[mid] === target) return mid\n    if (arr[lo] <= arr[mid]) {\n      if (arr[lo] <= target && target < arr[mid]) hi = mid - 1\n      else lo = mid + 1\n    } else {\n      if (arr[mid] < target && target <= arr[hi]) lo = mid + 1\n      else hi = mid - 1\n    }\n  }\n  return -1\n}\n```",
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'algo-sort',
        title: 'Sorting',
        questions: [
          {
            id: 'al-o1',
            question: 'What is bubble sort?',
            answer: [
              'Repeatedly walk the array and swap neighbors that are out of order. Each pass “bubbles” the next largest value to the end.',
              "Time `O(n^2)` average and worst, `O(n)` best if you stop when a pass does no swaps. Extra space `O(1)`. Stable if you only swap on `>`.",
              'Almost never used in production. Interviews want the swap loop and the “already sorted” early-exit.',
              "```\nfunction bubbleSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    let swapped = false\n    for (let j = 0; j < arr.length - 1 - i; j++) {\n      if (arr[j] > arr[j + 1]) {\n        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]\n        swapped = true\n      }\n    }\n    if (!swapped) break\n  }\n  return arr\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-o2',
            question: 'What is selection sort?',
            answer: [
              "For each index i, find the minimum in `arr[i..]`, then swap it into i. The left side grows as the sorted prefix.",
              "Time `O(n^2)` always (you still scan the rest). Extra space `O(1)`. Not stable (a swap can jump over equal keys).",
              'Fewer swaps than bubble (at most n). Still not used for real n. Good whiteboard “min-index” exercise.',
              "```\nfunction selectionSort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    let min = i\n    for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[min]) min = j\n    ;[arr[i], arr[min]] = [arr[min], arr[i]]\n  }\n  return arr\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-o3',
            question: 'What is insertion sort?',
            answer: [
              'Treat the left side as sorted. Take the next key and shift larger items right until the hole is the right slot.',
              "Time `O(n^2)` worst (reversed), `O(n)` best (already sorted). Extra space `O(1)`. Stable.",
              'Great for nearly-sorted data and tiny n. Real libraries use it as a base case inside quick/merge (Timsort, introsort).',
              "```\nfunction insertionSort(arr) {\n  for (let i = 1; i < arr.length; i++) {\n    const key = arr[i]\n    let j = i - 1\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j]\n      j--\n    }\n    arr[j + 1] = key\n  }\n  return arr\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-o4',
            question: 'What is merge sort?',
            answer: [
              'Divide the array in half, sort each half, then merge two sorted lists into one. Classic divide and conquer.',
              "Time `O(n log n)` best/avg/worst. Extra space `O(n)` for the merge buffer (or `O(n)` from slicing). Stable if you take the left item on ties.",
              'Predictable time. Used when stability matters or when data is on disk (external merge). Linked lists merge well in place.',
              "```\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr\n  const mid = Math.floor(arr.length / 2)\n  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))\n}\nfunction merge(a, b) {\n  const out = []\n  while (a.length && b.length) out.push(a[0] <= b[0] ? a.shift() : b.shift())\n  return out.concat(a, b)\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'al-o5',
            question: 'What is quick sort?',
            answer: [
              "Pick a pivot, partition into “<= pivot” and “> pivot,” then recurse on both sides. Average `O(n log n)`, extra space `O(log n)` stack.",
              "Worst case `O(n^2)` if pivots are terrible (already sorted + last-element pivot). Fix: random pivot, median-of-three, or introsort (swap to heap sort).",
              "Usually faster in practice than merge (cache, in-place). Not stable. Interviewers often ask you to write `partition`.",
              "```\nfunction quickSort(arr) {\n  if (arr.length <= 1) return arr\n  const pivot = arr[arr.length - 1]\n  const left = [], right = []\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] <= pivot) left.push(arr[i])\n    else right.push(arr[i])\n  }\n  return [...quickSort(left), pivot, ...quickSort(right)]\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'al-o6',
            question: 'What is heap sort?',
            answer: [
              'Build a max-heap, then repeatedly swap the root (largest) with the end and heapify the reduced heap.',
              "Time `O(n log n)` always. Extra space `O(1)` in-place. Not stable.",
              "Build-heap is `O(n)`, then n extract-max steps are `O(log n)` each. Good when you need worst-case n log n and cannot spend `O(n)` extra memory like merge.",
              "```\nfunction heapSort(arr) {\n  const heapify = (n, i) => {\n    let largest = i\n    const l = 2 * i + 1, r = 2 * i + 2\n    if (l < n && arr[l] > arr[largest]) largest = l\n    if (r < n && arr[r] > arr[largest]) largest = r\n    if (largest !== i) {\n      ;[arr[i], arr[largest]] = [arr[largest], arr[i]]\n      heapify(n, largest)\n    }\n  }\n  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) heapify(arr.length, i)\n  for (let i = arr.length - 1; i > 0; i--) {\n    ;[arr[0], arr[i]] = [arr[i], arr[0]]\n    heapify(i, 0)\n  }\n  return arr\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'al-o7',
            question: 'Is there a “binary sort”? What is binary insertion sort?',
            answer: [
              'There is no standard algorithm named binary sort. People usually mean binary search, or they mean binary insertion sort.',
              "Binary insertion sort is insertion sort that finds the slot with binary search, then shifts items to make room. Still `O(n^2)` because of the shifts.",
              "Fewer compares than plain insertion (`O(n log n)` compares), same move cost. Useful when compares are expensive (big strings, custom keys).",
              "```\nfunction binaryInsertionSort(arr) {\n  for (let i = 1; i < arr.length; i++) {\n    const key = arr[i]\n    let lo = 0, hi = i\n    while (lo < hi) {\n      const mid = Math.floor((lo + hi) / 2)\n      if (arr[mid] <= key) lo = mid + 1\n      else hi = mid\n    }\n    arr.splice(i, 1)\n    arr.splice(lo, 0, key)\n  }\n  return arr\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'al-o8',
            question: 'What does stable vs unstable sort mean?',
            answer: [
              'Stable: equal keys keep their original order. `[ (2, a), (1, x), (2, b) ]` → `(1, x), (2, a), (2, b)` so a stays before b.',
              'Stable: merge, insertion, bubble (if you do not swap equals). Unstable: quick, heap, selection (the swap can reorder equals).',
              'Matters when you sort by one key and then another (sort by last name, then by grade) or when the extra fields must not shuffle.',
              'JS `Array.sort` is required to be stable (modern spec). Interview: name one stable and one unstable, and give the pair-of-equals example.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-o9',
            question: 'What are the time and space costs of the common sorts?',
            answer: [
              "Bubble / selection / insertion: `O(n^2)` average. Insertion and bubble drop to `O(n)` on already-sorted if they detect it. Extra space `O(1)`.",
              "Merge: `O(n log n)` always, extra `O(n)`. Heap: `O(n log n)` always, extra `O(1)`. Quick: `O(n log n)` average, `O(n^2)` worst, extra `O(log n)` stack.",
              'Stable: merge, insertion, bubble. Unstable: quick, heap, selection.',
              "Interview table they want: n^2 vs n log n, in-place vs extra array, stable vs not. Counting/radix are `O(n + k)` when keys are integers in a range.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'al-o10',
            question: 'When do you pick each sorting algorithm?',
            answer: [
              'Tiny or almost-sorted: insertion (or the library; it already special-cases this). Teaching / whiteboard: bubble or selection.',
              'Need stable + guaranteed n log n: merge. Need in-place + guaranteed n log n: heap. Need average speed in RAM: quick (or introsort).',
              'Integers in a small range: counting sort. Fixed-width digits: radix. Do not invent a sort in product code: use the language sort.',
              'Interview closer: “I can write these; in production I call `sort` and I know what it costs.”',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'data-structures',
    type: 'DS',
    name: 'Data structures',
    blurb: 'Lists, trees, graphs, and the other interview primitives.',
    topics: [
      {
        id: 'ds-core',
        title: 'Arrays, stacks, queues, maps',
        questions: [
          {
            id: 'ds-c1',
            question: 'What is an array, and why is it used?',
            answer: [
              "A contiguous block of slots you index in `O(1)`: `arr[i]`. Length is known (or a capacity you resize).",
              "Scan is `O(n)`. Insert/delete in the middle is `O(n)` because you shift neighbors. Append is `O(1)` amortized if the runtime grows capacity (JS arrays, Java ArrayList).",
              'Use it when you need random access, a compact layout, or a simple list. Cache-friendly compared with pointer-chasing lists.',
              "Interview: “index in `O(1)`, shift to insert in the middle.” That is the sentence they want.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-c2',
            question: 'What is a stack, and why is it used?',
            answer: [
              "LIFO: last in, first out. Core ops: `push`, `pop`, `peek`. Array or linked list both work.",
              'Used for: undo, browser back, call stack / recursion, matching brackets, DFS (explicit stack instead of recursion).',
              "Time `O(1)` per push/pop. Do not use a stack when the first arrival should leave first (that is a queue).",
              "```\nconst stack = [];\nstack.push(1);\nstack.push(2);\nconst top = stack.pop() // 2\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-c3',
            question: 'What is a queue, and why is it used?',
            answer: [
              "FIFO: first in, first out. Core ops: `enqueue` (back), `dequeue` (front). A deque lets you push/pop both ends.",
              'Used for: BFS, task/job queues, printers, message buffers, “next customer” scheduling.',
              "Array `shift()` in JS is `O(n)`. Prefer an index head, a linked list, or a deque so dequeue stays `O(1)`.",
              'Priority queue (heap) is “highest priority first,” not FIFO. Name the difference if they ask.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-c4',
            question: 'What is a hash map (hash table), and why is it used?',
            answer: [
              "Key → value with average `O(1)` get/set/delete. Hash the key to a bucket, then store the pair there (with a collision list or open addressing).",
              "Used for: counts, indexes, caches, “have I seen this id?”, grouping. JS `Map` / object, Python `dict`, Java `HashMap`.",
              "Worst case `O(n)` if everything collides. Need a good hash and a resize strategy. Unordered unless you pick a linked/tree map.",
              "Interview: average `O(1)`, collisions, and “not sorted.” Do not use a hash map when you need min/max or range queries (use a tree or heap).",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-c5',
            question: 'Array vs hash map vs list: when do you pick each?',
            answer: [
              'Array: ordered collection, index access, compact memory. “Give me the 10th item.”',
              'Hash map: lookup by a key that is not an index. “Give me the user named ada.”',
              'Linked list: frequent insert/delete at a known node, or you do not need random access. Rare as a first choice in app code.',
              'Need min/max repeatedly: heap. Need sorted keys / ranges: balanced tree (TreeMap) or a sorted array plus binary search.',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'ds-lists',
        title: 'Linked lists',
        questions: [
          {
            id: 'ds-l1',
            question: 'What is a linked list?',
            answer: [
              'A chain of nodes. Each node holds a value and a pointer to the next node (and maybe the previous). There is no index into the middle.',
              "Singly: `value` + `next`. Doubly: also `prev` (walk both ways, delete with the node in hand). Circular: last `next` points at head.",
              "Find by index is `O(n)`. Insert/delete at head is `O(1)`. Insert after a known node is `O(1)`; finding that node is `O(n)`.",
              "```\nfunction Node(value) {\n  this.value = value;\n  this.next = null\n}\n``` then `head.next = new Node(2)`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-l2',
            question: 'Why are linked lists used?',
            answer: [
              "`O(1)` insert/delete once you hold the node (or its predecessor). No need to shift a whole array or reserve a big capacity.",
              'They grow one node at a time. Useful when size is unknown and you only walk sequentially (stacks, queues, LRU list, undo).',
              "Cost: extra pointer memory, poor cache locality, no `arr[i]`. In interviews they show up more than in modern app code.",
              'Real systems still use them inside hash-map buckets, OS lists, and LRU caches (doubly linked + hash map).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-l3',
            question: 'Singly vs doubly vs circular linked list?',
            answer: [
              'Singly: smaller nodes, walk only forward. Reverse and “delete this node” need the previous pointer or a rewrite trick.',
              'Doubly: `prev` makes delete and reverse easier. Browser history and LRU lists are the usual examples. Extra pointer per node.',
              'Circular: last node points at head (or a dummy). Round-robin schedulers and Josephus-style problems. Easy to loop forever if you forget a stop.',
              'Interview default is a singly list with `head`. Mention dummy/sentinel heads to simplify insert-at-front edge cases.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-l4',
            question: 'How do you reverse a singly linked list?',
            answer: [
              "Walk once. Three pointers: `prev`, `curr`, `next`. Point `curr.next` at `prev`, then slide all three forward. New head is the last `prev`.",
              "Iterative is `O(n)` time, `O(1)` extra space. Recursive is `O(n)` stack. Interviews usually want the iterative version.",
              "Draw one node flip on the whiteboard before you write code. Off-by-one on the last `next` is the usual bug.",
              "```\nfunction reverseList(head) {\n  let prev = null, curr = head\n  while (curr) {\n    const next = curr.next\n    curr.next = prev\n    prev = curr\n    curr = next\n  }\n  return prev\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'ds-l5',
            question: 'How do you detect a cycle in a linked list?',
            answer: [
              'Floyd’s tortoise and hare: slow walks one step, fast walks two. If they meet, there is a cycle. If fast hits null, there is not.',
              "`O(n)` time, `O(1)` extra space. A set of visited nodes is `O(n)` space and also works.",
              'To find the cycle start: after they meet, put one pointer at head; walk both one step at a time; they meet at the entrance.',
              "```\nfunction hasCycle(head) {\n  let slow = head, fast = head\n  while (fast && fast.next) {\n    slow = slow.next\n    fast = fast.next.next\n    if (slow === fast) return true\n  }\n  return false\n}\n```",
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'ds-trees',
        title: 'Trees',
        questions: [
          {
            id: 'ds-t1',
            question: 'What is a tree?',
            answer: [
              'A connected acyclic graph with a chosen root (in CS). Each node has children. No cycles; one path from the root to any node.',
              'Binary tree: at most two children (left/right). n-ary: any number (DOM, file folders). Leaf: no children. Height: longest root-to-leaf path.',
              'A tree of n nodes has n - 1 edges. If you can walk back to an ancestor without going through the parent, it is not a tree.',
              'Interview: “hierarchical, no cycles, one parent (except the root).” Then name BST, heap, or trie if they ask for types.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-t2',
            question: 'Why are trees used?',
            answer: [
              'They model hierarchy: file systems, org charts, HTML/DOM, parse trees, decision trees.',
              "A balanced BST gives `O(log n)` search/insert/delete. A heap gives `O(1)` peek at min/max and `O(log n)` insert.",
              'Tries (prefix trees) share prefixes for autocomplete and dictionaries. Segment / Fenwick trees answer range queries.',
              'If the data is a hierarchy or you need log-n ordered ops, start with a tree. If it is a network with many-to-many links, that is a graph.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-t3',
            question: 'What are the common types of trees?',
            answer: [
              'Binary tree: left/right only. Full (0 or 2 children), complete (filled left to right), perfect (every level full).',
              "BST: left < node < right (or <=). Inorder walk is sorted. Unbalanced BST can degrade to `O(n)` (a sorted insert chain).",
              'Self-balancing BST: AVL, red-black (TreeMap). Heap: complete binary tree used as a priority queue, not a search tree.',
              'Trie: children keyed by character. B-tree / B+ tree: wide nodes for disks and databases. Know BST + heap + “balanced” for interviews.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-t4',
            question: 'What is a binary search tree, and how do you search it?',
            answer: [
              'For every node, all keys in the left subtree are smaller, all keys on the right are larger. That is what makes search log n when balanced.',
              'Search: compare the target to the node; go left or right; stop on match or null. Same idea as binary search, but on pointers.',
              'Insert walks the same path and hangs a new leaf. Delete has three cases: leaf, one child, two children (replace with inorder successor).',
              "```\nfunction searchBST(node, target) {\n  if (!node || node.value === target) return node\n  return target < node.value\n    ? searchBST(node.left, target)\n    : searchBST(node.right, target)\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'ds-t5',
            question: 'What are the tree traversals?',
            answer: [
              'DFS orderings: preorder (node, left, right), inorder (left, node, right), postorder (left, right, node). Inorder on a BST is sorted.',
              'BFS / level order: queue, visit a node, enqueue its children. Used for “level by level” and shortest path in an unweighted tree.',
              'Use cases: preorder to clone/serialize, inorder for sorted BST, postorder to delete children first or evaluate an expression tree.',
              "```\nfunction inorder(node, out = []) {\n  if (!node) return out\n  inorder(node.left, out)\n  out.push(node.value)\n  inorder(node.right, out)\n  return out\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'ds-t6',
            question: 'What is a heap, and how is it different from a BST?',
            answer: [
              'A heap is a complete binary tree that is heap-ordered: parent <= children (min-heap) or parent >= children (max-heap). Usually stored in an array.',
              "Peek min/max is `O(1)`. Insert and pop are `O(log n)` via bubble up / sift down. You do not get cheap “find this key” like a BST.",
              "Used for priority queues, heapsort, Dijkstra, and “k largest.” Index math: left = 2i+1, right = 2i+2, parent = `floor((i-1)/2)`.",
              'BST is for ordered search. Heap is for “always give me the extreme.” Do not say they are the same tree.',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'ds-graphs',
        title: 'Graphs',
        questions: [
          {
            id: 'ds-g1',
            question: 'What is a graph?',
            answer: [
              'A set of vertices (nodes) plus a set of edges (links between nodes). An edge can be one-way or two-way, and it can carry a weight.',
              'Written G = (V, E). Degree is how many edges touch a vertex. A path is a walk with no repeated vertices; a cycle returns to the start.',
              'A tree is a special graph: connected, undirected, no cycles. A graph can have many roots, cycles, and disconnected pieces.',
              'Interview: “nodes and edges; trees are graphs with extra rules.” Then say how you store it (adjacency list vs matrix).',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-g2',
            question: 'What are the different types of graphs?',
            answer: [
              'Directed vs undirected: A → B is one-way (Twitter follow, page links); A-B is two-way (Facebook friends, an undirected road).',
              'Weighted vs unweighted: edges have a cost (distance, time) or they do not. Cyclic vs acyclic. A DAG is a directed acyclic graph (build deps, git).',
              'Connected: every node can reach every other (undirected). Strongly connected: that, following arrow direction. Complete: every pair has an edge.',
              'Also asked: bipartite (two sides, edges only between sides), sparse vs dense, multigraph (parallel edges). A tree is connected + acyclic + undirected.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-g3',
            question: 'Why are graphs used?',
            answer: [
              'They model “things and relationships”: maps and routes, social networks, the web, package/build dependencies, knowledge graphs.',
              'Algorithms on that model: shortest path (Dijkstra, BFS), reachability (DFS), cycle detection, topological sort on a DAG, MST (Kruskal/Prim).',
              'If you only have a hierarchy with one parent, a tree is enough. If a node can have many neighbors and cycles matter, you need a graph.',
              'Interview examples: friends-of-friends, flight connections, course prerequisites, garbage-collector object graphs.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-g4',
            question: 'How do you represent a graph in code?',
            answer: [
              "Adjacency list: map each node to its neighbors. Space `O(V + E)`. Default for sparse graphs (the usual interview and real-world case).",
              "Adjacency matrix: V x V grid, 1 or a weight at [i][j]. Space `O(V^2)`. `O(1)` “is there an edge?”. Heavy when V is large and E is small.",
              'Edge list: just pairs (u, v, w). Fine for Kruskal. You still build a list or matrix before BFS/DFS.',
              "```\nconst graph = { A: [\"B\", \"C\"], B: [\"D\"], C: [], D: [] }\n``` is an adjacency list for a directed graph.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'ds-g5',
            question: 'What is the difference between BFS and DFS on a graph?',
            answer: [
              'BFS uses a queue: visit a node, then all neighbors, then their neighbors. Finds the shortest path in hops on an unweighted graph.',
              'DFS uses a stack or recursion: go deep on one path, then backtrack. Good for cycles, connectivity, topological sort, maze-style search.',
              "Both are `O(V + E)` on an adjacency list if you mark visited. Forgetting `visited` on a cyclic graph is infinite recursion / a hang.",
              "```\nfunction bfs(start, graph) {\n  const q = [start], seen = new Set([start]), out = []\n  while (q.length) {\n    const node = q.shift()\n    out.push(node)\n    for (const n of graph[node] || []) {\n      if (!seen.has(n)) { seen.add(n); q.push(n) }\n    }\n  }\n  return out\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'ds-g6',
            question: 'When do you pick BFS vs DFS?',
            answer: [
              'BFS: shortest path in an unweighted graph, “nodes k hops away,” level-order, nearest exit in a grid.',
              'DFS: detect a cycle, topological sort on a DAG, connected components (either works), path existence, generating permutations / backtracking.',
              'Weighted shortest path is not plain BFS: use Dijkstra (non-negative weights) or Bellman-Ford (negatives allowed, no neg cycle you accept).',
              'Interview: “BFS for shortest hops, DFS for explore / cycles / topo.” Mention `visited` on both.',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
  {
    id: 'dsa',
    type: 'DSA',
    name: 'DSA interview',
    blurb: 'Complexity, patterns, and classic coding-round problems.',
    topics: [
      {
        id: 'dsa-approach',
        title: 'Complexity & approach',
        questions: [
          {
            id: 'dsa-a1',
            question: 'How do you approach a DSA interview question?',
            answer: [
              'Restate the problem and ask constraints: n size, sorted?, duplicates, negative numbers, in-place?, what to return on empty.',
              'Start with a brute force you can explain, give its Big-O, then improve. Talk while you think so they can steer you.',
              'Name the pattern: hash map, two pointers, sliding window, stack, heap, BFS/DFS, binary search, DP. Dry-run one example, then a failing edge.',
              'Code last. Afterward: complexity, one test (empty, one item, already-sorted, duplicates). Interviewers grade communication as much as the AC.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-a2',
            question: 'What is Big-O, and how do you state complexity?',
            answer: [
              "Big-O is an upper bound on how time or extra memory grow as n grows. Drop constants and smaller terms: 3n^2 + 2n is `O(n^2)`.",
              "Common: `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n^2)`, `O(2^n)`, `O(n!)`. Worst case is the default unless you say average.",
              "Nested loops over n are often `O(n^2)`. Halving each step is `O(log n)`. Recursion that branches two ways on n is often `O(2^n)` without memo.",
              "Always give time and extra space. “`O(n)` time, `O(1)` extra space” is a complete answer. Input storage usually does not count as extra.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-a3',
            question: 'Time vs extra space: what tradeoffs do interviewers expect?',
            answer: [
              "A hash map or prefix array often turns `O(n^2)` into `O(n)` time for `O(n)` extra space. Say that trade out loud.",
              'In-place two pointers save memory but can overwrite input. Ask if you may mutate the array.',
              "Recursion uses call-stack space (`O(h)` or `O(n)`). Iterative with an explicit stack is the same order, just visible.",
              'Interview: pick the cheaper time unless they constrain memory. Then offer the in-place variant.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-a4',
            question: 'What edge cases should you always mention?',
            answer: [
              'Empty input, one element, two elements. Already sorted vs reversed. All equal values. Duplicates if uniqueness was assumed.',
              'Negatives and zeros (max subarray, products, binary search). Integer overflow on mid or sums: `lo + Math.floor((hi - lo) / 2)`.',
              'Disconnected graphs, cycles, self-loops. Null head on a list. Unicode vs ASCII if it is a string problem.',
              'Say the edge, say what you return (`[]`, `-1`, `null`), then write the guard. Silent wrong answers on n = 0 fail the round.',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'dsa-complexity',
        title: 'Time & space complexity',
        questions: [
          {
            id: 'dsa-c1',
            question: 'What are the common types of time complexity?',
            answer: [
              "Listed from fastest to slowest as n grows: `O(1)`, `O(log n)`, `O(n)`, `O(n log n)`, `O(n^2)`, `O(n^3)`, `O(2^n)`, `O(n!)`.",
              "`O(1)` constant, `O(log n)` logarithmic, `O(n)` linear, `O(n log n)` linearithmic, `O(n^2)` quadratic, `O(n^3)` cubic, `O(2^n)` exponential, `O(n!)` factorial.",
              "For n = 1e6: `O(n)` and `O(n log n)` are usually fine. `O(n^2)` is about 1e12 steps: too slow. `O(2^n)` dies by n ≈ 25.",
              'Interview: name the class, give one algorithm, and say what n you can afford. That is the list they want.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-c2',
            question: 'What is O(1) time vs O(log n) time?',
            answer: [
              "`O(1)`: work does not grow with n. Array index `arr[i]`, hash-map get/set (average), push/pop on a stack, enqueue on a deque.",
              "`O(log n)`: each step throws away a constant fraction (usually half). Binary search, balanced BST lookup, heap peek-then-sift is `O(log n)` for insert/pop.",
              "log n stays tiny: `log2(1e6)` ≈ 20. That is why binary search beats a scan on a sorted array once n is more than a few dozen.",
              "Amortized `O(1)` (dynamic-array append) is “usually constant, rare resize.” Say amortized if they ask about JS `push` / Java ArrayList.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-c3',
            question: 'What is O(n) time vs O(n log n) time?',
            answer: [
              "`O(n)`: one pass, or a constant number of passes. Linear search, Kadane, two pointers on a sorted array, counting frequencies, BFS/DFS on a list of n edges is `O(V+E)`.",
              "`O(n log n)`: a log-n step done n times, or a divide-and-conquer merge. Merge sort, heap sort, typical `Array.sort`, building a heap then n extract-min.",
              "You cannot sort arbitrary items faster than `O(n log n)` with compares. Counting/radix are `O(n+k)` only when keys are integers in a range.",
              'Interview: “scan is n; compare-sort is n log n.” If they want faster than sort, you need a hash, a count, or extra structure.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-c4',
            question: 'What is O(n^2) and O(n^3) time?',
            answer: [
              "`O(n^2)`: nested loops both depending on n. Bubble / insertion / selection sort, naive two-sum, checking every pair, simple DP over i,j on an n×n table.",
              "`O(n^3)`: three nested n-loops, or Floyd-Warshall (all-pairs shortest paths). Fine only for small n (a few hundred).",
              "A loop of n with an `O(n)` scan inside is n^2 even if you do not write two `for`s on the same line (for example `indexOf` inside a loop).",
              'Interview: if n is 1e5, n^2 is a red flag. Drop to n or n log n with a hash, two pointers, or sort-then-scan.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-c5',
            question: 'What is O(2^n) and O(n!) time?',
            answer: [
              "`O(2^n)`: each item is in or out, or a recursion that branches two ways without memo. Subsets, naive Fibonacci, some knapsack-without-DP.",
              "`O(n!)`: every permutation. Traveling salesman brute force, generating all orderings. 10! is 3.6e6; 12! is already huge.",
              "Memo / DP often turns 2^n Fibonacci into `O(n)`. Backtracking still lists 2^n or n! answers if the output is all subsets or all perms.",
              'Interview: “exponential / factorial: only tiny n, or you need DP / pruning / a better model.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-c6',
            question: 'Best, average, and worst case: what is the difference?',
            answer: [
              'Worst case: the input that makes you do the most work. Default Big-O in interviews unless you say otherwise.',
              "Best case: the lucky input. Bubble sort with an early-exit is `O(n)` best, `O(n^2)` worst. Binary search is `O(1)` if the mid is the target; still quote `O(log n)`.",
              "Average case: typical random input. Quicksort is `O(n log n)` average, `O(n^2)` worst (bad pivots). Hash map get is `O(1)` average, `O(n)` if everything collides.",
              "Say all three when the algorithm is famous for a gap (quicksort, hash map, quickselect). For merge sort they are the same: `O(n log n)`.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-c7',
            question: 'Big-O vs Theta vs Omega?',
            answer: [
              "O (Big-O): upper bound. “No worse than this.” f is `O(g)` if f grows at most as fast as g (up to a constant).",
              'Ω (Omega): lower bound. “At least this much.” Any comparison sort is Ω(n log n) in the worst case.',
              'Θ (Theta): tight bound. Both O and Ω: grows like g. Merge sort is Θ(n log n). People say O when they mean Θ in interviews; that is accepted.',
              'Interview: use O unless they ask for the other two. Then: O = ceiling, Ω = floor, Θ = exact order.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-c8',
            question: 'What is space complexity, and what is auxiliary space?',
            answer: [
              'Space complexity: memory as n grows. Count extra arrays, hash maps, recursion stack, not the machine’s RAM in GB.',
              "Auxiliary / extra space: what you allocate beyond the input. Interviewers usually want this: “`O(1)` extra space” means a few variables.",
              "Total space includes the input: an in-place sort of an n-array is `O(n)` total, `O(1)` extra (or `O(log n)` for quicksort’s stack).",
              'Output space is sometimes excluded (returning n pairs). Ask if a required output array counts. Default: extra working memory only.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-c9',
            question: 'What are the common types of space complexity?',
            answer: [
              "`O(1)` extra: a few scalars. Two pointers, Kadane, iterative binary search, in-place swap. The input array is not extra.",
              "`O(log n)`: recursion or implicit stack that halves (binary search recursive, balanced tree height, heapsort log depth). Quicksort average stack is `O(log n)`, worst `O(n)`.",
              "`O(n)`: a hash map of seen items, a prefix array, a copy, a BFS queue in a line-like graph, merge-sort buffer. `O(n^2)`: an n×n DP table or adjacency matrix.",
              "`O(V+E)` on graphs: adjacency list. `O(2^n)` appears in DP on subsets (`dp[mask]`). Name extra space after time, every time.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-c10',
            question: 'How does recursion count toward space?',
            answer: [
              "Each call frame is memory until it returns. Depth d costs `O(d)` extra space even if you allocate no arrays.",
              "Tail-ish linear recursion on a list of n is `O(n)` stack (JS/Python do not tail-call-optimize). Prefer a loop if n can be 1e5.",
              "Tree DFS is `O(h)`: balanced h = log n, skewed h = n. BFS queue can be `O(n)` on a wide level (a full binary-tree last row).",
              "Memo DP uses both stack (if top-down) and the memo table. Bottom-up with rolling vars can drop a 2-row table to `O(1)` or `O(n)`.",
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'dsa-patterns',
        title: 'Interview patterns',
        questions: [
          {
            id: 'dsa-p1',
            question: 'What is the two-pointer pattern?',
            answer: [
              'Two indexes walk the same array (or two arrays). Opposite ends for pair-sum on a sorted list; fast/slow for cycles; read/write for in-place filters.',
              "Works when the array is sorted or you can decide which pointer to move from a compare. Often `O(n)` time, `O(1)` extra space.",
              'Classic: two sum on a sorted array, container with most water, remove duplicates, palindrome check, merge two sorted lists.',
              "```\nfunction twoSumSorted(arr, target) {\n  let lo = 0, hi = arr.length - 1\n  while (lo < hi) {\n    const sum = arr[lo] + arr[hi]\n    if (sum === target) return [lo, hi]\n    if (sum < target) lo++\n    else hi--\n  }\n  return [-1, -1]\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-p2',
            question: 'What is a sliding window?',
            answer: [
              "A subarray `[left, right]` you grow and shrink while scanning once. Use it for “longest/shortest substring or subarray that satisfies X.”",
              "Expand `right`. While the window is invalid, move `left`. Track a count, a set, or a running sum. `O(n)` if each index enters and leaves once.",
              'Fixed window: max sum of k items (add right, drop left-k). Variable window: longest substring with at most k distinct chars.',
              "```\nfunction maxSumK(arr, k) {\n  let sum = 0, best = -Infinity\n  for (let i = 0; i < arr.length; i++) {\n    sum += arr[i]\n    if (i >= k) sum -= arr[i - k]\n    if (i >= k - 1) best = Math.max(best, sum)\n  }\n  return best\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-p3',
            question: 'What is a prefix sum, and when do you use it?',
            answer: [
              "`prefix[i]` is the sum of `arr[0..i]`. A range `arr[l..r]` is `prefix[r] - prefix[l - 1]` in `O(1)` after an `O(n)` build.",
              'Use it for many range-sum queries, subarray-sum equals k (hash of prefix frequencies), and difference arrays for range updates.',
              "Same idea works for XOR, products (watch zeros), and 2D matrices (`sum[r2][c2] - ...`).",
              "```\nconst prefix = [0]\nfor (const n of arr) prefix.push(prefix[prefix.length - 1] + n)\nconst range = (l, r) => prefix[r + 1] - prefix[l]\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-p4',
            question: 'How does hashing show up in DSA rounds?',
            answer: [
              'Store what you have seen so you do not scan again. Frequency maps, “complement” maps, grouping anagrams, two-sum in one pass.',
              "Average `O(1)` lookup turns a nested loop into `O(n)`. Extra space is `O(n)`. Mention collisions only if they ask.",
              'If they want order, pair a hash map with an array or a linked list (LRU). If they want sorted keys, that is a tree map, not a hash map.',
              "```\nfunction twoSum(arr, target) {\n  const seen = new Map()\n  for (let i = 0; i < arr.length; i++) {\n    const need = target - arr[i]\n    if (seen.has(need)) return [seen.get(need), i]\n    seen.set(arr[i], i)\n  }\n  return [-1, -1]\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-p5',
            question: 'What is a monotonic stack, and when do you use it?',
            answer: [
              "A stack that stays increasing or decreasing. You pop while the new item breaks the order. Each index is pushed and popped at most once: `O(n)`.",
              'Use it for next greater / next smaller element, daily temperatures, largest rectangle in a histogram, and some sliding-window max variants.',
              "Draw the stack of indexes, not values, so you can compute widths (`i - stack[top] - 1`) after a pop.",
              "```\nfunction nextGreater(arr) {\n  const out = Array(arr.length).fill(-1), stack = []\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length && arr[i] > arr[stack.at(-1)]) out[stack.pop()] = arr[i]\n    stack.push(i)\n  }\n  return out\n}\n```",
            ],
            difficulty: 'hard',
          },
        ],
      },
      {
        id: 'dsa-recursion',
        title: 'Recursion, DP, greedy',
        questions: [
          {
            id: 'dsa-r1',
            question: 'What is recursion, and when is it the right tool?',
            answer: [
              'A function that calls itself on a smaller input. You need a base case that stops, and a step that makes progress toward it.',
              'Natural fit: trees, DFS, divide and conquer (merge sort), backtracking. The call stack is an implicit stack.',
              'Risks: missing base case (infinite), too-deep n (stack overflow), branching without memo (exponential). Prefer iterative if the depth can be n on a linked list of 1e5.',
              'Interview: say base case first, then the recursive case, then complexity including stack space.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-r2',
            question: 'What is backtracking?',
            answer: [
              "Build a solution one choice at a time. If a partial path cannot work, undo the last choice (`pop`) and try the next. DFS on the decision tree.",
              "Classics: permutations, combinations, subsets, N-queens, word search, sudoku. Time is often `O(n!)` or `O(2^n)`; say that before you code.",
              "Template: choose → recurse → un-choose. A `used[]` or a start index avoids duplicates. Copy the path when you hit a complete solution.",
              "```\nfunction subsets(nums) {\n  const out = []\n  const walk = (start, path) => {\n    out.push([...path])\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i])\n      walk(i + 1, path)\n      path.pop()\n    }\n  }\n  walk(0, [])\n  return out\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-r3',
            question: 'What is dynamic programming?',
            answer: [
              'Solve overlapping subproblems once and reuse the answer. Two flavors: top-down (recursion + memo) and bottom-up (table / rolling vars).',
              'Ask: can I define `dp[i]` (or `dp[i][j]`) from smaller states? If subproblems do not overlap, it is just divide and conquer, not DP.',
              'Classics: Fibonacci, climb stairs, coin change, knapsack, LIS, edit distance, unique paths, house robber.',
              'Interview: state what `dp[i]` means, the recurrence, the base cases, then the loop order. Time is states times work per state.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-r4',
            question: 'Greedy vs DP: how do you choose?',
            answer: [
              'Greedy: take the locally best choice and never revisit. Works only if a greedy-choice property holds (activity selection, Huffman, Dijkstra).',
              'DP: later choices depend on earlier ones, so you must try more than one option (or reuse a best-of-subproblem). Coin change with arbitrary coins is DP, not greedy.',
              'If a counterexample exists for “always take the biggest / earliest,” drop greedy and write DP or search.',
              'Interview: propose greedy, try to break it with a small example, then commit. Interviewers like that you checked.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-r5',
            question: 'How do you solve climb stairs / Fibonacci with DP?',
            answer: [
              "Climb stairs: n steps, 1 or 2 at a time. `ways(n) = ways(n-1) + ways(n-2)`. Same recurrence as Fibonacci.",
              "Naive recursion is `O(2^n)`. Memo or a two-variable bottom-up pass is `O(n)` time, `O(1)` extra space.",
              'This is the warm-up they use to see if you can name a state and avoid recomputing it.',
              "```\nfunction climbStairs(n) {\n  if (n <= 2) return n\n  let a = 1, b = 2\n  for (let i = 3; i <= n; i++) {\n    const next = a + b\n    a = b\n    b = next\n  }\n  return b\n}\n```",
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'dsa-classics',
        title: 'Classic problems',
        questions: [
          {
            id: 'dsa-q1',
            question: 'How do you solve Two Sum in an interview?',
            answer: [
              "Brute: every pair, `O(n^2)`. Better: one pass, hash value → index, look up `target - arr[i]`. `O(n)` time, `O(n)` space.",
              "If the array is already sorted, two pointers from the ends is `O(n)` time and `O(1)` extra space. Ask if you may sort (that loses original indexes).",
              'Clarify: return indexes or values? Duplicates? Multiple answers? Empty array?',
              'Write the hash-map version unless they say “constant extra space” or “sorted.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-q2',
            question: 'How do you check valid parentheses?',
            answer: [
              "Stack of opening brackets. A closer must match the top. At the end the stack must be empty. `O(n)` time, `O(n)` space.",
              "Wrong: only counting `(` vs `)` (fails on `([)]`). The stack holds order, not just counts.",
              'Variants: min removals to make valid, longest valid substring, generate all valid pairs (backtracking).',
              "```\nfunction isValid(s) {\n  const stack = [], pair = { \")\": \"(\", \"]\": \"[\", \"}\": \"{\" }\n  for (const ch of s) {\n    if (!pair[ch]) stack.push(ch)\n    else if (stack.pop() !== pair[ch]) return false\n  }\n  return stack.length === 0\n}\n```",
            ],
            difficulty: 'easy',
          },
          {
            id: 'dsa-q3',
            question: 'What is Kadane’s algorithm (maximum subarray)?',
            answer: [
              "Find the contiguous subarray with the largest sum. Kadane: scan once, keep `current = max(x, current + x)`, and a global `best`.",
              "`O(n)` time, `O(1)` extra space. The `max(x, current + x)` restart is the key: a negative prefix is never worth keeping.",
              'Ask about all-negative arrays (answer is the largest single element, and this still works). Empty array is a spec question.',
              "```\nfunction maxSubArray(arr) {\n  let best = arr[0], current = arr[0]\n  for (let i = 1; i < arr.length; i++) {\n    current = Math.max(arr[i], current + arr[i])\n    best = Math.max(best, current)\n  }\n  return best\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-q4',
            question: 'How do you merge overlapping intervals?',
            answer: [
              "Sort by start. Walk once: if the next interval starts after the current end, push a new one; else extend `end = max(end, next.end)`.",
              "`O(n log n)` from the sort, then `O(n)`. Clarify whether touching edges `[1,2][2,3]` merge (usually yes).",
              'Related: insert interval, meeting rooms (min heaps / sweep), merge overlapping in a calendar.',
              "```\nfunction merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0])\n  const out = [intervals[0]]\n  for (let i = 1; i < intervals.length; i++) {\n    const last = out[out.length - 1]\n    if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1])\n    else out.push(intervals[i])\n  }\n  return out\n}\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-q5',
            question: 'How do you find the k largest (or kth largest) elements?',
            answer: [
              "Sort and take a slice: `O(n log n)`. Better for small k: a min-heap of size k, `O(n log k)`. Quickselect average `O(n)`, worst `O(n^2)`.",
              'Say which you would write: heap is the expected “better than sort” answer. Quickselect if they want in-place average linear.',
              "JS has no heap in the language; say you would use one, or show a sorted copy if n is tiny. In Java: `PriorityQueue`.",
              "```\nfunction kLargest(arr, k) {\n  return [...arr].sort((a, b) => b - a).slice(0, k)\n} // interview: mention a size-k min-heap for O(n log k)\n```",
            ],
            difficulty: 'medium',
          },
          {
            id: 'dsa-q6',
            question: 'What is topological sort, and when do you use it?',
            answer: [
              'An ordering of a DAG so every edge A → B has A before B. Course prerequisites, build systems, compiler dependencies.',
              "Kahn: queue of indegree-0 nodes, peel them off, reduce neighbors. DFS: finish times, reverse postorder. Both `O(V + E)`.",
              'If you cannot finish (nodes remain, or DFS hits a back edge), the graph has a cycle: no topo order.',
              "```\nfunction topoKahn(n, edges) {\n  const g = Array.from({ length: n }, () => [])\n  const indeg = Array(n).fill(0)\n  for (const [a, b] of edges) { g[a].push(b); indeg[b]++ }\n  const q = indeg.flatMap((d, i) => (d === 0 ? [i] : []))\n  const out = []\n  while (q.length) {\n    const u = q.shift()\n    out.push(u)\n    for (const v of g[u]) if (--indeg[v] === 0) q.push(v)\n  }\n  return out.length === n ? out : []\n}\n```",
            ],
            difficulty: 'hard',
          },
          {
            id: 'dsa-q7',
            question: 'How do you pick a DSA pattern in the first two minutes?',
            answer: [
              'Sorted array + pair / partition → two pointers or binary search. Subarray / substring + constraint → sliding window or prefix + hash.',
              'Need “have I seen this?” or counts → hash map. Hierarchy → tree DFS/BFS. Relationships / routes → graph. Next greater → monotonic stack.',
              'Overlapping subproblems + optimal substructure → DP. “Try every combo” → backtracking. Always the extreme (min/max among stream) → heap.',
              'If stuck, write brute force Big-O, then ask which constraint to attack (time, space, or “must be online”). That is still a strong interview.',
            ],
            difficulty: 'easy',
          },
        ],
      },
    ],
  },
  {
    id: 'testing',
    type: 'Testing',
    name: 'Testing & Tooling',
    blurb: 'Tests, lint, npm, Git hooks, PRs, and CI/CD.',
    topics: [
      {
        id: 'test-basics',
        title: 'Testing mindset',
        questions: [
          {
            id: 'te-1',
            question: 'Unit vs integration vs E2E tests?',
            answer: [
              "Unit: one function or component in isolation. Fast, many of them. Example: `sortQuestions()` returns easy before hard.",
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
              "Assert what a user or caller can observe: ```\ngetByRole(\"button\", { name: /save/i })\n```, the JSON status, the returned array.",
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
              "The bundler drops exported code that nothing imports. `import { debounce }` from \"lodash-es\" can keep debounce and drop the rest.",
              'Needs ES modules (import/export) and files without surprising side effects at import time.',
              "Barrel files (export * from \".`/a`\"; export * from \".`/b`\") often pull the whole folder and block shaking.",
              "CommonJS `require()` is harder to shake. Prefer named ESM exports for libraries you care about shipping small.",
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-6',
            question: 'What is mocking, and when should you mock?',
            answer: [
              "A mock replaces a real dependency (fetch, DB, clock) with a fake you control: ```\nvi.fn().mockResolvedValue({ ok: true })\n```",
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
              "dependencies: packages the app needs to run in production (react, react-router-dom). `npm i pkg`",
              "devDependencies: build, test, lint only (vite, typescript, eslint, vitest). `npm i -D pkg`",
              'In an app, React is a dependency (the browser needs it). Vite is a devDependency (you don’t run Vite in prod; you serve the build).',
              'Libraries sometimes put types in devDependencies. For apps, if production code imports it, it belongs in dependencies.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-5',
            question: 'What is the difference between package-lock.json and package.json?',
            answer: [
              "`package.json` lists allowed ranges: \"react\": \"^19.0.0\" means 19.x, not 20. Two laptops can resolve different exact versions without a lockfile.",
              "`package-lock.json` (or pnpm-lock.yaml) records the exact tree that was installed, including transitive deps.",
              "Commit the lockfile. CI should use `npm ci`, which installs from the lockfile and fails if it does not match `package.json`.",
              'Don’t delete the lockfile to “fix” a bug - change the intended range and reinstall so the lock updates on purpose.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-7',
            question: 'What is the difference between npm install and npm ci?',
            answer: [
              "`npm install uses package.json`, may update the lockfile, and is what you use while developing.",
              "```\nnpm ci deletes node_modules and installs exactly from the lockfile. Faster and deterministic - use it in CI and production image builds\n```",
              "```\nnpm ci fails if package.json and the lockfile disagree. That is a feature: it catches a forgotten lockfile commit\n```",
              "Don’t run ```\nnpm ci and then npm install in the same pipeline unless you meant to change the lock\n```",
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'tooling-lint',
        title: 'Linting',
        questions: [
          {
            id: 'te-27',
            question: 'What is linting, and why do we use it?',
            answer: [
              'Linting is a static check: a program reads your source (no tests, no browser) and flags patterns that are bugs, inconsistent, or against the team style.',
              'Why: catch unused vars, missing keys, `==` vs `===`, hook-order mistakes, and “forgot await” before a reviewer or CI does. Same rules on every machine.',
              'Helpful because it is fast and local. A red squiggle in the editor is cheaper than a failed PR or a prod typo. Formatters (Prettier, Oxfmt) fix whitespace; linters judge meaning.',
              'Interview: “automated code review for known bad patterns.” It does not replace tests. A linter will not prove the checkout total is right.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-28',
            question: 'How does a linter work?',
            answer: [
              'Parse the file into an AST (tree of nodes: function, if, JSX). Walk the tree. Each rule looks for a pattern (`no-unused-vars` finds identifiers never read).',
              'Config (`eslint.config.js` or `.oxlintrc.json`) turns rules on, sets severity (off / warn / error), and scopes them to globs. Plugins add rule packs (React, TypeScript, a11y).',
              'The CLI prints file:line:rule. Many rules can `--fix` safe edits. Editors run the same engine via the language server so you see it while typing.',
              'You run it on save, on staged files (`lint-staged`), and in CI. If the process exits non-zero, the hook or pipeline fails. Type-aware rules also read TypeScript types (slower).',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-29',
            question: 'What is ESLint?',
            answer: [
              'The long-default JS/TS linter. You install `eslint`, add `eslint.config.js` (flat config in v9+), and run `npx eslint .`. Plugins live on npm (`eslint-plugin-react-hooks`).',
              'Rules are JS functions over the AST. That made the ecosystem huge (TypeScript, React, Vue, import, jsx-a11y) and also made large repos slow: every file walks a JS plugin tree.',
              'This repo uses it: `npm run lint` is `eslint .`, and lint-staged runs `eslint` on staged `*.{ts,tsx}`. Pair it with TypeScript (`tsc`) for types and Prettier for format if you want both.',
              'Interview: “pluggable JS linter + the config everyone already knows.” TSLint is dead; teams moved here, then some moved again to Oxlint or Biome for speed.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-30',
            question: 'What is Oxlint, and how is it different from ESLint?',
            answer: [
              'Oxlint (often said “ox lint”, from the Oxc / Oxidation Compiler) is a JS/TS linter written in Rust. Same job as ESLint: rules on an AST, plus `--fix` and editor diagnostics.',
              'Why people switch: 50-100x faster on big repos and CI. Hundreds of built-in rules (ESLint core, typescript-eslint, React, Jest/Vitest, import, unicorn, jsx-a11y) without a huge JS plugin tree.',
              'Config is `.oxlintrc.json`. `npx @oxlint/migrate` can turn a flat ESLint config into it. Incremental path: run `oxlint && eslint` and use `eslint-plugin-oxlint` so ESLint skips rules Oxlint already covers.',
              'Stay on ESLint if a custom plugin or parser is the blocker. Interview: “same idea as ESLint, native and fast; migrate when CI lint is the bottleneck.”',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'tooling-hooks',
        title: 'Git hooks & Husky',
        questions: [
          {
            id: 'te-8',
            question: 'What is a Git hook, and what is a pre-commit hook?',
            answer: [
              'A Git hook is a script Git runs at a lifecycle moment: commit, push, merge, rebase. They live in `.git/hooks/` and are not committed by default.',
              'pre-commit runs after you type `git commit`, before the commit object is created. If the script exits non-zero, the commit is aborted.',
              'Other common ones: commit-msg (lint the message), pre-push (run tests before the remote sees it), post-checkout.',
              'Interview: “local gate before the commit lands.” They are per-clone unless a tool like Husky installs them from the repo.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-9',
            question: 'What is Husky?',
            answer: [
              "A small ```\nnpm package that installs Git hooks from files you commit\n``` (usually `.husky/pre-commit`). Everyone on the team gets the same hooks after `npm install`.",
              "`npm i -D husky` then `\"prepare\": \"husky\"` in `package.json`. `prepare` runs on install so `.husky/` is wired into `.git/hooks`.",
              "Husky 9: put a shell script in `.husky/pre-commit` (for example `npm run lint:staged`). You commit that file, not the `.git/hooks` copy.",
              'Without Husky (or Lefthook, pre-commit.com), each developer would copy hook scripts by hand. That is why interviews mention it with lint-staged.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-10',
            question: 'What is lint-staged, and why pair it with a pre-commit hook?',
            answer: [
              "lint-staged runs a command only on files in the Git index (staged), not the whole repo. Typical: `*.{ts,tsx}` → `eslint`.",
              "A full `eslint .` on every commit is slow and fails on files you did not touch. Staged-only keeps the hook fast and fair.",
              "Husky calls the hook; lint-staged decides which files. `npm run lint:staged` from `.husky/pre-commit` is the usual pair.",
              "This repo does that: `package.json` has ```\n\"lint-staged\": {\n  \"*.{ts,tsx}\": \"eslint\"\n}\n``` and `\"prepare\": \"husky\"`.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-11',
            question: 'What are good practices for a pre-commit hook?',
            answer: [
              'Keep it fast (seconds, not minutes). Lint or format staged files. Do not run the full test suite or a production build on every commit.',
              'Fail closed on the things that waste reviewers: lint errors, secrets in the diff, broken format. Print a clear error so people know how to fix it.',
              "Commit the hook setup (Husky files + `package.json` scripts). Document `npm install` so new clones get hooks via `prepare`.",
              'Do not auto-rewrite files in a surprising way without staging the fix. If the hook formats, it should add the formatted file or tell you to re-stage.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-12',
            question: 'What belongs in pre-commit vs CI?',
            answer: [
              'pre-commit: cheap, local, files you just staged. Lint-staged, format, a tiny typecheck if it is fast. Goal: catch sloppy commits on the laptop.',
              'CI: the source of truth. Full lint, full test suite, build, e2e. Hooks can be skipped (`git commit --no-verify`); CI cannot if branch protection is on.',
              'Do not make the hook a 10-minute pipeline or people will `--no-verify` every time. Duplicate the important checks in CI even if the hook exists.',
              'Interview: “hooks are a courtesy; CI is the gate.” Both together is the good practice.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-13',
            question: 'What is --no-verify, and when is it okay?',
            answer: [
              '`git commit --no-verify` (or `-n`) skips hooks. Use it only when the hook is broken or you are mid-rebase with a known temporary state.',
              'It is not a license to push lint errors. CI should still fail the PR. If the team uses `--no-verify` daily, the hook is too slow or too noisy: fix the hook.',
              'Never skip hooks to hide secrets or to land formatting you refused to fix. Reviewers will see it, and CI should block it.',
              'Interview: know the flag exists, say you almost never use it, and say CI is the backstop.',
            ],
            difficulty: 'easy',
          },
        ],
      },
      {
        id: 'tooling-prs',
        title: 'Commits & pull requests',
        questions: [
          {
            id: 'te-14',
            question: 'How should a commit message look?',
            answer: [
              'Subject line: imperative, ~50 characters, no trailing period. “Add pre-commit lint” not “Added linting” or “fixes.”',
              'Explain why, not a file list. Git already has the diff. A body (blank line, then wrap ~72) is for context the diff cannot show.',
              'Conventional Commits is a common house style: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`. `feat(hooks): install husky` is a valid subject.',
              'One logical change per commit. Do not mix “rename folder” and “add payment API” in the same message. Never commit `WIP` or `asdf` onto main.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-15',
            question: 'What are good practices while committing?',
            answer: [
              'Commit a complete, buildable slice. Reviewers and `git bisect` should be able to check out any commit and run the app.',
              'Stage on purpose (`git add -p` if needed). Do not commit `.env`, secrets, `node_modules`, or your editor’s local files. Use `.gitignore`.',
              'Keep commits atomic: one reason to exist. Split “format the file” from “change the behavior” so the review is readable.',
              'Read `git diff --staged` before you commit. If the hook fails, fix the files; do not `--no-verify` to hide lint.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-16',
            question: 'What belongs in one commit vs many commits?',
            answer: [
              'One commit: one idea (a bugfix, a rename, a test). Many commits: a feature that is easier to review as a story (schema, then API, then UI).',
              'Do not squash unrelated work into “address comments.” Prefer `fix: handle empty search` over a second “misc.”',
              'Follow the repo convention: some teams squash-merge the whole PR; some keep the history. Ask, then match.',
              'Interview: “atomic commits, readable history.” If they squash on merge, the PR description becomes the lasting message: write it well.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-17',
            question: 'What are good practices when writing a pull request?',
            answer: [
              'Small PR, one purpose. Title matches the change (`Fix empty search on Testing topic`), not `update` or `stuff`.',
              'Description: why this exists, what changed, how to test it. Link the issue. Screenshots or a clip if the UI moved. Call out risk (migrations, flags).',
              'Self-review the diff before you request reviewers. Leave notes on tricky lines. Green CI before you ask for a look, unless you marked it draft.',
              'Keep it reviewable: under a few hundred lines when you can. Split refactors from behavior. Do not surprise people with an unrelated format-the-repo commit.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-18',
            question: 'What should a PR description include?',
            answer: [
              'Summary (why), test plan (exact clicks or commands), and anything a reviewer cannot see (feature flag, rollback, data backfill).',
              'If you changed UI: before/after or a short video. If you changed API: request/response or a curl. If you skipped tests, say why.',
              'Template fields exist so you fill them. “N/A” is fine when it is true; leaving Test plan blank is not.',
              'Interview: treat the description as the commit message of the merge. Future you will read it in `git log` after squash.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-19',
            question: 'What are good practices when reviewing a PR?',
            answer: [
              'Read the description and ticket first, then the diff. Check correctness, tests, security (auth, XSS, secrets), and that the change matches the title.',
              'Separate blockers from nits. “This can ship; please rename in a follow-up” is kinder and faster than 20 optional comments that block merge.',
              'Be specific: point at the line, suggest a snippet, explain the failure mode. “This looks wrong” is not a review. Praise the hard part too.',
              'Run it when the risk is UI or data. Approve when you would own the rollback. Request changes only when you would not merge it as-is.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-20',
            question: 'What should you look for in a review besides the happy path?',
            answer: [
              'Edge cases: empty list, error states, permissions, mobile if the layout changed. Missing tests for the new branch.',
              'Accidental scope: debug logs, commented-out code, leftover `console.log`, a lockfile change you cannot explain, secrets in the diff.',
              'API and schema: backward compatibility, migration safety, indexes. Performance: N+1, unbounded lists, work on the request path.',
              'Accessibility and copy if the UI changed. Docs and README if a script or flag is new. “Does this need a changelog?” is a fair question.',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-21',
            question: 'How do you give review feedback without slowing the team?',
            answer: [
              'Reply in hours, not days, or say when you will look. A late “nit: rename” after three other approvals is the costly kind of review.',
              'Prefix optional comments (`nit`, `optional`, `question`) so the author knows they can merge. One thread per issue, not three on the same line.',
              'If the design is wrong, stop the line-by-line and talk (sync or a top-level comment). Do not bike-shed names while the approach is broken.',
              'Authors: do not take nits as attacks. Reviewers: do not use the review to rewrite the PR in your style. The bar is “correct and clear,” not “I would have typed it.”',
            ],
            difficulty: 'medium',
          },
        ],
      },
      {
        id: 'tooling-cicd',
        title: 'CI/CD',
        questions: [
          {
            id: 'te-22',
            question: 'What is CI/CD?',
            answer: [
              'CI/CD means Continuous Integration and Continuous Delivery (or Deployment): automate build, test, and release so every change is checked the same way.',
              'CI: merge often. Each push or PR runs lint, tests, and a build on a clean machine, not on someone’s laptop.',
              'CD: when CI is green, ship that same artifact to staging or production, either with one click or fully automatically.',
              'Why: catch breaks early, no “it works on my machine” as the release process, and you can roll back to a known build.',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-23',
            question:
              'What is the difference between continuous integration, continuous delivery, and continuous deployment?',
            answer: [
              'Continuous integration: everyone merges to the main line often. A pipeline runs checks on every change so broken code is found in minutes.',
              'Continuous delivery: main is always releasable. A human still clicks “deploy” (or promote staging → prod). The risky part is automated; the go-live is not.',
              'Continuous deployment: every green commit on main goes to production with no extra click. Needs good tests, feature flags, and a fast rollback.',
              'Interview: most teams do CI plus delivery. Full auto-deploy to prod is a choice, not the default meaning of “we have CI/CD.”',
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-24',
            question: 'How does a deployment work under the hood?',
            answer: [
              'CI builds an artifact: static files, a Docker image, or a binary. You ship that artifact, not the folder on a laptop.',
              'CD puts it on the host: upload to S3 + CDN, push the image and start new containers, or a platform build (Vercel, Netlify, GitHub Pages).',
              'Traffic moves after a health check: the load balancer or orchestrator (Kubernetes, ECS) sends new requests to the new instances and drains the old ones.',
              'Secrets and env come from the host (not the repo). Rollback means point traffic at the previous artifact. Interview: “build once, promote the same build.”',
            ],
            difficulty: 'medium',
          },
          {
            id: 'te-25',
            question: 'What is a GitHub Actions workflow, and when does it run?',
            answer: [
              "A workflow is a YAML file in `.github/workflows/*.yml`. GitHub starts a runner (their VM or yours) and executes the jobs and steps you listed.",
              "`on:` is the trigger: `push`, `pull_request`, `workflow_dispatch` (manual), `schedule` (cron), `release`. A PR opened or updated usually runs CI.",
              "Typical CI job: checkout → setup-node → `npm ci` → lint → test → build. A deploy job on `push` to `main` runs only after those steps pass.",
              "Status shows on the PR. Branch protection can require the workflow to be green before merge. Secrets live in repo Settings as ```\n${\n  { secrets.NAME }\n}\n``` - do not echo them.",
            ],
            difficulty: 'easy',
          },
          {
            id: 'te-26',
            question: 'What should run in CI vs CD, and what belongs in a workflow file?',
            answer: [
              'CI (every PR): `npm ci`, lint, unit/integration tests, and a production build. Optional: typecheck, a preview deploy. Do not deploy prod from a fork PR.',
              'CD (main or a release tag): take the CI artifact and ship it. Run smoke checks after. Keep prod secrets only on that job.',
              'A workflow names `jobs` (can run in parallel) and `steps` (run in order). `needs:` makes deploy wait for test. Matrix runs the same job on Node 20 and 22.',
              'Interview: “hooks are a courtesy; the workflow is the gate.” `git commit --no-verify` cannot skip GitHub Actions if the branch requires it.',
            ],
            difficulty: 'medium',
          },
        ],
      },
    ],
  },
]
