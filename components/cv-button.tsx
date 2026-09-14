'use client';

import React from 'react';
import { FileText } from 'lucide-react';

interface CvButtonProps {
  variant?: 'pill' | 'header' | 'link';
  className?: string;
}

export function CvButton({ variant = 'pill', className = '' }: CvButtonProps) {
  if (variant === 'header') {
    return (
      <a
        href="/cv"
        target="_blank"
        rel="noopener noreferrer"
        className={`cv-header-link ${className}`}
        title="Ver y descargar Hoja de Vida (PDF)"
      >
        <FileText size={14} />
        <span>CV / Hoja de Vida</span>
      </a>
    );
  }

  return (
    <a
      href="/cv"
      target="_blank"
      rel="noopener noreferrer"
      className={`cv-pill-btn ${className}`}
      title="Ver formato ATS y descargar en PDF"
    >
      <FileText size={15} />
      <span>Ver Hoja de Vida (CV) ↗</span>
    </a>
  );
}
