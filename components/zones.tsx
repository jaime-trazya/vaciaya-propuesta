import Image from 'next/image'
import { MapPin } from 'lucide-react'

export function Zones() {
  return (
    <section aria-labelledby="zonas-title" className="border-y border-border bg-muted">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <figure className="relative aspect-[3/2] overflow-hidden rounded-lg">
          <Image
            src="/images/pasillo-luz.png"
            alt="Pasillo vacío de una vivienda con luz natural al fondo"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div className="flex flex-col gap-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Zonas</p>
          <h2 id="zonas-title" className="text-balance font-serif text-3xl leading-tight sm:text-4xl">
            Indica dónde está el inmueble
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Escribe la localidad o el código postal en el formulario. La ubicación permite valorar
            qué empresas pueden atender la solicitud en esa zona.
          </p>
          <p className="flex items-start gap-3 rounded-md border border-border bg-card p-4 text-sm leading-relaxed">
            <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
            Puedes enviar tu solicitud desde cualquier punto de España. La disponibilidad depende de
            cada zona, por lo que no podemos garantizar cobertura en todas las localidades.
          </p>
        </div>
      </div>
    </section>
  )
}
