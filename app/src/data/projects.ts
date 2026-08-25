export interface Project {
  num: string
  title: string
  summary: string
  tags: string[]
  problem: string
  solution: string
  role: string
  keyDetail: string
}

export const projects: Project[] = [
  {
    num: '01',
    title: 'Identity Provider for a Multi-Domain Platform',
    summary: 'A management console that four separate applications authenticate against, instead of each keeping its own logins.',
    tags: ['Spring Boot', 'OIDC', 'JWKS', 'JPA', 'AWS'],
    problem:
      'A multi-domain supply chain platform for a client was split across five Spring Boot services — a management console plus four domain applications (inventory, production, procurement, sales) — each of which would otherwise need to maintain its own user accounts and login flow.',
    solution:
      'Built the management console as the platform\'s identity provider and single source of truth for user accounts, so IT administrators onboard employees in one place. Each domain application authenticates against it through an OIDC-style flow instead of maintaining separate credentials.',
    role:
      'Designed and built the console; also shipped features across the inventory and sales domains, including filterable list endpoints via JPA Specifications and an event-driven notification system that only fires after the originating transaction commits. Deployed on AWS (EC2, ALB, Auto Scaling Groups) via a Jenkins pipeline gated by SonarQube.',
    keyDetail:
      'Tokens are signed with a private key; the public key is published at a standard JWKS endpoint, so each application verifies tokens locally — no shared secrets, no callback on every request.',
  },
  {
    num: '02',
    title: 'Real-Time Messaging Service',
    summary: 'Messaging infrastructure for a travel platform, built to stay correct across retries and unstable mobile connections.',
    tags: ['NestJS', 'Socket.io', 'Redis', 'Prisma'],
    problem:
      'Traveller–agency conversations on a travel platform needed real-time delivery that stayed reliable across multiple service instances and flaky mobile connections, plus a way to track how quickly agencies were responding.',
    solution:
      'Built the messaging service in NestJS using Socket.io with the Redis adapter, so socket state is shared across instances and the service scales horizontally. Designed the messaging schema in Prisma with per-participant read state, and added SLA timers for response-time tracking.',
    role: 'Built and own the messaging service end-to-end as a backend developer on the platform.',
    keyDetail:
      'Client-supplied message identifiers make delivery idempotent — a message retried after a dropped connection never gets created twice.',
  },
  {
    num: '03',
    title: 'Identity-Aware VPN for Remote Access',
    summary: 'A proposed architecture and mobile client for secure company remote access.',
    tags: ['OpenVPN', 'PKI', 'Flutter', 'iptables'],
    problem:
      "A company's distributed workforce needed secure remote access to internal systems, without an existing VPN service to build on.",
    solution:
      'Designed an identity-aware VPN architecture: OpenVPN running on EC2, an easy-rsa PKI for per-client certificates, per-client configuration directives, and iptables-based routing. Documented as a proof-of-concept proposal and built the VPN integration component in Flutter — connection lifecycle and on-device client configuration.',
    role: 'Designed the architecture end-to-end and built the mobile client component.',
    keyDetail:
      'Reviewed and tested by engineering leadership, but still a proposal — not adopted org-wide.',
  },
]
