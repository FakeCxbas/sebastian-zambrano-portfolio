'use client';

import React from 'react';

const previews = [
  {
    name: 'ContaNova',
    image: '/projects/contanova-dashboard.png',
    kind: 'Captura real · Dashboard',
    short: 'Facturación electrónica',
    color: '#91aefe',
  },
  {
    name: 'Taller Jeldes',
    image: '/projects/jeldes-dashboard.png',
    kind: 'Captura real · Panel administrativo',
    short: 'Trabajo de campo, conectado.',
    color: '#e7c663',
    logo: false,
  },
  {
    name: 'MxCorreo',
    image: '/projects/mxcorreo.png',
    kind: 'Captura real · Aplicación Windows',
    short: 'Del correo al dato limpio.',
    color: '#92c1cf',
  },
  {
    name: 'San Viernes & Billar Club',
    image: '/projects/billar.png',
    kind: 'Captura archivada · Billar Club',
    short: 'Control comercial',
    color: '#d8b38c',
  },
  {
    name: 'SmartDocs',
    image: '/projects/smartdocs-dashboard.png',
    kind: 'Captura real · Gestión documental',
    short: 'Documentos en su lugar.',
    color: '#b7a3e7',
  },
  {
    name: 'TechView',
    image: '/projects/techview-dashboard.jpg?v=2',
    kind: 'Interfaz del sistema · Visión artificial',
    short: 'Ver. Detectar. Orientar.',
    color: '#8cb8aa',
  },
  {
    name: 'Strawberry Sweet Serve',
    image: '/projects/strawberry-dashboard.jpg',
    kind: 'Interfaz táctil · Punto de venta',
    short: 'Cada pedido, a su ritmo.',
    color: '#d99bab',
  },
  {
    name: 'Actuariosa Web',
    image: '/projects/actuariosa.png',
    kind: 'Captura real · Propuesta web',
    short: 'Consultoría actuarial',
    color: '#88acd2',
  },
];

export function ProjectPreview({ index }: { index: number }) {
  const p = previews[index];
  if (!p) return null;

  return (
    <div
      className={`project-cover ${p.image ? 'has-image' : 'identity-cover'} ${p.logo ? 'logo-cover' : ''}`}
      style={{ '--cover-accent': p.color } as React.CSSProperties}
    >
      {p.image ? (
        <img src={p.image} alt={`${p.kind} de ${p.name}`} loading="lazy" width={1280} height={720} />
      ) : (
        <span className="cover-identity">
          <span className="identity-category">{p.kind}</span>
          <strong>{p.name}</strong>
          <span>{p.short}</span>
        </span>
      )}
      <span className="cover-label">{p.kind}</span>
    </div>
  );
}
