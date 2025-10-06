# cheat-sheet

A Turborepo monorepo with Next.js 15, Tailwind CSS v4, and shared packages.

## What's Inside?

This monorepo uses [pnpm](https://pnpm.io) as a package manager and includes the following packages/apps:

### Apps

- `web`: A [Next.js](https://nextjs.org/) 15 app with Tailwind CSS v4 and example pages

### Packages

- `@repo/ui`: Shared React component library
- `@repo/utils`: Shared utility functions
- `@repo/eslint-config`: Shared ESLint configurations
- `@repo/typescript-config`: Shared TypeScript configurations

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 10

### Installation

```bash
pnpm install
```

### Development

To run all apps in development mode:

```bash
pnpm dev
```

### Build

To build all apps and packages:

```bash
pnpm build
```

### Lint

To lint all packages:

```bash
pnpm lint
```

### Test

To run tests for all packages:

```bash
pnpm test
```

### Format

To format all files:

```bash
pnpm format
```

## Features

### Tooling

- **Turborepo**: High-performance build system for JavaScript/TypeScript monorepos
- **TypeScript**: Strict type checking across all packages
- **ESLint**: Code linting with shared configurations
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit linting
- **lint-staged**: Run linters on staged files
- **Vitest**: Fast unit testing framework
- **React Testing Library**: Testing utilities for React components

### Web App Features

The `apps/web` Next.js application includes:

- **Next.js 15**: Latest version with App Router
- **Tailwind CSS v4**: Latest version for styling
- **Example Pages**:
  - `/examples/react` - React patterns and hooks
  - `/examples/next` - Next.js patterns and features
  - `/examples/js-patterns` - JavaScript design patterns

### Shared Packages

- **@repo/ui**: Pre-built React components (Button, Card)
- **@repo/utils**: Utility functions (formatName, toKebabCase, deepClone, debounce)
- **@repo/eslint-config**: ESLint configurations for different project types
- **@repo/typescript-config**: TypeScript configurations for different project types

## Project Structure

```
.
├── apps
│   └── web                    # Next.js application
│       ├── src
│       │   └── app
│       │       ├── examples   # Example pages
│       │       ├── layout.tsx
│       │       └── page.tsx
│       ├── package.json
│       └── tsconfig.json
├── packages
│   ├── eslint-config          # Shared ESLint configs
│   ├── typescript-config      # Shared TypeScript configs
│   ├── ui                     # Shared React components
│   └── utils                  # Shared utilities
├── package.json               # Root package.json
├── pnpm-workspace.yaml        # PNPM workspace configuration
└── turbo.json                 # Turborepo configuration
```

## Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev)
