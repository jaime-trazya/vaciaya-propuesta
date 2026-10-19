export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-baseline gap-1.5 font-serif text-xl leading-none tracking-tight">
      <span className={inverse ? 'text-inverse-foreground' : 'text-foreground'}>Vacía</span>
      <span className="italic text-primary">Ya</span>
      <span aria-hidden="true" className="ml-0.5 inline-block size-2 border border-primary" />
    </span>
  )
}
