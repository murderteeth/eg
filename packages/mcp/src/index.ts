#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

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
        description: 'List all available EG design system components',
        inputSchema: {
          type: 'object',
          properties: {},
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

  switch (name) {
    case 'list_components':
      // TODO: Implement component listing
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(['Button', 'Card', 'TokenIcon', 'Odometer'], null, 2),
          },
        ],
      }

    case 'get_component': {
      // TODO: Implement component fetching
      const componentName = args?.name as string
      return {
        content: [
          {
            type: 'text',
            text: `Component source for ${componentName} will be implemented`,
          },
        ],
      }
    }

    default:
      throw new Error(`Unknown tool: ${name}`)
  }
})

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: 'eg://design-system',
        name: 'EG Design System',
        description: 'Design system documentation and tokens',
        mimeType: 'text/markdown',
      },
    ],
  }
})

// Read resources
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params

  if (uri === 'eg://design-system') {
    return {
      contents: [
        {
          uri,
          mimeType: 'text/markdown',
          text: '# EG Design System\n\nDesign system documentation placeholder',
        },
      ],
    }
  }

  throw new Error(`Unknown resource: ${uri}`)
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
