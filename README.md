# eg
design system by example with mcp server for ai integration

## 🚀 LFG

```bash
bun i
bun dev
```

## 🤖 MCP Server for AI Assistants

The EG design system includes a Model Context Protocol (MCP) server that exposes all components to AI assistants like Claude Code, Codex, Cursor, and VS Code.

### Quick Install

Clone and build the repo:

```bash
git clone https://github.com/yearn/eg.git ~/git/eg
```

```bash
(cd ../eg && bun install && bun run build:mcp)
```

Install MCP server:

```bash
claude mcp add-json eg '{"command":"bun","args":["../eg/packages/mcp/dist/index.js"]}'
```

Check health:

```base
claude mcp list
```

To remove:

```bash
claude mcp remove eg
```

To update:

```bash
(cd ../eg && git pull && bun install && bun run build:mcp)
```

To explore:

```base
claude
/mcp
# find eg in the list, enter
```

### What You Get

The MCP server provides AI assistants with:

- **React components** across elements, motion, and complex components
- **Design system documentation** and principles
- **CSS theme tokens** and color palettes
- **Usage examples** for every component
- **Installation instructions** with dependencies
- **Full-text search** across components

### Available Components

**Elements**: Button, Card, Input, Switch, Textarea
**Motion**: FlyInFromLeft, FlyInFromTop, FlyInFromBottom, ScaleIn
**Components**: ChainIcon, ChainSelect, HoverCard, HoverSelect, Odometer, Skeleton, ThemeToggle, TokenIcon, Yearn

### Testing

```bash
cd packages/mcp
bun run build
bunx @modelcontextprotocol/inspector dist/index.js
```
