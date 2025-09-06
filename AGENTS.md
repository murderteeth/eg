# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Commands

### Development
```bash
# Root level commands
bun dev              # Start React development server
bun build            # Build both React app and MCP server
bun build:react      # Build React app only
bun build:mcp        # Build MCP server only
bun lint             # Run Biome checks on all packages
bun lint:fix         # Fix auto-fixable Biome issues in all packages
bun format           # Format code in all packages with Biome
bun clean            # Clean all node_modules and dist directories

# React package (packages/react)
cd packages/react
bun dev              # Start development server on port 3000
bun build            # Type check with TypeScript and build for production
bun preview          # Preview production build locally
bun lint             # Run Biome linting and formatting checks
bun lint:fix         # Fix auto-fixable Biome issues
bun format           # Format code with Biome

# MCP server package (packages/mcp)
cd packages/mcp
bun build            # Build TypeScript to dist/
bun dev              # Watch mode for development
bun test             # Test with MCP inspector
```

## Architecture

### Monorepo Structure
This is a Bun workspace monorepo containing:
- **packages/react** - React-based design system and component library
- **packages/mcp** - Model Context Protocol server for AI integration

### Core Technologies

#### React Package
- **React 19** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS v4** with custom design tokens
- **Framer Motion** for animations
- **Zustand** for state management in interactive components
- **Radix UI** for accessible component primitives
- **@number-flow/react** for animated number displays

#### MCP Server Package
- **@modelcontextprotocol/sdk** for MCP protocol implementation
- **TypeScript** with Node16 module resolution
- Exposes design system components to AI assistants

### Project Structure
```
eg/
├── packages/
│   ├── react/                    # React design system
│   │   ├── src/
│   │   │   ├── components/       # Reusable UI components
│   │   │   │   ├── elements/     # Base components (Button, Card, Input, Switch, Textarea)
│   │   │   │   ├── motion/       # Animation wrappers (FlyInFromLeft, FlyInFromTop, etc.)
│   │   │   │   ├── HoverCard/    # Overlay card with hover state
│   │   │   │   ├── HoverSelect/  # Dropdown select component
│   │   │   │   ├── ChainSelect/  # Multi-select for blockchain chains
│   │   │   │   ├── ChainIcon.tsx # Icon component for chains
│   │   │   │   ├── TokenIcon.tsx # Icon component for tokens
│   │   │   │   ├── Odometer.tsx  # Animated number display
│   │   │   │   ├── Skeleton.tsx  # Loading placeholder
│   │   │   │   ├── ThemeToggle.tsx # Light/dark mode switcher
│   │   │   │   ├── ImgOrBg.tsx   # Image/background utility
│   │   │   │   └── Yearn.tsx     # Yearn protocol component
│   │   │   ├── hooks/            # Custom React hooks
│   │   │   ├── lib/              # Utilities and helpers
│   │   │   │   ├── cn.ts         # Class name utility
│   │   │   │   └── chains.ts     # Chain configuration
│   │   │   └── index.css         # Global styles
│   │   ├── public/               # Static assets
│   │   ├── index.html            # HTML entry point
│   │   ├── vite.config.ts        # Vite configuration
│   │   ├── tsconfig.json         # TypeScript config
│   │   ├── package.json          # Package dependencies
│   │   └── DESIGNSYSTEM.md       # Design system documentation
│   │
│   └── mcp/                      # MCP server
│       ├── src/
│       │   └── index.ts          # MCP server implementation
│       ├── dist/                 # Built output
│       ├── tsconfig.json         # TypeScript config
│       └── package.json          # Package dependencies
│
├── AGENTS.md                     # This file - AI guidance
└── package.json                 # Root workspace configuration
```

### Component Design Principles

#### 1. **Composable Class Names**
All components use the `cn()` utility function from `lib/cn.ts` which combines `clsx` and `tailwind-merge` for intelligent class name composition. This allows:
- Multi-line template literals for readability
- Conditional classes without string concatenation
- Automatic deduplication and proper precedence

#### 2. **Data Attributes for State-Based Styling**
Components extensively use data attributes for variant styling:
```tsx
data-[variant=primary]:bg-interactive-primary
data-[variant=primary]:hover:bg-interactive-primary-hover
data-[disabled=true]:opacity-50
```
This pattern provides:
- Clean separation between logic and styling
- Better TypeScript support
- Easier debugging with visible state in DOM

