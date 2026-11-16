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
  description: 'Portafolio de Sebastián Zambrano, desarrollador de software (React, TypeScript, Python, Go, C++, Godot). Proyectos destacados: ContaNova, ATLANIA (NASA Space Apps), DroidStream, MxCorreo, TechView, OmniNote STEM y SwiftPiano.',
  keywords: [
    'Sebastián Zambrano',
    'Desarrollador de Software Junior',
    'Junior Software Developer',
    'Guayaquil',
    'Ecuador',
    'React',
    'TypeScript',
    'Python',
    'Go',
    'Kotlin',
    'pytest',
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
    'Linux V4L2',
    'Embedded Linux',
    'Wacom',
    'ATLANIA',
    'NASA Space Apps',
    'DroidStream',
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
    description: 'Portafolio de Sebastián Zambrano: ContaNova, ATLANIA (NASA Space Apps), DroidStream, MxCorreo, TechView, OmniNote STEM y SwiftPiano.',
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
    'Desarrollador de software enfocado en construir herramientas web, móviles, sistemas nativos en C++/Go/Qt y automatizaciones de alto rendimiento. Creador de ContaNova, ATLANIA (NASA Space Apps), DroidStream, OmniNote STEM y TechView.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guayaquil',
    addressRegion: 'Guayas',
    addressCountry: 'EC',
  },
  sameAs: [
    'https://github.com/FakeCxbas',
    'https://www.linkedin.com/in/sebastianzambranoinga',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Go',
    'Kotlin',
    'pytest',
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
    'Linux V4L2 Kernel ioctl',
    'NASA POWER API',
    'Copernicus DEM',
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

