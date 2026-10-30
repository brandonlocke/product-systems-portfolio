# Brandon Locke — Product Portfolio

Portfolio for Brandon Locke, a lifecycle and growth product leader. The site is built with React, Vinext, and Cloudflare Workers.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Cloudflare deployment

The repository is ready for Cloudflare Workers Builds. Use `npm run deploy` as the deploy command, with Node.js 22 or newer.

The custom domain is `brandonlocke.co`.

## Content and design

The homepage features Rewards, Declined Services, and booking recovery. Each has an interactive, illustrated product reconstruction, also visible near the start of its case study. Lifecycle infrastructure and customer feedback remain available as supporting case studies with their own demos. Case content lives in `app/work/cases.ts`; demo behavior lives in `app/components/ProductDemo.tsx`, SVG artwork in `app/components/DemoArt.tsx`, and demo styles in `app/product-demo.css`.

The demonstrations use explicitly illustrative data and local state. Visitors can apply sample points, select a sample shop, retry confirmation, interpret an event, or route a sample feedback response. Playback is opt-in, pauses offscreen, and respects reduced-motion preferences. Manrope is self-hosted through Fontsource, with its license in `public/manrope-license.txt`.

See [DESIGN.md](DESIGN.md) for the attention and clarity principles that guide content, hierarchy, accessibility, and evidence claims.

After building, run the rendered-route checks with `node --test tests/rendered-html.test.mjs`.

The homepage and case studies share a social image through `app/social-preview.ts`. Regenerate it with `python scripts/generate_social_preview.py` after installing Pillow and `fonttools[woff]`. When changing its design, use a new image filename in the shared metadata so link-preview services can fetch the new asset. The unversioned image also stays current for older metadata references.
