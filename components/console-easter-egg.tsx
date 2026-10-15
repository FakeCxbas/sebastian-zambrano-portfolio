'use client';

import { useEffect, useRef } from 'react';

export function ConsoleEasterEgg() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Registrar comandos interactivos en window
    if (typeof window !== 'undefined') {
      const globalWindow = window as any;

      globalWindow.contratar = globalWindow.hire = () => {
        const email = 'sebastianzambrano2818@gmail.com';
        navigator.clipboard?.writeText(email).catch(() => {});
        console.log(
          '%c🚀 ¡Excelente decisión! Correo copiado al portapapeles: ' + email + '\nTambién puedes escribirme directo a WhatsApp: https://wa.me/593998134331',
          'color: #c6fa78; font-weight: bold; font-size: 13px;'
        );
        window.location.href = `mailto:${email}?subject=Oportunidad%20Laboral%20-%20Sebasti%C3%A1n%20Zambrano`;
        return 'Abriendo cliente de correo...';
      };

      globalWindow.whatsapp = () => {
        window.open('https://wa.me/593998134331?text=Hola%20Sebasti%C3%A1n%2C%20vi%20tu%20portafolio%20desde%20la%20consola%20de%20desarrollador!', '_blank');
        return 'Abriendo WhatsApp...';
      };

      globalWindow.proyectos = globalWindow.projects = (nombre?: string) => {
        if (nombre) {
          window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { projectName: nombre } }));
          const section = document.getElementById('proyectos');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
          return `Abriendo ficha técnica de: ${nombre}`;
        }

        console.table([
          { Proyecto: 'ContaNova', Tipo: 'Facturación & Gestión Comercial', Stack: 'React, TypeScript, PostgreSQL' },
          { Proyecto: 'TechView', Tipo: 'Visión Artificial Asistiva', Stack: 'Python, OpenCV, YOLOv8, Raspberry Pi' },
          { Proyecto: 'Taller Jeldes', Tipo: 'App Móvil Operativa', Stack: 'Flutter, Dart, IA aplicada' },
          { Proyecto: 'MxCorreo', Tipo: 'Saneamiento Masivo de Datos', Stack: 'Python, Tkinter, SQLite' },
          { Proyecto: 'San Viernes', Tipo: 'Software PC & Móvil', Stack: 'React, TypeScript, Electron, Capacitor' },
          { Proyecto: 'SmartDocs', Tipo: 'Gestión Documental & OCR', Stack: 'React, TypeScript, Tesseract.js' },
        ]);
        console.log('%c💡 Tip: Puedes ejecutar proyectos("ContaNova") o proyectos("TechView") para abrir su ficha técnica directamente.', 'color: #38bdf8; font-style: italic;');
        return 'Lista de proyectos cargada.';
      };

      globalWindow.skills = () => {
        console.log('%c⚡ MATRIZ DE STACK TÉCNICO:', 'color: #c6fa78; font-weight: bold;');
        console.log('%c• Frontend:      %cReact, Next.js, TypeScript, Tailwind CSS, Vite', 'color: #38bdf8; font-weight: bold;', 'color: #f1f5f2;');
        console.log('%c• Backend & BD:  %cPython, FastAPI, PostgreSQL, SQLite', 'color: #38bdf8; font-weight: bold;', 'color: #f1f5f2;');
        console.log('%c• Móvil & Desk:  %cFlutter, Electron, Capacitor', 'color: #38bdf8; font-weight: bold;', 'color: #f1f5f2;');
        console.log('%c• IA & Embedded: %cOpenCV, YOLOv8, Raspberry Pi', 'color: #38bdf8; font-weight: bold;', 'color: #f1f5f2;');
        console.log('%c• DevOps & OS:   %cLinux, Docker, Git, GitHub Actions', 'color: #38bdf8; font-weight: bold;', 'color: #f1f5f2;');
        return 'Skills desplegadas.';
      };

      globalWindow.curriculum = globalWindow.cv = () => {
        window.open('/cv', '_blank');
        return 'Abriendo Currículum Vitae...';
      };

      globalWindow.ayuda = globalWindow.help = () => {
        console.log('%c🛠️ COMANDOS DISPONIBLES EN CONSOLA:', 'color: #c6fa78; font-weight: bold; font-size: 13px;');
        console.log('%c• contratar()  %c-> Copia mi correo y abre tu cliente de correo', 'color: #e2e8f0; font-weight: bold;', 'color: #94a3b8;');
        console.log('%c• proyectos()  %c-> Lista proyectos principales o abre uno: proyectos("ContaNova")', 'color: #e2e8f0; font-weight: bold;', 'color: #94a3b8;');
        console.log('%c• skills()     %c-> Despliega mi stack tecnológico', 'color: #e2e8f0; font-weight: bold;', 'color: #94a3b8;');
        console.log('%c• whatsapp()   %c-> Abre chat directo a mi WhatsApp', 'color: #e2e8f0; font-weight: bold;', 'color: #94a3b8;');
        console.log('%c• cv()         %c-> Abre mi Hoja de Vida en pestaña nueva', 'color: #e2e8f0; font-weight: bold;', 'color: #94a3b8;');
        return '¡Diviértete explorando!';
      };

      // Banner estilizado en consola
      const banner = `
  ███████╗███████╗   ██████╗ ███████╗██╗   ██╗
  ██╔════╝╚══███╔╝   ██╔══██╗██╔════╝██║   ██║
  ███████╗  ███╔╝    ██║  ██║█████╗  ██║   ██║
  ╚════██║ ███╔╝     ██║  ██║██╔══╝  ╚██╗ ██╔╝
  ███████║███████╗██╗██████╔╝███████╗ ╚████╔╝ 
  ╚══════╝╚══════╝╚═╝╚═════╝ ╚══════╝  ╚═══╝  `;

      console.log(
        `%c${banner}`,
        'color: #c6fa78; font-family: monospace; font-size: 11px; font-weight: bold; line-height: 1.2;'
      );

      console.log(
        '%c Sebastián Zambrano %c Full-Stack & Computer Vision Developer %c Guayaquil, Ecuador 🇪🇨 ',
        'background: #c6fa78; color: #101412; font-weight: bold; padding: 3px 6px; border-radius: 3px 0 0 3px;',
        'background: #1e2920; color: #f1f5f2; padding: 3px 6px;',
        'background: #0ea5e9; color: #ffffff; font-weight: bold; padding: 3px 6px; border-radius: 0 3px 3px 0;'
      );

      console.log(
        '%c¡Hola dev o reclutador! 👾 Si estás leyendo esto, valoras los detalles técnicos tanto como yo.\n' +
        'Escribe %cayuda()%c en esta consola para interactuar con comandos personalizados como %cproyectos()%c, %cskills()%c o %ccontratar()%c.',
        'color: #94a3b8; font-size: 12px; line-height: 1.6;',
        'color: #c6fa78; font-weight: bold; background: rgba(198, 250, 120, 0.1); padding: 1px 4px; border-radius: 3px;',
        'color: #94a3b8;',
        'color: #38bdf8; font-weight: bold;',
        'color: #94a3b8;',
        'color: #a855f7; font-weight: bold;',
        'color: #94a3b8;',
        'color: #25d366; font-weight: bold;',
        'color: #94a3b8;'
      );
    }
  }, []);

  return null;
}