#### 3. **Semantic Color Variables**
All colors use CSS custom properties that adapt to themes:
- `interactive-*` for interactive elements (primary, secondary, accent)
- `surface-*` for backgrounds and containers
- `content-*` for text
- Direct color usage only for semantic states (red for errors, yellow for warnings)

#### 4. **Consistent Component API**
All form elements follow the same patterns:
- `forwardRef` for ref forwarding
- `displayName` for React DevTools
- `className` prop for external styling
- Theme/variant props for semantic styling
- Data attributes for state visibility

#### 5. **Shared Base Styles**
Components share styling through:
- Exported className constants (e.g., `InputClassName` used by both Input and Textarea)
- Composition over inheritance
- Consistent spacing, borders, and shadows

#### 6. **Drop Shadow System**
Layered shadow system for depth:
- `drop-shadow-2` through `drop-shadow-8` for elevation
- Combined with `drop-shadow-black` for additional depth
- Removed on disabled states for flat appearance

#### 7. **Interactive State Hierarchy**
Well-defined state transitions:
1. Default state
2. Hover state (lighter/darker background)
3. Active state (further color shift)
4. Focus state (ring indicators)
5. Disabled state (reduced opacity, no shadows)

### State Management Patterns

#### Zustand Stores
Interactive components use Zustand for state management:
- `useHoverCard` - Manages hover state for HoverCard components
- `useHoverSelect` - Manages selection state for HoverSelect
- `useChainSelect` - Manages multi-selection state for ChainSelect

Each store follows the pattern:
- Isolated state per component instance (using IDs)
- Clear action methods (open, close, toggle)
- Derived state getters

### Animation Patterns

#### Motion Components
Wrapper components that add entrance animations:
- Accept `_key` prop for re-triggering animations
- Support `parentMounted` for delayed animations
- Use Framer Motion for smooth, performant animations

### Styling Approach
- **Tailwind CSS v4** with custom configuration
- **CSS custom properties** for theme variables
- **Semantic color tokens** that adapt to light/dark modes
- **Component-specific styling** through className composition
- **Data attributes** for state-based styling
- **Utility-first** with occasional inline styles for dynamic values

### Typography Strategy
- **Inter** for UI text (buttons, labels, general content)
- **Google Sans Code** (monospace) for:
  - Technical data (addresses, hashes)
  - Numbers and amounts
  - Input fields for data entry
  - Code-like content

### Accessibility Patterns
- Proper `forwardRef` usage for ref access
- ARIA attributes where needed
- Keyboard navigation support
- Focus indicators on all interactive elements
- Semantic HTML elements
- Label associations for form controls

### Testing & Quality
The project uses ESLint for code quality. No test framework is currently configured.

### Performance Considerations
- Component memoization where beneficial
- Lazy loading for heavy components
- CSS-based animations preferred over JavaScript
- Efficient re-render patterns with proper state management

## New Component Guidelines

When creating new components for this design system, follow these guidelines:

### File Structure
- Place in appropriate directory:
  - `/src/components/elements/` for base UI components
  - `/src/components/motion/` for animation wrappers
  - `/src/components/` for complex/composite components
- Use `.tsx` extension for components
- Create folder with `index.tsx` for multi-file components

### TypeScript Guidelines
```tsx
// Required imports
import { forwardRef } from 'react'
import { cn } from '../lib/cn' // or appropriate path

// Required type definitions
export type ComponentNameProps = BaseHTMLAttributes<HTMLElement> & {
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  // Additional props with proper types
}
```

### Component Structure
```tsx
// 1. Define className function for complex styling
function componentNameClassName(props: ComponentNameProps) {
  const { className, variant } = props
  return cn(`
    // Base styles
    relative flex items-center
    
    // Variant styles using data attributes
    data-[variant=primary]:bg-interactive-primary
    
    // State styles
    hover:bg-interactive-primary-hover
    disabled:opacity-50
    
    ${className}
  `)
}

// 2. Create component with forwardRef
const ComponentName = forwardRef<HTMLElement, ComponentNameProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <element
        ref={ref}
        data-variant={variant}
        className={componentNameClassName({ className, variant })}
        {...props}
      >
        {children}
      </element>
    )
  }
)

// 3. Set display name
ComponentName.displayName = 'ComponentName'

// 4. Export component
export default ComponentName
```

### Understanding forwardRef

