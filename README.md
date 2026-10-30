# @phi/ui

The React design system behind the Phi Agent web dashboard: components, hooks, utilities, overlays and self-hosted brand fonts in the Phi visual identity.

Developed by Phi Lab Foundation. Derived from `@nous-research/ui` 0.18.2 by Nous Research, used under the MIT License, with the original copyright kept.

## With Phi Agent

Clone this repository next to `phi-agent` and build it once. The dashboard picks it up from `../phi-ui`:

```sh
git clone https://github.com/PhicoinProject/phi-ui.git
cd phi-ui
npm install --ignore-scripts
npm run build
```

Full install steps are in the [Phi Agent README](https://github.com/PhicoinProject/phi-agent#install).

## In your own app

Add it as a local dependency:

```json
"dependencies": {
  "@phi/ui": "file:../phi-ui"
}
```

Import the styles in your root stylesheet. `fonts.css` registers the brand fonts and is optional:

```css
@import 'tailwindcss';
@import '@phi/ui/styles/fonts.css';
@import '@phi/ui/styles/globals.css';
```

Everything is exported from the package root:

```tsx
import { Button, Grid } from '@phi/ui'
```

## Development

```sh
npm run build        # compile to dist/ and copy styles and fonts
npm run type-check   # TypeScript check
```

## License

MIT. Copyright © 2026 Phi Lab Foundation. Derived from `@nous-research/ui` 0.18.2 by Nous Research. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
