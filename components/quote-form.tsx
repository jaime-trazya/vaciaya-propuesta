"use client";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type FocusEvent,
} from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  House,
  Info,
  LayoutGrid,
  MapPin,
  RotateCcw,
  Store,
} from "lucide-react";

type Errors = Record<string, string>;
const properties = [
  { value: "piso", label: "Piso", Icon: Building2 },
  { value: "casa", label: "Casa", Icon: House },
  { value: "oficina", label: "Oficina", Icon: LayoutGrid },
  { value: "local", label: "Local", Icon: Store },
  { value: "otro", label: "Otro", Icon: MapPin },
];
const firstFields = [
  "servicio",
  "inmueble",
  "ubicacion",
  "fecha",
  "superficie",
  "estancias",
];
const lastFields = [
  "nombre",
  "telefono",
  "email",
  "comentarios",
  "consentimiento",
];
function today() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
}
function errorFor(name: string, form: HTMLFormElement) {
  const data = new FormData(form);
  const value = String(data.get(name) ?? "").trim();
  if (name === "servicio" && !value)
    return "Elige un vaciado completo o parcial.";
  if (name === "inmueble" && !value) return "Selecciona el tipo de inmueble.";
  if (name === "ubicacion") {
    if (!value) return "Indica una localidad o un código postal.";
    if (/^\d+$/.test(value) && !/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(value))
      return "Escribe un código postal de cinco cifras, entre 01000 y 52999.";
    if (!/^\d+$/.test(value) && !/\p{L}/u.test(value))
      return "Escribe el nombre de una localidad.";
  }
  if (name === "fecha" && value && value < today())
    return "Elige una fecha de hoy en adelante.";
  if ((name === "superficie" || name === "estancias") && value) {
    const max = name === "superficie" ? 10000 : 200;
    if (
      !Number.isInteger(Number(value)) ||
      Number(value) < 1 ||
      Number(value) > max
    )
      return "Introduce un número entero entre 1 y " + max + ".";
  }
  if (name === "nombre" && value.length < 2)
    return "Escribe tu nombre (al menos dos caracteres).";
  if (
    name === "telefono" &&
    (!/^[+\d\s().-]+$/.test(value) ||
      value.replace(/\D/g, "").length < 9 ||
      value.replace(/\D/g, "").length > 15)
  )
    return "Introduce un teléfono de entre 9 y 15 dígitos.";
  if (name === "email") {
    const element = form.elements.namedItem(name) as HTMLInputElement;
    if (
      !value ||
      element.validity.typeMismatch ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    )
      return "Escribe un correo válido, como nombre@ejemplo.es.";
  }
  if (name === "consentimiento" && !data.has(name))
    return "Marca la casilla para completar la demostración.";
  return "";
}
export function QuoteForm({
  title = "Hablemos de tu espacio",
}: {
  title?: string;
}) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const stepTitle = useRef<HTMLHeadingElement>(null);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [previewed, setPreviewed] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const f = (name: string) => id + "-" + name;
  function validate(names: string[]) {
    const form = formRef.current!;
    const next: Errors = {};
    for (const name of names) {
      const message = errorFor(name, form);
      if (message) next[name] = message;
    }
    setErrors(next);
    if (Object.keys(next).length) {
      requestAnimationFrame(() => {
        const target = form.querySelector<HTMLElement>(
          '[name="' + Object.keys(next)[0] + '"]',
        );
        target?.focus();
      });
      return false;
    }
    return true;
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 0) {
      if (validate(firstFields)) {
        setStep(1);
        requestAnimationFrame(() => stepTitle.current?.focus());
      }
      return;
    }
    if (!validate(lastFields)) return;
    setPreviewed(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  }
  function blur(event: FocusEvent<HTMLFormElement>) {
    const target = event.target;
    if (!(
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
    ))
      return;
    if (target.type === "radio" || target.type === "checkbox") return;
    const message = errorFor(target.name, event.currentTarget);
    setErrors((previous) => ({ ...previous, [target.name]: message }));
  }
  function change(event: FormEvent<HTMLFormElement>) {
    setPreviewed(false);
    const target = event.target as HTMLInputElement;
    const form = event.currentTarget;
    if (errors[target.name])
      setErrors((previous) => ({
        ...previous,
        [target.name]: errorFor(target.name, form),
      }));
  }
  const error = (name: string) =>
    errors[name] ? (
      <p id={f(name + "-error")} className="field-error">
        {errors[name]}
      </p>
    ) : null;
  function input(
    name: string,
    label: string,
    type = "text",
    props: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) {
    return (
      <div className="field">
        <label htmlFor={f(name)}>
          {label}
          {props.required ? <span aria-hidden="true"> *</span> : null}
        </label>
        <input
          id={f(name)}
          name={name}
          type={type}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? f(name + "-error") : undefined}
          {...props}
        />
        {error(name)}
      </div>
    );
  }
  return (
    <div className="quote-card">
      <div className="quote-heading">
        <div>
          <p className="eyebrow">Tu solicitud de presupuesto</p>
          <h2>{title}</h2>
        </div>
        <span className="free-label">Sin coste</span>
      </div>
      <form
        ref={formRef}
        noValidate
        onSubmit={submit}
        onBlur={blur}
        onChange={change}
        onReset={() => {
          setStep(0);
          setErrors({});
          setPreviewed(false);
          requestAnimationFrame(() => stepTitle.current?.focus());
        }}
      >
        <fieldset className="form-enabled" disabled={!ready}>
          <legend className="sr-only">
            Solicitud de presupuesto de demostración
          </legend>
          <div
            className="form-progress"
            aria-label={"Paso " + (step + 1) + " de 2"}
          >
            <span className={step === 0 ? "active" : "done"}>
              <b>{step === 1 ? <Check size={12} aria-hidden="true" /> : "1"}</b>{" "}
              Tu espacio
            </span>
            <i aria-hidden="true" />
            <span className={step === 1 ? "active" : ""}>
              <b>2</b> Tus datos
            </span>
          </div>
          <h3 className="sr-only" ref={stepTitle} tabIndex={-1}>
            {step === 0
              ? "Paso 1: Tu espacio"
              : "Paso 2: Tus datos de contacto"}
          </h3>
          <fieldset className="form-fields" hidden={step !== 0}>
            <legend className="sr-only">El espacio que quieres vaciar</legend>
            <fieldset className="choice-group">
              <legend>
                ¿Qué necesitas? <span aria-hidden="true">*</span>
              </legend>
              <div className="service-options">
                {[
                  { value: "completo", label: "Vaciado completo" },
                  { value: "parcial", label: "Vaciado parcial" },
                ].map((item) => (
                  <label key={item.value}>
                    <input
                      type="radio"
                      name="servicio"
                      value={item.value}
                      required
                      aria-invalid={Boolean(errors.servicio)}
                      aria-describedby={
                        errors.servicio ? f("servicio-error") : undefined
                      }
                    />
                    <span className="radio-dot" aria-hidden="true" />
                    {item.label}
                  </label>
                ))}
              </div>
              {error("servicio")}
            </fieldset>
            <fieldset className="choice-group">
              <legend>
                Tipo de inmueble <span aria-hidden="true">*</span>
              </legend>
              <div className="property-options">
                {properties.map(({ value, label, Icon }) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="inmueble"
                      value={value}
                      required
                      aria-invalid={Boolean(errors.inmueble)}
                      aria-describedby={
                        errors.inmueble ? f("inmueble-error") : undefined
                      }
                    />
                    <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              {error("inmueble")}
            </fieldset>
            {input("ubicacion", "Localidad o código postal", "text", {
              required: true,
              placeholder: "Ej. Xàtiva o 46800",
              autoComplete: "postal-code",
              maxLength: 100,
            })}
            {input("fecha", "Fecha aproximada", "date", {
              min: ready ? today() : undefined,
            })}
            <div className="form-columns">
              {input("superficie", "Superficie (m²)", "number", {
                min: 1,
                max: 10000,
                step: 1,
                inputMode: "numeric",
                placeholder: "Ej. 80",
              })}
              {input("estancias", "Habitaciones o espacios", "number", {
                min: 1,
                max: 200,
                step: 1,
                inputMode: "numeric",
                placeholder: "Ej. 4",
              })}
            </div>
            <p className="optional-note">
              Una estimación es suficiente. Los campos con * son obligatorios.
            </p>
          </fieldset>
          <fieldset className="form-fields" hidden={step !== 1}>
            <legend className="sr-only">Tus datos de contacto</legend>
            {input("nombre", "Nombre", "text", {
              required: true,
              autoComplete: "name",
              placeholder: "Cómo te llamas",
              maxLength: 100,
            })}
            <div className="form-columns contact-columns">
              {input("telefono", "Teléfono", "tel", {
                required: true,
                autoComplete: "tel",
                inputMode: "tel",
                placeholder: "Ej. 600 000 000",
                maxLength: 25,
              })}
              {input("email", "Correo electrónico", "email", {
                required: true,
                autoComplete: "email",
                placeholder: "nombre@ejemplo.es",
                maxLength: 254,
              })}
            </div>
            <div className="field">
              <label htmlFor={f("comentarios")}>
                Muebles, objetos y circunstancias{" "}
                <span className="optional-label">(opcional)</span>
              </label>
              <textarea
                id={f("comentarios")}
                name="comentarios"
                rows={3}
                maxLength={2000}
                placeholder="Ej. Un sofá, dos armarios y diez cajas. Tercera planta con ascensor."
              />
              <p className="optional-note">
                Indica qué quieres retirar y cómo es el acceso. Evita datos de
                terceros o información sensible.
              </p>
            </div>
            <div className="consent-field">
              <label>
                <input
                  type="checkbox"
                  name="consentimiento"
                  required
                  aria-invalid={Boolean(errors.consentimiento)}
                  aria-describedby={
                    errors.consentimiento
                      ? f("consentimiento-error")
                      : undefined
                  }
                />
                <span>
                  Acepto que ANJA trate mis datos para gestionar mi solicitud y
                  que los ceda a empresas de transporte y logística para que me
                  envíen presupuesto. *
                </span>
              </label>
              <Link
                href="/privacidad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de privacidad (se abre en otra pestaña)
              </Link>
              {error("consentimiento")}
            </div>
          </fieldset>
          {Object.values(errors).some(Boolean) ? (
            <p className="error-summary" role="alert">
              Revisa los campos indicados para continuar.
            </p>
          ) : null}
          <div className="form-actions">
            {step === 1 ? (
              <button
                className="back-button"
                type="button"
                aria-label="Atrás: volver al paso anterior"
                onClick={() => {
                  setStep(0);
                  setErrors({});
                  setPreviewed(false);
                  requestAnimationFrame(() => stepTitle.current?.focus());
                }}
              >
                <ArrowLeft size={17} aria-hidden="true" /> Atrás
              </button>
            ) : null}
            <button
              className="button form-submit"
              type="submit"
              disabled={!ready || previewed}
            >
              {step === 0
                ? "Continuar con mis datos"
                : "Pide presupuesto gratis"}
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
          <p className="demo-note">
            <Info size={14} aria-hidden="true" />
            <span>Modo demostración. No se envían ni se guardan datos.</span>
          </p>
          <div aria-live="polite">
            {previewed ? (
              <div
                ref={statusRef}
                tabIndex={-1}
                role="status"
                className="demo-success"
              >
                <Check size={22} aria-hidden="true" />
                <strong>
                  Demostración completada. No se ha enviado ninguna solicitud.
                </strong>
                <p>
                  Los datos no se han guardado ni compartido. Solo permanecen en
                  los campos de esta página hasta que los borres o la cierres.
                </p>
                <button type="reset" className="text-link">
                  <RotateCcw size={14} aria-hidden="true" /> Vaciar el
                  formulario
                </button>
              </div>
            ) : null}
          </div>
        </fieldset>
        <noscript>
          <p className="field-error">
            Activa JavaScript para probar el formulario. Esta demostración no
            envía datos.
          </p>
        </noscript>
      </form>
    </div>
  );
}
