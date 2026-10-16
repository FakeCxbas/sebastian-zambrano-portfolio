'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { Clock, GitBranch, Briefcase, Languages, Globe, CheckCircle2 } from 'lucide-react';

export function RemoteDna() {
  const { locale } = useLanguage();
  const isEn = locale === 'en';

  const cards = [
    {
      icon: Clock,
      badge: isEn ? 'UTC-5 · Guayaquil, Ecuador' : 'UTC-5 · Guayaquil, Ecuador',
      title: isEn ? 'UTC-5 with workday overlap across the Americas' : 'UTC-5 con solapamiento laboral con equipos de América',
      desc: isEn
        ? 'Consistent real-time overlap with engineering and product teams across the Americas. Ecuador timezone (UTC-5) maintains direct daily coverage during business hours.'
        : 'Solapamiento laboral en tiempo real con equipos en América. La zona horaria de Ecuador (UTC-5) asegura cobertura directa durante la jornada de trabajo.',
      tag: isEn ? 'Americas Overlap' : 'Solapamiento Laboral',
      color: '#38bdf8',
    },
    {
      icon: GitBranch,
      badge: isEn ? 'Verifiable Collaboration' : 'Evidencia Verificable',
      title: isEn ? 'Bilingual READMEs, clear PRs & automated testing' : 'READMEs bilingües, PRs claros y pruebas',
      desc: isEn
        ? 'Clean git history with atomic commits, contextual PR descriptions, issue tracking, bilingual setup guides, and automated testing (Vitest, Playwright).'
        : 'Repositorios con commits atómicos, issues documentados, pull requests con contexto de negocio, guías bilingües de instalación y pruebas automatizadas (Vitest, Playwright).',
      tag: isEn ? 'Code Evidence' : 'Evidencia Técnica',
      color: '#10b981',
    },
    {
      icon: Briefcase,
      badge: isEn ? 'Business & Operations' : 'Operación & Negocio Real',
      title: isEn ? 'Hands-on operational understanding' : 'Comprensión operativa de negocios reales',
      desc: isEn
        ? 'Experience gathering requirements, training users, managing counter inventory, and supporting small businesses directly. I build software that solves concrete operational bottlenecks.'
        : 'Experiencia directa en mostrador, inventarios, atención a usuarios y capacitación. Desarrollar para negocios reales me permite construir software intuitivo y resistente.',
      tag: isEn ? 'Operational Empathy' : 'Empatía Operativa',
      color: '#f59e0b',
    },
    {
      icon: Languages,
      badge: isEn ? 'Spanish & English' : 'Español & Inglés',
      title: isEn ? 'Technical English (B1 Intermediate)' : 'Inglés técnico intermedio (B1)',
      desc: isEn
        ? 'Solid technical reading comprehension for documentation and RFCs, clear written communication for commits, pull requests, issues, and asynchronous teamwork.'
        : 'Sólida lectura técnica de documentación, especificaciones y librerías; redacción clara en inglés de commits, issues, PRs y comunicación asíncrona de equipo.',
      tag: isEn ? 'B1 Intermediate' : 'B1 Intermedio',
      color: '#a78bfa',
    },
  ];

  return (
    <section className="remote-dna-section" aria-label={isEn ? 'Remote Engineering Capabilities' : 'Capacidades de Trabajo Remoto'}>
      <div className="remote-dna-header">
        <div className="remote-dna-eyebrow">
          <Globe size={13} className="remote-dna-globe" />
          <span>{isEn ? 'DISTRIBUTED ENGINEERING · REMOTE DNA' : 'INGENIERÍA DISTRIBUIDA · PERFIL REMOTO'}</span>
        </div>
        <h3 className="remote-dna-title">
          {isEn ? (
            <>
              Engineered to thrive in <em>distributed global teams.</em>
            </>
          ) : (
            <>
              Preparado para integrarme a <em>equipos distribuidos globales.</em>
            </>
          )}
        </h3>
        <p className="remote-dna-subtitle">
          {isEn
            ? 'Beyond writing clean code, remote work demands clear writing, operational empathy, and reliable daily execution.'
            : 'Más allá de escribir código limpio, trabajar en remoto exige claridad escrita, empatía operativa y ejecución diaria predecible.'}
        </p>
      </div>

      <div className="remote-dna-grid">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="remote-dna-card"
              style={{
                '--card-accent': card.color,
                '--card-bg-accent': `${card.color}12`,
                '--card-border-accent': `${card.color}35`,
              } as React.CSSProperties}
            >
              <div className="remote-card-top">
                <div className="remote-card-icon-wrapper">
                  <Icon size={18} />
                </div>
                <span className="remote-card-badge">{card.badge}</span>
              </div>

              <h4 className="remote-card-title">{card.title}</h4>
              <p className="remote-card-desc">{card.desc}</p>

              <div className="remote-card-footer">
                <CheckCircle2 size={12} className="remote-card-check" />
                <span>{card.tag}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
