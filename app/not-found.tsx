import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-glow" aria-hidden="true" />
      <div className="not-found-card">
        <span className="not-found-badge">ERROR 404 · RUTA NO ENCONTRADA</span>
        <h1 className="not-found-code">404</h1>
        <h2>Página no encontrada</h2>
        <p className="not-found-desc">
          La página que buscas no existe o ha sido movida. Puedes volver al portafolio principal para ver mis proyectos y experiencia.
        </p>
        <p className="not-found-desc-en">
          The page you are looking for doesn&apos;t exist or has been relocated.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="primary-link">
            <span>Volver al inicio / Back to Home</span>
            <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/cv" className="cv-view-link">
            <span>Ver Curriculum Vitae (CV)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
