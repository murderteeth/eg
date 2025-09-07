#!/usr/bin/env node

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

// Static component registry
const COMPONENTS = {
  // Elements
  Button: {
    path: '../react/src/components/elements/Button.tsx',
    category: 'elements',
    description: 'Button component with multiple variants and states',
    examples: [
      '<Button variant="primary">Primary</Button>',
      '<Button variant="secondary">Secondary</Button>',
      '<Button variant="accent">Accent</Button>',
      '<Button variant="error">Error</Button>',
      '<Button variant="busy">Busy</Button>',
      '<Button disabled>Disabled</Button>',
    ],
  },
  Card: {
    path: '../react/src/components/elements/Card.tsx',
    category: 'elements',
    description: 'Card container with consistent styling and shadows',
    examples: ['<Card className="max-w-md">This is a card component with some example content</Card>'],
  },
  Input: {
    path: '../react/src/components/elements/Input.tsx',
    category: 'elements',
    description: 'Input field with various states and theming',
    examples: [
      '<Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type something..." className="w-96" />',
      '<Input placeholder="Warning state" theme="warn" className="w-96" />',
      '<Input placeholder="Error state" theme="error" className="w-96" />',
      '<Input placeholder="Disabled input" disabled className="w-96" />',
    ],
  },
  Switch: {
    path: '../react/src/components/elements/Switch.tsx',
    category: 'elements',
    description: 'Toggle switch component with labels',
    examples: [
      '<Switch label="Toggle me" checked={switchValue} onChange={setSwitchValue} />',
      '<Switch label="Always on" checked={true} />',
      '<Switch label="Disabled" checked={false} disabled={true} />',
    ],
  },
  Textarea: {
    path: '../react/src/components/elements/Textarea.tsx',
    category: 'elements',
    description: 'Multi-line text input with theming support',
    examples: [
      '<Textarea value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} placeholder="Enter multiple lines of text..." rows={4} className="w-96" />',
      '<Textarea placeholder="Warning textarea" theme="warn" rows={3} className="w-96" />',
      '<Textarea placeholder="Error textarea" theme="error" rows={3} className="w-96" />',
      '<Textarea placeholder="Disabled textarea" disabled rows={3} className="w-96" />',
    ],
  },

  // Motion components
  FlyInFromLeft: {
    path: '../react/src/components/motion/FlyInFromLeft.tsx',
    category: 'motion',
    description: 'Animation wrapper that flies content in from the left',
    examples: [
      '<FlyInFromLeft _key={key.toString()}><Card className="p-4 w-42 whitespace-nowrap text-center">From Left</Card></FlyInFromLeft>',
    ],
  },
  FlyInFromRight: {
    path: '../react/src/components/motion/FlyInFromRight.tsx',
    category: 'motion',
    description: 'Animation wrapper that flies content in from the right',
    examples: [
      '<FlyInFromRight _key={key.toString()}><Card className="p-4 w-42 whitespace-nowrap text-center">From Right</Card></FlyInFromRight>',
    ],
  },
  FlyInFromTop: {
    path: '../react/src/components/motion/FlyInFromTop.tsx',
    category: 'motion',
    description: 'Animation wrapper that flies content in from the top',
    examples: [
      '<FlyInFromTop _key={key.toString()}><Card className="p-4 w-42 whitespace-nowrap text-center">From Top</Card></FlyInFromTop>',
    ],
  },
  FlyInFromBottom: {
    path: '../react/src/components/motion/FlyInFromBottom.tsx',
    category: 'motion',
    description: 'Animation wrapper that flies content in from the bottom',
    examples: [
      '<FlyInFromBottom _key={key.toString()}><Card className="p-4 w-42 whitespace-nowrap text-center">From Bottom</Card></FlyInFromBottom>',
    ],
  },
  ScaleIn: {
    path: '../react/src/components/motion/ScaleIn.tsx',
    category: 'motion',
    description: 'Animation wrapper that scales content in',
    examples: [
      '<ScaleIn _key={key.toString()}><Card className="p-4 w-42 whitespace-nowrap text-center">Scale In</Card></ScaleIn>',
    ],
  },

  // Complex components
  ChainIcon: {
    path: '../react/src/components/ChainIcon.tsx',
    category: 'components',
    description: 'Icon component for blockchain networks',
    examples: ['<ChainIcon chainId={1} size={48} />'],
  },
  ChainSelect: {
    path: '../react/src/components/ChainSelect/index.tsx',
    category: 'components',
    description: 'Multi-select dropdown for blockchain chains with search',
    examples: ['<ChainSelect />'],
  },
  HoverCard: {
    path: '../react/src/components/HoverCard/index.tsx',
    category: 'components',
    description: 'Hover-triggered card overlay with positioning',
    examples: [
      '<HoverCard hoverCardId="example-hover" trigger={<HoverCardTrigger>Hover me</HoverCardTrigger>} className="w-64"><div className="p-4">This content appears on hover</div></HoverCard>',
    ],
  },
  HoverSelect: {
    path: '../react/src/components/HoverSelect/HoverSelect.tsx',
    category: 'components',
    description: 'Dropdown select with hover interactions and multi-select support',
    examples: [
      '<HoverSelect selectId="single-example" options={[{ value: "circle", label: "Circle", icon: <PiCircleFill /> }]} placeholder="Select shape" triggerClassName="w-82" />',
      '<HoverSelect selectId="multi-example" options={[{ value: "red", label: "Red", icon: <PiCircleFill className="text-red-500" /> }]} placeholder="Select colors" multiple={true} showSelectAll={true} triggerClassName="w-82" />',
    ],
  },
  Odometer: {
    path: '../react/src/components/Odometer.tsx',
    category: 'components',
    description: 'Animated number display with formatting options',
    examples: ['<Odometer value={odometerValue} format={FORMAT_2_DECIMALS} className="text-4xl font-bold" />'],
  },
  Skeleton: {
    path: '../react/src/components/Skeleton.tsx',
    category: 'components',
    description: 'Loading placeholder component with animation',
    examples: ['<Skeleton className="w-32 h-12" />'],
  },
  ThemeToggle: {
    path: '../react/src/components/ThemeToggle.tsx',
    category: 'components',
    description: 'Dark/light mode toggle switch',
    examples: ['<ThemeToggle />'],
  },
  TokenIcon: {
    path: '../react/src/components/TokenIcon.tsx',
    category: 'components',
    description: 'Token icon with optional chain indicator',
    examples: [
      '<TokenIcon chainId={1} address="0xdC035D45d973E3EC169d2276DDab16f1e407384F" size={48} />',
      '<TokenIcon chainId={1} address="0xdC035D45d973E3EC169d2276DDab16f1e407384F" size={48} showChain={true} />',
    ],
  },
  Yearn: {
    path: '../react/src/components/Yearn.tsx',
    category: 'components',
    description: 'Yearn protocol branding component with customizable colors',
    examples: [
      '<Yearn front="text-primary-50" back="text-primary-600" size={48} />',
      '<Yearn front="text-secondary-200" back="text-secondary-900" size={48} />',
      '<Yearn front="text-accent-50" back="text-accent-500" size={48} />',
    ],
  },
  Header: {
    path: '../react/src/components/Header.tsx',
    category: 'components',
    description: 'Header component with sticky positioning and backdrop blur',
    examples: [
      '<Header><div>Logo</div><div>Navigation</div></Header>',
      '<Header className="relative"><div className="text-lg font-semibold">Example Header</div><div className="flex gap-4"><Button variant="secondary" className="h-6 px-4 py-2 text-base">Nav Item</Button><Button variant="primary" className="h-6 px-4 py-2 text-base">CTA</Button></div></Header>',
    ],
  },
  Footer: {
    path: '../react/src/components/Footer.tsx',
    category: 'components',
    description: 'Footer component with top border and backdrop blur',
    examples: [
      '<Footer><div>Logo</div><div>Copyright</div></Footer>',
      '<Footer><div>&lt;Footer&gt;</div><div className="text-sm text-content-secondary">© 2024 EG Design System</div></Footer>',
    ],
  },
} as const

