# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A digital publication (book) exploring how ML concepts of underfitting and overfitting apply to software engineering and organizational design. Published via **GitHub Pages with Jekyll** at https://klauseduard.github.io/under-over-models/.

- **Edition 2026** is the current working edition (branch: `edition-2026`)
- **Edition 2025** is preserved as a historical snapshot (tag: `release-2025`, branch: `release-2025-branch`)
- Chapters 1–6 are fully edited; chapters 7–10 are in draft/revision

## Build & Publishing

There is no local build step required. Pushing to GitHub triggers the Jekyll build automatically.

To preview locally (optional): `bundle exec jekyll serve`

Configuration is in `_config.yml` (Kramdown markdown, MathJax math engine, jekyll-theme-minimal theme).

## Repository Structure

- `chapters/` — 10 Markdown chapters (01 through 10), the core content
- `images/` — 80+ SVG visualizations referenced by chapters
- `html/` — 16 standalone interactive HTML tools (calculators, simulations)
- `assets/css/style.scss` — Custom stylesheet
- `assets/js/svg-interactivity.js` — SVG interaction logic
- `_layouts/default.html` — Jekyll layout with sidebar navigation
- `index.md` — Homepage with chapter listing
- `visualizations.md` — Directory of interactive tools
- `REVIEW_PROMPT.md` — Reusable prompt template for full-publication review
- `release.sh` — Script for tagging releases and creating edition branches

## Markdown Conventions

Chapters use Kramdown with these patterns:

**Section anchors:**
```markdown
## <a id="section-id"></a>1.1 Section Title
```

**Figures:**
```markdown
<figure>
  <img src="../images/filename.svg" alt="description" width="700" />
  <figcaption>Figure X.Y: Caption text</figcaption>
</figure>
```

**Table of contents** at the top of each chapter linking to section anchors.

**Citations** are inline hyperlinks to external sources.

**Math** uses MathJax notation (rendered by Kramdown's MathJax engine).

## Git Workflow

- `main` — stable published version
- `edition-2026` — current working branch
- `release-2025-branch` / `release-2025` tag — historical snapshot
- Feature branches merge into `edition-2026`, which merges into `main` for publication

## Editorial Process

- Improvements follow a phase-based approach (foundation → balanced perspective → governance → integration → visual enhancement)
- `REVIEW_PROMPT.md` provides a structured prompt for full-publication critical review
- Chapter status indicators: ✅ = complete, 🚧 = draft

## SVG Naming Conventions

Images follow descriptive prefixed naming: `complexity-*.svg`, `ai-*.svg`, `org-*.svg`, `estimation-*.svg`, etc. Names correspond to chapter topics.
