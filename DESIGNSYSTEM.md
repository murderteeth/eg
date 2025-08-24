# eg - design system

A focused, technical design system.

## Core Principles

- **Monospace-first typography** for technical clarity
- **Bold depth** through prominent drop shadows
- **Two-color system** with comprehensive shading
- **Consistent radius** across all components
- **Dark mode native** with automatic switching

## Colors

### Primary (Cyan)
Used for backgrounds, text, and neutral UI elements.

```css
--color-primary-50: cyan-50
--color-primary-500: cyan-500
--color-primary-950: cyan-950
--color-primary-1000: #182339
```

### Secondary (Amber)
Used for interactive elements and highlights.

```css
--color-secondary-50: amber-50
--color-secondary-500: amber-500
--color-secondary-950: amber-950
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
```

### Component Padding
```css
px-6 py-3  /* Standard inputs */
px-3 py-2  /* Compact elements */
px-8 py-6  /* Containers */
```

## Depth

### Drop Shadows
All shadows are solid black (rgb(0 0 0 / 1))

```css
--drop-shadow-2: 2px 2px 0px
--drop-shadow-4: 4px 4px 0px  /* Primary depth */
--drop-shadow-8: 8px 8px 0px  /* Maximum depth */
```

## Border Radius

```css
--radius-primary: 2xl  /* Universal radius */
```

## Component Patterns

### Button
```css
/* Base */
rounded-primary px-6 py-3 font-bold drop-shadow-4

/* Primary */
bg-secondary-300 hover:bg-secondary-400 active:bg-secondary-200

/* Disabled */
opacity-50 pointer-events-none drop-shadow-none
```

### Input
```css
/* Base */
rounded-primary px-6 py-3 bg-primary-100 dark:bg-primary-900

/* Focus */
focus:text-secondary-300

/* Error */
bg-red-50 dark:bg-red-950
```

### Container
```css
/* Base */
rounded-primary px-8 py-6 bg-primary-50 dark:bg-primary-1000

/* With depth */
drop-shadow-4 drop-shadow-black
```

## Interactive States

### Hover
- Increase brightness/lightness
- Maintain shadow depth

### Active
- Further increase brightness
- Optionally reduce shadow

### Disabled
- Reduce opacity to 50%
- Remove shadows
- Add `pointer-events-none`

## Dark Mode

Automatic switching based on `prefers-color-scheme`:

```css
/* Light */
--foreground: primary-700
--background: primary-50

/* Dark */
--foreground: primary-100
--background: primary-1000
```

## Animation

### Loading State
```css
.animate-wait {
  background: linear-gradient(-45deg, #253f67 50%, #336eae 60%, #93cefe 61%, #253f67 61%);
  background-size: 200% 100%;
  animation: suspense .5s infinite linear;
}
```

## Implementation Notes

1. Always use the monospace font for consistency
2. Apply `rounded-primary` to all interactive elements
3. Use drop shadows for hierarchy, not borders
4. Maintain the cyan/amber contrast throughout
5. Design for dark mode from the start
6. Keep spacing consistent with the scale
7. Use semantic colors sparingly