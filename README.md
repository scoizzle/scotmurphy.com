# scotmurphy.com

Personal site and blog — built with [Jekyll](https://jekyllrb.com/), hosted on [GitHub Pages](https://pages.github.com/) (free tier).

## Quick start

1. Open in **Dev Container** (VS Code → "Reopen in Container")
2. Run `bundle exec jekyll serve --host 0.0.0.0 --livereload`
3. Open http://localhost:4000

## Adding a post

Create a file in `_posts/` named `YYYY-MM-DD-slug.md` with this front matter:

```markdown
---
title: "Your Title"
date: YYYY-MM-DD
description: "Summary for listings"
tags: [tag1, tag2]
---
```

See [docs/blogging.md](docs/blogging.md) for the full guide.

## Deployment

Pushing to `master` triggers the GitHub Actions workflow (`.github/workflows/jekyll.yml`), which builds and deploys to https://scotmurphy.com.

## Stack

- **Generator:** Jekyll (stock GitHub Pages version)
- **Hosting:** GitHub Pages (free)
- **Domain:** scotmurphy.com (via CNAME)
- **CSS:** Bootstrap 4 + Font Awesome 5
- **Development:** Dev Container (Ruby 3.3)
