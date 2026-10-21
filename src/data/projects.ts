export interface Project {
  name: string;
  description: string;
  stack: string[];
  featured: boolean;
  category: string;
  demoUrl: string;
  sourceUrl: string;
  status?: string;
}

export const projects: Project[] = [
  {
    name: "Mavco",
    description: "An enterprise operations suite bringing payroll, timesheets, learner records and test management into one workflow.",
    stack: ["React", "Node.js", "MongoDB", "AWS S3"],
    featured: true,
    category: "Enterprise systems",
    demoUrl: "https://mavco-client-site.netlify.app/",
    sourceUrl: "https://github.com/Sikhauli",
    status: "Client project",
  },
  {
    name: "HausPro",
    description: "A safety-first professional services marketplace designed around role-based access and end-to-end job workflows.",
    stack: ["React Native", "Node.js", "PostgreSQL", "NestJS", "Supabase"],
    featured: true,
    category: "Marketplace · Mobile",
    demoUrl: "#contact",
    sourceUrl: "https://github.com/Sikhauli",
    status: "In development",
  },
];