export type Template = {
  name: string;
  title: string;
  description: string;
  image?: string;
  imageDark?: string;
  previewUrl: string;
  downloadUrl: string;
  tags: string[];
};

export const templateRegistry: Template[] = [
  {
    name: "saas-starter",
    title: "SaaS Starter Kit",
    description: "A complete, production-ready SaaS Landing Page. Perfect for your next big idea.",
    image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1780562736/Zurik_Light_uqcb9d.webp",
    imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1780562737/Zurik_Dark_vzbh7v.webp",
    previewUrl: "https://zurik-grootstudio.vercel.app",
    downloadUrl: "#",
    tags: ["Next.js", "TypeScript", "Motion", "Tailwind CSS"],
  }
];
