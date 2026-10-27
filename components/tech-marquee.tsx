'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getTechMeta } from '@/components/tech-icons';
import { useLanguage } from '@/lib/i18n';
import { X, ExternalLink } from 'lucide-react';

interface TechDetail {
  name: string;
  category: { es: string; en: string };
  summary: { es: string; en: string };
  projects: string[];
}

export const TECH_CATALOG: Record<string, TechDetail> = {
  'React': {
    name: 'React',
    category: { es: 'Frontend', en: 'Frontend' },
    summary: {
      es: 'La uso para construir interfaces interactivas y modulares con custom hooks y estado reactivo. Es la base de ContaNova y SmartDocs para flujos complejos de facturación y documentos.',
      en: 'My core library for modular, state-driven interfaces. Powers ContaNova and SmartDocs to handle complex invoicing and client-side document processing.',
    },
    projects: ['ContaNova', 'SmartDocs', 'Strawberry Sweet Serve', 'San Viernes'],
  },
  'Next.js': {
    name: 'Next.js',
    category: { es: 'Full Stack & SSR', en: 'Full Stack & SSR' },
    summary: {
      es: 'Lo utilizo para sitios modernos con renderizado híbrido (RSC/SSR), optimización de fuentes y metadata dinámica en producción.',
      en: 'My choice for production web applications leveraging React Server Components, font optimization, and dynamic metadata pipelines.',
    },
    projects: ['Portafolio Personal', 'Actuariosa Web'],
  },
  'TypeScript': {
    name: 'TypeScript',
    category: { es: 'Lenguaje & Tipado', en: 'Language & Typing' },
    summary: {
      es: 'Imprescindible en mis proyectos comerciales. Modela contratos de datos y esquemas de facturación SRI para evitar errores en tiempo de ejecución.',
      en: 'Essential across all my commercial projects. Strictly models data contracts and tax schemas to prevent runtime bugs.',
    },
    projects: ['ContaNova', 'SmartDocs', 'San Viernes', 'Portafolio'],
  },
  'Python': {
    name: 'Python',
    category: { es: 'Backend & Datos', en: 'Backend & Data' },
    summary: {
      es: 'Mi herramienta principal para procesamiento masivo de datos (depuración de +136k registros de correo en MxCorreo), microservicios y visión artificial con YOLOv8.',
      en: 'My go-to language for high-volume data cleaning (+136k corporate emails in MxCorreo), backend microservices, and YOLOv8 computer vision.',
    },
    projects: ['MxCorreo', 'TechView', 'Actuariosa'],
  },
  'Flutter': {
    name: 'Flutter',
    category: { es: 'Móvil', en: 'Mobile' },
    summary: {
      es: 'Desarrollo de aplicaciones nativas en un solo código. Reconstruí la app de operaciones de Taller Jeldes para 15 mecánicos con fotos, reportes y control de asistencia.',
      en: 'Cross-platform mobile development from a single codebase. Rebuilt Taller Jeldes operations app for 15 technicians with photo logs and attendance.',
    },
    projects: ['Taller Jeldes'],
  },
  'PostgreSQL': {
    name: 'PostgreSQL',
    category: { es: 'Base de Datos', en: 'Database' },
    summary: {
      es: 'Base de datos relacional para ContaNova. Garantiza transacciones ACID, integridad referencial y control concurrente de inventario y facturación.',
      en: 'Relational engine powering ContaNova. Provides strict ACID compliance, referential integrity, and concurrent stock transactions.',
    },
    projects: ['ContaNova'],
  },
  'Electron': {
    name: 'Electron',
    category: { es: 'Escritorio', en: 'Desktop' },
    summary: {
      es: 'Empaquetado de aplicaciones web en ejecutables de escritorio para PC. Usado en San Viernes y Billar Club para control de mesas e impresión de tickets térmicos.',
      en: 'Packaging web apps into native desktop software. Deployed in San Viernes and Billar Club for table timers and thermal receipt printing.',
    },
    projects: ['San Viernes', 'Billar Club'],
  },
  'OpenCV': {
    name: 'OpenCV',
    category: { es: 'Visión Artificial', en: 'Computer Vision' },
    summary: {
      es: 'Procesamiento de video en tiempo real frame a frame. Desarrollé el software de las gafas TechView para estimar distancia a obstáculos con alertas por voz.',
      en: 'Real-time frame processing for video feeds. Developed the software inside TechView smart glasses to calculate obstacle distances with voice cues.',
    },
    projects: ['TechView'],
  },
  'Tailwind CSS': {
    name: 'Tailwind CSS',
    category: { es: 'Estilos', en: 'Styling' },
    summary: {
      es: 'Maquetación rápida y consistente con tokens de diseño, microinteracciones y temas oscuros con contraste cuidado.',
      en: 'Utility design workflow for consistent spacing, micro-interactions, dark mode tokens, and responsive layouts.',
    },
    projects: ['Portafolio', 'ContaNova', 'Strawberry Sweet Serve'],
  },
  'SQLite': {
    name: 'SQLite',
    category: { es: 'Base de Datos Embebida', en: 'Embedded DB' },
    summary: {
      es: 'Base de datos en un solo archivo para utilidades portables como MxCorreo, almacenando registros depurados y bitácoras sin requerir servidores.',
      en: 'Zero-config local database for portable tools like MxCorreo, caching sanitized emails and execution history with zero server dependencies.',
    },
    projects: ['MxCorreo', 'San Viernes'],
  },
  'Docker': {
    name: 'Docker',
    category: { es: 'Contenedores', en: 'DevOps' },
    summary: {
      es: 'Contenedores locales para bases de datos PostgreSQL y dependencias de prueba, asegurando paridad entre desarrollo y producción.',
      en: 'Containerized local PostgreSQL instances and testing environments, guaranteeing parity between local dev and cloud environments.',
    },
    projects: ['ContaNova Backend', 'Entornos de Prueba'],
  },
  'Raspberry Pi': {
    name: 'Raspberry Pi',
    category: { es: 'Hardware & IoT', en: 'Embedded IoT' },
    summary: {
      es: 'Hardware embebido para TechView: procesa la cámara, ejecuta las inferencias y transmite las indicaciones de audio al usuario en movimiento.',
      en: 'Wearable compute hardware for TechView: captures camera input, coordinates audio feedback, and assists users on the go.',
    },
    projects: ['TechView'],
  },
  'Vite': {
    name: 'Vite',
    category: { es: 'Compilador', en: 'Build Tool' },
    summary: {
      es: 'Entorno de compilación diario por su recarga en caliente instantánea y empaquetado optimizado para producción en ContaNova y SmartDocs.',
      en: 'My daily driver bundler for near-instant HMR and lean production builds across ContaNova and SmartDocs.',
    },
    projects: ['ContaNova', 'SmartDocs', 'Strawberry Sweet Serve', 'Portafolio'],
  },
  'Capacitor': {
    name: 'Capacitor',
    category: { es: 'Móvil Híbrido', en: 'Mobile Bridge' },
    summary: {
      es: 'Convierte interfaces web en apps para teléfono. Los propietarios de negocios la usan para revisar ventas e inventario desde Android.',
      en: 'Wraps modern web applications into native Android apps so business owners can track live sales and inventory from their phones.',
    },
    projects: ['San Viernes Monitor', 'Nexo Inventario'],
  },
  'Linux': {
    name: 'Linux',
    category: { es: 'Sistema Operativo', en: 'Operating System' },
    summary: {
      es: 'Mi sistema operativo diario. Manejo terminal Bash, scripts de automatización, servicios systemd y administración remota por SSH.',
      en: 'My daily workstation operating system. Regular use of Bash scripting, systemd service management, and SSH server operations.',
    },
    projects: ['Entorno Diario', 'Servidores de Producción'],
  },
  'Git': {
    name: 'Git',
    category: { es: 'Control de Versiones', en: 'Version Control' },
    summary: {
      es: 'Flujo de ramas, commits semánticos y control de versiones ordenado en cada uno de mis desarrollos individuales y colaborativos.',
      en: 'Feature branching, semantic commits, and disciplined version history across all individual and team projects.',
    },
    projects: ['Todos los proyectos'],
  },
  'GitHub': {
    name: 'GitHub',
    category: { es: 'CI/CD & Repositorios', en: 'CI/CD & Hosting' },
    summary: {
      es: 'Gestión central de repositorios, automatización de pruebas y despliegues continuos vinculados con Vercel.',
      en: 'Central repository hub, issue tracking, and automated CI/CD pipelines connected to Vercel production deployments.',
    },
    projects: ['Todos los proyectos'],
  },
  'FastAPI': {
    name: 'FastAPI',
    category: { es: 'Backend & APIs', en: 'Backend & APIs' },
    summary: {
      es: 'Microservicios en Python para procesamiento asíncrono y APIs con validación automática tipada mediante Pydantic.',
      en: 'High-performance async Python backend for batch data processing with automatic Pydantic validation.',
    },
    projects: ['Actuariosa APIs', 'Servicios de Datos'],
  },
  'C++': {
    name: 'C++',
    category: { es: 'Sistemas & Rendimiento', en: 'Systems & Performance' },
    summary: {
      es: 'Desarrollo de software nativo de alto rendimiento en C++20 con Qt 6 y OpenGL para el motor vectorial de apuntes técnicos y cálculo OmniNote STEM.',
      en: 'High-performance native software development in modern C++20 using Qt 6 and OpenGL for the OmniNote STEM vector calculus canvas.',
    },
    projects: ['OmniNote STEM'],
  },
  'Godot': {
    name: 'Godot Engine',
    category: { es: 'Motores & Gráficos 2D', en: 'Engines & 2D Graphics' },
    summary: {
      es: 'Motor de videojuegos y simuladores 2D/3D. Desarrollé el sintetizador SwiftPiano con 88 notas, shaders GLSL de halo aditivo y transcriptor MIDI en Vulkan.',
      en: '2D/3D game engine and simulation suite. Built the SwiftPiano real-time 88-key synth with custom GLSL bloom shaders and live MIDI transcription.',
    },
    projects: ['SwiftPiano'],
  },
};

