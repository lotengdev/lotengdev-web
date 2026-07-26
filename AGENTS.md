# AGENTS.md - Guidelines for AI Agents (Lotengdev Web)

Welcome to the **Lotengdev Web** codebase! This document provides comprehensive context, architectural patterns, coding guidelines, and custom skill workflows to assist AI agents (and human contributors) in developing, extending, and maintaining this project efficiently.

---

## 📌 Project Overview

- **Project**: Lotengdev Website (Lombok Tengah Developer Community)
- **Repository**: `lotengdev-web`
- **Primary Goal**: Showcase community events, past/upcoming speakers, about info, WFC (Work From Cafe) spots, and contact channels for developers in Central Lombok (Lombok Tengah).

---

## 🛠️ Technology Stack

- **Core**: React 18 (with `@vitejs/plugin-react-swc`)
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3, PostCSS, Autoprefixer
- **Animations**: Framer Motion
- **Icons**: React Icons (`react-icons/fa6`)
- **Routing**: React Router DOM (v7)
- **Package Manager**: `pnpm`

---

## 📂 Project Structure

```text
lotengdev-web/
├── .agent/
│   └── skills/                # Custom AI Agent skills
│       ├── add-speaker.md
│       ├── add-event.md
│       ├── add-wfc-spot.md
│       ├── create-component.md
│       ├── create-page.md
│       └── code-audit.md
├── public/                    # Static assets (images, logos, favicon)
├── src/
│   ├── assets/                # Local SVG icons, graphics
│   ├── components/            # Reusable React components (Navbar, Footer, etc.)
│   ├── data/                  # Data files (speakers.json, tempat_wfc.json)
│   ├── pages/                 # Route pages (home, event, speaker, about)
│   ├── App.jsx                # Main application component & route configuration
│   ├── App.css                # Custom global styling
│   ├── index.css              # Tailwind base imports & directives
│   └── main.jsx               # Application entry point
├── AGENTS.md                  # AI Agent guidelines (this file)
├── eslint.config.js           # ESLint configuration
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies & scripts
```

---

## 💻 Commands Reference

Always use `pnpm` as the package manager for this project:

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Start development server with hot-reload |
| `pnpm build` | Build production assets into `dist/` |
| `pnpm lint` | Execute ESLint static code analysis |
| `pnpm preview` | Preview production build locally |

---

## 🎨 Coding Standards & Conventions

1. **React Component Architecture**:
   - Use named or default exports consistently within module folders (e.g., `export function SpeakerPage({ isDarkMode })`).
   - Standardize prop handling for theme: pass `isDarkMode` (boolean) to pages/components where dark theme styling is required.
   - Use path aliases: `@/assets/...` for assets inside `src/`.

2. **Styling & Theme Handling**:
   - Utilize Tailwind CSS utility classes.
   - Support dark mode using conditional classes (e.g., `${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`).
   - Maintain sleek, responsive grid/flexbox layouts (`lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1`).

3. **Animations**:
   - Wrap dynamic text or cards with Framer Motion (`Motion.div`, `Motion.h1`, `Motion.p`) for smooth entry transitions.
   - Keep entry animations subtle (`opacity`, `spring` transitions with stiffness ~110).

4. **Quality Assurance**:
   - Before concluding any code modification, run `pnpm lint` and `pnpm build` to verify zero errors.

---

## 🤖 Available AI Agent Skills (`.agent/skills/`)

The following skills are available to automate common project workflows:

1. **`add-speaker`** (`.agent/skills/add-speaker.md`):
   Guide for adding new speaker entries to `src/data/speakers.json` and managing speaker avatar assets.

2. **`add-event`** (`.agent/skills/add-event.md`):
   Workflow for scaffolding and inserting new online or offline community meetups/events into the event listings.

3. **`add-wfc-spot`** (`.agent/skills/add-wfc-spot.md`):
   Workflow for adding developer-friendly Work From Cafe locations to `src/data/tempat_wfc.json`.

4. **`create-component`** (`.agent/skills/create-component.md`):
   Scaffold new React UI components following existing Tailwind CSS, dark mode, and Framer Motion patterns.

5. **`create-page`** (`.agent/skills/create-page.md`):
   Create a new page route, add route definitions in `src/App.jsx`, and register navigation items in `src/components/Navbar`.

6. **`code-audit`** (`.agent/skills/code-audit.md`):
   Run automated linting, build verification, responsive UI validation, and dark mode compatibility checks.
