
<h1>Groot Studio</h1>
<p>A premium, open-source component registry for high-performance React applications.</p>
<br/>

<img src="https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778696696/Groot_Preview_Banner_1_sfuldr.webp" alt="Groot Studio Banner" width="100%" />

<br/>
  
![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-Studio/forks.svg?variant=secondary&font=geist) ![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-Studio/issues.svg?variant=destructive&font=geist) ![badge](https://shieldcn.dev/github/Subhadipjana95/Groot-Studio/license.svg?font=geist)

<p>Built with 💚 by <a href="https://github.com/Subhadipjana95">Subhadip Jana</a></p>
 

[Website](https://grootstudio.vercel.app) | [Documentation](https://grootstudio.vercel.app/docs) | [Report Bug](https://github.com/Subhadipjana95/groot-studio/issues/new)

## Star History

[![RepoStars](https://repostars.dev/api/embed?repo=Subhadipjana95%2FGroot-Studio&theme=8bit)](https://repostars.dev/?repos=Subhadipjana95%2FGroot-Studio&theme=8bit)


## Installation

### 1. Requirements
Ensure your project environment meets the following:
- **Node.js**: 18+
- **Tailwind CSS**: v4
- **shadcn/ui**: Initialized (`npx shadcn@latest init`)

### 2. Add a Component
Groot Studio components are installed via the shadcn CLI using their registry URLs. For example, to add the `Sliding Button` :

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
**Note:** The import path `@/components/ui/sliding-button` assumes your project has a path alias configured (common in Next.js and similar frameworks). Adjust the path to match your project's structure if needed.

<p align="center">
  <br />
  <img src="https://res.cloudinary.com/dfjuuwtr6/image/upload/v1778798978/sliding-button_dark_pwd8ks-removebg-preview2_pmf9xi.png" alt="Groot Studio Button example" />
</p>
