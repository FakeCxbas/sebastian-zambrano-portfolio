'use client';

import React from 'react';
import { useLanguage, Locale } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="language-switch-container" role="group" aria-label="Seleccionar idioma / Select language">
      <Globe size={13} className="lang-globe-icon" aria-hidden="true" />
      <button
        type="button"
        className={`lang-option ${locale === 'es' ? 'is-active' : ''}`}
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
        title="Cambiar a Español"
      >
        ES
      </button>
      <span className="lang-divider" aria-hidden="true">/</span>
      <button
        type="button"
        className={`lang-option ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
