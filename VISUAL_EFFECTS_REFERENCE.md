# Visual Effects Reference - Glassmorphism Implementation

## Color Palette

### Black Tones
```
Primary Black:   #0a0a0a  ██████████
Soft Black:      #141414  ██████████
Card Black:      #1a1a1a  ██████████
Gray 900:        #1f1f1f  ██████████
Gray 800:        #2a2a2a  ██████████
Gray 700:        #3a3a3a  ██████████
```

### White Tones
```
Pure White:      #ffffff  ██████████
Off White:       #f5f5f5  ██████████
Gray 300:        #bbb     ██████████
Gray 400:        #999     ██████████
```

### Red Accents
```
Primary Red:     #c41e2a  ██████████
Hover Red:       #d42a36  ██████████
Dark Red:        #9a1620  ██████████
```

### Glass Overlays (Translucent)
```
Glass BG:        rgba(255, 255, 255, 0.03)
Glass BG Hover:  rgba(255, 255, 255, 0.05)
Glass Border:    rgba(255, 255, 255, 0.1)
Glass Border+:   rgba(255, 255, 255, 0.15)
Red Glass:       rgba(196, 30, 42, 0.08)
```

## Section-by-Section Effects

### 1. Hero Section
```
┌──────────────────────────────────────────────┐
│  ┌────────────────────────────────────────┐  │
│  │ [YORKVILLE, IL & SURROUNDING AREAS]   │  │ ← Glass badge (red tint)
│  │                                        │  │
│  │    Professional Detailing.             │  │
│  │    At Your Door.                       │  │ ← White text on glass
│  │                                        │  │
│  │    We bring the detail shop to you... │  │
│  │                                        │  │
│  │  [Get a Free Quote] [View Pricing]    │  │
│  │                                        │  │
│  │  ⚡ Military  📍 100% Mobile  ⭐ Guaranteed │
│  └────────────────────────────────────────┘  │
│  ▼                                            │ ← Floating chevron
└──────────────────────────────────────────────┘

Effect Layers:
1. Deep black background with red gradient glow
2. Frosted glass container (16px blur)
3. Diagonal shine gradient (top 40%)
4. Translucent white border (1px)
5. Deep shadow (8px 32px)
```

### 2. Service Cards (Stacking Glass)
```
┌─────────────────┐  ┌─────────────────┐
│  🚗             │  │  🛋️             │
│                 │  │                 │
│  EXTERIOR       │  │  INTERIOR       │
│  DETAIL         │  │  DETAIL         │
│                 │  │                 │
│  • Hand wash    │  │  • Full vacuum  │
│  • Wheel clean  │  │  • Dashboard    │
│  • Windows      │  │  • Seat clean   │
│  • Tire dress   │  │  • Door panels  │
└─────────────────┘  └─────────────────┘

Effect Layers (Per Card):
1. Frosted glass base (20px blur)
2. Dot pattern texture (50px/80px grid)
3. Reflection gradient (top 50%, hidden)
4. Glass border (1px white translucent)
5. Deep shadow with elevation

Hover State:
- Reflection opacity: 0 → 1
- Transform: translateY(-8px) scale(1.02)
- Border: brightens
- Shadow: deepens + glow

Animation:
- Entrance: stackReveal (60px up, scale 0.9 → 1)
- Float: 3s ease-in-out infinite (subtle)
- Stagger: 80ms per card
```

### 3. Pricing Cards

#### Standard Card ($50 - $100)
```
┌─────────────────────┐
│  STARTER            │ ← Tier label
│                     │
│  Light Interior     │ ← Service name
│                     │
│  $50                │ ← Large price
│                     │
│  ✓ Basic cleaning   │
│  ✓ Quick vacuum     │
│  ✓ Wipe-down        │
│                     │
│  [  Book This  ]    │
└─────────────────────┘

Effects:
- Frosted glass (20px blur)
- Dot texture (40px/60px)
- Conic gradient shine (rotates on hover)
- Floating animation (4px up/down)
```

