import type { Metadata } from 'next'
import { LegalPage, LegalSection, Pending } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Política de cookies',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
  return (
    <LegalPage title="Política de cookies" updated="octubre de 2026">
      <LegalSection title="1. Qué son las cookies">
        <p>
          Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo para recordar
          información sobre tu visita. Su uso está regulado por el artículo 22.2 de la LSSI-CE.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookies que utiliza este sitio">
        <p>
          Este prototipo no instala cookies de análisis, publicidad, seguimiento ni de redes
          sociales. Tampoco utiliza herramientas de medición de audiencia de terceros.
        </p>
        <p>
          Únicamente podrían utilizarse cookies técnicas estrictamente necesarias para el
          funcionamiento y la seguridad del sitio, que están exentas del deber de consentimiento.
          A la fecha, el sitio no establece ninguna.
        </p>
      </LegalSection>

      <LegalSection title="3. Cambios futuros">
        <p>
          Si en el futuro se incorporan cookies no necesarias, se mostrará un aviso para que puedas
          aceptarlas, rechazarlas o configurarlas antes de su instalación, y se actualizará esta
          política con su descripción: <Pending>tabla de cookies, si se añaden</Pending>.
        </p>
      </LegalSection>

      <LegalSection title="4. Cómo gestionar las cookies en tu navegador">
        <p>
          Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador
          (Chrome, Firefox, Safari, Edge u otros).
        </p>
      </LegalSection>

      <LegalSection title="5. Contacto">
        <p>
          Para cualquier duda sobre esta política, escribe a{' '}
          <a href="mailto:info@vaciaya.es" className="text-primary underline underline-offset-2">
            info@vaciaya.es
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
