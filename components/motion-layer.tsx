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
  return <div className="hero-visual" aria-hidden="true">
    <div className="orbital orbital-one"/><div className="orbital orbital-two"/><div className="orbital orbital-three"/>
    <div className="orb-core"><span>sz.</span></div>
    <span className="orbit-tag tag-web">&lt;/&gt; Web</span><span className="orbit-tag tag-mobile">✳ Mobile</span><span className="orbit-tag tag-desktop">⌘ Desktop</span>
    <span className="visual-caption">IDEA → CÓDIGO → REALIDAD</span>
  </div>;
}

export function TechMarquee() {
  const items = ['React', 'TypeScript', 'Python', 'Flutter', 'PostgreSQL', 'Electron'];
  return <div className="tech-marquee" aria-label={`Tecnologías: ${items.join(', ')}`}><div className="marquee-track" aria-hidden="true">{[0,1].map(copy => <div className="marquee-group" key={copy}>{items.map(item => <span key={item}>{item}<i>✳</i></span>)}</div>)}</div></div>;
}
