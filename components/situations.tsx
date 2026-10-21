import Image from "next/image";
const situations = [
  [
    "Una reforma en el horizonte",
    "Despejar las estancias para preparar el espacio antes de empezar una obra.",
  ],
  [
    "Un cambio de vivienda",
    "Retirar los muebles y objetos que no se trasladarán al nuevo hogar.",
  ],
  [
    "El cierre de un local",
    "Organizar el vaciado al finalizar una actividad o un alquiler.",
  ],
  [
    "Una nueva distribución",
    "Liberar una habitación, un despacho o ese espacio que quieres usar de otra manera.",
  ],
];
export function Situations() {
  return (
    <section
      className="situations-section section-space"
      aria-labelledby="situaciones-title"
    >
      <div className="section-shell situations-layout">
        <div className="situations-visual">
          <p className="eyebrow">03 / Situaciones habituales</p>
          <h2 id="situaciones-title">
            Hay muchas razones
            <br />
            para <em>hacer espacio.</em>
          </h2>
          <figure className="situations-photo">
            <Image
              src="/images/dormitorio-despejado.webp"
              alt="Interior despejado con paredes claras y luz natural"
              fill
              sizes="(min-width: 900px) 42vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
        <div className="situations-list">
          {situations.map(([title, text], index) => (
            <article key={title}>
              <span className="eyebrow" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
