# @philiprehberger/next-image-components

[![CI](https://github.com/philiprehberger/next-image-components/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/next-image-components/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/next-image-components.svg)](https://www.npmjs.com/package/@philiprehberger/next-image-components)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/next-image-components)](https://github.com/philiprehberger/next-image-components/commits/main)

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

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/next-image-components)

🐛 [Report issues](https://github.com/philiprehberger/next-image-components/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/next-image-components/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
