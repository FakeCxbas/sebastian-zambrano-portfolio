'use client';

import { useState } from 'react';
import { ProjectsSection, Project } from '@/components/projects-section';
import { HeroVisual, MotionLayer, TechMarquee } from '@/components/motion-layer';
import { StatusBadge } from '@/components/status-badge';
import { CopyEmailButton } from '@/components/copy-email-button';
import { SkillsGrid } from '@/components/skills-grid';
import { RemoteDna } from '@/components/remote-dna';
import { LanguageSwitch } from '@/components/language-switch';
import { LanguageProvider, useLanguage } from '@/lib/i18n';
import { GithubIcon, LinkedinIcon, CvFileIcon, WhatsAppIcon } from '@/components/tech-icons';
import { NavbarNav } from '@/components/navbar-nav';
import { CommandPalette } from '@/components/command-palette';
import { ConsoleEasterEgg } from '@/components/console-easter-egg';
import { MapPin } from 'lucide-react';

const projects: Project[] = [
  {
    name: 'ContaNova',
    type: 'GESTIÓN COMERCIAL · EN PRODUCCIÓN',
    category: 'web',
    text: 'De las necesidades reales de un taller a una plataforma SaaS multi-negocio con facturación electrónica SRI, inventarios y soporte.',
    stack: 'React / TypeScript / PostgreSQL / Supabase / SRI SOAP',
    url: 'https://contanova.org',
    aside: 'Empezó en el taller donde trabajé.',
    originalIndex: 0,
    caseStudy: {
      problemEs: 'Talleres mecánicos y locales comerciales manejaban inventario en papel o Excel dispersos, con pérdida de stock y dificultades para cumplir la facturación electrónica SRI.',
      problemEn: 'Workshops and local businesses tracked stock on paper and scattered spreadsheets, suffering inventory loss and SRI electronic invoicing hurdles.',
      roleEs: 'Arquitectura completa, desarrollo fullstack (React, TypeScript, PostgreSQL), integración directa con web services SOAP del SRI, despliegue y soporte continuo.',
      roleEn: 'Full-stack architecture and engineering (React, TypeScript, PostgreSQL), direct Ecuadorian SRI SOAP integration, deployment, and ongoing support.',
      usersEs: 'En producción activa en talleres mecánicos y comercios locales.',
      usersEn: 'In active production across automotive workshops and commercial retail stores.',
      outcomeEs: 'Emisión de facturas electrónicas autorizadas en < 3 segundos, inventario sincronizado en tiempo real y alta adopción operativa.',
      outcomeEn: 'SRI invoice emission authorized in < 3 seconds, real-time stock synchronization, and reliable daily operation.',
    },
  },
  {
    name: 'Taller Jeldes',
    type: 'APLICACIÓN MÓVIL · OPERACIONES',
    category: 'mobile',
    text: 'Reconstrucción en Flutter de la aplicación móvil y panel administrativo para técnicos mecánicos: órdenes de trabajo, fotografías de fosa, asistencia e informes con IA.',
    stack: 'Flutter / Dart / Supabase / IA aplicada',
    originalIndex: 1,
    caseStudy: {
      problemEs: 'Dificultad para documentar el progreso de reparaciones en fosa en tiempo real, control manual de asistencia y lentitud redactando reportes técnicos a clientes.',
      problemEn: 'Lack of real-time visibility into pit repairs, manual attendance logging, and hours lost writing diagnostic reports for vehicle owners.',
      roleEs: 'Reconstrucción total de la app móvil en Flutter con patrón offline-first para fosa sin WiFi, panel administrativo y módulo de redacción asistida por IA.',
      roleEn: 'Complete Flutter rebuild with offline-first caching for subterranean repair bays, admin dashboard, and AI-assisted technical diagnosis drafting.',
      usersEs: 'Uso interno diario por aproximadamente 15 operarios mecánicos y administradores.',
      usersEn: 'Daily internal use by approx. 15 mechanics and workshop managers.',
      outcomeEs: 'Digitalización del 100% de órdenes con evidencia fotográfica, asistencia en fosa y reducción del 70% en tiempo de redacción de reportes.',
      outcomeEn: '100% digital work logs with photo evidence, attendance logging, and 70% time reduction in client report drafting.',
    },
  },
  {
    name: 'MxCorreo',
    type: 'AUTOMATIZACIÓN · ESCRITORIO',
    category: 'desktop',
    text: 'Aplicación portable en Python para importación masiva de Excel y CSV, saneamiento sintáctico y validación DNS/MX concurrente para consultoría actuarial.',
    stack: 'Python / Tkinter / SQLite / dnspython / Multithreading',
    originalIndex: 2,
    caseStudy: {
      problemEs: 'Bases corporativas masivas acumulaban correos mal formateados, duplicados y dominios caídos que provocaban altas tasas de rebote en envíos institucionales.',
      problemEn: 'Massive corporate contact lists suffered from syntax flaws, duplicates, and dead domains, causing high bounce rates in actuarial communications.',
      roleEs: 'Diseño y programación de la herramienta portable en Python, validador RFC 5322, resolvedor multihilo con caché de dominios y reportes ejecutivos.',
      roleEn: 'Built portable Python utility with multithreaded DNS/MX resolver, in-memory domain cache, RFC 5322 normalization, and export reports.',
      usersEs: 'Utilizado en Actuariosa para saneamiento y auditoría masiva de datos.',
      usersEn: 'Used at Actuariosa actuarial consultancy for high-volume data cleaning and auditing.',
      outcomeEs: 'Más de 132.000 registros procesados en total; el primer lote saneó 36.040 registros y 24.604 direcciones únicas sin rebote.',
      outcomeEn: '132,000+ total records processed; initial batch audited 36,040 rows and 24,604 unique verified addresses with > 85% bounce drop.',
    },
  },
  {
    name: 'TechView',
    type: 'VISIÓN ARTIFICIAL · MENCIÓN DE HONOR',
    category: 'ai',
    text: 'Gafas de asistencia visual para personas con discapacidad visual con detección de obstáculos en tiempo real y advertencias por voz. Mención de honor en graduación.',
    stack: 'Python / OpenCV / YOLOv8 / Raspberry Pi / Linux Embebido',
    aside: 'Mi aporte: núcleo de software embebido e IA.',
    originalIndex: 3,
    caseStudy: {
      problemEs: 'Personas con discapacidad visual severa enfrentan riesgos cotidianos al desplazarse debido a obstáculos aéreos o en movimiento que el bastón no detecta.',
      problemEn: 'Visually impaired individuals face dangerous collision risks from overhead or moving obstacles undetectable by conventional canes.',
      roleEs: 'Desarrollo del software embebido en Python: pipeline de inferencia YOLOv8 INT8 en Raspberry Pi 5, sectorización espacial y síntesis de voz en tiempo real.',
      roleEn: 'Engineered embedded Python software: YOLOv8 INT8 inference pipeline on Raspberry Pi 5, spatial sectoring, and real-time audio priority queue.',
      usersEs: 'Proyecto de titulación en equipo de 3; evaluado y premiado con Mención de Honor institucional en enero de 2026.',
      usersEn: '3-person capstone team; software evaluated and awarded institutional Honorable Mention in January 2026.',
      outcomeEs: 'Inferencia en tiempo real (< 110 ms), alertas prioritarias para peligros inminentes y 92% mAP de precisión en detección.',
      outcomeEn: 'Real-time inference (< 110 ms), priority queue preventing warning lag, and 92% mAP object detection precision.',
    },
  },
  {
    name: 'San Viernes & Billar Club',
    type: 'SOFTWARE COMERCIAL · EN PRODUCCIÓN',
    category: 'desktop',
    text: 'Dos implementaciones de gestión de ventas, tickets, compras e inventario. Aplicaciones de supervisión para propietarios y distribución remota de actualizaciones.',
    stack: 'React / TypeScript / Electron / Capacitor',
    originalIndex: 4,
  },
  {
    name: 'SmartDocs',
    type: 'GESTIÓN DOCUMENTAL · POR ENCARGO',
    category: 'web',
    text: 'Almacenamiento, búsqueda, OCR en cliente con Tesseract.js (WebAssembly), edición, historial de versiones y uso compartido privado sin transferencia de datos a terceros.',
    stack: 'React / TypeScript / Tesseract.js',
    url: 'https://smartdocs-phi.vercel.app',
    originalIndex: 5,
  },
  {
    name: 'Strawberry Sweet Serve',
    type: 'PEDIDOS · ADOPTADO POR EL NEGOCIO',
    category: 'web',
    text: 'Prototipo funcional para digitalizar pedidos de un local de fresas con crema: personalización táctil, panel administrativo y seguimiento de estados.',
    stack: 'React / TypeScript',
    aside: 'Sí, también hay fresas con crema.',
    originalIndex: 6,
  },
  {
    name: 'Actuariosa Web',
    type: 'SITIO WEB · PROPUESTA DE DEMOSTRACIÓN',
    category: 'web',
    text: 'Propuesta de demostración para consultoría actuarial con servicios, preguntas frecuentes y solicitudes de cotización por WhatsApp y correo. Proyecto de propuesta y demostración.',
    stack: 'React / TypeScript / CSS adaptable',
    originalIndex: 7,
  },
  {
    name: 'OmniNote STEM',
    type: 'MOTOR VECTORIAL & CÁLCULO · C++20',
    category: 'desktop',
    text: 'Entorno nativo en C++20 y Qt 6 para cálculo y física: trazo vectorial Catmull-Rom con Wacom, bloques de código, graficador de funciones y almacenamiento SQLite.',
    stack: 'C++20 / Qt 6 / OpenGL / Poppler-Qt6 / SQLite3 / Wacom',
    originalIndex: 8,
    caseStudy: {
      problemEs: 'Lienzos de notas genéricos con latencia de lápiz perceptible, sin soporte sub-píxel Wacom con rechazo de palma, bloques de código ni graficador matemático analítico.',
      problemEn: 'Generic note-taking canvas apps suffer from stylus lag and lack sub-pixel Wacom palm rejection, embedded code blocks, or analytical math plotting.',
      roleEs: 'Arquitectura completa y desarrollo en C++20 puro y Qt 6: pipeline de entrada Wacom, viewport OpenGL con 4x MSAA, parser AST recursivo de funciones y SQLite3 WAL.',
      roleEn: 'Full native architecture in modern C++20 and Qt 6: Wacom input filter, hardware-accelerated OpenGL viewport (4x MSAA), recursive math AST parser, and SQLite3 WAL.',
      usersEs: 'Uso personal intensivo en resolución de cálculo multivariable, algoritmos y apuntes técnicos.',
      usersEn: 'Daily personal workstation use for multivariable calculus, algorithms, and engineering notes.',
      outcomeEs: 'Latencia imperceptible (< 8 ms), 60 FPS estables con OpenGL, graficación instantánea con detección de asíntotas y exportación PDF vectorial a 300 DPI.',
      outcomeEn: 'Imperceptible latency (< 8 ms), solid 60 FPS in OpenGL, instant graphing with singularity detection, and 300 DPI vector PDF exports.',
    },
  },
  {
    name: 'SwiftPiano',
    type: 'SINTETIZADOR 2D & SIMULADOR · GODOT 4',
    category: 'desktop',
    text: 'Sintetizador interactivo de piano de 88 teclas con mapeo QWERTY completo, audio polifónico Salamander Grand Piano, shaders de halo aditivo y transcriptor MIDI.',
    stack: 'Godot 4 / GDScript / Shaders GLSL / Vulkan / Salamander Piano / MIDI',
    originalIndex: 9,
    caseStudy: {
      problemEs: 'Simuladores de piano virtuales limitados a pocas octavas, con latencia de audio perceptible y sin una experiencia visual fluida para estudio de ritmo y partituras.',
      problemEn: 'Virtual piano tools restricted to 3-4 octaves, featuring audio latency lag and devoid of reactive visual cascades for learning musical rhythm and chords.',
      roleEs: 'Desarrollo en Godot 4 con GDScript: mapeo de 88 teclas, pool polifónico de muestras Salamander, shaders GLSL de halo HDR en Vulkan, parser de hojas y conversor MIDI.',
      roleEn: 'Godot 4 and GDScript engine development: full 88-key mapping, Salamander sample pool, Vulkan GLSL bloom shaders, sheet parser, and MIDI converter.',
      usersEs: 'Herramienta de interpretación musical, estudio de partituras y visualización reactiva de piezas.',
      usersEn: 'Tool for real-time PC keyboard performance, sheet music study, and reactive musical track synthesis.',
      outcomeEs: '60 FPS estables con VSync sobre Vulkan, latencia de audio nula, 88 teclas asignadas y reproducción/visualización sincronizada.',
      outcomeEn: 'Rock-solid 60 FPS VSync over Vulkan, near-zero audio latency, all 88 keys mapped, and synchronized visualizer cascade.',
    },
  },
];

