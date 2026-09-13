'use client';

export function StatusBadge() {
  return (
    <a
      href="#contacto"
      className="status-badge"
      aria-label="Estado: Disponible para desarrollo y proyectos. Clic para contactar."
    >
      <span className="status-ping-wrapper">
        <span className="status-ping" />
        <span className="status-dot" />
      </span>
      <span className="status-text">Disponible para trabajar</span>
    </a>
  );
}
