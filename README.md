# Handoff: Yapper Care — Marketing Website

## Overview

Yapper Care is a senior-care companionship product: an AI voice companion that calls older adults daily, has real conversations (rooted in shared memory), and sends a gentle recap to family afterward. This handoff covers the **public marketing site** — landing page, insights index, and a sample insights post — designed to convert two audiences:

1. **Adult-children primary** — people whose aging parents live alone and who want them happier, less lonely, and safer without daily guilt-driven phone calls.
2. **Care facilities secondary** — assisted-living, memory-care, and home-health operators who want a programmatic resident-companionship layer.

The tone is warm, editorial, family-first — not techy, not robotic. Every visual decision is in service of: *“this is a friend who calls every day, not another app.”*

---

## About the Design Files

The files in this bundle are **design references created in HTML/CSS/JS**. They are prototypes showing intended look, behavior, and copy — **not production code to ship directly**.

The task is to **recreate these designs in the target codebase's existing environment** — typically a Next.js / React + Tailwind setup for a marketing site, or whatever framework the team has standardized on. Use the codebase's existing component library, layout system, and conventions. If no environment exists yet, **Next.js 14+ (App Router) with Tailwind CSS and Framer Motion** is recommended — it matches this design's section-led, type-heavy, light-animation feel.

The CSS in `colors_and_type.css` and the inline `<style>` blocks in each HTML file are the **source of truth for tokens, typography, and component visuals**. Lift values from there, do not eyeball from screenshots.

---

## Fidelity

**High-fidelity (hifi).** All colors, typography, spacing, radii, shadows, and copy are final. Recreate pixel-perfectly using the codebase's component library and patterns. Animations are decorative (gentle fades on scroll, subtle floats on hero objects, a working voice-demo waveform) — match them, but don't over-engineer.

---

## Files in this bundle

| File | Purpose |
|---|---|
| `Yapper Care v2.html` | The main marketing landing page. ~14 sections from hero → footer. **Primary file.** |
| `Insights.html` | Editorial insights/blog index page (companionship, dementia, family caregiving). |
| `Insights - sample post.html` | Sample long-form article layout. |
| `colors_and_type.css` | **Design tokens** — color scales, type scale, font families, spacing. The single source of truth for all values. |
| `assets/yapper-logo-current.png` | Reference of the official 8-petal bloom logo. |
| `assets/yapper-logo-official.png` | Logo + wordmark lockup. |
| `assets/senior-*.jpg` | Stock photography used in hero, features, testimonials. |
| `assets/marquis-booth-*.jpg`, `facilities-hero.jpg` | For-facilities section imagery. |
| `assets/og-image.png` | Open-graph share image. |

The HTML files are self-contained except for `colors_and_type.css` (linked) and the `lucide` icon library (loaded from CDN). Open `Yapper Care v2.html` in a browser to see the live design.

---

## Design Tokens

**Source: `colors_and_type.css`** — read this file first; all values below are mirrored from it.

### Colors

**Primary — Deep lavender (the brand color).** Used for CTAs, accents, gradients, italic emphasis text.

| Token | Hex |
|---|---|
| `--primary` / `--primary-500` | `#7B61AD` |
| `--primary-50` | `#F4F0FA` |
| `--primary-100` | `#E5DCF1` |
| `--primary-200` | `#CDBCE4` |
| `--primary-300` | `#B097D2` |
| `--primary-400` | `#947ABF` |
| `--primary-600` | `#644F8F` |
| `--primary-700` | `#4E3E71` |
| `--primary-800` | `#382C53` |
| `--primary-900` | `#241C36` |

**Tertiary — Mint (accent).** Used sparingly for the "Voices" section eyebrow, the recap mood pill, and the final-CTA gradient.

| Token | Hex |
|---|---|
| `--tertiary` / `--tertiary-200` | `#98FFD9` (default) — also tunable to `#7ED5B1` |
| `--tertiary-50` | `#EAFFF6` |
| `--tertiary-100` | `#C8F2DF` |
| `--tertiary-300` | `#7ED5B1` |
| `--tertiary-700` | `#0A6E50` |
| `--tertiary-900` | `#063A2C` |

**Neutrals.**

