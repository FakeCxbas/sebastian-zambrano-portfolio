'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function CopyEmailButton({ email = 'sebastianzambrano2818@gmail.com' }: { email?: string }) {
  const [copied, setCopied] = useState(false);
  const { locale } = useLanguage();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const isEn = locale === 'en';

  return (
    <div className="copy-email-container">
      <button
        type="button"
        onClick={handleCopy}
        className="copy-email-btn"
        aria-label={copied ? (isEn ? 'Email copied to clipboard' : 'Correo copiado al portapapeles') : `Copy email ${email}`}
        title={isEn ? 'Copy email address to clipboard' : 'Copiar correo al portapapeles'}
      >
        {copied ? (
          <>
            <Check size={16} className="text-primary" aria-hidden="true" />
            <span>{isEn ? 'Copied!' : '¡Copiado!'}</span>
          </>
        ) : (
          <>
            <Copy size={15} aria-hidden="true" />
            <span>{isEn ? 'Copy email' : 'Copiar correo'}</span>
          </>
        )}
      </button>
      {copied && (
        <output className="copy-toast" aria-live="polite">
          {isEn ? 'Copied to clipboard ✓' : 'Copiado al portapapeles ✓'}
        </output>
      )}
    </div>
  );
}
