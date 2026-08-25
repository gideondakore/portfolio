# CLAUDE.md

Context for updating this portfolio site. The content below was assembled and
fact-checked with the site owner. Treat it as the source of truth for anything
biographical or technical about him.

---

## Who this is

**Gideon Dakore** — backend engineer based in Kumasi, Ghana.

- Email: dakoregideon72@gmail.com
- Phone: +233 55 937 2538
- LinkedIn: https://www.linkedin.com/in/gideon-dakore
- GitHub: https://github.com/gideondakore

**Positioning: full stack developer.** _Changed 2026-08-25 at his explicit
direction, overriding the previous "backend engineer, never full stack"
rule._ The site now leads with "Full Stack Developer" — headline, page title,
meta description, hero marquee, contact copy. Frontend (React, Next.js) and
mobile (Flutter, React Native) are presented as real capability, not
footnotes.

Still true, and still worth protecting: the **production depth is Java/Spring
Boot and NestJS on AWS**, and the specific work (the OIDC-style identity
provider, the idempotent messaging service) is what earns attention. Breadth
is the framing; those two systems are the evidence. Don't let "full stack"
flatten the copy into generalities — the old rule's reasoning about
specificity still applies, only the label changed.

Not "cloud/DevOps engineer" — that one stays retired.

---

## Work experience

### Trekmara — Backend Developer (part-time, remote) · Jun 2026 – Present

Travel platform. He builds the real-time messaging service.

- Real-time messaging in **NestJS** using **Socket.io with the Redis adapter**,
  so socket state is shared across instances and the service scales
  horizontally.
- Messaging schema in **Prisma**, with per-participant read state and
  client-supplied message identifiers making delivery idempotent under retries
  and unstable mobile connections.
- SLA timers for response-time tracking on traveller–agency conversations.

Note: Trekmara's public marketing leans on tokens/NFTs/VR. His work is the
messaging and backend layer. **Do not mention the Web3 side** — it
misrepresents what he did and narrows his audience.

### AmaliTech Ghana Ltd · Sep 2024 – Present

**Backend Engineer (Apprenticeship) · Nov 2025 – Present**

_ChainPilot_ — multi-domain supply chain platform, 15-engineer team. Five
Spring Boot services: a management console plus four domain apps (inventory,
production, procurement, sales).

His headline piece of work, and the strongest thing on the site:

- Built the **management console**, which acts as the platform's **identity
  provider and single source of truth** for user accounts. IT administrators
  onboard employees in one place; all four domain applications authenticate
  against it through an **OIDC-style flow** instead of each maintaining
  separate logins.
- Tokens signed with a **private key**; corresponding **public key published at
  a standard JWKS endpoint**, so each application verifies tokens locally
  without holding shared secrets or making a callback on every request.

Also:

- Features across the **inventory and sales** domains.
- Dynamic filterable list endpoints via **JPA Specifications** with
  subquery-based filtering; DTO mapping with **MapStruct**.
- **Event-driven notification system** that dispatches only after the
  originating transaction commits, so rolled-back operations never emit
  notifications.
- OTP generation and a cross-application invitation flow using
  server-to-server token verification.
- Deployment on **AWS** across EC2, Application Load Balancer, and Auto Scaling
  Groups — Spring Boot packaged as WAR for Tomcat 11 on Ubuntu — via a
  **Jenkins** pipeline gated by **SonarQube**.

_ARMS Mobile_

- Designed an **identity-aware VPN architecture** for company remote access:
  OpenVPN on EC2, easy-rsa PKI, per-client configuration directives,
  iptables-based routing. Documented as a proof-of-concept proposal in
  Confluence and reviewed by engineering leadership.
- Built the **VPN integration component in Flutter** from that design —
  connection lifecycle and on-device client configuration. The resulting
  mobile client was tested by engineering leadership.
- Status: still a proposal. Not adopted org-wide. Do not imply otherwise.

**Software Engineering Intern · Sep 2024 – Nov 2025**

National Service Personnel backend engineering programme — Java, Spring Boot,
JPA, testing, application security, cloud fundamentals. Built weekly lab
systems progressing from console applications to secured, database-backed
services.

### Freelance — Web Developer · Dec 2023 – Nov 2025

Custom web applications for clients in TypeScript, React, and Next.js —
interface work and backend integration.

---

## Education & certifications

**BSc Computer Science** — Kwame Nkrumah University of Science and Technology,
Kumasi · 2022–2025

