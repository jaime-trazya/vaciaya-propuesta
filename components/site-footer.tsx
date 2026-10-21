import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "./wordmark";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-top">
          <div>
            <Link href="/" title="Vacía Ya, inicio">
              <Wordmark />
            </Link>
            <p className="footer-description">
              Hacer espacio para lo que viene.
              <br />
              Solicitud de presupuestos de vaciado.
            </p>
          </div>
          <address>
            <span className="eyebrow">ANJA</span>
            <span>C/ Doctor Simarro 3</span>
            <span>46800 Xàtiva</span>
            <a href="mailto:info@vaciaya.es">
              info@vaciaya.es <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </address>
          <nav aria-label="Información legal">
            <span className="eyebrow">Información</span>
            <Link href="/aviso-legal">Aviso legal</Link>
            <Link href="/privacidad">Política de privacidad</Link>
            <Link href="/cookies">Política de cookies</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ANJA · Vacía Ya</p>
          <p>
            Prototipo de demostración. Los formularios no envían ni almacenan
            datos.
          </p>
          <a href="#contenido">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
