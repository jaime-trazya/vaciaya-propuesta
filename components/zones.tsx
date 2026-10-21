import { ArrowUpRight, MapPin } from "lucide-react";
export function Zones() {
  return (
    <section aria-labelledby="zonas-title" className="zones-section">
      <div className="section-shell zones-layout">
        <div className="zone-symbol" aria-hidden="true">
          <MapPin size={38} strokeWidth={1} />
        </div>
        <div>
          <p className="eyebrow">La ubicación importa</p>
          <h2 id="zonas-title">¿Dónde necesitas hacer espacio?</h2>
          <p>
            Indica tu localidad o código postal para poder valorar la petición.
            La posibilidad de recibir presupuesto depende de las empresas que
            puedan atenderla en esa zona.
          </p>
        </div>
        <a className="text-link" href="#presupuesto-final">
          Indicar mi localidad <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