| Token | Hex |
|---|---|
| `--bg` | `#FFFFFF` |
| `--neutral-50` | `#F7F6F4` |
| `--neutral-100` | `#EDECE8` |
| `--neutral-200` | `#DAD8D2` |
| `--neutral-500` | `#807C73` |
| `--neutral-600` | `#5F5C55` |
| `--neutral-700` | `#3F3D38` |
| `--neutral-900` | `#0F0F13` (used **only** for body text and phone bezel — never as a section background) |
| `--border` | `#EDECE8` |

**Important: do not use solid black or `--neutral-900` as a backdrop for large visual blocks.** All large dark surfaces (final CTA, schedule visual, chat-bubble "yapper" replies, hero quote card, p-facility card) use **brand purple gradients** — typically `linear-gradient(135deg, var(--primary-700), var(--primary-800))`. The only place dark neutral appears is the phone bezel (`#1a1525`) inside the integrated demo.

### Typography

Loaded via Google Fonts CDN — see the `<link>` in each HTML file's `<head>`.

| Token | Stack | Use |
|---|---|---|
| `--font-sans` | `'Plus Jakarta Sans', system-ui, sans-serif` | Body, headings, UI |
| `--font-display` | `'Fraunces', Georgia, serif` | (Reserved — currently unused; Plus Jakarta Italic carries display italic) |
| `--font-label` | `'Plus Jakarta Sans', system-ui, sans-serif` | Eyebrows, micro-copy, button labels — uppercase, letter-spaced |

Display headings use `Plus Jakarta Sans` 800-weight at -0.035em letter-spacing. **Italic emphasis (`<em>`) inside display headings is the brand's signature type move** — set in primary-700 lavender, with `display: inline-block; padding-right: .12em; margin-right: -.06em;` to prevent the slanted glyph from clipping. Reuse this rule wherever you set italic text on a tinted/gradient background.

**Type scale** (pixel sizes used in the design):

- Display 1 (hero h1): `64px` desktop, `44px` mobile, line-height `1.05`, weight `800`
- Display 2 (section h2): `52px` desktop, `38px` mobile
- H3 (feature row, persona): `32px` / `22px`
- H4 (stat label): `18px`
- Body large (section intro `<p>`): `19px`, line-height `1.55`, color `--neutral-700`
- Body: `16–17px`, line-height `1.5–1.6`
- Eyebrow: `13px`, weight `700`, letter-spacing `.14em`, uppercase, color `--primary-700`
- Label / micro: `11–12px`, weight `600`, letter-spacing `.12em`, uppercase

### Spacing

The design uses an 8-pt scale (4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96, 128). Section vertical padding: `120px` desktop, `72px` mobile. Hero padding: `144px` top, `120px` bottom.

### Border radius

| Use | Value |
|---|---|
| Small chips, pills | `999px` |
| Cards, inputs | `16–20px` |
| Large cards, image frames | `24px` |
| Section-level rounded blocks (final CTA, demo wrap) | `36–40px` |
| Phone bezel | `44px` outer, `34px` screen |

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(15,15,19,.04), 0 4px 12px -4px rgba(15,15,19,.06);
--shadow-md: 0 8px 24px -8px rgba(15,15,19,.10);
--shadow-lg: 0 24px 50px -22px rgba(15,15,19,.18);
```

Plus brand-tinted purple shadows on hover for primary cards: `0 24px 50px -24px rgba(123,97,173,.28)`.

### Motion

- Default transition: `var(--dur)` = `260ms`, `var(--ease)` = `cubic-bezier(.2,.8,.2,1)`
- Scroll-in fade: 600ms ease-out, opacity 0 → 1, translateY 16px → 0
- Hover lift: `translateY(-3px)` to `-4px`, 260ms
- Floating decorative elements (hero call-card, hero quote): 6–8s ease-in-out `floaty` keyframes, ±6–8px

---

## Logo

The brand mark is an **8-petal radial bloom** (a stylized chrysanthemum/aster). It is **not** the lucide `flower-2` icon — it is hand-built SVG. Petals are `--primary` (#7B61AD), with a small `--primary-700` core.

**SVG (use as-is, scale via container):**

```html
<svg viewBox="0 0 48 48" fill="none">
  <g fill="var(--primary)">
    <ellipse cx="24" cy="9"  rx="4.2" ry="7.5"/>
    <ellipse cx="24" cy="39" rx="4.2" ry="7.5"/>
    <ellipse cx="9"  cy="24" rx="7.5" ry="4.2"/>
    <ellipse cx="39" cy="24" rx="7.5" ry="4.2"/>
    <ellipse cx="13.4" cy="13.4" rx="4.2" ry="7.5" transform="rotate(-45 13.4 13.4)"/>
    <ellipse cx="34.6" cy="34.6" rx="4.2" ry="7.5" transform="rotate(-45 34.6 34.6)"/>
    <ellipse cx="34.6" cy="13.4" rx="4.2" ry="7.5" transform="rotate(45 34.6 13.4)"/>
    <ellipse cx="13.4" cy="34.6" rx="4.2" ry="7.5" transform="rotate(45 13.4 34.6)"/>
  </g>
  <circle fill="var(--primary-700)" cx="24" cy="24" r="3.2"/>
