import { Plus } from "lucide-react";
const faqs = [
  [
    "¿Tengo que saber la superficie exacta?",
    "No. Una estimación de los metros cuadrados y del número de habitaciones es suficiente como orientación. Puedes dejar estos campos sin completar si no lo sabes y explicar en comentarios cuánto ocupa lo que quieres retirar.",
  ],
  [
    "¿Puedo solicitar un vaciado parcial?",
    "Sí. Selecciona «Vaciado parcial» y describe las habitaciones, los muebles o los objetos que quieres retirar. Indica también qué debe quedarse en el inmueble para que la empresa pueda valorar el alcance.",
  ],
  [
    "¿Cómo describo los muebles y objetos?",
    "Enumera las piezas principales, su cantidad y sus dimensiones aproximadas si las conoces. Por ejemplo: un sofá, dos armarios y diez cajas. Añade la planta, si hay ascensor y cualquier detalle sobre el acceso. Evita incluir datos personales de terceros.",
  ],
  [
    "¿Puedo proponer una fecha?",
    "Sí. La fecha aproximada es una referencia para valorar tu petición. La disponibilidad y el día del trabajo se acuerdan con la empresa que presente el presupuesto; no se garantiza una fecha por completar el formulario.",
  ],
  [
    "¿Quién gestiona la solicitud y quién hace el vaciado?",
    "ANJA gestiona el servicio de intermediación de Vacía Ya. Las empresas de vaciado, transporte y logística pueden valorar la solicitud y presentar su presupuesto. El trabajo y sus condiciones se contratan directamente con la empresa elegida.",
  ],
  [
    "¿Se envía algún dato en esta demostración?",
    "No. Este prototipo permite probar el formulario, pero no envía, guarda ni comparte los datos introducidos. Al terminar verás una confirmación que indica expresamente que se trata de una demostración.",
  ],
];
export function Faq() {
  return (
    <section
      id="preguntas"
      className="section-space faq-section"
      aria-labelledby="faq-title"
    >
      <div className="section-shell faq-layout">
        <div>
          <p className="eyebrow">05 / Resolvemos tus dudas</p>
          <h2 id="faq-title">
            Antes de
            <br />
            <em>hacer espacio.</em>
          </h2>
          <p className="faq-intro">
            Lo que conviene saber para describir tu solicitud con tranquilidad.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
