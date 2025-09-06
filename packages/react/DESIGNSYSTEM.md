# eg - design system

A focused, technical design system.

## Core Principles

- **Dual typography system** with Sans for UI and Monospace for technical content
- **Subtle depth** through soft drop shadows with transparency
- **Three-color system** with Primary (blue), Secondary (neutral), and Accent (pink)
- **Clean modern styling** with rounded corners
- **Dark mode native** with automatic switching based on system preference
- **Consistent interactive states** across components

## Colors

### Primary (Blue)
Used for primary actions, interactive elements, and key highlights.

```css
--color-primary-50: #f0f6fe
--color-primary-100: #deeafb
--color-primary-200: #b2edff
--color-primary-300: #9cc5f4
--color-primary-400: #6da6ed
--color-primary-500: #4a86e7
--color-primary-600: #3569db
--color-primary-700: #0078b4
--color-primary-800: #006695
--color-primary-900: #273e81
--color-primary-950: #1c284f
--color-primary-1000: #1c284f
```

### Secondary (Neutral)
Used for backgrounds, containers, borders, and general UI elements.

```css
--color-secondary-50: var(--color-neutral-50)
--color-secondary-100: var(--color-neutral-100)
--color-secondary-200: var(--color-neutral-200)
--color-secondary-300: var(--color-neutral-300)
--color-secondary-400: var(--color-neutral-400)
--color-secondary-500: var(--color-neutral-500)
--color-secondary-600: var(--color-neutral-600)
--color-secondary-700: var(--color-neutral-700)
--color-secondary-800: var(--color-neutral-800)
--color-secondary-900: var(--color-neutral-900)
--color-secondary-950: var(--color-neutral-950)
```

### Accent (Pink)
Used for special emphasis, accent elements, and tertiary actions.

```css
--color-accent-50: var(--color-pink-50)
--color-accent-100: var(--color-pink-100)
--color-accent-200: var(--color-pink-200)
--color-accent-300: var(--color-pink-300)
--color-accent-400: var(--color-pink-400)
--color-accent-500: var(--color-pink-500)
--color-accent-600: var(--color-pink-600)
--color-accent-700: var(--color-pink-700)
--color-accent-800: var(--color-pink-800)
--color-accent-900: var(--color-pink-900)
--color-accent-950: var(--color-pink-950)
```

### Interactive Colors
Semantic color variables that adapt to light/dark mode:

```css
/* Primary Interactive */
--color-interactive-primary: var(--color-primary-500) /* Light mode */
--color-interactive-primary: var(--color-primary-600) /* Dark mode */
--color-interactive-primary-hover: var(--color-primary-400)
--color-interactive-primary-active: var(--color-primary-300)
--color-interactive-primary-text: var(--color-primary-950) /* Light mode */
--color-interactive-primary-text: var(--color-primary-50) /* Dark mode */
--color-interactive-primary-border: var(--color-primary-600)

/* Secondary Interactive */
--color-interactive-secondary: var(--color-secondary-200) /* Light mode */
--color-interactive-secondary: var(--color-secondary-900) /* Dark mode */
--color-interactive-secondary-hover: var(--color-secondary-300) /* Light mode */
--color-interactive-secondary-hover: var(--color-secondary-800) /* Dark mode */
--color-interactive-secondary-active: var(--color-secondary-400) /* Light mode */
--color-interactive-secondary-active: var(--color-secondary-700) /* Dark mode */
--color-interactive-secondary-text: var(--color-secondary-800) /* Light mode */
--color-interactive-secondary-text: var(--color-secondary-200) /* Dark mode */
--color-interactive-secondary-border: var(--color-secondary-400) /* Light mode */
--color-interactive-secondary-border: var(--color-secondary-700) /* Dark mode */

/* Accent Interactive */
--color-interactive-accent: var(--color-accent-500)
--color-interactive-accent-hover: var(--color-accent-400)
--color-interactive-accent-active: var(--color-accent-300)
--color-interactive-accent-text: var(--color-accent-50)
--color-interactive-accent-border: var(--color-accent-600)

/* Disabled States */
--color-interactive-disabled: var(--color-secondary-200) /* Light mode */
--color-interactive-disabled: var(--color-secondary-900) /* Dark mode */
--color-interactive-disabled-text: var(--color-secondary-400) /* Light mode */
--color-interactive-disabled-text: var(--color-secondary-700) /* Dark mode */
--color-interactive-disabled-border: var(--color-secondary-300) /* Light mode */
--color-interactive-disabled-border: var(--color-secondary-800) /* Dark mode */
```

