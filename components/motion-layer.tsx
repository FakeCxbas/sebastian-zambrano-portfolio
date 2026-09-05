'use client';

import { useEffect, useRef } from 'react';

export function MotionLayer() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets = document.querySelectorAll('.section-title, .project, .about > div, .timeline article, .contact > *');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    if (!reduced.matches) targets.forEach(target => { target.classList.add('reveal'); observer.observe(target); });
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const length = document.documentElement.scrollHeight - window.innerHeight;
        if (progress.current) progress.current.style.transform = `scaleX(${length > 0 ? window.scrollY / length : 0})`;
        document.body.classList.toggle('scrolled', window.scrollY > 30);
      });
    };
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', update); targets.forEach(t => t.classList.remove('reveal')); };
  }, []);
  return <div className="scroll-progress" ref={progress} aria-hidden="true"/>;
}

export function HeroVisual() {
  return <aside className="personal-note" aria-label="El origen de mi trabajo">
    <span className="note-kicker">UN POCO DE CONTEXTO / 01</span>
    <p>Antes de desarrollar<br/>para un negocio,<br/><em>trabajé en uno.</em></p>
    <div className="note-detail">Atendí clientes, vendí repuestos y manejé inventarios. De esa experiencia en un taller nació ContaNova.</div>
    <a href="#proyectos" className="note-link">Esa historia sigue aquí <span aria-hidden="true">↘</span></a>
    <span className="note-signoff">Sebastián / Guayaquil</span>
  </aside>;
}

export function TechMarquee() {
  const items = ['React', 'TypeScript', 'Python', 'Flutter', 'PostgreSQL', 'Electron'];
  return <div className="tech-marquee" aria-label={`Tecnologías: ${items.join(', ')}`}><div className="marquee-track" aria-hidden="true">{[0,1].map(copy => <div className="marquee-group" key={copy}>{items.map(item => <span key={item}>{item}<i>✳</i></span>)}</div>)}</div></div>;
}
