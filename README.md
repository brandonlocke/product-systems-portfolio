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

The homepage features Rewards, Declined Services, and booking recovery. Each has a distinct reconstructed product model, also visible near the start of its case study. Lifecycle infrastructure and customer feedback remain available as supporting case studies. Case content lives in `app/work/cases.ts`; the explanatory visuals live in `app/components/CaseVisual.tsx`.

See [DESIGN.md](DESIGN.md) for the attention and clarity principles that guide content, hierarchy, accessibility, and evidence claims.

After building, run the rendered-route checks with `node --test tests/rendered-html.test.mjs`.
