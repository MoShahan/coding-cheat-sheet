import { getAnswerDisplayParts, isCodeBlock } from '../lib/formatAnswer'

type AnswerNotesProps = {
  lines: string[]
}

function AnswerCode({ value }: { value: string }) {
  const block = isCodeBlock(value)

  if (block) {
    return (
      <pre className="my-1.5 max-w-full min-w-0 overflow-x-auto rounded-lg bg-code-bg px-3 py-2.5 [overflow-wrap:normal] [word-break:normal]">
        <code className="block font-mono text-[0.84em] font-medium tracking-tight whitespace-pre text-code-fg leading-[1.55] [overflow-wrap:normal] [word-break:normal] [tab-size:2]">
          {value}
        </code>
      </pre>
    )
  }

  return (
    <code className="inline rounded-[0.35rem] bg-code-bg px-[0.35em] py-[0.12em] font-mono text-[0.84em] font-medium tracking-tight text-code-fg [overflow-wrap:normal] [word-break:normal]">
      {value}
    </code>
  )
}

export function AnswerNotes({ lines }: AnswerNotesProps) {
  return (
    <ul className="m-0 grid min-w-0 list-none gap-[0.55rem] p-0">
      {lines.map((line) => (
        <li
          key={line}
          className="relative min-w-0 pl-[0.95rem] text-[0.98rem] leading-normal text-ink-soft [overflow-wrap:anywhere] before:absolute before:top-[0.58em] before:left-0 before:h-[0.32rem] before:w-[0.32rem] before:rounded-sm before:bg-accent-strong max-sm:text-[0.95rem]"
        >
          {getAnswerDisplayParts(line).map((part, index) =>
            part.type === 'code' ? (
              <AnswerCode key={`${part.value}-${index}`} value={part.value} />
            ) : (
              <span key={`${part.value}-${index}`}>{part.value}</span>
            ),
          )}
        </li>
      ))}
    </ul>
  )
}
