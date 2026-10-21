export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Frontend & mobile", items: ["React", "React Native", "TypeScript", "JavaScript", "Redux", "Vue", "Next.js", "HTML & CSS"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Django", "REST API design", "OAuth 2.0"] },
  { category: "Data", items: ["SQL", "PostgreSQL", "MongoDB", "Database optimisation"] },
  { category: "Cloud & delivery", items: ["AWS S3", "Docker", "CI/CD", "Git"] },
  { category: "Engineering practice", items: ["RBAC", "OWASP practices", "Code review", "Agile planning", "Mentoring"] },
];