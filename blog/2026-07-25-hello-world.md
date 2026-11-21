---
title: "Hello, world"
description: "How this blog works — and how to add a new post."
slug: hello-world
---

This is the first post, and it doubles as a note-to-self on how the blog works.

## Adding a new post

Create a markdown file in `blog/` named `YYYY-MM-DD-your-title.md`, starting
with this front matter:

```yaml
---
title: "Your title"
description: "One line shown in the list on the homepage."
slug: your-title
---
```

Everything below the front matter is regular markdown — headings, lists, links,
images, and code blocks all work:

```python
def greet(name):
    return f"Hello, {name}!"
```

> Push to `main`, and GitHub Actions rebuilds the site in about a minute.
> The post appears on the homepage automatically.
