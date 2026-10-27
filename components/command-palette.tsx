'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLanguage } from '@/lib/i18n';
import {
  Search,
  X,
  Code2,
  Compass,
  Zap,
  Mail,
  MessageCircle,
  FileText,
  Languages,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/tech-icons';

interface PaletteItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'projects' | 'navigation' | 'actions';
  badge?: string;
  icon: React.ElementType;
  action: () => void;
  keywords?: string[];
}

export function CommandPalette() {
  const { t, locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Escuchar Cmd+K / Ctrl+K y evento custom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('portfolio:open-cmd-k', handleCustomOpen);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('portfolio:open-cmd-k', handleCustomOpen);
    };
  }, [isOpen]);

  // Enfocar input al abrir
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setCopiedEmail(false);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const items: PaletteItem[] = useMemo(() => {
    const isEn = locale === 'en';

    const projects: PaletteItem[] = [
      {
        id: 'p-contanova',
        title: 'ContaNova',
        subtitle: isEn ? 'Commercial management & SRI electronic invoicing' : 'Facturación electrónica SRI & gestión comercial',
        category: 'projects',
        badge: 'Web · React / PostgreSQL',
        icon: Code2,
        keywords: ['contanova', 'react', 'postgresql', 'facturacion', 'sri', 'invoicing'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'ContaNova' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-techview',
        title: 'TechView',
        subtitle: isEn ? 'Smart assistive vision glasses with AI voice cues' : 'Gafas de asistencia visual con visión artificial y voz',
        category: 'projects',
        badge: 'IA · Python / YOLOv8 / OpenCV',
        icon: Code2,
        keywords: ['techview', 'opencv', 'yolo', 'python', 'vision artificial', 'raspberry pi', 'ia', 'ai'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'TechView' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-jeldes',
        title: 'Taller Jeldes',
        subtitle: isEn ? 'Mobile operations app for 15 mechanics & technicians' : 'App móvil para 15 técnicos mecánicos con control e IA',
        category: 'projects',
        badge: 'Mobile · Flutter / Dart',
        icon: Code2,
        keywords: ['jeldes', 'flutter', 'dart', 'mobile', 'móvil', 'taller'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'Taller Jeldes' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-mxcorreo',
        title: 'MxCorreo',
        subtitle: isEn ? 'High-volume data cleaning & verification (+132k rows)' : 'Saneamiento y clasificación masiva de datos (+132k filas)',
        category: 'projects',
        badge: 'Desktop · Python / SQLite',
        icon: Code2,
        keywords: ['mxcorreo', 'python', 'sqlite', 'datos', 'data', 'cleaning'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'MxCorreo' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-sanviernes',
        title: 'San Viernes & Billar Club',
        subtitle: isEn ? 'Commercial POS, tickets, table timers & mobile monitor' : 'Punto de venta comercial, tickets y monitoreo móvil',
        category: 'projects',
        badge: 'Desktop / Mobile · Electron / Capacitor',
        icon: Code2,
        keywords: ['san viernes', 'billar club', 'electron', 'capacitor', 'pos', 'desktop'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'San Viernes & Billar Club' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-smartdocs',
        title: 'SmartDocs',
        subtitle: isEn ? 'Client-side OCR document management system' : 'Gestión documental y reconocimiento óptico OCR',
        category: 'projects',
        badge: 'Web · React / Tesseract.js',
        icon: Code2,
        keywords: ['smartdocs', 'ocr', 'documentos', 'tesseract', 'react'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'SmartDocs' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-strawberry',
        title: 'Strawberry Sweet Serve',
        subtitle: isEn ? 'Custom orders & management app for strawberry shop' : 'Digitalización de pedidos y panel de gestión de local comercial',
        category: 'projects',
        badge: 'Web · React / TypeScript',
        icon: Code2,
        keywords: ['strawberry', 'pedidos', 'fresas con crema', 'react'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'Strawberry Sweet Serve' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-actuariosa',
        title: 'Actuariosa Web',
        subtitle: isEn ? 'Corporate actuarial consultancy landing & lead quotes' : 'Sitio corporativo y captación de cotizaciones actuariales',
        category: 'projects',
        badge: 'Web · Responsive CSS',
        icon: Code2,
        keywords: ['actuariosa', 'web', 'consultoria'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'Actuariosa Web' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-omninote',
        title: 'OmniNote STEM',
        subtitle: isEn ? 'GPU-accelerated technical canvas and math calculation engine' : 'Motor vectorial de cálculo técnico y notas con soporte Wacom',
        category: 'projects',
        badge: 'Desktop · C++20 / Qt 6 / OpenGL',
        icon: Code2,
        keywords: ['omninote', 'stem', 'c++', 'qt', 'opengl', 'calculo', 'wacom', 'matematicas'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'OmniNote STEM' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'p-swiftpiano',
        title: 'SwiftPiano',
        subtitle: isEn ? 'Real-time 88-key piano synthesizer with GLSL bloom shaders' : 'Sintetizador 2D de piano de 88 teclas con shaders y audio real',
        category: 'projects',
        badge: 'Desktop · Godot 4 / GDScript',
        icon: Code2,
        keywords: ['swiftpiano', 'piano', 'godot', 'sintetizador', 'midi', 'shaders', 'musica'],
        action: () => {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: 'SwiftPiano' } }));
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
    ];

    const navigation: PaletteItem[] = [
      {
        id: 'nav-inicio',
        title: isEn ? 'Go to Home' : 'Ir al Inicio',
        subtitle: isEn ? 'Top banner & summary presentation' : 'Presentación principal y resumen',
        category: 'navigation',
        icon: Compass,
        action: () => {
          document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'nav-proyectos',
        title: isEn ? 'Jump to Projects' : 'Ver Sección de Proyectos',
        subtitle: isEn ? 'Full catalogue of production and academic systems' : 'Catálogo de proyectos en producción y académicos',
        category: 'navigation',
        icon: Compass,
        action: () => {
          document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'nav-sobremi',
        title: isEn ? 'About Me & Engineering DNA' : 'Sobre Mí & Enfoque de Ingeniería',
        subtitle: isEn ? 'Philosophy, daily stack, and working culture' : 'Filosofía, stack diario y metodología de trabajo',
        category: 'navigation',
        icon: Compass,
        action: () => {
          document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'nav-trayectoria',
        title: isEn ? 'Experience & Education' : 'Trayectoria & Educación',
        subtitle: isEn ? 'Professional journey and engineering degree' : 'Línea de tiempo laboral y formación académica',
        category: 'navigation',
        icon: Compass,
        action: () => {
          document.getElementById('trayectoria')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
      {
        id: 'nav-contacto',
        title: isEn ? 'Contact Sebastián' : 'Contacto Directo',
        subtitle: isEn ? 'Email, WhatsApp, social networks and hiring' : 'Correo, WhatsApp, redes sociales y contratación',
        category: 'navigation',
        icon: Compass,
        action: () => {
          document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        },
      },
    ];

    const actions: PaletteItem[] = [
      {
        id: 'act-email',
        title: copiedEmail ? (isEn ? 'Email Copied!' : '¡Correo Copiado!') : (isEn ? 'Copy Email Address' : 'Copiar Correo Electrónico'),
        subtitle: 'sebastianzambrano2818@gmail.com',
        category: 'actions',
        icon: copiedEmail ? Check : Mail,
        badge: isEn ? 'Quick Copy' : 'Copia rápida',
        action: () => {
          navigator.clipboard?.writeText('sebastianzambrano2818@gmail.com').catch(() => {});
          setCopiedEmail(true);
          setTimeout(() => {
            setCopiedEmail(false);
            setIsOpen(false);
          }, 700);
        },
      },
      {
        id: 'act-whatsapp',
        title: isEn ? 'Chat via WhatsApp' : 'Enviar Mensaje por WhatsApp',
        subtitle: '+593 99 813 4331 · ' + (isEn ? 'Instant direct reply' : 'Respuesta ágil'),
        category: 'actions',
        icon: MessageCircle,
        badge: 'WhatsApp',
        action: () => {
          window.open('https://wa.me/593998134331?text=Hola%20Sebasti%C3%A1n%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.', '_blank');
          setIsOpen(false);
        },
      },
      {
        id: 'act-cv',
        title: isEn ? 'View Curriculum Vitae (CV)' : 'Ver Hoja de Vida (CV)',
        subtitle: isEn ? 'Open printable PDF and qualifications' : 'Abrir versión completa para lectura o impresión',
        category: 'actions',
        icon: FileText,
        badge: 'PDF',
        action: () => {
          window.open('/cv', '_blank');
          setIsOpen(false);
        },
      },
      {
        id: 'act-github',
        title: 'GitHub (@FakeCxbas)',
        subtitle: isEn ? 'Explore repositories, commits & open source code' : 'Explorar repositorios, código abierto y actividad',
        category: 'actions',
        icon: GithubIcon,
        badge: 'External',
        action: () => {
          window.open('https://github.com/FakeCxbas', '_blank');
          setIsOpen(false);
        },
      },
      {
        id: 'act-linkedin',
        title: 'LinkedIn (Sebastián Zambrano)',
        subtitle: isEn ? 'Connect professionally and view recommendations' : 'Conectar en red profesional y trayectoria',
        category: 'actions',
        icon: LinkedinIcon,
        badge: 'External',
        action: () => {
          window.open('https://www.linkedin.com/in/sebasti%C3%A1n-paul-zambrano-inga-7700633ab/', '_blank');
          setIsOpen(false);
        },
      },
      {
        id: 'act-lang',
        title: isEn ? 'Cambiar a Español' : 'Switch to English',
        subtitle: isEn ? 'Alternar portafolio al idioma español' : 'Toggle portfolio language to English',
        category: 'actions',
        icon: Languages,
        badge: locale.toUpperCase(),
        action: () => {
          setLocale(locale === 'es' ? 'en' : 'es');
          setIsOpen(false);
        },
      },
    ];

    return [...projects, ...navigation, ...actions];
  }, [locale, setLocale, copiedEmail]);

  // Filtrar según query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase().trim();
    return items.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle.toLowerCase().includes(q);
      const matchBadge = item.badge?.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchSubtitle || matchBadge || matchKeywords;
    });
  }, [items, query]);

  // Manejo de teclado (flechas y enter)
  const handleKeyDownInMenu = (e: React.KeyboardEvent) => {
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

  // Auto-scroll del item seleccionado
  useEffect(() => {
    if (!listRef.current) return;
    const selectedEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  // Reset index al cambiar query
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="cmd-palette-backdrop"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Paleta de comandos"
    >
      <div
        className="cmd-palette-modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownInMenu}
      >
        {/* Cabecera del Buscador */}
        <div className="cmd-palette-header">
          <Search size={18} className="cmd-palette-search-icon" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-palette-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={locale === 'en' ? 'Type a project, section, or action...' : 'Escribe un proyecto, sección o acción...'}
            aria-autocomplete="list"
          />
          {query ? (
            <button
              type="button"
              className="cmd-palette-clear"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Borrar búsqueda"
            >
              <X size={15} />
            </button>
          ) : (
            <kbd className="cmd-palette-esc-badge">ESC</kbd>
          )}
        </div>

        {/* Lista de Resultados */}
        <div ref={listRef} className="cmd-palette-list" role="listbox">
          {filteredItems.length === 0 ? (
            <div className="cmd-palette-empty">
              <Sparkles size={24} className="cmd-empty-icon" />
              <p>{locale === 'en' ? 'No matching commands or projects' : 'No se encontraron proyectos ni comandos'}</p>
              <span>{locale === 'en' ? 'Try searching for "React", "ContaNova", "WhatsApp" or "CV"' : 'Prueba buscando "React", "ContaNova", "WhatsApp" o "CV"'}</span>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={item.id}
                  data-index={idx}
                  className={`cmd-palette-item ${isSelected ? 'is-selected' : ''}`}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span className="cmd-item-icon-wrap">
                    <Icon size={16} />
                  </span>

                  <div className="cmd-item-content">
                    <div className="cmd-item-title-row">
                      <span className="cmd-item-title">{item.title}</span>
                      {item.badge && <span className="cmd-item-badge">{item.badge}</span>}
                    </div>
                    <span className="cmd-item-subtitle">{item.subtitle}</span>
                  </div>

                  <span className="cmd-item-arrow" aria-hidden="true">
                    ↵
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Pie con atajos de teclado */}
        <div className="cmd-palette-footer">
          <div className="cmd-footer-hints">
            <span className="cmd-hint">
              <kbd>↑</kbd> <kbd>↓</kbd> {locale === 'en' ? 'navigate' : 'navegar'}
            </span>
            <span className="cmd-hint">
              <kbd>↵</kbd> {locale === 'en' ? 'select' : 'seleccionar'}
            </span>
            <span className="cmd-hint">
              <kbd>esc</kbd> {locale === 'en' ? 'close' : 'cerrar'}
            </span>
          </div>

          <span className="cmd-footer-branding">
            <img
              src="/sz-monogram.svg"
              alt="SZ"
              width={14}
              height={14}
              style={{ borderRadius: '3px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
            />
            sz<span>.</span>dev
          </span>
        </div>
      </div>
    </div>
  );
}
