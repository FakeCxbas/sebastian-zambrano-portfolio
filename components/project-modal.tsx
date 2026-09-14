'use client';

import React, { useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { TechBadge } from './tech-icons';


function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export interface ProjectDetail {
  name: string;
  type: string;
  category: 'web' | 'mobile' | 'desktop' | 'ai';
  tagline: string;
  badge: string;
  badgeVariant?: 'production' | 'award' | 'internal' | 'demo';
  image: string;
  stack: string[];
  url?: string;
  githubUrl?: string;
  period: string;
  role: string;
  clientOrContext: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  challenges: string;
  impactMetrics: { label: string; value: string }[];
  accentColor: string;
}

export const PROJECTS_DETAILS: Record<string, ProjectDetail> = {
  'ContaNova': {
    name: 'ContaNova',
    type: 'GESTIÓN COMERCIAL & FACTURACIÓN',
    category: 'web',
    tagline: 'De las necesidades reales de un taller a una plataforma SaaS multi-negocio con facturación SRI.',
    badge: 'En Producción Activa',
    badgeVariant: 'production',
    image: '/projects/contanova.png',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'API SRI Ecuador', 'Vite'],
    url: 'https://contanova.org',
    period: '2025 — Actualidad',
    role: 'Arquitecto & Desarrollador Fullstack',
    clientOrContext: 'Electromecánica Bolívar & Pequeños Comercios',
    problem:
      'Los pequeños talleres y locales comerciales en Ecuador operaban con registros manuales en papel o Excel dispersos, lo que ocasionaba pérdidas de inventario, demoras en el cobro y dificultades para cumplir con la facturación electrónica obligatoria del SRI.',
    solution:
      'Diseñé y programé una plataforma web intuitiva que centraliza inventario de repuestos, catálogo de clientes, facturación electrónica autorizada por el SRI, reportes de caja diaria y exportación contable. La interfaz fue pensada específicamente para ser operada rápidamente incluso en una pantalla táctil de mostrador.',
    architectureHighlights: [
      'Generación y firma XML conforme a los esquemas y web services SOAP del SRI Ecuador.',
      'Base de datos PostgreSQL estructurada con transacciones ACID para evitar inconsistencias en inventario durante ventas concurrentes.',
      'Diseño modular desacoplado que permite adaptar reglas de negocio por rubro (talleres mecánicos, ferreterías, tiendas de repuestos).',
      'Despliegue con alta disponibilidad y copias de seguridad automáticas diarias.',
    ],
    challenges:
      'Lograr la interoperabilidad fluida con los servidores del SRI ecuatoriano bajo condiciones de alta latencia o intermitencia, implementando cola de reintentos y almacenamiento local offline transitorio.',
    impactMetrics: [
      { label: 'Tiempo de emisión de factura', value: '< 3 seg' },
      { label: 'Disponibilidad de plataforma', value: '99.9%' },
      { label: 'Negocios beneficiados', value: 'Talleres y comercios' },
    ],
    accentColor: '#3b82f6',
  },

  'Taller Jeldes': {
    name: 'Taller Jeldes',
    type: 'APLICACIÓN MÓVIL & OPERACIONES',
    category: 'mobile',
    tagline: 'Control integral de reparaciones en fosa, asistencia y diagnóstico asistido por IA para 15 técnicos.',
    badge: 'Uso Interno Operativo',
    badgeVariant: 'internal',
    image: '/projects/jeldes.png',
    stack: ['Flutter', 'Dart', 'OpenAI API / IA aplicada', 'Supabase', 'Cloud Storage'],
    period: '2025 — 2026',
    role: 'Desarrollador Flutter & Diseñador de Sistema',
    clientOrContext: 'Taller Mecánico Jeldes (15 usuarios)',
    problem:
      'El taller necesitaba monitorear el avance de las órdenes de trabajo mecánicas en tiempo real. Los técnicos necesitaban documentar evidencias fotográficas de repuestos dañados sin perder tiempo y la administración requería redactar informes técnicos claros sin consumir horas de trabajo de oficina.',
    solution:
      'Reconstruí desde cero una aplicación móvil multiplataforma en Flutter para técnicos y un panel de administración. Los mecánicos registran el estado del vehículo, suben fotos de inspección y el sistema procesa las notas del mecánico mediante un modelo de lenguaje para redactar reportes profesionales al cliente final.',
    architectureHighlights: [
      'App Flutter con arquitectura BLoC/Clean para separar lógica de captura de fotos y estados de red.',
      'Compresión y redimensionamiento inteligente de imágenes en el dispositivo antes de la subida para ahorrar ancho de banda en taller.',
      'Integración con API de IA generativa para redactar diagnósticos estructurados a partir de notas rápidas de los técnicos.',
      'Control de marcaje de asistencia y cálculo de horas de fosa por vehículo.',
    ],
    challenges:
      'Garantizar un desempeño fluido en dispositivos móviles de gama media y baja utilizados en el taller bajo condiciones de mala cobertura WiFi, con sincronización en segundo plano.',
    impactMetrics: [
      { label: 'Usuarios concurrentes', value: '15 mecánicos' },
      { label: 'Ahorro de tiempo en reportes', value: '70%' },
      { label: 'Evidencias fotográficas', value: '100% digitalizadas' },
    ],
    accentColor: '#10b981',
  },

  'TechView': {
    name: 'TechView',
    type: 'VISIÓN ARTIFICIAL & HARDWARE ACCESIBLE',
    category: 'ai',
    tagline: 'Gafas inteligentes de asistencia visual con detección de obstáculos en tiempo real y alertas por voz.',
    badge: 'Mención de Honor 2026',
    badgeVariant: 'award',
    image: '/projects/techview-dashboard.jpg',
    stack: ['Python', 'OpenCV', 'YOLOv8', 'Raspberry Pi 5', 'PyTTSx3', 'Linux Embedded'],
    githubUrl: 'https://github.com/FakeCxbas/TechView',
    period: 'Enero 2026',
    role: 'Desarrollador Principal de Software & Visión Artificial',
    clientOrContext: 'Proyecto de Titulación / Innovación Tecnológica (Equipo de 3)',
    problem:
      'Las personas con discapacidad visual severa enfrentan riesgos cotidianos al desplazarse en entornos urbanos debido a obstáculos aéreos, escalones o personas en movimiento que los bastones convencionales no detectan a tiempo.',
    solution:
      'Desarrollé el núcleo completo de software embebido para unas gafas conectadas a una Raspberry Pi 5. El sistema captura video en directo mediante cámara frontal, detecta objetos clasificados por distancia y genera indicaciones sintéticas por voz en milisegundos para guiar al usuario de forma segura.',
    architectureHighlights: [
      'Pipeline de visión optimizado en Python usando modelos YOLOv8 exportados con quantización INT8 para aceleración en procesador ARM.',
      'Algoritmo de estimación de profundidad monocular y sectorización espacial (izquierda, centro, derecha).',
      'Motor de alertas de audio multihilo no bloqueante: prioriza peligros inminentes sobre descripciones de fondo.',
      'Reconocido institucionalmente con Mención de Honor por innovación e impacto social en 2026.',
    ],
    challenges:
      'Mantener una tasa de refresco superior a 15 FPS en hardware embebido sin sobrecalentamiento, optimizando el consumo de memoria RAM y la latencia entre captura e indicación sonora.',
    impactMetrics: [
      { label: 'Latencia de inferencia', value: '< 110 ms' },
      { label: 'Reconocimiento', value: 'Mención de Honor' },
      { label: 'Precisión de detección', value: '92% mAP' },
    ],
    accentColor: '#22c55e',
  },

  'MxCorreo': {
    name: 'MxCorreo',
    type: 'HERRAMIENTA DE ESCRITORIO & AUTOMATIZACIÓN',
    category: 'desktop',
    tagline: 'Software portable en Python para depuración, saneamiento y validación DNS masiva de bases de datos.',
    badge: '+132.000 Registros Procesados',
    badgeVariant: 'production',
    image: '/projects/mxcorreo.png',
    stack: ['Python', 'Tkinter / CustomTkinter', 'dnspython', 'SQLite', 'Pandas'],
    period: '2025',
    role: 'Desarrollador de Software',
    clientOrContext: 'Actuariosa Consultoría',
    problem:
      'Las bases de datos comerciales acumulaban decenas de miles de contactos con correos mal formateados, registros duplicados y dominios inexistentes, provocando altas tasas de rebote en campañas institucionales y consumo innecesario de almacenamiento.',
    solution:
      'Creé una aplicación de escritorio nativa, portable y sin dependencias complejas de instalación. Permite arrastrar archivos Excel o CSV masivos, aplicar normalización de cadenas, consultar registros DNS MX de servidores receptores y generar informes detallados de salud de la base de datos.',
    architectureHighlights: [
      'Arquitectura basada en hilos (`threading`) para mantener la interfaz gráfica responsiva durante la ejecución de lotes masivos de consultas de red.',
      'Validador de sintaxis RFC 5322 con limpieza automática de espacios, caracteres invisibles y tildes accidentales.',
      'Caché de consultas DNS para optimizar velocidad y evitar saturar servidores de nombres de dominio.',
      'Exportación en un clic a formatos limpios `.xlsx` y `.csv` categorizados por estado de entrega.',
    ],
    challenges:
      'Evitar el bloqueo por rate-limiting en resolvedores DNS al comprobar miles de dominios en pocos minutos, implementando backoff exponencial y pools de conexiones concurrentes.',
    impactMetrics: [
      { label: 'Registros saneados', value: '+132.000' },
      { label: 'Reducción de rebotes', value: '> 85%' },
      { label: 'Velocidad de procesamiento', value: '500 reg/min' },
    ],
    accentColor: '#f59e0b',
  },

  'San Viernes & Billar Club': {
    name: 'San Viernes & Billar Club',
    type: 'PUNTO DE VENTA & CONTROL DE MESAS',
    category: 'desktop',
    tagline: 'Gestión comercial de doble local: cronometraje de mesas por minuto, tickets térmicos e inventario.',
    badge: 'En Producción Comercial',
    badgeVariant: 'production',
    image: '/projects/billar.png',
    stack: ['React', 'TypeScript', 'Electron', 'Capacitor', 'SQLite / Node.js', 'ESC/POS'],
    period: '2025 — 2026',
    role: 'Desarrollador Fullstack & Soporte en Sitio',
    clientOrContext: 'Locales Comerciales San Viernes & Billar Club',
    problem:
      'El cobro manual de mesas de juego generaba disputas con clientes sobre los minutos transcurridos, descuadres en el inventario de bebidas y dificultad para supervisar los ingresos cuando los propietarios no estaban físicamente en el local.',
    solution:
      'Implementé dos despliegues completos del sistema: una aplicación de escritorio con Electron para el puesto de caja y una app móvil de supervisión para los propietarios. El sistema calcula tarifas por fracción de minuto, cobra consumo de bar e imprime comandas y recibos en impresoras térmicas ESC/POS.',
    architectureHighlights: [
      'Temporizadores reactivos independientes por mesa con persistencia local en SQLite para tolerar caídas de energía sin perder los tiempos transcurridos.',
      'Módulo de impresión térmica directa vía puerto USB y red mediante protocolo binario ESC/POS.',
      'Panel de control móvil que permite a los dueños consultar ingresos, inventario y mesas ocupadas desde su teléfono.',
      'Mecanismo de distribución y actualización remota de versiones sin detener la operación diaria.',
    ],
    challenges:
      'Garantizar la resiliencia absoluta del cronómetro de juego ante apagones repentinos o reinicios del equipo de caja, recuperando la sesión exacta al encender.',
    impactMetrics: [
      { label: 'Implementaciones activas', value: '2 locales' },
      { label: 'Precisión de cobro', value: '100% automatizado' },
      { label: 'Tiempo de corte de caja', value: '< 2 minutos' },
    ],
    accentColor: '#8b5cf6',
  },

  'SmartDocs': {
    name: 'SmartDocs',
    type: 'GESTIÓN DOCUMENTAL & OCR EN EL NAVEGADOR',
    category: 'web',
    tagline: 'Búsqueda, catalogación, historial de versiones y OCR client-side sin comprometer documentos confidenciales.',
    badge: 'Despliegue Web Funcional',
    badgeVariant: 'production',
    image: '/projects/smartdocs-dashboard.png',
    stack: ['React', 'TypeScript', 'Tesseract.js (WASM)', 'IndexedDB', 'Tailwind CSS'],
    url: 'https://smartdocs-phi.vercel.app',
    period: '2025',
    role: 'Desarrollador Frontend & Especialista en OCR',
    clientOrContext: 'Proyecto por Encargo / Digitalización',
    problem:
      'Las pequeñas oficinas manejan cientos de documentos escaneados en PDF o imágenes que no tienen texto seleccionable, impidiendo encontrar contratos o recibos rápidamente.',
    solution:
      'Creé una plataforma web orientada a la privacidad que procesa el reconocimiento óptico de caracteres (OCR) directamente en la máquina del usuario utilizando WebAssembly, permitiendo indexar y buscar cualquier palabra dentro de documentos digitalizados.',
    architectureHighlights: [
      'Procesamiento OCR en Web Workers con Tesseract.js para mantener la interfaz a 60 FPS sin congelamientos.',
      'Almacenamiento de índices de búsqueda de texto completo (Full-Text Search) en IndexedDB.',
      'Historial de versiones, etiquetado por categorías y visualizador de documentos integrado.',
      '100% respetuoso con la privacidad: los archivos sensibles no se envían a servidores de terceros.',
    ],
    challenges:
      'Optimizar el consumo de memoria de los modelos WASM en navegadores cliente al procesar documentos con múltiples páginas simultáneas.',
    impactMetrics: [
      { label: 'Búsqueda en documentos', value: 'Instantánea' },
      { label: 'Privacidad de datos', value: '100% en el cliente' },
      { label: 'Formatos soportados', value: 'PDF, JPG, PNG' },
    ],
    accentColor: '#0ea5e9',
  },

  'Strawberry Sweet Serve': {
    name: 'Strawberry Sweet Serve',
    type: 'KIOSCO DIGITAL & SEGUIMIENTO DE PEDIDOS',
    category: 'web',
    tagline: 'Sistema interactivo de pedidos personalizados y panel administrativo para negocio gastronómico.',
    badge: 'Adoptado por el Negocio',
    badgeVariant: 'production',
    image: '/projects/strawberry-dashboard.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Local Storage / State Sync'],
    period: '2025',
    role: 'Desarrollador Frontend & Diseñador UI/UX',
    clientOrContext: 'Emprendimiento Gastronómico de Postres',
    problem:
      'Las combinaciones personalizadas de tamaños, bases, salsas y toppings para postres generaban filas en mostrador y errores frecuentes en la comanda hacia la cocina.',
    solution:
      'Desarrollé una interfaz visual dinámica estilo kiosco donde los clientes o el cajero arman el pedido paso a paso con cálculo de precio automático en tiempo real y una vista para cocina que actualiza el estado de preparación (Pendiente, En proceso, Listo).',
    architectureHighlights: [
      'Modelado tipado estricto en TypeScript para reglas de combinaciones de productos y precios complementarios.',
      'Diseño visual llamativo con estética moderna, adaptado para pantallas táctiles y teléfonos móviles.',
      'Panel de visualización para cocina con alertas sonoras discretas al entrar un nuevo pedido.',
      'Arquitectura de componentes ligeros con carga inicial inferior a 1 segundo.',
    ],
    challenges:
      'Diseñar un flujo de selección de ingredientes extremadamente rápido que no requiriera capacitación para el personal temporal del negocio.',
    impactMetrics: [
      { label: 'Tiempo de toma de orden', value: '-45%' },
      { label: 'Errores en comanda', value: '0 incidencias' },
      { label: 'Satisfacción del cliente', value: 'Alta' },
    ],
    accentColor: '#f43f5e',
  },

  'Actuariosa Web': {
    name: 'Actuariosa Web',
    type: 'PORTAL CORPORATIVO & COTIZADOR',
    category: 'web',
    tagline: 'Presencia digital corporativa para consultoría actuarial con servicios interactivos y cotizaciones.',
    badge: 'Propuesta de Demostración',
    badgeVariant: 'demo',
    image: '/projects/actuariosa.png',
    stack: ['React', 'TypeScript', 'CSS Modules / Modern UI', 'WhatsApp Business API'],
    githubUrl: 'https://github.com/FakeCxbas/actuariosa-web',
    period: '2025',
    role: 'Desarrollador Web & Diseñador',
    clientOrContext: 'Actuariosa Consultora',
    problem:
      'La firma actuarial necesitaba una vitrina profesional moderna para explicar servicios financieros y matemáticos complejos (planes de jubilación, valoración de pasivos laborales) a empresas de forma comprensible.',
    solution:
      'Construí una propuesta de portal web sobrio, con tipografía refinada, desglose claro de líneas de servicio, preguntas frecuentes y generador de enlaces de cotización con plantillas prellenadas hacia WhatsApp y correo corporativo.',
    architectureHighlights: [
      'Diseño corporativo con modo oscuro / claro pulido y jerarquía visual optimizada para ejecutivos de RRHH y finanzas.',
      'Arquitectura modular para incorporar calculadoras de cotización paramétricas en futuras fases.',
      'Optimización SEO y rendimiento con puntuación sobresaliente en Core Web Vitals.',
      'Código fuente versionado con estándares de accesibilidad WCAG AA.',
    ],
    challenges:
      'Traducir terminología actuarial técnica a una estructura de navegación y experiencia de usuario clara y atractiva para tomadores de decisiones.',
    impactMetrics: [
      { label: 'Velocidad de carga', value: '< 800 ms' },
      { label: 'Accesibilidad', value: 'Cumplimiento AA' },
      { label: 'Canal de captación', value: 'WhatsApp directo' },
    ],
    accentColor: '#64748b',
  },
};

