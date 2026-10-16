'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

function ArchLogo({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 300 300" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path
        fill="#1793d1"
        d="M141.6 8.4C137.4 18.2 127 41.5 118.5 60.1 94.4 113.1 48.9 213.1 48.9 213.6c0 .4 6.8-6.1 15-14.3 28.5-28.5 54.3-43.9 78.4-46.8 9.9-1.2 24.3.4 34.2 3.8 2.2.8 4.2 1.4 4.5 1.4.3 0-1.8-1.5-4.7-3.4-15.6-10.1-27.1-23.7-31.5-37.4-2.8-8.8-2.6-19.6.5-28.8 4.9-14.4 16.2-25.7 30.6-30.6 8.8-3 19.6-3.1 28.5-.4 14.1 4.4 25.4 15.4 30.2 29.5 2.8 8.1 2.8 19.3 0 27.5-4.4 13.1-15 25.8-29.6 35.6-4.2 2.8-8 5.6-8.5 6.2-.7.8 1.4 2.1 7.2 4.4 14.1 5.7 33.3 18.8 49.3 33.8 13.1 12.3 27 28.6 30.4 35.7.5 1 .7.8.9-.7.4-2.4-29.2-70.5-70.7-162.1C186.7 107.5 152.4 32.5 144.4 9.4c-.6-1.7-1.4-1.7-2.8-1z"
      />
    </svg>
  );
}

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [pathname, setPathname] = useState('/ruta-desconocida');
  const [commandInput, setCommandInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [isReturning, setIsReturning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      if (typeof window !== 'undefined') {
        setPathname(window.location.pathname || '/ruta-desconocida');
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const executeCmd = (cmd: string) => {
    const raw = cmd.trim();
    const clean = raw.toLowerCase();
    if (!clean) return;

    if (
      clean === '/back' ||
      clean === 'back' ||
      clean === 'cd ..' ||
      clean === 'cd ~' ||
      clean === 'cd' ||
      clean === 'home' ||
      clean === 'exit'
    ) {
      setIsReturning(true);
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@archlinux ~]$ ${raw}`,
        '> Regresando a la estación principal (Home)...',
      ]);
      setTimeout(() => {
        router.push('/');
      }, 400);
      return;
    }

    if (clean === '/proyectos' || clean === 'proyectos' || clean === 'projects' || clean === 'cd proyectos') {
      setIsReturning(true);
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@archlinux ~]$ ${raw}`,
        '> Abriendo proyectos...',
      ]);
      setTimeout(() => {
        router.push('/#proyectos');
      }, 400);
      return;
    }

    if (clean === '/cv' || clean === 'cv' || clean === 'cat cv') {
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@archlinux ~]$ ${raw}`,
        '> Abriendo Currículum Vitae (PDF)...',
      ]);
      window.open('/cv', '_blank');
      setCommandInput('');
      return;
    }

    if (clean === '/whatsapp' || clean === 'whatsapp') {
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@archlinux ~]$ ${raw}`,
        '> Iniciando WhatsApp (+593 99 813 4331)...',
      ]);
      window.open('https://wa.me/593998134331?text=Hola%20Sebasti%C3%A1n%2C%20vi%20tu%20terminal%20en%20el%20portafolio.', '_blank');
      setCommandInput('');
      return;
    }

    if (clean === 'clear' || clean === '/clear') {
      setTerminalHistory([]);
      setCommandInput('');
      return;
    }

    if (clean === 'help' || clean === '/help' || clean === 'ls') {
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@archlinux ~]$ ${raw}`,
        'COMANDOS DISPONIBLES EN ARCH:',
        '  cd ~        -> Volver al inicio',
        '  /proyectos  -> Ver proyectos en producción',
        '  /cv         -> Ver Currículum Vitae',
        '  /whatsapp   -> Abrir chat directo',
        '  clear       -> Limpiar terminal',
      ]);
      setCommandInput('');
      return;
    }

    setTerminalHistory((prev) => [
      ...prev,
      `[sz@archlinux ~]$ ${raw}`,
      `zsh: command not found: ${raw}. Escribe 'cd ~' o presiona Enter para volver.`,
    ]);
    setCommandInput('');
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) {
      executeCmd('cd ~');
    } else {
      executeCmd(commandInput);
    }
  };

  return (
    <div className="not-found-container">
      <div className="not-found-glow" aria-hidden="true" />
      <div className="not-found-grid-mesh" aria-hidden="true" />

      <div className="not-found-card arch-card-wrapper">
        {/* Número 404 estético y limpio */}
        <div className="not-found-code-wrapper">
          <h1 className="not-found-code">404</h1>
          <span className="not-found-code-glow" aria-hidden="true">404</span>
        </div>

        <h2 className="not-found-title">Página no encontrada</h2>
        <p className="not-found-desc">
          La ruta que buscas no existe o ha sido movida.
        </p>

        {/* TERMINAL REALISTA DE ARCH LINUX */}
        <section className="arch-terminal-window" aria-label="Terminal Arch Linux">
          {/* Header de la ventana estilo Tiling / Alacritty */}
          <div className="arch-terminal-topbar">
            <div className="arch-topbar-left">
              <div className="terminal-dots" aria-hidden="true">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="arch-title-group">
                <ArchLogo size={14} />
                <span className="arch-window-title">sz@archlinux: ~ (zsh)</span>
              </div>
            </div>
            <div className="arch-topbar-tags" aria-hidden="true">
              <span className="arch-tag is-active">[1: term]</span>
              <span className="arch-tag">[2: code]</span>
              <span className="arch-tag">[3: web]</span>
            </div>
          </div>

          {/* Cuerpo de la terminal */}
          <div className="arch-terminal-body">
            <p className="arch-banner-line">Arch Linux 6.12.9-arch1-1 (tty1) - Guayaquil station</p>

            <div className="arch-log-block">
              <p className="arch-line">
                <span className="arch-prompt-user">sz@archlinux</span>
                <span className="arch-prompt-colon">:</span>
                <span className="arch-prompt-path">~</span>
                <span className="arch-prompt-symbol">$</span>
                <span className="arch-cmd-text">curl -I https://sebastianzambrano.dev{mounted ? pathname : '/404'}</span>
              </p>
              <p className="arch-output arch-out-error">HTTP/2 404 Not Found</p>
              <p className="arch-output arch-out-dim">server: arch-edge-gateway</p>
              <p className="arch-output arch-out-warn">[!] Destination unreachable: target path not registered in production routes.</p>
            </div>

            {/* Historial interactivo si el usuario escribe comandos */}
            {terminalHistory.map((line, idx) => (
              <p key={idx} className="arch-output arch-out-custom">
                {line}
              </p>
            ))}

            {/* PROMPT PRINCIPAL LIMPIO (SIN TEXTO PRE-ESCRITO) */}
            <form onSubmit={handleSubmit} className="arch-interactive-form">
              <div className="arch-prompt-row">
                <span className="arch-prompt-user">sz@archlinux</span>
                <span className="arch-prompt-colon">:</span>
                <span className="arch-prompt-path">~</span>
                <span className="arch-prompt-symbol">$</span>

                <div className="arch-input-wrapper">
                  <input
                    ref={inputRef}
                    type="text"
                    className="arch-cli-input"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder=""
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="off"
                    aria-label="Comando de terminal"
                  />
                  {!commandInput && (
                    <span className="arch-blinking-cursor" aria-hidden="true">▋</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`arch-enter-btn ${isReturning ? 'is-loading' : ''}`}
                  title="Ejecutar (Enter)"
                >
                  <span className="arch-enter-text">↵ enter</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ENLACES RÁPIDOS TRADICIONALES LIMPIOS */}
        <div className="not-found-actions">
          <Link href="/" className="primary-link">
            <span className="primary-link-text">Volver al inicio / Back to Home</span>
            <span className="primary-link-icon" aria-hidden="true">↗</span>
          </Link>
          <Link href="/cv" className="cv-view-link">
            <span>Ver Curriculum Vitae (CV)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
