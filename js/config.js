/**
 * Centralized Portfolio Configuration
 * Easily update your personal details, links, projects, and skills here!
 */
window.PORTFOLIO_CONFIG = {
  personal: {
    name: "Patil",
    tagline: "Cloud Architect & Full-Stack Engineer",
    shortBio: "Transforming ambitious ideas into resilient, cloud-native applications. Passionate about serverless architectures, distributed systems, and delightful developer experiences.",
    avatar: "assets/images/avatar.svg",
    email: "builder.patil@example.com",
    location: "Global / Remote",
    status: "🚀 Building cloud-native solutions & seeking new challenges",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    awsBuilder: "https://builder.aws.com",
    resumeUrl: "#contact"
  },

  stats: [
    { label: "Cloud Projects Deployed", value: "12+" },
    { label: "AWS Services Explored", value: "20+" },
    { label: "CI/CD Automations", value: "100%" },
    { label: "Uptime Focus", value: "99.99%" }
  ],

  about: {
    headline: "Architecting reliable cloud software with clean code and relentless curiosity.",
    paragraphs: [
      "Hello! I'm Patil, a software engineer with an obsession for cloud systems, serverless architectures, and responsive user experiences. My journey started with a fascination for how bits travel across the globe in milliseconds, which led me straight into the AWS Cloud ecosystem.",
      "Today, I build end-to-end applications that don't just look great on the surface, but are backed by rock-solid cloud infrastructure — scalable databases, event-driven microservices, and automated CI/CD deployment pipelines.",
      "When I'm not writing code or monitoring cloud telemetry, you'll find me exploring emerging AI capabilities, optimizing latency bottlenecks, or experimenting with interactive developer tools."
    ],
    principles: [
      {
        icon: "⚡",
        title: "Serverless & Cloud-First",
        desc: "Designing decoupled, event-driven architectures that scale on demand and minimize operational overhead."
      },
      {
        icon: "🛡️",
        title: "Resilient & Secure by Default",
        desc: "Strict adherence to least privilege (IAM), end-to-end encryption, automated backups, and zero trust."
      },
      {
        icon: "🎨",
        title: "Developer & User Centricity",
        desc: "High performance, sub-second response times, accessible interfaces, and intuitive ergonomics."
      }
    ],
    milestones: [
      { year: "2024", title: "Started Cloud Journey", desc: "Built first full-stack web apps and discovered the power of AWS Amplify, S3, and DynamoDB." },
      { year: "2025", title: "Serverless Specialization", desc: "Designed event-driven APIs with AWS Lambda, API Gateway, and automated CI/CD with GitHub Actions." },
      { year: "2026", title: "AWS Portfolio Challenge & Beyond", desc: "Engineered scalable cloud architectures, built this interactive portfolio, and pursuing AWS Certifications." }
    ]
  },

  skills: {
    categories: ["All", "Cloud & DevOps", "Backend & APIs", "Frontend & UI", "Databases & Tools"],
    items: [
      // Cloud & DevOps
      { name: "AWS Amplify", category: "Cloud & DevOps", level: 95, icon: "aws", highlight: true },
      { name: "AWS Lambda", category: "Cloud & DevOps", level: 90, icon: "aws", highlight: true },
      { name: "Amazon S3 & CloudFront", category: "Cloud & DevOps", level: 95, icon: "aws", highlight: true },
      { name: "Amazon DynamoDB", category: "Cloud & DevOps", level: 85, icon: "aws" },
      { name: "Amazon API Gateway", category: "Cloud & DevOps", level: 90, icon: "aws" },
      { name: "Docker & Containers", category: "Cloud & DevOps", level: 85, icon: "docker" },
      { name: "CI/CD Pipelines", category: "Cloud & DevOps", level: 90, icon: "git" },

      // Backend & APIs
      { name: "Node.js & Express", category: "Backend & APIs", level: 92, icon: "nodejs", highlight: true },
      { name: "Python", category: "Backend & APIs", level: 88, icon: "python" },
      { name: "RESTful & GraphQL APIs", category: "Backend & APIs", level: 90, icon: "api" },
      { name: "Microservices", category: "Backend & APIs", level: 85, icon: "server" },

      // Frontend & UI
      { name: "Modern JavaScript (ES6+)", category: "Frontend & UI", level: 95, icon: "js", highlight: true },
      { name: "HTML5 & Semantic Web", category: "Frontend & UI", level: 98, icon: "html" },
      { name: "Modern CSS3 & Flex/Grid", category: "Frontend & UI", level: 94, icon: "css" },
      { name: "Responsive & Accessible UX", category: "Frontend & UI", level: 92, icon: "ui" },

      // Databases & Tools
      { name: "PostgreSQL & SQL", category: "Databases & Tools", level: 86, icon: "db" },
      { name: "Git & GitHub", category: "Databases & Tools", level: 94, icon: "git" },
      { name: "Linux & Bash / Shell", category: "Databases & Tools", level: 88, icon: "terminal" },
      { name: "CloudWatch & Monitoring", category: "Databases & Tools", level: 82, icon: "aws" }
    ]
  },

  projects: [
    {
      id: "cloudpulse",
      title: "CloudPulse - Serverless Telemetry & Monitoring",
      category: "Cloud",
      shortDesc: "Real-time serverless monitoring dashboard tracking cloud application health, latency metrics, and automated alerts.",
      fullDesc: "CloudPulse is an event-driven telemetry platform designed for serverless architectures. It captures cloud execution metrics via AWS Lambda, stores time-series health logs in Amazon DynamoDB, and streams real-time status updates through an interactive dashboard with zero cold-start bottlenecks.",
      architecture: [
        "AWS Amplify Hosting for high-speed edge distribution",
        "Amazon API Gateway + AWS Lambda for RESTful endpoints",
        "Amazon DynamoDB on-demand for sub-10ms metric lookups",
        "Amazon CloudWatch for anomaly alerting"
      ],
      tags: ["AWS Lambda", "DynamoDB", "Amplify", "API Gateway", "Chart.js"],
      image: "assets/images/project-cloudpulse.svg",
      liveUrl: "#cloudpulse",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      id: "nexus-ai",
      title: "NexusAI - Serverless Knowledge Base & RAG Assistant",
      category: "Full-Stack",
      shortDesc: "Intelligent document retrieval and conversational query system backed by cloud vector storage and AI models.",
      fullDesc: "NexusAI empowers users to query technical documentation in natural language. Built using serverless orchestration, documents are ingested into Amazon S3, indexed with semantic embeddings, and queried via a lightweight, ultra-responsive web frontend.",
      architecture: [
        "Amazon S3 for secure document bucket storage",
        "AWS Lambda python workers for chunking and tokenization",
        "Vector search engine with sub-second retrieval latency",
        "Responsive glassmorphic UI with real-time stream rendering"
      ],
      tags: ["Python", "AWS S3", "Serverless", "REST API", "AI/ML"],
      image: "assets/images/project-nexus.svg",
      liveUrl: "#nexus-ai",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      id: "omniflow",
      title: "OmniFlow - Cloud Microservices Checkout Engine",
      category: "Cloud",
      shortDesc: "High-throughput, decoupled order processing pipeline capable of handling high concurrency spikes gracefully.",
      fullDesc: "OmniFlow is a fault-tolerant order orchestration engine. By decoupling the transaction intake from payment processing using Amazon SQS queues and asynchronous worker Lambdas, it achieves 99.99% availability and zero dropped transactions during traffic surges.",
      architecture: [
        "Amazon SQS dead-letter queues for zero message loss",
        "AWS Lambda consumer functions running in parallel",
        "Idempotent database transactions backed by PostgreSQL",
        "Full CloudWatch dashboard monitoring queue depth and error rates"
      ],
      tags: ["Microservices", "Amazon SQS", "AWS Lambda", "Node.js", "Docker"],
      image: "assets/images/project-omniflow.svg",
      liveUrl: "#omniflow",
      repoUrl: "https://github.com",
      featured: true
    },
    {
      id: "aws-cloudshell-portfolio",
      title: "AWS CloudShell Interactive Portfolio",
      category: "Creative",
      shortDesc: "This personal portfolio site featuring an interactive terminal emulator, AWS CI/CD simulation, and live cloud hosting.",
      fullDesc: "Engineered specifically for the AWS Portfolio Challenge. Features a custom-built Web Audio and Canvas-powered AWS CloudShell terminal emulator, zero-dependency 100/100 Lighthouse performance, and continuous deployment via AWS Amplify Hosting.",
      architecture: [
        "AWS Amplify Hosting with automated Git CI/CD branch deployments",
        "Amazon CloudFront edge delivery with global low latency",
        "Zero-dependency semantic HTML5, high-performance CSS, and vanilla JS",
        "Synthesized Web Audio API sound effects and Matrix canvas mode"
      ],
      tags: ["AWS Amplify", "CloudFront", "Terminal Emulator", "Vanilla JS", "Canvas"],
      image: "assets/images/project-portfolio.svg",
      liveUrl: "#",
      repoUrl: "https://github.com",
      featured: true
    }
  ],

  terminal: {
    user: "builder",
    host: "aws-cloudshell",
    region: "us-east-1",
    version: "2.4.0-amplify",
    easterEggs: {
      motto: "Fail fast, learn faster, and let AWS Lambda handle the concurrency.",
      favoriteTech: "AWS Lambda + DynamoDB + Vanilla JS for pure speed.",
      superpower: "Debugging race conditions at 2:00 AM with a warm mug of chai.",
      funFact: "I can name the AWS logo smile angle (it's 20° connecting A to Z!)."
    }
  }
};
