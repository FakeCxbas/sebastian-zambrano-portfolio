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
import { MapPin } from 'lucide-react';

const projects: Project[] = [
  {
    name: 'ContaNova',
    type: 'GESTIÓN COMERCIAL · EN PRODUCCIÓN',
    category: 'web',
    text: 'De las necesidades de un taller a una plataforma para varios negocios. Facturación electrónica SRI, clientes, productos, reportes y soporte continuo.',
    stack: 'React / TypeScript / PostgreSQL',
    url: 'https://contanova.org',
    aside: 'Empezó en el taller donde trabajé.',
    originalIndex: 0,
  },
  {
    name: 'Taller Jeldes',
    type: 'APLICACIÓN MÓVIL · USO INTERNO',
    category: 'mobile',
    text: 'Reconstrucción en Flutter de la aplicación y el panel administrativo para 15 usuarios. Actividades, fotografías, asistencia e informes técnicos asistidos por IA.',
    stack: 'Flutter / Dart / IA aplicada',
    originalIndex: 1,
  },
  {
    name: 'MxCorreo',
    type: 'AUTOMATIZACIÓN · WINDOWS',
    category: 'desktop',
    text: 'Aplicación portable para importar, depurar y clasificar contactos. Más de 132.000 registros procesados para Actuariosa, con detección de duplicados e informes.',
    stack: 'Python / Tkinter / SQLite / DNS',
    originalIndex: 2,
  },
  {
    name: 'San Viernes & Billar Club',
    type: 'SOFTWARE COMERCIAL · EN PRODUCCIÓN',
    category: 'desktop',
    text: 'Dos implementaciones de gestión de ventas, tickets, compras e inventario. Aplicaciones de supervisión para propietarios y distribución remota de actualizaciones.',
    stack: 'React / TypeScript / Electron / Capacitor',
    originalIndex: 3,
  },
  {
    name: 'SmartDocs',
    type: 'GESTIÓN DOCUMENTAL · POR ENCARGO',
    category: 'web',
    text: 'Almacenamiento, búsqueda, OCR, edición, historial de versiones y uso compartido para organizar documentos.',
    stack: 'React / TypeScript / Tesseract.js',
    url: 'https://smartdocs-phi.vercel.app',
    originalIndex: 4,
  },
  {
    name: 'TechView',
    type: 'VISIÓN ARTIFICIAL · PROYECTO ACADÉMICO',
    category: 'ai',
    text: 'Desarrollé el software de unas gafas de asistencia visual con detección de objetos e indicaciones por voz. Proyecto en equipo reconocido con mención de honor en enero de 2026.',
    stack: 'Python / OpenCV / YOLOv8 / Raspberry Pi',
    aside: 'Mi aporte: el software de las gafas.',
    originalIndex: 5,
  },
  {
    name: 'Strawberry Sweet Serve',
    type: 'PEDIDOS · ADOPTADO POR EL NEGOCIO',
    category: 'web',
    text: 'Prototipo funcional para digitalizar pedidos de un local de fresas con crema: personalización, panel administrativo y seguimiento de estados.',
    stack: 'React / TypeScript',
    aside: 'Sí, también hay fresas con crema.',
    originalIndex: 6,
  },
  {
    name: 'Actuariosa Web',
    type: 'SITIO WEB · PROPUESTA DE DEMOSTRACIÓN',
    category: 'web',
    text: 'Propuesta de sitio para consultoría actuarial con servicios, preguntas frecuentes y solicitudes de cotización por WhatsApp y correo.',
    stack: 'React / TypeScript / CSS adaptable',
    originalIndex: 7,
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
            sz<span>.</span>
          </a>

          <div className="topbar-actions">
            <nav aria-label="Navegación principal">
              <a href="#proyectos">{t.nav.projects}</a>
              <a href="#sobre-mi">{t.nav.about}</a>
              <a href="#trayectoria">{t.nav.experience}</a>
              <a href="#contacto" className="nav-contact-btn">{t.nav.contact}</a>
            </nav>

            <LanguageSwitch />
          </div>
        </div>
      </header>

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
                  key={`${item.title}-${idx}`}
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

                    <h3>{item.title}</h3>
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
                  className="social-btn"
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
                  className="social-btn"
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

                <a
                  href="/cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
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
        <span>{t.footer.copyright}</span>
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
