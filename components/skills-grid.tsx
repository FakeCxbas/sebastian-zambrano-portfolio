import React from 'react';
import { Layout, Cpu, Boxes, Briefcase } from 'lucide-react';
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
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SkillCategory {
  title: string;
  headerIcon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  items: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Desarrollo Frontend & Móvil',
    headerIcon: Layout,
    accentColor: '#38BDF8',
    items: [
      { name: 'React', color: '#61DAFB', icon: ReactIcon },
      { name: 'TypeScript', color: '#3178C6', icon: TypeScriptIcon },
      { name: 'Flutter', color: '#42A5F5', icon: FlutterIcon },
      { name: 'Dart', color: '#0175C2', icon: DartIcon },
      { name: 'JavaScript', color: '#F7DF1E', icon: JavaScriptIcon },
      { name: 'Tailwind & CSS', color: '#38BDF8', icon: TailwindIcon },
    ],
  },
  {
    title: 'Backend, Datos & IA',
    headerIcon: Cpu,
    accentColor: '#10B981',
    items: [
      { name: 'Python', color: '#3776AB', icon: PythonIcon },
      { name: 'OpenCV', color: '#128DFF', icon: OpenCvIcon },
      { name: 'YOLO', color: '#10B981', icon: YoloIcon },
      { name: 'PostgreSQL', color: '#336791', icon: PostgresIcon },
      { name: 'SQLite', color: '#0F7FCC', icon: SqliteIcon },
      { name: 'APIs REST', color: '#009688', icon: RestApiIcon },
    ],
  },
  {
    title: 'Herramientas & Entornos',
    headerIcon: Boxes,
    accentColor: '#A78BFA',
    items: [
      { name: 'Git', color: '#F05032', icon: GitIcon },
      { name: 'GitHub', color: '#FFFFFF', icon: GithubIcon },
      { name: 'Electron', color: '#47848F', icon: ElectronIcon },
      { name: 'Capacitor', color: '#119EFF', icon: CapacitorIcon },
      { name: 'Vite', color: '#646CFF', icon: ViteIcon },
      { name: 'Next.js', color: '#FFFFFF', icon: NextjsIcon },
      { name: 'Raspberry Pi', color: '#C51A4A', icon: RaspberryPiIcon },
    ],
  },
  {
    title: 'Negocio & Soporte',
    headerIcon: Briefcase,
    accentColor: '#F59E0B',
    items: [
      { name: 'Facturación SRI', color: '#10B981', icon: SriIcon },
      { name: 'Atención y Ventas', color: '#38BDF8', icon: SalesIcon },
      { name: 'Capacitación', color: '#F59E0B', icon: TrainingIcon },
      { name: 'Inglés Intermedio', color: '#A78BFA', icon: EnglishIcon },
    ],
  },
];

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {SKILL_CATEGORIES.map((cat) => {
        const HeaderIcon = cat.headerIcon;
        return (
          <div key={cat.title} className="skill-card">
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
              <h3>{cat.title}</h3>
            </div>
            <div className="skill-pills">
              {cat.items.map((item) => {
                const Icon = item.icon;
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
                    <span>{item.name}</span>
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
