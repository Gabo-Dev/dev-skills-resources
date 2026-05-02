<h1 align="center">dev-skills-resources</h1>

<p align="center">
  <strong>A community-oriented lab for documenting skills, tools, and experiments</strong><br>
  <em>Evidence-driven. Measurable. Reproducible.</em>
</p>

<p align="center">
  <a href="https://gabo-dev.github.io/dev-skills-resources/"><img src="https://img.shields.io/badge/demo-live-6366f1?style=flat-square" alt="Live Demo"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License"></a>
</p>

---

## Table of Contents

- [What is this?](#what-is-this)
- [Why does it exist?](#why-does-it-exist)
- [Principles](#principles)
- [Taxonomy](#taxonomy)
- [Projects](#projects)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## What is this?

**dev-skills-resources** is a reference lab where developers document tools, workflows, and patterns they have tested — with measurable evidence, clear conclusions, and reusable artifacts.

Each project answers six questions:

| Question | Answer |
|----------|--------|
| What is this? | Short description |
| Why does it exist? | Problem being solved |
| What was tested? | Tool, pattern, or workflow |
| How was it measured? | Metrics and commands |
| What happened? | Result summary |
| Is it worth using? | Clear conclusion |

---

## Why does it exist?

Technical decisions are often based on opinions rather than data. This lab exists to:

- **Document** what was tested and how
- **Compare** outcomes with measurable evidence
- **Share** reusable patterns across teams
- **Build** a long-term, searchable knowledge base

---

## Principles

| Principle | Meaning |
|-----------|---------|
| **TypeScript-first** | Default language for all examples |
| **React-first** | Default UI framework |
| **Angular-supported** | Valid when it genuinely fits |
| **Mobile-first** | Design for small screens first |
| **Hexagonal architecture** | Default architectural style |
| **Evidence-driven** | Metrics over opinions |
| **Community-friendly** | Easy to reuse and understand |

---

## Taxonomy

Every project is classified using three dimensions:

### Capability (Primary)

| Capability | Focus |
|------------|-------|
| `seo` | Search visibility, metadata, structured data |
| `performance` | Speed, bundle size, Core Web Vitals |
| `accessibility` | A11y audits, semantic structure, keyboard nav |
| `developer-experience` | Tooling, workflows, DX metrics |
| `ui-patterns` | Reusable components, design systems |
| `architecture` | Hexagonal, modularity, coupling |
| `tooling` | CLI, automation, validation |

### Framework (Secondary)

| Framework | Meaning |
|-----------|---------|
| `react` | React-based projects |
| `angular` | Angular-based projects |
| `shared` | Framework-agnostic |

### Artifact Type (Tertiary)

| Type | Meaning |
|------|---------|
| `docs` | Guides and explanations |
| `experiments` | Proofs of concept |
| `benchmarks` | Measured comparisons |
| `reports` | Analysis and conclusions |

---

## Projects

| Project | Capability | Framework | Artifact | Description | Deployment |
|---------|------------|-----------|----------|-------------|------------|
| [design-md-landing-eval](https://github.com/Gabo-Dev/dev-skills-resources/tree/main/projects/performance/design-md-landing-eval) | `performance` | `react` | `benchmark` | Landing page evaluated with Scry | [Live](https://gabo-dev.github.io/dev-skills-resources/performance/design-md-landing-eval/) |

> See the full list at [gabo-dev.github.io/dev-skills-resources](https://gabo-dev.github.io/dev-skills-resources/)

---

## Architecture

The web application follows a **hexagonal architecture** with clear separation of concerns:

```
src/
├── domain/          # Pure entities and ports (no external deps)
├── application/     # Use cases orchestrating domain
├── infrastructure/  # Adapters implementing ports
├── presentation/    # React components, hooks, pages
├── projects/        # Static project data
├── store/           # Zustand stores (theme, language)
├── i18n/            # Translations (EN/ES)
└── shared/          # Utilities and constants
```

### Key Decisions

- **Zustand** for global state (theme, language) — avoids Context re-render cascade
- **CSS Modules** for scoped component styles
- **react-i18next** with namespaces for translations
- **Vitest** + Testing Library for unit tests
- **Hash routing** for static hosting (GitHub Pages)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/Gabo-Dev/dev-skills-resources.git
cd dev-skills-resources

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

### Project Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm test` | Run Vitest in watch mode |
| `pnpm test:ui` | Run Vitest with UI |
| `pnpm coverage` | Generate test coverage report |

---

## Contributing

We welcome contributions of all kinds — new projects, bug fixes, documentation improvements, and translations.

### Before You Start

1. **Read this README** fully
2. **Check existing projects** to avoid duplicates
3. **Open an issue** if you want to propose a large change

### Adding a New Project

Every project must follow this structure:

```
projects/
└── {capability}/
    └── {project-name}/
        ├── README.md          # Required: metadata + conclusion
        ├── docs/
        │   ├── spec.md        # What was tested and why
        │   ├── evaluation.md  # How it was measured
        │   └── result.json    # Raw metrics/data
        └── src/               # Source code (if applicable)
```

#### README.md Template

```markdown
# {project-name}

## Metadata
- **Capability:** {seo|performance|accessibility|...}
- **Framework:** {react|angular|shared}
- **Artifact:** {docs|experiment|benchmark|report}
- **Deployment:** {GitHub Pages|Vercel|Netlify|...}

## What is this?
{Short description}

## Why does it exist?
{Problem being solved}

## What was tested?
{Tool, pattern, or workflow}

## How was it measured?
{Metrics and commands}

## Results
{Summary of findings}

## Conclusion
{Clear verdict: worth adopting or not, and why}
```

### Code Standards

- **TypeScript** strictly typed — no `any` without justification
- **CSS Modules** for all component styles
- **Tests** for every `.ts`/`.tsx` file (co-located)
- **Semantic HTML** — accessibility is not optional
- **English** for all code and comments; UI supports EN/ES

### Git Workflow

```bash
# 1. Fork and clone
git clone https://github.com/YOUR-USERNAME/dev-skills-resources.git

# 2. Create a feature branch
git checkout -b feat/your-project-name

# 3. Make changes, add tests, ensure they pass
pnpm test

# 4. Commit with clear messages
git commit -m "feat: add {project-name} benchmark"

# 5. Push and open a Pull Request
git push origin feat/your-project-name
```

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use case |
|--------|----------|
| `feat:` | New project or feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `test:` | Adding or updating tests |
| `refactor:` | Code change that neither fixes a bug nor adds a feature |
| `chore:` | Build process, dependencies, tooling |

### Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Tests pass (`pnpm test`)
  - [ ] No TypeScript errors (`pnpm build`)
  - [ ] README includes metadata, evaluation, and conclusion
- [ ] Screenshots or deployment link provided (if applicable)
- [ ] Commit messages follow convention

---

## Tooling

Tools used across the lab are installed **system-wide**, not in project dependencies. This ensures models and CI can execute them without manual intervention.

| Tool | Use Case | Install |
|------|----------|---------|
| `scry` | Web auditing (SEO, perf, security, a11y) | `go install github.com/meysam81/scry@latest` |

---

## License

MIT © [Gabo-Dev](https://github.com/Gabo-Dev)

---

<p align="center">
  <sub>Built with evidence. Shared with care.</sub>
</p>
