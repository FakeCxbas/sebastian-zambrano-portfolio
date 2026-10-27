import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sebastianzambrano.dev'),
  title: 'Sebastián Zambrano | Desarrollador de Software Junior',
  description: 'Portafolio de Sebastián Zambrano, desarrollador de software (React, TypeScript, Python, C++, Godot). Sistemas y herramientas en producción: ContaNova, Taller Jeldes, MxCorreo, TechView, OmniNote STEM y SwiftPiano.',
  keywords: [
    'Sebastián Zambrano',
    'Desarrollador de Software Junior',
    'Junior Software Developer',
    'Guayaquil',
    'Ecuador',
    'React',
    'TypeScript',
    'Python',
    'C++20',
    'Qt 6',
    'OpenGL',
    'Godot 4',
    'GLSL Shaders',
    'PostgreSQL',
    'SQLite3',
    'Flutter',
    'OpenCV',
    'YOLOv8',
    'Embedded Linux',
    'Wacom',
    'ContaNova',
    'Taller Jeldes',
    'MxCorreo',
    'TechView',
    'OmniNote STEM',
    'SwiftPiano',
    'Portafolio',
  ],
  authors: [{ name: 'Sebastián Zambrano', url: 'https://github.com/FakeCxbas' }],
  creator: 'Sebastián Zambrano',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    url: 'https://sebastianzambrano.dev',
    title: 'Sebastián Zambrano | Desarrollador de Software Junior',
    description: 'Portafolio de Sebastián Zambrano: ContaNova, Taller Jeldes, MxCorreo, TechView, OmniNote STEM, SwiftPiano y proyectos de software en producción.',
    siteName: 'Sebastián Zambrano — Portafolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Sebastián Zambrano - Desarrollador de Software Junior | React, TypeScript, Python, C++, Godot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastián Zambrano | Desarrollador de Software Junior',
    creator: '@FakeCxbas',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sebastián Paul Zambrano Inga',
  alternateName: ['Sebastián Zambrano', 'FakeCxbas'],
  url: 'https://sebastianzambrano.dev',
  image: 'https://sebastianzambrano.dev/og-image.jpg',
  jobTitle: 'Software Developer · Full-Stack, Native Systems & Computer Vision',
  description:
    'Desarrollador de software enfocado en construir herramientas web, móviles, sistemas nativos en C++/Qt y automatizaciones de alto rendimiento. Creador de ContaNova, TechView, OmniNote STEM y SwiftPiano.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guayaquil',
    addressRegion: 'Guayas',
    addressCountry: 'EC',
  },
  sameAs: [
    'https://github.com/FakeCxbas',
    'https://www.linkedin.com/in/sebastián-paul-zambrano-inga-7700633ab/',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'C++20',
    'Qt 6',
    'OpenGL',
    'Godot 4',
    'GLSL Shaders',
    'PostgreSQL',
    'SQLite3',
    'Flutter',
    'OpenCV',
    'YOLOv8',
    'Electron',
    'Embedded Linux',
    'Wacom Ink API',
    'Facturación Electrónica SRI',
    'Remote Software Engineering',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0b0e0c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

