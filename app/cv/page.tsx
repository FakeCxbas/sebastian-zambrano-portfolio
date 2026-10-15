'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Globe, Phone } from 'lucide-react';
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
          
          <div className="cv-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <LanguageSwitch />
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
              ? 'Software Developer · Full-Stack Web, Mobile & Data Automation'
              : 'Desarrollador de Software · Web, Móvil & Datos'}
          </div>
          
          <div className="cv-contact-info">
            <span><MapPin size={13} /> Guayaquil, Ecuador (UTC-5 / EST)</span>
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
              ? 'Software Developer with proven end-to-end experience architecting, shipping, and maintaining production applications for businesses. Leveraging a practical background in sales operations, inventory control, and customer support, I design software with high operational empathy. Computer Science student at Universidad Espíritu Santo (UEES), graduation honors in AI computer vision, and hands-on expertise in TypeScript, React, Python, PostgreSQL, and Flutter.'
              : 'Desarrollador de software con experiencia comprobada en el ciclo completo de diseño, desarrollo, despliegue y soporte de aplicaciones en entornos de producción real. Con experiencia directa previa en áreas comerciales, administrativas y de soporte, desarrollo soluciones técnicas orientadas a la eficiencia operativa de negocios. Estudiante de Ciencias de la Computación (UEES) con mención de honor en visión artificial y sólidas bases en TypeScript, React, Python y Flutter.'}
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
                {isEn ? 'Frontend Engineering:' : 'Desarrollo Frontend:'}
              </strong>
              <span>React 19, TypeScript, Next.js, Vite, JavaScript (ES6+), Tailwind CSS, CSS3 Modular, Web Components.</span>
            </div>
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">
                {isEn ? 'Mobile & Desktop:' : 'Desarrollo Móvil & Escritorio:'}
              </strong>
              <span>Flutter, Dart, Electron, Capacitor (iOS/Android wrappers).</span>
            </div>
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">
                {isEn ? 'Backend, Data & AI:' : 'Backend, Datos & IA:'}
              </strong>
              <span>Python, PostgreSQL, SQLite, RESTful APIs, OpenCV, YOLOv8, Client-side OCR (WebAssembly).</span>
            </div>
            <div className="cv-skill-row">
              <strong className="cv-skill-cat">
                {isEn ? 'Systems & Compliance:' : 'Sistemas & Negocio:'}
              </strong>
              <span>
                {isEn
                  ? 'SRI Electronic Invoicing (Ecuador), Git, GitHub Actions, Linux (Bash), Docker, Technical User Support.'
                  : 'Facturación Electrónica SRI (Ecuador), Git, Linux, Raspberry Pi, Atención técnica al usuario.'}
              </span>
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
                  {isEn ? 'Independent Software Developer' : 'Desarrollador de Software Independiente'}
                </h3>
                <span className="cv-job-company">
                  {isEn ? 'ContaNova & Commercial Applications' : 'ContaNova & Sistemas Comerciales'}
                </span>
              </div>
              <span className="cv-job-dates">
                {isEn ? 'March 2026 — Present' : 'Marzo 2026 — Actualidad'}
              </span>
            </div>
            <ul className="cv-bullets">
              {isEn ? (
                <>
                  <li>Architected and delivered <strong>ContaNova</strong>, an active commercial SaaS platform supporting SRI electronic invoicing, inventory tracking, accounts receivable, and customer CRM.</li>
                  <li>Built <strong>San Viernes & Billar Club</strong> desktop POS applications using Electron, managing real-time pool table sessions and thermal ESC/POS ticket printing for 2 venues.</li>
                  <li>Engineered a touchscreen web ordering terminal and kitchen queue for <strong>Strawberry Sweet Serve</strong>.</li>
                  <li>Full lifecycle ownership: client requirements discovery, UX design, staging deployment, and end-user onboarding.</li>
                </>
              ) : (
                <>
                  <li>Diseño, programación e implementación en producción de <strong>ContaNova</strong>, plataforma integral de gestión comercial con facturación electrónica SRI, control de inventario y clientes.</li>
                  <li>Desarrollo de <strong>San Viernes & Billar Club</strong> en Electron para la gestión de tiempos por mesa y emisión de comandas térmicas ESC/POS en 2 locales.</li>
                  <li>Creación del terminal táctil de pedidos y panel para el negocio gastronómico <strong>Strawberry Sweet Serve</strong>.</li>
                  <li>Acompañamiento presencial y remoto: levantamiento de requerimientos, despliegue y capacitación directa a usuarios finales.</li>
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
                  {isEn ? 'B.S. in Computer Science' : 'Licenciatura / Ingeniería en Ciencias de la Computación'}
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
