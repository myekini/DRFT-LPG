# DRFT brand kit — v2

**Idea.** AI edits. You decide. The symbol is a lowercase "d" mid-edit: its stem has stepped away and become an insertion cursor. The wordmark is the same "d" after approval — whole, settled, in ink.

## Files
- `wordmark/` — primary logo. SVG + transparent PNG (@2x), light / dark / mono-black / mono-white.
- `mark/` — symbol. Use only where a wordmark cannot fit (favicon, app icon, avatar).
- `lockup/horizontal/`, `lockup/stacked/` — secondary; symbol introduced next to the name.
- `favicon/` — `favicon.svg` (auto light/dark), `favicon.ico` (16+32), PNG 16/32 for light and dark chrome, `apple-touch-icon.png` (180), `icon-512.png`, `icon-512-light.png`.
- `social/` — `og-image.png` + `og-image-dark.png` (1200×630), `github-banner.png` (1280×640), `avatar-dark.png` / `avatar-light.png` (400), `producthunt-thumb.png` (240).
- `_gen.js` — geometry source; every asset is generated from it.

## Geometry (150-unit height)
Wordmark: monolinear, stroke 18, square terminals, lowercase, custom-drawn — never typeset.
Symbol: bowl stroke 24, cursor stroke 28, gap 24. Never close the gap.

## Clear space & minimum size
Clear space = 1× x-height (bowl height) on all sides, on every asset.
Minimums: wordmark 64 px / 16 mm · symbol 16 px / 5 mm · horizontal lockup 120 px.

## Color
| Token | HEX | Role |
|---|---|---|
| Paper | #F6F4EF | light background |
| White | #FFFFFF | cards, documents |
| Rule | #E1DED6 | borders, dividers |
| Stone | #9A978F | placeholders, deletions (strikethrough) |
| Graphite | #55534E | secondary text |
| Ink | #111111 | primary text, wordmark |
| Night | #0A0A0A | dark background |
| Night Surface | #161616 | dark cards |
| Night Text | #F0F0F0 | text on Night |
| Mint | #00E5A0 | accent on dark, small fills |
| Mint Deep | #0B8F66 | accent + text on light |
| Mint Tint | #E3F6EE | insertion highlight (light) |
| Mint Night | #123B2E | insertion highlight (dark) |

Mint has one job: a change that is proposed, active, or just confirmed. No mint backgrounds, glows, or gradients. No red — deletions are Stone with a strikethrough.

## Typography
- Instrument Serif 400 — display, 40–96 px. The few sentences that carry the message.
- Geist 400/500 — UI and body, 13–20 px.
- Geist Mono 400/500 — labels, metadata, diffs, 11–14 px.

## Don't
Mint on the bowl · closing the gap · glows or gradients · typing the name in a font · rotating or outlining the symbol.

## Motion
The cursor slides in to join the bowl and turns from mint to ink. One movement, ~1 s, ease-in-out. Use for app launch and loading only.
