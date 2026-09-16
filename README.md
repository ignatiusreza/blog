# A Rather Perpendicular View

The personal blog/playground of Ignatius Reza, published at
[erauqssidlroweht.com](https://erauqssidlroweht.com). Built with
[Gatsby](https://www.gatsbyjs.com/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting started

Requires Node 20 or newer (see `.nvmrc`).

```sh
npm install
npm run develop
```

The site is then served at `http://localhost:8000`, with the GraphQL explorer at
`http://localhost:8000/___graphql`.

| Script            | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm run develop` | Start the dev server with hot reloading  |
| `npm run build`   | Build the production site into `public/` |
| `npm run serve`   | Serve the last production build locally  |
| `npm run clean`   | Delete `.cache/` and `public/`           |
| `npm run lint`    | Run ESLint                               |
| `npm run format`  | Rewrite files with Prettier              |
| `npm test`        | Lint and check formatting                |

## Writing

Articles are markdown files under `src/pages/articles/<year>/<month>/<day>/<slug>.md`.
`gatsby-node.js` reads the date and slug straight out of that path, so no `date`
field is needed in the frontmatter:

```markdown
---
title: Here We Go!
keywords: guide, ruby, rails, android, life, blog, article
description: |
  Welcome! Read more to find out what you can expect to find here in the future!
tags: news, update
---
```

Each article is published at `/articles/<slug>`, listed on the home page newest
first, and included in the feed at `/articles.atom`.

Two files sit outside that structure: `src/pages/articles/draft.md` is a
scratchpad that is never published, and `src/pages/now.md` backs the
[/now](https://erauqssidlroweht.com/now) page.

## Layout

```
.
├── plugins/gatsby-remark-external-links   local remark plugin: open outbound links in a new tab
├── src
│   ├── components                         header, footer, author, article list, SEO
│   ├── hooks                              site metadata and theme access
│   ├── images                             avatar
│   ├── pages                              home, 404, and all markdown content
│   ├── styles                             Tailwind entry point and custom CSS layers
│   └── templates                          article and /now page templates
├── gatsby-browser.js                      loads the global stylesheet
├── gatsby-config.js                       site metadata and plugins
├── gatsby-node.js                         derives dates/slugs and creates pages
└── gatsby-ssr.js                          applies the saved theme before first paint
```

## Theming

The theme lives in a `data-theme` attribute on `<html>`. A small inline script in
`gatsby-ssr.js` applies the visitor's saved choice (or their
`prefers-color-scheme`) before the body paints, so there is no flash of the wrong
theme and the server-rendered markup stays identical to what React hydrates. The
switch in the header reads and writes it through `src/hooks/use-theme.js`.

## Analytics

Analytics are off unless a Google Analytics 4 measurement id is present in the
build environment:

```sh
GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build
```

The older `UA_ID` variable is still read as a fallback, but Universal Analytics
properties no longer collect data — move the deployment to a GA4 id.

## License

[MIT](LICENSE)
