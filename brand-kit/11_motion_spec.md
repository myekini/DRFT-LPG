# DRFT — Motion Design Specification
**Hero Product Video · Version 1.0 · May 2026**

> Premium. Editorial. No voiceover. The product does the talking.
> Reference aesthetic: Google Workspace feature reveals × Linear's product videos × Vercel's launch films.

---

## Brief

A single hero video that tells the full DRFT story in 80 seconds. Dark. Precise. The streaming edit animation is the centrepiece — everything else is context for that moment.

This video lives on: Twitter/X (primary), Product Hunt gallery, drft.io hero section, LinkedIn, YouTube. Optimised for autoplay without sound — every frame communicates without audio.

---

## Technical Specs

```
Resolution:     1920×1080 (16:9 master)
Cut variants:   9:16 vertical (1080×1920) for Reels/TikTok
                1:1 square (1080×1080) for LinkedIn/IG
Duration:       80 seconds (master) / 30s cut / 15s cut
Frame rate:     60fps (smooth UI motion)
Export:         H.264 MP4 for social · ProRes 4444 for archival
Colour space:   sRGB
Background:     #0A0A0A throughout
Sound:          Minimal ambient score (optional). All text carries narrative.
Captions:       Burned-in text cards — no subtitle track needed
```

---

## Narrative Arc

```
00–04s   HOOK          — A familiar document. Something's about to happen.
04–16s   PAIN          — The problem everyone recognises.
16–22s   REVEAL        — DRFT introduced. Mark animates in.
22–50s   THE MOMENT    — The canvas. The streaming edit. The control.
50–60s   MEMORY        — Session 2. Already there.
60–72s   VOICE         — Side by side. The difference.
72–80s   END CARD      — Mark. Wordmark. Tagline. URL.
```

---

## Scene-by-Scene Specification

---

### SCENE 1 — HOOK (0–4s)

**Background:** Pure #0A0A0A
**Action:** A resume document materialises from nothing — not a slide-in, not a fade, but a precise appear at 0.5s, scale 0.98→1.0 over 300ms ease-out. The document is clean, well-formatted, clearly someone's real work. Warm white paper texture. It floats slightly above centre, casting no shadow — it's in space.

**Typography overlay** (appears at 2s, bottom-left, Geist 16px, text-2):
```
Your resume.
```

Holds for 2 seconds. No other motion.

**Feeling:** Calm recognition. "I know this thing."

---

### SCENE 2 — PAIN (4–16s)

**Action sequence:**

4.0s — A generic "AI" interface snaps in from the right (slides left, 300ms ease-out). It's clearly "paste into ChatGPT" — a large text area, a send button. The document copy-pastes into it with a visual duplication effect (the document content lifts off, streams into the text area as flowing text).

6.5s — The AI "thinking" indicator pulses. Three dots. Standard. Familiar.

8.0s — The result appears. A new document materialises on the right. But something's wrong.

**Typography card (centre, Instrument Serif 40px, text-1):**
```
It rewrote everything.
```
Appears at 8.5s, holds 2s, fades.

10.5s — The new document and the original document slide into frame side by side. A subtle comparison. The new one is technically fine. But —

**Typography card:**
```
It doesn't sound like you.
```
Appears at 11s, Instrument Serif 36px, text-2.

13s — Both documents begin to fade. The AI interface slides out right. The original resume fades last — slower — like something worth holding onto.

15.5s — Screen is nearly clear. Just the faintest resume ghost. Dark.

**Feeling:** Recognition. Mild frustration. "Yes, that's exactly what happens."

---

### SCENE 3 — REVEAL (16–22s)

**Background:** Full #0A0A0A. Completely clear.

16.0s — The DRFT Edit Mark builds arm by arm from the centre outward. Not animated as a spin — each arm extends from the centre point, 80ms stagger between arms, ease-out. 4 arms total. White mark. Appears at roughly 80% opacity, then snaps to 100% at completion.

17.5s — The wordmark "drft" fades in immediately below the mark. Geist Mono, precise tracking. White.