### Surface Colors
For backgrounds and elevated surfaces:

```css
--color-surface-base: var(--color-secondary-50) /* Light mode */
--color-surface-base: var(--color-secondary-900) /* Dark mode */
--color-surface-elevated: var(--color-secondary-100) /* Light mode */
--color-surface-elevated: var(--color-secondary-900) /* Dark mode */
--color-surface-overlay: var(--color-secondary-200) /* Light mode */
--color-surface-overlay: var(--color-secondary-800) /* Dark mode */
--color-surface-border: var(--color-secondary-300) /* Light mode */
--color-surface-border: var(--color-secondary-700) /* Dark mode */
```

### Content Colors
For text and content:

```css
--color-content-primary: var(--color-secondary-700) /* Light mode */
--color-content-primary: var(--color-secondary-50) /* Dark mode */
--color-content-secondary: var(--color-secondary-500)
--color-content-inverse: var(--color-secondary-50) /* Light mode */
--color-content-inverse: var(--color-secondary-50) /* Dark mode */
```

### Semantic Colors
```css
/* Error states */
.error-bg { background: red-500; }
.error-text { color: red-50; }
.error-border { border-color: red-500; }
.error-hover { background: red-400; }
.error-active { background: red-300; }

/* Warning states */
.warn-border { border-color: yellow-400; }
```

## Typography

### Font System
The design system uses a dual typography approach:

```css
--font-mono: 'Google Sans Code', monospace
--font-sans: 'Inter', sans-serif
```

### Font Usage Rules

**Inter (Sans Serif)**: 
- General UI text, headings, labels, and body content
- All interface elements and user-facing text
- Buttons, navigation, forms, and general content

**Google Sans Code (Monospace)**: 
- Numbers, technical data, addresses, hashes
- Code snippets and technical content
- Financial amounts, blockchain data
- Input fields for technical data

### Typography Scale
```css
text-5xl   /* Large headers (48px) */
text-4xl   /* Section headers (36px) */
text-3xl   /* Large headings (30px) */
text-2xl   /* Component headings, button text (24px) */
text-xl    /* Large body text (20px) */
text-lg    /* Default body text (18px) */
text-base  /* Standard text (16px) */
text-sm    /* Small labels, secondary text (14px) */
text-xs    /* Captions, tiny text (12px) */
```

### Typography Examples
```css
/* Sans Serif Usage */
.font-sans.text-3xl.font-bold     /* Heading Bold */
.font-sans.text-2xl.font-semibold /* Heading Semibold */
.font-sans.text-xl.font-medium    /* Heading Medium */
.font-sans.text-base               /* Regular body text */
.font-sans.text-sm.text-secondary-600  /* Secondary text */
.font-sans.text-xs.text-secondary-500  /* Small caption text */

/* Monospace Usage */
.font-mono.text-2xl.font-bold     /* $1,234.56 */
.font-mono.text-xl                /* 42.000000 ETH */
.font-mono.text-base              /* 0x1234...abcd */
.font-mono.text-sm                /* Block: 18,547,291 */
.font-mono.text-xs                /* Gas: 21000 gwei */
```

## Spacing

### Gap System
```css
gap-2    /* 8px - Very tight spacing */
gap-3    /* 12px - Tight spacing within components */
gap-4    /* 16px - Default spacing */
gap-6    /* 24px - Comfortable spacing */
gap-8    /* 32px - Spacious section spacing */
gap-12   /* 48px - Large section breaks */
```

### Component Padding
```css
px-8 py-5   /* Buttons, triggers, and interactive elements (32px/20px) */
px-6 py-3   /* Card content (24px/12px) */
px-4 py-3   /* Input fields (16px/12px) */
px-3 py-2   /* Compact elements (12px/8px) */
```

### Margin System
```css
/* Used for layout spacing, negative margins for positioning */
-mt-6 -mx-6  /* Card header negative margins */
```

## Depth & Elevation

### Drop Shadows
Soft shadows with transparency for depth:

```css
--drop-shadow-2: 2px 2px 4px rgb(0 0 0 / 0.15)   /* Subtle depth */
--drop-shadow-3: 3px 3px 6px rgb(0 0 0 / 0.15)   /* Light elevation */
--drop-shadow-4: 4px 4px 8px rgb(0 0 0 / 0.15)   /* Button depth */
--drop-shadow-6: 6px 6px 12px rgb(0 0 0 / 0.15)  /* Card elevation */
--drop-shadow-8: 8px 8px 16px rgb(0 0 0 / 0.15)  /* Maximum elevation */
```

