---
name: web-design-guidelines
description: Authoritative standards for accessibility (WCAG 2.2 AA), responsive layouts, touch ergonomics, micro-states, and visual hierarchy inspired by Vercel and modern production engineering.
---

Apply these design and engineering standards to ensure all web user interfaces meet production-grade visual fidelity, accessibility, and performance.

## 1. Accessibility and Semantic Structure (WCAG 2.2 AA Baseline)

### Semantic HTML First
- Use `<button>` for actions that alter state, submit forms, or trigger modals.
- Use `<a href="...">` exclusively for navigations that change URLs. Never use `<div onClick=...>` or `<a onClick=...>` for button behavior.
- Ensure landmark coverage: `<header>`, `<nav>`, `<main>`, `<aside>`, and `<footer>`. Exactly one `<main>` per page.
- Maintain logical heading hierarchy (`<h1>` through `<h6>`). Never skip heading levels for visual styling; style smaller headings with utility classes rather than choosing the wrong semantic element.

### Color Contrast and Vision
- Text contrast ratio must meet or exceed **4.5:1** against its background for body copy and small text (<18pt or <14pt bold).
- Large text (≥18pt or ≥14pt bold) and essential graphical boundaries/icons must meet or exceed **3:1**.
- Do not rely on color alone to convey state or validation errors. Always combine color with an icon, descriptive text, or badge.

### Focus Management and Keyboard Navigation
- Never suppress default focus rings with `outline: none` without supplying an explicit, visible `:focus-visible` replacement.
- Standard focus ring pattern:
  ```css
  :focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
  ```
- Ensure all interactive controls are reachable via `Tab` and operable via `Enter` or `Space`.
- Modal dialogs must trap focus, close on `Escape`, and return focus to the trigger element upon dismissal.

### Touch Targets and Ergonomics
- All interactive targets (buttons, links, form toggles, icon triggers) must have an effective interactive hit area of at least **44 × 44 CSS pixels** on touch-enabled devices.
- When an icon or button visually measures under 44px (e.g. a 24px icon button), expand its clickable area using padding or pseudo-elements (`::after` with `inset: -10px`).

## 2. Responsive Layout and Fluid Typography

### Layout Primitives
- Design mobile-first. Default styles apply to narrow viewports; progressive enhancements apply via `min-width` media queries (e.g., 640px, 768px, 1024px, 1280px).
- Avoid fixed widths (`width: 500px`) on content containers. Use `max-width` combined with `width: 100%`.
- Prevent unwanted horizontal scrolling by setting `min-width: 0` on flex items and using modern container query units or `calc()`.
- Utilize CSS Grid for multi-dimensional layouts and Flexbox for linear alignment.

### Typography Scale and Proportions
- Bound body text line lengths to **45–75 characters** (`max-w-prose` or `max-width: 65ch`) to preserve reading comfort.
- Proportional line heights:
  - Display / Hero headings: `line-height: 1.1` to `1.2`
  - Section headings (`h2`, `h3`): `line-height: 1.25` to `1.35`
  - Body text: `line-height: 1.5` to `1.65`
- Use tabular figures (`font-variant-numeric: tabular-nums`) for all numeric tables, financial figures, timestamps, and metric counters to prevent layout jitter when values update.

## 3. Comprehensive State Handling

Every interactive component must explicitly handle and style six discrete states:

1. **Default / Idle**: Clean, resting state reflecting the visual hierarchy.
2. **Hover**: Subdued visual cue (subtle brightness shift, slight border contrast enhancement). Never cause layout reflow on hover.
3. **Focus-visible**: High-contrast outline active only during keyboard navigation.
4. **Active / Pressed**: Subtle scale down (`transform: scale(0.98)`) or deeper background color.
5. **Disabled**: Reduced opacity (`opacity: 0.5`), `cursor: not-allowed`, with `aria-disabled="true"`.
6. **Loading / Pending**: Disabled state with an inline spinner or skeleton placeholder, preserving the container's exact bounding box.

### Empty and Error States
- Empty states must never leave a blank canvas. Provide an illustrative icon, a concise explanation of why it is empty, and a primary CTA guiding the user to create their first item.
- Inline form validation errors must sit directly below the relevant input field, with `aria-describedby` pointing to the error message ID and `aria-invalid="true"` set on the input.

## 4. Motion and Performance

- Respect user motion preferences globally:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- Animate only composite properties: `transform` and `opacity`. Avoid animating `width`, `height`, `margin`, or `padding` to prevent layout thrashing and maintain 60/120 FPS.
- Set explicit `width` and `height` attributes or aspect ratios (`aspect-ratio: 16 / 9`) on all images and media containers to eliminate Cumulative Layout Shift (CLS).

## 5. Pre-delivery Quality Audit Checklist

Before finalizing any frontend interface or component, verify:
- [ ] No horizontal scrolling at viewports down to 320px width.
- [ ] All interactive elements navigable and operable using only the keyboard (`Tab`, `Enter`, `Space`, `Escape`).
- [ ] Text contrast verified against backgrounds using WCAG 2.2 AA calculator (≥ 4.5:1).
- [ ] Minimum 44x44px touch targets on mobile viewports.
- [ ] All form fields have persistent accessible labels (either `<label>` or `aria-label`).
- [ ] No generic AI design patterns present unless specifically requested by the user brief.
- [ ] Core Web Vitals protections implemented: explicit image dimensions, zero uncontained layout shifts.
