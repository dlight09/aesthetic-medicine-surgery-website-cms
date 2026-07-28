---
name: Dr Sirine Soussi
description: A precise, calm, premium French medical website for plastic, aesthetic, reconstructive, and hand surgery.
colors:
  ink: "#141413"
  paper: "#FFFFF0"
  sand: "#dac5a9"
  copper: "#be774c"
  copper-deep: "#87482d"
  mist: "#E8CD97"
typography:
  display:
    fontFamily: "Andale Mono, AndaleMono, monospace"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  brand-wordmark:
    fontFamily: "Andale Mono, AndaleMono, monospace"
    fontWeight: 300
    letterSpacing: "-0.035em"
  doctrine-quote:
    fontFamily: "Literata, Georgia, serif"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Andale Mono, AndaleMono, monospace"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  button-pill: "9999px"
  button-rect: "12px"
  card: "24px"
  panel: "32px"
spacing:
  button-sm: "8px 16px"
  button-md: "10px 20px"
  button-lg: "12px 24px"
  card: "24px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button-pill}"
    padding: "{spacing.button-lg}"
  button-accent:
    backgroundColor: "{colors.copper-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button-pill}"
    padding: "{spacing.button-lg}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button-rect}"
    padding: "{spacing.button-md}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
---

# Design System: Dr Sirine Soussi

## 1. Overview

**Creative North Star: "The Surgical Atelier"**

This system should feel like a private consultation room inside a surgical atelier: precise enough to earn medical trust, warm enough to lower anxiety, and premium because the details are controlled rather than loud. The current implementation uses ink, paper, mist, sand, and copper as a restrained material palette, with tactile rounded controls, soft ambient shadows, and image-led sections that let the doctor's profile and practice context carry credibility.

The visual language rejects hype, exaggerated beauty claims, guaranteed outcomes, aggressive sales language, before/after sensationalism, and luxury-clinic excess. It also avoids sterile hospital coldness. Every surface should make medical judgment, patient safety, and natural results feel more important than conversion pressure.

**Key Characteristics:**
- Warm precision: copper is an accent, not the brand volume knob.
- Ink-led trust: deep text and high contrast carry most of the interface.
- Rounded tactility: buttons, cards, menus, and CMS panels feel approachable without becoming cute.
- Ambient depth: shadows are soft and broad, never glossy or glassy.
- Mobile-first contact: Call and WhatsApp actions remain visible, clear, and non-pushy.

## 2. Colors

The palette is warm precision: deep ink for authority, paper and mist for calm surfaces, sand for quiet tonal warmth, and copper for selective emphasis.

### Primary
- **Atelier Ink** (`ink`): The main text, dark headers, primary buttons, and premium contrast field. Use it for authority and legibility.
- **Surgical Copper** (`copper`): The warm accent color for large metrics, glows, focus rings, borders, and occasional section details. Its rarity makes it feel intentional.
- **Deep Surgical Copper** (`copper-deep`): The contrast-safe copper role for small text and copper-backed CTAs.

### Secondary
- **Quiet Sand** (`sand`): A muted supporting warmth for selection, hover surfaces, subtle gradients, and tonal transitions.

### Neutral
- **Consultation Paper** (`paper`): The primary page and component surface. It is warm, but must stay readable with ink-led copy.
- **Soft Mist** (`mist`): Secondary panels, CMS sidebars, rows, and calmer content groupings.

### Named Rules
**The Copper Restraint Rule.** Copper is used to guide attention, not decorate every section. Use deep copper for small text and action backgrounds; reserve warm copper for large type, glow, and non-text accents. If copper appears in every card, label, and icon, the system loses precision.

**The Ink First Rule.** Body copy uses ink-derived colors with enough contrast for WCAG AA. Never use pale gray text on paper or mist for elegance.

## 3. Typography

**Display Font:** Andale Mono with monospace fallback.
**Body Font:** Manrope with sans-serif fallback.
**Doctrine Quote Font:** Literata Italic with Georgia fallback.
**Brand Wordmark:** Andale Mono, set lighter in large identity moments.

**Character:** Andale Mono gives headings, interface labels, and wordmarks a precise clinical voice; Manrope keeps patient information calm and highly readable. Italic Literata is reserved for authored medical-position statements.

### Hierarchy
- **Display** (400, fluid, sentence case, `1.08-1.12` line-height): Use for public page and section titles. Balance line breaks; do not force uppercase.
- **Brand Wordmark** (300 in hero, 400 in utility contexts): Use the profile mark with `DR SIRINE SOUSSI` only through `BrandLockup.astro`.
- **Doctrine Quote** (500 italic, large, `1.08` line-height): Use for authored medical-position statements such as the Dr Soussi profile quote.
- **Title** (400-600, sentence case unless metadata): Use inside cards, menu panels, CMS summaries, and intervention lists.
- **Body** (300-400, `1rem`, `1.6-1.72` line-height): Use Manrope for patient education and consultation copy; cap long prose at `65ch` and use `text-wrap: pretty`.
- **Label** (600, small size, uppercase, `0.08em-0.2em` tracking): Use sparingly for proof chips, navigation metadata, and short category labels.

### Named Rules
**The Quote Scarcity Rule.** Literata italic is for authored medical-position statements only. Reusing it everywhere turns precision into costume.

**The Label Discipline Rule.** Uppercase tracked labels are allowed as a named house style, but not above every section by default. If the label does not add orientation or trust, remove it.

## 4. Elevation

Elevation is ambient, not glossy. The system uses broad, low-opacity shadows plus borders and tonal surfaces to separate layers. Hover lift is subtle and functional: it confirms affordance without making cards feel like floating app tiles.

