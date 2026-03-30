# Design System Specification

## 1. Overview & Creative North Star: "The Editorial Authority"

The Creative North Star for this design system is **"The Editorial Authority."** In the boutique legal sector, trust is not built through flashy interactions, but through clarity, poise, and a sense of permanence. This system moves away from "app-like" interfaces toward a high-end digital broadsheet—an experience that feels curated, intentional, and intellectually rigorous.

To break the "template" look, we employ:
- **Intentional Asymmetry:** Utilizing staggered column layouts and generous, uneven whitespace (e.g., combining `spacing.20` and `spacing.24`) to guide the eye.
- **Tonal Depth:** Replacing harsh structural lines with soft shifts in surface values.
- **Cinematic Photography:** Using muted or black-and-white imagery as a fundamental UI building block, not just decoration.

## 2. Colors

The palette is rooted in architectural neutrals—deep charcoals and crisp greys—accented by a singular, refined metallic tone.

### Core Tones
- **Primary (`#5d5c5b`):** Use for secondary branding elements and quiet UI actions.
- **Secondary (`#745b22`):** Our "Brass" accent. Reserved for high-importance signifiers, active states, and refined interactive details.
- **Neutral Surface Hierarchy:** 
  - `surface`: The baseline for the canvas.
  - `surface-container-low`: For subtle sectioning.
  - `surface-container-highest`: For elevated "floating" modules.

### The "No-Line" Rule
Designers are prohibited from using 1px solid borders to separate sections. Boundaries must be defined through background color shifts. For example, a `surface-container-low` section sitting against a `surface` background creates a sophisticated, "quiet" transition that maintains the editorial feel.

### The "Glass & Gradient" Rule
To add a layer of modern luxury, floating elements (like navigation bars or modal headers) should utilize Glassmorphism. Use the `surface` color with 80% opacity and a `backdrop-filter: blur(20px)`. Main CTAs should use a subtle linear gradient from `primary` to `primary_container` to provide a "sheen" reminiscent of fine stationery.

## 3. Typography

The typographic system relies on the interplay between the historic authority of Serif and the surgical precision of Sans-Serif.

- **Display & Headlines (Newsreader Serif):** These are the voice of the firm. They convey tradition and legal gravitas. Large scale (`display-lg` at 3.5rem) should be used with tight letter-spacing and significant leading to feel like a premium publication.
- **Body & Labels (Manrope Sans-Serif):** Manrope provides a contemporary efficiency. Use `body-lg` (1rem) for high-readability narratives and `label-md` (0.75rem) for metadata and micro-copy.

Hierarchy conveys identity: The "What" is always in Newsreader; the "How" and "Why" follow in Manrope.

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional drop shadows or lines.

- **The Layering Principle:** Depth is achieved by stacking containers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft "lift." This mimics the physical layering of fine paper.
- **Ambient Shadows:** If a floating effect is required (e.g., a dropdown), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(26, 28, 28, 0.06)`. This mimics natural light rather than digital "glow."
- **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use the `outline_variant` at 20% opacity. 100% opaque, high-contrast borders are strictly forbidden.

## 5. Components

### Buttons
- **Primary:** High-contrast `on_secondary` text on a `secondary` (Brass) background. Use `rounded.sm` (0.125rem) for a sharp, tailored look.
- **Secondary:** `secondary` text on a `surface_container_highest` background. Subtle and integrated.
- **Tertiary:** Text-only in `primary`. Use for low-priority links, paired with a `secondary` 1px underline on hover.

### Cards & Lists
Forbid the use of horizontal dividers. Use `spacing.8` (2.75rem) to separate list items. Cards should never have a "stroke"; they are defined by a shift from `surface` to `surface_container_low`.

### Input Fields
Inputs should feel like a legal document. Use a "Ghost Border" at the bottom only, using `outline_variant`. The background should be `surface_container_lowest`. Error states use the `error` token (`#ba1a1a`) but must remain sophisticated—avoiding heavy red boxes in favor of a 2px left-accent bar.

### Signature Component: The "Case Header"
A full-width `surface_container_low` section using `display-md` typography, paired with a black-and-white image that utilizes a `secondary_fixed_dim` (Gold) overlay at 5% opacity to "warm" the photo.

## 6. Do's and Don'ts

### Do:
- **Use whitespace as a structural element.** If a layout feels crowded, increase spacing to the next tier in the scale (e.g., from `16` to `20`).
- **Align to a baseline.** Ensure typography sits perfectly on the grid to maintain "The Editorial Authority."
- **Keep interactions "Quiet."** Hover states should be subtle color shifts, not jarring animations.

### Don't:
- **Don't use 100% black.** Use `on_background` (`#1a1c1c`) for text to ensure it feels like ink on paper rather than pixels on a screen.
- **Don't use standard "Rounded" buttons.** Stick to `rounded.sm` or `none` to maintain the architectural feel of the brand.
- **Don't use saturated colors.** Apart from the `secondary` (Brass) accent, all colors should remain muted and desaturated.