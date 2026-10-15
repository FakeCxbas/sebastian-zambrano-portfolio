'use client';

import { useState, useRef, useEffect } from 'react';
import { ProjectPreview } from '@/components/project-preview';
import { ProjectModal } from '@/components/project-modal';
import { TechBadge } from '@/components/tech-icons';
import { useLanguage } from '@/lib/i18n';
import { Layers, Globe, Monitor, Smartphone, Cpu, ExternalLink, Code2, Sparkles } from 'lucide-react';

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

const PROJECT_THEMES: Record<string, { accent: string; glow: string; border: string }> = {
  'ContaNova': {
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.25)',
    border: 'rgba(16, 185, 129, 0.4)',
  },
  'Taller Jeldes': {
    accent: '#0ea5e9',
    glow: 'rgba(14, 165, 233, 0.25)',
    border: 'rgba(14, 165, 233, 0.4)',
  },
  'MxCorreo': {
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.25)',
    border: 'rgba(245, 158, 11, 0.4)',
  },
  'San Viernes & Billar Club': {
    accent: '#f97316',
    glow: 'rgba(249, 115, 22, 0.25)',
    border: 'rgba(249, 115, 22, 0.4)',
  },
  'SmartDocs': {
    accent: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.25)',
    border: 'rgba(139, 92, 246, 0.4)',
  },
  'TechView': {
    accent: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.3)',
    border: 'rgba(6, 182, 212, 0.45)',
  },
  'Strawberry Sweet Serve': {
    accent: '#f43f5e',
    glow: 'rgba(244, 63, 94, 0.25)',
    border: 'rgba(244, 63, 94, 0.4)',
  },
  'Actuariosa Web': {
    accent: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.25)',
    border: 'rgba(59, 130, 246, 0.4)',
  },
};

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const { t, locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: t.projects.filterAll, icon: Layers },
    { id: 'web', label: t.projects.filterWeb, icon: Globe },
    { id: 'mobile', label: t.projects.filterMobile, icon: Smartphone },
    { id: 'desktop', label: t.projects.filterDesktop, icon: Monitor },
    { id: 'ai', label: t.projects.filterAi, icon: Cpu },
  ] as const;

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
        <span className="eyebrow">{t.projects.eyebrow}</span>
        <h2>
          {t.projects.headingPart1}<br />
          <em>{t.projects.headingPart2}</em>
        </h2>
        <p>{t.projects.description}</p>
      </div>

      {/* Barra de Filtros Interactivos */}
      <div className="project-filter-bar" role="tablist" aria-label="Filtrar proyectos por categoría">
        {categories.map(cat => {
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

      {/* Cuadrícula de Proyectos con Spotlight y Temas Vibrantes */}
      <div className="project-grid" ref={gridRef}>
        {filteredProjects.map((project) => {
          const techList = project.stack.split(' / ').map(t => t.trim());
          const isFeatured = project.originalIndex === 0;
          const trans = t.projects.items[project.name] || {};
          const title = trans.name || project.name;
          const typeLabel = trans.type || project.type;
          const text = trans.text || project.text;
          const aside = trans.aside || project.aside;
          const theme = PROJECT_THEMES[project.name] || {
            accent: '#c6fa78',
            glow: 'rgba(198, 250, 120, 0.25)',
            border: 'rgba(198, 250, 120, 0.4)',
          };

          return (
            <article
              className={`project project-${project.originalIndex} project-spotlight ${isFeatured ? 'is-featured' : ''}`}
              key={project.name}
              style={{
                '--card-accent': theme.accent,
                '--card-glow': theme.glow,
                '--card-border-glow': theme.border,
              } as React.CSSProperties}
            >
              <div className="project-underglow" aria-hidden="true" />
              {isFeatured && (
                <div className="featured-banner">
                  <Sparkles size={11} className="featured-icon" />
                  <span>{t.projects.featuredBadge}</span>
                </div>
              )}

              <div
                className="project-preview-trigger"
                onClick={() => setSelectedProject(project.name)}
                title={locale === 'en' ? `Click to view ${title} technical sheet` : `Haz clic para abrir la ficha técnica de ${title}`}
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
                  <span className="project-type-tag" style={{ color: theme.accent }}>{typeLabel}</span>
                  <span className="project-num-tag">{String(project.originalIndex + 1).padStart(2, '0')}</span>
                </div>

                <h3
                  className="project-title-clickable"
                  onClick={() => setSelectedProject(project.name)}
                  title={locale === 'en' ? 'Click to inspect architecture and code' : 'Haz clic para ver detalles del proyecto'}
                >
                  {title}
                  {aside && <span className="project-aside">{aside}</span>}
                </h3>

                <p>{text}</p>

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
                    title={`${locale === 'en' ? 'Inspect architecture & code for' : 'Ver ficha técnica y código de'} ${title}`}
                  >
                    <Code2 size={13} style={{ color: theme.accent }} />
                    <span>{locale === 'en' ? 'Specs & Code' : 'Ficha & Código'}</span>
                  </button>

                  {project.url && !project.url.includes('github.com') && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-action"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>{locale === 'en' ? 'Live Demo' : 'Visitar'}</span>
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
