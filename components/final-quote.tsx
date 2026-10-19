import { QuoteForm } from './quote-form'

export function FinalQuote() {
  return (
    <section
      id="presupuesto-final"
      aria-labelledby="final-title"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Presupuesto
          </p>
          <h2
            id="final-title"
            className="text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl"
          >
            Cuéntanos qué espacio quieres despejar
          </h2>
          <p className="max-w-md leading-relaxed text-primary-foreground/80">
            Rellena la ficha con la información que tengas a mano. Solicitar presupuesto es gratuito
            y no te obliga a contratar ningún servicio.
          </p>
        </div>
        <div className="lg:col-span-7">
          <QuoteForm title="Solicita tu presupuesto" />
        </div>
      </div>
    </section>
  )
}
