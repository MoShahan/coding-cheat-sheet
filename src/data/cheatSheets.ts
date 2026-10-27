export type CheatItem = {
  term: string
  note?: string
}

export type CheatSection = {
  title: string
  items: CheatItem[]
}

export type CheatSheet = {
  categoryId: string
  tagline: string
  sections: CheatSection[]
}

const sheets: CheatSheet[] = [
  {
    categoryId: 'html',
    tagline: 'Meaning first. CSS does layout.',
    sections: [
      {
        title: 'Landmarks',
        items: [
          { term: '<header> <nav> <main> <aside> <footer>' },
          { term: '<section>', note: 'Themed block + heading.' },
          { term: '<article>', note: 'Stands alone (post, card).' },
          { term: '<div> / <span>', note: 'No meaning - last resort.' },
        ],
      },
      {
        title: 'Forms',
        items: [
          { term: '<label for="id">', note: 'Or wrap the input.' },
          { term: 'type', note: 'email · password · number · checkbox · radio' },
          { term: 'required · disabled · autocomplete' },
          { term: 'Placeholder ≠ label' },
        ],
      },
      {
        title: 'Media & script',
        items: [
          { term: '<img alt width height>', note: 'alt="" if decorative.' },
          { term: 'srcset + sizes', note: 'Pick file by width.' },
          { term: 'defer', note: 'After parse, in order.' },
          { term: 'async', note: 'Runs when ready - no order.' },
        ],
      },
      {
        title: 'A11y',
        items: [
          { term: 'Native first', note: '<button> not div+role.' },
          { term: 'aria-label', note: 'Icon-only; don’t duplicate text.' },
          { term: 'One <h1>, real heading order' },
          { term: 'Don’t use ARIA if native works' },
        ],
      },
    ],
  },
  {
    categoryId: 'css',
    tagline: 'Box first, then layout, then paint.',
    sections: [
      {
        title: 'Box',
        items: [
          { term: 'border-box', note: 'width includes pad + border.' },
          { term: 'content + padding + border', note: 'margin is outside.' },
          { term: 'display', note: 'block · inline · inline-block · none · flex · grid' },
          { term: 'none / hidden / opacity:0', note: 'gone · space · still clickable.' },
        ],
      },
      {
        title: 'Flex & Grid',
        items: [
          { term: 'flex', note: 'One axis. gap · align-items · justify-content.' },
          { term: 'grid', note: 'Two axes. grid-template-columns: 1fr 2fr.' },
          { term: 'Rule', note: 'Grid for page; flex inside components.' },
        ],
      },
      {
        title: 'Position & units',
        items: [
          { term: 'static · relative · absolute · fixed · sticky' },
          { term: 'rem', note: 'Root font. Prefer for type/space.' },
          { term: 'em % vw/vh', note: 'Parent / viewport. Prefer clamp().' },
        ],
      },
      {
        title: 'Cascade',
        items: [
          { term: 'Specificity', note: 'inline > #id > .class > el' },
          { term: 'Avoid !important - refactor the selector.' },
          { term: '--token: #2563eb', note: 'var(--token). Cascades live.' },
          { term: '@media (min-width: 768px)', note: 'Mobile-first.' },
        ],
      },
      {
        title: 'Perf',
        items: [
          { term: 'Animate transform / opacity', note: 'Skip layout.' },
          { term: 'Reflow', note: 'width, font, DOM add, offsetHeight loops.' },
        ],
      },
    ],
  },
  {
    categoryId: 'javascript',
    tagline: 'Scope, this, then queues.',
    sections: [
      {
        title: 'Bindings',
        items: [
          { term: 'const > let, skip var', note: 'Block vs function. TDZ on let/const.' },
          { term: '===', note: 'No coerce. == is 0==false traps.' },
          { term: 'null vs undefined', note: 'Intentional empty vs missing.' },
          { term: '...spread / rest', note: 'Expand vs collect. Shallow copy.' },
        ],
      },
      {
        title: 'Functions',
        items: [
          { term: 'Closure', note: 'fn + outer vars. makeCounter, debounce.' },
          { term: 'this', note: 'Call site. Arrows are lexical.' },
          { term: 'call / apply / bind', note: 'Now listed · now array · later fn.' },
          { term: 'Hoist', note: 'function decl full; var=undefined; let TDZ.' },
        ],
      },
      {
        title: 'Collections',
        items: [
          { term: 'for...of · map/filter/reduce', note: 'Values / transform / keep / fold.' },
          { term: 'Object.keys · values · entries' },
          { term: 'Avoid for...in on arrays' },
        ],
      },
      {
        title: 'Promises',
        items: [
          { term: 'new Promise((res, rej) => …)', note: 'pending → fulfilled | rejected.' },
          { term: 'resolve(x) → .then(v => …)', note: 'v is x. One pipe.' },
          { term: 'async/await', note: 'Syntax on Promises. try/catch.' },
          { term: 'all · allSettled · race' },
        ],
      },
      {
        title: 'Event loop',
        items: [
          { term: 'stack → microtasks → macrotask → (paint)' },
          { term: 'micro', note: '.then · queueMicrotask · await resume' },
          { term: 'macro', note: 'setTimeout · events · I/O' },
          { term: 'Promise.then before setTimeout(0)' },
        ],
      },
    ],
  },
  {
    categoryId: 'typescript',
    tagline: 'Types erase. Runtime is still JS.',
    sections: [
      {
        title: 'Primitives',
        items: [
          { term: 'string number boolean bigint symbol null undefined' },
          { term: 'void · never · unknown, avoid any' },
          { term: 'string[] · Array<T> · Record<K,V>' },
        ],
      },
      {
        title: 'Shapes',
        items: [
          { term: 'type vs interface', note: 'unions / merge. Both for objects.' },
          { term: 'T | U · T & U · name?: string' },
          { term: 'x?.y · value ?? fallback' },
        ],
      },
      {
        title: 'Generics & utils',
        items: [
          { term: 'identity<T>(v: T): T' },
          { term: 'Partial Pick Omit Required Readonly' },
          { term: 'extends for hierarchies; & to compose aliases' },
        ],
      },
      {
        title: 'Narrow',
        items: [
          { term: 'typeof · === · in · instanceof' },
          { term: 'v is User', note: 'Type guard - runtime check.' },
          { term: 'as T is not a check' },
        ],
      },
    ],
  },
  {
    categoryId: 'vue',
    tagline: 'Template + reactivity. Vue 3 = Composition.',
    sections: [
      {
        title: 'Core',
        items: [
          { term: 'Options vs Composition', note: 'data/methods vs ref + <script setup>.' },
          { term: 'ref(x)', note: '.value in script; unwrap in template.' },
          { term: 'reactive(obj)', note: 'No .value; don’t replace the object.' },
          { term: 'v-model', note: 'modelValue + update:modelValue.' },
        ],
      },
      {
        title: 'Derive & watch',
        items: [
          { term: 'computed', note: 'Cached derived value.' },
          { term: 'watch / watchEffect', note: 'Side effects only.' },
          { term: 'defineProps · defineEmits', note: 'Don’t mutate props.' },
        ],
      },
      {
        title: 'Reuse',
        items: [
          { term: 'useX() composable', note: 'Like a React hook. Own state per call.' },
          { term: 'v-if · v-for · :key' },
          { term: 'v-bind="$attrs" on wrappers' },
        ],
      },
    ],
  },
  {
    categoryId: 'angular',
    tagline: 'Angular 2+ · TS · DI · templates.',
    sections: [
      {
        title: 'Pieces',
        items: [
          { term: 'Component', note: 'class + template + styles.' },
          { term: 'Service + @Injectable({ providedIn: "root" })' },
          { term: 'Standalone > NgModule (current default)' },
          { term: 'AngularJS 1.x is a different framework' },
        ],
      },
      {
        title: 'Binding',
        items: [
          { term: '{{ v }}  [prop]  (event)  [(ngModel)]' },
          { term: '@if / @for (track id) · *ngIf *ngFor' },
          { term: 'Pipes', note: '{{ price | currency }} - keep them cheap.' },
        ],
      },
      {
        title: 'Runtime',
        items: [
          { term: 'DI', note: 'constructor(api) or inject(Api).' },
          { term: 'OnPush', note: 'Skip unless inputs/events change.' },
          { term: 'Signals', note: 'signal() · computed() - local updates.' },
        ],
      },
    ],
  },
  {
    categoryId: 'react',
    tagline: 'Describe UI. Don’t sync copies of it.',
    sections: [
      {
        title: 'Hooks (names)',
        items: [
          { term: 'Daily', note: 'useState · useEffect · useRef · useContext' },
          { term: 'Memo', note: 'useMemo · useCallback · useReducer' },
          { term: 'useLayoutEffect', note: 'Before paint - measure / no flicker.' },
          { term: 'useTransition · useDeferredValue', note: 'Non-urgent UI.' },
          { term: 'useSyncExternalStore', note: 'Subscribe to an external store.' },
          { term: 'useId · useImperativeHandle', note: 'SSR ids · rare ref API.' },
        ],
      },
      {
        title: 'Rules',
        items: [
          { term: 'Hooks top-level only - order is identity.' },
          { term: 'If you can calculate it, don’t store it.' },
          { term: 'Effects = outside world, not derived lists.' },
        ],
      },
      {
        title: 'Render',
        items: [
          { term: 'Triggers', note: 'setState · context · parent render.' },
          { term: 'Not', note: 'ref.current · mutated objects.' },
          { term: 'key={id}', note: 'Never index after sort/insert.' },
          { term: 'Batching', note: 'Many setStates → one render (R18).' },
        ],
      },
      {
        title: 'Forms & trees',
        items: [
          { term: 'Controlled', note: 'value + onChange. Live UI.' },
          { term: 'Uncontrolled', note: 'ref / defaultValue. Submit-only.' },
          { term: 'createPortal', note: 'Modals escape overflow.' },
          { term: 'memo when props are stable + child is heavy' },
        ],
      },
    ],
  },
  {
    categoryId: 'browser',
    tagline: 'Events bubble. Storage is origin-scoped.',
    sections: [
      {
        title: 'Events',
        items: [
          { term: 'capture → target → bubble' },
          { term: 'addEventListener(type, fn, { capture, once })' },
          { term: 'Delegation', note: 'One parent + closest().' },
          { term: 'preventDefault vs stopPropagation' },
        ],
      },
      {
        title: 'Paint',
        items: [
          { term: 'HTML→DOM · CSS→CSSOM → render → layout → paint' },
          { term: 'Blocking CSS/JS delays first paint' },
        ],
      },
      {
        title: 'Storage',
        items: [
          { term: 'localStorage', note: 'Persists, not sent. ~5MB.' },
          { term: 'sessionStorage', note: 'This tab.' },
          { term: 'cookies', note: 'Tiny, sent to server. HttpOnly.' },
          { term: 'Origin = scheme + host + port' },
        ],
      },
    ],
  },
  {
    categoryId: 'state',
    tagline: 'Smallest tool. Server cache ≠ UI store.',
    sections: [
      {
        title: 'Pick',
        items: [
          { term: 'useState / useReducer', note: 'Local, forms, open/close.' },
          { term: 'Context', note: 'Rare: theme, auth, locale.' },
          { term: 'Zustand / Jotai', note: 'Global + selectors.' },
          { term: 'Redux Toolkit', note: 'Huge teams / heavy tooling.' },
          { term: 'TanStack Query', note: 'Server state. Don’t copy to Redux.' },
        ],
      },
      {
        title: 'Traps',
        items: [
          { term: 'High-churn context rerenders every consumer.' },
          { term: 'Client vs server state - two sources of truth hurts.' },
        ],
      },
    ],
  },
  {
    categoryId: 'performance',
    tagline: 'Don’t mount 100k nodes. Measure first.',
    sections: [
      {
        title: 'Lists',
        items: [
          { term: 'Virtualize', note: 'react-window / TanStack Virtual.' },
          { term: 'Paginate / infinite', note: 'Server data. Don’t fetch 100k.' },
          { term: 'Debounce search 200-300ms' },
          { term: 'Sort/filter in a Worker if huge' },
        ],
      },
      {
        title: 'Rate',
        items: [
          { term: 'Debounce', note: 'After typing stops (search).' },
          { term: 'Throttle', note: 'During scroll/resize.' },
          { term: 'Poll', note: 'Timer when no WS. Clear it.' },
        ],
      },
      {
        title: 'Web',
        items: [
          { term: 'LCP INP CLS', note: 'Load · input · shift.' },
          { term: 'Code-split routes · tree-shake · dynamic import()' },
          { term: 'Long task >50ms - chunk or Worker.' },
        ],
      },
    ],
  },
  {
    categoryId: 'network',
    tagline: 'Verbs, status, cookies vs tokens.',
    sections: [
      {
        title: 'HTTP',
        items: [
          { term: 'GET POST PUT PATCH DELETE' },
          { term: '200 201 204 · 400 401 403 404 · 500' },
          { term: '401 not logged in · 403 logged in, forbidden' },
        ],
      },
      {
        title: 'Browser rules',
        items: [
          { term: 'CORS', note: 'Server opt-in to read cross-origin.' },
          { term: 'XSS', note: 'Escape HTML. CSP. Don’t store tokens in LS.' },
          { term: 'CSRF', note: 'SameSite + tokens. Bearer headers skip forms.' },
        ],
      },
      {
        title: 'Auth',
        items: [
          { term: 'Session cookie', note: 'HttpOnly. Server can revoke.' },
          { term: 'JWT', note: 'Signed. Short expiry. Revoke is harder.' },
        ],
      },
    ],
  },
  {
    categoryId: 'node',
    tagline: 'One JS thread. libuv does I/O.',
    sections: [
      {
        title: 'Runtime',
        items: [
          { term: 'V8 + libuv. No DOM.' },
          { term: 'import from "node:fs/promises"' },
          { term: 'ESM "type":"module" · CJS require' },
          { term: 'process.env.PORT - don’t commit .env' },
        ],
      },
      {
        title: 'I/O',
        items: [
          { term: 'Async I/O scales connections. CPU blocks everyone.' },
          { term: 'readFile not readFileSync in handlers' },
          { term: 'Workers / queue for heavy CPU' },
        ],
      },
      {
        title: 'npm',
        items: [
          { term: 'dependencies vs -D · lockfile · npm ci in CI' },
        ],
      },
    ],
  },
  {
    categoryId: 'express',
    tagline: 'Routes + middleware. Order matters.',
    sections: [
      {
        title: 'Shape',
        items: [
          { term: 'const app = express(); app.listen(3000)' },
          { term: 'app.use(express.json())' },
          { term: 'app.get/post("/users/:id")', note: 'params · query · body' },
          { term: 'Router() mounted at /users' },
          { term: 'next() or send - or the request hangs' },
        ],
      },
      {
        title: 'Middleware',
        items: [
          { term: '(req, res, next) => { … }' },
          { term: 'Order: log → json → auth → routes → errors' },
          { term: 'app.use("/api", fn) matches prefix' },
        ],
      },
      {
        title: 'Errors',
        items: [
          { term: '(err, req, res, next) last' },
          { term: 'next(err) from async routes' },
          { term: '404 fallback after all routes' },
          { term: 'Don’t leak stacks in prod' },
        ],
      },
    ],
  },
  {
    categoryId: 'nest',
    tagline: 'Angular-shaped Node. Controllers stay thin.',
    sections: [
      {
        title: 'Pieces',
        items: [
          { term: '@Controller("users") @Get() @Post()' },
          { term: '@Param("id") @Body() @Query()' },
          { term: '@Injectable() service - logic + DB' },
          { term: '@Module({ imports, controllers, providers, exports })' },
          { term: 'Express or Fastify under the hood' },
        ],
      },
      {
        title: 'Pipeline',
        items: [
          { term: 'Guards', note: 'Auth / roles. canActivate.' },
          { term: 'Pipes', note: 'ValidationPipe + DTOs → 400.' },
          { term: 'Interceptors', note: 'Log, map, timeout.' },
          { term: 'Exception filters', note: 'Thrown → HTTP body.' },
        ],
      },
      {
        title: 'Vs Express',
        items: [
          { term: 'Express: tiny, you pick every lib.' },
          { term: 'Nest: DI + structure for growing APIs.' },
        ],
      },
    ],
  },
  {
    categoryId: 'next',
    tagline: 'App Router. Server by default.',
    sections: [
      {
        title: 'Files',
        items: [
          { term: 'app/page.tsx · layout.tsx · loading.tsx · error.tsx' },
          { term: 'app/blog/[slug]/page.tsx' },
          { term: 'app/api/x/route.ts - GET/POST handlers' },
          { term: '<Link href> · next/image' },
        ],
      },
      {
        title: 'Render',
        items: [
          { term: 'RSC default', note: 'No useState. Can hit DB.' },
          { term: '"use client"', note: 'Hooks, events, browser APIs.' },
          { term: 'CSR / SSR / SSG · revalidate / no-store' },
        ],
      },
    ],
  },
  {
    categoryId: 'mongodb',
    tagline: 'Documents. Embed or reference. Index what you query.',
    sections: [
      {
        title: 'Shape',
        items: [
          { term: 'db → collection → document (BSON)' },
          { term: 'SQL vs NoSQL', note: 'Tables+JOIN vs nested JSON-like.' },
          { term: 'Embed small/always-together; reference growing 1-N' },
        ],
      },
      {
        title: 'CRUD',
        items: [
          { term: 'insertOne / insertMany' },
          { term: 'find / findOne', note: 'Many vs first. Unique needs unique index.' },
          { term: 'updateOne + $set $inc $push', note: 'Not a raw object.' },
          { term: 'deleteOne / deleteMany · upsert: true' },
        ],
      },
      {
        title: 'Query',
        items: [
          { term: '$gt $gte $lt $in $and $or' },
          { term: 'project · sort · skip/limit · keyset on _id' },
          { term: '$lookup', note: 'Equality or pipeline (let + $expr).' },
          { term: 'aggregate: $match $group $sort $project' },
        ],
      },
      {
        title: 'Indexes',
        items: [
          { term: 'single · compound · multikey (arrays)' },
          { term: 'unique · partial · TTL · text · hashed · wildcard' },
          { term: 'explain() - avoid collection scans' },
        ],
      },
    ],
  },
  {
    categoryId: 'postgres',
    tagline: 'Rows, keys, SQL. JSONB is a cell, not a document DB.',
    sections: [
      {
        title: 'Model',
        items: [
          { term: 'Table = grid of typed columns. Related rows via FK.' },
          { term: 'PK unique row · FK references PK' },
          { term: 'INSERT SELECT UPDATE DELETE · RETURNING' },
          { term: 'ON CONFLICT … DO UPDATE - upsert' },
        ],
      },
      {
        title: 'Joins',
        items: [
          { term: 'INNER', note: 'Matches only.' },
          { term: 'LEFT / RIGHT / FULL', note: 'Keep unmatched + NULLs.' },
          { term: 'CROSS · SELF (aliases)' },
        ],
      },
      {
        title: 'Query',
        items: [
          { term: 'WHERE · ORDER BY · LIMIT/OFFSET · LIKE/ILIKE IN BETWEEN' },
          { term: 'GROUP BY + HAVING · COUNT SUM AVG' },
          { term: 'IS NULL · COALESCE · EXISTS' },
        ],
      },
      {
        title: 'Indexes',
        items: [
          { term: 'B-tree default · GIN JSONB/arrays · BRIN huge logs' },
          { term: 'UNIQUE · PARTIAL · expression · INCLUDE (covering)' },
          { term: 'EXPLAIN ANALYZE - Index vs Seq Scan' },
        ],
      },
    ],
  },
  {
    categoryId: 'prisma',
    tagline: 'schema.prisma → generate → typed client.',
    sections: [
      {
        title: 'CRUD',
        items: [
          { term: 'create · createMany · upsert' },
          { term: 'findMany · findUnique · findFirst · *OrThrow' },
          { term: 'update / updateMany · delete / deleteMany' },
          { term: '$transaction([...]) or async (tx) =>' },
        ],
      },
      {
        title: 'Relations',
        items: [
          { term: 'include vs select', note: 'Don’t mix same level.' },
          { term: 'some / every / none' },
          { term: 'nested create · connect · connectOrCreate' },
        ],
      },
      {
        title: 'Query',
        items: [
          { term: 'where orderBy take skip · cursor paging' },
          { term: 'AND OR NOT · contains gte in' },
          { term: 'migrate dev over db push for teams' },
        ],
      },
    ],
  },
  {
    categoryId: 'drizzle',
    tagline: 'SQL-shaped TS. You write the join.',
    sections: [
      {
        title: 'CRUD',
        items: [
          { term: 'db.insert(users).values({…}).returning()' },
          { term: 'db.select().from(users).where(eq(users.id, 1))' },
          { term: 'update.set.where · delete.where' },
          { term: 'onConflictDoUpdate / DoNothing' },
        ],
      },
      {
        title: 'Joins',
        items: [
          { term: 'innerJoin leftJoin rightJoin fullJoin + eq()' },
          { term: 'db.query.users.findMany({ with: { orders: true } })' },
        ],
      },
      {
        title: 'Helpers',
        items: [
          { term: 'eq ne gt gte lt · and or · inArray like ilike' },
          { term: 'orderBy limit offset · count sum groupBy' },
          { term: 'db.transaction(async (tx) => …) - use tx inside' },
        ],
      },
    ],
  },
  {
    categoryId: 'django',
    tagline: 'URL → view → model → template/JSON.',
    sections: [
      {
        title: 'ORM',
        items: [
          { term: 'Model.objects.filter(age__gte=18).order_by("-id")' },
          { term: 'create · save · delete' },
          { term: 'select_related FK · prefetch_related M2M', note: 'Kill N+1.' },
        ],
      },
      {
        title: 'App',
        items: [
          { term: 'urls.py · views · templates / JsonResponse' },
          { term: 'makemigrations → migrate' },
          { term: 'Admin + ModelForm · DRF for APIs' },
        ],
      },
    ],
  },
  {
    categoryId: 'rails',
    tagline: 'Convention over configuration. MVC.',
    sections: [
      {
        title: 'Active Record',
        items: [
          { term: 'find find_by where create! update! destroy' },
          { term: 'belongs_to · has_many · includes(:orders)' },
          { term: 'validates :email, presence: true, uniqueness: true' },
        ],
      },
      {
        title: 'App',
        items: [
          { term: 'resources :posts → index show create update destroy' },
          { term: 'generate migration · db:migrate' },
          { term: 'Thin controllers. N+1 → includes.' },
        ],
      },
    ],
  },
  {
    categoryId: 'testing',
    tagline: 'Behavior over internals. Fast tests first.',
    sections: [
      {
        title: 'Layers',
        items: [
          { term: 'Many unit, some integration, few E2E' },
          { term: 'getByRole / user flows - not CSS class names' },
          { term: 'Mock I/O, not the unit under test' },
        ],
      },
      {
        title: 'Tooling',
        items: [
          { term: 'dependencies vs devDependencies' },
          { term: 'package.json ranges · lockfile exact · npm ci' },
          { term: 'Tree-shake ESM; avoid export * barrels' },
        ],
      },
    ],
  },
]

const byId = new Map(sheets.map((sheet) => [sheet.categoryId, sheet]))

export function getCheatSheet(categoryId: string): CheatSheet | undefined {
  return byId.get(categoryId)
}

export function hasCheatSheet(categoryId: string): boolean {
  return byId.has(categoryId)
}
