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
    image: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1780562736/Zurik_Light_uqcb9d.webp",
    imageDark: "https://res.cloudinary.com/dfjuuwtr6/image/upload/v1780562737/Zurik_Dark_vzbh7v.webp",
    previewUrl: "https://next-reff-alumni-connect.vercel.app",
    downloadUrl: "#",
    tags: ["Next.js", "Authentication", "Stripe", "Tailwind CSS"],
  }
];
