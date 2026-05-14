# Contributing to Groot Studio

Thank you for your interest in contributing. This document explains how to get started.

## Ways to contribute

- Report bugs via [GitHub Issues](https://github.com/Subhadipjana95/groot-studio/issues)
- Request new components via [GitHub Issues](https://github.com/Subhadipjana95/groot-studio/issues)
- Submit a new component via Pull Request
- Improve documentation

## Tech Stack

Groot Studio is built with the latest industry standards to ensure longevity and performance:

- **Core**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Base Components**: [shadcn/ui](https://ui.shadcn.com/)


## Project Structure

This repository is a **Turborepo** monorepo designed for scale and developer velocity:

```bash
groot-studio/
├── apps/
│   └── web/                  # Documentation & Landing Page (Next.js 16)
├── packages/
│   ├── ui/                   # The Core Registry
│   │   ├── registry/         # High-fidelity component implementations
│   │   ├── src/components/   # Foundational shadcn base components
│   │   └── registry.json     # Registry manifest for CLI integration
│   ├── eslint-config/        # Shared code quality standards
│   └── typescript-config/    # Shared compiler configurations
└── turbo.json                # Monorepo orchestration
```

## Development setup
```bash
git clone https://github.com/Subhadipjana95/groot-studio.git
cd groot-studio
npm install
npm run dev
```

## Adding a new component

1. Create the component folder:
```bash
mkdir -p packages/ui/registry/radix-nova/your-component
```

2. Create the component file at:
```
packages/ui/registry/radix-nova/your-component/your-component.tsx
```

3. Use `@/` imports — never `@workspace/ui/*`:
```tsx
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

4. Add the entry to `packages/ui/registry.json` with correct `registryDependencies` and `devDependencies`

5. Build the registry:
```bash
npm run registry
```

6. Verify the JSON was generated at `apps/web/public/r/your-component.json`

## Pull Request guidelines

- One component per pull request
- Component must include TypeScript types for all props
- Component must work in both light and dark mode
- Branch naming: `feat/component-name`
- Commit message format: `feat: add your-component`

## Code style

- TypeScript strict mode
- Tailwind CSS for all styling
- No hardcoded colors — use CSS variables or Tailwind tokens
- No inline styles unless unavoidable
