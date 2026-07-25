# tianchen

Personal website, published at [https://wutianchen.github.io/tianchen/](https://wutianchen.github.io/tianchen/)
via GitHub Pages (deploy from branch `main`, root folder, built with Jekyll).

- `index.html` — single-page site (edit the `[bracketed placeholders]` with real content)
- `styles.css` — styling
- `_posts/` — blog posts as markdown
- `_layouts/post.html` — template that wraps each post
- `_data/recommendations.yml` — videos and books shown in the Recommendations section
- `_data/gallery.yml` — images and captions shown in the Gallery section
- `assets/gallery/` — gallery images
- `_config.yml` — Jekyll settings (site title, base URL, post permalinks)

## Writing a blog post

Add a markdown file to `_posts/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
layout: post
title: "Your title"
description: "One line shown in the list on the homepage."
---

Your content in markdown.
```

Push to `main` — GitHub Pages rebuilds in about a minute. The post is published
at `/blog/your-title/` and listed automatically in the homepage Blog section.

## Adding a recommendation

Append an entry to `_data/recommendations.yml`:

```yaml
- type: video   # or book
  title: "Title"
  url: "https://..."
  creator: "Channel, speaker, or author"   # optional
  note: "One-liner on why it's worth it."  # optional
```

## Adding a gallery item

Drop the image into `assets/gallery/` and append to `_data/gallery.yml`:

```yaml
- image: /assets/gallery/my-chart.png
  title: "Observation title"
  caption: "What the data shows, and the idea it supports."
  alt: "Description for screen readers"
```

## Local preview

The homepage and posts need Jekyll to render (`gem install jekyll && jekyll serve`),
since the post list and markdown conversion happen at build time.
