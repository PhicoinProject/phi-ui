import { defineBuildConfig } from 'unbuild'

// Why this file exists: the published tarball never carried a build config, so
// unbuild inferred entries from the "exports" map and tried to resolve CSS
// paths (./styles/globals.css) as JS modules.
//
// Why the entry list is a directory and not 128 files: listing every module
// as its own entry makes Rollup hold all 128 module graphs in memory at once,
// which OOMs even with --max-old-space-size=4096. mkdist walks the tree and
// transpiles file-by-file instead, preserving the directory layout that the
// "./ui/*", "./hooks/*" and "./utils/*" export patterns depend on, at a
// fraction of the memory.
//
// Trade-off: mkdist transpiles rather than bundles, so output mirrors src
// 1:1 with imports rewritten. That is exactly what a component library wants
// here — consumers bundle it themselves, and per-file output keeps
// tree-shaking intact.

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src',
      outDir: './dist',
      pattern: ['**/*.ts', '**/*.tsx', '!**/*.stories.tsx', '!**/*.d.ts'],
      declaration: true,
      ext: 'js',
loader: 'esbuild',
    },
  ],
  declaration: true,
  clean: true,
  externals: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'three',
    '@react-three/fiber',
    '@observablehq/plot',
    'gsap',
    'leva',
    'motion',
  ],
  failOnWarn: false,
})
