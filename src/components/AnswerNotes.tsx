type AnswerNotesProps = {
  lines: string[]
}

export function AnswerNotes({ lines }: AnswerNotesProps) {
  return (
    <ul className="m-0 grid max-w-[64ch] list-none gap-[0.45rem] p-0 max-sm:max-w-none">
      {lines.map((line) => (
        <li
          key={line}
          className="relative pl-[0.95rem] text-[0.98rem] leading-normal text-ink-soft [overflow-wrap:anywhere] before:absolute before:top-[0.58em] before:left-0 before:h-[0.32rem] before:w-[0.32rem] before:rounded-sm before:bg-accent-strong max-sm:text-[0.95rem]"
        >
          {line}
        </li>
      ))}
    </ul>
  )
}