</svg>
```

The wordmark sits beside it (Plus Jakarta Sans 800, -0.03em, 20px) with 10px gap. See `assets/yapper-logo-current.png` for reference.

---

## Sections of `Yapper Care v2.html` (top → bottom)

### 1. Nav

Sticky top bar. Logo (left), 6 nav links (Demo · How it works · Features · Voices · For facilities · Pricing), Sign in (right) + primary "Try Yapper free" CTA. Adds `.scrolled` class with subtle shadow + backdrop-blur after `scrollY > 20`.

### 2. Hero

- Two-column grid: copy left, photo + floating widgets right
- Eyebrow: "A friend who calls every day"
- H1 (display, 64px italic-emphasis on "someone" and "calls"): *"Your mom deserves someone who calls — even on the days you can't."*
- Body, two CTAs (primary "Try a free call" + outlined "See how it works"), three meta items
- Right column: portrait photo (rounded 24px), floating "Rose is calling Mom" call card overlapping bottom-left, floating purple quote card overlapping right with italic accent
- Below: trust row — "Trusted by families & care partners" + 5 placeholder facility marks (gradient circle initials)

### 3. Problem (stats)

3-column grid of stat cards. Big italic gradient number (`--primary-700` → `--primary-500`), supporting copy, source line. Stats: 43% report loneliness, 50% live alone, 6.7M live with dementia.

### 4. **Integrated Demo** ⭐ (key new section)

Single rounded card (36px radius, primary-50 → bg → tertiary-50 gradient with two soft radial blobs). Two-column inside:

**Left — Phone mock (320px, 9:19 aspect):**
- Realistic dark bezel `#1a1525` with notch
- Screen: status bar (9:41 + signal/wifi/battery), greeting "Tuesday, April 28", H1 "Mom's check-ins"
- Purple gradient "Next call" card: avatar "R", "Rose · with Margaret", "Wed · 9:00 AM", "in 21h", two pills ("Call now" solid white, "Add a note" translucent)
- Section label "Yesterday's call"
- White recap card: time + duration, mint mood pill, italic-emphasis quote, 3 tag chips (Garden / Frank / Hip · improving)
- Bottom tabs: Home (active, purple) / Schedule / Recaps / Settings, lucide icons + labels

**Right — Voice demo player:**
- Eyebrow "Try it now" + display H2 "*One app for you. One real voice for them.*" + intro p
- White card with: voice avatar (gradient), name + style, time `0:00 / 0:42`
- 56-bar waveform (heights pseudo-random, 6–48px); bars before playhead turn `--primary`, animate via CSS keyframe `dpBob` while playing
- 3 buttons: skip-back (40px outline), play (56px filled `--primary` with purple shadow), skip-forward
- "Voice" label + 4 voice pills (Rose/Charlie/Mae/Lena) — each with gradient swatch matching that persona's bloom
- Below the card: 3 sample quotes (alternating Rose/Margaret) — only the active one is full-opacity, others fade to .55

