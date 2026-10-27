'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Locale = 'es' | 'en';

export interface Translations {
  nav: {
    projects: string;
    about: string;
    experience: string;
    contact: string;
    cv: string;
  };
  hero: {
    location: string;
    remoteBadge: string;
    timezoneOverlap: string;
    portfolioYear: string;
    greeting: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadlinePart1: string;
    subheadlinePart2: string;
    bio: string;
    ctaPrimary: string;
    footRole: string;
    footScroll: string;
    hudTitle: string;
    hudOriginTitle: string;
    hudOriginQuote: string;
    hudOriginDetail: string;
    hudSpecsTitle: string;
    hudSwitchToSpecs: string;
    hudSwitchToOrigin: string;
    hudExploreStory: string;
  };
  projects: {
    eyebrow: string;
    headingPart1: string;
    headingPart2: string;
    description: string;
    filterAll: string;
    filterWeb: string;
    filterMobile: string;
    filterDesktop: string;
    filterAi: string;
    featuredBadge: string;
    viewDetails: string;
    liveDemo: string;
    codeRepo: string;
    items: Record<string, {
      name: string;
      type: string;
      text: string;
      aside?: string;
    }>;
  };
  about: {
    eyebrow: string;
    headingPart1: string;
    headingPart2: string;
    metric1Number: string;
    metric1Title: string;
    metric1Desc: string;
    metric2Number: string;
    metric2Title: string;
    metric2Desc: string;
    metric3Number: string;
    metric3Title: string;
    metric3Desc: string;
    metric4Number: string;
    metric4Title: string;
    metric4Desc: string;
    para1: string;
    para2: string;
    para3: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    filterAll: string;
    filterWork: string;
    filterEdu: string;
    items: {
      date: string;
      badge: string;
      badgeType?: string;
      title: string;
      description: string;
      logo?: string;
      tags?: string[];
      educationSubitems?: {
        title: string;
        desc: string;
        logo?: string;
      }[];
    }[];
  };
  contact: {
    eyebrow: string;
    headingPart1: string;
    headingPart2: string;
    description: string;
    emailLabel: string;
    availability: string;
    socialLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    whatsappLabel: string;
    whatsappSub: string;
    cvLabel: string;
    cvSub: string;
    cvDownloadEs: string;
    cvDownloadEn: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    backToTop: string;
  };
}

