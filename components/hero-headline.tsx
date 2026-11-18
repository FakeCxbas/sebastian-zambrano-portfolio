'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/i18n';

interface HeroHeadlineProps {
  onComplete?: () => void;
}

export function HeroHeadline({ onComplete }: HeroHeadlineProps) {
  const { t } = useLanguage();

  const fullRole = t.hero.greeting; // e.g. "Hi, I'm" or "Hola, soy"
  const fullPart1 = t.hero.headlinePart1; // e.g. "Sebastián"
  const fullPart2 = t.hero.headlinePart2; // e.g. "Zambrano"

  const [replayKey, setReplayKey] = useState(0);

  const [displayedRole, setDisplayedRole] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return fullRole;
    }
    return '';
  });

  const [displayedPart1, setDisplayedPart1] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return fullPart1;
    }
    return '';
  });

  const [displayedPart2, setDisplayedPart2] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return fullPart2;
    }
    return '';
  });

  const [showPeriod, setShowPeriod] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });

  const [activeCursor, setActiveCursor] = useState<'role' | 'part1' | 'part2' | 'none'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'none';
    }
    return 'role';
  });

  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const handleReplay = () => {
      setReplayKey((k) => k + 1);
    };
    window.addEventListener('portfolio:replay-headline', handleReplay);
    return () => window.removeEventListener('portfolio:replay-headline', handleReplay);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayedRole(fullRole);
      setDisplayedPart1(fullPart1);
      setDisplayedPart2(fullPart2);
      setShowPeriod(true);
      setActiveCursor('none');
      onCompleteRef.current?.();
      return;
    }

    setDisplayedRole('');
    setDisplayedPart1('');
    setDisplayedPart2('');
    setShowPeriod(false);
    setActiveCursor('role');

    let timeoutId: NodeJS.Timeout;
    let charIdx = 0;

    // Step 1: Type greeting / role (e.g. "Hi, I'm")
    const typeRole = () => {
      if (charIdx <= fullRole.length) {
        setDisplayedRole(fullRole.slice(0, charIdx));
        charIdx++;
        timeoutId = setTimeout(typeRole, 38);
      } else {
        charIdx = 0;
        setActiveCursor('part1');
        timeoutId = setTimeout(typePart1, 140);
      }
    };

    // Step 2: Type first name (e.g. "Sebastián")
    const typePart1 = () => {
      if (charIdx <= fullPart1.length) {
        setDisplayedPart1(fullPart1.slice(0, charIdx));
        charIdx++;
        timeoutId = setTimeout(typePart1, 42);
      } else {
        charIdx = 0;
        setActiveCursor('part2');
        timeoutId = setTimeout(typePart2, 120);
      }
    };

    // Step 3: Type last name (e.g. "Zambrano")
    const typePart2 = () => {
      if (charIdx <= fullPart2.length) {
        setDisplayedPart2(fullPart2.slice(0, charIdx));
        charIdx++;
        timeoutId = setTimeout(typePart2, 42);
      } else {
        timeoutId = setTimeout(() => {
          setShowPeriod(true);
          setActiveCursor('none');
          onCompleteRef.current?.();
        }, 160);
      }
    };

    timeoutId = setTimeout(typeRole, 180);

    return () => clearTimeout(timeoutId);
  }, [fullRole, fullPart1, fullPart2, replayKey]);

  return (
    <div
      className="hero-heading-group"
      aria-label={`${fullRole} ${fullPart1} ${fullPart2}.`}
    >
      <span className="hero-role">
        {displayedRole}
        {activeCursor === 'role' && <span className="hero-inline-caret" aria-hidden="true" />}
      </span>

      <h1>
        <span className="hero-name-line">
          {displayedPart1}
          {activeCursor === 'part1' && <span className="hero-inline-caret hero-caret-lg" aria-hidden="true" />}
        </span>
        <br />
        <span className="hero-name-line">
          {displayedPart2}
          {activeCursor === 'part2' && <span className="hero-inline-caret hero-caret-lg" aria-hidden="true" />}
          {showPeriod && <span className="period hero-period-pop">.</span>}
        </span>
      </h1>
    </div>
  );
}