**Behavior:**
- Click play → icon swaps to pause, `setInterval(50ms)` advances `t` over 42s, waveform fills, active quote rotates through 3 stages
- Click voice pill → pauses, swaps avatar fill color + name + style, repopulates quotes with that voice's script (each voice has 3 sample lines — Rose+Margaret about hip/garden, Charlie+Frank about Sox, Mae+Eleanor about meds, Lena+Dorothy about Jeopardy)

**Implementation note:** when porting to React, use `useState` for `playing`, `t`, `activeVoice`; use `useEffect` with `setInterval` (NOT `requestAnimationFrame` if your dev environment runs the page in an iframe, as rAF can be throttled). Voice scripts live in a constant object — see `initDemoPlayer` in the source.

### 5. Features (split rows)

Section background: `--primary-50` lavender wash. Section eyebrow + display H2 "*Everything you need to stay close.*"

Two alternating split rows (text + visual):

**Row 1 — Memory.** Right visual is a **transcript** card: 4 message bubbles, "them" bubbles in white with border, "yapper" bubbles in `--primary-700` purple with white text.

**Row 2 — Schedule.** Left visual is a **schedule** card: purple gradient header, 7-day grid (5 active days at 9:00, Sat off, Sun 11:00), "Next call · Tomorrow 9:00 AM" footer.

Each row: eyebrow, H3 with italic gradient emphasis, intro p, 3 checklist items with `lucide check` icons.

### 6. How it works

3-step grid. Each step: large italic gradient number (72px "01/02/03"), lucide icon in purple-50 chip, H3, p. Subtle dotted connecting line between steps on desktop.

### 7. Voices

Section background: `--tertiary-50` mint wash. Eyebrow "Meet the voices" + display H2 "*Choose a voice they'll love.*"

4 persona cards (grid of 4 desktop, 2 mobile). Each card: 72px gradient bloom tile with custom SVG art (Rose=rose flower, Charlie=radio/coffee, Mae=stethoscope, Lena=star), H3 name, micro-label style descriptor, 1-line description, "Listen" pill at bottom. Hover: card lifts, "Listen" pill turns purple, waveform animates.

### 8. Promise (compare)

2-column "vs." card. Left = "Yet another robot" (negative list, neutral muted), right = "Yapper" (positive list, purple-50 background, primary-700 text). Each side: 4 bullet points.

### 9. Testimonials

Section background: `--primary-50`. 3-column grid. Each tslab: huge italic 72px purple-200 quotation mark, blockquote (italic emphasis on key phrase), avatar (gradient circle initials) + name + relationship line.

### 10. Pricing

3 plans (Personal $19/mo, Family $39/mo featured, Premium $79/mo). Featured plan: lifted, primary-700 border, "Most popular" badge top-left in primary. Each plan: name, price (display H2), period, 5 feature checks, full-width CTA button. Below cards: "For care facilities" purple gradient bar with link.

### 11. Facilities (B2B)

Eyebrow "For care partners" + H2 with mint italic emphasis. 2-column: left photo (rounded 24px, `marquis-booth-modern.jpg`), right copy + 4 benefit tiles (icon + label + sub) + outline CTA.

### 12. FAQ

5–6 collapsible items in a single column max-width 720px. Each: question (16px medium), chevron icon, expandable answer.

### 13. Final CTA

Full-width purple gradient block (radius 40px, padding 96px). Eyebrow, H2 with mint italic emphasis "*another day alone.*", two buttons (primary white + ghost), fine print "7-day free trial · No credit card · Cancel anytime".

### 14. Footer

4-column grid: logo + about copy, Product links, Care links, Legal links. Bottom row: copyright + social icons.

---

## Tweaks panel

The HTML includes a developer-only "Tweaks" panel (bottom-right, hidden behind a host postMessage protocol). It lets you swap primary color, accent color, and the hero photo live. **Do not port this to production** — it's a design-tool affordance. The token defaults it persists are the canonical values: primary `#7B61AD`, accent `#98FFD9`, hero photo `senior-patricia-bozan.jpg`.

---

## Interactions & Behavior

