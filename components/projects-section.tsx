'use client';

import { useState, useRef, useEffect } from 'react';
import { ProjectPreview } from '@/components/project-preview';
import { ProjectModal } from '@/components/project-modal';
import { TechBadge } from '@/components/tech-icons';
import { Layers, Sparkles, Monitor, Smartphone, Cpu, ExternalLink, Code2 } from 'lucide-react';

export interface Project {
  name: string;
  type: string;
  category: 'web' | 'mobile' | 'desktop' | 'ai';
  text: string;
  stack: string;
  url?: string;
  aside?: string;
  originalIndex: number;
}

const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: Layers },
  { id: 'web', label: 'Web', icon: Sparkles },
  { id: 'mobile', label: 'Móvil', icon: Smartphone },
  { id: 'desktop', label: 'Escritorio', icon: Monitor },
  { id: 'ai', label: 'IA & Visión', icon: Cpu },
] as const;

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handlePointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest('.project-spotlight') as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
    };

    grid.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => grid.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return projects.length;
    return projects.filter(p => p.category === catId).length;
  };

  return (
    <section className="projects section" id="proyectos">
      <div className="section-title">
        <span className="eyebrow">01 / TRABAJO SELECCIONADO</span>
        <h2>Cada proyecto tiene<br /><em>su historia.</em></h2>
        <p>Un taller, un local de fresas con crema, una consultora. Los contextos cambian; mi trabajo es entender qué necesita cada uno y llevarlo a una aplicación que puedan usar.</p>
      </div>

      {/* Barra de Filtros Interactivos */}
      <div className="project-filter-bar" role="tablist" aria-label="Filtrar proyectos por categoría">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon;
          const count = getCategoryCount(cat.id);
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`filter-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <Icon size={14} aria-hidden="true" />
              <span>{cat.label}</span>
              <span className="filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Cuadrícula de Proyectos con Spotlight */}
      <div className="project-grid" ref={gridRef}>
        {filteredProjects.map((project) => {
          const techList = project.stack.split(' / ').map(t => t.trim());
          const isFeatured = project.originalIndex === 0;

          return (
            <article
              className={`project project-${project.originalIndex} project-spotlight ${isFeatured ? 'is-featured' : ''}`}
              key={project.name}
            >
              <div
                className="project-preview-trigger"
                onClick={() => setSelectedProject(project.name)}
                title="Haz clic para abrir la ficha técnica"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project.name);
                  }
                }}
              >
                <ProjectPreview index={project.originalIndex} />
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{String(project.originalIndex + 1).padStart(2, '0')}</span>
                </div>

                <h3
                  className="project-title-clickable"
                  onClick={() => setSelectedProject(project.name)}
                  title="Haz clic para ver detalles del proyecto"
                >
                  {project.name}
                  {project.aside && <span className="project-aside">{project.aside}</span>}
                </h3>

                <p>{project.text}</p>

                {/* Micro-badges de stack tecnológico */}
                <div className="tech-badge-container" aria-label="Tecnologías utilizadas">
                  {techList.map(tech => (
                    <TechBadge key={tech} name={tech} variant="card" />
                  ))}
                </div>

                {/* Acciones de pie de tarjeta: Ficha & Código y Visitar */}
                <div className="project-footer-actions">
                  <button
                    type="button"
                    className="project-code-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project.name);
                    }}
                    title={`Ver ficha técnica y código de ${project.name}`}
                  >
                    <Code2 size={13} />
                    <span>Ficha & Código</span>
                  </button>

                  {project.url && !project.url.includes('github.com') && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-action"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Visitar</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal interactivo de ficha técnica */}
      <ProjectModal
        projectName={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(name) => setSelectedProject(name)}
      />
    </section>
  );
}