### Text Shadows
Matching text shadow system:

```css
--text-shadow-2: 2px 2px 4px rgb(0 0 0 / 0.15)
--text-shadow-3: 3px 3px 6px rgb(0 0 0 / 0.15)
--text-shadow-4: 4px 4px 8px rgb(0 0 0 / 0.15)
--text-shadow-6: 6px 6px 12px rgb(0 0 0 / 0.15)
--text-shadow-8: 8px 8px 16px rgb(0 0 0 / 0.15)
```

### Inner Shadows
For inset effects:

```css
--shadow-inner-2: inset 2px 2px 4px rgb(0 0 0 / 0.15)
```

## Border Radius

Modern rounded corners throughout:

```css
--radius-primary: var(--radius-lg)  /* Large radius for primary elements */
```

### Border Radius Usage
```css
rounded-primary      /* Primary components (buttons, cards, inputs) */
rounded-full        /* Circular elements (dots, toggles) */
```

## Component Patterns

### Button
Modern button styling with semantic color variants:

```css
/* Base Button Structure */
.button-base {
  position: relative;
  height: 32px;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  letter-spacing: 0.025em;
  box-shadow: var(--drop-shadow-4), var(--drop-shadow-black);
  border: 1px solid;
  cursor: pointer;
  border-radius: var(--radius-primary);
  white-space: nowrap;
}

/* Primary Variant */
.button-primary {
  background: var(--color-interactive-primary);
  color: var(--color-interactive-primary-text);
  border-color: var(--color-interactive-primary-border);
}
.button-primary:hover {
  background: var(--color-interactive-primary-hover);
}
.button-primary:active {
  background: var(--color-interactive-primary-active);
}

/* Secondary Variant */
.button-secondary {
  background: var(--color-interactive-secondary);
  color: var(--color-interactive-secondary-text);
  border-color: var(--color-interactive-secondary-border);
}
.button-secondary:hover {
  background: var(--color-interactive-secondary-hover);
}
.button-secondary:active {
  background: var(--color-interactive-secondary-active);
}

/* Accent Variant */
.button-accent {
  background: var(--color-interactive-accent);
  color: var(--color-interactive-accent-text);
  border-color: var(--color-interactive-accent-border);
}
.button-accent:hover {
  background: var(--color-interactive-accent-hover);
}
.button-accent:active {
  background: var(--color-interactive-accent-active);
}

/* Error Variant */
.button-error {
  background: red-500;
  color: red-50;
  border-color: red-500;
  box-shadow: none;
  pointer-events: none;
}
.button-error:hover {
  background: red-400;
}
.button-error:active {
  background: red-300;
}

/* Disabled State */
.button:disabled {
  background: var(--color-interactive-disabled);
  color: var(--color-interactive-disabled-text);
  border-color: var(--color-interactive-disabled-border);
  cursor: default;
  box-shadow: none;
  pointer-events: none;
}

/* Busy State */
.button-busy {
  color: transparent;
  border-color: var(--color-interactive-secondary-border);
  pointer-events: none;
}
```

### Card
Clean, elevated surfaces for content:

```css
.card {
  position: relative;
  border-radius: var(--radius-primary);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: var(--drop-shadow-6), var(--drop-shadow-black);
  background: var(--card-bg);
  color: var(--foreground);
  border: 1px solid var(--card-border);
  outline: none;
}

/* Card Header */
.card-header {
  width: 100%;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.025em;
  border-radius: var(--radius-primary) var(--radius-primary) 0 0;
  margin: -24px -24px 0;
}
```

### HoverCard
Interactive overlay components:

```css
/* HoverCard Trigger */
.hover-card-trigger {
  position: relative;
  height: 32px;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-interactive-secondary);
  color: var(--color-interactive-secondary-text);
  font-size: 24px;
  border-radius: var(--radius-primary);
  cursor: pointer;
  box-shadow: var(--drop-shadow-4), var(--drop-shadow-black);
  border: 1px solid var(--color-interactive-secondary-border);
}

.hover-card-trigger:hover {
  background: var(--color-interactive-secondary-hover);
}

.hover-card-trigger:active {
  background: var(--color-interactive-secondary-active);
}

/* HoverCard Content Wrapper */
.hover-card-content {
  padding: 20px 16px;
  position: absolute;
  z-index: 10000;
  top: 100%;
  left: -20px;
  right: -20px;
}

/* HoverCard Content uses Card styling with additional shadow */
.hover-card-content .card {
  width: 100%;
  box-shadow: var(--drop-shadow-2);
}
```