interface ProjectModalProps {
  projectName: string | null;
  onClose: () => void;
  onSelectProject?: (name: string) => void;
}

export function ProjectModal({ projectName, onClose, onSelectProject }: ProjectModalProps) {
  const projectKeys = Object.keys(PROJECTS_DETAILS);
  const detail = projectName ? PROJECTS_DETAILS[projectName] : null;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentIndex = projectName ? projectKeys.indexOf(projectName) : -1;
  const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

  useEffect(() => {
    if (!projectName) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    // Bloquear scroll de la página mientras el modal esté abierto
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && prevProject && onSelectProject) {
        onSelectProject(prevProject);
      } else if (e.key === 'ArrowRight' && nextProject && onSelectProject) {
        onSelectProject(nextProject);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [projectName, onClose, prevProject, nextProject, onSelectProject]);

  if (!detail) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ '--modal-accent': detail.accentColor } as React.CSSProperties}
      >
        {/* Barra superior de navegación interna */}
        <div className="project-modal-header">
          <div className="project-modal-header-meta">
            <span className="project-modal-type">{detail.type}</span>
            <span className={`project-modal-badge badge-${detail.badgeVariant || 'production'}`}>
              {detail.badge}
            </span>
          </div>

          <div className="project-modal-actions">
            {prevProject && onSelectProject && (
              <button
                type="button"
                className="modal-nav-btn"
                onClick={() => onSelectProject(prevProject)}
                title={`Ver ${prevProject} (Flecha izquierda)`}
                aria-label="Proyecto anterior"
              >
                <ChevronLeft size={16} />
              </button>
            )}
            {nextProject && onSelectProject && (
              <button
                type="button"
                className="modal-nav-btn"
                onClick={() => onSelectProject(nextProject)}
                title={`Ver ${nextProject} (Flecha derecha)`}
                aria-label="Proyecto siguiente"
              >
                <ChevronRight size={16} />
              </button>
            )}
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              title="Cerrar (Esc)"
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Contenido desplazable del modal */}
        <div className="project-modal-scroll-body" ref={scrollContainerRef}>
          {/* Título y Tagline */}
          <div className="project-modal-hero-title">
            <h2 id="modal-project-title">{detail.name}</h2>
            <p className="project-modal-tagline">{detail.tagline}</p>
          </div>

          {/* Banner visual ampliado con captura de alta fidelidad */}
          <div className="project-modal-visual">
            <div className="project-modal-visual-glow" aria-hidden="true" />
            <div className="project-modal-image-wrapper">
              <img
                src={detail.image}
                alt={`Captura del sistema ${detail.name}`}
                width={1200}
                height={675}
                className="project-modal-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Barra de Datos Clave (Key Facts) */}
          <div className="project-modal-facts-grid">
            <div className="fact-item">
              <span className="fact-label">ROL</span>
              <span className="fact-value">{detail.role}</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">CONTEXTO / CLIENTE</span>
              <span className="fact-value">{detail.clientOrContext}</span>
            </div>
            <div className="fact-item">
              <span className="fact-label">PERÍODO</span>
              <span className="fact-value">{detail.period}</span>
            </div>
          </div>

          {/* Métricas de impacto */}
          <div className="project-modal-metrics-strip">
            {detail.impactMetrics.map((metric, i) => (
              <div key={i} className="modal-metric-card">
                <span className="modal-metric-val">{metric.value}</span>
                <span className="modal-metric-lbl">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Secciones de Caso de Estudio */}
          <div className="project-modal-sections">
            {/* Problema y Solución */}
            <div className="modal-story-grid">
              <div className="modal-story-card">
                <div className="modal-section-heading">
                  <Clock size={16} className="heading-icon" />
                  <h3>La Necesidad Real</h3>
                </div>
                <p>{detail.problem}</p>
              </div>

              <div className="modal-story-card">
                <div className="modal-section-heading">
                  <CheckCircle2 size={16} className="heading-icon" />
                  <h3>La Solución Implementada</h3>
                </div>
                <p>{detail.solution}</p>
              </div>
            </div>

            {/* Puntos de Arquitectura */}
            <div className="modal-architecture-card">
              <div className="modal-section-heading">
                <Layers size={16} className="heading-icon" />
                <h3>Aspectos Clave de Arquitectura & Decisiones Técnicas</h3>
              </div>
              <ul className="architecture-list">
                {detail.architectureHighlights.map((point, index) => (
                  <li key={index}>
                    <span className="bullet-point">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retos Superados */}
            <div className="modal-challenges-card">
              <div className="modal-section-heading">
                <ShieldCheck size={16} className="heading-icon" />
                <h3>Reto Principal Superado</h3>
              </div>
              <p>{detail.challenges}</p>
            </div>

            {/* Stack Tecnológico */}
            <div className="modal-tech-stack">
              <span className="tech-stack-title">TECNOLOGÍAS & HERRAMIENTAS</span>
              <div className="tech-tags-list">
                {detail.stack.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="modal" />
                ))}
              </div>
            </div>
          </div>

          {/* Footer de Acciones */}
          <div className="project-modal-footer">
            <div className="project-modal-links">
              {detail.url && (
                <a
                  href={detail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn primary"
                >
                  <ExternalLink size={15} />
                  <span>Visitar sistema en vivo</span>
                </a>
              )}
              {detail.githubUrl && (
                <a
                  href={detail.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn secondary"
                >
                  <GithubIcon size={15} />
                  <span>Ver código en GitHub</span>
                </a>
              )}
              <button type="button" onClick={onClose} className="modal-action-btn ghost">
                Cerrar ficha
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