- **Scroll-in animation**: `.fade` elements get `IntersectionObserver` (threshold 0.12) → add `.in` class → CSS transitions opacity + translateY. Replicate with Framer Motion `whileInView` or CSS `view-timeline`.
- **Sticky nav scroll state**: toggle `.scrolled` class when `scrollY > 20`.
- **Hero floating widgets**: pure CSS `@keyframes floaty` / `floaty2`, infinite alternating Y translate.
- **Persona card hover**: card lifts -4px, "Listen" pill swaps to filled purple, waveform bars animate via `bounce` keyframe with staggered delays.
- **Demo player**: see Section 4 above. Plays for 42s, then resets; voice switch pauses + re-seeds.
- **Italic emphasis clipping fix**: every `<em>` on a tinted bg uses `display: inline-block; padding-right: .12em; margin-right: -.06em;` — preserve this in the React port.
- **No JS frameworks used in the prototype** — vanilla DOM + lucide CDN. Port to React/Vue/Svelte using your codebase's idioms.

---

## State Management (when porting)

Component-local state is sufficient. Suggested:

- `Hero` — none (CSS animations only)
- `IntegratedDemo` — `{ activeVoice: 'rose'|'charlie'|'mae'|'lena', playing: boolean, elapsed: number }`. Voice scripts as a const map.
- `FAQ` — `openId: string | null`
- `Pricing` — `billingPeriod: 'monthly'|'yearly'` (only if you add a yearly toggle; the design currently shows monthly only)
- `Tweaks panel` — **do not port**

No data fetching is required for the marketing site itself. The "Try a free call" CTA presumably routes to a sign-up flow that lives outside this design.

---

## Responsive behavior

Breakpoints in CSS:
- `min-width: 700px` — hero grid switches to 2-col
- `min-width: 900px` — features split rows go 2-col, personas 4-col
- `min-width: 960px` — nav links + sign-in show
- Below 700px — everything stacks single-column, hero photo fills width, demo phone centers above the player, type scales down per the table above

Test at: 375px (iPhone SE), 768px (iPad), 1280px (laptop), 1440px (desktop).

---

## Accessibility

- All interactive elements are `<button>` or `<a>` with proper labels (`aria-label` on icon-only buttons)
- Color contrast: primary `#7B61AD` on white = 4.7:1 (AA pass); primary-700 `#4E3E71` on white = 9.1:1 (AAA)
- Italic display emphasis colored primary-700 keeps AAA contrast
- Focus rings: ensure your component library applies a visible focus ring on all interactive elements (the prototype doesn't customize this — use your defaults)
- `prefers-reduced-motion`: not currently honored in the prototype — **add `@media (prefers-reduced-motion: reduce)` rules in the port** to disable `floaty`, `bounce`, `dpBob`, and the scroll-in fade.

---

## Assets

All photography in `assets/senior-*.jpg` is licensed stock (sourced from Pexels — credits: Patricia Bozan, Marius Mart, Mart Production, Moe Magners, etc.). Replace with brand-shoot photography when available; current selection prioritizes warm, natural-light, smiling-senior portraits in believable home settings. **Avoid generic “old hands holding phone” stock.**

Marquis booth images are placeholder for the facilities section — swap with real partner facility photography.

`og-image.png` is the social share image (1200×630).

---

## What to build first

1. **Tokens layer** — port `colors_and_type.css` to your codebase's token system (Tailwind `theme.extend.colors` / CSS variables / styled-system). Confirm hex values match exactly.
2. **Logo component** — the 8-petal SVG above, accepts a `size` prop, used in nav + footer.
3. **Display headings + italic-em rule** — global typography reset that handles `<em>` inside `<h1>/<h2>/<h3>` correctly (the inline-block + padding fix).
4. **Hero** — copy + photo + two floating overlays. Get the type and rhythm right; this is the brand hero.
5. **Integrated Demo** — the most stateful component. Build the phone mock as a static composition first; layer on the player state second.
6. Continue down the section list. Most other sections are straightforward content blocks.

---

## Questions for the team before starting

- Target framework? (Next.js + Tailwind assumed)
- Component library? (shadcn/ui, custom, etc.)
- Animation library? (Framer Motion recommended)
- CMS for the Insights blog, or static MDX?
- Any analytics / experimentation framework to wire CTAs into?
- Real photography available, or stay on the licensed stock for v1?
