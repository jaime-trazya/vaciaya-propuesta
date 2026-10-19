import Image from 'next/image'
import { SectionHeading } from './section-heading'

const services = [
  {
    title: 'Pisos',
    text: 'Viviendas en altura, con o sin ascensor, que necesitan quedar libres de muebles y enseres.',
  },
  {
    title: 'Casas',
    text: 'Casas, chalets o viviendas de pueblo con varias plantas, trasteros, garajes o anexos.',
  },
  {
    title: 'Oficinas',
    text: 'Despachos y espacios de trabajo con mobiliario, archivadores, equipos y material acumulado.',
  },
  {
    title: 'Locales',
    text: 'Locales comerciales, almacenes o bajos que deben despejarse para un nuevo uso.',
  },
  {
    title: 'Retirada de muebles',
    text: 'Si solo quieres retirar algunos muebles u objetos concretos, puedes indicarlo en la solicitud.',
  },
]

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="servicios-title"
          eyebrow="Servicios"
          title="Qué puedes solicitar"
          intro="Puedes pedir presupuesto para vaciar un inmueble entero o solo una parte. Cuanto mejor lo describas, más ajustado podrá ser el presupuesto que recibas."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <ul className="flex flex-col lg:col-span-7">
            {services.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-1 border-t border-border py-6 last:border-b sm:flex-row sm:gap-8"
              >
                <h3 className="font-serif text-2xl sm:w-56 sm:shrink-0">{s.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 lg:col-span-5 lg:grid-cols-1">
            <figure className="relative aspect-[3/4] overflow-hidden rounded-lg lg:aspect-[4/3]">
              <Image
                src="/images/dormitorio-despejado.png"
                alt="Dormitorio vacío con contraventanas de madera entreabiertas"
                fill
                sizes="(min-width: 1024px) 35vw, 50vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-lg lg:aspect-[4/3]">
              <Image
                src="/images/oficina-vacia.png"
                alt="Oficina diáfana con suelo de hormigón y grandes ventanales"
                fill
                sizes="(min-width: 1024px) 35vw, 50vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
