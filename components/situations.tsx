import Image from 'next/image'
import { SectionHeading } from './section-heading'

const situations = [
  {
    title: 'Antes de una reforma',
    text: 'Despejar las estancias para que la obra pueda empezar sin muebles de por medio.',
  },
  {
    title: 'Cambio de vivienda',
    text: 'Cuando te mudas y hay muebles u objetos que no vas a llevarte al nuevo hogar.',
  },
  {
    title: 'Cierre de un negocio',
    text: 'Oficinas y locales que deben entregarse vacíos al finalizar una actividad o un alquiler.',
  },
  {
    title: 'Viviendas que deben quedar despejadas',
    text: 'Herencias, pisos para vender o alquilar, o casas que llevan tiempo cerradas.',
  },
]

export function Situations() {
  return (
    <section
      aria-labelledby="situaciones-title"
      className="bg-inverse py-16 text-inverse-foreground md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <SectionHeading
            id="situaciones-title"
            eyebrow="Situaciones habituales"
            title="Cuando un espacio necesita volver a empezar"
            inverse
          />
          <figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/local-vacio.png"
              alt="Local comercial vacío con escaparate de cristal y suelo de terrazo"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>

        <ul className="grid gap-px self-end overflow-hidden rounded-lg bg-inverse-foreground/15 sm:grid-cols-2 lg:col-span-7">
          {situations.map((s) => (
            <li key={s.title} className="flex flex-col gap-3 bg-inverse p-6 md:p-8">
              <h3 className="text-balance font-serif text-2xl">{s.title}</h3>
              <p className="leading-relaxed text-inverse-foreground/75">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
