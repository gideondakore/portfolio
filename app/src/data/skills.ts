export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "Bash", "C++"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "NestJS",
      "Node.js",
      "Express",
      "JPA / Hibernate",
      "Prisma",
      "MapStruct",
      "JUnit",
      "REST APIs",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Flutter", "HTML/CSS"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Jenkins",
      "SonarQube",
      "GitHub Actions",
      "Linux",
      "Tomcat",
    ],
  },
  {
    title: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Socket.io"],
  },
  {
    title: "Practices",
    items: [
      "Domain-driven design",
      "Hexagonal architecture",
      "Event-driven systems",
      "CI/CD",
      "PKI/TLS",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  status?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    status: "In progress",
  },
  {
    name: "Cisco Network Technician Career Path",
    issuer:
      "Networking Basics · Networking Devices and Initial Configuration · Linux Essentials",
  },
];
