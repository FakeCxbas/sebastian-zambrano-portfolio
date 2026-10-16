'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

function ArchLogo({ size = 16 }: { size?: number }) {
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
        '> Reorientando conexión hacia https://sebastianzambrano.dev/ ...',
        '> Regresando a la estación base.',
      ]);
      setTimeout(() => {
        router.push('/');
      }, 500);
      return;
    }

    if (clean === '/proyectos' || clean === 'proyectos' || clean === 'projects' || clean === 'cd proyectos') {
      setIsReturning(true);
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@archlinux ~]$ ${raw}`,
        '> Abriendo catálogo de proyectos...',
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
        '> Abriendo Currículum Vitae (PDF) en nueva pestaña...',
      ]);
      window.open('/cv', '_blank');
      setCommandInput('');
      return;
    }

    if (clean === '/whatsapp' || clean === 'whatsapp') {
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@archlinux ~]$ ${raw}`,
        '> Iniciando enlace seguro con WhatsApp (+593 99 813 4331)...',
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
        '  /back       -> Retornar al inicio del portafolio',
        '  /proyectos  -> Explorar proyectos en producción',
        '  /cv         -> Ver Currículum Vitae',
        '  /whatsapp   -> Abrir chat directo',
        '  /clear      -> Limpiar pantalla',
      ]);
      setCommandInput('');
      return;
    }

    setTerminalHistory((prev) => [
      ...prev,
      `[sz@archlinux ~]$ ${raw}`,
      `zsh: command not found: ${raw}. Escribe /back o presiona Enter para volver.`,
    ]);
    setCommandInput('');
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    executeCmd(commandInput || '/back');
  };

  return (
    <div className="not-found-container">
      {/* Resplandor y malla cyberpunk de fondo */}
      <div className="not-found-glow" aria-hidden="true" />
      <div className="not-found-grid-mesh" aria-hidden="true" />

      <div className="not-found-card arch-card-wrapper">
        {/* Barra superior con telemetría */}
        <div className="not-found-status-bar">
          <span className="not-found-badge arch-badge">
            <span className="not-found-pulse-dot" aria-hidden="true" />
            <span>ERROR 404 // KERNEL ROUTE MISSING</span>
          </span>
          <span className="not-found-coords">ARCH LINUX 6.12.9 · GUAYAQUIL</span>
        </div>

        {/* Número 404 estético */}
        <div className="not-found-code-wrapper">
          <h1 className="not-found-code">404</h1>
          <span className="not-found-code-glow" aria-hidden="true">404</span>
        </div>

        <h2 className="not-found-title">Destino no encontrado / Route Not Found</h2>
        <p className="not-found-desc">
          El endpoint solicitado no está mapeado en el servidor. Usa la terminal de Arch a continuación para retornar a la base.
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

            {/* PROMPT PRINCIPAL INTERACTIVO CON /back */}
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
                    placeholder="/back"
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="off"
                    aria-label="Comando de terminal"
                  />
                  {/* Si el input está vacío, muestra /back como sugerencia con el cursor parpadeante */}
                  {!commandInput && (
                    <span className="arch-placeholder-overlay" style={{ pointerEvents: 'none' }} aria-hidden="true">
                      <span className="arch-cmd-glow">/back</span>
                      <span className="arch-blinking-cursor" aria-hidden="true">▋</span>
                    </span>
                  )}
                </div>

                {/* Botón de Ejecutar / Enter */}
                <button
                  type="submit"
                  className={`arch-enter-btn ${isReturning ? 'is-loading' : ''}`}
                  title="Ejecutar comando (Enter)"
                >
                  <span className="arch-enter-text">↵ enter</span>
                </button>
              </div>
            </form>

            {/* ATAJOS RÁPIDOS DE COMANDOS ESTILO ZSH */}
            <div className="arch-cmd-suggestions">
              <span className="arch-sugg-label">comandos:</span>
              <button
                type="button"
                className="arch-sugg-chip is-accent"
                onClick={() => executeCmd('/back')}
                title="Ejecutar: cd ~ (volver al inicio)"
              >
                <span className="sugg-cmd">cd ~</span>
                <span className="sugg-desc">(/back)</span>
              </button>
              <button
                type="button"
                className="arch-sugg-chip"
                onClick={() => executeCmd('/proyectos')}
                title="Ejecutar: /proyectos"
              >
                <span className="sugg-cmd">/proyectos</span>
              </button>
              <button
                type="button"
                className="arch-sugg-chip"
                onClick={() => executeCmd('/cv')}
                title="Ejecutar: /cv"
              >
                <span className="sugg-cmd">/cv</span>
              </button>
              <button
                type="button"
                className="arch-sugg-chip"
                onClick={() => executeCmd('/whatsapp')}
                title="Ejecutar: /whatsapp"
              >
                <span className="sugg-cmd">/whatsapp</span>
              </button>
              <button
                type="button"
                className="arch-sugg-chip"
                onClick={() => executeCmd('/help')}
                title="Ejecutar: help"
              >
                <span className="sugg-cmd">help</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