export const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      projects: 'Proyectos',
      about: 'Sobre mí',
      experience: 'Trayectoria',
      contact: 'Contacto ↗',
      cv: 'CV',
    },
    hero: {
      location: 'GUAYAQUIL, ECUADOR',
      remoteBadge: 'Disponible para Remoto',
      timezoneOverlap: 'UTC-5 con solapamiento laboral con equipos de América',
      portfolioYear: 'PORTAFOLIO / 2026',
      greeting: 'Hola, soy',
      headlinePart1: 'Sebastián',
      headlinePart2: 'Zambrano',
      subheadlinePart1: 'Entre el código',
      subheadlinePart2: 'y el día a día.',
      bio: 'Desarrollador de software junior enfocado en construir aplicaciones web, móviles y automatizaciones que operan en negocios reales. Especializado en React, TypeScript y Python.',
      ctaPrimary: 'Te muestro mi trabajo',
      footRole: 'DESARROLLADOR DE SOFTWARE JUNIOR · REACT · TYPESCRIPT · PYTHON',
      footScroll: 'DESLIZA PARA EXPLORAR ↓',
      hudTitle: 'ESTACIÓN DE TRABAJO REMOTO',
      hudOriginTitle: 'DE DÓNDE VENGO',
      hudOriginQuote: 'Antes de desarrollar para un negocio, trabajé en uno.',
      hudOriginDetail: 'Atendí clientes, vendí repuestos y administré inventarios. De esa fricción real nació ContaNova.',
      hudSpecsTitle: 'RESUMEN TÉCNICO',
      hudSwitchToSpecs: 'Ver Especificaciones Técnicas ⚡',
      hudSwitchToOrigin: 'Ver Historia de Origen 📖',
      hudExploreStory: 'Conoce la historia',
    },
    projects: {
      eyebrow: '01 / TRABAJO SELECCIONADO',
      headingPart1: 'Cada proyecto tiene',
      headingPart2: 'su historia real.',
      description: 'Desde facturación electrónica y visión artificial premiada, hasta herramientas de saneamiento de datos a gran escala. Cada aplicación está diseñada para resolver una necesidad de negocio concreta.',
      filterAll: 'Todos',
      filterWeb: 'Web & SaaS',
      filterMobile: 'Móvil',
      filterDesktop: 'Escritorio',
      filterAi: 'IA & Visión',
      featuredBadge: 'PROYECTO DESTACADO',
      viewDetails: 'Explorar proyecto',
      liveDemo: 'Demo en vivo',
      codeRepo: 'Código fuente',
      items: {
        'ContaNova': {
          name: 'ContaNova',
          type: 'GESTIÓN COMERCIAL · EN PRODUCCIÓN',
          text: 'De las necesidades de un taller a una plataforma para varios negocios. Facturación electrónica SRI, clientes, productos, reportes y soporte continuo.',
          aside: 'Empezó en el taller donde trabajé.',
        },
        'Taller Jeldes': {
          name: 'Taller Jeldes',
          type: 'APLICACIÓN MÓVIL · USO INTERNO',
          text: 'Reconstrucción en Flutter de la aplicación y el panel administrativo para 15 usuarios. Actividades, fotografías, asistencia e informes técnicos asistidos por IA.',
        },
        'MxCorreo': {
          name: 'MxCorreo',
          type: 'AUTOMATIZACIÓN · WINDOWS',
          text: 'Aplicación portable para importar, depurar y clasificar contactos. Más de 136.600 registros procesados para Actuariosa, con detección de duplicados e informes.',
        },
        'San Viernes & Billar Club': {
          name: 'San Viernes & Billar Club',
          type: 'SOFTWARE COMERCIAL · EN PRODUCCIÓN',
          text: 'Dos implementaciones de gestión de ventas, tickets, compras e inventario. Aplicaciones de supervisión para propietarios y distribución remota de actualizaciones.',
        },
        'SmartDocs': {
          name: 'SmartDocs',
          type: 'GESTIÓN DOCUMENTAL · POR ENCARGO',
          text: 'Almacenamiento, búsqueda, OCR con Tesseract, edición, historial de versiones y uso compartido para organizar documentos.',
        },
        'TechView': {
          name: 'TechView',
          type: 'VISIÓN ARTIFICIAL · MENCIÓN DE HONOR',
          text: 'Desarrollé el software de unas gafas de asistencia visual con detección de objetos e indicaciones por voz. Reconocido con mención de honor en enero de 2026.',
          aside: 'Mi aporte: software de asistencia e IA.',
        },
        'Strawberry Sweet Serve': {
          name: 'Strawberry Sweet Serve',
          type: 'PEDIDOS · ADOPTADO POR EL NEGOCIO',
          text: 'Prototipo funcional para digitalizar pedidos de un local de fresas con crema: personalización, panel administrativo y seguimiento de estados.',
          aside: 'Sí, también hay fresas con crema.',
        },
        'Actuariosa Web': {
          name: 'Actuariosa Web',
          type: 'SITIO WEB · PROPUESTA DE DEMOSTRACIÓN',
          text: 'Propuesta de sitio para consultoría actuarial con servicios, preguntas frecuentes y solicitudes de cotización por WhatsApp y correo.',
        },
        'OmniNote STEM': {
          name: 'OmniNote STEM',
          type: 'MOTOR VECTORIAL & CÁLCULO · C++20',
          text: 'Entorno nativo en C++20 y Qt 6 para cálculo y física: trazo vectorial Catmull-Rom con lápiz Wacom, bloques de código, graficador de funciones matemáticas y base de datos SQLite.',
        },
        'SwiftPiano': {
          name: 'SwiftPiano',
          type: 'SINTETIZADOR 2D & SIMULADOR · GODOT 4',
          text: 'Sintetizador interactivo de 88 notas con mapeo QWERTY completo, muestras de audio Salamander Grand Piano, shaders de halo aditivo y transcriptor MIDI en tiempo real.',
        },
      },
    },
    about: {
      eyebrow: '02 / SOBRE MÍ',
      headingPart1: 'No todo lo aprendí',
      headingPart2: 'frente a la pantalla.',
      metric1Number: '+5',
      metric1Title: 'Sistemas desplegados',
      metric1Desc: 'ContaNova, Billar Club, Jeldes, MxCorreo y Strawberry',
      metric2Number: '136k+',
      metric2Title: 'Registros procesados',
      metric2Desc: 'Automatización y depuración con Python',
      metric3Number: '2026',
      metric3Title: 'Mención de Honor',
      metric3Desc: 'Reconocimiento por visión artificial (TechView)',
      metric4Number: '100%',
      metric4Title: 'Acompañamiento',
      metric4Desc: 'Requerimientos, desarrollo y capacitación',
      para1: 'Mi experiencia no empezó solamente frente al código. He trabajado en atención al cliente, ventas, inventarios y asistencia administrativa. Conocer la operativa real de un negocio me permite construir software intuitivo que los usuarios adoptan de inmediato.',
      para2: 'Estudio Ingeniería en Ciencias de la Computación en la Universidad Espíritu Santo (UEES) y cofundé ESORIA Sistemas, firma donde brindamos soporte técnico a empresas, instalación y mantenimiento de seguridad electrónica (cámaras CCTV), seguridad informática y desarrollo de software a medida. También colaboro con Actuariosa en herramientas internas de automatización, saneamiento de datos y apoyo analítico.',
      para3: 'Busco aportar en roles de Desarrollador de Software Junior (React, TypeScript, Python), soporte de aplicaciones o automatización de datos, en modalidad 100% remota o híbrida.',
    },
    experience: {
      eyebrow: '03 / TRAYECTORIA',
      heading: 'Aprender haciendo.',
      subtitle: 'Cada etapa ha sumado experiencia técnica directa o conocimiento práctico del funcionamiento de un negocio real.',
      filterAll: 'Todos',
      filterWork: 'Experiencia laboral',
      filterEdu: 'Educación & Honores',
      items: [
        {
          date: '2024 — ACTUALIDAD',
          badge: 'Actual · Co-fundador',
          badgeType: 'active',
          title: 'ESORIA Sistemas · Co-fundador & Responsable Técnico',
          logo: '/branding/esoria-isotipo.png',
          tags: [
            'Soporte Técnico a Negocios',
            'CCTV & Seguridad Electrónica',
            'Seguridad Informática',
            'Software Empresarial',
          ],
          description: 'Liderazgo técnico e implementación de soluciones para negocios: soporte técnico integral a estaciones de trabajo y hardware, instalación y calibración de sistemas de videovigilancia CCTV (cámaras IP/HD, DVR/NVR y visualización remota en vivo), seguridad informática (políticas de respaldos periódicos, firewalls y protección de datos) y desarrollo de software comercial a medida (ContaNova, facturación SRI, inventarios y POS).',
        },
        {
          date: 'MAR. 2025 — ACTUALIDAD',
          badge: 'Actual · Consultoría',
          badgeType: 'active',
          title: 'Actuariosa',
          logo: '/branding/actuariosa-logo.png',
          description: 'Desarrollo de herramientas internas de automatización en Python, saneamiento de bases de datos masivas (más de 136.000 registros procesados y 42.648 empresas validadas) y apoyo analítico actuarial.',
        },
        {
          date: 'FEB. — ABR. 2026',
          badge: 'Operaciones & Facturación',
          title: 'Electromecánica Bolívar',
          logo: '/branding/electromecanica-bolivar.png',
          description: 'Atención directa al cliente, venta de repuestos automotrices, facturación e inventarios. La experiencia práctica que inspiró la creación de ContaNova.',
        },
        {
          date: 'FEB. — ABR. 2025',
          badge: 'Prácticas Profesionales',
          title: 'Apol S.A.',
          logo: '/branding/apol-logo.png',
          description: 'Prácticas de asistencia administrativa y apoyo a gerencia: coordinación de reuniones, gestión documental, bases de datos y reportes ejecutivos.',
        },
        {
          date: 'FORMACIÓN ACADÉMICA',
          badge: 'Universidad & Instituto',
          badgeType: 'edu',
          title: 'Educación Superior y Técnica',
          description: '',
          educationSubitems: [
            {
              title: 'Ingeniería en Ciencias de la Computación · UEES',
              desc: 'En curso desde mayo de 2026 en Universidad Espíritu Santo. Modalidad virtual nocturna.',
              logo: '/branding/uees-logo.png',
            },
            {
              title: 'Bachiller en Informática · Instituto Coello',
              desc: 'Graduado en marzo de 2026. Mención de honor en proyecto de graduación. Tutoría voluntaria de Matemáticas, Física y Computación (2023–2025).',
              logo: '/branding/instituto-coello.png',
            },
          ],
        },
      ],
    },
    contact: {
      eyebrow: '04 / HABLEMOS',
      headingPart1: 'Cuéntame qué',
      headingPart2: 'tienes en mente.',
      description: 'Disponible para puestos de desarrollador de software remoto (tiempo completo) o proyectos a medida. Respuesta ágil asegurada.',
      emailLabel: 'CORREO ELECTRÓNICO',
      availability: '● Respuesta rápida en < 24h',
      socialLabel: 'REDES & CURRÍCULUM',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      whatsappLabel: 'WhatsApp',
      whatsappSub: 'Mensaje directo ↗',
      cvLabel: 'Hoja de Vida',
      cvSub: 'Ver CV interactivo ↗',
      cvDownloadEs: 'Descargar CV (Español - PDF)',
      cvDownloadEn: 'Download Resume (English - PDF)',
    },
    footer: {
      copyright: '© 2026 Sebastián Zambrano',
      tagline: 'Desde Guayaquil para el mundo · Remote-first mindset.',
      backToTop: 'Volver arriba ↑',
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      experience: 'Experience',
      contact: 'Contact ↗',
      cv: 'CV / Resume',
    },
    hero: {
      location: 'GUAYAQUIL, ECUADOR',
      remoteBadge: 'Available for Remote',
      timezoneOverlap: 'UTC-5 · Full workday overlap across the Americas',
      portfolioYear: 'PORTFOLIO / 2026',
      greeting: "Hi, I'm",
      headlinePart1: 'Sebastián',
      headlinePart2: 'Zambrano',
      subheadlinePart1: 'Bridging resilient code',
      subheadlinePart2: 'with real business needs.',
      bio: 'Junior software developer experienced in building web, mobile, and desktop applications for businesses. Primary stack: React, TypeScript, Python, PostgreSQL, and Flutter.',
      ctaPrimary: 'Explore my work',
      footRole: 'JUNIOR SOFTWARE DEVELOPER · REACT · TYPESCRIPT · PYTHON',
      footScroll: 'SCROLL TO EXPLORE ↓',
      hudTitle: 'REMOTE WORK STATION',
      hudOriginTitle: 'WHERE I COME FROM',
      hudOriginQuote: 'Before writing code for businesses, I worked inside one.',
      hudOriginDetail: 'I handled customers, sold car parts, and managed warehouse inventory. ContaNova was born directly from that daily friction.',
      hudSpecsTitle: 'ENGINEERING SPECS',
      hudSwitchToSpecs: 'View Tech Specs ⚡',
      hudSwitchToOrigin: 'View Origin Story 📖',
      hudExploreStory: 'Read the story',
    },
    projects: {
      eyebrow: '01 / SELECTED WORK',
      headingPart1: 'Every project carries',
      headingPart2: 'real-world impact.',
      description: 'From production multi-tenant electronic billing to award-winning assistive computer vision and large-scale data cleansing. Each product is engineered to solve authentic business problems.',
      filterAll: 'All',
      filterWeb: 'Web & SaaS',
      filterMobile: 'Mobile',
      filterDesktop: 'Desktop',
      filterAi: 'AI & Vision',
      featuredBadge: 'FEATURED PROJECT',
      viewDetails: 'Explore project',
      liveDemo: 'Live Demo',
      codeRepo: 'Source Code',
      items: {
        'ContaNova': {
          name: 'ContaNova',
          type: 'COMMERCIAL SAAS · IN PRODUCTION',
          text: 'From automotive workshop pain points to a multi-business SaaS. SRI electronic invoicing, customer CRM, inventory, analytics, and ongoing support.',
          aside: 'Started in the workshop where I worked.',
        },
        'Taller Jeldes': {
          name: 'Taller Jeldes',
          type: 'MOBILE APP · INTERNAL OPERATIONS',
          text: 'Flutter rebuild of mobile app and admin dashboard for 15 operational users: real-time tasks, photo logs, attendance, and AI-assisted service reports.',
        },
        'MxCorreo': {
          name: 'MxCorreo',
          type: 'AUTOMATION · WINDOWS UTILITY',
          text: 'Portable Python tool for contact cleaning and domain validation. Processed over 136,600 corporate records for Actuariosa with deduplication and reporting.',
        },
        'San Viernes & Billar Club': {
          name: 'San Viernes & Billar Club',
          type: 'COMMERCIAL SOFTWARE · IN PRODUCTION',
          text: 'Two point-of-sale implementations managing sales, receipts, purchasing, and stock, with remote auto-update distribution.',
        },
        'SmartDocs': {
          name: 'SmartDocs',
          type: 'DOCUMENT MANAGEMENT · CLIENT PROJECT',
          text: 'Document management portal featuring secure storage, search, OCR with Tesseract.js, version history, and collaboration.',
        },
        'TechView': {
          name: 'TechView',
          type: 'COMPUTER VISION · HONORABLE MENTION',
          text: 'Developed the assistive vision software for smart glasses featuring real-time object distance estimation and voice feedback. Awarded graduation honors in Jan 2026.',
          aside: 'My contribution: core AI & audio pipeline.',
        },
        'Strawberry Sweet Serve': {
          name: 'Strawberry Sweet Serve',
          type: 'ORDERING SYSTEM · ADOPTED BY SHOP',
          text: 'Interactive web ordering system for a dessert shop: step-by-step customization, backoffice order queue, and status tracking.',
          aside: 'Yes, real strawberries with cream.',
        },
        'Actuariosa Web': {
          name: 'Actuariosa Web',
          type: 'CONSULTING SITE · PROPOSAL DEMO',
          text: 'Demonstration proposal website for an actuarial consultancy with service catalogs, FAQs, and instant quote requests via WhatsApp and Email. Built as a prototype proposal.',
        },
        'OmniNote STEM': {
          name: 'OmniNote STEM',
          type: 'STEM ENGINE & VECTOR CANVAS · C++20',
          text: 'Native C++20 and Qt 6 engineering canvas for calculus and physics: Catmull-Rom vector inking with Wacom pressure, code blocks, math function plotter, and SQLite WAL persistence.',
        },
        'SwiftPiano': {
          name: 'SwiftPiano',
          type: '2D SYNTHESIZER & SIMULATOR · GODOT 4',
          text: 'Full 88-key piano synthesizer with complete QWERTY mapping, polyphonic Salamander Grand Piano sample pool, real-time 2D HDR bloom shaders, and live MIDI transcription.',
        },
      },
    },
    about: {
      eyebrow: '02 / ABOUT ME',
      headingPart1: 'Not everything was learned',
      headingPart2: 'behind a monitor.',
      metric1Number: '+5',
      metric1Title: 'Live Systems',
      metric1Desc: 'ContaNova, Billar Club, Jeldes, MxCorreo & Strawberry',
      metric2Number: '136k+',
      metric2Title: 'Records Processed',
      metric2Desc: 'Python automated cleaning and validation',
      metric3Number: '2026',
      metric3Title: 'Honorable Mention',
      metric3Desc: 'Award for AI computer vision (TechView)',
      metric4Number: '100%',
      metric4Title: 'End-to-End Ownership',
      metric4Desc: 'Requirements, engineering & user onboarding',
      para1: 'My engineering perspective was forged in real operations. I have worked in customer service, sales counter, inventory auditing, and administrative management. Experiencing operational bottlenecks firsthand is why I build software that teams actually love using.',
      para2: 'I study Computer Science Engineering at Universidad Espíritu Santo (UEES) and co-founded ESORIA Sistemas, delivering business IT technical support, electronic security systems (CCTV), corporate cybersecurity, and custom software engineering. I also collaborate with Actuariosa developing internal automation engines, large-scale data sanitation pipelines, and analytical tooling.',
      para3: 'I am actively seeking junior software developer roles (React, TypeScript, Python), application support, or data automation tooling in remote or hybrid teams.',
    },
    experience: {
      eyebrow: '03 / JOURNEY',
      heading: 'Learning by building.',
      subtitle: 'Each milestone has contributed either direct architectural experience or practical insights into how businesses scale.',
      filterAll: 'All',
      filterWork: 'Work Experience',
      filterEdu: 'Education & Honors',
      items: [
        {
          date: '2024 — PRESENT',
          badge: 'Current · Co-Founder',
          badgeType: 'active',
          title: 'ESORIA Sistemas · Co-Founder & Technical Lead',
          logo: '/branding/esoria-isotipo.png',
          tags: [
            'Business IT Support',
            'CCTV & Electronic Security',
            'Cybersecurity',
            'Enterprise Software',
          ],
          description: 'Technical leadership and on-site implementation for companies: end-to-end hardware and IT support, electronic security system deployments (CCTV IP/HD cameras, DVR/NVR, structured cabling, and remote mobile monitoring), corporate cybersecurity (scheduled encrypted backups, firewalls, and network protection), and custom software engineering (ContaNova, SRI electronic invoicing, POS, and inventory platforms).',
        },
        {
          date: 'MAR. 2025 — PRESENT',
          badge: 'Current · Consulting',
          badgeType: 'active',
          title: 'Actuariosa',
          logo: '/branding/actuariosa-logo.png',
          description: 'Engineered internal Python automation suites, conducted data sanitation on over 136,000 corporate records (42,648 unique validated businesses), and assisted in actuarial analytical modeling.',
        },
        {
          date: 'FEB. — APR. 2026',
          badge: 'Operations & Billing',
          title: 'Electromecánica Bolívar',
          logo: '/branding/electromecanica-bolivar.png',
          description: 'Direct customer service, auto parts retail, inventory reconciliation, and billing. The hands-on operational friction that inspired ContaNova.',
        },
        {
          date: 'FEB. — APR. 2025',
          badge: 'Professional Internship',
          title: 'Apol S.A.',
          logo: '/branding/apol-logo.png',
          description: 'Executive assistance and administrative operations: meeting scheduling, corporate documentation, database organization, and executive reporting.',
        },
        {
          date: 'EDUCATION & HONORS',
          badge: 'University & High School',
          badgeType: 'edu',
          title: 'Academic Background',
          description: '',
          educationSubitems: [
            {
              title: 'Computer Science Engineering · UEES',
              desc: 'Enrolled since May 2026 at Universidad Espíritu Santo. Evening virtual program.',
              logo: '/branding/uees-logo.png',
            },
            {
              title: 'High School Diploma in Informatics · Instituto Coello',
              desc: 'Graduated March 2026 with Honorable Mention in capstone AI project. Volunteer tutor for Math, Physics, and CS (2023–2025).',
              logo: '/branding/instituto-coello.png',
            },
          ],
        },
      ],
    },
    contact: {
      eyebrow: '04 / GET IN TOUCH',
      headingPart1: "Let's build something",
      headingPart2: 'exceptional together.',
      description: 'Available for full-time remote developer positions or custom business software engineering projects. Rapid response guaranteed.',
      emailLabel: 'DIRECT EMAIL',
      availability: '● Fast response within 24h',
      socialLabel: 'NETWORKS & RESUME',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      whatsappLabel: 'WhatsApp',
      whatsappSub: 'Quick Chat ↗',
      cvLabel: 'Curriculum Vitae',
      cvSub: 'View Interactive CV ↗',
      cvDownloadEs: 'Descargar CV (Español - PDF)',
      cvDownloadEn: 'Download Resume (English - PDF)',
    },
    footer: {
      copyright: '© 2026 Sebastián Zambrano',
      tagline: 'Built from Guayaquil for global teams · Remote-first mindset.',
      backToTop: 'Back to top ↑',
    },
  },
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'es',
  setLocale: () => {},
  t: translations.es,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pref-locale') as Locale | null;
      if (saved === 'es' || saved === 'en') {
        setLocaleState(saved);
        return;
      }
      const navLang = navigator.language?.toLowerCase() || '';
      if (navLang.startsWith('en')) {
        setLocaleState('en');
      }
    } catch {
      // ignore
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem('pref-locale', newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