type ComponentName = keyof typeof COMPONENTS

// Helper function to read files
function readComponent(componentName: ComponentName): string {
  try {
    const component = COMPONENTS[componentName]
    const filePath = join(__dirname, component.path)
    return readFileSync(filePath, 'utf-8')
  } catch (error) {
    throw new Error(`Failed to read component ${componentName}: ${error}`)
  }
}

// Helper function to read design system docs
function readDesignSystemDocs(): string {
  try {
    const filePath = join(__dirname, '../react/DESIGNSYSTEM.md')
    return readFileSync(filePath, 'utf-8')
  } catch (error) {
    throw new Error(`Failed to read design system documentation: ${error}`)
  }
}

// Helper function to read CSS theme
function readThemeCSS(): string {
  try {
    const filePath = join(__dirname, '../react/src/index.css')
    return readFileSync(filePath, 'utf-8')
  } catch (error) {
    throw new Error(`Failed to read theme CSS: ${error}`)
  }
}

// Initialize the MCP server
const server = new Server(
  {
    name: 'eg-mcp-server',
    version: '0.0.1',
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  },
)

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'list_components',
        description: 'List all available EG design system components with categories and descriptions',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              description: 'Filter by component category (elements, motion, components)',
              enum: ['elements', 'motion', 'components'],
            },
          },
        },
      },
      {
        name: 'get_component',
        description: 'Get the source code for a specific component',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the component',
              enum: Object.keys(COMPONENTS),
            },
          },
          required: ['name'],
        },
      },
      {
        name: 'get_component_examples',
        description: 'Get usage examples for a specific component',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the component',
              enum: Object.keys(COMPONENTS),
            },
          },
          required: ['name'],
        },
      },
      {
        name: 'search_components',
        description: 'Search components by name, description, or category',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query string',
            },
          },
          required: ['query'],
        },
      },
      {
        name: 'install_component',
        description: 'Generate installation instructions for using a component',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the component',
              enum: Object.keys(COMPONENTS),
            },
          },
          required: ['name'],
        },
      },
    ],
  }
})

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params

  try {
    switch (name) {
      case 'list_components': {
        const category = args?.category as string | undefined
        const filteredComponents = Object.entries(COMPONENTS).filter(
          ([_, comp]) => !category || comp.category === category,
        )

        const componentList = filteredComponents.map(([name, comp]) => ({
          name,
          category: comp.category,
          description: comp.description,
          path: comp.path,
        }))

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(componentList, null, 2),
            },
          ],
        }
      }

      case 'get_component': {
        const componentName = args?.name as ComponentName
        if (!COMPONENTS[componentName]) {
          throw new Error(`Component '${componentName}' not found`)
        }

        const sourceCode = readComponent(componentName)
        const component = COMPONENTS[componentName]

        return {
          content: [
            {
              type: 'text',
              text: `# ${componentName}

**Category:** ${component.category}  
**Description:** ${component.description}

## Source Code

\`\`\`typescript
${sourceCode}
\`\`\``,
            },
          ],
        }
      }

      case 'get_component_examples': {
        const componentName = args?.name as ComponentName
        if (!COMPONENTS[componentName]) {
          throw new Error(`Component '${componentName}' not found`)
        }

        const component = COMPONENTS[componentName]

        return {
          content: [
            {
              type: 'text',
              text: `# ${componentName} Examples\n\n${component.examples.map((example) => `\`\`\`tsx\n${example}\n\`\`\``).join('\n\n')}`,
            },
          ],
        }
      }

      case 'search_components': {
        const query = (args?.query as string)?.toLowerCase() || ''

        const matchingComponents = Object.entries(COMPONENTS).filter(
          ([name, comp]) =>
            name.toLowerCase().includes(query) ||
            comp.description.toLowerCase().includes(query) ||
            comp.category.toLowerCase().includes(query),
        )

        const results = matchingComponents
          .map(([name, comp]) => ({
            name,
            category: comp.category,
            description: comp.description,
            relevance:
              (name.toLowerCase().includes(query) ? 10 : 0) +
              (comp.description.toLowerCase().includes(query) ? 5 : 0) +
              (comp.category.toLowerCase().includes(query) ? 3 : 0),
          }))
          .sort((a, b) => b.relevance - a.relevance)

        return {
          content: [
            {
              type: 'text',
              text: `# Search Results for "${query}"\n\n${results.length ? JSON.stringify(results, null, 2) : 'No components found matching your query.'}`,
            },
          ],
        }
      }

      case 'install_component': {
        const componentName = args?.name as ComponentName
        if (!COMPONENTS[componentName]) {
          throw new Error(`Component '${componentName}' not found`)
        }

        const component = COMPONENTS[componentName]

        // Generate installation instructions
        const instructions = `# Installing ${componentName}

## Prerequisites
- React 19+
- Tailwind CSS v4
- TypeScript

## Installation Steps

1. Copy the component file from \`${component.path}\` to your project
2. Install required dependencies if not already present:
   \`\`\`bash
   bun add framer-motion clsx tailwind-merge
   \`\`\`

3. Import and use the component:
   \`\`\`tsx
   import ${componentName} from './components/${component.category}/${componentName}'
   \`\`\`

## Usage Examples

${component.examples.map((example) => `\`\`\`tsx\n${example}\n\`\`\``).join('\n\n')}

