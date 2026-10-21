import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
const services = [
  {
    title: "Pisos",
    text: "Una vivienda que deja sitio a una nueva etapa.",
    image: "hero-salon-vacio",
    alt: "Estancia vacía de un piso con balcones y suelo de mosaico",
  },
  {
    title: "Casas",
    text: "Desde una estancia hasta la casa entera, incluidos sus anexos.",
    image: "dormitorio-despejado",
    alt: "Habitación despejada de una casa con contraventanas de madera",
  },
  {
    title: "Oficinas",
    text: "Despachos y espacios de trabajo que necesitan otro comienzo.",
    image: "oficina-vacia",
    alt: "Oficina diáfana con grandes ventanales y suelo continuo",
  },
  {
    title: "Locales comerciales",
    text: "Deja espacio para el próximo uso de tu local.",
    image: "local-vacio",
    alt: "Local comercial despejado y luminoso con escaparate acristalado",
  },
  {
    title: "Retirada de muebles",
    text: "También puedes pedir presupuesto para piezas concretas.",
    image: "pasillo-luz",
    alt: "Pasillo despejado que conecta las estancias de una vivienda",
  },
];
export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="section-space services-section"
    >
      <div className="section-shell">
        <div className="section-top">
          <SectionHeading
            id="servicios-title"
            eyebrow="01 / Cada espacio es distinto"
            title="Qué tipo de espacio necesitas vaciar"
          />
          <p className="section-aside">
            Un inmueble entero, una habitación o unos muebles. Empieza por
            contarnos qué necesitas.
          </p>
        </div>
        <div className="service-grid">
          {services.map((item, index) => (
            <a
              className="service-card"
              key={item.title}
              href="/#presupuesto-final"
            >
              <figure className="service-photo">
                <Image
                  src={"/images/" + item.image + ".webp"}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 700px) 45vw, 100vw"
                  className="object-cover"
                />
                <span className="photo-index" aria-hidden="true">
                  0{index + 1}
                </span>
              </figure>
              <div className="service-title">
                <h3>{item.title}</h3>
                <ArrowUpRight size={21} aria-hidden="true" />
              </div>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
