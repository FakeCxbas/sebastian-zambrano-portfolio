'use client';

import React from 'react';
import { Printer } from 'lucide-react';

export function CvPrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cv-print-btn"
      title="Guardar o Imprimir en PDF"
    >
      <Printer size={16} />
      <span>Imprimir / Guardar en PDF</span>
    </button>
  );
}