function PortfolioView() {
  const { t, locale } = useLanguage();
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'work' | 'edu'>('all');

  return (
    <>
      <MotionLayer />
      <a className="skip" href="#contenido">
        {locale === 'en' ? 'Skip to content' : 'Saltar al contenido'}
      </a>

      {/* Barra superior de navegación con soporte bilingüe */}
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#inicio" aria-label="Sebastián Zambrano, inicio">
            <img
              src="/sz-monogram.svg"
              alt="Sebastián Zambrano"
              width={38}
              height={38}
              className="brand-isotype"
            />
          </a>

          <div className="topbar-actions">
            <NavbarNav />
            <LanguageSwitch />
          </div>
        </div>
      </header>

      {/* Paleta de comandos interactiva y Easter Egg de consola */}
      <CommandPalette />
      <ConsoleEasterEgg />

      <main id="contenido">
        {/* Sección Hero */}
        <section className="hero" id="inicio">
          <div className="eyebrow">
            <span className="hero-location">
              <MapPin size={12} className="location-pin-icon" aria-hidden="true" />
              <span>{t.hero.location}</span>
            </span>
            <StatusBadge />
            <span className="hero-index">{t.hero.portfolioYear}</span>
          </div>

          <div className="hero-stage">
            <div className="hero-heading-group">
              <span className="hero-role">{t.hero.greeting}</span>
              <h1>
                {t.hero.headlinePart1}<br />
                {t.hero.headlinePart2}<span className="period">.</span>
              </h1>
            </div>

            {/* Remote Engineer HUD & Interactive Story */}
            <HeroVisual />
          </div>

          <div className="hero-bottom">
            <h2>
              {t.hero.subheadlinePart1}<br />
              <em>{t.hero.subheadlinePart2}</em>
            </h2>
            <div>
              <p>{t.hero.bio}</p>
              <a className="primary-link" href="#proyectos">
                <span className="primary-link-text">{t.hero.ctaPrimary}</span>
                <span className="primary-link-icon" aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className="hero-foot">
            <span>{t.hero.footRole}</span>
            <span>{t.hero.footScroll}</span>
          </div>
        </section>

        {/* Marquee de tecnologías dinámicas */}
        <TechMarquee />

        {/* Sección de Proyectos */}
        <ProjectsSection projects={projects} />

        {/* Sección Sobre Mí */}
        <section className="about section" id="sobre-mi">
          <div>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2>
              {t.about.headingPart1}<br />
              <em>{t.about.headingPart2}</em>
            </h2>
            
            <div className="metrics-strip">
              <div className="metric-box">
                <span className="metric-number">{t.about.metric1Number}</span>
                <span className="metric-title">{t.about.metric1Title}</span>
                <span className="metric-desc">{t.about.metric1Desc}</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{t.about.metric2Number}</span>
                <span className="metric-title">{t.about.metric2Title}</span>
                <span className="metric-desc">{t.about.metric2Desc}</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{t.about.metric3Number}</span>
                <span className="metric-title">{t.about.metric3Title}</span>
                <span className="metric-desc">{t.about.metric3Desc}</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">{t.about.metric4Number}</span>
                <span className="metric-title">{t.about.metric4Title}</span>
                <span className="metric-desc">{t.about.metric4Desc}</span>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <p>{t.about.para1}</p>
            <p>{t.about.para2}</p>
            <p>{t.about.para3}</p>
            
            {/* Grid de Habilidades */}
            <SkillsGrid />
          </div>
        </section>

        {/* Sección de Capacidades de Trabajo Remoto Global */}
        <RemoteDna />

        {/* Sección Trayectoria / Experiencia */}
        <section className="section experience" id="trayectoria">
          <div className="section-title">
            <span className="eyebrow">{t.experience.eyebrow}</span>
            <h2>{t.experience.heading}</h2>
            <p>{t.experience.subtitle}</p>
          </div>

          {/* Filtro interactivo de trayectoria */}
          <div className="timeline-filter-bar" role="tablist" aria-label="Filtrar trayectoria">
            <button
              type="button"
              role="tab"
              aria-selected={timelineFilter === 'all'}
              className={`filter-btn ${timelineFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setTimelineFilter('all')}
            >
              <span>{t.experience.filterAll}</span>
              <span className="filter-count">{t.experience.items.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={timelineFilter === 'work'}
              className={`filter-btn ${timelineFilter === 'work' ? 'is-active' : ''}`}
              onClick={() => setTimelineFilter('work')}
            >
              <span>{t.experience.filterWork}</span>
              <span className="filter-count">
                {t.experience.items.filter((item) => item.badgeType !== 'edu').length}
              </span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={timelineFilter === 'edu'}
              className={`filter-btn ${timelineFilter === 'edu' ? 'is-active' : ''}`}
              onClick={() => setTimelineFilter('edu')}
            >
              <span>{t.experience.filterEdu}</span>
              <span className="filter-count">
                {t.experience.items.filter((item) => item.badgeType === 'edu').length}
              </span>
            </button>
          </div>

          <div className="timeline-container">
            <div className="timeline-track" />

            {t.experience.items
              .filter((item) => {
                if (timelineFilter === 'work') return item.badgeType !== 'edu';
                if (timelineFilter === 'edu') return item.badgeType === 'edu';
                return true;
              })
              .map((item, idx) => {
              const isActive = item.badgeType === 'active';
              const isEdu = item.badgeType === 'edu';

              return (
                <article
                  key={`${timelineFilter}-${item.title}-${idx}`}
                  style={{ '--item-idx': idx } as React.CSSProperties}
                  className={`timeline-item ${isActive ? 'is-active' : ''} ${isEdu ? 'timeline-education' : ''}`}
                >
                  <div className="timeline-marker">
                    {isActive && <div className="timeline-ping" />}
                    <div className={`timeline-dot ${isEdu ? 'dot-edu' : ''}`} />
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-date">{item.date}</span>
                      <span className={`timeline-badge ${isActive ? 'badge-active' : ''} ${isEdu ? 'badge-edu' : ''}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div className="timeline-title-row">
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt="ESORIA logo"
                          className="timeline-item-logo"
                          width={28}
                          height={28}
                        />
                      )}
                      <h3>{item.title}</h3>
                    </div>

                    {item.tags && item.tags.length > 0 && (
                      <div className="timeline-tags">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="timeline-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.description && <p>{item.description}</p>}

                    {item.educationSubitems && item.educationSubitems.map((sub, sIdx) => (
                      <div key={sIdx} className="education-subitem">
                        <h3>{sub.title}</h3>
                        <p>{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Sección Contacto */}
        <section className="contact section" id="contacto">
          <div className="contact-glow" aria-hidden="true" />
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>
            {t.contact.headingPart1}<br />
            <em>{t.contact.headingPart2}</em>
          </h2>
          <p>{t.contact.description}</p>
          
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-card-label">{t.contact.emailLabel}</div>
              <a className="contact-card-main email" href="mailto:sebastianzambrano2818@gmail.com">
                sebastianzambrano2818@gmail.com ↗
              </a>
              <div className="contact-card-sub">
                <CopyEmailButton />
                <span className="contact-availability">{t.contact.availability}</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-label">{t.contact.socialLabel}</div>
              <div className="social-links-grid">
                <a
                  href="https://github.com/FakeCxbas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github-btn"
                >
                  <span className="social-btn-left">
                    <GithubIcon size={16} />
                    <span>{t.contact.githubLabel}</span>
                  </span>
                  <span className="social-handle">@FakeCxbas ↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sebasti%C3%A1n-paul-zambrano-inga-7700633ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin-btn"
                >
                  <span className="social-btn-left">
                    <LinkedinIcon size={16} />
                    <span>{t.contact.linkedinLabel}</span>
                  </span>
                  <span className="social-handle">Sebastián Zambrano ↗</span>
                </a>

                <a
                  href={`https://wa.me/593998134331?text=${encodeURIComponent(
                    locale === 'en'
                      ? 'Hello Sebastián, I saw your portfolio and would like to discuss a remote opportunity.'
                      : 'Hola Sebastián, vi tu portafolio y me gustaría conversar sobre una oportunidad.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn whatsapp-btn"
                >
                  <span className="social-btn-left">
                    <WhatsAppIcon size={18} />
                    <span>{t.contact.whatsappLabel}</span>
                  </span>
                  <span className="social-handle">{t.contact.whatsappSub}</span>
                </a>

                {/* Enlace al CV interactivo unificado */}
                <a
                  href="/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn cv-btn cv-viewer-btn"
                  title="Abrir hoja de vida interactiva en el navegador"
                >
                  <span className="social-btn-left">
                    <CvFileIcon size={16} />
                    <span>{t.contact.cvLabel}</span>
                  </span>
                  <span className="social-handle">{t.contact.cvSub}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <img src="/sz-monogram.svg" alt="SZ" width={16} height={16} style={{ borderRadius: '4px' }} />
          {t.footer.copyright}
        </span>
        <span>{t.footer.tagline}</span>
        <a href="#inicio">{t.footer.backToTop}</a>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioView />
    </LanguageProvider>
  );
}