## Dependencies
- Ensure your Tailwind theme includes the EG design tokens
- Some components may require specific React hooks or utilities`

        return {
          content: [
            {
              type: 'text',
              text: instructions,
            },
          ],
        }
      }

      default:
        throw new Error(`Unknown tool: ${name}`)
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    }
  }
})

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'eg://design-system',
        name: 'EG Design System Documentation',
        description: 'Complete design system documentation with principles, tokens, and usage guidelines',
        mimeType: 'text/markdown',
      },
      {
        uri: 'eg://theme-tokens',
        name: 'Design Tokens & CSS Theme',
        description: 'CSS custom properties, color palette, typography, and spacing tokens',
        mimeType: 'text/css',
      },
      {
        uri: 'eg://component-registry',
        name: 'Component Registry',
        description: 'Complete list of all available components with metadata',
        mimeType: 'application/json',
      },
    ],
  }
})

// Read resources
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params

  try {
    switch (uri) {
      case 'eg://design-system': {
        const docs = readDesignSystemDocs()
        return {
          contents: [
            {
              uri,
              mimeType: 'text/markdown',
              text: docs,
            },
          ],
        }
      }

      case 'eg://theme-tokens': {
        const css = readThemeCSS()
        return {
          contents: [
            {
              uri,
              mimeType: 'text/css',
              text: css,
            },
          ],
        }
      }

      case 'eg://component-registry': {
        const registry = Object.entries(COMPONENTS).map(([name, comp]) => ({
          name,
          ...comp,
        }))

        return {
          contents: [
            {
              uri,
              mimeType: 'application/json',
              text: JSON.stringify(registry, null, 2),
            },
          ],
        }
      }

      default:
        throw new Error(`Unknown resource: ${uri}`)
    }
  } catch (error) {
    return {
      contents: [
        {
          uri,
          mimeType: 'text/plain',
          text: `Error reading resource: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
    }
  }
})

// Start the server
async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('EG MCP Server running on stdio')
}

main().catch((error) => {
  console.error('Server error:', error)
  process.exit(1)
})