- AWS Certified Cloud Practitioner
- AWS Certified Developer – Associate _(in progress)_
- Cisco Network Technician Career Path (Networking Basics; Networking Devices
  and Initial Configuration; Linux Essentials)

Do not list the three AWS Educate modules (Cloud 101, Compute, Storage). They
are introductory and make the real certification look smaller.

---

## Stack

- **Languages:** Java, TypeScript, JavaScript, Python, SQL, Bash, C++
- **Backend:** Spring Boot, NestJS, Node.js, Express, JPA/Hibernate, Prisma,
  MapStruct, JUnit, REST APIs
- **Cloud & DevOps:** AWS (EC2, ALB, Auto Scaling, Lambda, IAM, VPC, ACM, SSM,
  ECR, CloudFormation), Docker, Jenkins, SonarQube, GitHub Actions, Linux,
  Tomcat
- **Data & messaging:** PostgreSQL, MySQL, MongoDB, Redis, Socket.io
- **Frontend & mobile:** React, Next.js, React Native, Flutter, HTML/CSS
- **Practices:** domain-driven design, hexagonal architecture, event-driven
  systems, CI/CD, PKI/TLS

**Do not add Go or Flask.** They appeared on an older profile with no
supporting work. Do not add anything not on this list.

---

## Hard rules for any content you write

1. **Invent nothing.** No user counts, no percentages, no latency figures, no
   "improved X by Y%". Every number was checked; the only ones that survived
   are _15-engineer team_ and _four domain applications_. If a section feels
   like it needs a metric, leave it out and flag it rather than estimating.
2. **No unverifiable soft claims.** No "increased customer satisfaction," no
   "reduced risk by 40%," no "passionate about." These were deliberately
   stripped.
3. **Describe behaviour, not framework internals.** Say "notifications
   dispatch only after the transaction commits," not
   "`@TransactionalEventListener`." Annotation and class names were removed on
   purpose. Library names are fine in a skills list.
4. **He is not a student.** Older profiles said "actively learning" and "goal:
   become a Cloud & DevOps Engineer." All aspirational framing was removed.
   The certification-in-progress is the one forward-looking item allowed.
   Related: **he has been developing since 2022** (stated by him 2026-08-25).
   Note the site's experience list starts Dec 2023 (freelance) / Sep 2024
   (AmaliTech), so the earlier years are university and self-directed work
   with nothing listed against them — the hero's "Since 2022" is his own
   claim, not derived from the roles below.
5. **No projects section built from GitHub repos.** His public repos are
   overwhelmingly training labs and tutorial follow-alongs (a ~20-repo Python
   beginners' course, `Spring5Tutorial`, `HeadFirstJavaExamples`, `Natours`,
   AmaliTech weekly lab submissions). The real work is in private company
   repos. Either omit a projects section or build it only from the ChainPilot,
   ARMS, and Trekmara descriptions above — do not link or feature the training
   repos.

---

## Tone

Plain, specific, technical. The reader should learn something concrete about
how he thinks within the first fifteen seconds. Specificity is the whole
mechanism — "four applications authenticating through one OIDC-style flow"
does work that "scalable backend systems" cannot.

Avoid: emoji-heavy sections, "passionate," "results-driven," "cutting-edge,"
"leveraging," exclamation marks, and any sentence that would be equally true
of a hundred thousand other developers.

He consistently prefers first-principles explanations — the problem being
solved, then the mechanics, then the failure modes. Writing about his work
should reflect that: lead with why a design decision mattered, not with the
tool used.

---

## Before publishing — check with him

- **Internal project names.** "ChainPilot" and "ARMS Mobile" are AmaliTech
  internal names, and the VPN section describes a company remote-access
  architecture. A public portfolio is more exposure than a CV. He should
  confirm with his employer, or the site should use generic descriptions
  ("a multi-domain supply chain platform for a client") instead.
- **Phone number.** Fine on a CV sent to a named recruiter; think twice about
  a public web page. Email and LinkedIn may be enough.
- The site is intended for `gideondakore.github.io`, which currently exists
  but is empty.

And this is the entire repos I have in Github:
=== 1. REPOSITORIES — gideondakore, sort "Recently updated" ===
Complete: 84 repos across 3 pages (30 + 30 + 24). Captured 2026-08-25.

FACTS THAT APPLY ACROSS THE WHOLE LIST

