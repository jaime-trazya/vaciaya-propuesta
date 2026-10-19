import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: '¿Qué datos tengo que indicar?',
    a: 'Lo esencial es el tipo de servicio (vaciado completo o parcial), el tipo de inmueble, la localidad o código postal y tus datos de contacto. La fecha aproximada, la superficie, el número de estancias y los comentarios son opcionales, pero ayudan a que el presupuesto se ajuste mejor a la realidad.',
  },
  {
    q: '¿Cómo puedo estimar el volumen a retirar?',
    a: 'No hace falta calcularlo con exactitud. Indica la superficie aproximada, cuántas habitaciones o espacios hay y si están llenos, a medias o casi vacíos. También es útil mencionar trasteros, garajes o terrazas con objetos, el piso en el que se encuentra y si hay ascensor.',
  },
  {
    q: '¿Puedo indicar muebles u objetos concretos?',
    a: 'Sí. En el campo de comentarios puedes enumerar los muebles u objetos que quieres retirar, por ejemplo un sofá, dos armarios o varios electrodomésticos. Si se trata de un vaciado parcial, explica qué debe quedarse en el inmueble.',
  },
  {
    q: '¿Puedo solicitar una fecha aproximada?',
    a: 'Sí. Puedes indicar la fecha en la que te gustaría que el espacio estuviera despejado. Es una referencia orientativa: la disponibilidad final dependerá de cada empresa y se concretará al hablar del presupuesto.',
  },
]

export function Faq() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow="Preguntas frecuentes" title="Antes de pedir presupuesto" />
        </div>
        <div className="lg:col-span-8">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group border-t border-border py-5 last:border-b [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl leading-snug sm:text-2xl">
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
