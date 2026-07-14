<h1 align="center">readme-skill</h1>

<p align="center">
  <strong>A Claude Code skill that writes READMEs that look hand-crafted, not generated.</strong>
</p>

<p align="center">
  <a href="https://skills.sh/evol1228/readme-skill"><img src="https://skills.sh/b/evol1228/readme-skill" alt="skills.sh" /></a>
</p>

<p align="center">
  <img src="assets/banner.png" alt="readme-skill" width="800" />
</p>

---

## What is readme-skill?

readme-skill is an agent skill for [Claude Code](https://claude.com/claude-code) that teaches the model how to design and write professional README.md files. Instead of producing the usual AI-generated page — badge walls, emoji headings, invented commands — it reads the actual repo first (manifest, scripts, `.env.example`, LICENSE, entry points) and writes a page where every claim is verifiable and every command works when copy-pasted.

It triggers automatically on asks like "add a readme", "document this project", "make my repo look presentable", or "my readme sucks".

## What's in this repo

- **`skills/readme-skill/SKILL.md`** — the skill itself: the section spine, per-project-type adaptations (app, library, CLI), and the style rules with the reasoning behind each one
- **`skills/readme-skill/references/example.md`** — the gold-standard example README the skill is modeled on ([Git City](https://github.com/srizzon/git-city)), which the skill reads before writing anything

## Installation

The quickest way is the [skills](https://github.com/vercel-labs/skills) CLI:

```bash
# Install for the current project
npx skills add evol1228/readme-skill

# ...or globally for all projects
npx skills add evol1228/readme-skill -g
```

This repo is also directly npx-runnable, which installs into `~/.claude/skills`:

```bash
npx github:evol1228/readme-skill
```

Or do it manually:

```bash
# Clone the repo
git clone https://github.com/evol1228/readme-skill.git

# Copy the skill into your Claude Code skills folder
cp -r readme-skill/skills/readme-skill ~/.claude/skills/
```

Claude Code picks it up automatically — next time you ask for a README in any project, the skill kicks in.

## How it works

The skill enforces a three-step process:

1. **Read the project first.** The real name, scripts, ports, env vars, and license come from the repo, never from the prompt. Facts that can't be verified become clearly marked `<!-- TODO -->` placeholders instead of inventions.
2. **Follow the spine.** Centered HTML hero → "What is X?" → Features → optional mechanics table → Tech Stack → Getting Started → deeper setup → License → centered footer. Sections that don't apply to the project type get dropped, never padded.
3. **Apply the style rules.** No badge walls, no emoji in headings, concrete claims over superlatives, bold-label bullets everywhere, prose between code blocks.

The spine also reshapes itself per project type — a full setup walkthrough for an app, `Installation`/`Usage`/API overview for a library, and usage-first with a flags table for a CLI tool.

## What the output looks like

A README produced by this skill opens like this (from the bundled example):

```html
<h1 align="center">Git City</h1>

<p align="center">
  <strong>Your GitHub profile as a 3D pixel art building in an interactive city.</strong>
</p>

<p align="center">
  <a href="https://thegitcity.com">thegitcity.com</a>
</p>

---
```

Features use the bold-label pattern:

```markdown
- **3D Pixel Art Buildings** — Each GitHub user becomes a building with height
  based on contributions, width based on repos, and lit windows representing activity
- **Free Flight Mode** — Fly through the city with smooth camera controls
```

And mechanics worth explaining get a table instead of prose:

| Metric        | Affects           | Example                          |
|---------------|-------------------|----------------------------------|
| Contributions | Building height   | 1,000 commits → taller building  |
| Public repos  | Building width    | More repos → wider base          |
| Stars         | Window brightness | More stars → more lit windows    |

See [`skills/readme-skill/references/example.md`](skills/readme-skill/references/example.md) for the full gold-standard page — roughly 170 lines covering setup, local backend, env vars with "where to find it" instructions, and license.

---

<p align="center">
  Built by <a href="https://github.com/evol1228">@evol1228</a>
</p>
