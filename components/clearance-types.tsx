import { ArrowUpRight } from "lucide-react";
export function ClearanceTypes() {
  return (
    <section
      className="section-space clearance-section"
      aria-labelledby="tipos-title"
    >
      <div className="section-shell">
        <div className="section-top">
          <div>
            <p className="eyebrow">02 / Tú decides hasta dónde</p>
            <h2 id="tipos-title">
              Todo el espacio.
              <br />
              <em>O solo una parte.</em>
            </h2>
          </div>
          <p className="section-aside">
            No todos los vaciados son iguales. Describe lo que quieres retirar y
            lo que debe quedarse.
          </p>
        </div>
        <div className="clearance-grid">
          {[
            {
              title: "Vaciado completo",
              text: "Para retirar los muebles y objetos del conjunto del inmueble. Indica también si hay trasteros, garajes o terrazas.",
              type: "complete",
              number: "A",
            },
            {
              title: "Vaciado parcial",
              text: "Para despejar algunas estancias o retirar piezas concretas. Explica qué objetos quieres conservar.",
              type: "partial",
              number: "B",
            },
          ].map((item) => (
            <article className="clearance-card" key={item.type}>
              <div className={"floorplan " + item.type} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <i />
              </div>
              <span className="plan-label" aria-hidden="true">
                {item.number} / EL ALCANCE
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#presupuesto-final" className="text-link">
                Describir mi espacio{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <p className="clearance-note">
          El alcance del trabajo y sus condiciones se concretan con la empresa
          que presente el presupuesto.
        </p>
      </div>
    </section>
  );
}
