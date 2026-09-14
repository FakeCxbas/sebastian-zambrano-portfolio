import React from 'react';
import { Layout, Cpu, Boxes, Briefcase } from 'lucide-react';

/* Brand SVGs */
function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" width="15" height="15" aria-hidden="true">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M4 8h8v2.5H9.5V20H6.5V10.5H4V8zm9.5 8c0 2.2 1.6 3.5 4 3.5 1.5 0 2.8-.5 3.5-1.2l-1-2c-.5.4-1.2.7-2.1.7-1 0-1.6-.5-1.6-1.3 0-.8.6-1.2 2-1.7 2.2-.8 3.2-1.7 3.2-3.4 0-2.1-1.6-3.3-3.8-3.3-1.4 0-2.6.4-3.4 1.1l1 2c.5-.4 1.3-.7 2-.7.9 0 1.5.4 1.5 1.2 0 .7-.6 1.1-1.8 1.5-2.2.8-3.5 1.7-3.5 3.6z" fill="#FFFFFF" />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6 18.5l2-.3c.4.8.8 1.3 1.7 1.3.8 0 1.3-.4 1.3-1.4v-7.1h2.4v7.2c0 2.2-1.3 3.2-3.3 3.2-1.8 0-3-.9-3.7-2.4l-.4-.5zm8.5-.2l2-.4c.4.9 1 1.4 2 1.4.9 0 1.5-.4 1.5-1 0-.7-.5-1-1.8-1.5-2.2-.8-3.3-1.7-3.3-3.4 0-1.9 1.4-3.3 3.7-3.3 1.7 0 2.9.6 3.6 2l-1.9 1.2c-.4-.7-.9-1-1.7-1-.7 0-1.2.4-1.2.9 0 .6.4.9 1.6 1.3 2.4.9 3.5 1.8 3.5 3.6 0 2.1-1.6 3.5-4 3.5-2.2 0-3.6-1-4.2-2.8z" fill="#000000" />
    </svg>
  );
}

function FlutterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M14.3 0L2.3 12l3.7 3.7L21.7 0h-7.4z" fill="#42A5F5" />
      <path d="M14.3 11l-6.2 6.1L12 21l6.1-6.1 3.6 3.5L14.3 24H6.9l6.1-6.1-6.1-6.2L8.7 9.8z" fill="#02569B" />
      <path d="M12 21l-3.9-3.9 3.9-3.8 3.8 3.8L12 21z" fill="#01579B" />
      <path d="M15.9 17.1L12 13.3l3.9-3.9 3.8 3.9-3.8 3.8z" fill="#29B6F6" />
    </svg>
  );
}

function DartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M4.1 3.2L12 11.1l7.9-7.9H4.1z" fill="#0081C6" />
      <path d="M19.9 3.2L12 11.1l4.9 10.4 4.5-4.5c1.4-1.4 1.4-3.6 0-5L19.9 3.2z" fill="#00B4AB" />
      <path d="M4.1 3.2L12 11.1l-10.4 5c-1.4-1.4-1.4-3.6 0-5L4.1 3.2z" fill="#005B9C" />
      <path d="M12 11.1L4.1 19l2.5 2.5c1.4 1.4 3.6 1.4 5 0l5.3-5.3-4.9-5.1z" fill="#00A98F" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M12 6c-2.6 0-4.3 1.3-5.1 3.8 1-.9 2.1-1.3 3.3-1.3 1.8 0 3.1 1.2 4.4 2.5 2.2 2.2 4.7 3.5 8.4 3.5 2.6 0 4.3-1.3 5.1-3.8-1 .9-2.1 1.3-3.3 1.3-1.8 0-3.1-1.2-4.4-2.5C18.2 7.3 15.7 6 12 6zm-8.4 8.5C1 14.5-.7 15.8-1.5 18.3c1-.9 2.1-1.3 3.3-1.3 1.8 0 3.1 1.2 4.4 2.5C8.4 21.7 10.9 23 14.6 23c2.6 0 4.3-1.3 5.1-3.8-1 .9-2.1 1.3-3.3 1.3-1.8 0-3.1-1.2-4.4-2.5-2.2-2.2-4.7-3.5-8.4-3.5z" fill="#38BDF8" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M11.9 1.1c-2.9 0-4.8.4-5.8 1.1-1.6 1.1-1.5 2.4-1.5 5.3v2h7.4v1H4.6c-2.8 0-4.5 1.5-4.5 4.5 0 2.5 1.2 4.5 4.2 4.5h2.1v-2.8c0-2.3 2-4.2 4.3-4.2h7.3c1.9 0 3.4-1.5 3.4-3.4V4.6c0-2.4-1.6-3.5-4.5-3.5h-4.9zm-2.4 2.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z" fill="#3776AB" />
      <path d="M12.1 22.9c2.9 0 4.8-.4 5.8-1.1 1.6-1.1 1.5-2.4 1.5-5.3v-2h-7.4v-1h7.4c2.8 0 4.5-1.5 4.5-4.5 0-2.5-1.2-4.5-4.2-4.5h-2.1v2.8c0 2.3-2 4.2-4.3 4.2H6c-1.9 0-3.4 1.5-3.4 3.4v4.5c0 2.4 1.6 3.5 4.5 3.5h5zm2.4-2.1c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z" fill="#FFD43B" />
    </svg>
  );
}

function OpenCvIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <circle cx="12" cy="7" r="4.2" fill="#EE2C2C" />
      <circle cx="7" cy="16" r="4.2" fill="#3CB371" />
      <circle cx="17" cy="16" r="4.2" fill="#1E90FF" />
      <circle cx="12" cy="7" r="2.1" fill="#101412" />
      <circle cx="7" cy="16" r="2.1" fill="#101412" />
      <circle cx="17" cy="16" r="2.1" fill="#101412" />
    </svg>
  );
}

function YoloIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="#10B981" strokeWidth="2" fill="none" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5-.1-.8-.1-2 0-2.8.2-.8 1.3-4.5 1.3-4.5s-.3-.7-.3-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.7-2.8 3.7-6.2 0-2.6-1.7-4.5-4.9-4.5-3.6 0-5.8 2.7-5.8 5.7 0 1 .3 1.8.8 2.4.1.1.1.2.1.4-.1.3-.3 1.1-.3 1.3-.1.3-.2.4-.5.3-1.6-.7-2.4-2.6-2.4-4.2 0-3.1 2.6-6.9 7.8-6.9 4.2 0 7 3 7 6.3 0 4.3-2.4 7.5-5.9 7.5-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.2-1.5 3 1.2.3 2.5.5 3.8.5 5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="#336791" />
    </svg>
  );
}

function SqliteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#003B57" />
      <path d="M5 8c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3z" fill="#008FD5" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="#008FD5" strokeWidth="1.5" fill="none" />
      <path d="M5 16c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="#008FD5" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function RestApiIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <circle cx="6" cy="6" r="1" fill="#10B981" />
      <circle cx="6" cy="18" r="1" fill="#10B981" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M23.6 10.7L13.3.4c-.5-.5-1.4-.5-1.9 0L9 2.8l3.1 3.1c.4-.1.8 0 1.2.3.6.6.6 1.5.1 2.1l2.9 2.9c.6-.5 1.5-.5 2.1.1.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.6-.2-2.3l-2.7-2.7v6.6c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.5-.4.8-.5V7.4c-.3-.1-.6-.3-.8-.5-.6-.6-.7-1.6-.2-2.3L7.7 1.5.4 8.8c-.5.5-.5 1.4 0 1.9l10.3 10.3c.5.5 1.4.5 1.9 0l11-11c.5-.5.5-1.4 0-1.9z" fill="#F05032" />
    </svg>
  );
}

function ElectronIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#47848F" strokeWidth="1.8" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#47848F" />
    </svg>
  );
}

function CapacitorIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4.5 7.2 12 3.5l7.5 3.7L12 11zm-8 4l8 4 8-4v3l-8 4-8-4v-3z" fill="#119EFF" />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M22.5 4.5l-10 18-3.5-6.5-5.5-11.5h4.5l3.5 7.5 7-12.5h4z" fill="#646CFF" />
      <path d="M14.5 2.5l-6 10.5h3.5l-2 6.5 7-12.5h-4l1.5-4.5z" fill="#FFD426" />
    </svg>
  );
}

function RaspberryPiIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <circle cx="12" cy="14" r="3.2" fill="#C51A4A" />
      <circle cx="8" cy="12" r="2.7" fill="#C51A4A" />
      <circle cx="16" cy="12" r="2.7" fill="#C51A4A" />
      <circle cx="9.5" cy="17.5" r="2.6" fill="#C51A4A" />
      <circle cx="14.5" cy="17.5" r="2.6" fill="#C51A4A" />
      <circle cx="12" cy="20.5" r="2" fill="#C51A4A" />
      <path d="M12 7c-1.5-2.5-4-3-4-3s.5 2.5 2 3.5c-2.5 0-4-1-4-1s1 2.5 3 3M12 7c1.5-2.5 4-3 4-3s-.5 2.5-2 3.5c2.5 0 4-1 4-1s-1 2.5-3 3" fill="#6CC24A" />
    </svg>
  );
}

function SriIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function SalesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function EnglishIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

interface SkillItem {
  name: string;
  color: string;
  icon: React.ComponentType;
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
      { name: 'OpenCV', color: '#5C3EE8', icon: OpenCvIcon },
      { name: 'YOLO', color: '#10B981', icon: YoloIcon },
      { name: 'PostgreSQL', color: '#336791', icon: PostgresIcon },
      { name: 'SQLite', color: '#008FD5', icon: SqliteIcon },
      { name: 'APIs REST', color: '#10B981', icon: RestApiIcon },
    ],
  },
  {
    title: 'Herramientas & Entornos',
    headerIcon: Boxes,
    accentColor: '#A78BFA',
    items: [
      { name: 'Git & GitHub', color: '#F05032', icon: GitIcon },
      { name: 'Electron', color: '#47848F', icon: ElectronIcon },
      { name: 'Capacitor', color: '#119EFF', icon: CapacitorIcon },
      { name: 'Vite & Next.js', color: '#646CFF', icon: ViteIcon },
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