#### Featured Card - Full Detail ($150) - MOST POPULAR
```
╔═══════════════════════╗
║ 🔥 Most Popular       ║ ← Floating red badge
╠═══════════════════════╣
║  COMPLETE             ║
║                       ║
║  Full Detail          ║
║                       ║
║  $150                 ║ ← Red price
║                       ║
║  ✓ Complete interior  ║
║  ✓ Complete exterior  ║
║  ✓ Vacuum & wipe      ║
║  ✓ Hand wash & dry    ║
║  ✓ Windows & tires    ║
║                       ║
║  [   Book This   ]    ║ ← Primary button
╚═══════════════════════╝

Effects:
- GRADIENT BORDER: Red → transparent → Red (2px)
- Dual-layer background (glass + gradient border-box)
- Red gradient overlay (top 0% → transparent 60%)
- Enhanced blur (24px)
- Deeper shadow + red glow (40px)

Hover:
- Lift: translateY(-12px) scale(1.05)
- Glow: 0 0 40px red
- Border pulse animation
```

#### Premium Card ($225) - BEST VALUE
```
╔═══════════════════════╗
║ 💎 Best Value         ║ ← Floating badge
╠═══════════════════════╣
║  ELITE                ║
║                       ║
║  Premium              ║
║                       ║
║  $225                 ║ ← Red price
║                       ║
║  ✓ Everything above   ║
║  ✓ Headlight restore  ║
║  ✓ Engine bay clean   ║
║  ✓ Wax protection     ║
║  ✓ Premium finish     ║
║                       ║
║  [   Book This   ]    ║
╚═══════════════════════╝

Effects:
- ANIMATED GRADIENT BORDER: Red/white mix
- Radial glow from top (red, 8% opacity)
- Enhanced blur (24px)
- Deepest shadow + red glow (50px)

Hover:
- Lift: translateY(-12px) scale(1.05)
- Glow: 0 0 50px red
- Brightness pulse
```

### 4. Discount Cards
```
┌────────────────────────────────────────┐
│  🏅    25% OFF                         │
│       Military & Veterans              │
│       Thank you for your service.      │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  🛡️    25% OFF                         │
│       First Responders                 │
│       You protect us -- we care...     │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  ❤️    10% OFF                         │
│       Elderly                          │
│       Because respect goes a long way. │
└────────────────────────────────────────┘

Effects:
- Frosted glass (20px blur)
- Dot texture (60px grid)
- Radial reflection (hidden, moves on hover)
- Glass border

Hover:
- Transform: translateX(8px) scale(1.02)
- Reflection: opacity 0 → 1, position shift
- Border: red tint (0.4 opacity)
- Shadow: enhanced with glow
```

### 5. Contact Form
```
┌──────────────────────────────────────────┐
│  GET YOUR FREE QUOTE                     │
│                                          │
│  ┌─────────────┐  ┌─────────────┐       │
│  │ Name        │  │ Phone       │       │
│  └─────────────┘  └─────────────┘       │
│                                          │
│  ┌──────────────────────────────┐       │
│  │ Email                        │       │
│  └──────────────────────────────┘       │
│                                          │
│  ┌──────────────────────────────┐       │
│  │ Service Interested In ▼      │       │
│  └──────────────────────────────┘       │
│                                          │
│  ┌──────────────────────────────┐       │
│  │ Vehicle (Year, Make, Model)  │       │
│  └──────────────────────────────┘       │
│                                          │
│  ┌──────────────────────────────┐       │
│  │ Anything else?               │       │
│  │                              │       │
│  └──────────────────────────────┘       │
│                                          │
│  ☐ I qualify for a discount              │
│                                          │
│  [ Send Quote Request ]                  │
│                                          │
│  We'll get back within a few hours.      │
└──────────────────────────────────────────┘

Effect Layers:
1. Frosted glass container (24px blur)
2. Diagonal shine (top 30%)
3. Large dot pattern (100px/150px)
4. Glass border
5. Deep shadow

Form inputs:
- Dark background (#1f1f1f)
- Glass border (white 8% opacity)
- Red focus border
- Smooth transitions
```

## Animation Timings

### Scroll Reveal
```
Fade-up:
  opacity: 0 → 1         (0.6s ease)
  translateY: 24px → 0   (0.6s ease)
  stagger: 80ms per element

Stacking (Service Cards):
  opacity: 0 → 1         (0.8s cubic-bezier)
  translateY: 60px → 0   (0.8s)
  scale: 0.9 → 1         (0.8s)
```

