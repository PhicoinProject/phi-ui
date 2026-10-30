// Copy non-JS assets into dist/ after unbuild.
//
// unbuild only emits the JS/d.ts graph. The package also ships CSS (globals,
// fonts) and static assets that consumers import by path via the "exports"
// map, so those have to be placed into dist/ explicitly or every
// `@phi/ui/styles/*` import resolves to a missing file at consume time.

import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const src = join(root, 'src')
const dist = join(root, 'dist')

if (!existsSync(dist)) mkdirSync(dist, { recursive: true })

// styles/*.css -> dist/styles/, plus ui/globals.css which exports points at
const pairs = [
  [join(src, 'styles'), join(dist, 'styles')],
  [join(src, 'assets'), join(dist, 'assets')],
  [join(src, 'fonts'), join(dist, 'fonts')],
]

for (const [from, to] of pairs) {
  if (!existsSync(from)) continue
  cpSync(from, to, { recursive: true })
  console.log(`copied ${from.replace(root, '.')} -> ${to.replace(root, '.')}`)
}

// Any CSS colocated under src/ui — including nested component folders.
// globals.css does `@import './components/fit-text/fit-text.css'`, so a
// top-level-only copy leaves the bundler unable to resolve it.
const uiSrc = join(src, 'ui')
const uiDist = join(dist, 'ui')

function copyCssTree(from, to) {
  if (!existsSync(from)) return
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    const s = join(from, entry.name)
    const d = join(to, entry.name)
    if (entry.isDirectory()) {
      copyCssTree(s, d)
    } else if (entry.name.endsWith('.css')) {
      mkdirSync(to, { recursive: true })
      cpSync(s, d)
      console.log(`copied ${s.replace(root, '.')} -> ${d.replace(root, '.')}`)
    }
  }
}

copyCssTree(uiSrc, uiDist)
