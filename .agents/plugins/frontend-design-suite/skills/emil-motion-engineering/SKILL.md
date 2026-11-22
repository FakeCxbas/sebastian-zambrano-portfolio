---
name: emil-motion-engineering
description: >-
  Motion design engineering standards, physics-based animations, microinteractions,
  and gesture ergonomics based on Emil Kowalski's guidelines. Use whenever designing,
  refactoring, animating, or reviewing transitions, hover states, modals, drawers,
  tooltips, or layout shifts.
---

# Emil Kowalski Motion Engineering Standards

Guidelines for crafting purposeful, high-performance, and physically coherent motion in web interfaces.

## 1. Core Philosophy

Motion must clarify state changes, establish spatial relationships, and provide tactile feedback. It must never serve as decorative latency or slow the user down.

- **Speed over Spectacle**: The interface must feel responsive before it feels animated.
- **Physical Plausibility**: Elements move as if they have mass, friction, and clear anchor points.
- **Zero Drift**: Avoid floaty, ungrounded animations that linger after user interaction ceases.

---

## 2. Timing and Duration Thresholds

Strict limits apply to all UI transitions:

* **Micro-interactions (buttons, icons, toggles, hover states)**: `100ms` – `150ms`.
* **Intermediate transitions (tooltips, dropdowns, popovers)**: `150ms` – `200ms`.
* **Major surface shifts (dialogs, drawers, side panels)**: `200ms` – `260ms`.
* **Absolute Ceiling**: No UI transition should ever exceed `300ms` unless illustrating real-time data or media playback.

### Exit Transitions
- Exits must be **20% to 30% faster** than entries (e.g., enter at `200ms`, exit at `140ms`).
- Exits must never have delays. When a user closes or dismisses an element, dismiss immediately.

---

## 3. Easing & Curves

Never use default CSS `ease` or linear curves for spatial motion.

* **Enter Transitions (Deceleration / Ease-Out)**:
  - Standard smooth landing: `cubic-bezier(0.16, 1, 0.3, 1)`
  - Snappy landing: `cubic-bezier(0.2, 0.8, 0.2, 1)`
* **Exit Transitions (Acceleration / Ease-In)**:
  - Snappy dismissal: `cubic-bezier(0.7, 0, 0.84, 0)` or `cubic-bezier(0.4, 0, 1, 1)`
* **Spring Dynamics (Framer Motion / Motion for React)**:
  - Modals & dialogs: `stiffness: 350`, `damping: 32`, `mass: 0.8`
  - Popovers & menus: `stiffness: 420`, `damping: 28`
  - Tooltips & badges: `stiffness: 500`, `damping: 25`
  - Prevent underdamped oscillation: UI components must settle cleanly within 1-2 bounces maximum.

---

## 4. Transform Origin & Scale Continuity

* **Prohibit `scale(0)`**: Never scale an element from or to `0`. It feels unnatural and distorts text rendering.
  - Modals and cards: scale from `0.94` or `0.96` to `1.0`.
  - Floating menus / tooltips: scale from `0.90` to `1.0`.
* **Explicit Transform Origin**:
  - Always set `transform-origin` relative to the trigger element or screen anchor (e.g., dropdowns originate from the button edge, not the center of the menu).
* **Directional Logic**:
  - Elements entering from above should travel downwards (`translateY(-8px)` to `0`).
  - Elements entering from below should travel upwards (`translateY(8px)` to `0`).
  - Keep spatial offsets small (`4px` to `16px`). Large jumps across the screen degrade perceived speed.

---

## 5. GPU Rendering & Performance

* **Compositor Only**: Animate exclusively `transform` and `opacity`.
* **Prohibited Layout Triggers**: Never animate `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, or `padding`. Use transform scale and clip-path where size adjustments are needed.
* **`will-change` Hygiene**:
  - Apply `will-change: transform, opacity` only during active interaction or dragging, and remove it on settle. Avoid static `will-change` declarations across multiple elements to prevent GPU memory bloat.

---

## 6. Accessibility & Reduced Motion

Every animated element must respect user system preferences:

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
In React/Framer Motion, read `useReducedMotion()` to swap spatial transforms with simple opacity fades (`opacity: 0` to `1`) or instant mounting.
