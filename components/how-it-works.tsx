import { ArrowDownRight } from "lucide-react";
const steps = [
  [
    "Describe el inmueble y los objetos",
    "Cuéntanos dónde está, qué quieres retirar y cuándo te vendría bien. No necesitas tener todos los detalles.",
  ],
  [
    "ANJA gestiona tu solicitud",
    "La información sirve para orientar tu petición hacia empresas del sector del vaciado, el transporte y la logística.",
  ],
  [
    "Las empresas pueden ofrecerte presupuesto",
    "Si pueden atender tu petición, podrán contactarte para concretar los detalles y presentarte su propuesta. Tú decides.",
  ],
];
export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="process-section section-space"
      aria-labelledby="como-title"
    >
      <div className="section-shell process-layout">
        <div className="process-intro">
          <p className="eyebrow">04 / Cómo funciona</p>
          <h2 id="como-title">
            El primer paso
            <br />
            es <em>contárnoslo.</em>
          </h2>
          <p>
            Vacía Ya conecta tu necesidad con empresas que pueden valorar el
            trabajo.
          </p>
          <ArrowDownRight
            className="process-arrow"
            size={66}
            strokeWidth={0.8}
            aria-hidden="true"
          />
          <p className="process-note">
            Servicio de intermediación de ANJA. Los trabajos se acuerdan
            directamente con la empresa elegida.
          </p>
        </div>
        <ol className="process-list">
          {steps.map(([title, text], index) => (
            <li key={title}>
              <span className="step-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>
                  <span className="sr-only">Paso {index + 1}: </span>
                  {title}
                </h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
