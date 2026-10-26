'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { CvPrintButton } from '@/components/cv-print-button';
import { LanguageProvider, useLanguage } from '@/lib/i18n';
import { LanguageSwitch } from '@/components/language-switch';

function GithubIcon({ size = 13, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 13, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function CvContent() {
  const { locale } = useLanguage();
  const isEn = locale === 'en';

  return (
    <div className="cv-page-container">
      {/* Barra de utilidades web (oculta al imprimir) */}
      <header className="cv-nav-bar no-print">
        <div className="cv-nav-content">
          <Link href="/" className="cv-back-link">
            <ArrowLeft size={16} />
            <span>{isEn ? 'Back to Portfolio' : 'Volver al Portafolio'}</span>
          </Link>
          
          <div className="cv-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LanguageSwitch />
            <a
              href={isEn ? '/cv/CV-Sebastian-Zambrano-EN.pdf' : '/cv/CV-Sebastian-Zambrano-ES.pdf'}
              download={isEn ? 'Sebastian-Zambrano-Junior-Software-Developer-EN.pdf' : 'CV-Sebastian-Zambrano-ES.pdf'}
              className="cv-pdf-download-pill"
              title={isEn ? 'Download Resume in PDF' : 'Descargar Hoja de Vida en PDF'}
            >
              <span>{isEn ? 'Download PDF ⬇' : 'Descargar PDF ⬇'}</span>
            </a>
            <CvPrintButton />
          </div>
        </div>
      </header>

      {/* Hoja de Vida Formato Ejecutivo / ATS */}
      <main className="cv-sheet">
        {/* Cabecera */}
        <header className="cv-header">
          <h1 className="cv-name">Sebastián Paul Zambrano Inga</h1>
          <div className="cv-role">
            {isEn
              ? 'Software Developer · IT Technical Support & Electronic Security (CCTV)'
              : 'Desarrollador de Software · Soporte Técnico & Seguridad Electrónica (CCTV)'}
          </div>
          
          <div className="cv-contact-info">
            <span><MapPin size={13} /> Guayaquil, Ecuador (UTC-5)</span>
            <a href="mailto:sebastianzambrano2818@gmail.com"><Mail size={13} /> sebastianzambrano2818@gmail.com</a>
            <a href="https://wa.me/593998134331" target="_blank" rel="noopener noreferrer"><Phone size={13} /> +593 99 813 4331</a>
            <a href="https://github.com/FakeCxbas" target="_blank" rel="noopener noreferrer"><GithubIcon size={13} /> github.com/FakeCxbas</a>
            <a href="https://www.linkedin.com/in/sebasti%C3%A1n-paul-zambrano-inga-7700633ab/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={13} /> LinkedIn</a>
          </div>
        </header>

        {/* Perfil Profesional */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {isEn ? 'Professional Profile' : 'Perfil Profesional'}
          </h2>
          <p className="cv-summary">
            {isEn
              ? 'Technical professional and software developer with proven experience in electronic security systems (CCTV installation, IP/HD cameras, DVR/NVR, structured cabling), business IT technical support, corporate cybersecurity, and custom commercial software engineering. Co-founder and Technical Lead at ESORIA Sistemas. Computer Science Engineering student at Universidad Espíritu Santo (UEES), High School Diploma in Informatics with AI honors, equipped with own tools, hands-on field diagnostic capabilities, and a commitment to operational uptime.'
              : 'Profesional técnico y desarrollador con experiencia práctica comprobada en instalación y mantenimiento de sistemas de seguridad electrónica (CCTV, cámaras IP/HD, grabadores DVR/NVR, cableado estructurado), soporte técnico integral a negocios, seguridad informática y desarrollo de software de gestión comercial. Co-fundador y Responsable Técnico en ESORIA Sistemas. Bachiller en Informática (Instituto Coello) con mención de honor, estudiante de Ingeniería en Ciencias de la Computación (UEES), con herramientas técnicas propias, rápida capacidad de resolución en campo y disposición inmediata.'}
          </p>
        </section>

        {/* Habilidades Técnicas */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {isEn ? 'Technical Competencies' : 'Competencias Técnicas'}
          </h2>
          <div className="cv-skills-table">
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">
                {isEn ? 'Electronic Security & IT Support:' : 'Seguridad Electrónica & Soporte TI:'}
              </strong>
              <span>
                {isEn
                  ? 'CCTV deployment (IP & HD cameras, DVR/NVR), structured UTP cabling (Cat 5e/6), crimping & network testing, remote live view streaming, preventive/corrective PC hardware maintenance, field troubleshooting with own tools.'
                  : 'Instalación y calibración de CCTV (cámaras IP/HD, grabadores DVR/NVR), cableado estructurado UTP (Cat 5e/6), ponchado y prueba de puntos de red, configuración de monitoreo remoto en tiempo real, mantenimiento preventivo y correctivo de hardware/PC, diagnóstico y herramientas propias.'}
              </span>
            </div>
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">
                {isEn ? 'Cybersecurity & Infrastructure:' : 'Seguridad Informática & Redes:'}
              </strong>
              <span>
                {isEn
                  ? 'Local network segmentation (VLANs), managed switches, router firewalls, automated encrypted backups, access control policies, and operational data protection for small businesses.'
                  : 'Segmentación de redes (VLANs), switches, firewalls perimetrales, esquemas de copias de seguridad periódicas (backups encriptados), control de accesos y protección de datos comerciales.'}
              </span>
            </div>
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">
                {isEn ? 'Software & Systems Development:' : 'Desarrollo de Software & Sistemas:'}
              </strong>
              <span>React, TypeScript, Python, C++20, Qt 6, PostgreSQL, Flutter, Godot 4, Next.js, Electron, facturación electrónica SRI (Ecuador), sistemas de punto de venta (POS) y control de inventarios.</span>
            </div>
          </div>
        </section>

        {/* Experiencia Laboral */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {isEn ? 'Professional Experience' : 'Experiencia Profesional'}
          </h2>

          <div className="cv-job">
            <div className="cv-job-header">
              <div className="cv-job-title-group">
                <h3 className="cv-job-title">
                  {isEn ? 'Co-Founder & Technical Lead' : 'Co-fundador & Responsable Técnico'}
                </h3>
                <span className="cv-job-company">
                  {isEn ? 'ESORIA Sistemas · Tech Solutions & Security' : 'ESORIA Sistemas · Soluciones Tecnológicas & Seguridad'}
                </span>
              </div>
              <span className="cv-job-dates">
                {isEn ? 'January 2024 — Present' : 'Enero 2024 — Actualidad'}
              </span>
            </div>
            <ul className="cv-bullets">
              {isEn ? (
                <>
                  <li><strong>Electronic Security & CCTV:</strong> On-site assessment, conduit routing, structured UTP cabling, installation and angle calibration of security cameras (IP and HD-CVI), NVR/DVR storage setup, and live remote streaming configuration on client mobile devices.</li>
                  <li><strong>Business IT Support:</strong> Diagnostic, preventive, and corrective maintenance for workstation PCs, operating systems, local peripherals, and office network links, minimizing business downtime.</li>
                  <li><strong>Cybersecurity & Data Protection:</strong> Deployed automated backup policies for accounting and customer databases, configured router firewalls, and isolated commercial networks from guest Wi-Fi.</li>
                  <li><strong>Commercial Software Engineering:</strong> Architected and delivered <strong>ContaNova</strong> (active SaaS for Ecuadorian SRI electronic invoicing and inventory) and desktop POS systems for retail and hospitality venues (San Viernes, Billar Club).</li>
                  <li><strong>Field Work & Tools:</strong> Equipped with own professional toolsets for physical cabling, camera mounting, and network testing; client training and fast-response maintenance visits.</li>
                </>
              ) : (
                <>
                  <li><strong>Seguridad Electrónica & CCTV:</strong> Levantamiento técnico de cobertura, canalización, tendido de cableado estructurado UTP, instalación y calibración de cámaras de seguridad (IP y analógicas HD), configuración de grabadores DVR/NVR y acceso remoto en tiempo real en teléfonos y computadoras para propietarios de locales y empresas.</li>
                  <li><strong>Soporte Técnico a Negocios:</strong> Mantenimiento preventivo y correctivo de computadoras de escritorio, laptops y periféricos en locales comerciales y oficinas; diagnóstico de fallas de hardware/software, optimización y aseguramiento de operatividad continua.</li>
                  <li><strong>Seguridad Informática:</strong> Implementación de políticas de respaldo periódico (backups encriptados) de bases de datos contables y comerciales; configuración de firewalls, segmentación de redes y protección contra intrusiones.</li>
                  <li><strong>Software y Sistemas Comerciales:</strong> Diseño, puesta en producción y soporte de plataformas como <strong>ContaNova</strong> (facturación electrónica SRI e inventarios), terminales de punto de venta (POS) y pedidos digitales (San Viernes, Billar Club, Strawberry Sweet Serve).</li>
                  <li><strong>Atención y Herramientas Propias:</strong> Disponibilidad de herramientas técnicas propias para instalaciones en campo (ponchadoras, tester de red, taladro para montaje), elaboración de presupuestos técnicos y capacitación al personal del cliente.</li>
                </>
              )}
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <div className="cv-job-title-group">
                <h3 className="cv-job-title">
                  {isEn ? 'Internal Tooling & Data Automation Engineer' : 'Desarrollador de Herramientas Internas & Analítica'}
                </h3>
                <span className="cv-job-company">
                  {isEn ? 'Actuariosa · Actuarial Consultancy' : 'Actuariosa · Consultoría Actuarial'}
                </span>
              </div>
              <span className="cv-job-dates">
                {isEn ? 'March 2025 — Present' : 'Marzo 2025 — Actualidad'}
              </span>
            </div>
            <ul className="cv-bullets">
              {isEn ? (
                <>
                  <li>Engineered <strong>MxCorreo</strong> in Python: batch deduplication, syntax checking, and multi-threaded DNS/MX domain validation across 132,000+ corporate records.</li>
                  <li>Developed the corporate landing proposal in React and TypeScript with integrated quotation workflows via WhatsApp and Email.</li>
                  <li>Analytical data preparation for actuarial studies and business intelligence.</li>
                </>
              ) : (
                <>
                  <li>Construcción de scripts y herramientas de automatización con Python (MxCorreo) para depuración y validación DNS/SMTP de más de 132.000 registros de correo.</li>
                  <li>Desarrollo de la propuesta web corporativa institucional e integración de canales de cotización en línea.</li>
                  <li>Apoyo analítico en el procesamiento de bases de datos para estudios actuariales y comerciales.</li>
                </>
              )}
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <div className="cv-job-title-group">
                <h3 className="cv-job-title">
                  {isEn ? 'Billing, Inventory & Sales Associate' : 'Asistente de Facturación, Inventarios & Ventas'}
                </h3>
                <span className="cv-job-company">Electromecánica Bolívar</span>
              </div>
              <span className="cv-job-dates">
                {isEn ? 'February 2026 — April 2026' : 'Febrero 2026 — Abril 2026'}
              </span>
            </div>
            <ul className="cv-bullets">
              {isEn ? (
                <>
                  <li>Front-counter retail customer service, automotive spare parts sales, point-of-sale billing, and cash reconciliation.</li>
                  <li>Hands-on analysis of operational friction in workshop administration, which directly led to the conception and requirements of ContaNova.</li>
                </>
              ) : (
                <>
                  <li>Atención al público, venta de repuestos automotrices, facturación y arqueo de caja diario.</li>
                  <li>Identificación práctica de cuellos de botella en la gestión de talleres, base empírica para la posterior creación de ContaNova.</li>
                </>
              )}
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <div className="cv-job-title-group">
                <h3 className="cv-job-title">
                  {isEn ? 'Administrative Operations Intern' : 'Prácticas de Asistencia Administrativa'}
                </h3>
                <span className="cv-job-company">Apol S.A.</span>
              </div>
              <span className="cv-job-dates">
                {isEn ? 'February 2025 — April 2025' : 'Febrero 2025 — Abril 2025'}
              </span>
            </div>
            <ul className="cv-bullets">
              {isEn ? (
                <li>Executive administrative assistance, document management systems, archive structuring, and executive presentation preparation.</li>
              ) : (
                <li>Apoyo administrativo a gerencia, gestión documental, organización de expedientes y generación de reportes ejecutivos.</li>
              )}
            </ul>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {isEn ? 'Featured Technical Projects' : 'Proyectos Destacados'}
          </h2>
          
          <div className="cv-project-entry">
            <strong>TechView ({isEn ? 'Computer Vision & Assistive Audio' : 'Visión Artificial & Asistencia Visual'}):</strong>{' '}
            {isEn
              ? 'Python, OpenCV, and YOLOv8 on Raspberry Pi 5. Real-time edge inference calculating object distance with spoken spatial cues. Awarded graduation Honorable Mention in Jan 2026.'
              : 'Software en Python, OpenCV y YOLOv8 sobre Raspberry Pi 5 con inferencia en tiempo real e indicaciones audibles. Galardonado con Mención de Honor en enero de 2026.'}
          </div>

          <div className="cv-project-entry">
            <strong>Taller Jeldes ({isEn ? 'Flutter Mobile App' : 'Móvil Flutter'}):</strong>{' '}
            {isEn
              ? 'Complete operational rebuild of workshop mobile application for 15 mechanics, featuring photo-verified work logs, attendance tracking, and AI-assisted technical reports.'
              : 'Reconstrucción completa de la aplicación móvil de operaciones de taller para 15 técnicos mecánicos, incluyendo registro fotográfico e informes asistidos por IA.'}
          </div>

          <div className="cv-project-entry">
            <strong>SmartDocs ({isEn ? 'In-Browser Client-side OCR' : 'OCR en Navegador'}):</strong>{' '}
            {isEn
              ? 'WebAssembly-driven OCR engine using Tesseract.js. Executes entirely in client browser memory with zero server data transfer, guaranteeing confidentiality.'
              : 'Procesamiento de documentos e imágenes mediante WebAssembly (Tesseract.js), ejecutado 100% en el cliente de forma privada y sin enviar datos a servidores.'}
          </div>

          <div className="cv-project-entry">
            <strong>OmniNote STEM ({isEn ? 'Native C++20 / Qt 6 Vector Engine' : 'Motor Vectorial C++20 / Qt 6'}):</strong>{' '}
            {isEn
              ? 'High-performance GPU-accelerated technical canvas with Wacom digitizer sub-pixel inking, recursive-descent math AST parser, and SQLite WAL storage.'
              : 'Entorno de cálculo y lienzo vectorial de alto rendimiento en C++20 y Qt 6: entrada Wacom sub-píxel de baja latencia, parser matemático recursivo y persistencia SQLite.'}
          </div>

          <div className="cv-project-entry">
            <strong>SwiftPiano ({isEn ? 'Godot 4 / 2D Reactive Audio Synthesizer' : 'Sintetizador 2D & Motor de Audio en Godot 4'}):</strong>{' '}
            {isEn
              ? 'Real-time 88-key piano synthesizer with complete QWERTY mapping, polyphonic Salamander Grand Piano sample pool, custom GLSL bloom shaders, and live MIDI transcription.'
              : 'Sintetizador de 88 notas en Godot 4 con mapeo QWERTY completo, audio polifónico Salamander Grand Piano, shaders GLSL de halo aditivo y transcriptor MIDI.'}
          </div>
        </section>

        {/* Educación & Reconocimientos */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {isEn ? 'Education & Honors' : 'Educación & Reconocimientos'}
          </h2>
          <div className="cv-edu-item">
            <div className="cv-job-header">
              <div>
                <strong>
                  {isEn ? 'Computer Science Engineering' : 'Ingeniería en Ciencias de la Computación'}
                </strong>
                <div>
                  {isEn
                    ? 'Universidad Espíritu Santo (UEES) · Evening virtual program'
                    : 'Universidad Espíritu Santo (UEES) · Modalidad virtual nocturna'}
                </div>
              </div>
              <span className="cv-job-dates">
                {isEn ? 'In Progress (Since May 2026)' : 'En curso (Desde mayo 2026)'}
              </span>
            </div>
          </div>
          <div className="cv-edu-item">
            <div className="cv-job-header">
              <div>
                <strong>
                  {isEn ? 'Technical High School Diploma in Computer Science' : 'Bachiller Técnico en Informática'}
                </strong>
                <div>
                  {isEn
                    ? 'Instituto Coello · Volunteer Tutor in Mathematics, Physics & Computer Science (2023–2025)'
                    : 'Instituto Coello · Tutor voluntario de Matemáticas, Física y Computación (2023–2025)'}
                </div>
              </div>
              <span className="cv-job-dates">
                {isEn ? 'Graduated March 2026' : 'Graduado en marzo 2026'}
              </span>
            </div>
          </div>
        </section>

        {/* Idiomas & Disponibilidad */}
        <section className="cv-section">
          <h2 className="cv-section-title">
            {isEn ? 'Languages & Availability' : 'Idiomas & Disponibilidad'}
          </h2>
          <div className="cv-skills-table">
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">{isEn ? 'Languages:' : 'Idiomas:'}</strong>
              <span>
                {isEn
                  ? 'Spanish (Native); English (Intermediate B1 - solid technical reading and written async collaboration)'
                  : 'Español (Nativo); Inglés (Intermedio B1 - sólida lectura técnica y redacción asíncrona de equipo)'}
              </span>
            </div>
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">{isEn ? 'Availability:' : 'Disponibilidad:'}</strong>
              <span>
                {isEn
                  ? 'Full-time remote or hybrid; UTC-5 workday overlap across the Americas'
                  : 'Jornada completa remoto o híbrido; solapamiento laboral UTC-5 con equipos de América'}
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function CvPage() {
  return (
    <LanguageProvider>
      <CvContent />
    </LanguageProvider>
  );
}
