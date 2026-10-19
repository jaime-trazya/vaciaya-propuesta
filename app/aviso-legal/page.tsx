import type { Metadata } from 'next'
import { LegalPage, LegalSection, Pending } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Aviso legal',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="octubre de 2026">
      <LegalSection title="1. Datos identificativos">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del
          titular de este sitio web:
        </p>
        <ul className="flex list-disc flex-col gap-1 pl-5">
          <li>Titular: ANJA</li>
          <li>
            Forma jurídica: <Pending>forma jurídica</Pending>
          </li>
          <li>
            NIF/CIF: <Pending>NIF o CIF</Pending>
          </li>
          <li>Domicilio: C/ Doctor Simarro 3, 46800 Xàtiva (Valencia)</li>
          <li>
            Correo electrónico:{' '}
            <a href="mailto:info@vaciaya.es" className="text-primary underline underline-offset-2">
              info@vaciaya.es
            </a>
          </li>
          <li>
            Datos registrales: <Pending>inscripción en el Registro Mercantil, si procede</Pending>
          </li>
          <li>Sitio web: vaciaya.es</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Objeto del sitio web">
        <p>
          Vacía Ya es un servicio que permite a particulares y negocios solicitar presupuestos para
          el vaciado de pisos, casas, oficinas, locales y otros inmuebles, así como para la retirada
          de muebles y servicios relacionados.
        </p>
        <p>
          ANJA recibe y gestiona las solicitudes y podrá cederlas a empresas especializadas para que
          estas elaboren y remitan sus presupuestos. ANJA no ejecuta directamente los trabajos de
          vaciado ni es parte del contrato que, en su caso, el usuario celebre con dichas empresas.
        </p>
        <p>
          Esta versión del sitio es un prototipo: el formulario no envía, almacena ni cede ningún
          dato.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El acceso al sitio web es gratuito y atribuye la condición de usuario. El usuario se
          compromete a facilitar información veraz y a hacer un uso adecuado de los contenidos,
          absteniéndose de emplearlos para fines ilícitos o que puedan perjudicar a terceros.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Los textos, imágenes, diseño y demás elementos de este sitio web son titularidad de ANJA o
          se utilizan con la debida autorización. Queda prohibida su reproducción, distribución o
          transformación sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection title="5. Responsabilidad">
        <p>
          ANJA no garantiza que todas las solicitudes reciban presupuesto ni que exista cobertura en
          todas las localidades. Los precios, plazos y condiciones de los servicios son fijados
          exclusivamente por las empresas que, en su caso, presenten su presupuesto.
        </p>
      </LegalSection>

      <LegalSection title="6. Legislación aplicable">
        <p>
          Las presentes condiciones se rigen por la legislación española. Para cualquier
          controversia, las partes se someterán a los juzgados y tribunales que correspondan
          conforme a la normativa aplicable en materia de consumidores y usuarios.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
