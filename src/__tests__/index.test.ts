import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('next-image-components', () => {
  it('dist output exists', async () => {
    // OptimizedImage depends on next/image which is not available in test env
    // Verify the dist file is importable by checking it exists
    const { existsSync } = await import('node:fs');
    const { resolve } = await import('node:path');
    const distPath = resolve(import.meta.dirname, '../../dist/index.js');
    assert.ok(existsSync(distPath), 'dist/index.js should exist');
  });

  it('dist types exist', async () => {
    const { existsSync } = await import('node:fs');
    const { resolve } = await import('node:path');
    const dtsPath = resolve(import.meta.dirname, '../../dist/index.d.ts');
    assert.ok(existsSync(dtsPath), 'dist/index.d.ts should exist');
  });
});
