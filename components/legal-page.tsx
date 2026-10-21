import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="section-shell legal-main">
        <Link href="/" className="legal-back">
          <ArrowLeft size={16} aria-hidden="true" /> Volver al inicio
        </Link>
        <div className="legal-layout">
          <nav className="legal-sidebar" aria-label="Documentos legales">
            <p className="eyebrow">Con toda claridad</p>
            <Link href="/aviso-legal">Aviso legal</Link>
            <Link href="/privacidad">Política de privacidad</Link>
            <Link href="/cookies">Política de cookies</Link>
          </nav>
          <div>
            <div className="legal-head">
              <p className="eyebrow">Vacía Ya / Información legal</p>
              <h1>{title}</h1>
              <p className="legal-date">Última actualización: {updated}</p>
            </div>
            <div className="legal-content">{children}</div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