- Forks: exactly ONE repo in all 84 is a fork (terminal-profile).
- Archived: none. No repo on any page carries an archive label.
- Topic tags: none displayed. GitHub's profile repository list does not render
  topic tags on this view; no topic links exist in the page markup on any page.
- Stars: exactly ONE repo has a non-zero count (KahootClone-Using-React-Native, 1).
- Forks-of-my-repos: zero across all 84.

--- PAGE 1 (30) ---

# NAME VIS LANGUAGE UPDATED DESCRIPTION

1 gideondakore Public (none) Aug 25, 2026 no description
2 notes Private Shell Jul 28, 2026 My Personal
3 ecr-lab Public Java Jul 17, 2026 no description
4 beanstalk-deploy Public JavaScript Jul 16, 2026 no description
5 campus-bid Private TypeScript Jul 14, 2026 A test project for Trekmara interview requirement
6 cloudformation-iac Public Shell Jul 10, 2026 For IAC file templates
7 markline-mart Private TypeScript Jun 21, 2026 no description [License: MIT]
8 markline-mart-api Private JavaScript Jun 21, 2026 no description
9 fast_api_tutorial Private Python Jun 20, 2026 Fast API Tutorial
10 duplex-frontend Private TypeScript Jun 7, 2026 This is Duplex Frontend
11 vpn-implementations Private (none) May 13, 2026 no description
12 ARMS-Mobile-VPN-Demo Public JavaScript May 13, 2026 no description
13 terminal-profile Public Shell Apr 13, 2026 A customizable UNIX terminal profile setup with ZSH,
OhMyZSH, and Powerline theme for Ubuntu and MacOS.
**_ FORK — Forked from pixegami/terminal-profile _**
14 bet-frontend Private TypeScript Apr 12, 2026 For Richard Betting app
15 springboot Public Java Apr 11, 2026 For Spring Boot Tutotials
16 smart-ecommerce-performance Public Java Apr 9, 2026 Smart Ecommerce App focus on improving performance,
monitoring, caching
17 nodejs_with_ts_installation_guide Public (none) Apr 4, 2026 Installation guide for installing nodejs to use
typescript, jest, eslint, prettier
18 bet-backend Private TypeScript Apr 4, 2026 Kobby Rich Backedn
19 secrets Private (none) Mar 28, 2026 no description
20 Natours Public JavaScript Mar 18, 2026 Natours app tutorial code
21 springboot-color-app Public Java Mar 15, 2026 Learning Spring boot and this is just a color app for
understanding Inversion of Control (IoC)
22 QA-Submission Public (none) Mar 12, 2026 no description
23 smart-ecommerce-security Public Java Mar 5, 2026 Smart E-Commerce System for Week 7 lab at AmaliTech
NSP training programme
24 smart-ecommerce-jpa Public Java Mar 1, 2026 Smart E-Commerce System for Week 6 lab at AmaliTech
NSP training programme
25 UI Public (none) Feb 27, 2026 UI
26 software_testing Public (none) Feb 27, 2026 Software Testing
27 data_government Public (none) Feb 27, 2026 Data Government
28 cloud_enginnering_fundamental Public (none) Feb 26, 2026 Cloud engineering fundamental submission
29 smartshop Public Java Feb 10, 2026 no description
30 library Public Java Feb 7, 2026 Simple Library App for learning spring/springboot

--- PAGE 2 (30) ---

# NAME VIS LANGUAGE UPDATED DESCRIPTION

