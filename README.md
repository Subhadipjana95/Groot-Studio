
<h1>Groot UI</h1>
<p>A premium, open-source component registry for high-performance React applications.</p>
<br/>

<img src="https://res.cloudinary.com/dfjuuwtr6/image/upload/v1777610235/Groot_Preview_Banner_fzv87q.webp" alt="Groot UI Banner" width="100%" />

<br/>
  
![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-UI/stars.svg?font=geist) ![badge](https://shieldcn.dev/github/vercel/next.js/forks.svg?variant=secondary&font=geist) ![badge](https://shieldcn.dev/github/vercel/next.js/issues.svg?variant=destructive&font=geist) ![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-UI/license.svg?font=geist)


 

[Website](https://grootui.vercel.app) • [Documentation](https://grootui.vercel.app/docs) • [Report Bug](https://github.com/Subhadipjana95/Groot-UI/issues/new) • [Request Feature](https://github.com/Subhadipjana95/Groot-UI/issues/new)

---

## ✦ What is Groot UI?

Groot UI is a decentralized component registry built on top of **shadcn/ui**. Unlike traditional component libraries that bundle everything into a heavy `node_modules` package, Groot UI allows you to **own your code**. 

By using our registry, you can copy components directly into your project with a single command. This architecture ensures:
- **Zero Version Lock-in**: You control the source code of every component.
- **Maximum Performance**: No unused code or bloated dependencies.
- **Full Customizability**: Every pixel is under your control via Tailwind CSS v4.

---

## 🛠️ Tech Stack

Groot UI is built with the latest industry standards to ensure longevity and performance:

- **Core**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Base Components**: [shadcn/ui](https://ui.shadcn.com/)

---

## 📂 Project Structure

This repository is a **Turborepo** monorepo designed for scale and developer velocity:

```bash
groot-ui/
├── apps/
│   └── web/                  # Documentation & Landing Page (Next.js 16)
├── packages/
│   ├── ui/                   # The Core Registry
│   │   ├── registry/         # High-fidelity component implementations
│   │   ├── src/components/   # Foundational shadcn base components
│   │   └── registry.json     # Registry manifest for CLI integration
│   ├── eslint-config/        # Shared code quality standards
│   └── typescript-config/    # Shared compiler configurations
└── turbo.json                # Monorepo orchestration
```

---

## 🚀 Installation

### 1. Requirements
Ensure your project environment meets the following:
- **Node.js**: 18+
- **Tailwind CSS**: v4
- **shadcn/ui**: Initialized (`npx shadcn@latest init`)

### 2. Add a Component
Groot UI components are installed via the shadcn CLI using their registry URLs. For example, to add the **Sliding Button**:

```bash
npx shadcn@latest add https://grootui.vercel.app/r/sliding-button.json
```

---

## 💻 Local Development

Follow these steps to contribute or run Groot UI locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Subhadipjana95/Groot-UI.git
   cd Groot-UI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Access the documentation at `http://localhost:3000`.

4. **Build the registry**
   ```bash
   npm run registry
   ```

---

## ⚖️ License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <br />
  <p>Built with 💚 by <a href="https://github.com/Subhadipjana95">Subhadip Jana</a></p>
</div>
