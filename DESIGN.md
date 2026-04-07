# Design Brief

## Overview
Research paper marketplace landing page. Students gain recognition and payment for original research; publishers discover & purchase rights to transform into any format via AI. Elegant, minimalistic, stylishly academic aesthetic.

## Visual Direction
**Tone**: Refined intellectual elegance. Minimal decoration, typography-driven, text and color composition only. No imagery.
**Differentiation**: Brown-gold-beige-white-black palette applied with restraint and intention. Negative space as structural element. Light Jakarta Sans typography (200–300 weight) emphasizes refinement.

## Color Palette

| Token | OKLCH | Usage |
|-------|--------|-------|
| Primary (Brown) | 0.42 0.085 56.72 | Core brand, navigation, CTAs |
| Secondary (Gold) | 0.68 0.093 56.72 | Accent highlight, decorative text |
| Accent (Warm) | 0.65 0.095 56.72 | Interactive states, emphasis |
| Muted | 0.92 0.006 56.72 | Subtle backgrounds, dividers |
| Foreground | 0.18 0 0 | Primary text, legible dark tone |
| Background | 0.985 0.004 56.72 | Off-white, warm base |
| Border | 0.88 0.003 56.72 | Subtle dividers |

**Dark Mode**: Inverted lightness. Brown (0.72), gold (0.68), warm accent (0.68) on dark backgrounds (0.14–0.24 L).

## Typography
- **Family**: Plus Jakarta Sans (Google Fonts)
- **Display**: 200–300 weight, 48–64px, hero emphasis (especially "Research")
- **Body**: 400–500 weight, 16–18px, comfortable reading
- **Mono**: System monospace for code/technical content

## Structural Zones

| Zone | Surface | Treatment |
|------|---------|-----------|
| Header | Background | Solid off-white, minimal border-bottom (muted color) |
| Hero | Primary/Accent | Warm brown-gold gradient subtle background or solid primary with text emphasis |
| Content | Background | Alternating sections: background and card (muted/30) for rhythm |
| Form | Card | Elevated surface with border, gentle shadow for depth |
| Footer | Muted/30 | Light grey-brown, border-top (muted), compact text |

## Elevation & Depth
- **0px**: Flat text, backgrounds
- **1px**: Subtle dividers (border token)
- **shadow-sm**: Form inputs, gentle lift
- **shadow-md**: Cards, popover elements (form sections)

## Spacing & Rhythm
- **Base unit**: 8px
- **Hero section**: 80–120px vertical padding for breathing room
- **Content sections**: 60px vertical spacing, 32px horizontal padding
- **Form**: 24px internal padding, 16px between fields
- **Typography rhythm**: 1.5–1.6 line-height for body text

## Component Patterns
- **Buttons**: Solid primary/secondary, no outline. Hover: slight opacity shift (–0.1 L). No rounded corners exaggeration (radius 0.625rem).
- **Form inputs**: Light border, light shadow on focus. Label weight 300, input weight 400.
- **Cards**: Minimal shadow, muted background, sharp corners or gentle radius. No glossy finish.
- **Text accents**: Secondary/accent color applied sparingly to key words ("Research", value prop keywords).

## Motion & Interaction
- **Default transition**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Entrance**: Subtle fade-in on page load (hero, sections)
- **Hover**: Foreground-to-primary color shift on interactive text, opacity on buttons
- **Focus states**: Ring token color, 2px outline

## Constraints
- **No imagery**: Pure composition via typography, color, and whitespace
- **Font weight discipline**: Display 200–300, body 400–500, avoid weights in between
- **Color application**: Primary for CTAs and navigation. Accent/secondary for highlights only. Muted for secondary surfaces.
- **Radius uniformity**: 0.625rem (lg), 0.375rem (md), 0.125rem (sm) — no arbitrary border-radius

## Signature Detail
Light typography weight (200–300) in hero "Research" creates elegant thinness without sacrificing legibility. Brown-gold palette grounds the design in academic tradition while remaining contemporary. Absence of imagery forces intentional composition discipline — every whitespace choice matters.

## Dark Mode Strategy
Inverted: warm brown (0.72 L) replaces dark backgrounds, gold (0.68 L) remains accent, text lightens to 0.95. All contrast ratios maintained at AA+.
