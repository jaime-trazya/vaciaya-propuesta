import Image from 'next/image'
import { QuoteForm } from './quote-form'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-12 pt-8 md:pt-14 lg:grid-cols-12 lg:gap-12 lg:pb-20">
        <div className="flex flex-col gap-6 lg:col-span-6 lg:pt-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Solicitud de presupuestos de vaciado
          </p>
          <h1
            id="hero-title"
            className="text-balance font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            ¿Necesitas vaciar un <em className="text-primary">piso</em> o{' '}
            <em className="text-primary">local</em>?
          </h1>
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Describe el inmueble, lo que contiene y cuándo te gustaría tenerlo despejado. Con esa
            información, empresas especializadas pueden prepararte un presupuesto sin compromiso.
          </p>

          <figure className="relative hidden aspect-[4/5] overflow-hidden rounded-lg lg:block">
            <Image
              src="/images/hero-salon-vacio.png"
              alt="Salón vacío con suelo hidráulico y luz entrando por los balcones"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>

        <div id="presupuesto" className="lg:col-span-6 lg:sticky lg:top-24 lg:self-start">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
