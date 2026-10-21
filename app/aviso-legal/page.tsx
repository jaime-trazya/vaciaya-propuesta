import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: false },
};
export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="21 de octubre de 2026">
      <p className="legal-prototype">
        Esta web es un prototipo de demostración. Sus formularios no envían,
        almacenan ni comparten datos y no generan una solicitud real.
      </p>
      <LegalSection title="1. Titular y contacto">
        <p>
          Titular: ANJA.
          <br />
          Dirección: C/ Doctor Simarro 3, 46800 Xàtiva.
          <br />
          Contacto:{" "}
          <a className="text-primary underline" href="mailto:info@vaciaya.es">
            info@vaciaya.es
          </a>
          .<br />
          Sitio web: vaciaya.es.
        </p>
        <p>
          La información fiscal, societaria y registral que corresponda se
          completará con datos verificados antes de activar el servicio.
        </p>
      </LegalSection>
      <LegalSection title="2. Finalidad del sitio">
        <p>
          Vacía Ya presenta un servicio de solicitud de presupuestos para vaciar
          pisos, casas, oficinas y locales, así como para la retirada de
          muebles. El servicio previsto es de intermediación: ANJA gestionaría
          las solicitudes y las comunicaría a empresas de vaciado, transporte y
          logística para que pudieran valorarlas y ofrecer presupuesto.
        </p>
        <p>
          ANJA no ejecuta los trabajos de vaciado. Las condiciones, el alcance y
          la contratación del trabajo se acordarían directamente entre el
          usuario y la empresa elegida.
        </p>
      </LegalSection>
      <LegalSection title="3. Uso del prototipo">
        <p>
          El acceso a esta demostración es gratuito. Completar el formulario no
          supone contratar un servicio, reservar una fecha ni obtener un
          presupuesto real. No se garantiza cobertura en ninguna localidad ni la
          recepción de ofertas.
        </p>
        <p>
          Utiliza el sitio de manera responsable, sin introducir información
          sensible o datos de otras personas.
        </p>
      </LegalSection>
      <LegalSection title="4. Contenidos e imágenes">
        <p>
          Los textos, la identidad visual y las imágenes se presentan como parte
          de esta propuesta de diseño. Las fotografías de interiores son
          ilustrativas y no documentan trabajos realizados ni inmuebles de
          clientes.
        </p>
      </LegalSection>
      <LegalSection title="5. Presupuestos y condiciones">
        <p>
          El prototipo no publica precios ni plazos de ejecución. En el servicio
          previsto, cada empresa definiría su presupuesto, disponibilidad y
          condiciones tras valorar el inmueble y los objetos que deban
          retirarse. Solicitar presupuesto no obligaría a contratar.
        </p>
      </LegalSection>
      <LegalSection title="6. Información relacionada">
        <p>
          Consulta también la{" "}
          <a className="text-primary underline" href="/privacidad">
            política de privacidad
          </a>{" "}
          y la{" "}
          <a className="text-primary underline" href="/cookies">
            política de cookies
          </a>{" "}
          para conocer el funcionamiento de esta demostración.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
