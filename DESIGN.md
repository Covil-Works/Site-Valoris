---
name: "VALORIS"
description: "Sistema visual institucional humano, estratégico e acolhedor para uma marca de proteção e planejamento."
colors:
  gold-primary: "#d4af37"
  gold-light: "#f0e68c"
  gold-dark: "#b8941e"
  black-primary: "#1a1a1a"
  black-light: "#2d2d2d"
  white-primary: "#ffffff"
  white-light: "#f5f5f5"
  white-dark: "#e8e8e8"
  ink-deep: "#070a0e"
  surface-deep: "#0e1518"
  surface-alt: "#0e1218"
  text-light: "#f5f7fb"
  muted-light: "#c9d0dc"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
  2xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.gold-primary}"
    textColor: "{colors.black-primary}"
    rounded: "{rounded.lg}"
    padding: "1.5rem 2rem"
    typography: "{typography.body}"
  button-secondary:
    backgroundColor: "{colors.black-primary}"
    textColor: "{colors.white-primary}"
    rounded: "{rounded.lg}"
    padding: "1.5rem 2rem"
    typography: "{typography.body}"
  service-card:
    backgroundColor: "{colors.black-primary}"
    textColor: "{colors.white-dark}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  essence-card:
    backgroundColor: "{colors.white-primary}"
    textColor: "{colors.black-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  nav-cta:
    backgroundColor: "{colors.gold-primary}"
    textColor: "{colors.black-primary}"
    rounded: "{rounded.lg}"
    padding: "1rem 1.5rem"
---

# Design System: VALORIS

## 1. Overview

**Creative North Star: "The Golden Counsel Room"**

The VALORIS visual system should feel like entering a private advisory room: polished, calm, human, and prepared for decisions that matter. The brand is not a sales booth. It is a place where business owners and decision-makers feel oriented, protected, and valued before they are asked to act.

The surface language is restrained black, clear white, and a living gold used in small doses. Gold is never a flat burnt-yellow fill applied everywhere; it appears as a measured signal of value through gradients, glints, soft glow, thin rules, hover sheens, and logo emphasis. Black gives stability, white gives clarity, and gold gives warmth and importance.

The system rejects aggressive funnel design, generic insurance/corretora templates, cold bank aesthetics, and mechanical "mission/vision/values" presentation. It must stay modern and elegant, but the emotional read is trust and acolhimento.

**Key Characteristics:**
- Human before commercial: the design earns trust before asking for contact.
- Restrained premium: gold appears as a rare signal, not decoration spread across the page.
- Strategic calm: generous spacing, clear hierarchy, and confident dark sections carry decisions with weight.
- Warm clarity: white sections and readable body copy keep the page approachable.
- Motion with care: reveal and hover effects should feel attentive, never flashy.

## 2. Colors

The palette is black, white, and living gold: a restrained premium system where the gold moves through light, gradients, and glow instead of sitting as a static yellow block.

### Primary
- **Living Valoris Gold**: the primary brand accent. Use it for logo emphasis, CTA fills, section rules, focus outlines, important headings on dark surfaces, and small moments of warmth.
- **Soft Gold Highlight**: the luminous top note for hover states, metallic gradients, fine separators, and subtle reflective edges.
- **Deep Gold Base**: the grounded bottom note for gradient depth, borders, and states that need more weight.

### Neutral
- **Advisor Black**: the main dark surface for hero, service cards, CTA blocks, navbar, and footer. It anchors the brand in security and seriousness.
- **Charcoal Black**: secondary dark surface for gradients and section depth. It should support black, not replace it.
- **Clear White**: the main clean surface for readable institutional content.
- **Soft White**: section background for calmer content like "Quem Somos" where the brand needs to feel more human.
- **Quiet Silver Text**: the light text color used on dark surfaces when pure white would feel too sharp.
- **Deep Night Ink**: the older deep-background token used by secondary app/policy surfaces and any future immersive dark sections.

### Named Rules
**The Living Gold Rule.** Gold must usually be rendered as a relationship between `#d4af37`, `#f0e68c`, and `#b8941e`: gradients, glows, thin borders, or hover sheens. A single flat gold fill is allowed for primary CTAs, but surrounding states must make it feel dimensional.

**The Small-Dose Rule.** Gold should stay under roughly 10% of any viewport. Its rarity is what makes it feel valuable.

**The Black-White-Gold Rule.** Keep the identity anchored in black, white, and gold. Secondary hues may appear only in utility or policy surfaces, and never as the main institutional brand voice.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia and Times New Roman fallback)  
**Body Font:** Poppins (with sans-serif fallback)  
**Label/Mono Font:** No mono font. Monospace is not part of this brand.

**Character:** Poppins carries clarity, structure, and contemporary confidence. Cormorant Garamond is reserved for the wordmark, quotes, and selective brand moments where the brand should feel more ceremonial and human; it must not turn the site into an editorial magazine layout.

### Hierarchy
- **Display** (700, 3.5rem desktop / 2rem mobile, 1.15 line-height): hero headlines and major brand statements. Use balanced line breaks and avoid oversized shouting.
- **Headline** (700, 2.5rem desktop / 1.75rem mobile, 1.25 line-height): section titles and strong narrative moments.
- **Title** (600, 1.5rem desktop, 1.3 line-height): service cards, value cards, footer headings, and concise component titles.
- **Body** (400, 1rem, 1.8 line-height): explanatory copy. Keep text comfortable and human; cap long paragraphs around 65-75ch.
- **Label** (700, 0.875rem or smaller, uppercase, 0.14em letter-spacing): use sparingly for navigation and occasional section orientation. Repeating labels above every section is prohibited unless the page deliberately treats them as a consistent brand navigation system.