### HoverSelect
Dropdown selection components:

```css
/* HoverSelect uses HoverCard foundation with additional styling */
.hover-select-trigger {
  /* Inherits from HoverCardTrigger */
  white-space: nowrap;
}

.hover-select-trigger .caret {
  margin-left: 8px;
  opacity: 0.4;
}

/* HoverSelect Content */
.hover-select-content {
  padding: 0;
  max-height: 384px; /* 24rem */
  overflow-y: auto;
}

/* HoverSelect Options */
.hover-select-option {
  width: 100%;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  transition: colors 200ms;
  text-align: left;
  font-size: 20px;
  cursor: pointer;
  color: var(--foreground);
}

.hover-select-option:hover {
  background: var(--color-interactive-secondary-hover);
}

.hover-select-option:active {
  background: var(--color-interactive-secondary-active);
}

.hover-select-option:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Selection Indicator */
.hover-select-option.selected::after {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-interactive-secondary-active);
  margin-left: auto;
}
```

### Input & Form Elements
Modern form controls with consistent styling:

```css
/* Input Base */
.input {
  position: relative;
  padding: 12px 16px;
  font-family: var(--font-mono);
  font-size: 18px;
  color: var(--color-content-primary);
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-surface-border);
  border-radius: var(--radius-primary);
  outline: none;
}

.input::placeholder {
  color: var(--color-secondary-500);
  opacity: 0.6;
}

.input:hover {
  background: var(--color-surface-overlay);
  border-color: var(--color-interactive-primary-border);
}

.input:focus {
  color: var(--color-content-primary);
  border-color: var(--color-interactive-primary-border);
  background: var(--color-surface-overlay);
}

.input:focus::placeholder {
  color: var(--color-secondary-600);
}

/* Input States */
.input[data-disabled="true"] {
  border-color: var(--color-surface-border);
  opacity: 0.4;
  color: var(--color-secondary-400);
  background: var(--color-surface-base);
  opacity: 0.4;
}

.input[data-disabled="true"]::placeholder {
  color: var(--color-secondary-500);
  opacity: 0.4;
}

/* Input Themes */
.input.warn {
  border-color: yellow-400 !important;
}

.input.error {
  border-color: red-500 !important;
}

/* Textarea */
.textarea {
  /* Inherits all input styling */
  resize: vertical;
  min-height: 96px;
}
```

### Switch Component
Toggle switches with smooth animations:

```css
.switch-root {
  position: relative;
  display: inline-flex;
  height: 28px;
  width: 48px;
  align-items: center;
  border-radius: 9999px;
  transition: colors 200ms;
  background: var(--color-secondary-300); /* Light mode */
  outline: none;
  ring: 2px transparent;
}

.switch-root[data-state="checked"] {
  background: var(--color-primary-500);
}

.switch-root:focus-visible {
  ring-color: var(--color-primary-400);
}

.switch-root:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Dark mode */
.dark .switch-root {
  background: var(--color-secondary-700);
}

.dark .switch-root[data-state="checked"] {
  background: var(--color-primary-600);
}

/* Switch Thumb */
.switch-thumb {
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 9999px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 200ms;
  transform: translateX(4px);
}

.switch-thumb[data-state="checked"] {
  transform: translateX(24px);
}

/* Dark mode thumb */
.dark .switch-thumb {
  background: var(--color-secondary-100);
}
```

## Interactive States

### Hover Interactions
- Smooth color transitions for backgrounds (200ms duration)
- Maintain elevation and shadows
- Subtle color changes for feedback

### Active States
- Slightly darker/lighter background colors than hover
- Immediate visual feedback on press
- Maintain all styling properties

### Focus States
- Ring outlines for accessibility
- Enhanced contrast for keyboard navigation
- Maintained for all interactive elements

### Disabled States
- Reduced opacity (0.5)
- Remove pointer events and cursor changes
- Muted colors and removed shadows
- Clear visual indication of non-interactive state

## Dark Mode

Automatic switching based on system preference with manual override:

```css
/* Default/Light Mode Variables */
:root, :root.light {
  --foreground: var(--color-content-primary);          /* secondary-700 */
  --background: var(--color-surface-base);             /* secondary-50 */
  --card-bg: var(--color-surface-elevated);           /* secondary-100 */
  --card-border: var(--color-surface-border);         /* secondary-300 */
}

/* Dark Mode Variables */
:root.dark {
  --foreground: var(--color-content-inverse);         /* secondary-50 */
  --background: var(--color-secondary-900);
  --card-bg: var(--color-secondary-900);
  --card-border: var(--color-secondary-700);
}

/* System Preference Detection */
@media (prefers-color-scheme: dark) {
  :root:not(.light):not(.dark) {
    /* Apply dark mode variables when system prefers dark */
  }
}

@media (prefers-color-scheme: light) {
  :root:not(.light):not(.dark) {
    /* Apply light mode variables when system prefers light */
  }
}
```

