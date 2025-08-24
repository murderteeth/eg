# eg - design system

A focused, technical design system.

## Core Principles

- **Monospace-first typography** for technical clarity
- **Bold depth** through prominent drop shadows
- **Two-color system** with comprehensive shading
- **Consistent styling** with skewed transforms
- **Dark mode native** with automatic switching
- **Single card style** for visual consistency

## Colors

### Primary (Amber)
Used for interactive elements, highlights, and accent colors.

```css
--color-primary-50: amber-50
--color-primary-400: amber-400
--color-primary-500: amber-500
--color-primary-950: amber-950
```

### Secondary (Blue)
Used for backgrounds, containers, and neutral UI elements.

```css
--color-secondary-50: #eefaff
--color-secondary-600: #0097df
--color-secondary-800: #006695
--color-secondary-950: #003653
--color-secondary-1000: #001a2a
```

### Semantic
```css
--color-error: red-500
--color-warning: yellow-400
```

## Typography

### Fonts
```css
--font-mono: 'Google Sans Code', monospace
--font-fancy: 'Orbitron', sans-serif
```

### Scale
```css
text-5xl  /* Headers */
text-3xl  /* Section titles */
text-2xl  /* Component text */
text-xl   /* Large body */
text-lg   /* Body */
text-sm   /* Labels */
text-xs   /* Small */
```

## Spacing

### System
```css
gap-3    /* Tight */
gap-4    /* Default */
gap-6    /* Comfortable */
gap-8    /* Spacious */
gap-12   /* Section spacing */
```

### Component Padding
```css
px-8 py-5  /* Buttons and triggers */
px-6 py-3  /* Card content */
px-3 py-2  /* Compact elements */
```

## Depth

### Drop Shadows
All shadows are solid black (rgb(0 0 0 / 1))

```css
--drop-shadow-2: 2px 2px 0px
--drop-shadow-4: 4px 4px 0px  /* Primary depth */
--drop-shadow-6: 6px 6px 0px  /* Card depth */
--drop-shadow-8: 8px 8px 0px  /* Maximum depth */
```

## Border Radius

```css
--radius-primary: none  /* No rounded corners */
```

## Component Patterns

### Button
```css
/* Primary */
bg-primary-500 text-primary-950 transform -skew-x-20
hover:bg-primary-400 active:bg-primary-200
drop-shadow-4 drop-shadow-black

/* Secondary */  
bg-secondary-800 text-secondary-300
hover:bg-secondary-700 active:bg-secondary-600

/* Content wrapper */
span: transform skew-x-20
```

### Card
```css
/* Standard styling (secondary colors only) */
bg-secondary-800 text-primary-50
drop-shadow-6 drop-shadow-black
outline-secondary-400/40
```

### HoverCard
```css
/* Trigger */
bg-secondary-800 text-secondary-300 transform -skew-x-20
group-hover:bg-black group-hover:text-primary-50

/* Content */
Uses Card component styling
border-secondary-800/8
```

### HoverCardTrigger
```css
/* Base styling */
transform -skew-x-20
px-8 py-5 text-2xl
drop-shadow-4 drop-shadow-secondary-600/60

/* Content wrapper */
span: transform skew-x-20
```

## Interactive States

### Hover
- Color transitions for backgrounds
- Maintain drop shadows
- Text color adjustments

### Active
- Lighter background colors
- Maintain transform effects

### Disabled
- Reduced opacity
- Remove shadows and pointer events

## Dark Mode

Automatic switching based on `prefers-color-scheme`:

```css
/* Light */
--foreground: secondary-700
--background: secondary-50

/* Dark */
--foreground: secondary-100  
--background: secondary-950
```

## Transform Effects

### Skew
Applied to interactive elements for visual interest:
```css
transform: -skew-x-20  /* Applied to container */
transform: skew-x-20   /* Applied to content to counter-skew */
```

## Component Guidelines

### Cards
- **Single style only**: Always use secondary colors (`bg-secondary-800`)
- **Consistent depth**: Use `drop-shadow-6` for all cards
- **Light text**: Use `text-primary-50` for readability

### Buttons
- **Transform effects**: Always include skew transforms
- **Hierarchy**: Primary (amber) vs Secondary (blue) colors
- **Content wrapping**: Use `<span>` to counter-skew text

### HoverCards
- **State management**: Use zustand for hover state
- **Positioning**: Support left/right alignment
- **Consistent styling**: Follow card patterns for content

## Implementation Notes

1. Always use the monospace font for consistency
2. Apply transform effects to interactive elements
3. Use drop shadows for hierarchy, not borders  
4. Cards have single styling - no variants
5. Counter-skew text content for readability
6. Maintain color consistency across components
7. Use semantic colors sparingly