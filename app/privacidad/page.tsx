import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false, follow: false },
};
export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="21 de octubre de 2026">
      <p className="legal-prototype">
        El formulario está en modo demostración: los datos introducidos no se
        envían, guardan ni comparten. Esta página distingue ese funcionamiento
        actual del tratamiento previsto para un futuro servicio operativo.
      </p>
      <LegalSection title="1. Responsable">
        <p>
          ANJA.
          <br />
          C/ Doctor Simarro 3, 46800 Xàtiva.
          <br />
          Contacto:{" "}
          <a className="text-primary underline" href="mailto:info@vaciaya.es">
            info@vaciaya.es
          </a>
          .
        </p>
      </LegalSection>
      <LegalSection title="2. Qué ocurre en esta demostración">
        <p>
          Los datos se mantienen únicamente en los campos de la página abierta.
          Se usan en el navegador para comprobar que el formulario está completo
          y mostrar una confirmación de demostración. No hay conexión del
          formulario con un servidor, una base de datos, un correo electrónico
          ni empresas destinatarias.
        </p>
        <p>
          Puedes borrar los campos al finalizar con «Vaciar el formulario». No
          utilizamos almacenamiento local ni cookies para conservar su
          contenido. La casilla de consentimiento forma parte de la demostración
          y no activa ningún envío.
        </p>
      </LegalSection>
      <LegalSection title="3. Datos previstos para el servicio">
        <p>
          Si se activa el servicio, la solicitud incluiría el nombre, teléfono y
          correo electrónico, junto con el tipo de vaciado, tipo de inmueble,
          localidad o código postal, fecha aproximada, superficie, número de
          espacios y descripción de muebles u objetos.
        </p>
        <p>
          Los campos opcionales ayudan a describir el trabajo. No incluyas datos
          de terceros ni información sensible, como datos sobre salud o
          circunstancias personales delicadas.
        </p>
      </LegalSection>
      <LegalSection title="4. Finalidad y consentimiento previstos">
        <p>
          La finalidad prevista es gestionar la petición y comunicarla a
          empresas de vaciado, transporte y logística para que puedan contactar
          con la persona solicitante y preparar un presupuesto. El
          consentimiento se solicitaría mediante una casilla obligatoria,
          inicialmente desmarcada, con acceso a esta información.
        </p>
        <p>
          El consentimiento para esa finalidad no incluiría publicidad ni otras
          finalidades ajenas a la solicitud. La activación del servicio
          requerirá completar y verificar previamente la información del
          tratamiento.
        </p>
      </LegalSection>
      <LegalSection title="5. Comunicación a empresas">
        <p>
          En el servicio previsto, los destinatarios serían empresas de vaciado,
          transporte y logística que pudieran atender la petición en la
          ubicación indicada. La comunicación tendría como finalidad valorar el
          trabajo, contactar con la persona solicitante y remitir presupuesto.
        </p>
        <p>
          Actualmente no se comunica ningún dato del formulario. Antes de
          activar los envíos deberán concretarse los destinatarios, los
          proveedores tecnológicos, sus funciones y las garantías aplicables,
          incluidas las de posibles transferencias internacionales.
        </p>
      </LegalSection>
      <LegalSection title="6. Conservación">
        <p>
          La demostración no conserva los datos del formulario. Para el servicio
          futuro, ANJA deberá definir e informar del plazo de conservación y de
          los criterios aplicables a la gestión de solicitudes y a las
          responsabilidades legales, antes de comenzar a recoger datos.
        </p>
      </LegalSection>
      <LegalSection title="7. Derechos y contacto">
        <p>
          Puedes dirigirte a{" "}
          <a className="text-primary underline" href="mailto:info@vaciaya.es">
            info@vaciaya.es
          </a>{" "}
          para consultas sobre privacidad. En relación con tratamientos de datos
          personales, puedes solicitar acceso, rectificación, supresión,
          oposición, limitación y portabilidad cuando proceda, así como retirar
          el consentimiento.
        </p>
        <p>
          También puedes presentar una reclamación ante la{" "}
          <a
            className="text-primary underline"
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agencia Española de Protección de Datos
          </a>
          . La retirada del consentimiento no afecta a la licitud de un
          tratamiento previo basado en él.
        </p>
      </LegalSection>
      <LegalSection title="8. Antes de activar el servicio">
        <p>
          Esta política deberá actualizarse con la identificación completa del
          responsable y las condiciones reales del tratamiento antes de permitir
          solicitudes efectivas. Mientras tanto, cualquier confirmación del
          formulario indica expresamente que se trata de una demostración.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