### Dark Mode Interactive Colors
Interactive elements automatically adapt their colors based on the current theme through CSS custom properties that are redefined in light and dark contexts.

## Animation & Motion

### Skeleton Loading
Smooth loading animations for content placeholders:

```css
@keyframes skeleton {
  0% { background-position: 120% 0; }
  100% { background-position: -80% 0; }
}

.animate-skeleton {
  background: linear-gradient(-90deg, #e5e7eb 12%, #f3f4f6 32%, #f9fafb 68%, #e5e7eb 90%);
  background-size: 200% 100%;
  animation: skeleton 1.75s infinite;
}

/* Dark mode skeleton */
.dark .animate-skeleton {
  background: linear-gradient(-90deg, #374151 12%, #4b5563 32%, #6b7280 68%, #374151 90%);
  background-size: 200% 100%;
  animation: skeleton 1.75s infinite;
}
```

### Motion Components
Frame-based animations using Framer Motion:

- **FlyInFromLeft**: Elements slide in from the left edge
- **FlyInFromTop**: Elements drop in from above  
- **FlyInFromBottom**: Elements rise in from below
- **ScaleIn**: Elements scale up from center point

All motion components accept a `_key` prop for triggering re-animations.

## Utility Classes

### Responsive Behavior
```css
/* Hover-only interactions */
@media (hover: hover) {
  .hoverable\:hidden { display: none; }
  .hoverable\:block { display: block; }
  .hoverable\:flex { display: flex; }
  .hoverable\:invisible { visibility: hidden; }
  .hoverable\:visible { visibility: visible; }
}

/* Reset text truncation */
.reset-truncate {
  overflow: auto;
  text-overflow: inherit;
  white-space: inherit;
}
```

## Component Guidelines

### Cards
- **Consistent styling**: Use Card component with standard elevation
- **Flexible content**: Support headers, custom content, and variable sizing  
- **Semantic colors**: Adapt automatically to light/dark themes
- **Elevated surfaces**: Always include drop shadows for depth

### Buttons
- **Semantic variants**: Primary, Secondary, Accent, Error, Busy, Disabled
- **Interactive feedback**: Hover, active, and focus states
- **Consistent sizing**: Standard height (32px) with flexible width
- **Accessibility**: Proper focus indicators and disabled states

### Form Elements
- **Monospace inputs**: Use monospace font for technical data entry
- **Consistent theming**: Support default, warning, and error states
- **Responsive behavior**: Proper hover, focus, and disabled states
- **Accessibility**: Clear placeholder text and proper labeling

### HoverCards & Selects
- **State management**: Use Zustand for hover state coordination
- **Positioning**: Dynamic positioning with proper z-index layering
- **Content flexibility**: Support custom triggers and content rendering
- **Keyboard navigation**: Full accessibility support

## Implementation Guidelines

1. **Typography consistency**: Use Inter for UI text, Google Sans Code for technical content
2. **Color system adherence**: Always use semantic color variables, not direct colors
3. **Responsive design**: Ensure components work across device sizes
4. **Accessibility first**: Include proper focus indicators, ARIA labels, and keyboard navigation
5. **Performance optimization**: Use CSS custom properties for theme switching
6. **Component composition**: Build complex interfaces using base component patterns
7. **State management**: Use appropriate state management (Zustand) for interactive components
8. **Animation consistency**: Follow established motion patterns and timing

## Browser Support

- **Modern browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **CSS features**: CSS Custom Properties, CSS Grid, Flexbox
- **JavaScript features**: ES2020+, React 19+
- **Font loading**: Google Fonts with fallbacks to system fonts

## Development Tools

### Dependencies
```json
{
  "react": "^19.1.1",
  "framer-motion": "^12.23.12",
  "@radix-ui/react-switch": "^1.2.6",
  "tailwindcss": "^4.1.12",
  "zustand": "^5.0.8"
}
```

### Build Process
- **Vite**: For fast development and optimized builds
- **TypeScript**: For type safety and better developer experience  
- **Tailwind CSS v4**: For utility-first styling with modern CSS features

This design system provides a comprehensive foundation for building consistent, accessible, and performant user interfaces while maintaining flexibility for future enhancements.