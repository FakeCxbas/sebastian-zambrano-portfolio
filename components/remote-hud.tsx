'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';

export function RemoteHud() {
  const { locale } = useLanguage();
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'es-EC', {
          timeZone: 'America/Guayaquil',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setTimeStr(formatter.format(now));
      } catch {
        setTimeStr('UTC-5');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [locale]);

  const isEn = locale === 'en';

  return (
    <aside className="personal-note" aria-label="El origen de mi trabajo">
      <span className="note-number">01</span>
      <div className="note-body">
        <div className="note-header-row">
          <span className="note-kicker">
            {isEn ? 'WHERE I COME FROM' : 'DE DÓNDE VENGO'}
          </span>
          {timeStr && (
            <span className="note-live-time" title="Guayaquil, Ecuador · UTC-5 / EST">
              <span className="live-dot" /> {timeStr} · UTC-5
            </span>
          )}
        </div>

        <p>
          {isEn ? (
            <>Before writing code for a business, <em>I worked inside one.</em></>
          ) : (
            <>Antes de desarrollar para un negocio, <em>trabajé en uno.</em></>
          )}
        </p>

        <div className="note-detail">
          {isEn
            ? 'I assisted customers, sold automotive parts, and audited warehouse inventory. ContaNova was born from that daily operational friction.'
            : 'Atendí clientes, vendí repuestos y administré inventarios. De esa fricción real nació ContaNova.'}
        </div>

        <a href="#proyectos" className="note-link">
          <span>{isEn ? 'Read the story' : 'Conoce la historia'}</span>
          <span aria-hidden="true">↘</span>
        </a>
      </div>
    </aside>
  );
}
