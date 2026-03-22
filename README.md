# @philiprehberger/next-image-components

[![CI](https://github.com/philiprehberger/ts-next-image-components/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-next-image-components/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/next-image-components.svg)](https://www.npmjs.com/package/@philiprehberger/next-image-components)
[![License](https://img.shields.io/github/license/philiprehberger/ts-next-image-components)](LICENSE)

Next.js Image wrappers with skeleton loading and error fallback

## Installation

```bash
npm install @philiprehberger/next-image-components clsx
```

## Usage

### `OptimizedImage`

Drop-in replacement for `next/image` with:
- Skeleton pulse animation while loading
- Fade-in transition on load
- Automatic fallback on error

```tsx
import { OptimizedImage } from '@philiprehberger/next-image-components';

<OptimizedImage
  src="/photos/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
  fallbackSrc="/images/placeholder.svg"
/>
```


## API

| Method | Description |
|--------|-------------|
| `OptimizedImage` | Next.js Image wrapper with skeleton loading animation, fade-in transition, and error fallback |

## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
