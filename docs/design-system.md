# DRFT — Design System Reference
> A dark precision instrument. Like a surgeon's tray under a focused lamp.

**Theme:** dark
**Inspired by:** Notion (type restraint, one-accent philosophy, hairline borders) × ElevenLabs (pill shapes, surface naming, whisper shadows, exact letter-spacing) — adapted for a dark, developer-adjacent product.
**Core narrative:** Cursor for resumes. The product is precision. The design must feel like it.

---

## What We Took and Why

| From Notion | Taken | Rationale |
|---|---|---|
| One chromatic commitment | ✅ | Mint #00E5A0 is the only non-neutral color in the UI |
| Negative letter-spacing scale | ✅ | Tightens display text, signals confidence |
| Alpha hierarchy for text | ✅ | Text-1/2/3 built from white at 95%/55%/25% |
| Hairline borders, no shadows on cards | ✅ | Adapted: rgba(255,255,255,0.08) instead of rgba(0,0,0,0.08) |
| Editorial serif for select moments | ✅ | Instrument Serif = our Lyon Text equivalent |

| From ElevenLabs | Taken | Rationale |
|---|---|---|
| Pill buttons (9999px) | ✅ | More refined than rectangular — works with the mint CTA |
| Card radius upgrade (20px) | ✅ | More premium than 12px |
| Large card radius (24px) | ✅ | For the hero demo container |
| Multi-layer whisper shadow | ✅ | Inverted for dark: white inset lines instead of black |
| Surface naming convention | ✅ | Void → Base → Raised (dark inversion of eggshell/taupe/stone) |
| Full spacing token scale | ✅ | 4px base unit, full 4–160px scale |
| Geist Mono for technical labels | ✅ | Already in use — confirmed correct |

---

## Colors

| Name | Value | Token | Role |
|---|---|---|---|
| Void | `#0A0A0A` | `--color-void` | Page canvas — the base of everything |
| Base | `#111111` | `--color-base` | Card surfaces, panels — one level above void |
| Raised | `#161616` | `--color-raised` | Dropdowns, modals, overlays |
| Hairline | `#1E1E1E` | `--color-hairline` | Borders, dividers — the dark system's hairline |
| Hairline-hover | `#2A2A2A` | `--color-hairline-hover` | Hover state borders |
| Mint | `#00E5A0` | `--color-mint` | The one chromatic commitment — CTA button fill, streaming edit highlight. Used exactly twice on the landing page. Never for decorative purposes. |
| Mint-dim | `rgba(0,229,160,0.08)` | `--color-mint-dim` | Hover tint, subtle field highlight |
| Text-1 | `#F0F0F0` | `--color-text-1` | Primary — headlines, key copy |
| Text-2 | `rgba(240,240,240,0.55)` | `--color-text-2` | Secondary — body, descriptions |
| Text-3 | `rgba(240,240,240,0.25)` | `--color-text-3` | Muted — footnotes, placeholder |

