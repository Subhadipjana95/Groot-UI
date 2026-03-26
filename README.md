<div align="center">
  <br />
  <img src="https://avatars.githubusercontent.com/u/149944137?s=48&v=4" alt="Groot UI Logo" width="120" style="border-radius: 20px;" />
  <br />
  <h1><b>Groot UI</b></h1>
  <p><i>The modern, accessible, and stunning UI component library for high-performing web apps.</i></p>

  <p>
    <a href="https://github.com/Subhadipjana95/Groot-UI/stargazers"><img src="https://img.shields.io/github/stars/Subhadipjana95/Groot-UI?style=for-the-badge&color=8D44AD" alt="Stars" /></a>
    <a href="https://github.com/Subhadipjana95/Groot-UI/network/members"><img src="https://img.shields.io/github/forks/Subhadipjana95/Groot-UI?style=for-the-badge&color=2ECC71" alt="Forks" /></a>
    <a href="https://github.com/Subhadipjana95/Groot-UI/issues"><img src="https://img.shields.io/github/issues/Subhadipjana95/Groot-UI?style=for-the-badge&color=E74C3C" alt="Issues" /></a>
    <a href="https://github.com/Subhadipjana95/Groot-UI/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Subhadipjana95/Groot-UI?style=for-the-badge&color=3498DB" alt="License" /></a>
  </p>

  <br />
</div>

---

## ✨ Overview

**Groot UI** is a meticulously designed UI component library built on top of **React 19**, **Next.js 15**, and **Tailwind CSS v4**. It follows the "Shadcn Nova" architecture, providing a seamless DX for building high-performance, accessible, and breathtaking user interfaces.

### 🌟 Key Features

- 🎨 **Modern Aesthetics**: Hand-crafted components with vibrant palettes and glassmorphism.
- ⚡ **Lightning Fast**: Optimized for Next.js Server Components and SSR.
- ♿ **Accessible by Design**: Full WAI-ARIA compliance across all components.
- 🌗 **Dark Mode First**: Beautiful, refined dark modes come standard.
- 🏗️ **Monorepo Ready**: Built using Turborepo for extreme scalability.

---

## 🏗️ Project Structure

This monorepo is managed by [Turborepo](https://turbo.build/) and [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

```text
.
├── apps
│   └── web          # Next.js 15 Landing Page & Marketing Site
├── packages
│   ├── ui           # Core UI Components Library (@workspace/ui)
│   ├── typescript   # Shared TypeScript configurations
│   └── eslint       # Shared ESLint linting rules
├── turbo.json       # Turborepo configuration
└── package.json     # Root workspace configuration
```

---

## 🚀 Quick Start

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Subhadipjana95/Groot-UI.git
cd Groot-UI
npm install
```

### 2. Development

Run the development server for both the web app and the component library:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page in action.

---

## 🧩 Usage

To use components in your applications, simply import them from the `@workspace/ui` package:

```tsx
import { Button } from "@workspace/ui/components/button";
import { GlowCard } from "@workspace/ui/components/glow-card";

export default function Example() {
  return (
    <GlowCard>
      <Button>Click Me</Button>
    </GlowCard>
  );
}
```

### 🛠️ Adding New Components

To add pre-built Shadcn components to the UI library:

```bash
npx shadcn@latest add [component-name] --cwd packages/ui
```

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request or open an Issue.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<p align="center">
  Built with 💚 by Subhadip
</p>
