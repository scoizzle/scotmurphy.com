# Blogging Guide

How to write and publish a new blog post on scotmurphy.com.

## Quick start

1. Create a file in `_posts/` named `YYYY-MM-DD-your-slug.md`
2. Add YAML front matter (see below)
3. Write the body in Markdown
4. Commit and push to `master` — the GitHub Actions workflow deploys automatically

## Front matter template

```markdown
---
title: "Your Post Title"
date: YYYY-MM-DD
description: "One-line summary for listings and social previews."
tags: [tag1, tag2]
---
```

- `title` — Required. The full post title.
- `date` — Required. ISO date. Controls sort order and the URL.
- `description` — Recommended. Shown on the home page and in social cards.
- `tags` — Optional. List of tags displayed as badges on the post.

## Adding images

Place images in `src/img/` and reference them with relative paths:

```markdown
![Alt text]({{ site.baseurl }}/src/img/your-image.png)
```

Or use `/src/img/` directly (works because the site is at the root domain):

```markdown
![Alt text](/src/img/your-image.png)
```

## Drafts

To draft a post without publishing it:
- Add `published: false` to the front matter
- Or keep the file outside `_posts/` until ready

Note: `published: false` works on stock Jekyll (no plugins needed).

## Local preview with Dev Container

This project includes a Dev Container configuration for consistent local development:

1. **VS Code**: Open the repo and run **"Reopen in Container"** (requires the Dev Containers extension)
2. The container automatically installs dependencies and exposes Jekyll on port 4000
3. Run the server:

```bash
bundle exec jekyll serve --host 0.0.0.0 --livereload
```

4. Open http://localhost:4000 in your browser

### Manual local preview (without Docker)

If you prefer to run locally without Docker, you need Ruby 3.x + Bundler:

```bash
gem install github-pages webrick
bundle install
bundle exec jekyll serve
```

## Code blocks

Use standard fenced code blocks with optional language tag:

````markdown
```csharp
public class Foo { }
```
````

Syntax highlighting is handled by Jekyll's default highlighter (Rouge, included with GitHub Pages).

## Constraints

- **$0 stack** — everything runs on GitHub Pages free tier
- **No plugins** beyond what `github-pages` gem includes
- **Markdown only** — no HTML CMS, no database

## Custom domain

The site uses `scotmurphy.com` via a `CNAME` file in the repo root. DNS must point `scotmurphy.com` to GitHub's Pages IPs (see GitHub docs for current addresses) or use a `CNAME` record to `scoizzle.github.io`.

## Deploy pipeline

Pushing to `master` triggers `.github/workflows/jekyll.yml`:
1. Checks out the repo
2. Installs Ruby + gems via Bundler
3. Builds the Jekyll site
4. Uploads the `_site/` artifact
5. Deploys to GitHub Pages

The site is available at https://scotmurphy.com within a minute or two after the workflow completes.
