# Directrices de Diseño y Motion Engineering — sebastianzambrano.dev

Este documento establece las especificaciones obligatorias de diseño visual, ingeniería de movimiento y estándares de plataforma para el portafolio web de Sebastián Zambrano (`sebastianzambrano.dev`).

Sintetiza la tríada de **Impeccable (Craft & Jerarquía)**, **Emil Kowalski (Motion Engineering)** y **Google Modern Web Guidance (Rendimiento & Plataforma)**.

---

## 1. REGLA FUNDAMENTAL DE REWORK: RESPETO ESTRUCTURAL
- **Prohibido romper o alterar la estructura existente**: Se mantienen exactamente los mismos componentes, rutas, textos bilingües (`lib/i18n.ts`), proyectos y anclajes de navegación (`#proyectos`, `#sobre-mi`, `#experiencia`, `#servicios`, `#contacto`).
- El rework es **estrictamente de pulido visual y cinético**: microinteracciones, texturas, bordes, estados hover/active, tipografía, iluminación y transiciones.

---

## 2. CRAFT Y DIRECCIÓN VISUAL (Estándar Impeccable)

### 2.1 Paleta de Color y Superficies
- **Base Táctica**: Fondo profundo `#0b0e0c` con superficies de tarjeta `#141914` y acentos de control `#192019`.
- **Acento Primario (Lima Táctico)**: `#c6fa78` (con variantes `#cbff73` y `#9baf8a` para metadatos tenues).
- **Contraste de Texto**: Marfil de alto contraste `#f4f6ee` para titulares principales; verde oliva apagado `#aab4aa` o `#b5c0b5` para párrafos de lectura (mínimo contraste WCAG 2.2 AA).
- **Bordes y Delimitación**: Bordes nítidos de 1px usando opacidades calculadas (`rgba(255, 255, 255, 0.08)` a `rgba(255, 255, 255, 0.16)`). Prohibidos los bordes difusos o sombras pesadas artificiales.
- **Cero Clichés de IA**: Prohibidos los gradientes violeta-azul genéricos y las tarjetas anidadas sin función (*cards inside cards*). La profundidad se logra con contraste de superficie y bordes de precisión.

### 2.2 Tipografía y Ritmo Vertical
- **UI y Encabezados**: `Geist Sans` con tracking ajustado (`letter-spacing: -0.04em` a `-0.075em` en display grande).
- **Metadatos Técnicos y Badges**: `Geist Mono` para números de versión, tags, fechas y métricas (`font-size: 0.75rem`, `letter-spacing: 0.04em`).
- **Acento Humano Editorial**: `Georgia` cursiva únicamente para citas o frases de autor personales, generando contraste con el entorno técnico.
- **Escala Modular**: Espaciados y paddings siempre múltiplos de **4px / 8px** (8px, 12px, 16px, 24px, 32px, 48px).

---

## 3. INGENIERÍA DE MOVIMIENTO (Estándar Emil Kowalski)

### 3.1 Umbrales de Tiempo y Respuesta
- **Microinteracciones rápidas (Botones, Links, Badges, Tabs)**: Duración estricta entre **140ms y 200ms**. El feedback táctil debe sentirse instantáneo (*snappy*).
- **Componentes Flotantes (Command Palette, Menús, Tooltips)**: Entre **180ms y 220ms**.
- **Modales y Diálogos de Proyecto**: Entre **220ms y 280ms**. Jamás superar los 300ms.

### 3.2 Curvas de Aceleración y Escala
- **PROHIBIDO `scale(0)`**: Ningún elemento nace desde un punto invisible. Los modales, tarjetas y popovers entran escalando sutilmente desde `0.96` o `0.97` hacia `1.0`.
- **PROHIBIDO `ease-in` en apariciones**: Toda entrada debe comenzar rápida y frenar de forma natural usando `ease-out` o la curva cúbica de alto impacto:
  ```css
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  ```
- **Origen de Transformación Consciente (`transform-origin`)**:
  - Los menús desplegables nacen del botón que los abrió.
  - Las tarjetas de proyecto escalan ancladas al centro inferior (`transform-origin: center bottom`).
- **Física de Resortes (Framer Motion)**:
  - Cuando se use `framer-motion`, priorizar resortes amortiguados en lugar de transiciones lineales:
    `{ type: "spring", stiffness: 380, damping: 30 }` para popups/toggles.

---

## 4. ESTÁNDARES DE PLATAFORMA Y RENDIMIENTO (Google Modern Web Guidance)

### 4.1 HTML Semántico y Estructura
- Utilizar elementos nativos: `<nav>`, `<header>`, `<main>`, `<article>`, `<section>`, `<footer>` y `<dialog>`.
- Todos los botones interactivos deben ser `<button>` o `<a>` con texto accesible y atributos `aria-label` cuando no haya texto visible.

### 4.2 Core Web Vitals y Carga Eficiente
- **Prioridad de Imágenes**: Aplicar `fetchpriority="high"` a la imagen del hero o portada principal (LCP). Las imágenes de proyectos fuera del viewport inicial deben usar `loading="lazy"` y `decoding="async"`.
- **Renderizado Fuera de Pantalla**: Añadir `content-visibility: auto` y `contain-intrinsic-size` a secciones pesadas inferiores (`#servicios`, `#experiencia`, `#contacto`) para reducir el tiempo de render inicial a casi cero.
- **Accesibilidad y Foco**: Todo elemento focuseable debe tener un `:focus-visible` nítido con outline de 2px en `--primary` (`#c6fa78`) y `outline-offset: 3px`.
- **Modo Reducción de Movimiento**: Cumplimiento estricto de `@media (prefers-reduced-motion: reduce)` anulando transformaciones y animaciones pesadas.
