import { ProjectsSection, Project } from '@/components/projects-section';
import { HeroVisual, MotionLayer, TechMarquee } from '@/components/motion-layer';
import { StatusBadge } from '@/components/status-badge';
import { CopyEmailButton } from '@/components/copy-email-button';

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
    text: 'Aplicación portable para importar, depurar y clasificar contactos. Más de 36.000 registros procesados para Actuariosa, con detección de duplicados e informes. La revisión DNS no confirma la existencia de cada buzón.',
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
    url: 'https://github.com/FakeCxbas/TechView',
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
    url: 'https://github.com/FakeCxbas/actuariosa-web',
    originalIndex: 7,
  },
];

export default function Home() {
  return (
    <>
      <MotionLayer />
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Sebastián Zambrano, inicio">sz<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#contacto">Contacto ↗</a>
        </nav>
      </header>
      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="eyebrow">
            <span className="dot" /> GUAYAQUIL, ECUADOR
            <StatusBadge />
            <span className="hero-index">PORTAFOLIO / 2026</span>
          </div>
          <div className="hero-stage">
            <div>
              <span className="hero-role">Hola, soy</span>
              <h1>Sebastián<br />Zambrano<span className="period">.</span></h1>
            </div>
            <HeroVisual />
          </div>
          <div className="hero-bottom">
            <h2>Entre el código<br />y <em>el día a día.</em></h2>
            <div>
              <p>Soy desarrollador junior en Guayaquil. Hago aplicaciones para talleres, comercios y equipos de trabajo; también las implemento, explico cómo usarlas y doy soporte.</p>
              <a className="primary-link" href="#proyectos">Te muestro mi trabajo <span>↘</span></a>
            </div>
          </div>
          <div className="hero-foot">
            <span>DESARROLLO · IMPLEMENTACIÓN · SOPORTE</span>
            <span>DESLIZA PARA EXPLORAR ↓</span>
          </div>
        </section>

        <TechMarquee />

        <ProjectsSection projects={projects} />

        <section className="about section" id="sobre-mi">
          <div>
            <span className="eyebrow">02 / SOBRE MÍ</span>
            <h2>No todo lo aprendí<br /><em>programando.</em></h2>
          </div>
          <div className="about-copy">
            <p>Mi experiencia no empezó solamente frente al código. He trabajado en atención al cliente, ventas, inventarios y asistencia administrativa. Conocer esos procesos me ayuda a desarrollar herramientas que encajan con el trabajo diario.</p>
            <p>Estudio Ciencias de la Computación en la Universidad Espíritu Santo y trabajo de forma independiente en el desarrollo y soporte de aplicaciones. También colaboro con Actuariosa en herramientas internas, gestión de correo y apoyo actuarial.</p>
            <p>Me interesa crecer en desarrollo de software y soporte de aplicaciones, en Guayaquil o de forma remota.</p>
            <div className="skills">
              <div>
                <h3>Desarrollo</h3>
                <p>React, TypeScript, JavaScript, HTML, CSS, Python, Flutter y Dart.</p>
              </div>
              <div>
                <h3>Datos y herramientas</h3>
                <p>PostgreSQL, SQLite, APIs REST, Git, GitHub, Electron y Capacitor.</p>
              </div>
              <div>
                <h3>También aporto</h3>
                <p>Excel, organización documental, atención al cliente, capacitación y soporte remoto básico.</p>
              </div>
              <div>
                <h3>Idiomas</h3>
                <p>Español nativo e inglés intermedio.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="trayectoria">
          <div className="section-title">
            <span className="eyebrow">03 / TRAYECTORIA</span>
            <h2>Aprender haciendo.</h2>
          </div>
          <div className="timeline">
            <article>
              <span>MAR. 2026 — ACTUALIDAD</span>
              <div>
                <h3>Desarrollo de software independiente</h3>
                <p>Requerimientos, desarrollo, implementación, capacitación y mantenimiento para pequeños negocios.</p>
              </div>
            </article>
            <article>
              <span>MAR. 2025 — ACTUALIDAD</span>
              <div>
                <h3>Actuariosa</h3>
                <p>Desarrollo de herramientas internas, automatización de correo y apoyo actuarial.</p>
              </div>
            </article>
            <article>
              <span>FEB. — ABR. 2026</span>
              <div>
                <h3>Electromecánica Bolívar</h3>
                <p>Atención al cliente, venta de repuestos, facturación e inventario. El punto de partida de ContaNova.</p>
              </div>
            </article>
            <article>
              <span>FEB. — ABR. 2025</span>
              <div>
                <h3>Apol S.A.</h3>
                <p>Prácticas de asistencia administrativa y de gerencia: reuniones, documentos, bases de datos y reportes.</p>
              </div>
            </article>
            <article>
              <span>FORMACIÓN</span>
              <div>
                <h3>Ciencias de la Computación · UEES</h3>
                <p>En curso desde mayo de 2026. Modalidad virtual nocturna.</p>
                <h3 className="education">Bachiller en Informática · Instituto Coello</h3>
                <p>Marzo de 2026. Tutoría voluntaria de Matemáticas, Física y Computación durante los años lectivos 2023–2025.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <span className="eyebrow">04 / HABLEMOS</span>
          <h2>Cuéntame qué<br /><em>tienes en mente.</em></h2>
          <p>Busco mi siguiente oportunidad para aprender y aportar: un puesto junior, una pasantía remunerada o un proyecto contigo.</p>
          <div className="contact-actions">
            <a className="email" href="mailto:sebastianzambrano2818@gmail.com">sebastianzambrano2818@gmail.com ↗</a>
            <CopyEmailButton />
          </div>
          <div className="social">
            <a href="https://github.com/FakeCxbas" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/sebasti%C3%A1n-paul-zambrano-inga-7700633ab/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>© 2026 Sebastián Zambrano</span>
        <span>Desde Guayaquil, con mucho por aprender.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
