import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-12 md:py-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Volver al inicio
        </Link>
        <h1 className="text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Última actualización: {updated}</p>
        <div className="legal-content mt-10 flex flex-col gap-8 leading-relaxed text-foreground/90">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-serif text-2xl">{title}</h2>
      {children}
    </section>
  )
}

export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded-sm bg-primary/10 px-1 py-0.5 font-medium text-primary">
      [Pendiente: {children}]
    </mark>
  )
}
