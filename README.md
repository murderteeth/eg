# eg
design system by example with mcp server for ai integration

## 🚀 LFG

```bash
bun i
bun dev
```

## 🤖 MCP Server for AI Assistants

The EG design system includes a Model Context Protocol (MCP) server that exposes all components to AI assistants like Claude Code, Codex, Cursor, and VS Code.

### Option 1: GitHub Link (Recommended)

In Claude Code, open the command palette (`Cmd+Shift+P`) and run:

```
Claude Code: Add MCP Server
```

Then add:
- **Name**: `eg-system`
- **Command**: `bunx`  
- **Args**: `--bun`, `github:yearn/eg#main`, `eg-mcp`

### Option 2: Local File System Path

For development or if you have the repo locally, build and:

```json
{
  "mcpServers": {
    "eg-dev": {
      "command": "node", 
      "args": ["/absolute/path/to/eg/packages/mcp/dist/index.js"]
    }
  }
}
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