const TECH_MARQUEE_ITEMS = Object.keys(TECH_CATALOG);

export function TechMarquee() {
  const { locale } = useLanguage();
  const isEn = locale === 'en';
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [displayedTech, setDisplayedTech] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleOpen = (item: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsClosing(false);
    setSelectedTech(item);
    setDisplayedTech(item);
  };

  const handleClose = () => {
    if (isClosing || !displayedTech) return;
    setIsClosing(true);
    setSelectedTech(null);

    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setDisplayedTech(null);
      setIsClosing(false);
      closeTimeoutRef.current = null;
    }, 220);
  };

  const handleToggle = (item: string) => {
    if (selectedTech === item && !isClosing) {
      handleClose();
    } else {
      handleOpen(item);
    }
  };

  // Close on Escape or click outside
  useEffect(() => {
    if (!displayedTech || isClosing) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (!cardRef.current) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (cardRef.current.contains(target) || target.closest('.marquee-item')) {
        return;
      }
      handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [displayedTech, isClosing]);

  const activeDetail = displayedTech ? TECH_CATALOG[displayedTech] : null;
  const activeMeta = activeDetail ? getTechMeta(activeDetail.name) : null;

  return (
    <div className="tech-marquee-wrapper">
      {/* Tira que se desliza continuamente */}
      <div
        className={`tech-marquee ${selectedTech ? 'is-paused' : ''}`}
        aria-label={`Tecnologías: ${TECH_MARQUEE_ITEMS.join(', ')}`}
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy}>
              {TECH_MARQUEE_ITEMS.map((item) => {
                const meta = getTechMeta(item);
                const Icon = meta.Icon;
                const isSelected = selectedTech === item;

                return (
                  <div key={`${copy}-${item}`} className="marquee-unit">
                    <button
                      type="button"
                      className={`marquee-item ${isSelected ? 'is-active-tech' : ''}`}
                      style={{
                        '--item-color': meta.color,
                        '--item-hover-bg': meta.hoverBg,
                        '--item-glow': meta.glow,
                      } as React.CSSProperties}
                      onClick={() => handleToggle(item)}
                      title={
                        isEn
                          ? `Click to see how I use ${item}`
                          : `Clic para ver cómo usé ${item}`
                      }
                      aria-expanded={isSelected}
                    >
                      <span className="marquee-item-icon">
                        <Icon size={19} />
                      </span>
                      <span className="marquee-item-name">{item}</span>
                    </button>
                    <span className="marquee-separator" aria-hidden="true">✦</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Popover con animación fluida de entrada y salida */}
      {activeDetail && activeMeta && (
        <div
          key={displayedTech}
          ref={cardRef}
          className={`tech-inspector-card ${isClosing ? 'is-closing' : ''}`}
          style={{
            '--tech-card-color': activeMeta.color,
            '--tech-card-glow': activeMeta.glow,
          } as React.CSSProperties}
          role="dialog"
          aria-modal="true"
          onAnimationEnd={(e) => {
            if (isClosing && e.target === cardRef.current) {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
              setDisplayedTech(null);
              setIsClosing(false);
            }
          }}
        >
          <div className="tech-inspector-header">
            <div className="tech-inspector-title-group">
              <span
                className="tech-inspector-icon"
                style={{
                  color: activeMeta.color,
                  background: activeMeta.hoverBg,
                  borderColor: `${activeMeta.color}40`,
                }}
              >
                {React.createElement(activeMeta.Icon, { size: 18 })}
              </span>
              <div>
                <h4 className="tech-inspector-name">{activeDetail.name}</h4>
                <span className="tech-inspector-cat">
                  {isEn ? activeDetail.category.en : activeDetail.category.es}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="tech-inspector-close"
              onClick={handleClose}
              aria-label={isEn ? 'Close' : 'Cerrar'}
            >
              <X size={15} />
            </button>
          </div>

          <div className="tech-inspector-body">
            <p className="tech-field-text">
              {isEn ? activeDetail.summary.en : activeDetail.summary.es}
            </p>

            <div className="tech-inspector-projects-row">
              <span className="tech-projects-label">
                {isEn ? 'Applied in:' : 'Proyectos:'}
              </span>
              <div className="tech-inspector-projects">
                {activeDetail.projects.map((proj) => (
                  <a
                    key={proj}
                    href="#proyectos"
                    className="tech-project-chip"
                    onClick={handleClose}
                  >
                    <span>{proj}</span>
                    <ExternalLink size={10} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
