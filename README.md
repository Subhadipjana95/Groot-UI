<div>
  <img src="https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776247121/Groot_UI_Preview_Dark_zstfbq.png" alt="Groot UI" width="100%" style="border-radius: 20px;" />
  <h1>Groot UI</h1>
  <p>A modern, accessible component library built on shadcn/ui, React 19, Next.js 16, and Tailwind CSS v4.<br/>Install any component directly into your project with a single CLI command.</p>

  <p>
    <a href="https://github.com/Subhadipjana95/Groot-UI/stargazers">
      <img src="https://img.shields.io/github/stars/Subhadipjana95/Groot-UI?style=for-the-badge&color=8D44AD" alt="Stars" />
    </a>
    <a href="https://github.com/Subhadipjana95/Groot-UI/network/members">
      <img src="https://img.shields.io/github/forks/Subhadipjana95/Groot-UI?style=for-the-badge&color=2ECC71" alt="Forks" />
    </a>
    <a href="https://github.com/Subhadipjana95/Groot-UI/issues">
      <img src="https://img.shields.io/github/issues/Subhadipjana95/Groot-UI?style=for-the-badge&color=E74C3C" alt="Issues" />
    </a>
    <a href="https://github.com/Subhadipjana95/Groot-UI/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/Subhadipjana95/Groot-UI?style=for-the-badge&color=3498DB" alt="License" />
    </a>
  </p>

  <p>
    <a href="https://grootui.vercel.app">Website</a> ·
    <a href="https://grootui.vercel.app/docs">Documentation</a> ·
    <a href="https://github.com/Subhadipjana95/Groot-UI/issues/new">Report a Bug</a> ·
    <a href="https://github.com/Subhadipjana95/Groot-UI/issues/new">Request a Component</a>
  </p>

  <br />
</div>

---

## What is Groot UI?

Groot UI is a component registry built on top of [shadcn/ui](https://ui.shadcn.com). Instead of installing a package, components are copied directly into your project — giving you full ownership of the code, full customizability, and zero version lock-in.

Every component is:
- Built with **React 19** and **TypeScript**
- Styled with **Tailwind CSS v4**
- Accessible with full **WAI-ARIA** compliance
- Compatible with **Next.js App Router** and **Vite**
- Dark mode ready out of the box

---

## Components

| Component            | Description                              | Install                                                    |
| -------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| `groot-starter`      | Starter template component               | [Docs](https://grootui.vercel.app/docs/groot-starter)      |
| `glow-card`          | Card with animated glow hover effect     | [Docs](https://grootui.vercel.app/docs/glow-card)          |
| `github-stars`       | GitHub star count for Next.js App Router | [Docs](https://grootui.vercel.app/docs/github-stars)       |
| `github-stars-react` | GitHub star count for Vite / React       | [Docs](https://grootui.vercel.app/docs/github-stars-react) |

> More components are added regularly. Star the repo to stay updated.

---

## Installation

### Requirements

- Next.js 15+ (Optional)
- Node.js 18+
- React 18 or 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui initialized in your project

### Initialize shadcn/ui (if not already done)
```bash
npx shadcn@latest init
```

### Install a component

Pick any component and run its install command:
```bash
# Glow Card
npx shadcn@latest add https://grootui.vercel.app/r/glow-card.json

# GitHub Stars (Next.js)
npx shadcn@latest add https://grootui.vercel.app/r/github-stars.json

# GitHub Stars (Vite / React)
npx shadcn@latest add https://grootui.vercel.app/r/github-stars-react.json

# Gradient Text Fill
npx shadcn@latest add https://grootui.vercel.app/r/gradient-text-fill.json

# Gradient Background Text
npx shadcn@latest add https://grootui.vercel.app/r/gradient-background-text.json

# Client Grid
npx shadcn@latest add https://grootui.vercel.app/r/client-grid.json

# Client Marquee
npx shadcn@latest add https://grootui.vercel.app/r/client-marquee.json

# Client Marquee Blur
npx shadcn@latest add https://grootui.vercel.app/r/client-marquee-blur.json

# Discord Online (Next.js)
npx shadcn@latest add https://grootui.vercel.app/r/discord-online.json

# Discord Online (React / Vite)
npx shadcn@latest add https://grootui.vercel.app/r/discord-online-react.json

# GitHub Calendar
npx shadcn@latest add https://grootui.vercel.app/r/github-calendar.json
```

The CLI copies the component source directly into your project under `components/`. No `node_modules`, no hidden abstractions.

---

## Usage
```tsx
import { GlowCard } from "@/components/glow-card"

export default function Example() {
  return (
    <GlowCard>
      <h2>Hello from Groot UI</h2>
      <p>This card has a glowing hover effect.</p>
    </GlowCard>
  )
}
```
```tsx
// Next.js App Router
import { GitHubStars } from "@/components/github-stars"

export default function Navbar() {
  return <GitHubStars repo="Subhadipjana95/Groot-UI" />
}
```

---

## Project Structure

This is a Turborepo monorepo managed with npm workspaces.
```
groot-ui/
├── apps/
│   └── web/                  # Docs + landing page (Next.js 16)
├── packages/
│   ├── ui/                   # Component library
│   │   ├── registry/
│   │   │   └── radix-nova/   # All groot-ui components live here
│   │   ├── src/
│   │   │   └── components/   # shadcn base components
│   │   └── registry.json     # Registry manifest
│   ├── eslint-config/        # Shared ESLint config
│   └── typescript-config/    # Shared TypeScript config
├── turbo.json
└── package.json
```

---

## Local Development

Clone the repo and install dependencies:
```bash
git clone https://github.com/Subhadipjana95/Groot-UI.git
cd Groot-UI
npm install
```

Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` for the docs site.

Build the component registry:
```bash
npm run registry
```

Build for production:
```bash
npm run build
```

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

<p align="center">Built with 💚 by <a href="https://github.com/Subhadipjana95">Subhadip</a></p>