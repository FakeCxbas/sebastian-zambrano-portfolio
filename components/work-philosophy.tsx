import React from 'react';
import { Target, Layers, Cpu } from 'lucide-react';

const PRINCIPLES = [
  {
    number: '01',
    icon: Target,
    badge: 'PROBLEMAS REALES PRIMERO',
    title: 'Software con impacto operativo, no código en el vacío',
    description:
      'Mis primeros desarrollos nacieron en el mostrador de un taller electromecánico, viviendo en carne propia la fricción de un inventario desordenado y las demoras en facturar. Cada sistema que construyo parte de entender a fondo la operación para crear herramientas que ahorren tiempo y dinero desde el primer día.',
  },
  {
    number: '02',
    icon: Layers,
    badge: 'AUTONOMÍA DE PUNTA A PUNTA',
    title: 'Del levantamiento inicial hasta capacitar al usuario',
    description:
      'Disfruto y domino el ciclo completo: escuchar al usuario, estructurar la base de datos, maquetar interfaces ágiles, desplegar en producción y capacitar al personal in situ o en remoto. El código solo termina de tener valor cuando las personas del negocio lo utilizan con total confianza.',
  },
  {
    number: '03',
    icon: Cpu,
    badge: 'RIGOR & APRENDIZAJE CONTINUO',
    title: 'Fundamentos de ciencias de la computación y versatilidad',
    description:
      'Equilibro la formación universitaria nocturna (Ciencias de la Computación en la UEES) con la resolución práctica en producción. No tengo sesgos de tecnología: si la solución exige Flutter para móvil, Python y YOLO para visión artificial en Raspberry Pi, o React con TypeScript para la web, lo domino y lo pongo a funcionar.',
  },
];

export function WorkPhilosophy() {
  return (
    <div className="work-philosophy-wrapper">
      <div className="work-philosophy-header">
        <span className="eyebrow">ENFOQUE DE INGENIERÍA</span>
        <h3 className="work-philosophy-title">Cómo pienso y construyo software</h3>
        <p className="work-philosophy-subtitle">
          Tres principios que guían mi trabajo en cada proyecto, pasantía o equipo.
        </p>
      </div>

      <div className="work-philosophy-grid">
        {PRINCIPLES.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.number} className="philosophy-card">
              <div className="philosophy-card-top">
                <span className="philosophy-num">{item.number}</span>
                <div className="philosophy-icon-wrap">
                  <Icon size={18} />
                </div>
              </div>
              <span className="philosophy-badge">{item.badge}</span>
              <h4 className="philosophy-heading">{item.title}</h4>
              <p className="philosophy-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
