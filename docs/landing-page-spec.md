# DRFT — Landing Page Spec
**Waitlist Edition · May 2026**

---

## Purpose

Single-goal page: capture waitlist signups. Every section exists to earn the scroll and convert at the bottom CTA. No pricing details yet. No feature documentation. Just enough to make someone type their email.

---

## Design Tokens

```
Background:      #0A0A0A
Surface:         #111111
Border:          #1E1E1E
Accent:          #00E5A0   (mint — one place only: streamed edit highlight + CTA button)
Text primary:    #F0F0F0
Text secondary:  #666666
Text muted:      #333333
Warning/flag:    #EAB308

Font display:    Instrument Serif, 400 — hero headline only
Font body:       Geist, 400/500 — all UI, copy, labels
Font mono:       Geist Mono, 400 — resume text in the demo, inline code

Page max-width:  1100px, centered
Column gutter:   24px
Section padding: 120px top/bottom (64px mobile)
```

**Design principle for this page:** Mint is used exactly twice — the streamed edit text in the hero demo and the waitlist button. Nowhere else. Every other design decision is in service of making those two moments land harder.

---

## Nav

**Height:** 56px  
**Background:** #0A0A0A with `backdrop-filter: blur(12px)` — sticky on scroll  
**Border-bottom:** 1px solid #1E1E1E, appears only after 80px scroll

**Left:** DRFT wordmark — Geist Mono, 15px, #F0F0F0, letter-spacing 0.08em  
**Right:** `[Join waitlist]` — ghost button, 1px border #1E1E1E, 32px height, 14px Geist, hover fills to mint

Nothing else in nav. No links. No hamburger. The page is a single scroll — no anchors needed.

---

## Section 1 — Hero

**Layout:** Full viewport height. Content left-aligned, starting at 28% from top.

### Left column (55%)

**Eyebrow line** — Geist Mono, 12px, #666666:
```
Early access — join the waitlist
```

**Headline** — Instrument Serif, 64px mobile-down to 48px, weight 400, line-height 1.0, #F0F0F0:
```
AI edits.
You decide.
```

*Note: two lines, each flush left. No gradient. No accent color on words. The serif weight carries it.*

**Body** — Geist, 17px, #666666, line-height 1.65, max-width 480px:
```
Chat alongside your resume and job description.
Watch targeted edits stream into the canvas.
Your voice stays intact — every time.
```

**Waitlist form** — inline input + button, 48px height, full width of text column:
```
[  Your email address               ] [Join waitlist]
```
- Input: #111111 bg, 1px border #1E1E1E, 14px Geist, placeholder #444
- Button: #00E5A0 bg, #0A0A0A text, Geist 14px 500, border-radius 6px
- Hover: button scales to 1.02, 200ms ease
- On submit: button collapses to a checkmark with text "You're on the list"
- Error state: input border turns #EAB308, inline message below

**Below form** — Geist Mono, 11px, #333333:
```
Open source · MIT license · Free tier available at launch
```

---

### Right column (45%)

**The hero demo** — the single most important element on the page.

A static-then-animated split-pane illustration of the DRFT canvas:

**Structure:**
```
┌───────────────────────────────────────────────────┐
│  ╔══════════════╗  ╔══════════════════════════╗   │
│  ║  CHAT PANEL  ║  ║  CANVAS                 ║   │
│  ║              ║  ║                         ║   │
│  ║  AI: Editing ║  ║  • Led pipeline build   ║   │
│  ║  your Stripe ║  ║    serving 400M events  ║   │
│  ║  bullets...  ║  ║                         ║   │
│  ║              ║  ║  ┌─ proposed edit ────┐ ║   │
│  ║  ···         ║  ║  │ ✦ Architected and  │ ║   │
│  ║              ║  ║  │   scaled real-time │ ║   │  ← mint text, streaming
│  ║              ║  ║  │   pipeline▌        │ ║   │
│  ║              ║  ║  │                    │ ║   │
│  ║              ║  ║  │ [Accept] [Revert]  │ ║   │
│  ║              ║  ║  └────────────────────┘ ║   │
│  ╚══════════════╝  ╚══════════════════════════╝   │
└───────────────────────────────────────────────────┘
```

**Visual treatment:**
- Outer container: #111111, 1px border #1E1E1E, border-radius 12px, subtle drop shadow
- Panels inside: separated by 1px #1E1E1E vertical rule
- All text in demo: Geist Mono, 11px
- Chat bubbles: rounded rectangles, #161616
- Canvas resume text: #888888 (inactive bullets), #F0F0F0 (accepted bullets)
- Proposed edit card: thin left border 2px #00E5A0, #111111 bg slightly lighter
- Proposed edit text: **#00E5A0** — this is the only place mint appears on the page besides the CTA button

