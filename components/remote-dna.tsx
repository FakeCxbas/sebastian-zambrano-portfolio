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
      badge: isEn ? 'UTC-5 · Guayaquil, EC' : 'UTC-5 · Guayaquil, EC',
      title: isEn ? '100% US Eastern (EST) Overlap' : '100% solapamiento con US Eastern (EST)',
      desc: isEn
        ? 'Real-time daily collaboration with teams in New York, Miami, Toronto, and Montreal. Smooth midday overlap with Central (CST), Pacific (PST), and Europe.'
        : 'Colaboración en vivo con equipos en Nueva York, Miami, Toronto y Montreal. Cobertura fluida con Central (CST), Pacífico (PST) y mañanas de Europa.',
      tag: isEn ? 'Timezone Aligned' : 'Zona Horaria Ideal',
      color: '#38bdf8',
    },
    {
      icon: GitBranch,
      badge: isEn ? 'Async-First · Git PRs' : 'Cultura Asíncrona · Git',
      title: isEn ? 'Documented, autonomous progress' : 'Claridad escrita & autonomía',
      desc: isEn
        ? 'Disciplined atomic commits, clear pull request descriptions, proactive status updates, and short video walkthroughs (Loom). No micromanagement needed.'
        : 'Commits atómicos, PRs detallados con contexto, actualizaciones diarias proactivas y demos en video cuando se requiere. Sin fricción ni micromanagement.',
      tag: isEn ? 'Autonomous Delivery' : 'Entregas Predecibles',
      color: '#10b981',
    },
    {
      icon: Briefcase,
      badge: isEn ? 'Production Ownership' : 'Mentalidad de Negocio',
      title: isEn ? 'Operational empathy & product sense' : 'Empatía operativa & visión de negocio',
      desc: isEn
        ? 'Hands-on experience working directly with business owners, counter staff, and clients. I build resilient software designed to solve real daily operational headaches.'
        : 'Experiencia real atendiendo clientes, administrando inventarios y vendiendo repuestos. Construyo software diseñado para resistir el uso rudo del negocio diario.',
      tag: isEn ? 'Business Impact' : 'Foco en Valor Real',
      color: '#f59e0b',
    },
    {
      icon: Languages,
      badge: isEn ? 'English & Spanish' : 'Inglés & Español',
      title: isEn ? 'Bilingual technical fluency (B2)' : 'Colaboración bilingüe fluida (B2)',
      desc: isEn
        ? 'Proven ability to conduct daily standups, write architecture specs, review pull requests, and communicate technical trade-offs fluently in both languages.'
        : 'Fluidez técnica para daily standups, redacción de especificaciones de arquitectura, revisión de código y documentación completa en ambos idiomas.',
      tag: isEn ? 'Global Ready' : 'Alcance Internacional',
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
