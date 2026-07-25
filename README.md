# tianchen

Personal website, published at [https://wutianchen.github.io/tianchen/](https://wutianchen.github.io/tianchen/)
via GitHub Pages (deploy from branch `main`, root folder, built with Jekyll).

- `index.html` — single-page site (edit the `[bracketed placeholders]` with real content)
- `styles.css` — styling
- `_posts/` — blog posts as markdown
- `_layouts/post.html` — template that wraps each post
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

## Local preview

The homepage and posts need Jekyll to render (`gem install jekyll && jekyll serve`),
since the post list and markdown conversion happen at build time.
