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
  Smartphone,
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
    defaultSubject: 'Contacto desde tu portafolio web',
    placeholder: 'Hola Sebastián, vi tu portafolio y me gustaría hacerte una pregunta sobre tus proyectos...',
  },
];

// Por defecto usamos el correo de Sebastián. El número de WhatsApp se puede actualizar fácilmente aquí.
const DEFAULT_WHATSAPP_NUMBER = '593900000000'; // Placeholder que el usuario puede afinar
const RECIPIENT_EMAIL = 'sebastianzambrano2818@gmail.com';

export function ContactForm() {
  const [selectedType, setSelectedType] = useState<string>('job');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const activeInquiry = INQUIRY_TYPES.find((t) => t.id === selectedType) || INQUIRY_TYPES[0];

  // Construir mensaje estructurado limpio
  const buildStructuredMessage = () => {
    const sender = name.trim() || 'Alguien interesado';
    const contact = contactInfo.trim() ? ` (${contactInfo.trim()})` : '';
    const bodyText = message.trim() || activeInquiry.placeholder;

    return `Hola Sebastián, te contacto desde tu portafolio web.\n\n*Motivo:* ${activeInquiry.label}\n*De parte de:* ${sender}${contact}\n\n*Mensaje:*\n${bodyText}`;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildStructuredMessage();
    const encodedText = encodeURIComponent(text);
    // Enlace universal de WhatsApp
    const waUrl = `https://api.whatsapp.com/send?phone=${DEFAULT_WHATSAPP_NUMBER}&text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSend = () => {
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
          <span>CONTACTO DIRECTO</span>
        </div>
        <h3>¿Cómo puedo ayudarte?</h3>
        <p>Selecciona el tipo de propuesta y envíame un mensaje directo por WhatsApp o correo.</p>
      </div>

      <form onSubmit={handleWhatsAppSend} className="contact-form-body">
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
              placeholder="Ej. Carlos Mendoza / Taller AutoFix"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-field-item">
            <label htmlFor="contact-info" className="field-label">
              3. TU CORREO O TELÉFONO
            </label>
            <input
              id="contact-info"
              type="text"
              className="form-input"
              placeholder="Ej. carlos@empresa.com o 0991234567"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-field-item">
          <label htmlFor="contact-message" className="field-label">
            4. DETALLES O MENSAJE
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
          <button type="submit" className="form-action-btn primary-wa">
            <Smartphone size={16} />
            <span>Enviar por WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleEmailSend}
            className="form-action-btn secondary-email"
            title="Abrir en tu cliente de correo"
          >
            <Mail size={15} />
            <span>Enviar por Correo</span>
          </button>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="form-action-btn ghost-copy"
            title="Copiar texto estructurado"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            <span>{copied ? '¡Copiado!' : 'Copiar texto'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
