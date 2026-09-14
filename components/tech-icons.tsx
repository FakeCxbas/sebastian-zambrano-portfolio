import React from 'react';

export interface TechMeta {
  name: string;
  color: string;
  hoverBg: string;
  glow: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}

/* --- Brand SVG Icons --- */

export function ReactIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" width={size} height={size} aria-hidden="true">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M4 8h8v2.5H9.5V20H6.5V10.5H4V8zm9.5 8c0 2.2 1.6 3.5 4 3.5 1.5 0 2.8-.5 3.5-1.2l-1-2c-.5.4-1.2.7-2.1.7-1 0-1.6-.5-1.6-1.3 0-.8.6-1.2 2-1.7 2.2-.8 3.2-1.7 3.2-3.4 0-2.1-1.6-3.3-3.8-3.3-1.4 0-2.6.4-3.4 1.1l1 2c.5-.4 1.3-.7 2-.7.9 0 1.5.4 1.5 1.2 0 .7-.6 1.1-1.8 1.5-2.2.8-3.5 1.7-3.5 3.6z" fill="#FFFFFF" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6 18.5l2-.3c.4.8.8 1.3 1.7 1.3.8 0 1.3-.4 1.3-1.4v-7.1h2.4v7.2c0 2.2-1.3 3.2-3.3 3.2-1.8 0-3-.9-3.7-2.4l-.4-.5zm8.5-.2l2-.4c.4.9 1 1.4 2 1.4.9 0 1.5-.4 1.5-1 0-.7-.5-1-1.8-1.5-2.2-.8-3.3-1.7-3.3-3.4 0-1.9 1.4-3.3 3.7-3.3 1.7 0 2.9.6 3.6 2l-1.9 1.2c-.4-.7-.9-1-1.7-1-.7 0-1.2.4-1.2.9 0 .6.4.9 1.6 1.3 2.4.9 3.5 1.8 3.5 3.6 0 2.1-1.6 3.5-4 3.5-2.2 0-3.6-1-4.2-2.8z" fill="#000000" />
    </svg>
  );
}

export function PostgresIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5-.1-.8-.1-2 0-2.8.2-.8 1.3-4.5 1.3-4.5s-.3-.7-.3-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.2 0 3.7-2.8 3.7-6.2 0-2.6-1.7-4.5-4.9-4.5-3.6 0-5.8 2.7-5.8 5.7 0 1 .3 1.8.8 2.4.1.1.1.2.1.4-.1.3-.3 1.1-.3 1.3-.1.3-.2.4-.5.3-1.6-.7-2.4-2.6-2.4-4.2 0-3.1 2.6-6.9 7.8-6.9 4.2 0 7 3 7 6.3 0 4.3-2.4 7.5-5.9 7.5-1.2 0-2.3-.6-2.7-1.4l-.7 2.8c-.3 1-1 2.2-1.5 3 1.2.3 2.5.5 3.8.5 5.5 0 10-4.5 10-10S17.5 2 12 2z" fill="#336791" />
    </svg>
  );
}

export function TailwindIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 6c-2.6 0-4.3 1.3-5.1 3.8 1-.9 2.1-1.3 3.3-1.3 1.8 0 3.1 1.2 4.4 2.5 2.2 2.2 4.7 3.5 8.4 3.5 2.6 0 4.3-1.3 5.1-3.8-1 .9-2.1 1.3-3.3 1.3-1.8 0-3.1-1.2-4.4-2.5C18.2 7.3 15.7 6 12 6zm-8.4 8.5C1 14.5-.7 15.8-1.5 18.3c1-.9 2.1-1.3 3.3-1.3 1.8 0 3.1 1.2 4.4 2.5C8.4 21.7 10.9 23 14.6 23c2.6 0 4.3-1.3 5.1-3.8-1 .9-2.1 1.3-3.3 1.3-1.8 0-3.1-1.2-4.4-2.5-2.2-2.2-4.7-3.5-8.4-3.5z" fill="#38BDF8" />
    </svg>
  );
}

export function SriIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

export function ViteIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M22.5 4.5l-10 18-3.5-6.5-5.5-11.5h4.5l3.5 7.5 7-12.5h4z" fill="#646CFF" />
      <path d="M14.5 2.5l-6 10.5h3.5l-2 6.5 7-12.5h-4l1.5-4.5z" fill="#FFD426" />
    </svg>
  );
}