**Philosophy:** Text hierarchy is built from a single white (#F0F0F0) at three alpha levels — same as Notion's ink-black approach, inverted. No new hues added for hierarchy. Mint appears exactly twice on the landing page: the streamed edit text in the hero demo, and the waitlist button. The discipline around this is what makes both moments land.

---

## Typography

### Instrument Serif — Display, hero headlines
Our Waldenburg equivalent. At weight 400, it carries editorial restraint where every other product uses 700. The medium weight at large sizes signals confidence through discipline, not force.

- **Weights:** 400
- **Sizes:** 40px, 48px, 64px (responsive: 40px mobile)
- **Line height:** 1.0–1.05 at 64px, 1.1 at 48px
- **Letter spacing:** -0.02em throughout (matches ElevenLabs' Waldenburg tracking)
- **Usage:** Hero headline, section intro headlines only. Never in UI chrome, nav, or labels.

### Geist — All UI, body copy, nav, labels
The neutral carrier. Reliable, modern, zero personality — which is correct. The product's personality comes from Instrument Serif and mint moments, not from the body font.

- **Weights:** 400 (body), 500 (buttons, labels, nav)
- **Sizes:** 12px, 14px, 15px, 16px, 17px, 18px
- **Line height:** 1.5 at body sizes, 1.0 at UI labels
- **Letter spacing:** +0.01em at 12–14px (legibility boost at small sizes)
- **Usage:** Everything that isn't a display headline or technical label

### Geist Mono — Technical copy, inline labels, demo content
Used sparingly. The resume text inside the hero demo is Geist Mono — signals precision editing, not a word processor.

- **Weights:** 400
- **Sizes:** 11px, 12px, 13px
- **Line height:** 1.6
- **Usage:** Hero demo resume text, step numbers ("01 02 03"), DRFT wordmark

---

## Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| display | Instrument Serif | 64px (40px mobile) | 400 | 1.0 | -0.02em |
| display-sm | Instrument Serif | 48px (32px mobile) | 400 | 1.05 | -0.02em |
| heading | Instrument Serif | 40px | 400 | 1.1 | -0.02em |
| body-lg | Geist | 18px | 400 | 1.65 | normal |
| body | Geist | 16px | 400 | 1.6 | normal |
| body-sm | Geist | 14px | 400 | 1.5 | 0.01em |
| label | Geist | 14px | 500 | 1.0 | normal |
| caption | Geist | 12px | 400 | 1.5 | 0.01em |
| mono-label | Geist Mono | 12px | 400 | 1.6 | normal |
| mono-sm | Geist Mono | 11px | 400 | 1.6 | normal |

---

## Spacing

4px base unit. Full ElevenLabs scale, confirmed.

```
4  8  12  16  20  24  28  32  36  40  48  56  64  72  96  160
```

**Key layout values:**
- Page max-width: 1100px (content) / 1280px (full bleed sections)
- Section vertical padding: 120px top/bottom (64px mobile)
- Card padding: 32px (upgraded from 24px — from ElevenLabs)
- Element gap: 8–16px

---

## Border Radius

From ElevenLabs, adapted for dark:

| Element | Value | Token |
|---|---|---|
| buttons | 9999px | `--radius-pill` |
| tags / badges | 9999px | `--radius-pill` |
| large cards | 24px | `--radius-xl` |
| standard cards | 20px | `--radius-lg` |
| inputs | 6px | `--radius-input` |
| small elements | 4px | `--radius-sm` |

---

## Shadows

ElevenLabs' shadow system inverted for dark surfaces. Dark surfaces use white inset lines instead of black drop shadows.

```css
/* Card border — replaces solid border on cards */
--shadow-card: rgba(255,255,255,0.06) 0px 0px 0px 1px inset;

/* Elevated card — for the hero demo container */
--shadow-elevated: rgba(255,255,255,0.08) 0px 0px 0px 1px inset,
                   rgba(0,0,0,0.5) 0px 8px 32px 0px;

/* Subtle outer glow — for the mint CTA button */
--shadow-mint-glow: 0px 0px 20px rgba(0,229,160,0.15);

/* Nav bar — sticky, appears on scroll */
--shadow-nav: rgba(255,255,255,0.04) 0px 0px 0px 1px inset,
              rgba(0,0,0,0.3) 0px 2px 8px 0px;
```

---

## Components

### Waitlist Button (Primary CTA)
Mint (#00E5A0) fill. #0A0A0A text. 9999px radius. Geist 14px 500. Padding: 14px 28px.
Hover: scale(1.02), `--shadow-mint-glow`. Transition: 200ms ease.
Submit state: collapses to checkmark + "You're on the list". 300ms ease.

### Ghost Button / Nav Button
`rgba(255,255,255,0.06)` fill. #F0F0F0 text. 9999px radius. Geist 14px 500. 1px border rgba(255,255,255,0.12). Padding: 10px 20px.
Hover: border rgba(255,255,255,0.2), bg rgba(255,255,255,0.09).

### Standard Feature Card
`--color-base` (#111111) fill. 20px radius. 32px padding. Border: 1px rgba(255,255,255,0.06) inset shadow. No drop shadow.

### Hero Demo Container
`--color-base` (#111111) fill. 24px radius. `--shadow-elevated`. Internally divided into chat/canvas panels by a 1px rgba(255,255,255,0.08) vertical rule.

### Edit Proposal Card (in hero demo)
`#141414` fill. 2px left border `--color-mint`. 12px radius. Geist Mono 11px throughout.

### Email Input
`--color-raised` (#161616) fill. 6px radius. 1px border rgba(255,255,255,0.10). Geist 14px, Text-2 placeholder. Height: 48px.

### Step Number Tag
Geist Mono, 11px, Text-3. No background. Margin-bottom 12px.

### Hairline Divider
1px solid rgba(255,255,255,0.08). The standard section separator.

---

## Surfaces

```
Void     #0A0A0A    Page background — the deepest surface
Base     #111111    Cards, panels — one step above void
Raised   #161616    Dropdowns, modals — two steps above void
Float    #1E1E1E    Borders, hairlines — the "stone" equivalent
```

The surface stack mirrors ElevenLabs' eggshell/taupe/stone naming, inverted for dark.

---

## Animation Principles

From both references: motion answers actions, never decorates. One orchestrated moment (the hero demo) is the entire animation budget.

- **Hero demo:** Custom CSS keyframes. Plays once on load, loops. See build prompt for exact keyframe spec.
- **Pain section reveals:** IntersectionObserver. Opacity 0→1, translateY 12px→0. 400ms ease-out. 120ms stagger per item.
- **Button hover:** scale(1.02). 200ms ease. The mint glow shadow animates in.
- **Card hover:** border-color from rgba(255,255,255,0.06) → rgba(255,255,255,0.12). 200ms.
- **Input focus:** border-color rgba(255,255,255,0.10) → rgba(0,229,160,0.4). 200ms.
- **Nothing else moves.** Scrolling, parallax, section entrances (except pain section) — none of it.
- **`prefers-reduced-motion`:** All animations disabled. Static fallback for hero demo.

---

## Do's and Don'ts

### Do
- Use Instrument Serif at weight 400 for display. Never bold it.
- Use mint exactly twice on the landing page: streaming edit text in hero demo, and the waitlist CTA button.
- Apply 9999px radius to all buttons. It's non-negotiable — it's what makes the CTA feel modern and distinct from a generic SaaS.
- Apply -0.02em letter-spacing to all display and heading text.
- Use `rgba(255,255,255,0.06)` inset shadows as the card border system, not visible `border` CSS properties. (Follows ElevenLabs' inset shadow approach, inverted.)
- Build text hierarchy with alpha variants of #F0F0F0 at 100%, 55%, 25%.
- Keep section gaps at 120px on desktop, 64px on mobile.
- Set card padding to 32px (not 24px).

### Don't
- Don't add mint anywhere outside the two designated spots.
- Don't use a drop shadow on content cards — only `--shadow-elevated` on the hero demo container.
- Don't use Instrument Serif below 40px or in navigation items.
- Don't bold Geist Mono — it's always 400.
- Don't animate section entrances beyond the pain section. Scattered fade-ins are a generic AI-page tell.
- Don't add a gradient anywhere. The system is strictly flat fills.
- Don't round cards less than 20px.
- Don't use rgba(0,229,160,...) as a background tint anywhere — mint stays as text and button fill only.

---

## Similar Design Systems
- **Linear** — same dark precision, one accent color, hairline borders
- **Vercel** — same surface layering in dark, same Geist typography
- **Cursor** — same developer-tool aesthetic, editorial restraint
- **ElevenLabs** — pill shapes, surface naming convention, shadow system (our primary reference, inverted)
- **Notion** — type scale approach, one chromatic commitment, hairline borders (our secondary reference, inverted)

---

*DRFT Design System v1.0 · May 2026*
*Inspired by Notion and ElevenLabs design systems — not copied. Adapted for a dark, developer-adjacent AI product.*
