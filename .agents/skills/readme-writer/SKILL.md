---
name: readme-writer
description: Write and improve README files for repositories, packages, apps, and libraries. Use this skill whenever the user asks for a README, project documentation, setup docs, usage docs, or wants existing README content rewritten, even if they do not explicitly mention "README".
metadata:
  author: local
  version: "1.0.0"
---

# README Writer

Create clear, practical README files that help a new user understand, install, run, and use a project quickly.

## When to Use

Apply this skill when the user asks to:
- create a new README
- rewrite or improve an existing README
- document setup, usage, commands, scripts, or environment variables
- add project overview, features, examples, troubleshooting, or contribution docs

If context is missing, inspect the repository first (scripts, frameworks, package manager, run/build/test commands) before writing.

## Core Workflow

1. Identify project type and purpose from source files (`package.json`, `pyproject.toml`, `Cargo.toml`, framework config, main entrypoints).
2. Extract runnable commands from real project config.
3. Prefer concise, copy-paste-ready instructions over long explanations.
4. Document only what can be supported by repository evidence.
5. If uncertain, state assumptions explicitly as short notes.

## README Structure

Use this structure by default (omit irrelevant sections):

```markdown
# <Project Name>

<1-2 sentence summary>

## Features
- ...

## Tech Stack
- ...

## Prerequisites
- ...

## Installation
```bash
<install commands>
```

## Configuration
<required env vars and setup>

## Running Locally
```bash
<dev/run commands>
```

## Scripts
- `<script>`: <what it does>

## Usage
<minimal example or workflow>

## Project Structure
<short tree or key directories>

## Troubleshooting
- ...

## Contributing
<brief contributor workflow>

## License
<license or TODO if unknown>
```

## Writing Rules

- Keep language direct and practical.
- Prefer bullets and short paragraphs.
- Use exact commands from repository config.
- Use platform-appropriate command examples where needed.
- Avoid marketing language and unverifiable claims.
- Do not invent badges, metrics, or features.
- If command variants are possible, provide the detected default first.

## Adapting by Project Type

### Node / Next.js / React
- Pull commands from `scripts` in `package.json`.
- Include package manager used (`npm`, `pnpm`, `yarn`, or `bun`) based on lockfiles.
- Mention build/start/dev/lint/test commands if present.

### Python
- Include environment setup and dependency install path (`requirements.txt`, `pyproject.toml`, Poetry, etc.).
- Provide run/test commands actually supported by the repo.

### Library Package
- Include install + import/use example.
- Add API usage snippet for the most important entrypoint.

### CLI Tool
- Include installation and command synopsis.
- Add practical examples for the most common commands/options.

## Quality Checklist

Before finalizing, verify:
- README reflects current repository structure and commands.
- New user can go from clone to run with minimal ambiguity.
- Sections are ordered logically and unnecessary sections are removed.
- Markdown renders cleanly (headings, code blocks, lists).
- No unresolved placeholders unless explicitly marked as TODO.

## Output Modes

If user asks for a full rewrite: provide a complete replacement README.
If user asks for targeted edits: modify only requested sections and preserve the rest.
If user asks for “minimal” or “MVP”: include only essentials (Overview, Install, Run, Usage).