#### Why Use forwardRef?
`forwardRef` is essential for creating truly reusable components because it allows parent components to:
- Access DOM elements directly for measurements or focus management
- Integrate with third-party libraries that need DOM references
- Compose components without breaking ref chains
- Work with animation libraries that need element references

#### When to Use forwardRef?
Use `forwardRef` for:
- **All base UI components** (buttons, inputs, cards) that render DOM elements
- **Components that might be used with libraries** requiring refs (like Framer Motion)
- **Form elements** that need imperative focus or validation
- **Any component wrapping a DOM element** that accepts user interaction

Skip `forwardRef` only when:
- Creating pure container components with no DOM element
- Building higher-order components that manage state only
- Making utility components that render nothing

Example of why it matters:
```tsx
// Without forwardRef - parent cannot access the input
function MyInput(props) {
  return <input {...props} />
}

// With forwardRef - parent can focus, measure, or manipulate
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />
})

// Parent usage
const inputRef = useRef()
inputRef.current?.focus() // This works with forwardRef
```

### Styling Guidelines
1. **Use semantic color variables**:
   - `interactive-primary/secondary/accent` for interactive elements
   - `surface-base/elevated/overlay` for backgrounds
   - `content-primary/secondary` for text
   - Direct colors only for errors (`red-500`) and warnings (`yellow-400`)

2. **Apply consistent spacing**:
   - Padding: `px-8 py-5` for buttons, `px-4 py-3` for inputs
   - Gap: `gap-2` to `gap-12` based on context
   - Margins: Use sparingly, prefer gap in flex containers

3. **Include drop shadows**:
   - `drop-shadow-4` for interactive elements
   - `drop-shadow-6` for cards
   - Combine with `drop-shadow-black` for depth
   - Remove on disabled state

4. **Define all interactive states**:
   - Default appearance
   - Hover state (use `hover:` prefix)
   - Active state (use `active:` prefix)
   - Focus state (use `focus:` or `focus-visible:`)
   - Disabled state (use `disabled:` and `data-[disabled=true]:`)

5. **Use data attributes for variants**:
   ```tsx
   data-[variant=primary]:bg-interactive-primary
   data-[state=open]:block
   data-[disabled=true]:opacity-50
   ```

### Accessibility Guidelines
- Include `forwardRef` for ref access
- Add `displayName` for React DevTools
- Support keyboard navigation where applicable
- Include proper ARIA attributes
- Ensure focus indicators are visible
- Support disabled state properly

### Props Interface Guidelines
- Always include `className?: string` for external styling
- Extend appropriate HTML element attributes
- Use semantic prop names (variant, theme, size)
- Document complex props with JSDoc comments
- Use TypeScript unions for variant props

### State Management Guidelines
- Use local state for simple interactions
- Create Zustand store for complex state shared across instances
- Follow existing store patterns in `useHoverCard`, `useChainSelect`

### Quality Checklist
Before committing a new component, verify:
- [ ] Component uses `forwardRef` and has `displayName`
- [ ] All interactive states are styled (hover, active, focus, disabled)
- [ ] Component uses semantic color variables
- [ ] TypeScript types are properly defined and exported
- [ ] Component follows existing naming patterns
- [ ] Styling uses `cn()` utility for class composition
- [ ] Data attributes are used for variant styling
- [ ] Component is accessible (keyboard nav, ARIA, focus indicators)
- [ ] Example usage is added to App.tsx for demonstration
- [ ] **Component is registered in MCP server** (see below)

### Adding Components to MCP Server

When adding new components, you must update the static registry in `packages/mcp/src/index.ts` to make them discoverable by AI assistants:

1. **Add to COMPONENTS registry**:
   ```typescript
   const COMPONENTS = {
     // ... existing components
     YourNewComponent: {
       path: '../react/src/components/YourNewComponent.tsx',
       category: 'elements', // or 'motion' or 'components'
       description: 'Brief description of what this component does',
       examples: [
         '<YourNewComponent prop="value">Example usage</YourNewComponent>'
       ]
     }
   }
   ```

2. **Extract examples from App.tsx**: Copy the exact JSX usage from your App.tsx demo

3. **Choose appropriate category**:
   - `elements` - Basic UI building blocks (Button, Input, Card)  
   - `motion` - Animation wrappers (FlyInFromLeft, ScaleIn)
   - `components` - Complex interactive components (ChainSelect, HoverCard)

4. **Test MCP server**: Run `cd packages/mcp && bun test` to verify the component is discoverable

This ensures your component is available to AI assistants via the MCP protocol for code generation and documentation.