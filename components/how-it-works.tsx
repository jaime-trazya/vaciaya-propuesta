import { SectionHeading } from './section-heading'

const steps = [
  {
    title: 'Describe el espacio',
    text: 'Indica el tipo de inmueble, dónde está, su superficie aproximada y qué contiene.',
  },
  {
    title: 'Gestionamos tu solicitud',
    text: 'ANJA revisa la información recibida y la organiza para que se entienda bien qué necesitas.',
  },
  {
    title: 'Recibe presupuesto',
    text: 'Empresas del sector pueden ponerse en contacto contigo para prepararte un presupuesto.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="como-title"
          eyebrow="Cómo funciona"
          title="Tres pasos, sin compromiso"
          intro="Vacía Ya es un servicio para solicitar presupuestos. Los trabajos los realizan, en su caso, las empresas que te presenten su propuesta."
        />

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4 border-t-2 border-primary pt-6">
              <span className="font-serif text-5xl italic leading-none text-primary" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="font-serif text-2xl">
                <span className="sr-only">Paso {i + 1}: </span>
                {step.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