**Animation sequence** (plays once on page load, loops after 6s pause):
1. `0ms` — page loads, demo appears static
2. `800ms` — "AI: Editing your Stripe bullets..." text fades in char-by-char in chat panel
3. `1400ms` — `···` typing indicator pulses (3 dots, 400ms interval)
4. `2000ms` — edit card slides up from below the resume bullet (translateY: 20px → 0, opacity 0 → 1, 300ms ease-out)
5. `2300ms` — mint text begins typing into the edit card, 30ms per character
6. `3800ms` — cursor blink appears at end of streamed text (500ms blink)
7. `4200ms` — [Accept] and [Revert] buttons fade in
8. `5500ms` — pause
9. `6000ms` — [Accept] pressed (button dims to mint fill), edit card collapses (height: 0, 200ms), resume bullet text transitions to accepted state
10. `6500ms` — loop

**Reduced motion:** Skip the streaming animation. Show the final accepted state as a static image.

---

## Section 2 — The Problem

**Layout:** Full-width, #0A0A0A. Content centered, max-width 720px.

**No cards. No icons. Pure editorial typography.**

**Heading** — Instrument Serif, 40px, #F0F0F0, centered:
```
You've used AI to improve your resume.
It didn't sound like you.
```

**Three pain statements** — stacked, each separated by a 1px #1E1E1E rule, 32px padding each:

Each pain statement is two lines:
- Line 1: Geist, 16px, #F0F0F0 — the thing that happened
- Line 2: Geist, 16px, #666666 — why it's frustrating

```
The AI rewrote everything.
Your phrasing, your tone, your specific project details — gone.

You couldn't see what changed.
Accept all or start over. Those were your only options.

Next session, you re-pasted everything.
Full resume. Full context. Same tokens burned. Every time.
```

**Entrance animation:** Each statement fades in as it enters the viewport (IntersectionObserver, one trigger per rule block). Opacity 0 → 1, translateY 12px → 0, 400ms ease-out, 100ms stagger between statements. No animation on the heading — it's visible on load.

---

## Section 3 — How It Works

**Layout:** #0A0A0A. Three steps in a horizontal row on desktop, stacked on mobile.

This content IS sequential — numbered markers are appropriate here.

**Heading** — Geist, 13px, #444444, centered, letter-spacing 0.05em, margin-bottom 48px:
```
How DRFT works
```

**Three step blocks**, equal width, left-aligned content:

Each block:
- Step number: Geist Mono, 11px, #333333 — `01` `02` `03`
- Step title: Geist, 18px, #F0F0F0, font-weight 500
- Step description: Geist, 15px, #666666, line-height 1.6, max-width 280px

```
01                        02                        03
Upload your resume         Chat about the role       Accept what fits

We extract your content,   Paste the job description. Edits stream into the canvas.
calibrate your voice, and  Ask DRFT to strengthen    You see every change.
build your resume memory   your experience, shorten   You approve every change.
— once.                   a section, or match the    Export a clean PDF.
                          tone. It reads the JD first.
```

**Connecting line:** A 1px #1E1E1E horizontal rule runs through the center of the step numbers on desktop. On mobile: hidden.

**No animation on this section.** It's structural information. Motion here would distract.

---

## Section 4 — Three Differentiators

**Layout:** #111111 background (full bleed). Three feature rows, alternating text-left / text-right on desktop. Stacked on mobile.

Each row: 50% text / 50% visual. 80px padding between rows.

---

### Row 1 — Resume Memory

**Text (left):**

Label — Geist Mono, 11px, #444444:
```
Resume memory
```
Heading — Instrument Serif, 32px, #F0F0F0:
```
Your resume lives here.
Not in your clipboard.
```
Body — Geist, 15px, #666666:
```
On upload, DRFT builds a semantic memory of your entire
career — every role, every bullet, every project. Every
session after that, the AI has full context in under 50ms.
No re-pasting. No re-explaining. No wasted tokens.
```

**Visual (right):**
Simple diagram — dark surface card, 360×200px:
- Left side: upload icon → "First upload" label → `Embedded ✓` in mint
- Right side: clock icon → "Session 2" → context loads in `<50ms` in mint
- Arrow connecting them: thin 1px rule
- Font: Geist Mono, 11px throughout
- All on #111111 bg with 1px #1E1E1E border

---

### Row 2 — Voice Preservation

**Text (right):**

Label — Geist Mono, 11px, #444444:
```
Voice preservation
```
Heading — Instrument Serif, 32px, #F0F0F0:
```
Edited, not replaced.
```
Body — Geist, 15px, #666666:
```
DRFT reads your existing writing style before it touches
anything. It matches your verb patterns, sentence length,
and formality. The AI makes surgical patches — not rewrites.
What comes back still sounds like you.
```

**Visual (left):**
Two-column comparison card, 360×160px, #111111, 1px border #1E1E1E:

```
ChatGPT                    DRFT
─────────────              ─────────────────────────
Collaborated with          Led cross-functional data
stakeholders across        engineering team to ship
teams to deliver           real-time pipeline — same
impactful solutions.       voice, stronger framing.
```
- ChatGPT column: text in #666666
- DRFT column: text in #F0F0F0
- Divider: 1px #1E1E1E vertical
- "ChatGPT" / "DRFT" labels: Geist Mono, 10px, #444

---

