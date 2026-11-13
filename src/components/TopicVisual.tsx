type TopicVisualProps = {
  type: string
  className?: string
}

/** Maps category `type` to a PNG under /category-icons (official brand marks or generated abstracts). */
const ICON_BY_TYPE: Record<string, string> = {
  HTML: 'html.png',
  CSS: 'css.png',
  JS: 'js.png',
  TS: 'ts.png',
  React: 'react.png',
  RN: 'rn.png',
  Flutter: 'flutter.png',
  Vue: 'vue.png',
  Angular: 'angular.png',
  DOM: 'dom.png',
  State: 'state.png',
  Perf: 'perf.png',
  Network: 'network.png',
  Node: 'node.png',
  Backend: 'backend.png',
  Express: 'express.png',
  Nest: 'nest.png',
  Next: 'next.png',
  Mongo: 'mongo.png',
  SQL: 'sql.png',
  Postgres: 'postgres.png',
  Prisma: 'prisma.png',
  Drizzle: 'drizzle.png',
  Python: 'python.png',
  Django: 'django.png',
  Flask: 'flask.png',
  Rails: 'rails.png',
  Rust: 'rust.png',
  Go: 'go.png',
  'C#': 'csharp.png',
  ASP: 'asp.png',
  VB: 'vb.png',
  Algo: 'algo.png',
  DS: 'ds.png',
  Redis: 'redis.png',
  Files: 'files.png',
  Testing: 'testing.png',
  Tooling: 'tooling.png',
}

export function TopicVisual({ type, className }: TopicVisualProps) {
  const file = ICON_BY_TYPE[type] ?? 'default.png'
  return (
    <img
      src={`${import.meta.env.BASE_URL}category-icons/${file}`}
      alt=""
      aria-hidden={true}
      className={className}
      width={80}
      height={80}
      decoding="async"
      style={{ objectFit: 'cover' }}
    />
  )
}
