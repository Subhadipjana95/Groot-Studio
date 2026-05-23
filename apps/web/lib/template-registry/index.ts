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
    description: "A complete, production-ready SaaS template featuring landing pages, authentication, dashboard, and billing integrations. Perfect for your next big idea.",
    image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1768645965/w4_uzxlxp.webp",
    previewUrl: "https://next-reff-alumni-connect.vercel.app",
    downloadUrl: "#",
    tags: ["Next.js", "Authentication", "Stripe", "Tailwind CSS"],
  },
  {
    name: "portfolio-minimal",
    title: "Minimal Developer Portfolio",
    description: "A clean, performant, and accessible portfolio template for developers and designers to showcase their projects and blog posts.",
    image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776287226/portfolio_light_ki9im5.webp",
    imageDark:"https://res.cloudinary.com/dfjuuwtr6/image/upload/v1776287226/portfolio_dark_paxfd5.webp",
    previewUrl: "https://a063.xyz",
    downloadUrl: "#",
    tags: ["Portfolio", "Blog", "MDX", "Minimal"],
  }
];
