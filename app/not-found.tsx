'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

function SzLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}
    >
      <rect width="40" height="40" rx="9" fill="rgba(198, 250, 120, 0.12)" stroke="rgba(198, 250, 120, 0.35)" strokeWidth="1.5" />
      <text
        x="7"
        y="27"
        fill="#f8fafc"
        fontFamily="var(--font-geist-sans), Arial, sans-serif"
        fontSize="21"
        fontWeight="850"
        letterSpacing="-0.06em"
      >
        sz<tspan fill="#c6fa78">.</tspan>
      </text>
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
        `[sz@portfolio ~]$ ${raw}`,
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
        `[sz@portfolio ~]$ ${raw}`,
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
        `[sz@portfolio ~]$ ${raw}`,
        '> Abriendo Currículum Vitae (PDF) en nueva pestaña...',
      ]);
      window.open('/cv', '_blank');
      setCommandInput('');
      return;
    }

    if (clean === '/whatsapp' || clean === 'whatsapp') {
      setTerminalHistory((prev) => [
        ...prev,
        `[sz@portfolio ~]$ ${raw}`,
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
        `[sz@portfolio ~]$ ${raw}`,
        'COMANDOS DISPONIBLES EN SZ.DEV:',
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
      `[sz@portfolio ~]$ ${raw}`,
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
        {/* ARTE DE CARACTERES ASCII 404 */}
        <div className="not-found-ascii-wrapper" aria-label="Código 404 en arte de caracteres">
          <pre className="not-found-ascii-art">
{` ██╗  ██╗   ██████╗   ██╗  ██╗
 ██║  ██║  ██╔═████╗  ██║  ██║
 ███████║  ██║██╔██║  ███████║
 ╚════██║  ████╔╝██║  ╚════██║
      ██║  ╚██████╔╝       ██║
      ╚═╝   ╚═════╝        ╚═╝`}
          </pre>
        </div>

        <h2 className="not-found-title">Destino no encontrado / Route Not Found</h2>
        <p className="not-found-desc">
          El endpoint solicitado no está mapeado en el servidor. Usa la terminal interactiva a continuación para retornar a la base.
        </p>

        {/* TERMINAL INTERACTIVA SZ.DEV */}
        <section className="arch-terminal-window" aria-label="Terminal interactiva de Sebastián Zambrano">
          {/* Header de la ventana estilo Tiling / Alacritty */}
          <div className="arch-terminal-topbar">
            <div className="arch-topbar-left">
              <div className="terminal-dots" aria-hidden="true">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="arch-title-group">
                <SzLogo size={18} />
                <span className="arch-window-title">sz@portfolio: ~ (zsh)</span>
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
            <p className="arch-banner-line">sz-terminal v2.4 (tty1) - Guayaquil station</p>

            <div className="arch-log-block">
              <p className="arch-line">
                <span className="arch-prompt-user">sz@portfolio</span>
                <span className="arch-prompt-colon">:</span>
                <span className="arch-prompt-path">~</span>
                <span className="arch-prompt-symbol">$</span>
                <span className="arch-cmd-text">curl -I https://sebastianzambrano.dev{mounted ? pathname : '/404'}</span>
              </p>
              <p className="arch-output arch-out-error">HTTP/2 404 Not Found</p>
              <p className="arch-output arch-out-dim">server: edge-gateway (sebastianzambrano.dev)</p>
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
                <span className="arch-prompt-user">sz@portfolio</span>
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
          </div>
        </section>
      </div>
    </div>
  );
}
