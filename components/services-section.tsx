'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import { Check, ShieldCheck, Clock, ArrowRight, Sparkles, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/tech-icons';

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
          const accentColor = isFeatured ? 'var(--accent, #c6fa78)' : '#a3b19b';

          const whatsappMessage =
            locale === 'en'
              ? `Hi Sebastián, I saw your portfolio and I would like to request a quote for the "${service.title}" tier (${service.price}). Can we discuss project details?`
              : `Hola Sebastián, vi tu portafolio y me gustaría cotizar el servicio "${service.title}" (${service.price}). ¿Podemos coordinar detalles del proyecto?`;

          const whatsappUrl = `https://wa.me/593998134331?text=${encodeURIComponent(whatsappMessage)}`;

          const emailSubject =
            locale === 'en'
              ? `Inquiry: ${service.title} (${service.price})`
              : `Cotización: ${service.title} (${service.price})`;

          const emailBody =
            locale === 'en'
              ? `Hi Sebastián,\n\nI am interested in requesting a proposal for "${service.title}" (${service.price}).\n\nHere are some details about our project:\n- Description of goals:\n- Target launch date:\n- Key integrations:\n\nLooking forward to speaking with you,\n`
              : `Hola Sebastián,\n\nMe interesa solicitar una propuesta para el servicio "${service.title}" (${service.price}).\n\nTe comparto detalles iniciales de nuestro proyecto:\n- Descripción del requerimiento:\n- Fecha objetivo de entrega:\n- Integraciones clave:\n\nSaludos cordiales,\n`;

          const emailUrl = `mailto:fakecxbas@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

          return (
            <article
              key={service.id}
              className={`service-card ${isFeatured ? 'is-featured' : ''}`}
              style={{ '--service-accent': accentColor } as React.CSSProperties}
            >
              {isFeatured && (
                <div className="service-featured-pill">
                  <Sparkles size={12} className="featured-sparkle" />
                  <span>{t.services.popularBadge}</span>
                </div>
              )}

              <div className="service-header">
                <span className="service-tag">{service.tag}</span>
                <span className="service-delivery">
                  <Clock size={12} />
                  <span>{service.deliveryTime}</span>
                </span>
              </div>

              <h3 className="service-title">{service.title}</h3>

              <div className="service-price-block">
                <div className="service-price-row">
                  <span className="service-price">{service.price}</span>
                  <span className="service-price-pill">
                    {locale === 'en' ? 'Milestone' : 'Por Hitos'}
                  </span>
                </div>
                <span className="service-price-note">
                  {locale === 'en' ? '50% deposit / 50% upon delivery' : '50% anticipo / 50% contra entrega'}
                </span>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-deliverables">
                <span className="service-section-label">
                  {locale === 'en' ? 'Included Deliverables:' : 'Entregables incluidos:'}
                </span>
                <ul className="service-deliverables-list">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx}>
                      <span className="deliverable-check-icon">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-stack">
                <span className="service-section-label">
                  {locale === 'en' ? 'Target Tech Stack:' : 'Stack tecnológico:'}
                </span>
                <div className="service-stack-tags">
                  {service.stack.map((tech) => (
                    <span key={tech} className="service-stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-footer">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-cta-primary"
                  title={`${service.cta} — ${service.title}`}
                >
                  <WhatsAppIcon size={16} />
                  <span>{service.cta}</span>
                </a>

                <a
                  href={emailUrl}
                  className="service-cta-secondary"
                  title={
                    locale === 'en'
                      ? `Email inquiry for ${service.title}`
                      : `Consultar por correo sobre ${service.title}`
                  }
                >
                  <Mail size={13} />
                  <span>{locale === 'en' ? 'Or send email inquiry' : 'O consultar por email'}</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Guarantee & Transparency Grid */}
      <div className="services-guarantee-section">
        <div className="services-guarantee-header">
          <div className="guarantee-shield-badge">
            <ShieldCheck size={24} className="guarantee-shield-icon" />
          </div>
          <div className="guarantee-header-text">
            <h4>{t.services.guaranteeTitle}</h4>
            <p>{t.services.guaranteeDesc}</p>
          </div>
        </div>

        <div className="services-guarantee-pillars">
          {t.services.guaranteePillars.map((pillar, pIdx) => (
            <div key={pIdx} className="guarantee-pillar-card">
              <span className="pillar-num">0{pIdx + 1}</span>
              <h5 className="pillar-title">{pillar.title}</h5>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
