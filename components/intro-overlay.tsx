'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/lib/i18n';

interface IntroOverlayProps {
  onComplete: () => void;
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const { t, locale } = useLanguage();
  const isEn = locale === 'en';

  const line1Full = t.intro?.line1 || (isEn ? "Hi, I'm Sebastián Zambrano." : "Hola, soy Sebastián Zambrano.");
  const line2Full = t.intro?.line2 || (isEn ? "I build software that solves real problems." : "Construyo software que resuelve problemas reales.");
  const skipText = t.intro?.skip || (isEn ? "Skip [Esc]" : "Saltar [Esc]");

  // Lazy initialize isDismissed to avoid calling setState directly in effect
  const [isDismissed, setIsDismissed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const seen = sessionStorage.getItem('portfolio_intro_seen') === 'true';
      return prefersReduced || seen;
    } catch {
      return false;
    }
  });

  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [showLine3, setShowLine3] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const hasTriggeredComplete = useRef(false);

  const handleFinish = useCallback(() => {
    if (hasTriggeredComplete.current) return;
    hasTriggeredComplete.current = true;
    setIsFadingOut(true);

    try {
      sessionStorage.setItem('portfolio_intro_seen', 'true');
    } catch {
      // Storage might be restricted
    }

    setTimeout(() => {
      setIsDismissed(true);
      onComplete();
    }, 700);
  }, [onComplete]);

  // Initial notify if already dismissed
  useEffect(() => {
    if (isDismissed) {
      onComplete();
    }
  }, [isDismissed, onComplete]);

  // Listeners for keyboard skip and manual replay event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleReplay = () => {
      hasTriggeredComplete.current = false;
      setIsDismissed(false);
      setIsFadingOut(false);
      setDisplayedLine1('');
      setDisplayedLine2('');
      setShowLine3(false);
    };
    window.addEventListener('portfolio:replay-intro', handleReplay);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('portfolio:replay-intro', handleReplay);
    };
  }, [handleFinish]);

  // Typing Sequence
  useEffect(() => {
    if (isDismissed) return;

    let timeoutId: NodeJS.Timeout;
    let charIdx = 0;

    // Step 0: Brief pitch black beat (280ms)
    timeoutId = setTimeout(() => {
      // Step 1: Type Line 1
      const typeLine1 = () => {
        if (charIdx <= line1Full.length) {
          setDisplayedLine1(line1Full.slice(0, charIdx));
          charIdx++;
          timeoutId = setTimeout(typeLine1, 38);
        } else {
          // Pause between lines (320ms)
          charIdx = 0;
          timeoutId = setTimeout(typeLine2, 320);
        }
      };

      // Step 2: Type Line 2
      const typeLine2 = () => {
        if (charIdx <= line2Full.length) {
          setDisplayedLine2(line2Full.slice(0, charIdx));
          charIdx++;
          timeoutId = setTimeout(typeLine2, 28);
        } else {
          // Step 3: Reveal Line 3 badges
          timeoutId = setTimeout(() => {
            setShowLine3(true);
            // Hold for reading, then dissolve curtain
            timeoutId = setTimeout(() => {
              handleFinish();
            }, 1100);
          }, 240);
        }
      };

      typeLine1();
    }, 280);

    return () => clearTimeout(timeoutId);
  }, [isDismissed, line1Full, line2Full, handleFinish]);

  if (isDismissed) return null;

  return (
    <aside
      className={`intro-cinematic-curtain ${isFadingOut ? 'is-fading-out' : ''}`}
      aria-label={isEn ? "Portfolio intro sequence" : "Secuencia de introducción del portafolio"}
    >
      {/* Invisible backdrop click-catcher */}
      <button
        type="button"
        className="intro-backdrop-catcher"
        onClick={handleFinish}
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="intro-terminal-box">
        {/* Monospace prompt prefix */}
        <div className="intro-sys-badge">
          <span className="intro-pulse-dot" />
          <span className="font-mono text-xs text-[#c6fa78] tracking-widest uppercase">
            SEBASTIAN_ZAMBRANO // V2026.1
          </span>
        </div>

        {/* Line 1: Name / Greeting */}
        <div className="intro-line-1" aria-live="polite">
          <span className="intro-text-highlight">{displayedLine1}</span>
          {!displayedLine2 && <span className="intro-caret" />}
        </div>

        {/* Line 2: Headline / Value proposition */}
        {displayedLine1.length >= line1Full.length && (
          <div className="intro-line-2" aria-live="polite">
            <span>{displayedLine2}</span>
            {displayedLine2.length < line2Full.length && <span className="intro-caret" />}
          </div>
        )}

        {/* Line 3: Pillars / Tags reveal */}
        <div className={`intro-pillars-row ${showLine3 ? 'is-visible' : ''}`}>
          <div className="intro-pillar-badge">
            <span className="intro-pillar-dot" />
            <span>{isEn ? "Native Systems" : "Sistemas Nativos"}</span>
          </div>
          <div className="intro-pillar-badge">
            <span className="intro-pillar-dot" />
            <span>{isEn ? "Fullstack Web" : "Aplicaciones Web"}</span>
          </div>
          <div className="intro-pillar-badge">
            <span className="intro-pillar-dot" />
            <span>{isEn ? "Applied AI" : "Inteligencia Artificial"}</span>
          </div>
        </div>
      </div>

      {/* Discrete Skip Button */}
      <button
        type="button"
        className="intro-skip-btn"
        onClick={handleFinish}
        title={isEn ? "Skip entrance animation (Esc)" : "Saltar animación de entrada (Esc)"}
      >
        <span>{skipText}</span>
        <span className="intro-skip-arrow">→</span>
      </button>

      {/* Subtle ambient scanline overlay */}
      <div className="intro-scanlines" aria-hidden="true" />
    </aside>
  );
}
