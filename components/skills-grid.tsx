'use client';

import React from 'react';
import { Layout, Cpu, Boxes, Briefcase } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import {
  ReactIcon,
  TypeScriptIcon,
  FlutterIcon,
  DartIcon,
  JavaScriptIcon,
  TailwindIcon,
  PythonIcon,
  OpenCvIcon,
  YoloIcon,
  PostgresIcon,
  SqliteIcon,
  FastApiIcon as RestApiIcon,
  GitIcon,
  GithubIcon,
  ElectronIcon,
  CapacitorIcon,
  ViteIcon,
  NextjsIcon,
  RaspberryPiIcon,
  SriIcon,
  SalesIcon,
  TrainingIcon,
  EnglishIcon,
} from '@/components/tech-icons';

interface SkillItem {
  name: string;
  enName?: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SkillCategory {
  titleEs: string;
  titleEn: string;
  headerIcon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  items: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    titleEs: 'Desarrollo Frontend & Móvil',
    titleEn: 'Frontend & Mobile Engineering',
    headerIcon: Layout,
    accentColor: '#38BDF8',
    items: [
      { name: 'React 19', color: '#61DAFB', icon: ReactIcon },
      { name: 'TypeScript', color: '#3178C6', icon: TypeScriptIcon },
      { name: 'Next.js', color: '#FFFFFF', icon: NextjsIcon },
      { name: 'Flutter', color: '#42A5F5', icon: FlutterIcon },
      { name: 'Dart', color: '#0175C2', icon: DartIcon },
      { name: 'Tailwind & CSS', color: '#38BDF8', icon: TailwindIcon },
    ],
  },
  {
    titleEs: 'Backend, Datos & IA',
    titleEn: 'Backend, Data & AI',
    headerIcon: Cpu,
    accentColor: '#10B981',
    items: [
      { name: 'Python', color: '#3776AB', icon: PythonIcon },
      { name: 'PostgreSQL', color: '#336791', icon: PostgresIcon },
      { name: 'SQLite', color: '#0F7FCC', icon: SqliteIcon },
      { name: 'APIs REST', enName: 'RESTful APIs', color: '#009688', icon: RestApiIcon },
      { name: 'OpenCV', color: '#128DFF', icon: OpenCvIcon },
      { name: 'YOLOv8', color: '#10B981', icon: YoloIcon },
    ],
  },
  {
    titleEs: 'Herramientas & Entornos',
    titleEn: 'Tooling & Infrastructure',
    headerIcon: Boxes,
    accentColor: '#A78BFA',
    items: [
      { name: 'Git & GitHub', color: '#F05032', icon: GitIcon },
      { name: 'Electron', color: '#47848F', icon: ElectronIcon },
      { name: 'Capacitor', color: '#119EFF', icon: CapacitorIcon },
      { name: 'Vite', color: '#646CFF', icon: ViteIcon },
      { name: 'Linux', color: '#FCC624', icon: GithubIcon },
      { name: 'Raspberry Pi', color: '#C51A4A', icon: RaspberryPiIcon },
    ],
  },
  {
    titleEs: 'Negocio, Remoto & Soporte',
    titleEn: 'Business, Remote & Operations',
    headerIcon: Briefcase,
    accentColor: '#F59E0B',
    items: [
      { name: 'Facturación SRI', enName: 'SRI Electronic Invoicing', color: '#10B981', icon: SriIcon },
      { name: 'Inglés Profesional (B2)', enName: 'Professional English (B2)', color: '#A78BFA', icon: EnglishIcon },
      { name: 'Atención y Soporte', enName: 'Client Facing & Support', color: '#38BDF8', icon: SalesIcon },
      { name: 'Capacitación', enName: 'User Onboarding', color: '#F59E0B', icon: TrainingIcon },
    ],
  },
];

export function SkillsGrid() {
  const { locale } = useLanguage();
  const isEn = locale === 'en';

  return (
    <div className="skills-grid">
      {SKILL_CATEGORIES.map((cat) => {
        const HeaderIcon = cat.headerIcon;
        const title = isEn ? cat.titleEn : cat.titleEs;
        return (
          <div key={cat.titleEs} className="skill-card">
            <div className="skill-card-head">
              <span
                className="skill-icon-badge"
                style={{
                  color: cat.accentColor,
                  background: `${cat.accentColor}18`,
                  borderColor: `${cat.accentColor}33`,
                }}
              >
                <HeaderIcon size={16} />
              </span>
              <h3>{title}</h3>
            </div>
            <div className="skill-pills">
              {cat.items.map((item) => {
                const Icon = item.icon;
                const label = isEn && item.enName ? item.enName : item.name;
                return (
                  <span
                    key={item.name}
                    className="skill-pill"
                    style={
                      {
                        '--pill-color': item.color,
                        '--pill-hover-bg': `${item.color}15`,
                        '--pill-glow': `${item.color}35`,
                      } as React.CSSProperties
                    }
                  >
                    <Icon />
                    <span>{label}</span>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
