---
name: impeccable-design-system
description: >-
  Strict visual craftsmanship, anti-slop principles, 4px/8px modular spacing,
  typography rhythm, and UI critique standards based on Paul Bakaus's Impeccable methodology.
  Use when designing, auditing, styling, or polishing interfaces, layouts, and components.
---

# Impeccable Design System & Craftsmanship

Engineering guidelines to ensure visual distinctiveness, structural rigor, and the elimination of generic AI-generated interface tropes.

## 1. Anti-Slop Directives

Prohibited patterns unless explicitly requested by the user:
* **The "AI SaaS" Palette**: Never default to muddy beige `#F4F1EA` paired with terracotta `#D97757` or pitch-black `#000000` with radioactive neon green.
* **Cookie-Cutter Card Grids**: Avoid wrapping every piece of data inside an identical rounded card with a faint diffuse gray shadow. Prefer typographic grouping, subtle borders, and varied density.
* **Gratuitous Eyebrows**: Do not prepend every section title with an uppercase, wide-tracked subtitle (`ALL CAPS EYEBROWS`) unless it serves true breadcrumb or categorical function.
* **Arbitrary Word Emphasis**: Do not italicize or highlight a single random word inside a headline.
* **Meaningless Ordinals**: Do not place `01`, `02`, `03` counters next to items that do not represent an ordered chronological sequence.

---

## 2. Spatial System & Spacing Rhythm

* **4px / 8px Modular Scale**:
  - `4px` (micro gaps, tight badge padding)
  - `8px` (button inline gap, small stack spacing)
  - `12px` (standard input padding, card inner compact padding)
  - `16px` (standard base padding, card body spacing)
  - `24px` (component separation, modal body padding)
  - `32px` (sub-section separation)
  - `48px` – `64px` (major page section margins)
* **Density Coherence**:
  - Interactive components must maintain balanced internal vs. external spacing: outer margins must always exceed inner padding to preserve visual grouping (Gestalt Law of Proximity).

---

## 3. Typography Rhythm & Hierarchy

* **Strict Contrast Hierarchy**:
  - Level 1: Page / Section Hero (display font or bold sans, tight tracking `-0.02em` to `-0.03em`, line-height `1.1` – `1.2`).
  - Level 2: Component Titles (medium/semibold, line-height `1.25` – `1.3`).
  - Level 3: Body text (regular weight, neutral tracking, line-height `1.5` – `1.6`, maximum line length `65` – `75` characters).
  - Level 4: Metadata / Captions (reduced size `12px` – `13px`, medium weight, line-height `1.4`).
* **Optical Alignment**:
  - Icons paired with text must be optically centered to the cap-height of the font, not the bounding box.

---

## 4. Semantic Palette & Contrast (WCAG 2.2 AA)

Every view must derive from a cohesive, minimal semantic palette:
* `background`: Canvas foundation.
* `surface`: Layered containers, cards, sheets.
* `border`: Subtle demarcation (`1px` with low opacity or controlled tone, never harsh solid black).
* `text-primary`: Maximum readable contrast against background ($\ge 7:1$).
* `text-muted`: Secondary details and metadata ($\ge 4.5:1$).
* `accent`: A single intentional color used sparingly for active states, key focus rings, and primary actions.

---

## 5. UI Polish & Critique Checklist

When auditing or refining any component:
1. **Interactive States**: Does the element have clear, differentiated `:hover`, `:active`, `:focus-visible`, and `disabled` states?
2. **Focus Visibility**: Never disable `outline` without providing an explicit, high-contrast focus ring with offset (`focus-visible:ring-2 focus-visible:ring-offset-2`).
3. **Touch Targets**: All interactive targets must have a hit area of at least `44x44px` on mobile/touch screens.
4. **Copywriting**: Action buttons must describe the outcome ("Guardar cambios", "Crear rama", "Abrir demo"), avoiding generic single words ("OK", "Enviar", "Ir").
5. **Empty & Error States**: Errors must specify what failed and provide immediate actionable recovery paths. Empty states must invite action rather than presenting dead ends.
