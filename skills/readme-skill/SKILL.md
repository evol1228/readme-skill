---
name: readme-skill
description: Design and write beautiful, professional README.md files for any repo or project. Use this whenever the user asks to create, write, improve, redesign, or polish a README or project documentation page — including casual asks like "add a readme", "document this project", "make my repo look presentable", "my readme sucks", or when they're about to publish/open-source a project that lacks a proper README.
---

# readme-skill — README design

You are writing the front door of a project. Most visitors decide in ten seconds whether a repo is worth their time, and they decide from the README. The goal is a page that looks hand-crafted, reads effortlessly, and where every command actually works when copy-pasted.

`references/example.md` is the gold-standard example this skill is modeled on (Git City). Read it before writing — the target is exactly that register: clean, confident, concrete, zero fluff.

## Step 1: Read the project before writing a word

Never write from the user's prompt alone. The README's credibility comes from being *true*, so inventory the repo first:

- **Manifest** (`package.json` / `pyproject.toml` / `Cargo.toml` / `go.mod` / Makefile) — the real name, scripts, dependencies, entry points / bin names
- **`.env.example`** or config samples — the real environment variable names
- **`LICENSE`** — the actual license (don't guess from vibes)
- **Existing README** — keep anything the user earned (real screenshots, live URLs, meaningful links)
- **Assets** — logo, og-image, screenshots in `public/`, `assets/`, `docs/`
- **Source entry point** — read enough to describe honestly what the project does; note the real port for web apps, the real command name for CLIs

Every claim must be traceable to something in the repo. If you can't verify a fact (live site URL, author's social handle, screenshots), don't invent it — ask the user, or leave a clearly marked HTML comment placeholder the way the example does:

```html
<!-- TODO: Add screenshots -->
<!-- ![City Overview](assets/screenshot-city.png) -->
```

## Step 2: The spine

Top to bottom. Drop sections that don't apply to the project type (see Step 3) — never pad.

**1. Centered hero** — HTML, because markdown can't center. Name, one-sentence tagline in `<strong>`, link to the live thing (site / docs / npm page) if one exists, hero image if the repo has one (`width="800"`), then a `---` rule:

```html
<h1 align="center">Project Name</h1>

<p align="center">
  <strong>One sentence that sells what it is and why it's cool.</strong>
</p>

<p align="center">
  <a href="https://example.com">example.com</a>
</p>

<p align="center">
  <img src="public/og-image.png" alt="Project Name" width="800" />
</p>

---
```

**2. `## What is X?`** — 2–4 plain-language sentences. What it does, what makes it interesting, why the reader should care. No jargon walls, no "In today's fast-paced world".

**3. `## Features`** — bulleted, each one `**Feature Name** — description` (bold lead-in, em-dash, one line of concrete detail). Only features that exist in the code.

**4. Mechanics table (optional)** — when the project has a mapping or rules worth explaining (input → effect, option → behavior, metric → result), a small table beats prose:

| Metric        | Affects         | Example                         |
|---------------|-----------------|---------------------------------|
| Contributions | Building height | 1,000 commits → taller building |

**5. `## Tech Stack`** — `**Category:** [Name](https://link)` bullets, versions where they matter. Link every technology. Skip entirely for small libraries/CLIs where the stack is obvious.

**6. `## Getting Started`** — one fenced `bash` block that narrates with `#` comments: clone, install, configure, run. Where commands differ per OS, show all variants (Linux/macOS `cp`, Windows `copy`, PowerShell `Copy-Item`). After the block, one line of prose: "Open [http://localhost:3000](http://localhost:3000) to …" — with the *real* port from the code.

**7. Deeper setup (optional)** — env vars, local database, OAuth, etc. The crucial habit: for every secret or env value, tell the reader *where to find it* ("Open your Supabase dashboard, then `Project Settings -> API`"), not just that it's required. Assume the reader has never used these services.

**8. `## License`** — link the LICENSE file plus one plain-English sentence about what it means: `[AGPL-3.0](LICENSE) — You can use and modify X, but any public deployment must share the source code.`

**9. Centered footer** — after a `---`. Default credit is **@evol1228** with the GitHub link, exactly like this:

```html
<p align="center">
  Built by <a href="https://github.com/evol1228">@evol1228</a>
</p>
```

Use a different handle only if the user asks for one or the project's existing README already credits someone else.

## Step 3: Adapt to the project type

The spine above is written for an app/service. Reshape it for what the project actually is:

- **App / web service** — full spine as written.
- **Library / package** — hero → What is → `## Installation` (per package manager: npm/pip/cargo) → `## Usage` with a short, real code example that demonstrates the core value → API overview (table of functions or link to docs) → License. No Tech Stack, no dev-server instructions (put contributor setup in a small `## Development` section at the end if the user wants it).
- **CLI tool** — hero → What is → Installation → `## Usage` with real invocations and example output → options/flags table → License. The Usage section is the star: show the command doing its job.

A tiny utility doesn't need 170 lines. Match the README's length to the project's surface area — comprehensive for an app with setup complexity, compact for a 3-function library.

## Style rules (and why)

- **No badge walls.** Rows of shields.io badges read as template filler. The example has zero. Keep a badge only if the user already has one that carries real information they care about (CI status on an active project).
- **No emoji in headings.** `## 🚀 Getting Started` is the fastest way to look AI-generated. Plain headings look professional.
- **Commands must be real.** Every command comes from the manifest/scripts, every port from the code, every env var from `.env.example`. A README that fails on `npm run dev` loses the reader permanently.
- **Concrete beats superlative.** "Renders 10,000 buildings with instanced meshes" beats "blazingly fast". Never claim performance you can't point to.
- **Scannable.** Short paragraphs, bold lead-ins, tables for mappings. The reader skims first, reads second.
- **Bold-label bullet pattern everywhere** — features (`**Name** — desc`), tech stack (`**Category:** [Name](link)`), env vars. Consistency makes the page feel designed.
- **Prose between code blocks.** Never stack two fenced blocks back-to-back; one sentence of connective tissue ("Then point `.env.local` at the printed values:").

## Voice

Confident and direct, like a developer proud of their work but not selling anything. The tagline is the one line of permitted flair — make it genuinely good ("Your GitHub profile as a 3D pixel art building in an interactive city."). Everything after it earns trust by being specific and true.
