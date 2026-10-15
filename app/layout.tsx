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
  title: 'Sebastián Zambrano | Desarrollador de Software',
  description: 'Portafolio de Sebastián Zambrano, desarrollador de software en Guayaquil, Ecuador. Aplicaciones web, móviles y de escritorio: ContaNova, TechView, MxCorreo y más.',
  keywords: [
    'Sebastián Zambrano',
    'Desarrollador de Software',
    'Guayaquil',
    'Ecuador',
    'React',
    'TypeScript',
    'Python',
    'Flutter',
    'OpenCV',
    'YOLO',
    'ContaNova',
    'TechView',
    'Portafolio',
    'Desarrollo Web',
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
    title: 'Sebastián Zambrano | Desarrollador de Software',
    description: 'Portafolio de Sebastián Zambrano: ContaNova, TechView, Taller Jeldes y proyectos de desarrollo de software en producción.',
    siteName: 'Sebastián Zambrano — Portafolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 675,
        alt: 'Sebastián Zambrano - Desarrollador de Software | Web, Móvil & IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastián Zambrano | Desarrollador de Software',
    description: 'Portafolio de Sebastián Zambrano: ContaNova, TechView, Taller Jeldes y proyectos de desarrollo de software.',
    images: ['/og-image.jpg'],
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
  jobTitle: 'Software Developer · Full-Stack & Computer Vision',
  description:
    'Desarrollador de software enfocado en construir herramientas web, móviles y automatizaciones que operan en negocios reales. Creador de ContaNova y TechView.',
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
    'PostgreSQL',
    'Flutter',
    'OpenCV',
    'YOLOv8',
    'Electron',
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

