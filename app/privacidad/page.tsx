import type { Metadata } from 'next'
import { LegalPage, LegalSection, Pending } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  robots: { index: false, follow: false },
}

const mail = (
  <a href="mailto:info@vaciaya.es" className="text-primary underline underline-offset-2">
    info@vaciaya.es
  </a>
)

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="octubre de 2026">
      <p className="rounded-md border border-border bg-muted p-4 text-sm">
        Esta web es actualmente un prototipo. El formulario no envía, almacena ni cede ningún dato.
        La presente política describe el tratamiento previsto cuando el servicio esté operativo.
      </p>

      <LegalSection title="1. Responsable del tratamiento">
        <ul className="flex list-disc flex-col gap-1 pl-5">
          <li>Responsable: ANJA</li>
          <li>
            NIF/CIF: <Pending>NIF o CIF</Pending>
          </li>
          <li>Domicilio: C/ Doctor Simarro 3, 46800 Xàtiva (Valencia)</li>
          <li>Correo electrónico: {mail}</li>
          <li>
            Delegado de Protección de Datos: <Pending>datos del DPD, si se designa</Pending>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Datos que se tratarán">
        <p>A través del formulario de presupuesto se recogerán:</p>
        <ul className="flex list-disc flex-col gap-1 pl-5">
          <li>Datos identificativos y de contacto: nombre, teléfono y correo electrónico.</li>
          <li>
            Datos del inmueble y del servicio: tipo de servicio, tipo de inmueble, localidad o código
            postal, fecha aproximada, superficie y número de estancias.
          </li>
          <li>
            Comentarios libres sobre muebles, objetos y circunstancias del inmueble. Te pedimos que
            no incluyas datos de categorías especiales (por ejemplo, de salud) ni datos de terceros.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalidades">
        <ul className="flex list-disc flex-col gap-1 pl-5">
          <li>Gestionar tu solicitud de presupuesto de vaciado y servicios relacionados.</li>
          <li>
            Ceder la solicitud a empresas del sector del vaciado, el transporte y la logística para
            que puedan contactarte y enviarte un presupuesto.
          </li>
          <li>Atender las consultas que nos dirijas.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Base jurídica">
        <p>
          El tratamiento y la cesión se basan en tu consentimiento (artículo 6.1.a del Reglamento
          (UE) 2016/679, RGPD), que otorgas al marcar la casilla del formulario. También en la
          aplicación de medidas precontractuales a petición tuya (artículo 6.1.b RGPD). Puedes
          retirar el consentimiento en cualquier momento, sin que ello afecte a la licitud del
          tratamiento previo.
        </p>
      </LegalSection>

      <LegalSection title="5. Destinatarios y cesiones">
        <p>
          Tus datos podrán cederse a empresas especializadas en vaciado de inmuebles, retirada de
          muebles, transporte y logística que operen en la zona del inmueble, con la única finalidad
          de que te remitan un presupuesto. Cada empresa destinataria tratará los datos como
          responsable independiente para esa finalidad.
        </p>
        <p>
          Categorías de destinatarios: <Pending>relación o categorías de empresas cesionarias</Pending>.
        </p>
        <p>
          También podrán acceder a los datos los proveedores tecnológicos que prestan servicios a
          ANJA (alojamiento web, correo electrónico) como encargados del tratamiento:{' '}
          <Pending>identificación de encargados del tratamiento</Pending>.
        </p>
        <p>
          Transferencias internacionales: <Pending>indicar si existen y las garantías aplicadas</Pending>.
        </p>
      </LegalSection>

      <LegalSection title="6. Plazo de conservación">
        <p>
          Los datos se conservarán durante el tiempo necesario para gestionar la solicitud y, en
          todo caso, hasta que retires tu consentimiento. Posteriormente se mantendrán bloqueados
          durante los plazos legales de prescripción de responsabilidades. Plazo concreto:{' '}
          <Pending>plazo de conservación</Pending>.
        </p>
      </LegalSection>

      <LegalSection title="7. Tus derechos">
        <p>
          Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del
          tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a {mail} o por
          correo postal a la dirección indicada, acompañando un documento que acredite tu identidad.
        </p>
        <p>
          Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una
          reclamación ante la Agencia Española de Protección de Datos (aepd.es).
        </p>
      </LegalSection>

      <LegalSection title="8. Obligatoriedad y veracidad">
        <p>
          Los campos marcados como obligatorios son necesarios para tramitar la solicitud. Si no se
          facilitan, no será posible gestionarla. Al enviar la solicitud garantizas que los datos
          son veraces y que eres mayor de 14 años.
        </p>
      </LegalSection>

      <LegalSection title="9. Seguridad">
        <p>
          ANJA aplicará las medidas técnicas y organizativas adecuadas para proteger los datos
          frente a su pérdida, uso indebido o acceso no autorizado.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
