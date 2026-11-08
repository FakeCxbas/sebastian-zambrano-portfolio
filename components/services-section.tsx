'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { Check, ShieldCheck, Clock, Zap, ArrowRight, Sparkles } from 'lucide-react';

export function ServicesSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="services section" id="servicios">
      <div className="section-title">
        <span className="eyebrow">{t.services.eyebrow}</span>
        <h2>
          {t.services.headingPart1}
          <br />
          <em>{t.services.headingPart2}</em>
        </h2>
        <p>{t.services.description}</p>
      </div>

      <div className="services-grid">
        {t.services.items.map((service, index) => {
          const isFeatured = index === 1; // Dashboard as highlighted
          const accentColor = index === 0 ? '#38bdf8' : index === 1 ? '#c6fa78' : '#a855f7';

          const contactHref = `#contacto`;

          return (
            <article
              key={service.id}
              className={`service-card ${isFeatured ? 'is-featured' : ''}`}
              style={{ '--service-accent': accentColor } as React.CSSProperties}
            >
              <div className="service-header">
                <span className="service-tag">{service.tag}</span>
                <span className="service-delivery">
                  <Clock size={13} />
                  <span>{service.deliveryTime}</span>
                </span>
              </div>

              <h3 className="service-title">{service.title}</h3>

              <div className="service-price-block">
                <span className="service-price">{service.price}</span>
                <span className="service-price-note">
                  {locale === 'en' ? 'Fixed milestone pricing' : 'Precio fijo por hito'}
                </span>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-stack">
                <span className="service-stack-label">
                  {locale === 'en' ? 'Tech Stack:' : 'Tecnologías:'}
                </span>
                <div className="service-stack-tags">
                  {service.stack.map((tech) => (
                    <span key={tech} className="service-stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-deliverables">
                <span className="service-deliverables-title">
                  {locale === 'en' ? 'Included Deliverables:' : 'Entregables incluidos:'}
                </span>
                <ul>
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx}>
                      <Check size={15} className="deliverable-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-footer">
                <a
                  href={contactHref}
                  className="service-cta-btn"
                  title={`${service.cta} — ${service.title}`}
                >
                  <span>{service.cta}</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Guarantee & Terms Banner */}
      <div className="services-guarantee-banner">
        <div className="guarantee-icon-wrap">
          <ShieldCheck size={28} className="guarantee-icon" />
        </div>
        <div className="guarantee-text">
          <h4>{t.services.guaranteeTitle}</h4>
          <p>{t.services.guaranteeDesc}</p>
        </div>
      </div>
    </section>
  );
}
