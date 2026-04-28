# @philiprehberger/next-image-components

[![CI](https://github.com/philiprehberger/ts-next-image-components/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-next-image-components/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/next-image-components.svg)](https://www.npmjs.com/package/@philiprehberger/next-image-components)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-next-image-components)](https://github.com/philiprehberger/ts-next-image-components/commits/main)

Next.js Image wrappers with skeleton loading, blur-up placeholders, and error fallback

## Installation

```bash
npm install @philiprehberger/next-image-components clsx
```

## Usage

```ts
import { OptimizedImage } from '@philiprehberger/next-image-components';

<OptimizedImage
  src="/photos/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
/>
```

### Skeleton + error fallback

```ts
import { OptimizedImage } from '@philiprehberger/next-image-components';

<OptimizedImage
  src="/photos/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
  fallbackSrc="/images/placeholder.svg"
/>
```

### Blur-up placeholder

Provide a base64 data URL via `blurDataURL` to render a low-resolution
preview while the full image loads. The skeleton overlay is suppressed
automatically when a blur preview is supplied.

```ts
import { OptimizedImage } from '@philiprehberger/next-image-components';

<OptimizedImage
  src="/photos/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>
```

To force the skeleton on top of the blur, pass `showSkeleton`:

```ts
<OptimizedImage
  src="/photos/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
  showSkeleton
/>
```

## API

### `OptimizedImage`

Drop-in replacement for `next/image` with skeleton, blur-up, fade-in, and error fallback.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `ImageProps['src']` | required | Source URL or imported image |
| `alt` | `string` | required | Alt text for the image |
| `fallbackSrc` | `string` | `/images/placeholder.svg` | Image to render when the primary src fails |
| `showSkeleton` | `boolean` | `true` (no blur) / `false` (with blur) | Show a pulse skeleton while loading |
| `containerClassName` | `string` | `undefined` | CSS class on the outer wrapping `div` |
| `blurDataURL` | `string` | `undefined` | Base64 data URL used as a blur-up placeholder |
| `placeholder` | `'blur' \| 'empty' \| string` | `'blur'` if `blurDataURL` is set, else inherited from `next/image` | Override `next/image`'s placeholder mode |
| ...rest | `ImageProps` | — | Any other prop accepted by `next/image` |

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-next-image-components)

🐛 [Report issues](https://github.com/philiprehberger/ts-next-image-components/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-next-image-components/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
