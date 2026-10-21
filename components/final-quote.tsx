import { ArrowDownRight } from "lucide-react";
import { QuoteForm } from "./quote-form";
export function FinalQuote() {
  return (
    <section
      id="presupuesto-final"
      className="final-section section-space"
      aria-labelledby="final-title"
    >
      <div className="section-shell final-layout">
        <div className="final-copy">
          <p className="eyebrow">Un nuevo comienzo empieza aquí</p>
          <h2 id="final-title">
            Tu espacio.
            <br />
            Su próxima
            <br />
            <em>posibilidad.</em>
          </h2>
          <p>
            Cuéntanos qué necesitas vaciar.
            <br />
            El primer paso es así de sencillo.
          </p>
          <ArrowDownRight size={80} strokeWidth={0.7} aria-hidden="true" />
          <div className="final-footnote">
            Solicitar presupuesto es gratuito y no te obliga a contratar ningún
            servicio.
          </div>
        </div>
        <QuoteForm title="Hablemos de tu espacio" />
      </div>
    </section>
  );
}
