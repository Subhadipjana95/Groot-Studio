
<h1>Groot Studio</h1>
<p>A premium, open-source component registry for high-performance React applications.</p>
<!-- <br/> -->

<img src="https://res.cloudinary.com/dfjuuwtr6/image/upload/v1781009847/Groot_Preview_Banner_3_mga2jv.webp" alt="Groot Studio Banner" width="100%" />

<!-- <br/> -->
  
![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-Studio/forks.svg?variant=secondary&font=geist) ![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-Studio/issues.svg?variant=destructive&font=geist) ![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-Studio/license.svg?font=geist)

<p>Built with 🧡 by <a href="https://github.com/Subhadipjana95">Subhadip Jana</a></p>
 

[Website](https://grootstudio.dev) | [Documentation](https://grootstudio.dev/docs) | [Report Bug](https://github.com/Subhadipjana95/groot-studio/issues/new)

## Star History

[![RepoStars](https://repostars.dev/api/embed?repo=Subhadipjana95%2FGroot-Studio&theme=dark)](https://repostars.dev/?repos=Subhadipjana95%2FGroot-Studio&theme=dark)

## Installation

### 1. Requirements
Ensure your project environment meets the following:
- **Node.js**: 18+
- **Tailwind CSS**: v4
- **shadcn/ui**: Initialized (`npx shadcn@latest init`)

### 2. Add a Component
Groot Studio components are installed via the shadcn CLI using their alias(`@grootstudio`). 
For example, to add the `Sliding Button` :

```bash
npx shadcn@latest add @grootstudio/sliding-button
```
Once installed, you can import the component in your files:
```typescript
import { SlidingButton } from "@/components/sliding-button"
```
and use it like this:
```typescript
export default function Page() {
  return (
    <div className="w-full h-screen">
      <SlidingButton variant="default">
        Get Started
      </SlidingButton>
    </div>
  )
}
```
> [!Note]
> The import path `@/components/ui/sliding-button` assumes your project has a path alias configured (common in **[Next.js](https://nextjs.org/docs)** and similar frameworks). Adjust the path to match your project's structure if needed.

<p align="center">
  <br />
  <img src="https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778798978/sliding-button_dark_pwd8ks-removebg-preview2_pmf9xi.png" alt="Groot Studio Button example" />
</p>


<!-- <p align="center">
  <img alt="Banner" src="https://shieldcn.dev/header/graph.svg?title=Groot+Studio&amp;subtitle=Open+Source+Component+Registry&amp;size=wide&amp;mode=dark&amp;theme=rose&amp;image=https%3A%2F%2Fres.cloudinary.com%2Fdfjuuwtr6%2Fimage%2Fupload%2Fv1782159140%2FFrame_3_hbnpdh.webp&amp;overlay=0.65" />
</p>

<p align="center">
  <a href="https://discord.gg/5nJmZYA5f2"><img alt="online" src="https://shieldcn.dev/discord/1316199667142496307.svg?split=true&amp;labelColor=3b82f6&amp;valueColor=000000&amp;labelTextColor=000000" /></a>
  <img alt="built in" src="https://shieldcn.dev/flag/in.svg?theme=neutral" />
</p>

## Overview

Groot Studio is a library of high-performing, SEO optimised React components designed for modern developers.

- 🎨 Themeable
- 🌸 Beautiful
- ♿ Accessible

![chart](https://shieldcn.dev/chart/github/stars/Subhadipjana95/Groot-Studio.svg?theme=rose&title=Groot+Stars)

## Getting started

You need to have these **Required Environment** listed below:

- Node.js: 18+
- Tailwind CSS: v4
- shadcn/ui: Initialized (`npx shadcn@latest init`)

### Add Component

Groot Studio components are installed via the shadcn CLI using their custom alias (`@grootstudio`).
For example, to add the **Sliding Button**:


```bash
npx shadcn@latest add @grootstudio/sliding-button
```

Once installed, you can import the component in your files:

```bash
import { SlidingButton } from "@/components/grootstudio/sliding-button"
```

and use it like this:

```bash
export default function Page() {
  return (
    <div className="w-full h-screen">
      <SlidingButton variant="default">
        Get Started
      </SlidingButton>
    </div>
  )
}
```

**Note:** The import path `@/components/grootstudio/sliding-button` assumes your project has a path alias configured (common in **[Next.js](https://nextjs.org/docs)** and similar frameworks). Adjust the path to match your project's structure if needed.

<p align="center">
  <img alt="image" src="https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778798978/sliding-button_dark_pwd8ks-removebg-preview2_pmf9xi.png" />
</p> -->

