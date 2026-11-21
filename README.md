# tianchen

Personal website, published at [https://wutianchen.github.io/tianchen/](https://wutianchen.github.io/tianchen/)
via GitHub Pages. Built with [Docusaurus](https://docusaurus.io/) and deployed by
`.github/workflows/deploy.yml` on every push to `main`.

- `src/pages/index.js` — homepage (edit the `[bracketed placeholders]` with real content)
- `src/pages/index.module.css` — homepage styling
- `src/css/custom.css` — site-wide theme colours
- `blog/` — blog posts as markdown
- `src/data/recommendations.js` — videos and books shown in the Recommendations section
- `src/data/gallery.js` — images and captions shown in the Gallery section
- `static/img/gallery/` — gallery images
- `plugins/recent-posts.js` — feeds the post list on the homepage
- `docusaurus.config.js` — site settings (title, base URL, navbar, footer)
- `notes/` — drafts and ideas, not published

## Writing a blog post

Add a markdown file to `blog/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
title: "Your title"
description: "One line shown in the list on the homepage."
slug: your-title
---

Your content in markdown.
```

Push to `main` — GitHub Actions rebuilds in about a minute. The post is published
at `/blog/your-title/`, listed on the blog page, and listed automatically in the
homepage Blog section. Add `draft: true` to the front matter to keep it unpublished.

## Adding a recommendation

Append an entry to `src/data/recommendations.js`:

```js
{
  type: 'video', // or 'book'
  title: 'Title',
  url: 'https://...',
  creator: 'Channel, speaker, or author', // optional
  note: "One-liner on why it's worth it.", // optional
},
```

## Adding a gallery item

Drop the image into `static/img/gallery/` and append to `src/data/gallery.js`:

```js
{
  image: '/img/gallery/my-chart.png',
  title: 'Observation title',
  caption: 'What the data shows, and the idea it supports.',
  alt: 'Description for screen readers',
},
```

## Local preview

Needs Node.js 20 or newer.

```sh
task start   # live-reload dev server at http://localhost:3000/tianchen/
task build   # production build into build/, same as CI
task serve   # build, then serve the production site
```

Without Task: `npm ci`, then `npm start` / `npm run build`.