### Row 3 — Version Vault

**Text (left):**

Label — Geist Mono, 11px, #444444:
```
Version vault
```
Heading — Instrument Serif, 32px, #F0F0F0:
```
One resume.
Every application tracked.
```
Body — Geist, 15px, #666666:
```
Stop maintaining a folder of DOCX files named
"resume_FINAL_v3_REAL.docx". DRFT saves a tailored
version for every role you apply to. Compare any
two, see exactly what changed, export either one.
```

**Visual (right):**
Version list card, 300×200px, #111111, 1px border #1E1E1E:
```
Stripe — Data Eng        Mar 14  Applied ✓
Google — ML Eng          Mar 9   Interview ◷
Anthropic — AI Eng       Mar 3   Draft ✏
─────────────────────────────────────────
Master resume            Feb 20  📌 Base
```
- Status indicators: ✓ mint, ◷ #666, ✏ #666
- Row font: Geist Mono, 11px
- Row hover: #161616 bg, 200ms

---

## Section 5 — Open Source

**Layout:** #0A0A0A, centered, max-width 640px. Text-only — no card, no box.

**Heading** — Instrument Serif, 32px, #F0F0F0, centered:
```
Open source at the core.
Hosted for convenience.
```

**Body** — Geist, 16px, #666666, centered, line-height 1.7:
```
The parsing engine, React-PDF templates, AI agent,
and voice calibration system are all MIT licensed.
Self-host it. Audit it. Contribute to it.

The hosted version adds auth, cloud sync, and managed
AI access — no API key needed.
```

**GitHub link** — Geist Mono, 13px, #F0F0F0, centered, with a star count badge:
```
★  github.com/drft-open   →
```
Hover: underline, mint color. The `→` here is earned (it's a link out), not decorative.

**Note:** Star count shows `Coming soon` pre-launch. Swap to live count on launch day.

---

## Section 6 — Waitlist CTA (Bottom)

**Layout:** Full bleed, #0A0A0A. Centered. 160px top/bottom padding.

**Heading** — Instrument Serif, 48px, #F0F0F0, centered:
```
Be first.
```

**Sub** — Geist, 17px, #666666, centered:
```
DRFT is in development. Join the waitlist for early access,
behind-the-scenes updates, and a free Pro month at launch.
```

**Form** — identical to hero form, centered, max-width 420px:
```
[  Your email address               ] [Join waitlist]
```

**Below form** — Geist, 13px, #444444, centered:
```
No spam. Unsubscribe any time.
```

**Counter** — Geist Mono, 12px, #444444, centered, margin-top 32px:
```
312 people on the waitlist
```
Live count if possible (Supabase realtime). Falls back to hardcoded number.

---

## Footer

**Height:** auto, min 80px. Border-top 1px #1E1E1E.

**Two columns, space-between:**

Left — Geist Mono, 13px, #F0F0F0:
```
DRFT
```
Below name — Geist, 12px, #444444:
```
AI edits. You decide.
```

Right — Geist, 13px, #666666, row of links:
```
Twitter/X    GitHub    drft.dev    Contact
```
Hover: #F0F0F0, 200ms

No legal copy, no cookie banner mention, no rights reserved. Not needed pre-launch.

---

## Animation Summary

| Element | Animation | When |
|---|---|---|
| Hero demo | Streaming sequence (described above) | Page load, loops |
| Pain statements | Fade + slight translateY, staggered | On scroll into view |
| Everything else | No animation | — |

**Two rules:**
1. Nothing animates on scroll except the pain statements. That section's impact depends on each statement landing separately.
2. All animation respects `prefers-reduced-motion`. Static equivalent for all states.

---

## Responsive Behavior

| Breakpoint | Changes |
|---|---|
| < 768px | Hero: stacked (headline + form top, demo below). Section 4 rows: stacked. Step row: stacked. |
| < 480px | Hero headline: 40px. Form: stacked (input full width, button below). Demo: simplified (chat panel hidden, canvas only). |

**Mobile priority:** The waitlist form must be fully functional and above the fold on mobile. If it's not, nothing else matters.

---

## Page Performance Targets

| Metric | Target |
|---|---|
| LCP | < 1.5s |
| CLS | 0 (all animation dimensions reserved in advance) |
| FID / INP | < 50ms |
| First paint | < 0.8s |
| Hero demo | CSS/JS animation only — no video, no GIF |

The hero demo is built with CSS + lightweight JS (no canvas API, no WebGL, no heavy animation library). Framer Motion or CSS keyframes — whichever is lighter in context.

---

## Tech for Implementation

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** CSS keyframes for the hero demo. Intersection Observer for pain section. No Framer Motion on a waitlist page — overkill.
- **Waitlist form:** Supabase table insert. Email stored with timestamp + referrer. Success state in local component state.
- **Fonts:** Instrument Serif (Google Fonts, `display=swap`). Geist + Geist Mono (Vercel, self-hosted, no layout shift).
- **Analytics:** Plausible (no cookies, no GDPR banner needed).

---

*DRFT — Landing Page Spec · May 2026*