### Named Rules
**The Human Clarity Rule.** Body copy must read like a consultant speaking calmly, not like a bank brochure or a hard-sell landing page.

**The Serif Restraint Rule.** Cormorant Garamond is an accent voice. Use it for VALORIS, quotes, and selected emotional emphasis; do not let it dominate every heading.

## 4. Elevation

VALORIS uses a hybrid of tonal layering, soft shadows, and gold glow. Dark sections create depth through gradients and radial light; cards lift on hover with controlled shadow and a small gold aura. White sections use lighter shadows only when the content needs a framed, careful feeling.

### Shadow Vocabulary
- **Low Frame** (`0 2px 8px rgba(0, 0, 0, 0.15)`): subtle white-surface cards and quiet contained elements.
- **Medium Lift** (`0 4px 16px rgba(0, 0, 0, 0.2)`): navbar and primary buttons at rest.
- **Strong Lift** (`0 8px 32px rgba(0, 0, 0, 0.25)`): hover states and stronger calls to action.
- **Deep Card Lift** (`0 16px 48px rgba(0, 0, 0, 0.3)`): service cards only when interaction warrants it.
- **Gold Aura** (`0 0 24px rgba(212, 175, 55, 0.14)`): small premium glow for hover and focus moments. Use rarely.

### Named Rules
**The State-First Shadow Rule.** Surfaces are calm at rest. Strong shadows and gold aura appear primarily as a response to hover, focus, or active emphasis.

**The No Ghost-Card Rule.** Do not pair decorative 1px borders with wide soft shadows everywhere. If a card has a gold border, its shadow must be restrained or state-based.

## 5. Components

### Buttons
- **Shape:** gently rounded rectangles (`16px`). Full pill is reserved for chips and compact tags.
- **Primary:** living gold gradient from `#d4af37` to `#b8941e`, black text, bold label, generous padding. It is the direct path to WhatsApp or the main conversion.
- **Hover / Focus:** hover may brighten toward `#f0e68c`, lift by `-2px`, and add a small gold aura. Focus must use a visible `2px` gold outline with `3px` offset.
- **Secondary / Ghost:** transparent or near-white overlay on dark surfaces, white text, thin gold border. It supports exploration, not conversion pressure.

### Chips
- **Style:** dark translucent or white-translucent capsule, light text, subtle gold border. Use for trust words such as "Estratégia", "Segurança", "Humanização", "Confiança", and "Visão de futuro".
- **State:** hover may add a soft gold tint and slight upward movement. Do not turn every chip into a CTA.

### Cards / Containers
- **Corner Style:** controlled premium radius (`16px` for cards, `8px` for icon containers).
- **Background:** service cards use black gradients with gold edges; essence cards use white with a faint gold wash at the top; human/institutional content can use white cards over soft white.
- **Shadow Strategy:** calm at rest, lifted on hover. Gold glow only for important dark cards.
- **Border:** gold borders should be low-opacity (`rgba(212, 175, 55, 0.12)` to `0.35`) unless focused or hovered.
- **Internal Padding:** spacious (`3rem` desktop, reduced on mobile). The tone is consultive, not dense.

### Inputs / Fields
- **Style:** no full input system exists yet. Future fields should use white or very dark surfaces, `16px` radius, clear labels, and gold focus outlines.
- **Focus:** gold border or outline, never a vague gray glow.
- **Error / Disabled:** error states need clear copy and accessible contrast; do not rely only on color.

### Navigation
- **Style:** sticky dark glass navbar with blurred black surface, gold wordmark, white uppercase links, and one gold CTA. Mobile navigation should open as a dark panel with clear spacing and a visible gold active/bottom accent.
- **Behavior:** hover shifts text to gold. Do not animate the nav so aggressively that it feels like a sales page.

### Signature Component: Human Service Card
The service card is black, elegant, and human. It uses a small icon, gold title, soft description, optional subtle numbering, and a reflective gold sheen on hover. The description must explain the human or strategic value of the service, not merely list the category.

### Signature Component: Brand Quote
The brand quote uses Cormorant Garamond, dark translucent framing, a soft gold quotation mark, and spacious line-height. It is the emotional anchor for the brand's people-first promise.

## 6. Do's and Don'ts

### Do:
- **Do** keep the palette anchored in black, white, and living gold.
- **Do** use gold in small doses through gradients, glows, fine lines, focus rings, and reflective hover sheens.
- **Do** make the first screen impactante e acolhedora: logo clear, essence-led headline, and easy WhatsApp action.
- **Do** keep "Quem Somos" more human, with copy that feels relational and true.
- **Do** make service cards modern and elegant, with descriptions that connect each service to protection, future, people, or strategic decision-making.
- **Do** preserve strong contrast and visible focus states as a WCAG AA baseline.
- **Do** honor the PRODUCT.md line: "Relação antes da conversão."

### Don't:
- **Don't** make the site look like "um site com cara apenas de vendas", a hard funnel, or a generic corretora pushing products.
- **Don't** use flat burnt-yellow as the whole gold system. Gold must feel alive, dimensional, and rare.
- **Don't** overuse gold backgrounds, gold text, or gold borders until the page feels ostentatious.
- **Don't** use gradient text. If gold needs dimensionality, apply it to fills, rules, borders, glows, and motion, not clipped text.
- **Don't** turn missão, visão e valores into a mechanical corporate block. Use "Orientar. Proteger. Valorizar." as human essence.
- **Don't** drift into cold bank aesthetics, generic insurance templates, or aggressive urgency copy.
- **Don't** repeat tiny uppercase section eyebrows above every section unless they are redesigned as a deliberate, restrained navigation language.
