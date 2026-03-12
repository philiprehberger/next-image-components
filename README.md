# @philiprehberger/ts-next-image-components

Next.js Image wrappers with skeleton loading and error fallback.

## Installation

```bash
npm install @philiprehberger/ts-next-image-components clsx
```

## Components

### `OptimizedImage`

Drop-in replacement for `next/image` with:
- Skeleton pulse animation while loading
- Fade-in transition on load
- Automatic fallback on error

```tsx
import { OptimizedImage } from '@philiprehberger/ts-next-image-components';

<OptimizedImage
  src="/photos/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
  fallbackSrc="/images/placeholder.svg"
/>
```

## License

MIT