31 duplex-backend Private JavaScript Feb 3, 2026 Duplex backend
32 pyzbarQrBarCode Public Python Feb 3, 2026 Utilizing python pyzbar to implement both qr and
barcode decoding
33 qrCodeDetector Public Python Feb 2, 2026 Utilize python qreader to detect barcode
34 qrcodeGenerator Public JavaScript Feb 2, 2026 Qrcode generator
35 Spring5Tutorial Public Java Feb 2, 2026 Learning Spring 5 from a tutorial
36 qrcode_scanner Public JavaScript Feb 2, 2026 QR code scanner
37 gideondakore.github.io Public (none) Jan 30, 2026 no description
38 HeadFirstJavaExamples Public Java Jan 29, 2026 Repo for practicing head first java 3ed
39 smart-e-commerce-system Public Java Jan 23, 2026 Smart E-Commerce System for Week 4 lab at AmaliTech
NSP training programme
40 BankManagementAdvancedJava Public Java Jan 12, 2026 Week 3. Working on Bank Management system
41 BankManagementCleanCodeTestingAndGit Public Java Dec 8, 2025 Week 2 on Clean code, Testing and Git
42 BankAccount Public Java Dec 5, 2025 no description
43 duplex-landing-page Private HTML Sep 4, 2025 For Duplex landing page
44 hostel_data Private (none) Jun 2, 2025 no description
45 tour-booking-application Private TypeScript May 20, 2025 no description
46 hostel-haven-ai-explorer Private TypeScript May 6, 2025 no description
47 v0-hostel-project Private (none) May 5, 2025 no description
48 v0.dev Private (none) May 5, 2025 Repo for v0.dev
49 loveable.ai Private (none) May 5, 2025 For Loveable codes
50 tour-app Private TypeScript Feb 11, 2025 no description
51 vite-react Private CSS Feb 8, 2025 no description
52 amazon-price-bot Public Python Nov 16, 2024 no description
53 flight-app Public Python Nov 11, 2024 no description
54 habit-tracking Public (none) Oct 13, 2024 no description
55 stock-news Public Python Oct 13, 2024 no description
56 rain-alert Public Python Oct 11, 2024 no description
57 hirst-painting Public Python Oct 9, 2024 no description
58 kanye-quotes Public Python Oct 9, 2024 no description
59 NATO-alphabet Public Python Oct 9, 2024 no description
60 birthday-wisher Public Python Oct 9, 2024 no description

--- PAGE 3 (24) --- all Public, none forked, none archived

# NAME LANGUAGE UPDATED DESCRIPTION

61 pomodoro Python Oct 9, 2024 no description
62 python-pretty-table-demo Python Oct 9, 2024 no description
63 auction-bidding Python Oct 9, 2024 no description
64 turtle-racing-bet-game Python Oct 9, 2024 no description
65 snake-game Python Oct 9, 2024 no description
66 pingpong-game Python Oct 9, 2024 no description
67 turtle_crossing-game Python Oct 9, 2024 no description
68 spirograph Python Oct 9, 2024 no description
69 polygon-creator Python Oct 9, 2024 no description
70 random-walk Python Oct 9, 2024 no description
71 quiz-game Python Oct 9, 2024 no description
72 oop-coffee-machine Python Oct 9, 2024 no description
73 password-manager Python Oct 9, 2024 no description
74 international-space-station-position-tracker Python Oct 9, 2024 no description
75 quizzler-app-start Python Oct 9, 2024 no description
76 aws-services-practice TypeScript Oct 1, 2024 no description
77 aws_restart Python Oct 1, 2024 no description
78 mini-project TypeScript Sep 29, 2024 no description
79 Video-Image-Text-AI-Generator TypeScript Sep 5, 2024 no description
80 encyclopedia HTML Feb 16, 2024 no description
81 next-auth TypeScript Jan 30, 2024 no description
82 Hostel-App TypeScript Jan 9, 2024 no description
83 CppProjects C++ Jan 2, 2024 These are c++ beginner to advance projects.
Starting from beginner through advance
84 KahootClone-Using-React-Native JavaScript Aug 3, 2023 no description **_ 1 star _**

CURRENT FIGURES (his own, 2026-08-25 — these are what the site shows)

- 85 repositories total, public + private. The village builds houses only for
  the 63 public ones (a private repo has no link to open), so
  `githubStats.repositories` is hardcoded and deliberately does NOT read
  `githubProjects.length`. The section copy says "every public repository"
  for exactly this reason.
- 5 starred — repos **he has starred**, i.e. stars given, not received. The
  tile is labelled "Starred". (Stars received across his public repos is 1,
  per the API; don't relabel this to "Stars".)
- 8 followers. On GitHub since 2021.

LANGUAGE TALLY (as labelled by GitHub, across all 84)
Python 33 | TypeScript 13 | Java 13 | JavaScript 9 | (none) 12 | Shell 3 | HTML 2 | CSS 1 | C++ 1

THE 6 MOST RECENTLY UPDATED (targets for Section 4)

1. gideondakore Public Aug 25, 2026
2. notes Private Jul 28, 2026
3. ecr-lab Public Jul 17, 2026
4. beanstalk-deploy Public Jul 16, 2026
5. campus-bid Private Jul 14, 2026
6. cloudformation-iac Public Jul 10, 2026