### Hover Effects
```
Glass Cards:
  transform: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
  lift: translateY(-8px)
  scale: 1.02
  border-color: instant
  shadow: 0.4s

Featured Pricing:
  transform: 0.4s
  lift: translateY(-12px)
  scale: 1.05
  glow: 0.4s fade-in
```

### Continuous Animations
```
Pricing Float:
  duration: 3s
  easing: ease-in-out
  iteration: infinite
  movement: translateY(0) → -4px → 0
  stagger: 0.2s per card

Border Pulse (Featured):
  duration: 2s
  easing: ease-in-out
  iteration: infinite
  effect: brightness(1) → 1.2 → 1
```

## Mobile Breakpoint Effects

### Desktop (1024px+)
✅ Full glassmorphism effects
✅ All animations active
✅ Hover states functional
✅ Backdrop blur: 20-24px
✅ Multi-column grids

### Tablet (768px - 1023px)
✅ Reduced glass effects
✅ Simplified animations
✅ Hover states active
✅ Backdrop blur: 20px
⚠️ Single/double column grids

### Mobile (320px - 767px)
⚠️ Minimal glass effects
⚠️ Animations disabled/simplified
⚠️ Active states instead of hover
⚠️ Backdrop blur: 16px (or fallback)
⚠️ Single column layout
✅ Touch-optimized (44px targets)
✅ Reduced texture opacity (0.2)

## Glass Effect Anatomy

### Standard Glass Card Structure
```css
.glass-card {
    /* Base */
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);

    /* ::before - Reflection */
    position: absolute;
    top: 0;
    height: 50%;
    background: linear-gradient(
        180deg,
        rgba(255,255,255,0.05) 0%,
        transparent 100%
    );
    opacity: 0; /* → 1 on hover */

    /* ::after - Texture */
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        circle,
        rgba(255,255,255,0.03) 1px,
        transparent 1px
    );
    background-size: 50px 50px;
    opacity: 0.3;
}
```

### Gradient Border Card Structure
```css
.gradient-border-card {
    /* Dual background technique */
    border: 2px solid transparent;
    background:
        /* Inner background (padding-box) */
        linear-gradient(#141414, #141414) padding-box,

        /* Border gradient (border-box) */
        linear-gradient(
            135deg,
            #c41e2a 0%,
            rgba(196, 30, 42, 0.3) 50%,
            #c41e2a 100%
        ) border-box;

    background-clip: padding-box, border-box;
}
```

## Performance Optimizations

### GPU-Accelerated Properties
✅ `transform` (translateY, scale, rotate)
✅ `opacity`
✅ `backdrop-filter` (with fallback)

### Avoided Properties
❌ `top`, `left`, `right`, `bottom` (causes reflow)
❌ `width`, `height` (causes reflow)
❌ `margin`, `padding` (causes reflow)

### Mobile Performance
- Animations disabled below 768px
- Blur reduced on older devices
- Texture opacity reduced (0.4 → 0.2)
- Float animations removed
- Transform scale reduced (1.03 → 1.01)

## Browser-Specific Notes

### Safari (iOS/macOS)
- Requires `-webkit-backdrop-filter`
- Glass effects render natively
- Performance excellent on newer devices
- May show pixelation on older iPads

### Chrome/Edge
- Full support for all effects
- Best performance
- Hardware acceleration optimal

### Firefox
- Backdrop-filter supported (88+)
- Slightly heavier rendering
- Performance good on desktop

### Fallback
```css
@supports not (backdrop-filter: blur(20px)) {
    .glass-card {
        background: rgba(26, 26, 26, 0.9);
        /* Solid fallback for old browsers */
    }
}
```

## Accessibility Considerations

### Contrast Ratios
- White text on glass: 4.5:1+ (WCAG AA)
- Red on black: 4.8:1+ (WCAG AA)
- Form labels: Enhanced weight for readability

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Touch Targets
- All buttons: minimum 44px height
- Tap areas: generous padding
- Focus states: visible outlines

---

**Design System**: Exotic Glassmorphism
**Color Scheme**: Black/White/Red
**Mobile-First**: 320px → 1440px+
**Browser Support**: Modern browsers (2021+)
**Performance**: 60fps on modern devices