### Shadow Vocabulary
- **Soft Ambient** (`box-shadow: 0 14px 38px rgba(17, 24, 39, 0.08)`): Default elevated cards, buttons, image containers, and active CMS surfaces.
- **Lift Ambient** (`box-shadow: 0 24px 60px rgba(17, 24, 39, 0.12)`): Menus, drawers, hover-lift states, and important floating panels.
- **CMS Panel Ambient** (`box-shadow: 0 12px 30px rgba(17, 24, 39, 0.05)`): Softer depth for administrative panels and grouped controls.

### Named Rules
**The No Gloss Rule.** Shadows must stay wide, soft, and low contrast. Hard, dark, shiny, or glassmorphic elevation is forbidden.

## 5. Components

### Buttons
- **Shape:** Pills for primary public CTAs (`9999px`), rounded rectangles for secondary/admin actions (`12px`).
- **Primary:** Ink background with paper text; use for confident actions such as calling, booking, or confirming.
- **Accent:** Deep copper background with paper text; use for the single most important CTA in a given region.
- **Secondary:** Paper or mist surfaces with ink text and a low-contrast ink border.
- **Hover / Focus:** Soft lift, slight color deepening, visible copper focus rings, and active translate-y feedback. Focus must remain visible on paper and dark ink surfaces.

### Chips
- **Style:** Rounded proof chips use paper-tinted surfaces, low-contrast borders, uppercase label typography, and restrained tracking.
- **State:** Chips communicate credentials or filters; they are not decorative icon badges.

### Cards / Containers
- **Corner Style:** Large rounded cards (`24px`) and larger image/panel radii (`32px`) create a tactile, private-practice feel.
- **Background:** Use paper for primary cards, mist for quieter grouped content, and ink for trust-building sections such as patient reviews. Final appointment sections use paper immediately before the ink footer.
- **Shadow Strategy:** Use Soft Ambient at rest and Lift Ambient for menus or hover states.
- **Border:** Thin ink-alpha borders define edges without side-stripe accents.
- **Internal Padding:** Public cards default around `24px`; CMS cards use `24px` with denser row patterns where needed.

### Inputs / Fields
- **Style:** Paper background, thin ink-alpha border, rounded corners (`12px-16px`), and compact Outfit text.
- **Focus:** Copper-tinted ring or glow with sufficient contrast; never rely on border color alone.
- **Error / Disabled:** Error states should be explicit in copy and color; disabled states must remain readable.

### Navigation
- **Style:** Fixed header, transparent over the homepage hero and ink-backed after scroll or on inner pages. Desktop navigation uses the compact mark-and-wordmark lockup; mobile uses the mark only to protect space for call and menu controls. Desktop navigation uses soft pills and an image-backed mega menu for interventions. Mobile navigation uses a native dialog with a paper panel, clear close action, and Call/WhatsApp actions.

### Brand Lockup
- **Implementation:** `BrandLockup.astro` is the canonical mark-and-wordmark component. Each instance must have a unique ID for its SVG clip and filter definitions.
- **Homepage Hero:** Center the wordmark itself on the page axis; position the mark independently as a close visual lead-in on larger screens. Keep a compact inline pair on small screens.
- **Footer:** Use a large white mark with the wordmark and optional specialty subtitle bottom-aligned to the mark. The subtitle may stay on one line on desktop and wrap on smaller screens.
- **Dark surfaces:** Use the white mark treatment. Do not rely on a nested external SVG image for the mark because browsers may not render it.

### Cabinet Contact
- **Address:** Always link the cabinet address to Google Maps. Include a map pin and a visible directional cue.
- **Homepage:** Use a concise paper appointment section with booking and route actions plus a map, directly before the ink footer.
- **Profile and Contact pages:** Add fuller practical information when needed, while retaining the same address, map destination, and action hierarchy.

### Footer
- **Surface:** Ink background with a paper divider and right-aligned copyright line.
- **Structure:** Brand identity, quick links, contact and appointment links, then social links.
- **Social links:** Instagram, Facebook, and YouTube require descriptive accessible labels. Replace temporary platform-homepage URLs with the practice profiles when available.

### Before / After and Medical Imagery
Use real clinical imagery only with consent, disclaimers, and contextual framing. Before/after presentation should be informative and medically careful, never sensational.

## 6. Do's and Don'ts

### Do:
- **Do** keep patient education copy high-contrast and readable on paper, mist, and ink surfaces.
- **Do** use copper selectively for CTAs, focus, proof, and rare emphasis.
- **Do** preserve soft, broad shadows and thin borders for layered surfaces.
- **Do** keep Call and WhatsApp actions easy to find on mobile without making the site feel pushy.
- **Do** make medical limits, risks, consent, and follow-up expectations as visible as benefits.
- **Do** separate adjacent large ink regions with a meaningful light surface or a stronger structural transition.

### Don't:
- **Don't** use hype, exaggerated beauty claims, guaranteed outcomes, aggressive sales language, before/after sensationalism, or luxury-clinic excess.
- **Don't** make the site feel like a cold hospital interface or a generic wellness spa.
- **Don't** use glassmorphism, hard glossy shadows, gradient text, colored side-stripe borders, or endless identical card grids.
- **Don't** repeat tiny uppercase tracked labels above every section unless the label provides real orientation.
- **Don't** let copper become decoration; if every module is accented, nothing is precise.
- **Don't** center a brand lockup as a single geometric block when its asymmetric mark makes the wordmark feel off-axis; center the wordmark optically instead.

## 7. Current Follow-Ups

- Replace temporary social platform URLs with the official practice profiles.
- Refactor global `!important` heading and paragraph resets into semantic typography classes before extending typography changes to more pages.
- Recheck long section summaries at tablet widths; do not force long French copy onto a single line.
