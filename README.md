# TaskFlow

TaskFlow is an MVP landing page project for a productivity SaaS concept. This repository contains product/design documentation and a Next.js app that implements a dark, minimalist marketing page focused on email conversion.

This project was created as a part of my YouTube tutorial to showcase the use of agent skills. The walkthrough covers:
- The Fundamentals: An explanation of what Agent Skills are and how they function.
- The Ecosystem: Where to find, install, and manage skills using the standard.
- The Workflow: A step-by-step demo of adding an agent skill to a Next.js project.
- The Automation: How to use the create-skill tool to build your own custom skills in seconds.
- The Safety Warning: A critical look at security and how to protect yourself from prompt injection.

## Tutorial Video

[![Tutorial](https://img.youtube.com/vi/tTot7u7Sgtk/maxresdefault.jpg)](https://www.youtube.com/watch?v=tTot7u7Sgtk)

## Features
- Hero section with clear value proposition and primary CTA
- Responsive 3-column feature grid (mobile-first)
- Minimal footer with essential links
- Performance-oriented stack (Next.js App Router)

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Prerequisites
- Node.js 20+
- npm

## Installation
```bash
cd my-app
npm install
```

## Running Locally
```bash
cd my-app
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts
Run these from `my-app/`:
- `npm run dev` — Start the local development server
- `npm run build` — Build the app for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

## Configuration
No environment variables are currently required for the MVP landing page.

## Project Structure
```text
TaskFlow/
├─ docs/
│  ├─ PRD.md
│  └─ design-brief.md
└─ my-app/
   ├─ app/
   ├─ public/
   ├─ package.json
   └─ README.md
```

## Documentation
- Product requirements: `docs/PRD.md`
- UI/UX design brief: `docs/design-brief.md`

## Contributing
1. Create a feature branch.
2. Make focused changes.
3. Run lint before opening a PR:
   ```bash
   cd my-app
   npm run lint
   ```

## License
License is not specified yet.
