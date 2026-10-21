import Image from "next/image";
import { ArrowDown, Check } from "lucide-react";
import { QuoteForm } from "./quote-form";
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="small-rule" /> Un espacio para lo que viene
        </p>
        <h1 id="hero-title">
          ¿Necesitas vaciar
          <br className="desktop-break" /> un <em>piso</em> o <em>local?</em>
        </h1>
        <p className="hero-intro">
          Cuéntanos qué espacio necesitas vaciar y solicita presupuesto de
          manera sencilla.
        </p>
        <div className="hero-assurances">
          <span>
            <Check size={15} aria-hidden="true" /> Solicitud gratuita
          </span>
          <span>
            <Check size={15} aria-hidden="true" /> Sin compromiso
          </span>
        </div>
      </div>
      <div id="presupuesto" className="hero-form">
        <QuoteForm />
      </div>
      <figure className="hero-image">
        <div className="image-wrap">
          <Image
            src="/images/hero-salon-vacio.webp"
            alt="Salón despejado con suelo hidráulico y balcones de madera abiertos a la luz"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption>
          <span>Menos objetos. Más posibilidades.</span>
          <span aria-hidden="true">VACÍA YA — 01</span>
        </figcaption>
      </figure>
      <a className="hero-discover" href="#servicios">
        <ArrowDown size={16} aria-hidden="true" /> Descubre cómo podemos
        orientarte
      </a>
    </section>
  );
}
