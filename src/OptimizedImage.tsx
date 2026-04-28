import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

export interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  /** Fallback image src when the primary image fails to load */
  fallbackSrc?: string;
  /** Show a skeleton pulse animation while loading (default: true) */
  showSkeleton?: boolean;
  /** CSS class for the outer container */
  containerClassName?: string;
  /**
   * Base64 data URL used as a blur-up placeholder. When provided, the
   * underlying `next/image` is rendered with `placeholder="blur"` and
   * the skeleton overlay is suppressed unless `showSkeleton` is forced on.
   * Callers may still override `placeholder` explicitly via props.
   */
  blurDataURL?: string;
}

/**
 * Next.js Image wrapper with skeleton loading animation, blur-up placeholder
 * support, and error fallback. Fades in the image once loaded and falls back
 * to a placeholder on error.
 */
export function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.svg',
  showSkeleton,
  className,
  containerClassName,
  blurDataURL,
  placeholder,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageSrc = hasError ? fallbackSrc : src;

  // If a blurDataURL is provided and the caller did not override placeholder,
  // render with placeholder="blur" and disable the skeleton overlay by default.
  const resolvedPlaceholder = placeholder ?? (blurDataURL ? 'blur' : undefined);
  const hasBlur = resolvedPlaceholder === 'blur' && Boolean(blurDataURL);
  const skeletonEnabled = showSkeleton ?? !hasBlur;

  return (
    <div className={clsx('relative overflow-hidden', containerClassName)}>
      {skeletonEnabled && isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          aria-hidden="true"
        />
      )}
      <Image
        src={imageSrc}
        alt={alt}
        className={clsx(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        {...(resolvedPlaceholder ? { placeholder: resolvedPlaceholder } : {})}
        {...(blurDataURL ? { blurDataURL } : {})}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
}
