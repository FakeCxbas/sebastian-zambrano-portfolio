import fs from 'node:fs';
import path from 'node:path';

const ICON_SOURCES = [
  { id: 'react', name: 'ReactIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', color: '#61DAFB' },
  { id: 'typescript', name: 'TypeScriptIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { id: 'javascript', name: 'JavaScriptIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { id: 'python', name: 'PythonIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', color: '#3776AB' },
  { id: 'flutter', name: 'FlutterIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg', color: '#42A5F5' },
  { id: 'dart', name: 'DartIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg', color: '#0175C2' },
  { id: 'postgresql', name: 'PostgresIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', color: '#336791' },
  { id: 'electron', name: 'ElectronIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg', color: '#47848F' },
  { id: 'opencv', name: 'OpenCvIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg', color: '#128DFF' },
  { id: 'tailwind', name: 'TailwindIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg', color: '#38BDF8' },
  { id: 'sqlite', name: 'SqliteIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg', color: '#0F7FCC' },
  { id: 'raspberrypi', name: 'RaspberryPiIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/raspberrypi/raspberrypi-original.svg', color: '#C51A4A' },
  { id: 'vite', name: 'ViteIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg', color: '#646CFF' },
  { id: 'capacitor', name: 'CapacitorIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/capacitor/capacitor-original.svg', color: '#119EFF' },
  { id: 'linux', name: 'LinuxIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', color: '#FCC624' },
  { id: 'fastapi', name: 'FastApiIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', color: '#009688' },
  { id: 'git', name: 'GitIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', color: '#F05032' },
  { id: 'android', name: 'AndroidIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg', color: '#3DDC84' },
  { id: 'docker', name: 'DockerIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', color: '#2496ED' },
  { id: 'html5', name: 'Html5Icon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', color: '#E34F26' },
  { id: 'css3', name: 'Css3Icon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', color: '#1572B6' },
  { id: 'github', name: 'GitHubIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg', color: '#FFFFFF' },
  { id: 'linkedin', name: 'LinkedInIcon', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg', color: '#0A66C2' },
  { id: 'whatsapp', name: 'WhatsAppIcon', url: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/whatsapp.svg', color: '#25D366' },
];

function cleanSvg(rawSvg, prefix) {
  const vbMatch = rawSvg.match(/viewBox=["']([^"']+)["']/);
  const viewBox = vbMatch ? vbMatch[1] : '0 0 128 128';

  let inner = rawSvg
    .replace(/<\?xml[^>]*\?>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<title>[^<]*<\/title>/gi, '')
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>\s*$/i, '')
    .trim();

  // Prefix IDs to avoid collisions between multiple SVGs
  const idRegex = /id=["']([^"']+)["']/g;
  const ids = [];
  let m;
  while ((m = idRegex.exec(inner)) !== null) {
    ids.push(m[1]);
  }

  for (const id of ids) {
    const scoped = `${prefix}_${id}`;
    inner = inner.split(`id="${id}"`).join(`id="${scoped}"`);
    inner = inner.split(`id='${id}'`).join(`id='${scoped}'`);
    inner = inner.split(`url(#${id})`).join(`url(#${scoped})`);
    inner = inner.split(`xlink:href="#${id}"`).join(`xlinkHref="#${scoped}"`);
    inner = inner.split(`href="#${id}"`).join(`href="#${scoped}"`);
  }

  // Convert SVG/HTML attributes to JSX camelCase
  const attrMap = {
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'fill-opacity': 'fillOpacity',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-opacity': 'strokeOpacity',
    'clip-path': 'clipPath',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'shape-rendering': 'shapeRendering',
    'gradientTransform': 'gradientTransform',
    'gradientUnits': 'gradientUnits',
    'xmlns:xlink': 'xmlnsXlink',
    'xlink:href': 'xlinkHref',
    'data-name': 'data-name',
    'class=': 'className='
  };

  for (const [attr, jsxAttr] of Object.entries(attrMap)) {
    inner = inner.split(attr).join(jsxAttr);
  }

  return { viewBox, inner };
}

async function run() {
  console.log('Downloading official SVGs...');
  const components = [];

  for (const item of ICON_SOURCES) {
    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`Failed to fetch ${item.id} (${res.status})`);
        continue;
      }
      const raw = await res.text();
      const { viewBox, inner } = cleanSvg(raw, item.id);
      
      const componentCode = `
export function ${item.name}({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="${viewBox}" width={size} height={size} className={className} aria-hidden="true">
      ${inner}
    </svg>
  );
}`;
      components.push({
        id: item.id,
        name: item.name,
        color: item.color,
        code: componentCode
      });
      console.log(`✓ Converted ${item.id} (${item.name})`);
    } catch (err) {
      console.error(`Error processing ${item.id}:`, err);
    }
  }

  // Special remaining icons
  const extraIcons = `
export function SriIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

export function YoloIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="#10B981" strokeWidth="2" fill="none" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AudioVoiceIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export function PrinterIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

export function OcrIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7V4h3" />
      <path d="M20 7V4h-3" />
      <path d="M4 17v3h3" />
      <path d="M20 17v3h-3" />
      <circle cx="12" cy="12" r="3" />
      <path d="m14 14 2 2" />
    </svg>
  );
}

export function WasmIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#654FF0" />
      <text x="3" y="16" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">WA</text>
    </svg>
  );
}

export function WebWorkersIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function OpenAiIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
      <path d="M12 12 2.1 12.5" />
      <path d="m12 12 6.9 7.2" />
    </svg>
  );
}

export function LocalStorageIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function TouchUiIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function FormspreeIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function RestApiIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return <FastApiIcon size={size} className={className} />;
}

export function SalesIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14h6" />
      <path d="M9 10h6" />
      <path d="M9 18h4" />
    </svg>
  );
}

export function TrainingIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

export function EnglishIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function CvFileIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

export const GithubIcon = GitHubIcon;
export const LinkedinIcon = LinkedInIcon;

export function DefaultCodeIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="#C6FA78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
`;

  const metaMapping = `
export interface TechMeta {
  name: string;
  color: string;
  hoverBg: string;
  glow: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

export function getTechMeta(rawName: string): TechMeta {
  const norm = rawName.toLowerCase().trim();

  // React
  if (norm.includes('react')) {
    return { name: rawName, color: '#61DAFB', hoverBg: '#61DAFB18', glow: '#61DAFB35', Icon: ReactIcon };
  }
  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return { name: rawName, color: '#3178C6', hoverBg: '#3178C618', glow: '#3178C635', Icon: TypeScriptIcon };
  }
  // JavaScript
  if (norm.includes('javascript') || norm === 'js') {
    return { name: rawName, color: '#F7DF1E', hoverBg: '#F7DF1E18', glow: '#F7DF1E35', Icon: JavaScriptIcon };
  }
  // Python
  if (norm.includes('python')) {
    return { name: rawName, color: '#3776AB', hoverBg: '#3776AB18', glow: '#3776AB35', Icon: PythonIcon };
  }
  // Flutter
  if (norm.includes('flutter')) {
    return { name: rawName, color: '#42A5F5', hoverBg: '#42A5F518', glow: '#42A5F535', Icon: FlutterIcon };
  }
  // Dart
  if (norm.includes('dart')) {
    return { name: rawName, color: '#0175C2', hoverBg: '#0175C218', glow: '#0175C235', Icon: DartIcon };
  }
  // PostgreSQL
  if (norm.includes('postgres') || norm.includes('psql')) {
    return { name: rawName, color: '#336791', hoverBg: '#33679118', glow: '#33679135', Icon: PostgresIcon };
  }
  // SQLite
  if (norm.includes('sqlite')) {
    return { name: rawName, color: '#0F7FCC', hoverBg: '#0F7FCC18', glow: '#0F7FCC35', Icon: SqliteIcon };
  }
  // Electron
  if (norm.includes('electron')) {
    return { name: rawName, color: '#47848F', hoverBg: '#47848F18', glow: '#47848F35', Icon: ElectronIcon };
  }
  // OpenCV
  if (norm.includes('opencv') || norm.includes('visión') || norm.includes('vision')) {
    return { name: rawName, color: '#128DFF', hoverBg: '#128DFF18', glow: '#128DFF35', Icon: OpenCvIcon };
  }
  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return { name: rawName, color: '#38BDF8', hoverBg: '#38BDF818', glow: '#38BDF835', Icon: TailwindIcon };
  }
  // Raspberry Pi
  if (norm.includes('raspberry')) {
    return { name: rawName, color: '#C51A4A', hoverBg: '#C51A4A18', glow: '#C51A4A35', Icon: RaspberryPiIcon };
  }
  // Vite
  if (norm.includes('vite')) {
    return { name: rawName, color: '#646CFF', hoverBg: '#646CFF18', glow: '#646CFF35', Icon: ViteIcon };
  }
  // Capacitor
  if (norm.includes('capacitor')) {
    return { name: rawName, color: '#119EFF', hoverBg: '#119EFF18', glow: '#119EFF35', Icon: CapacitorIcon };
  }
  // Linux
  if (norm.includes('linux')) {
    return { name: rawName, color: '#FCC624', hoverBg: '#FCC62418', glow: '#FCC62435', Icon: LinuxIcon };
  }
  // FastAPI / REST API
  if (norm.includes('fastapi') || norm.includes('api') || norm.includes('rest')) {
    return { name: rawName, color: '#009688', hoverBg: '#00968818', glow: '#00968835', Icon: FastApiIcon };
  }
  // Git
  if (norm.includes('git')) {
    return { name: rawName, color: '#F05032', hoverBg: '#F0503218', glow: '#F0503235', Icon: GitIcon };
  }
  // Android
  if (norm.includes('android')) {
    return { name: rawName, color: '#3DDC84', hoverBg: '#3DDC8418', glow: '#3DDC8435', Icon: AndroidIcon };
  }
  // Docker
  if (norm.includes('docker')) {
    return { name: rawName, color: '#2496ED', hoverBg: '#2496ED18', glow: '#2496ED35', Icon: DockerIcon };
  }
  // HTML5
  if (norm.includes('html')) {
    return { name: rawName, color: '#E34F26', hoverBg: '#E34F2618', glow: '#E34F2635', Icon: Html5Icon };
  }
  // CSS3
  if (norm.includes('css')) {
    return { name: rawName, color: '#1572B6', hoverBg: '#1572B618', glow: '#1572B635', Icon: Css3Icon };
  }
  // WhatsApp
  if (norm.includes('whatsapp')) {
    return { name: rawName, color: '#25D366', hoverBg: '#25D36618', glow: '#25D36635', Icon: WhatsAppIcon };
  }
  // GitHub
  if (norm.includes('github')) {
    return { name: rawName, color: '#FFFFFF', hoverBg: '#FFFFFF18', glow: '#FFFFFF35', Icon: GitHubIcon };
  }
  // LinkedIn
  if (norm.includes('linkedin')) {
    return { name: rawName, color: '#0A66C2', hoverBg: '#0A66C218', glow: '#0A66C235', Icon: LinkedInIcon };
  }
  // YOLO / Computer Vision
  if (norm.includes('yolo')) {
    return { name: rawName, color: '#10B981', hoverBg: '#10B98118', glow: '#10B98135', Icon: YoloIcon };
  }
  // Audio / Voz
  if (norm.includes('voz') || norm.includes('audio')) {
    return { name: rawName, color: '#A855F7', hoverBg: '#A855F718', glow: '#A855F735', Icon: AudioVoiceIcon };
  }
  // SRI / Facturación
  if (norm.includes('sri') || norm.includes('factura')) {
    return { name: rawName, color: '#10B981', hoverBg: '#10B98118', glow: '#10B98135', Icon: SriIcon };
  }
  // Thermal Print / ESC/POS
  if (norm.includes('print') || norm.includes('esc/pos') || norm.includes('term')) {
    return { name: rawName, color: '#94A3B8', hoverBg: '#94A3B818', glow: '#94A3B835', Icon: PrinterIcon };
  }
  // OCR / Tesseract
  if (norm.includes('ocr') || norm.includes('tesseract')) {
    return { name: rawName, color: '#3B82F6', hoverBg: '#3B82F618', glow: '#3B82F635', Icon: OcrIcon };
  }
  // WebAssembly / Wasm
  if (norm.includes('wasm') || norm.includes('webassembly')) {
    return { name: rawName, color: '#654FF0', hoverBg: '#654FF018', glow: '#654FF035', Icon: WasmIcon };
  }
  // Web Workers
  if (norm.includes('worker')) {
    return { name: rawName, color: '#EC4899', hoverBg: '#EC489918', glow: '#EC489935', Icon: WebWorkersIcon };
  }
  // OpenAI / IA aplicada
  if (norm.includes('openai') || norm.includes('ia aplicada') || norm.includes('ai')) {
    return { name: rawName, color: '#10A37F', hoverBg: '#10A37F18', glow: '#10A37F35', Icon: OpenAiIcon };
  }
  // LocalStorage / Cache
  if (norm.includes('localstorage') || norm.includes('cache')) {
    return { name: rawName, color: '#F59E0B', hoverBg: '#F59E0B18', glow: '#F59E0B35', Icon: LocalStorageIcon };
  }
  // Touch UI / Responsive
  if (norm.includes('touch') || norm.includes('responsive')) {
    return { name: rawName, color: '#38BDF8', hoverBg: '#38BDF818', glow: '#38BDF835', Icon: TouchUiIcon };
  }
  // Formspree
  if (norm.includes('form')) {
    return { name: rawName, color: '#E11D48', hoverBg: '#E11D4818', glow: '#E11D4835', Icon: FormspreeIcon };
  }
  // Ventas
  if (norm.includes('ventas') || norm.includes('atención')) {
    return { name: rawName, color: '#38BDF8', hoverBg: '#38BDF818', glow: '#38BDF835', Icon: SalesIcon };
  }
  // Capacitación
  if (norm.includes('capacitación') || norm.includes('capacitacion')) {
    return { name: rawName, color: '#F59E0B', hoverBg: '#F59E0B18', glow: '#F59E0B35', Icon: TrainingIcon };
  }
  // Inglés
  if (norm.includes('inglés') || norm.includes('ingles')) {
    return { name: rawName, color: '#A78BFA', hoverBg: '#A78BFA18', glow: '#A78BFA35', Icon: EnglishIcon };
  }

  // Fallback
  return { name: rawName, color: '#C6FA78', hoverBg: '#C6FA7815', glow: '#C6FA7835', Icon: DefaultCodeIcon };
}

/* --- Reusable Tech Badge Component --- */

interface TechBadgeProps {
  name: string;
  variant?: 'modal' | 'card';
  className?: string;
}

export function TechBadge({ name, variant = 'modal', className = '' }: TechBadgeProps) {
  const meta = getTechMeta(name);
  const Icon = meta.Icon;
  const size = variant === 'modal' ? 16 : 14;
  const baseClass = variant === 'modal' ? 'modal-tech-pill' : 'tech-badge';

  return (
    <span
      className={\`\${baseClass} \${className}\`.trim()}
      style={
        {
          '--pill-color': meta.color,
          '--pill-hover-bg': meta.hoverBg,
          '--pill-glow': meta.glow,
        } as React.CSSProperties
      }
      title={name}
    >
      <Icon size={size} />
      <span>{name}</span>
    </span>
  );
}
`;

  const fullFile = `import React from 'react';

/* --- 100% Official Vector SVG Brand Logos (Devicon & Simple Icons) --- */
${components.map(c => c.code).join('\n')}
${extraIcons}
${metaMapping}
`;

  const targetPath = path.resolve('components/tech-icons.tsx');
  fs.writeFileSync(targetPath, fullFile, 'utf8');
  console.log(`Successfully written official icons to ${targetPath}`);
}

run();
