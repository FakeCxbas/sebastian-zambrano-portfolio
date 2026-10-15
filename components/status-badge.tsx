'use client';

import { useLanguage } from '@/lib/i18n';

export function StatusBadge() {
  const { t } = useLanguage();

  return (
    <a
      href="#contacto"
      className="status-badge"
      aria-label={`${t.hero.remoteBadge}. Click to contact.`}
    >
      <span className="status-ping-wrapper">
        <span className="status-ping" />
        <span className="status-dot" />
      </span>
      <span className="status-text">{t.hero.remoteBadge}</span>
    </a>
  );
}
