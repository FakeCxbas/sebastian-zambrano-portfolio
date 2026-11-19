'use client';

import React, { useEffect } from 'react';
import { getTechMeta } from '@/components/tech-icons';

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
  return (
    <>
      <div id="scroll-progress" className="scroll-progress-bar" aria-hidden="true" />
      <div className="ambient-mesh-glow" aria-hidden="true">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>
    </>
  );
}

import { RemoteHud } from '@/components/remote-hud';

export function HeroVisual() {
  return <RemoteHud />;
}

export { TechMarquee } from '@/components/tech-marquee';
