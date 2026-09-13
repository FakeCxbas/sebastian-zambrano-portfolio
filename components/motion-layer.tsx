'use client';

import { useEffect } from 'react';

export function MotionLayer() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets = document.querySelectorAll('.section-title, .project, .about > div, .timeline article, .contact > *');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    if (!reduced.matches) targets.forEach(target => { target.classList.add('reveal'); observer.observe(target); });
    let frame = 0;
    const progressEl = document.getElementById('scroll-progress');
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        document.body.classList.toggle('scrolled', scrollY > 30);
        if (progressEl) {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
          progressEl.style.width = `${Math.min(100, Math.max(0, pct))}%`;
        }
      });
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', update); targets.forEach(t => t.classList.remove('reveal')); };
  }, []);
  return <div id="scroll-progress" className="scroll-progress-bar" aria-hidden="true" />;
}

export function HeroVisual() {
  return <aside className="personal-note" aria-label="El origen de mi trabajo">
    <span className="note-number">01</span>
    <div className="note-body">
      <span className="note-kicker">DE DÓNDE VENGO</span>
      <p>Antes de desarrollar para un negocio, <em>trabajé en uno.</em></p>
      <div className="note-detail">Atendí clientes, vendí repuestos y manejé inventarios. De esa experiencia nació ContaNova.</div>
      <a href="#proyectos" className="note-link">Conoce la historia <span aria-hidden="true">↘</span></a>
    </div>
  </aside>;
}

export function TechMarquee() {
  const items = ['React', 'TypeScript', 'Python', 'Flutter', 'PostgreSQL', 'Electron'];
  return <div className="tech-marquee" aria-label={`Tecnologías: ${items.join(', ')}`}><div className="marquee-track" aria-hidden="true">{[0,1].map(copy => <div className="marquee-group" key={copy}>{items.map(item => <span key={item}>{item}<i>✳</i></span>)}</div>)}</div></div>;
}
