# @ellis/eslint-config

A comprehensive ESLint configuration package with built-in support for TypeScript, React, Next.js, and Prettier.

## Features

- **Base ESLint Rules** - Foundation linting rules for all projects
- **TypeScript Support** - Full TypeScript configuration with type-aware rules
- **React & Hooks** - React and React Hooks best practices
- **Next.js Integration** - Next.js-specific configurations
- **Prettier Integration** - Seamless code formatting with Prettier

## Installation

```bash
npm install --save-dev @ellis/eslint-config eslint prettier
```

Or with pnpm:

```bash
pnpm add -D @ellis/eslint-config eslint prettier
```

## Usage

Create an `eslint.config.js` file in your project root:

```javascript
import config from '@ellis/eslint-config';

export default config;
```

## Configuration

This package exports a flat ESLint configuration that includes:

- Base linting rules
- TypeScript and type-aware rules
- React and React Hooks configuration
- Next.js specific settings
- Prettier formatting rules

### Peer Dependencies

Ensure you have the required peer dependencies installed:

- eslint >= 9
- @typescript-eslint/parser >= 8
- @typescript-eslint/eslint-plugin >= 8
- eslint-config-prettier >= 9
- eslint-plugin-prettier >= 5
- eslint-plugin-react >= 7
- eslint-plugin-react-hooks >= 4
- eslint-plugin-jsx-a11y >= 6
- eslint-plugin-import >= 2
- eslint-config-next >= 14
- prettier >= 3

## License

MIT
