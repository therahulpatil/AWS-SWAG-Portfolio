/**
 * Centralized Portfolio Configuration for Rahul Patil
 * DevOps Engineer Associate at HeapTrace Technologies
 * 2x AWS Certified Solutions Architect & DevSecOps Engineer
 */
window.PORTFOLIO_CONFIG = {
  personal: {
    name: "Rahul Patil",
    role: "DevOps Engineer Associate",
    company: "HeapTrace Technologies",
    tagline: "DevOps Engineer Associate at HeapTrace Technologies | AWS Solutions Architect",
    shortBio: "DevOps Engineer Associate at HeapTrace Technologies. 2x AWS Certified (Solutions Architect Associate & Cloud Practitioner). Passionate about automated CI/CD pipelines, Infrastructure as Code (Terraform), secure AWS VPC architectures, and scalable cloud deployments.",
    avatar: "assets/images/avatar.svg",
    email: "builder.patil@example.com",
    location: "India / Open to Global Remote",
    status: "💼 DevOps Engineer Associate @ HeapTrace Technologies | 2x AWS Certified",
    github: "https://github.com/Sec-DO",
    linkedin: "https://www.linkedin.com/in/patilrahulprafulla",
    awsBuilder: "https://builder.aws.com",
    resumeUrl: "https://www.linkedin.com/in/patilrahulprafulla"
  },

  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      badge: "assets/images/cert-saa.svg",
      issueDate: "October 25, 2026",
      expiryDate: "October 25, 2029",
      credentialId: "5b5a1c7f6a824de5a661e9149a0c18fd",
      verifyUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/5b5a1c7f6a824de5a661e9149a0c18fd",
      level: "Associate"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      badge: "assets/images/cert-ccp.svg",
      issueDate: "February 12, 2026",
      expiryDate: "October 25, 2029",
      credentialId: "c49b3418666a41818f74795c50633cff",
      verifyUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/c49b3418666a41818f74795c50633cff",
      level: "Foundational"
    }
  ],

  stats: [
    { label: "AWS Certifications", value: "2x" },
    { label: "Current Role", value: "DevOps @ HeapTrace" },
    { label: "DevSecOps Security Gates", value: "100%" },
    { label: "VPC Network Security", value: "Hardened" }
  ],

  about: {
    headline: "Engineering automated, secure cloud foundations at HeapTrace Technologies with defense-in-depth.",
    paragraphs: [
      "Hello! I'm Rahul Patil, currently working as a DevOps Engineer Associate at HeapTrace Technologies. I am a 2x AWS Certified engineer (Solutions Architect – Associate & Cloud Practitioner) and CDAC PGCP ITISS graduate.",
      "At HeapTrace Technologies and in my engineering initiatives, I specialize in automating cloud infrastructure using Terraform, architecting multi-tier AWS VPCs with strict network isolation, and building end-to-end DevSecOps pipelines integrating Jenkins, SonarQube, OWASP ZAP, and Trivy.",
      "My passion lies in bridging software development and cloud operations: enforcing least privilege (IAM), automating compliance gates, and delivering high-availability systems with sub-second latency via AWS Amplify and CloudFront."
    ],
    principles: [
      {
        icon: "🛡️",
        title: "Defense-in-Depth & Zero Trust",
        desc: "Hardening every layer: network subnets, stateless NACLs, stateful Security Groups, IAM least privilege, and container vulnerability scans."
      },
      {
        icon: "⚙️",
        title: "Automated DevSecOps Compliance",
        desc: "Shifting security left via Terraform IaC, Jenkins automated build gates, SAST (SonarQube), and DAST (OWASP ZAP) security testing."
      },
      {
        icon: "📈",
        title: "Observable & Resilient Architecture",
        desc: "Real-time metrics, telemetry alerting with Prometheus & Grafana, and automated self-healing cloud deployments."
      }
    ],
    milestones: [
      {
        year: "March 2024",
        title: "Secure AWS VPC Architecture for Web App Deployment",
        desc: "Designed and implemented dual-tier VPC with public/private subnets, Bastion Host for secure SSH access, NAT Gateway for outbound traffic, and strict NACL/SG rules."
      },
      {
        year: "February 2026",
        title: "Earned AWS Certified Cloud Practitioner",
        desc: "Demonstrated foundational mastery of core AWS cloud services, security, pricing models, and cloud architectural best practices. (ID: c49b3418666a41818f74795c50633cff)"
      },
      {
        year: "August 2026",
        title: "CDAC PGCP ITISS & SecureDevOps Pipeline Project",
        desc: "Graduated CDAC PGCP ITISS. Engineered end-to-end DevSecOps platform with Terraform, Jenkins, SonarQube, OWASP ZAP, Trivy, Docker, Prometheus, and Grafana."
      },
      {
        year: "October 2026",
        title: "Earned AWS Certified Solutions Architect – Associate",
        desc: "Validated deep technical expertise in architecting secure, cost-optimized, fault-tolerant, and high-performing systems on AWS. (ID: 5b5a1c7f6a824de5a661e9149a0c18fd)"
      },
      {
        year: "Present",
        title: "DevOps Engineer Associate at HeapTrace Technologies",
        desc: "Driving automated cloud infrastructure provisioning, CI/CD pipelines, containerization, and AWS cloud security compliance in enterprise production environments."
      },
      {
        year: "November 2026",
        title: "AWS Portfolio Challenge & Global Cloud Deployment",
        desc: "Engineered this interactive AWS CloudShell portfolio, deployed with continuous delivery on AWS Amplify Hosting, and connected global edge delivery via Amazon CloudFront."
      }
    ]
  },

  skills: {
    categories: ["All", "Cloud & AWS", "DevSecOps & CI/CD", "Security & Networking", "Monitoring & Tools"],
    items: [
      // Cloud & AWS
      { name: "AWS VPC Networking", category: "Cloud & AWS", level: 96, highlight: true },
      { name: "AWS Solutions Architecture", category: "Cloud & AWS", level: 95, highlight: true },
      { name: "AWS Amplify Hosting", category: "Cloud & AWS", level: 92, highlight: true },
      { name: "EC2 & Bastion Hosts", category: "Cloud & AWS", level: 94, highlight: true },
      { name: "NAT Gateways & IGW", category: "Cloud & AWS", level: 90 },
      { name: "Amazon CloudFront & S3", category: "Cloud & AWS", level: 92 },
      { name: "AWS IAM & Least Privilege", category: "Cloud & AWS", level: 94, highlight: true },

      // DevSecOps & CI/CD
      { name: "Terraform (IaC)", category: "DevSecOps & CI/CD", level: 94, highlight: true },
      { name: "Jenkins CI/CD Automation", category: "DevSecOps & CI/CD", level: 90, highlight: true },
      { name: "Docker & Containerization", category: "DevSecOps & CI/CD", level: 90 },
      { name: "SonarQube (SAST)", category: "DevSecOps & CI/CD", level: 88, highlight: true },
      { name: "OWASP ZAP (DAST)", category: "DevSecOps & CI/CD", level: 86, highlight: true },
      { name: "Trivy Container Scanning", category: "DevSecOps & CI/CD", level: 88 },

      // Security & Networking
      { name: "NACLs & Security Groups", category: "Security & Networking", level: 95, highlight: true },
      { name: "Subnetting (CIDR 10.0.0.0/16)", category: "Security & Networking", level: 94 },
      { name: "Vulnerability Assessment", category: "Security & Networking", level: 90 },
      { name: "Linux Administration & Bash", category: "Security & Networking", level: 92 },
      { name: "SSH Hardening & Key Pair Mgmt", category: "Security & Networking", level: 90 },

      // Monitoring & Tools
      { name: "Prometheus", category: "Monitoring & Tools", level: 88, highlight: true },
      { name: "Grafana Dashboards", category: "Monitoring & Tools", level: 90, highlight: true },
      { name: "Git & GitHub", category: "Monitoring & Tools", level: 92 },
      { name: "CloudWatch Telemetry", category: "Monitoring & Tools", level: 86 }
    ]
  },

  projects: [
    {
      id: "securedevops",
      title: "SecureDevOps: Automated CI/CD & Security Compliance Pipeline",
      category: "DevSecOps",
      shortDesc: "End-to-end DevSecOps platform automating AWS infrastructure with Terraform, Jenkins CI/CD, SonarQube SAST, OWASP ZAP DAST, Trivy container audit, and Prometheus/Grafana monitoring.",
      fullDesc: "Engineered as part of the CDAC PGCP ITISS program. This production-grade DevSecOps platform integrates security testing directly into the deployment lifecycle. It automates AWS cloud provisioning using Terraform, orchestrates builds via Jenkins, enforces static code quality gates with SonarQube, performs dynamic web scans with OWASP ZAP, scans Docker container layers for CVEs with Trivy, and provides real-time application and infrastructure telemetry through Prometheus and Grafana dashboards.",
      architecture: [
        "Terraform Infrastructure as Code (IaC) for automated AWS provisioning",
        "Jenkins multibranch automated CI/CD build & test pipeline",
        "Static Application Security Testing (SAST) with SonarQube quality gates",
        "Dynamic Application Security Testing (DAST) using OWASP ZAP automated scans",
        "Container vulnerability scanning with Trivy prior to Docker image deployment",
        "Real-time monitoring and alerting metrics with Prometheus & Grafana"
      ],
      tags: ["AWS Cloud", "Terraform", "Jenkins", "SonarQube", "OWASP ZAP", "Trivy", "Docker", "Prometheus", "Grafana"],
      image: "assets/images/project-devsecops.svg",
      liveUrl: "https://github.com/Sec-DO/Automated-CI-CD-and-Security-Compliance-Pipeline-for-Cloud-Applications",
      repoUrl: "https://github.com/Sec-DO/Automated-CI-CD-and-Security-Compliance-Pipeline-for-Cloud-Applications",
      featured: true
    },
    {
      id: "aws-vpc",
      title: "Secure AWS VPC Architecture for Web Application Deployment",
      category: "Cloud Security",
      shortDesc: "High-security multi-tier AWS VPC with public and private subnets, Bastion Host SSH ingress, NAT Gateway outbound internet routing, and strict NACL/Security Group rules.",
      fullDesc: "Designed and implemented a secure AWS Virtual Private Cloud (VPC) optimized for production web workloads. The architecture separates public web tiers from isolated private database tiers across distinct subnets (CIDR 10.0.0.0/16). A Bastion Host in the public subnet provides hardened, single-entry SSH management, while an AWS NAT Gateway ensures private instances can pull critical security patches without exposing inbound ports to the public internet.",
      architecture: [
        "Dual-tier subnet architecture (Public 10.0.1.0/24 & Private 10.0.2.0/24)",
        "Hardened Bastion Host in public subnet for secure SSH administrative jump",
        "AWS NAT Gateway for controlled, outbound-only internet connectivity",
        "Internet Gateway (IGW) attached to public route tables",
        "Stateful Security Groups and Stateless Network Access Control Lists (NACLs)"
      ],
      tags: ["AWS VPC", "Public/Private Subnets", "Bastion Host", "NAT Gateway", "Security Groups", "NACLs", "EC2"],
      image: "assets/images/project-vpc.svg",
      liveUrl: "#aws-vpc",
      repoUrl: "https://github.com/Sec-DO",
      featured: true
    },
    {
      id: "aws-cloudshell-portfolio",
      title: "AWS CloudShell Interactive Portfolio (Amplify Deployed)",
      category: "Creative",
      shortDesc: "This personal portfolio site featuring an interactive terminal emulator, synthesized Web Audio, and automated AWS Amplify CI/CD hosting.",
      fullDesc: "Engineered specifically for the AWS Portfolio Challenge. Features a custom-built Web Audio and Canvas-powered AWS CloudShell terminal emulator, zero-dependency 100/100 Lighthouse performance, and continuous deployment via AWS Amplify Hosting connected to Amazon CloudFront.",
      architecture: [
        "AWS Amplify Hosting with automated Git CI/CD branch deployments",
        "Amazon CloudFront edge delivery with global low latency (<100ms TTFB)",
        "Zero-dependency semantic HTML5, high-performance CSS, and vanilla JS",
        "Synthesized Web Audio API sound effects and Matrix canvas mode"
      ],
      tags: ["AWS Amplify", "CloudFront", "Terminal Emulator", "Vanilla JS", "Canvas"],
      image: "assets/images/project-portfolio.svg",
      liveUrl: "#",
      repoUrl: "https://github.com/Sec-DO",
      featured: true
    },
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
      repoUrl: "https://github.com/Sec-DO",
      featured: true
    }
  ],

  terminal: {
    user: "rahul",
    host: "aws-cloudshell",
    region: "us-east-1",
    version: "2.4.0-amplify",
    easterEggs: {
      motto: "Security isn't an afterthought—it's the foundation of every scalable cloud architecture.",
      currentRole: "DevOps Engineer Associate at HeapTrace Technologies",
      favoriteTech: "AWS VPC + Terraform + Jenkins + Prometheus for rock-solid DevSecOps.",
      superpower: "Automating cloud infrastructure with Terraform and eliminating CVE vulnerabilities before production release.",
      funFact: "Double AWS Certified: SAA-C03 (Solutions Architect Associate) & CLF-C02 (Cloud Practitioner) valid through 2029!"
    }
  }
};
