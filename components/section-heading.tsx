export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  inverse = false,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  inverse?: boolean
}) {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <p
        className={`text-xs font-medium uppercase tracking-[0.2em] ${inverse ? 'text-inverse-foreground/70' : 'text-primary'}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-balance font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`text-pretty leading-relaxed ${inverse ? 'text-inverse-foreground/80' : 'text-muted-foreground'}`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
