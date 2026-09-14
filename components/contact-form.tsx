'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Briefcase,
  Wrench,
  Send,
  Mail,
  Copy,
  Check,
  Sparkles,
} from 'lucide-react';

interface InquiryType {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  defaultSubject: string;
  placeholder: string;
}

const INQUIRY_TYPES: InquiryType[] = [
  {
    id: 'job',
    label: 'Pasantía o Vacante Junior',
    icon: Briefcase,
    defaultSubject: 'Oportunidad laboral / Pasantía para Sebastián Zambrano',
    placeholder: 'Hola Sebastián, nos interesa tu perfil en nuestra empresa para una posición junior o pasantía en desarrollo...',
  },
  {
    id: 'project',
    label: 'Software para mi Negocio',
    icon: Wrench,
    defaultSubject: 'Consulta sobre desarrollo de software a medida',
    placeholder: 'Hola Sebastián, tengo un negocio y necesito digitalizar mis procesos (facturación, inventario, app web/móvil)...',
  },
  {
    id: 'general',
    label: 'Consulta Técnica o Saludo',
    icon: MessageSquare,
    defaultSubject: 'Contacto profesional desde tu portafolio',
    placeholder: 'Hola Sebastián, vi tu portafolio y me gustaría consultarte sobre tus proyectos o colaboraciones...',
  },
];

const RECIPIENT_EMAIL = 'sebastianzambrano2818@gmail.com';

export function ContactForm() {
  const [selectedType, setSelectedType] = useState<string>('job');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const activeInquiry = INQUIRY_TYPES.find((t) => t.id === selectedType) || INQUIRY_TYPES[0];

  // Construir mensaje estructurado formal
  const buildStructuredMessage = () => {
    const sender = name.trim() || 'No especificado';
    const contact = contactInfo.trim() ? `\nContacto / Teléfono: ${contactInfo.trim()}` : '';
    const bodyText = message.trim() || activeInquiry.placeholder;

    return `Estimado Sebastián Zambrano,\n\nMotivo de contacto: ${activeInquiry.label}\nRemitente: ${sender}${contact}\n\nDetalles:\n${bodyText}\n\n---\nEnviado desde el portafolio profesional (https://sebastian-zambrano-portfolio.vercel.app)`;
  };

  const handleEmailSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(`${activeInquiry.defaultSubject}${name ? ` - ${name}` : ''}`);
    const body = encodeURIComponent(buildStructuredMessage());
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(buildStructuredMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div className="interactive-contact-card">
      <div className="contact-form-header">
        <div className="form-header-badge">
          <Sparkles size={14} />
          <span>CONTACTO PROFESIONAL</span>
        </div>
        <h3>¿Cómo puedo colaborar en tu equipo o proyecto?</h3>
        <p>Selecciona el motivo de tu consulta para preparar un correo formal y estructurado con un solo clic.</p>
      </div>

      <form onSubmit={handleEmailSend} className="contact-form-body">
        {/* Selector de tipo de consulta */}
        <div className="inquiry-selector-group" role="radiogroup" aria-label="Tipo de consulta">
          <span className="field-label">1. ¿CUÁL ES EL MOTIVO?</span>
          <div className="inquiry-pills-grid">
            {INQUIRY_TYPES.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              return (
                <button
                  type="button"
                  key={type.id}
                  role="radio"
                  aria-checked={isSelected}
                  className={`inquiry-pill-btn ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <Icon size={15} />
                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Campos de texto */}
        <div className="form-fields-grid">
          <div className="form-field-item">
            <label htmlFor="contact-name" className="field-label">
              2. TU NOMBRE O EMPRESA
            </label>
            <input
              id="contact-name"
              type="text"
              className="form-input"
              placeholder="Ej. Carlos Mendoza / Talent Acquisition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-field-item">
            <label htmlFor="contact-info" className="field-label">
              3. TU CORREO CORPORATIVO O TELÉFONO
            </label>
            <input
              id="contact-info"
              type="text"
              className="form-input"
              placeholder="Ej. carlos@empresa.com"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field-item">
          <label htmlFor="contact-message" className="field-label">
            4. DETALLES O ALCANCE DE LA PROPUESTA
          </label>
          <textarea
            id="contact-message"
            className="form-textarea"
            rows={3}
            placeholder={activeInquiry.placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Botones de acción */}
        <div className="contact-form-actions">
          <button type="submit" className="form-action-btn primary-action">
            <Send size={15} />
            <span>Redactar y Enviar Correo</span>
          </button>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="form-action-btn secondary-action"
            title="Copiar texto formal estructurado"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            <span>{copied ? '¡Mensaje Copiado!' : 'Copiar Texto Estructurado'}</span>
          </button>

          <a
            href={`mailto:${RECIPIENT_EMAIL}`}
            className="form-action-btn ghost-action"
            title="Escribir directamente un correo en blanco"
          >
            <Mail size={15} />
            <span>Escribir en blanco</span>
          </a>
        </div>
      </form>
    </div>
  );
}