18.5s — The mark transitions colour: white → mint (#00E5A0). 400ms ease. This is the first mint moment in the entire video.

19.5s — Typography card beneath the wordmark (Geist, 16px, text-2, fade in):
```
AI edits. You decide.
```

21.5s — Everything holds. 500ms pause. Then—

**Feeling:** Arrival. Something new. Precisely introduced.

---

### SCENE 4 — THE MOMENT (22–50s)

**This is the centrepiece. The entire video exists for this scene.**

22.0s — The DRFT canvas interface assembles. Not a screenshot reveal — it builds:
- The outer container appears first (24px radius card, shadow-elevated), 300ms scale 0.97→1.0
- The internal panel divider draws left to right (a 1px line, 200ms ease)
- The chat panel content fades in left side
- The resume content renders in the canvas right side, section by section, 80ms stagger per section

The canvas is large — fills ~80% of the frame. Detailed. Real.

**Chat panel animation sequence:**

25.0s — A message appears in the user's chat bubble (types in, 25ms per character):
```
Strengthen my data engineering
section for this Stripe role
```

27.0s — DRFT's chat response types in:
```
Reading your JD...
Found 3 gaps. Editing now.
```

28.5s — The typing indicator appears (···, 3 pulses).

**Canvas panel animation (the streaming moment):**

29.0s — The cursor focus shifts visually to the canvas panel (subtle brightness increase).

29.5s — One resume bullet in the Experience section begins to transform. The existing text fades to 30% opacity. Mint-colored text begins typing in below it, character by character, 30ms per character:
```
Architected and scaled real-time
feature pipeline serving 400M
daily events—
```

35.0s — Typing complete. Cursor blinks in mint (block cursor, 600ms blink).

35.5s — The edit proposal card slides up from beneath the bullet (translateY 20px→0, opacity 0→1, 300ms ease-out):
- Thin mint left border
- Proposed replacement text visible
- `💡 JD requires real-time pipeline exp.`
- `[Accept ✓]` and `[Revert ↩]` visible

**Typography overlay (outside canvas, top-left, Geist Mono 13px, text-3):**
```
You see every change.
```
Appears at 36s, fades at 38s.

38.0s — The [Accept ✓] button highlights. A clean click interaction: button dims to mint fill. The edit card collapses (height: 0, 250ms). The bullet in the resume transitions from mint to white — accepted. Permanent.

39.0s — A second edit proposal appears further down in the resume, same animation. Then a third.

**Typography overlay:**
```
You approve every change.
```
Appears at 40s.

42.0s — User types in chat:
```
Don't touch the Acme Corp role.
```

43.0s — DRFT responds:
```
Locked. Done.
```

A lock icon appears beside the Acme Corp section in the canvas (small, white, 12px).

**Typography overlay:**
```
Your voice. Your rules.
```
Appears at 44s.

46.0s — Remaining edits accepted. The canvas settles. All bullets in the edited section are white — clean, accepted.

47.5s — Export button in topbar pulses once (mint glow, 400ms). A PDF materialises below the canvas — same document, now rendered cleanly. The PDF floats into view like the resume in Scene 1.

**Typography overlay:**
```
Export. Clean PDF. Always.
```

50.0s — Canvas fades to dark.

**Feeling:** Desire. "I want this for every application."

---

### SCENE 5 — MEMORY (50–60s)

**Background:** Dark. Clean.

51.0s — A second session card appears. Calendar date advances. A new job description text floats in from the right.

52.5s — The DRFT canvas opens again. The resume is already there. The chat shows:
```
Session 2 · Context loaded
```
A mint indicator appears:
```
< 50ms
```

54.0s — **Typography card (centre, Instrument Serif 36px, text-1):**
```
No re-pasting.
```

56.0s — Second typography card fades in below (Geist 18px, text-2):
```
Your resume is remembered.
Every session.
```

59.0s — Fades.

**Feeling:** Relief. "It actually remembers."

---

### SCENE 6 — VOICE (60–72s)

**Background:** Dark. Two panels materialise side by side, each 45% width, separated by 1px hairline.

Panel headers:
- Left: Geist Mono 11px text-3 — "Generic AI output"
- Right: Geist Mono 11px text-3 — "DRFT output"

61.5s — Text types into both panels simultaneously:

**Left panel (text-2, slightly dimmer):**
```
Collaborated with stakeholders
across teams to deliver impactful
solutions leveraging data insights.
```

**Right panel (text-1, crisp):**
```
Led cross-functional data teams
to ship real-time pipeline — 
400M events daily.
```

65.0s — **Typography card (centre, Instrument Serif 40px, text-1):**
```
Same role.
Different voice.
```

68.0s — The left panel fades to text-3 (dimmer). The right panel holds at full brightness. The distinction is clear without a label.

71.0s — Both panels fade.

**Feeling:** The difference is visible. The value is clear.

---

### SCENE 7 — END CARD (72–80s)

72.0s — Clean #0A0A0A. The Edit Mark builds again, exactly as in Scene 3 — but this time larger (60px). Mint colour from the start, not transitioning.

74.0s — "drft" wordmark appears below. White.

75.5s — Tagline appears (Geist 16px, text-2, fade):
```
AI edits. You decide.
```

77.0s — URL appears (Geist Mono 14px, text-3, fade):
```
drft.io
```

79.5s — Everything holds. Full opacity. Clean.

80.0s — Fade to black.

---

## Typography Style (Consistent Across All Text Cards)

```
Display cards (major narrative beats):
  Font:         Instrument Serif, weight 400
  Size:         40px (can flex to 48px for single-word moments)
  Tracking:     -0.02em
  Color:        #F0F0F0
  Animation:    Opacity 0→1, 300ms ease-out. Hold. Opacity 1→0, 200ms ease-in.

Secondary cards:
  Font:         Geist, weight 400
  Size:         18px
  Color:        rgba(240,240,240,0.55)
  Animation:    Same as above, 200ms in/out

Mono labels (in-canvas overlays):
  Font:         Geist Mono, weight 400
  Size:         13px
  Color:        rgba(240,240,240,0.25)
  No animation — appears, holds, disappears
```

---

## Motion Principles

**Timing philosophy:** Confident, not rushed. Every element gets the time it needs to land. No fast cuts.

**Easing:** ease-out on arrivals (confident appearance). ease-in on exits (clean departure). Never bounce. Never spring.

**The streaming text:** 30ms per character for resume edits. 20ms per character for chat messages. These speeds are readable but feel like real-time — not slow, not blurred.

**Transitions between scenes:** 400ms cross-dissolve to black, then black holds 200ms before next scene. Breathing room between beats.

**The Edit Mark build:** Each arm extends over 120ms, 80ms stagger between arms. Total: ~600ms build time. This is the most important animation in the video — it should feel precise and deliberate, not decorative.

**Mint colour:** Appears at 18.5s (mark transition) and throughout the canvas scene. Never before Scene 3. The restraint makes every mint moment land harder.

---

## Sound Design (Optional but Recommended)

```
Overall track:    Minimal ambient electronic. No beats. Textural.
                  References: Nils Frahm · Ólafur Arnalds · Stars of the Lid
                  Tempo: slow, around 60bpm feel
                  Mix: quiet enough to never distract from typography

UI sound moments (optional, very subtle):
  Text streaming: soft typewriter texture, 15–20dB below track
  Edit accept:    single clean click, 600Hz, -25dB
  Mark build:     brief tone swell as mint appears, -20dB

If no sound budget: publish without audio. The video is designed to communicate
silently. Captions burned in. Autoplay on mute works perfectly.
```

---

## Cut Variants

### 30-Second Cut (Twitter/X highlight, Instagram Reels)
```
0–3s    Resume appears (from Scene 1)
3–7s    Pain card: "It rewrote everything." (compressed Scene 2)
7–10s   DRFT mark reveals (Scene 3)
10–22s  Streaming edit in canvas (core of Scene 4)
22–26s  "Your voice. Your rules." + accept moment
26–29s  End card: Mark + "drft" + tagline
29–30s  Fade
```

### 15-Second Cut (Instagram Stories, YouTube pre-roll)
```
0–2s    Resume appears
2–5s    Pain: "It doesn't sound like you."
5–10s   Canvas: streaming edit, accept
10–13s  "AI edits. You decide."
13–15s  Mark + drft.io
```

---

## Production Notes

**For motion designers:**
- The canvas UI elements are available as static specs in `06_landing_page_spec.md` and `04_uiux_spec.md`. Build them as After Effects / Rive / Lottie compositions.
- The resume document in scenes 1 and 2 should use a realistic but anonymised resume. The "clean" template from the React-PDF spec.
- No stock footage. No photography. Everything is designed surfaces.
- The chat interface in Scene 4 should read as DRFT's own chat — not ChatGPT's interface. Refer to the chat panel spec in `04_uiux_spec.md`.

**For AI video tools (Runway, Pika, Sora):**
- These tools cannot accurately replicate the precise UI animation. Use them only for the ambient background texture (Scene 1 document materialise, Scene 3 dark reveal) if needed.
- The canvas animation in Scenes 4–6 must be motion-designed or code-animated — not AI-generated.

**For code-animated version:**
- Scene 4's streaming canvas can be lifted directly from the hero animation in the landing page (see `08_build_prompt.md` HeroDemo spec). Record it at 60fps in a headless browser (Puppeteer). Layer with the text card animations in After Effects or Remotion.
- Remotion (`remotion.dev`) is the recommended tool for a code-first approach — the entire video can be built in React and rendered to MP4. Aligns with the existing tech stack.

---

## Remotion Implementation Note

If building with Remotion (recommended — keeps the entire pipeline in TypeScript):

```typescript
// Structure
/remotion/
  Root.tsx             — registers compositions
  Video.tsx            — master 80s composition
  scenes/
    Hook.tsx           — Scene 1: 0–4s
    Pain.tsx           — Scene 2: 4–16s
    Reveal.tsx         — Scene 3: 16–22s
    TheCanvas.tsx      — Scene 4: 22–50s  (most complex)
    Memory.tsx         — Scene 5: 50–60s
    Voice.tsx          — Scene 6: 60–72s
    EndCard.tsx        — Scene 7: 72–80s
  components/
    EditMark.tsx       — animated mark build
    StreamingText.tsx  — character-by-character text animation
    CanvasDemo.tsx     — the full UI mockup (lifted from HeroDemo.tsx)
    TypographyCard.tsx — Instrument Serif text card with in/out timing
```

Render command:
```bash
npx remotion render Video --codec=h264 --fps=60
```

---

*DRFT — Motion Design Specification v1.0 · May 2026*
*80s master · 30s cut · 15s cut · Remotion-first implementation recommended*
