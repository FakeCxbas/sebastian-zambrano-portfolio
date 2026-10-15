'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Search } from 'lucide-react';

interface NavItem {
  id: string;
  href: string;
  label: string;
  isContact?: boolean;
}

export function NavbarNav() {
  const { t, locale } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const navItems: NavItem[] = [
    { id: 'proyectos', href: '#proyectos', label: t.nav.projects },
    { id: 'sobre-mi', href: '#sobre-mi', label: t.nav.about },
    { id: 'trayectoria', href: '#trayectoria', label: t.nav.experience },
    { id: 'contacto', href: '#contacto', label: t.nav.contact, isContact: true },
  ];

  // Actualizar la posición de la pastilla deslizante
  const updateIndicator = (targetId: string | null) => {
    if (!targetId || targetId === 'contacto') {
      // El botón de contacto tiene su propio estilo destacado
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const linkEl = linksRef.current.get(targetId);
    const navEl = navRef.current;
    if (linkEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const linkRect = linkEl.getBoundingClientRect();
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  // Observar qué sección está visible en la pantalla
  useEffect(() => {
    const sectionIds = ['inicio', 'proyectos', 'sobre-mi', 'trayectoria', 'contacto'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      let currentSection: string | null = null;

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = section.id;
          break;
        }
      }

      if (currentSection === 'inicio') {
        setActiveSection(null);
        updateIndicator(null);
      } else if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        updateIndicator(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => updateIndicator(activeSection), { passive: true });

    // Ejecución inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => updateIndicator(activeSection));
    };
  }, [activeSection]);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    updateIndicator(id);
  };

  const handleOpenCmdK = () => {
    window.dispatchEvent(new CustomEvent('portfolio:open-cmd-k'));
  };

  return (
    <div className="navbar-nav-group">
      <nav ref={navRef} className="navbar-pill-nav" aria-label="Navegación principal">
        {/* Pastilla indicadora deslizante */}
        <span
          className="nav-sliding-pill"
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
          }}
          aria-hidden="true"
        />

        {navItems.map((item) => (
          <a
            key={item.id}
            ref={(el) => {
              if (el) linksRef.current.set(item.id, el);
              else linksRef.current.delete(item.id);
            }}
            href={item.href}
            className={`nav-link-item ${activeSection === item.id ? 'is-active-section' : ''} ${item.isContact ? 'nav-contact-btn' : ''}`}
            onClick={() => handleLinkClick(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Botón trigger para Command Palette (Cmd + K) */}
      <button
        type="button"
        className="cmd-k-trigger"
        onClick={handleOpenCmdK}
        title={locale === 'en' ? 'Open Command Palette (⌘K / Ctrl+K)' : 'Abrir Paleta de Comandos (⌘K / Ctrl+K)'}
        aria-label="Abrir buscador y atajos de teclado"
      >
        <Search size={13} className="cmd-k-icon" aria-hidden="true" />
        <span className="cmd-k-label">{locale === 'en' ? 'Search' : 'Buscar'}</span>
        <kbd className="cmd-k-kbd">⌘K</kbd>
      </button>
    </div>
  );
}
