export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Clicit Digital",
    location: "Centurion, South Africa",
    period: "Feb 2025 — Present",
    summary: "Owning delivery across web and mobile products, from client requirements and architecture through to deployment.",
    highlights: [
      "Led a delivery request platform with real-time order tracking, step-by-step notifications and admin involvement across the workflow.",
      "Built an enterprise management system spanning teams, files, learners, tests, timesheets and payroll.",
      "Developed an estate management platform centred on resident safety and rapid incident reporting.",
      "Guided three junior engineers on frontend delivery and API design; mentored interns and reviewed code.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "EPF Artificial Intelligence Campus",
    location: "Sandton, South Africa",
    period: "Sep 2024 — Jan 2025",
    summary: "Delivered end-to-end web applications and integrations for business use cases.",
    highlights: [
      "Built web applications with JavaScript, Node.js and React.",
      "Integrated AWS S3 for cloud storage to support scalable and reliable file handling.",
      "Implemented REST APIs and third-party service integrations.",
      "Contributed to sprint planning, delivery timelines and junior developer code reviews.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Tuto Consultant",
    location: "Midrand, South Africa",
    period: "Jun 2023 — Aug 2024",
    summary: "Translated client requirements into complete web application experiences.",
    highlights: [
      "Developed client-facing applications with React, Redux, Node.js and MongoDB.",
      "Worked with clients to clarify problem statements and shape system designs.",
      "Owned features from initial build through implementation and iteration.",
      "Participated in code reviews and supported intern developers.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "AkiTech Inc",
    location: "Pretoria, South Africa",
    period: "Feb 2023 — Jun 2023",
    summary: "Supported feature delivery and application quality alongside senior engineers.",
    highlights: [
      "Assisted with designing and developing software features.",
      "Helped test applications, patches and updates.",
      "Worked with senior engineers to refine implementation and resolve defects.",
    ],
  },
  {
    role: "Web/App Developer Trainee",
    company: "Mlab",
    location: "Pretoria, South Africa",
    period: "May 2022 — Nov 2022",
    summary: "Built foundational web development skills through hands-on application work.",
    highlights: [
      "Developed web applications with HTML, CSS, JavaScript and React.",
      "Adapted quickly to new tools and project requirements in a fast-paced environment.",
    ],
  },
];