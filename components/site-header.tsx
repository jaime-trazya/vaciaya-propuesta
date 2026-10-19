import Link from 'next/link'
import { Wordmark } from './wordmark'

const nav = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/#preguntas', label: 'Preguntas' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" aria-label="Vacía Ya, inicio">
          <Wordmark />
        </Link>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/#presupuesto-final"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="sm:hidden">Presupuesto</span>
          <span className="hidden sm:inline">Pide presupuesto gratis</span>
        </Link>
      </div>
    </header>
  )
}
