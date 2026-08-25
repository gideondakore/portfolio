export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "Jun 2026 — Present",
    role: "Backend Developer (Part-time, Remote)",
    company: "Trekmara",
    bullets: [
      "Built the real-time messaging service in NestJS using Socket.io with the Redis adapter, so socket state is shared across instances and the service scales horizontally.",
      "Designed the messaging schema in Prisma, with per-participant read state and client-supplied message identifiers that make delivery idempotent under retries and unstable mobile connections.",
      "Added SLA timers for response-time tracking on traveller–agency conversations.",
    ],
  },
  {
    period: "Nov 2025 — Present",
    role: "Backend Engineer",
    company: "AmaliTech Ghana Ltd",
    bullets: [
      "Built the management console for a multi-domain supply chain platform — the identity provider and single source of truth for user accounts across five Spring Boot services, so four separate domain applications authenticate through one OIDC-style flow instead of maintaining their own logins.",
      "Tokens signed with a private key; the corresponding public key published at a standard JWKS endpoint, so each application verifies tokens locally without shared secrets or a callback on every request.",
      "Built dynamic, filterable list endpoints across the inventory and sales domains using JPA Specifications with subquery-based filtering, with DTO mapping via MapStruct.",
      "Built an event-driven notification system that dispatches only after the originating transaction commits, so rolled-back operations never emit notifications.",
      "Built OTP generation and a cross-application invitation flow using server-to-server token verification.",
      "Designed an identity-aware VPN architecture for company remote access (OpenVPN on EC2, easy-rsa PKI, per-client configuration, iptables-based routing) and built its Flutter client component — documented as a proof-of-concept and reviewed by engineering leadership; still a proposal, not adopted org-wide.",
      "Deployed services on AWS across EC2, an Application Load Balancer, and Auto Scaling Groups via a Jenkins pipeline gated by SonarQube.",
    ],
  },
  {
    period: "Sep 2024 — Nov 2025",
    role: "Software Engineering Intern",
    company: "AmaliTech Ghana Ltd",
    bullets: [
      "National Service Personnel backend engineering programme covering Java, Spring Boot, JPA, testing, application security, and cloud fundamentals.",
      "Built weekly lab systems progressing from console applications to secured, database-backed services.",
    ],
  },
  {
    period: "Dec 2023 — Nov 2025",
    role: "Web Developer (Freelance)",
    company: "Self-employed",
    bullets: [
      "Built custom web applications for clients in TypeScript, React, and Next.js — interface work and backend integration.",
    ],
  },
];