export function PythonIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M11.9 1.1c-2.9 0-4.8.4-5.8 1.1-1.6 1.1-1.5 2.4-1.5 5.3v2h7.4v1H4.6c-2.8 0-4.5 1.5-4.5 4.5 0 2.5 1.2 4.5 4.2 4.5h2.1v-2.8c0-2.3 2-4.2 4.3-4.2h7.3c1.9 0 3.4-1.5 3.4-3.4V4.6c0-2.4-1.6-3.5-4.5-3.5h-4.9zm-2.4 2.1c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z" fill="#3776AB" />
      <path d="M12.1 22.9c2.9 0 4.8-.4 5.8-1.1 1.6-1.1 1.5-2.4 1.5-5.3v-2h-7.4v-1h7.4c2.8 0 4.5-1.5 4.5-4.5 0-2.5-1.2-4.5-4.2-4.5h-2.1v2.8c0 2.3-2 4.2-4.3 4.2H6c-1.9 0-3.4 1.5-3.4 3.4v4.5c0 2.4 1.6 3.5 4.5 3.5h5zm2.4-2.1c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z" fill="#FFD43B" />
    </svg>
  );
}

export function OpenCvIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <circle cx="12" cy="7" r="4.2" fill="#EE2C2C" />
      <circle cx="7" cy="16" r="4.2" fill="#3CB371" />
      <circle cx="17" cy="16" r="4.2" fill="#1E90FF" />
      <circle cx="12" cy="7" r="2.1" fill="#101412" />
      <circle cx="7" cy="16" r="2.1" fill="#101412" />
      <circle cx="17" cy="16" r="2.1" fill="#101412" />
    </svg>
  );
}

export function YoloIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="#10B981" strokeWidth="2" fill="none" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RaspberryPiIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
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

export function AudioVoiceIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export function LinuxIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#FCC624" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C9 2 7 4 7 7c0 2-1 4-2 5-1 1-1 3 0 4 1 1 3 1 4 0 1-1 1-2 2-2s1 1 2 2c1 1 3 1 4 0 1-1 1-3 0-4-1-1-2-3-2-5 0-3-2-5-5-5z" />
      <circle cx="10" cy="7" r="1" fill="#FCC624" />
      <circle cx="14" cy="7" r="1" fill="#FCC624" />
      <path d="M10 10c1 1 3 1 4 0" />
    </svg>
  );
}

export function SqliteIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#003B57" />
      <path d="M5 8c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3z" fill="#008FD5" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="#008FD5" strokeWidth="1.5" fill="none" />
      <path d="M5 16c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke="#008FD5" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function PandasIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#E70488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

export function DnsIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function ElectronIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#47848F" strokeWidth="1.8" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#47848F" />
    </svg>
  );
}

export function CapacitorIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4.5 7.2 12 3.5l7.5 3.7L12 11zm-8 4l8 4 8-4v3l-8 4-8-4v-3z" fill="#119EFF" />
    </svg>
  );
}

export function PrinterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect width="12" height="8" x="6" y="14" />
    </svg>
  );
}

export function OcrIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 3H5a2 2 0 0 0-2 2v2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M3 17v2a2 2 0 0 0 2 2h2" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  );
}

export function WasmIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#654FF0" />
      <path d="M4 8l3 8h2l2.5-6.5L14 16h2l3-8h-2.5l-1.6 5.5L12.5 8h-1l-2.4 5.5L7.5 8H4z" fill="#FFFFFF" />
    </svg>
  );
}

export function WebWorkersIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function FlutterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M14.3 0L2.3 12l3.7 3.7L21.7 0h-7.4z" fill="#42A5F5" />
      <path d="M14.3 11l-6.2 6.1L12 21l6.1-6.1 3.6 3.5L14.3 24H6.9l6.1-6.1-6.1-6.2L8.7 9.8z" fill="#02569B" />
      <path d="M12 21l-3.9-3.9 3.9-3.8 3.8 3.8L12 21z" fill="#01579B" />
      <path d="M15.9 17.1L12 13.3l3.9-3.9 3.8 3.9-3.8 3.8z" fill="#29B6F6" />
    </svg>
  );
}

export function DartIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M4.1 3.2L12 11.1l7.9-7.9H4.1z" fill="#0081C6" />
      <path d="M19.9 3.2L12 11.1l4.9 10.4 4.5-4.5c1.4-1.4 1.4-3.6 0-5L19.9 3.2z" fill="#00B4AB" />
      <path d="M4.1 3.2L12 11.1l-10.4 5c-1.4-1.4-1.4-3.6 0-5L4.1 3.2z" fill="#005B9C" />
      <path d="M12 11.1L4.1 19l2.5 2.5c1.4 1.4 3.6 1.4 5 0l5.3-5.3-4.9-5.1z" fill="#00A98F" />
    </svg>
  );
}

