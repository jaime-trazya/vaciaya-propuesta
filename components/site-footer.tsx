import Link from 'next/link'
import { Wordmark } from './wordmark'

const legal = [
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]

export function SiteFooter() {
  return (
    <footer className="bg-inverse text-inverse-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-4">
          <Wordmark inverse />
          <p className="text-sm leading-relaxed text-inverse-foreground/70">
            Servicio de solicitud de presupuestos para vaciar pisos, casas, oficinas y locales.
            Titular: ANJA.
          </p>
        </div>
        <div className="flex flex-col gap-6 text-sm sm:flex-row sm:gap-16">
          <address className="flex flex-col gap-1 not-italic text-inverse-foreground/70">
            <span className="text-inverse-foreground">ANJA</span>
            <span>C/ Doctor Simarro 3</span>
            <span>46800 Xàtiva</span>
            <a href="mailto:info@vaciaya.es" className="underline underline-offset-2 hover:text-inverse-foreground">
              info@vaciaya.es
            </a>
          </address>
          <nav aria-label="Información legal">
            <ul className="flex flex-col gap-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-inverse-foreground/70 hover:text-inverse-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-inverse-foreground/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-inverse-foreground/60">
          {'© '}
          {new Date().getFullYear()} ANJA · Vacía Ya. Prototipo: el formulario no envía ni almacena
          datos.
        </p>
      </div>
    </footer>
  )
}
