'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyEmailButton({ email = 'sebastianzambrano2818@gmail.com' }: { email?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard API fails
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="copy-email-container">
      <button
        type="button"
        onClick={handleCopy}
        className="copy-email-btn"
        aria-label={copied ? 'Correo copiado al portapapeles' : `Copiar correo ${email}`}
        title="Copiar correo al portapapeles"
      >
        {copied ? (
          <>
            <Check size={17} className="text-primary" aria-hidden="true" />
            <span>¡Copiado!</span>
          </>
        ) : (
          <>
            <Copy size={16} aria-hidden="true" />
            <span>Copiar correo</span>
          </>
        )}
      </button>
      {copied && (
        <output className="copy-toast" aria-live="polite">
          Copiado al portapapeles ✓
        </output>
      )}
    </div>
  );
}
