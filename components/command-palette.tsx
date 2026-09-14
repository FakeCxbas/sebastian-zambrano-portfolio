'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
  FolderGit2,
  X,
  Check,
  Code2,
} from 'lucide-react';

function GithubIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface CommandItem {
  id: string;
  category: 'projects' | 'actions' | 'navigation';
  title: string;
  subtitle?: string;
  badge?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  action: () => void;
}

interface CommandPaletteProps {
  onOpenProjectModal?: (index: number) => void;
}

export function CommandPalette({ onOpenProjectModal }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Escuchar atajo global Ctrl+K / Cmd+K y /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === '/' && !isOpen) {
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          e.preventDefault();
          setIsOpen(true);
        }
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Autofocus al abrir
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sebastianzambrano2818@gmail.com');
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1200);
    } catch {
      window.location.href = 'mailto:sebastianzambrano2818@gmail.com';
    }
  };

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (index: number) => {
    setIsOpen(false);
    if (onOpenProjectModal) {
      onOpenProjectModal(index);
    } else {
      scrollTo('proyectos');
    }
  };

  // Definición de ítems
  const items: CommandItem[] = [
    // Proyectos
    {
      id: 'proj-contanova',
      category: 'projects',
      title: 'ContaNova',
      subtitle: 'Gestión comercial, inventarios y facturación SRI en producción',
      badge: 'Web · React/Postgres',
      icon: FolderGit2,
      action: () => openModal(0),
    },
    {
      id: 'proj-jeldes',
      category: 'projects',
      title: 'Taller Jeldes',
      subtitle: 'App móvil y panel administrativo en Flutter para 15 usuarios',
      badge: 'Móvil · Flutter/Dart',
      icon: FolderGit2,
      action: () => openModal(1),
    },
    {
      id: 'proj-mxcorreo',
      category: 'projects',
      title: 'MxCorreo',
      subtitle: 'Automatización con Python y verificación DNS de +36k correos',
      badge: 'Escritorio · Python',
      icon: FolderGit2,
      action: () => openModal(2),
    },
    {
      id: 'proj-techview',
      category: 'projects',
      title: 'TechView',
      subtitle: 'Visión artificial (YOLOv8 + OpenCV) y asistencia por voz en Raspberry Pi',
      badge: 'IA · Mención de Honor 2026',
      icon: Code2,
      action: () => openModal(5),
    },
    {
      id: 'proj-billar',
      category: 'projects',
      title: 'San Viernes & Billar Club',
      subtitle: 'Control de tiempos, mesas y facturación para 2 locales comerciales',
      badge: 'Escritorio · Electron',
      icon: FolderGit2,
      action: () => openModal(3),
    },
    {
      id: 'proj-smartdocs',
      category: 'projects',
      title: 'SmartDocs',
      subtitle: 'OCR local y extracción de texto en el navegador con WebAssembly',
      badge: 'Web · OCR',
      icon: FolderGit2,
      action: () => openModal(4),
    },
    {
      id: 'proj-strawberry',
      category: 'projects',
      title: 'Strawberry Sweet Serve',
      subtitle: 'Terminal táctil de pedidos y panel para negocio gastronómico',
      badge: 'Web · React/TS',
      icon: FolderGit2,
      action: () => openModal(6),
    },
    {
      id: 'proj-actuariosa',
      category: 'projects',
      title: 'Actuariosa Web',
      subtitle: 'Portal corporativo para consultoría actuarial y cotizaciones',
      badge: 'Web · React/TS',
      icon: FolderGit2,
      action: () => openModal(7),
    },

    // Acciones Rápidas
    {
      id: 'action-cv',
      category: 'actions',
      title: 'Ver / Descargar CV (Hoja de Vida)',
      subtitle: 'Formato estándar ATS · Actualizado 2026',
      badge: 'PDF',
      icon: FileText,
      action: () => {
        setIsOpen(false);
        window.open('/cv', '_blank');
      },
    },
    {
      id: 'action-copy-email',
      category: 'actions',
      title: copied ? '¡Correo copiado al portapapeles!' : 'Copiar correo electrónico',
      subtitle: 'sebastianzambrano2818@gmail.com',
      badge: 'Copiar',
      icon: copied ? Check : Mail,
      action: copyEmail,
    },
    {
      id: 'action-linkedin',
      category: 'actions',
      title: 'Visitar perfil en LinkedIn',
      subtitle: 'Sebastián Paul Zambrano Inga',
      badge: 'Externo',
      icon: LinkedinIcon,
      action: () => {
        setIsOpen(false);
        window.open('https://www.linkedin.com/in/sebasti%C3%A1n-paul-zambrano-inga-7700633ab/', '_blank');
      },
    },
    {
      id: 'action-github',
      category: 'actions',
      title: 'Explorar repositorio en GitHub',
      subtitle: '@FakeCxbas',
      badge: 'Externo',
      icon: GithubIcon,
      action: () => {
        setIsOpen(false);
        window.open('https://github.com/FakeCxbas', '_blank');
      },
    },

    // Navegación
    {
      id: 'nav-proyectos',
      category: 'navigation',
      title: 'Ir a Proyectos',
      subtitle: '8 proyectos en producción y prototipos funcionales',
      icon: ArrowRight,
      action: () => scrollTo('proyectos'),
    },
    {
      id: 'nav-sobre-mi',
      category: 'navigation',
      title: 'Ir a Sobre Mí',
      subtitle: 'Métricas de impacto, habilidades y filosofía de ingeniería',
      icon: ArrowRight,
      action: () => scrollTo('sobre-mi'),
    },
    {
      id: 'nav-trayectoria',
      category: 'navigation',
      title: 'Ir a Trayectoria',
      subtitle: 'Línea de tiempo profesional y formación académica',
      icon: ArrowRight,
      action: () => scrollTo('trayectoria'),
    },
    {
      id: 'nav-contacto',
      category: 'navigation',
      title: 'Ir a Contacto',
      subtitle: 'Correo directo, disponibilidad y datos de contacto',
      icon: ArrowRight,
      action: () => scrollTo('contacto'),
    },
  ];

  // Filtrado
  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const cleanQuery = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(cleanQuery) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(cleanQuery)) ||
      (item.badge && item.badge.toLowerCase().includes(cleanQuery))
    );
  });

  // Manejo de teclas dentro de la paleta
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  // Scroll automático hacia el elemento seleccionado
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('.cmd-item.is-selected') as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Botón activador en la interfaz */}
      <button
        type="button"
        className="cmd-palette-trigger"
        onClick={() => setIsOpen(true)}
        title="Abrir paleta de comandos (Ctrl+K)"
        aria-label="Abrir buscador rápido"
      >
        <Search size={14} />
        <span className="cmd-trigger-text">Buscar...</span>
        <kbd className="cmd-kbd">⌘K</kbd>
      </button>

      {/* Modal flotante */}
      {isOpen && (
        <div
          className="cmd-palette-backdrop"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            className="cmd-palette-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Paleta de comandos"
          >
            {/* Cabecera del buscador */}
            <div className="cmd-search-bar">
              <Search size={18} className="cmd-search-icon" />
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                placeholder="Buscar proyecto, tecnología o acción..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
              />
              {query && (
                <button
                  type="button"
                  className="cmd-clear-btn"
                  onClick={() => {
                    setQuery('');
                    setSelectedIndex(0);
                    inputRef.current?.focus();
                  }}
                  title="Limpiar búsqueda"
                >
                  <X size={14} />
                </button>
              )}
              <kbd className="cmd-esc-badge" onClick={() => setIsOpen(false)}>
                ESC
              </kbd>
            </div>

            {/* Lista de resultados */}
            <div className="cmd-results-list" ref={listRef}>
              {filteredItems.length === 0 ? (
                <div className="cmd-empty-state">
                  <Sparkles size={24} />
                  <p>No se encontraron resultados para &ldquo;{query}&rdquo;</p>
                  <span>Prueba con: ContaNova, Flutter, CV, o Python</span>
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      className={`cmd-item ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="cmd-item-icon">
                        <Icon size={16} />
                      </div>
                      <div className="cmd-item-info">
                        <span className="cmd-item-title">{item.title}</span>
                        {item.subtitle && (
                          <span className="cmd-item-subtitle">{item.subtitle}</span>
                        )}
                      </div>
                      {item.badge && <span className="cmd-item-badge">{item.badge}</span>}
                    </div>
                  );
                })
              )}
            </div>

            {/* Pie con indicaciones de teclado */}
            <div className="cmd-palette-footer">
              <div className="cmd-keys-help">
                <span><kbd>↑</kbd> <kbd>↓</kbd> Navegar</span>
                <span><kbd>↵</kbd> Seleccionar</span>
                <span><kbd>ESC</kbd> Cerrar</span>
              </div>
              <span className="cmd-footer-tag">sz. command palette</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
