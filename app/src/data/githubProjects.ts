export interface GithubProject {
  displayName: string
  language: string
  url: string
}

/** Every public, non-fork repo on github.com/gideondakore (63 of them —
 *  matches the GitHub API's public_repos count). Baked in as static data
 *  rather than fetched client-side, so this section works offline, loads
 *  instantly, and never trips GitHub's 60-req/hr unauthenticated rate limit
 *  for visitors. Titles are cleaned-up repo names (most have no description
 *  set on GitHub); the language tag is GitHub's own detection, shown as "—"
 *  for repos with no dominant language. */
export const githubProjects: GithubProject[] = [
  { displayName: 'gideondakore', language: '—', url: 'https://github.com/gideondakore/gideondakore' },
  { displayName: 'ECR Lab', language: 'Java', url: 'https://github.com/gideondakore/ecr-lab' },
  { displayName: 'Beanstalk Deploy', language: 'JavaScript', url: 'https://github.com/gideondakore/beanstalk-deploy' },
  { displayName: 'CloudFormation IaC', language: 'Shell', url: 'https://github.com/gideondakore/cloudformation-iac' },
  { displayName: 'ARMS Mobile VPN Demo', language: 'JavaScript', url: 'https://github.com/gideondakore/ARMS-Mobile-VPN-Demo' },
  { displayName: 'Spring Boot Tutorials', language: 'Java', url: 'https://github.com/gideondakore/springboot' },
  { displayName: 'Smart Ecommerce — Performance', language: 'Java', url: 'https://github.com/gideondakore/smart-ecommerce-performance' },
  { displayName: 'Node.js + TypeScript Setup Guide', language: '—', url: 'https://github.com/gideondakore/nodejs_with_ts_installation_guide' },
  { displayName: 'Natours', language: 'JavaScript', url: 'https://github.com/gideondakore/Natours' },
  { displayName: 'Spring Boot Color App', language: 'Java', url: 'https://github.com/gideondakore/springboot-color-app' },
  { displayName: 'QA Submission', language: '—', url: 'https://github.com/gideondakore/QA-Submission' },
  { displayName: 'Smart Ecommerce — Security', language: 'Java', url: 'https://github.com/gideondakore/smart-ecommerce-security' },
  { displayName: 'Smart Ecommerce — JPA', language: 'Java', url: 'https://github.com/gideondakore/smart-ecommerce-jpa' },
  { displayName: 'UI', language: '—', url: 'https://github.com/gideondakore/UI' },
  { displayName: 'Software Testing', language: '—', url: 'https://github.com/gideondakore/software_testing' },
  { displayName: 'Data Government', language: '—', url: 'https://github.com/gideondakore/data_government' },
  { displayName: 'Cloud Engineering Fundamentals', language: '—', url: 'https://github.com/gideondakore/cloud_enginnering_fundamental' },
  { displayName: 'Smartshop', language: 'Java', url: 'https://github.com/gideondakore/smartshop' },
  { displayName: 'Library', language: 'Java', url: 'https://github.com/gideondakore/library' },
  { displayName: 'QR & Barcode Decoder (pyzbar)', language: 'Python', url: 'https://github.com/gideondakore/pyzbarQrBarCode' },
  { displayName: 'QR Code Detector', language: 'Python', url: 'https://github.com/gideondakore/qrCodeDetector' },
  { displayName: 'QR Code Generator', language: 'JavaScript', url: 'https://github.com/gideondakore/qrcodeGenerator' },
  { displayName: 'Spring 5 Tutorial', language: 'Java', url: 'https://github.com/gideondakore/Spring5Tutorial' },
  { displayName: 'QR Code Scanner', language: 'JavaScript', url: 'https://github.com/gideondakore/qrcode_scanner' },
  { displayName: 'gideondakore.github.io', language: '—', url: 'https://github.com/gideondakore/gideondakore.github.io' },
  { displayName: 'Head First Java Examples', language: 'Java', url: 'https://github.com/gideondakore/HeadFirstJavaExamples' },
  { displayName: 'Smart E-Commerce System', language: 'Java', url: 'https://github.com/gideondakore/smart-e-commerce-system' },
  { displayName: 'Bank Management (Advanced Java)', language: 'Java', url: 'https://github.com/gideondakore/BankManagementAdvancedJava' },
  { displayName: 'Bank Management — Clean Code & Testing', language: 'Java', url: 'https://github.com/gideondakore/BankManagementCleanCodeTestingAndGit' },
  { displayName: 'Bank Account', language: 'Java', url: 'https://github.com/gideondakore/BankAccount' },
  { displayName: 'Amazon Price Bot', language: 'Python', url: 'https://github.com/gideondakore/amazon-price-bot' },
  { displayName: 'Flight App', language: 'Python', url: 'https://github.com/gideondakore/flight-app' },
  { displayName: 'Habit Tracking', language: '—', url: 'https://github.com/gideondakore/habit-tracking' },
  { displayName: 'Stock News', language: 'Python', url: 'https://github.com/gideondakore/stock-news' },
  { displayName: 'Rain Alert', language: 'Python', url: 'https://github.com/gideondakore/rain-alert' },
  { displayName: 'Hirst Painting', language: 'Python', url: 'https://github.com/gideondakore/hirst-painting' },
  { displayName: 'Kanye Quotes', language: 'Python', url: 'https://github.com/gideondakore/kanye-quotes' },
  { displayName: 'NATO Alphabet', language: 'Python', url: 'https://github.com/gideondakore/NATO-alphabet' },
  { displayName: 'Birthday Wisher', language: 'Python', url: 'https://github.com/gideondakore/birthday-wisher' },
  { displayName: 'Pomodoro', language: 'Python', url: 'https://github.com/gideondakore/pomodoro' },
  { displayName: 'Python Pretty Table Demo', language: 'Python', url: 'https://github.com/gideondakore/python-pretty-table-demo' },
  { displayName: 'Auction Bidding', language: 'Python', url: 'https://github.com/gideondakore/auction-bidding' },
  { displayName: 'Turtle Racing Bet Game', language: 'Python', url: 'https://github.com/gideondakore/turtle-racing-bet-game' },
  { displayName: 'Snake Game', language: 'Python', url: 'https://github.com/gideondakore/snake-game' },
  { displayName: 'Ping Pong Game', language: 'Python', url: 'https://github.com/gideondakore/pingpong-game' },
  { displayName: 'Turtle Crossing Game', language: 'Python', url: 'https://github.com/gideondakore/turtle_crossing-game' },
  { displayName: 'Spirograph', language: 'Python', url: 'https://github.com/gideondakore/spirograph' },
  { displayName: 'Polygon Creator', language: 'Python', url: 'https://github.com/gideondakore/polygon-creator' },
  { displayName: 'Random Walk', language: 'Python', url: 'https://github.com/gideondakore/random-walk' },
  { displayName: 'Quiz Game', language: 'Python', url: 'https://github.com/gideondakore/quiz-game' },
  { displayName: 'OOP Coffee Machine', language: 'Python', url: 'https://github.com/gideondakore/oop-coffee-machine' },
  { displayName: 'Password Manager', language: 'Python', url: 'https://github.com/gideondakore/password-manager' },
  { displayName: 'ISS Position Tracker', language: 'Python', url: 'https://github.com/gideondakore/international-space-station-position-tracker' },
  { displayName: 'Quizzler App', language: 'Python', url: 'https://github.com/gideondakore/quizzler-app-start' },
  { displayName: 'AWS Services Practice', language: 'TypeScript', url: 'https://github.com/gideondakore/aws-services-practice' },
  { displayName: 'AWS re/Start', language: 'Python', url: 'https://github.com/gideondakore/aws_restart' },
  { displayName: 'Mini Project', language: 'TypeScript', url: 'https://github.com/gideondakore/mini-project' },
  { displayName: 'Video/Image/Text AI Generator', language: 'TypeScript', url: 'https://github.com/gideondakore/Video-Image-Text-AI-Generator' },
  { displayName: 'Encyclopedia', language: 'HTML', url: 'https://github.com/gideondakore/encyclopedia' },
  { displayName: 'Next Auth', language: 'TypeScript', url: 'https://github.com/gideondakore/next-auth' },
  { displayName: 'Hostel App', language: 'TypeScript', url: 'https://github.com/gideondakore/Hostel-App' },
  { displayName: 'C++ Projects', language: 'C++', url: 'https://github.com/gideondakore/CppProjects' },
  { displayName: 'Kahoot Clone (React Native)', language: 'JavaScript', url: 'https://github.com/gideondakore/KahootClone-Using-React-Native' },
]