export function OpenAiIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function AndroidIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#3DDC84" aria-hidden="true">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h4v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 1.23 12.88 1 12 1s-1.72.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.67 3.32 5.5 5.25 5.5 7.5h13c0-2.25-1.17-4.18-2.97-5.34zM9 5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm6 0c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75z" />
    </svg>
  );
}

export function LocalStorageIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function TouchUiIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="20" x="5" y="2" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  );
}

export function FormspreeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M20.5 3.5A11.87 11.87 0 0 0 12.05 0C5.52 0 .2 5.32.2 11.85c0 2.09.55 4.12 1.59 5.92L0 24l6.41-1.68a11.8 11.8 0 0 0 5.64 1.43h.01c6.53 0 11.84-5.32 11.84-11.85 0-3.17-1.23-6.14-3.4-8.4z" fill="#25D366" />
      <path d="M17.5 14.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.36.22-.66.08-.3-.15-1.28-.47-2.44-1.51-.9-.81-1.51-1.81-1.69-2.11-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.17c.15.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35z" fill="#FFFFFF" />
    </svg>
  );
}

export function GitIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M23.6 10.7L13.3.4c-.5-.5-1.4-.5-1.9 0L9 2.8l3.1 3.1c.4-.1.8 0 1.2.3.6.6.6 1.5.1 2.1l2.9 2.9c.6-.5 1.5-.5 2.1.1.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.6-.2-2.3l-2.7-2.7v6.6c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.5-.4.8-.5V7.4c-.3-.1-.6-.3-.8-.5-.6-.6-.7-1.6-.2-2.3L7.7 1.5.4 8.8c-.5.5-.5 1.4 0 1.9l10.3 10.3c.5.5 1.4.5 1.9 0l11-11c.5-.5.5-1.4 0-1.9z" fill="#F05032" />
    </svg>
  );
}

export function RestApiIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <circle cx="6" cy="6" r="1" fill="#10B981" />
      <circle cx="6" cy="18" r="1" fill="#10B981" />
    </svg>
  );
}

export function SalesIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function TrainingIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function EnglishIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#0A66C2" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export function CvFileIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#C6FA78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function DefaultCodeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#C6FA78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* --- Normalization & Matching --- */

