'use client'

import { useId, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Info, RotateCcw } from 'lucide-react'

const serviceOptions = [
  { value: 'completo', label: 'Vaciado completo' },
  { value: 'parcial', label: 'Vaciado parcial' },
]

const propertyOptions = ['Piso', 'Casa', 'Oficina', 'Local', 'Otro']

const fieldClass =
  'w-full rounded-md border border-input bg-card px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/25'

const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

export function QuoteForm({ title = 'Ficha del inmueble' }: { title?: string }) {
  const id = useId()
  const [previewed, setPreviewed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPreviewed(true)
  }

  function handleReset() {
    setPreviewed(false)
  }

  const f = (name: string) => `${id}-${name}`

  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-[0_1px_0_0_var(--border)]">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <h2 className="font-serif text-xl">{title}</h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Gratis</span>
      </div>

      <form onSubmit={handleSubmit} onReset={handleReset} className="flex flex-col gap-6 p-5">
        <fieldset className="flex flex-col gap-2">
          <legend className={labelClass}>
            Tipo de servicio <span className="text-primary">*</span>
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {serviceOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center justify-center rounded-md border border-input px-3 py-2.5 text-center text-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/40"
              >
                <input type="radio" name="servicio" value={opt.value} required className="sr-only" />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <legend className={labelClass}>
            Tipo de inmueble <span className="text-primary">*</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {propertyOptions.map((opt) => (
              <label
                key={opt}
                className="cursor-pointer rounded-full border border-input px-4 py-1.5 text-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/40"
              >
                <input type="radio" name="inmueble" value={opt.toLowerCase()} required className="sr-only" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={f('ubicacion')} className={labelClass}>
            Localidad o código postal <span className="text-primary">*</span>
          </label>
          <input
            id={f('ubicacion')}
            name="ubicacion"
            type="text"
            required
            autoComplete="postal-code"
            placeholder="Ej. Valencia o 46001"
            className={fieldClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor={f('fecha')} className={labelClass}>
              Fecha aproximada
            </label>
            <input id={f('fecha')} name="fecha" type="date" className={fieldClass} />
          </div>
          <div>
            <label htmlFor={f('superficie')} className={labelClass}>
              Superficie (m²)
            </label>
            <input
              id={f('superficie')}
              name="superficie"
              type="number"
              inputMode="numeric"
              min={1}
              max={10000}
              placeholder="Ej. 80"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={f('estancias')} className={labelClass}>
              Habitaciones o espacios
            </label>
            <input
              id={f('estancias')}
              name="estancias"
              type="number"
              inputMode="numeric"
              min={1}
              max={200}
              placeholder="Ej. 4"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="h-px bg-border" aria-hidden="true" />

        <div>
          <label htmlFor={f('nombre')} className={labelClass}>
            Nombre <span className="text-primary">*</span>
          </label>
          <input
            id={f('nombre')}
            name="nombre"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={f('telefono')} className={labelClass}>
              Teléfono <span className="text-primary">*</span>
            </label>
            <input
              id={f('telefono')}
              name="telefono"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9 +()-]{9,20}"
              title="Introduce un teléfono válido de al menos 9 dígitos"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={f('email')} className={labelClass}>
              Correo electrónico <span className="text-primary">*</span>
            </label>
            <input
              id={f('email')}
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={f('comentarios')} className={labelClass}>
            Muebles, objetos y circunstancias
          </label>
          <textarea
            id={f('comentarios')}
            name="comentarios"
            rows={4}
            maxLength={2000}
            placeholder="Ej. 3.º sin ascensor, dos armarios grandes, un sofá y cajas en el trastero."
            className={`${fieldClass} resize-y leading-relaxed`}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            name="consentimiento"
            required
            className="mt-1 size-4 shrink-0 accent-[var(--primary)]"
          />
          <span>
            Acepto que ANJA trate mis datos para gestionar mi solicitud y que los ceda a empresas de
            transporte y logística para que me envíen presupuesto.{' '}
            <Link href="/privacidad" className="text-primary underline underline-offset-2">
              Política de privacidad
            </Link>
            . <span className="text-primary">*</span>
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-5 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Pide presupuesto gratis
        </button>

        <div aria-live="polite">
          {previewed && (
            <div
              role="status"
              className="flex flex-col gap-3 rounded-md border border-foreground/20 bg-muted p-4 text-sm leading-relaxed"
            >
              <p className="flex items-start gap-2 font-medium">
                <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                Versión de demostración: esta solicitud no se ha enviado.
              </p>
              <p className="text-muted-foreground">
                El formulario es un prototipo visual. Los datos que has escrito no se han enviado,
                guardado ni compartido con nadie y permanecen solo en tu navegador.
              </p>
              <button
                type="reset"
                className="flex items-center gap-2 self-start text-primary underline underline-offset-2"
              >
                <RotateCcw aria-hidden="true" className="size-3.5" />
                Vaciar el formulario
              </button>
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          <span className="text-primary">*</span> Campos obligatorios
        </p>
      </form>
    </div>
  )
}
