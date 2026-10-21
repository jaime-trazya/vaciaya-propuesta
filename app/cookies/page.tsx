import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: false, follow: false },
};
export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="21 de octubre de 2026">
      <LegalSection title="1. Qué son las cookies">
        <p>
          Las cookies son pequeños archivos que un sitio web puede guardar en el
          dispositivo para recordar información sobre la visita o permitir
          determinadas funciones.
        </p>
      </LegalSection>
      <LegalSection title="2. Funcionamiento de este prototipo">
        <p>
          Esta demostración no instala cookies de publicidad, análisis,
          seguimiento o redes sociales. No incorpora herramientas de medición de
          audiencia ni integraciones de terceros que realicen ese seguimiento.
        </p>
        <p>
          La aplicación tampoco utiliza cookies, almacenamiento local o
          almacenamiento de sesión para guardar los datos del formulario. Las
          fuentes y las imágenes se sirven desde el propio sitio.
        </p>
      </LegalSection>
      <LegalSection title="3. Preferencias">
        <p>
          Al no incorporar cookies no esenciales, el prototipo no muestra un
          panel de aceptación. Puedes gestionar o eliminar las cookies de
          cualquier sitio desde los ajustes de privacidad de tu navegador.
        </p>
      </LegalSection>
      <LegalSection title="4. Cambios futuros">
        <p>
          Si se añadieran funciones que utilicen cookies, esta política deberá
          actualizarse con su finalidad, duración y proveedor. Las cookies no
          esenciales requerirán la elección correspondiente antes de instalarse.
        </p>
      </LegalSection>
      <LegalSection title="5. Contacto">
        <p>
          Responsable: ANJA.
          <br />
          C/ Doctor Simarro 3, 46800 Xàtiva.
          <br />
          Para consultas, escribe a{" "}
          <a className="text-primary underline" href="mailto:info@vaciaya.es">
            info@vaciaya.es
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