export function getTechMeta(rawName: string): TechMeta {
  const norm = rawName.trim().toLowerCase();

  // React
  if (norm === 'react' || norm.includes('react.js')) {
    return { name: rawName, color: '#61DAFB', hoverBg: '#61DAFB15', glow: '#61DAFB35', Icon: ReactIcon };
  }
  // TypeScript
  if (norm === 'typescript' || norm === 'ts') {
    return { name: rawName, color: '#3178C6', hoverBg: '#3178C618', glow: '#3178C635', Icon: TypeScriptIcon };
  }
  // JavaScript
  if (norm === 'javascript' || norm === 'js' || norm.includes('es6')) {
    return { name: rawName, color: '#F7DF1E', hoverBg: '#F7DF1E18', glow: '#F7DF1E35', Icon: JavaScriptIcon };
  }
  // PostgreSQL
  if (norm.includes('postgres')) {
    return { name: rawName, color: '#336791', hoverBg: '#33679118', glow: '#33679135', Icon: PostgresIcon };
  }
  // Tailwind
  if (norm.includes('tailwind')) {
    return { name: rawName, color: '#38BDF8', hoverBg: '#38BDF818', glow: '#38BDF835', Icon: TailwindIcon };
  }
  // SRI / Facturación
  if (norm.includes('sri') || norm.includes('facturación')) {
    return { name: rawName, color: '#10B981', hoverBg: '#10B98118', glow: '#10B98135', Icon: SriIcon };
  }
  // Vite
  if (norm.includes('vite')) {
    return { name: rawName, color: '#646CFF', hoverBg: '#646CFF18', glow: '#646CFF35', Icon: ViteIcon };
  }
  // Python / CustomTkinter / Tkinter
  if (norm.includes('python') || norm.includes('tkinter')) {
    return { name: rawName, color: '#3776AB', hoverBg: '#3776AB18', glow: '#3776AB35', Icon: PythonIcon };
  }
  // OpenCV
  if (norm.includes('opencv')) {
    return { name: rawName, color: '#5C3EE8', hoverBg: '#5C3EE818', glow: '#5C3EE835', Icon: OpenCvIcon };
  }
  // YOLO
  if (norm.includes('yolo')) {
    return { name: rawName, color: '#10B981', hoverBg: '#10B98118', glow: '#10B98135', Icon: YoloIcon };
  }
  // Raspberry Pi
  if (norm.includes('raspberry')) {
    return { name: rawName, color: '#C51A4A', hoverBg: '#C51A4A18', glow: '#C51A4A35', Icon: RaspberryPiIcon };
  }
  // PyTTSx3 / Audio / Voice
  if (norm.includes('pyttsx') || norm.includes('audio') || norm.includes('voz')) {
    return { name: rawName, color: '#A855F7', hoverBg: '#A855F718', glow: '#A855F735', Icon: AudioVoiceIcon };
  }
  // Linux
  if (norm.includes('linux')) {
    return { name: rawName, color: '#FCC624', hoverBg: '#FCC62418', glow: '#FCC62435', Icon: LinuxIcon };
  }
  // SQLite
  if (norm.includes('sqlite')) {
    return { name: rawName, color: '#008FD5', hoverBg: '#008FD518', glow: '#008FD535', Icon: SqliteIcon };
  }
  // Pandas
  if (norm.includes('pandas')) {
    return { name: rawName, color: '#E70488', hoverBg: '#E7048818', glow: '#E7048835', Icon: PandasIcon };
  }
  // DNS / dnspython
  if (norm.includes('dns')) {
    return { name: rawName, color: '#06B6D4', hoverBg: '#06B6D418', glow: '#06B6D435', Icon: DnsIcon };
  }
  // Electron
  if (norm.includes('electron')) {
    return { name: rawName, color: '#47848F', hoverBg: '#47848F18', glow: '#47848F35', Icon: ElectronIcon };
  }
  // Capacitor
  if (norm.includes('capacitor')) {
    return { name: rawName, color: '#119EFF', hoverBg: '#119EFF18', glow: '#119EFF35', Icon: CapacitorIcon };
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
  // Flutter
  if (norm.includes('flutter')) {
    return { name: rawName, color: '#42A5F5', hoverBg: '#42A5F518', glow: '#42A5F535', Icon: FlutterIcon };
  }
  // Dart
  if (norm.includes('dart')) {
    return { name: rawName, color: '#0175C2', hoverBg: '#0175C218', glow: '#0175C235', Icon: DartIcon };
  }
  // OpenAI / IA aplicada
  if (norm.includes('openai') || norm.includes('ia aplicada') || norm.includes('ai')) {
    return { name: rawName, color: '#10A37F', hoverBg: '#10A37F18', glow: '#10A37F35', Icon: OpenAiIcon };
  }
  // Android
  if (norm.includes('android')) {
    return { name: rawName, color: '#3DDC84', hoverBg: '#3DDC8418', glow: '#3DDC8435', Icon: AndroidIcon };
  }
  // LocalStorage / Cache
  if (norm.includes('localstorage') || norm.includes('cache')) {
    return { name: rawName, color: '#F59E0B', hoverBg: '#F59E0B18', glow: '#F59E0B35', Icon: LocalStorageIcon };
  }
  // Touch UI / Responsive
  if (norm.includes('touch') || norm.includes('responsive') || norm.includes('css')) {
    return { name: rawName, color: '#38BDF8', hoverBg: '#38BDF818', glow: '#38BDF835', Icon: TouchUiIcon };
  }
  // Formspree
  if (norm.includes('form')) {
    return { name: rawName, color: '#E11D48', hoverBg: '#E11D4818', glow: '#E11D4835', Icon: FormspreeIcon };
  }
  // WhatsApp
  if (norm.includes('whatsapp')) {
    return { name: rawName, color: '#25D366', hoverBg: '#25D36618', glow: '#25D36635', Icon: WhatsAppIcon };
  }
  // Git
  if (norm.includes('git')) {
    return { name: rawName, color: '#F05032', hoverBg: '#F0503218', glow: '#F0503235', Icon: GitIcon };
  }
  // API REST
  if (norm.includes('api') || norm.includes('rest')) {
    return { name: rawName, color: '#10B981', hoverBg: '#10B98118', glow: '#10B98135', Icon: RestApiIcon };
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
  const size = variant === 'modal' ? 15 : 13;
  const baseClass = variant === 'modal' ? 'modal-tech-pill' : 'tech-badge';

  return (
    <span
      className={`${baseClass} ${className}`.trim()}
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
