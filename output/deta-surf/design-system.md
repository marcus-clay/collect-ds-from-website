# Design System — deta.surf

> Extracted from **https://deta.surf/**
> Generated: 2026-03-29 — tool: `collect-ds-from-website`

---

## Table of Contents

1. [Colors](#colors)
2. [Gradients](#gradients)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Border Radius](#border-radius)
6. [Shadows](#shadows)
7. [Transitions](#transitions)
8. [Breakpoints](#breakpoints)
9. [Z-Index](#z-index)
10. [Components](#components)
11. [Usage](#usage)

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand-dark` | `#1a2a3a` | Heading text gradient start, primary dark navy |
| `--color-brand-mid` | `#3a5a7a` | Heading text gradient end, mid blue |
| `--color-accent-bright` | `#0097fe` | CTA buttons, primary interactive |
| `--color-accent-blue` | `#0080e5` | CTA gradient end |
| `--color-interactive-start` | `#0396df` | Card selected state, feature highlight |
| `--color-interactive-end` | `#0282e8` | Card selected gradient end |
| `--color-interactive-hover` | `#006ec7` | Hover state for blue elements |
| `--color-border` | `#28476110` | Subtle card/element borders (6% opacity navy) |
| `--color-border-hover` | `#28476140` | Border on hover (25% opacity navy) |
| `--color-stroke-light` | `#d1d7fe` | SVG strokes, light lavender accent |
| `--color-overlay-dark` | `#0000001a` | Carousel/modal dark overlay (10% black) |
| `--color-overlay-light` | `#ffffffe6` | Light overlay (90% white) |
| `--color-white` | `#ffffff` | Backgrounds, text on dark |
| `--color-black` | `#000000` | Body text, primary text |

---

## Gradients

### heading
```css
background: linear-gradient(135deg, #1a2a3a, #3a5a7a);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```
Used on: `<h1>`, `<h2>`, display text

### heading-muted
```css
background: linear-gradient(135deg, #1a2a3a99, #3a5a7a99);
```
Used on: secondary descriptions, subheadings

### cta
```css
background: linear-gradient(180deg, #0097fe, #0080e5);
```
Used on: primary download/action buttons

### card-selected
```css
background: linear-gradient(180deg, #0396df, #0282e8);
```
Used on: active feature cards, selected states

---

## Typography

### Font Families

| Family | Classification | Usage |
|--------|---------------|-------|
| **Switzer** (variable) | Geometric sans-serif | All body text, UI, labels — `font-family: var(--font-switzer)` |
| **Gambarino** | Display serif | Large decorative headings — `font-family: var(--font-gambarino)` |
| **Tanker** | Display sans bold | Impact hero text — `font-family: var(--font-tanker)` |

### Font Sizes

| Token | rem | px | Usage |
|-------|-----|----|-------|
| `--text-xs` | 0.75rem | 12px | Captions, labels |
| `--text-sm` | 0.875rem | 14px | Small UI text, badges |
| `--text-base` | 1rem | 16px | Body text default |
| `--text-md` | 1.125rem | 18px | Large body, feature text |
| `--text-lg` | 1.25rem | 20px | Lead paragraphs |
| `--text-xl` | 1.5rem | 24px | Card headings |
| `--text-2xl` | 1.875rem | 30px | Section headings |
| `--text-3xl` | 2.25rem | 36px | Page subheadings |
| `--text-4xl` | 3rem | 48px | Hero subheadings |
| `--text-5xl` | 3.75rem | 60px | Hero headlines |

### Font Weights

| Token | Value |
|-------|-------|
| `--font-weight-regular` | 400 |
| `--font-weight-medium` | 500 |
| `--font-weight-semibold` | 600 |
| `--font-weight-bold` | 700 |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | 1.2 | Display headings |
| `--leading-snug` | 1.35 | Card headings |
| `--leading-normal` | 1.5 | Body text |
| `--leading-relaxed` | 1.625 | Long-form prose |

---

## Spacing

Base unit: **4px**

| Token | Value | Tailwind equiv |
|-------|-------|---------------|
| `--space-1` | 4px | `p-1` |
| `--space-2` | 8px | `p-2` |
| `--space-3` | 12px | `p-3` |
| `--space-4` | 16px | `p-4` |
| `--space-5` | 20px | `p-5` |
| `--space-6` | 24px | `p-6` |
| `--space-8` | 32px | `p-8` |
| `--space-10` | 40px | `p-10` |
| `--space-12` | 48px | `p-12` |
| `--space-16` | 64px | `p-16` |
| `--space-20` | 80px | `p-20` |
| `--space-24` | 96px | `p-24` |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small elements (badges, tags) |
| `--radius-md` | 8px | Inputs, small cards |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Feature cards (primary) |
| `--radius-2xl` | 24px | Large panels |
| `--radius-full` | 9999px | Pills, buttons, dots |

### Fluid Borders (responsive)
```css
--border-fluid:    clamp(0.7px, 0.27vw, 3.6px);  /* card outline */
--border-fluid-xs: clamp(1.8px, 0.18vw, 2.4px);  /* subtle */
--inset-depth:     clamp(3.6px, 0.36vw, 4.8px);  /* inset shadow depth */
```

---

## Shadows

### card (default)
```css
box-shadow: 0 calc(-1 * clamp(3.6px, 0.36vw, 4.8px)) 0 0 #28476110 inset;
```

### card-hover
```css
box-shadow: 0 calc(-1 * clamp(3.6px, 0.36vw, 4.8px)) 0 0 #28476140 inset;
```

### card-active
```css
box-shadow: 0 calc(-1 * clamp(3.6px, 0.36vw, 4.8px)) 0 0 #0282e8 inset;
```

> **Pattern**: All shadows are **inset bottom** shadows — they create a subtle bottom border effect that becomes coloured on interaction.

---

## Transitions

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);  /* Material ease-in-out */

--transition-fast:    0.15s cubic-bezier(0.4, 0, 0.2, 1);
--transition-default: 0.2s  cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:    0.3s  cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Breakpoints

| Name | Value | Usage |
|------|-------|-------|
| `sm` | 640px | Mobile landscape, 2-column grid |
| `md` | 768px | Tablet, 3-column grid |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Wide desktop |

---

## Z-Index

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default flow |
| `--z-raised` | 10 | Sticky nav, tooltips |
| `--z-overlay` | 100 | Overlays, backdrops |
| `--z-modal` | 200 | Modals, video players |

---

## Components

### Button — Primary (Download CTA)

```html
<a href="#" class="btn-primary">
  Download Surf
</a>
```

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--gradient-cta);
  color: var(--color-white);
  border-radius: var(--radius-full);
  font-family: var(--font-switzer);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  transition: filter var(--transition-default), transform var(--transition-default);
}

.btn-primary:hover  { filter: brightness(1.08); transform: translateY(-1px); }
.btn-primary:active { filter: brightness(0.95); transform: translateY(1px); }
```

---

### Feature Card

```html
<div class="feature-card">
  <h3>Feature Name</h3>
  <p>Description text</p>
</div>
```

States: default → hover → active → `.is-selected`

```css
.feature-card {
  outline: var(--border-fluid) solid var(--color-border);
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  transition: outline-color, box-shadow, transform, background;
  transition-duration: 0.2s;
  transition-timing-function: var(--ease-default);
}

.feature-card:hover      { transform: translateY(-1px); }
.feature-card:active     { transform: translateY(2px); }
.feature-card.is-selected {
  background: var(--gradient-card-selected);
  color: var(--color-white);
}
```

---

### Gradient Text

```html
<h1 class="text-gradient">Elevate your thinking</h1>
```

```css
.text-gradient {
  background: var(--gradient-heading);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

### Carousel / Navigation Dots

```html
<div class="nav-dots">
  <button class="nav-dot is-active"></button>
  <button class="nav-dot"></button>
  <button class="nav-dot"></button>
</div>
```

```css
.nav-dot {
  width: 8px; height: 8px;
  border-radius: var(--radius-full);
  background: var(--color-overlay-dark);
  transition: opacity var(--transition-default), background var(--transition-default);
}
.nav-dot.is-active { background: var(--color-black); opacity: 0.4; }
```

---

## Usage

### 1. CSS Custom Properties (vanilla / any framework)

```html
<link rel="stylesheet" href="design-tokens.css">
```

```css
/* Use tokens in your own CSS */
h1 { font-family: var(--font-gambarino); }
.card { border-radius: var(--radius-xl); }
```

### 2. Tailwind CSS

```bash
# Copy tailwind.config.js to your project root
# or merge the `theme.extend` block into your existing config
```

```jsx
// React/Vue/Svelte component
<div className="bg-gradient-cta text-white rounded-full px-6 py-3">
  Download Surf
</div>
```

### 3. JSON Tokens (Style Dictionary / Theo / Token Pipeline)

```bash
npm install -g style-dictionary
style-dictionary build --config sd.config.json
```

```json
// sd.config.json
{
  "source": ["design-tokens.json"],
  "platforms": {
    "css": { "transformGroup": "css", "buildPath": "dist/", "files": [{ "destination": "variables.css", "format": "css/variables" }] },
    "js":  { "transformGroup": "js",  "buildPath": "dist/", "files": [{ "destination": "tokens.js",    "format": "javascript/es6" }] }
  }
}
```
