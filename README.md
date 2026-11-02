# ☁️ Rahul Patil | AWS Cloud Architect & DevSecOps Portfolio

[![AWS Amplify](https://img.shields.io/badge/AWS-Amplify_Hosting-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![AWS Solutions Architect](https://img.shields.io/badge/AWS_Certified-Solutions_Architect_Associate-FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/verification)
[![AWS Cloud Practitioner](https://img.shields.io/badge/AWS_Certified-Cloud_Practitioner-00F0FF?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/verification)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?logo=google-chrome&logoColor=white)](https://developers.google.com/web/tools/lighthouse)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-patilrahulprafulla-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/patilrahulprafulla)

Personal cloud portfolio of **Rahul Patil**, 2x AWS Certified Solutions Architect and DevSecOps practitioner (CDAC PGCP ITISS). Built for the **AWS Portfolio Challenge**, featuring production-grade cloud architectures, automated DevSecOps pipelines, and an interactive **AWS CloudShell v2.0 Terminal** with synthesized Web Audio sound and CI/CD simulation.

---

## 🎖️ Official AWS Certifications

| Certification | Level | Validity | Verification ID | Verify |
| :--- | :---: | :---: | :---: | :---: |
| **AWS Certified Solutions Architect – Associate** | Associate | Oct 2026 – Oct 2029 | `5b5a1c7f6a824de5a661e9149a0c18fd` | [Verify Portal](https://aws.amazon.com/verification) |
| **AWS Certified Cloud Practitioner** | Foundational | Feb 2026 – Oct 2029 | `c49b3418666a41818f74795c50633cff` | [Verify Portal](https://aws.amazon.com/verification) |

---

## 🛠️ Featured Engineering Projects

1. **[SecureDevOps: Automated CI/CD and Security Compliance Pipeline for Cloud Applications](https://github.com/Sec-DO/Automated-CI-CD-and-Security-Compliance-Pipeline-for-Cloud-Applications)**
   - *Platform*: AWS Cloud, DevOps, Security | *Duration*: 1 Month (CDAC PGCP ITISS)
   - *Architecture*: Terraform IaC provisioning, Jenkins multibranch CI/CD, SonarQube SAST, OWASP ZAP DAST, Trivy container layer auditing, Docker deployment, and Prometheus + Grafana real-time observability.
2. **Secure AWS VPC Architecture for Web Application Deployment**
   - *Architecture*: Multi-tier public/private subnets (10.0.0.0/16), Bastion Host for hardened SSH ingress, NAT Gateway for outbound update traffic, Security Groups, and NACLs.
3. **AWS CloudShell Interactive Portfolio**
   - *Architecture*: AWS Amplify continuous hosting, Amazon CloudFront edge caching, zero-dependency Web Audio API terminal emulator, canvas matrix rain.

---

## ⚡ The Creative Feature: Interactive AWS CloudShell

Visitors receive a visible hint (`[💡 Hint: CloudShell (~)]` in the navbar and floating bottom-right pill) or can press **`~`** to launch the terminal:
- `help`: Lists all commands.
- `whoami`: Reveals Rahul's background, CDAC ITISS education, and DevSecOps ethos.
- `certs`: Displays official AWS Certification IDs and verification links.
- `superpowers`: Displays technical skills with ASCII radar meters.
- `projects`: Inventory of engineering projects with `goto <id>` quick jump.
- `story`: Unfolds Rahul's journey and milestones.
- `sudo deploy`: Simulates an automated DevSecOps AWS Amplify deployment with sound & confetti!
- `matrix`: Drops full-screen cyberpunk digital rain.

---

## 🚀 Quick Start (Local Development)

Zero external build dependencies. Open locally in 2 seconds:

1. Clone repository:
   ```bash
   git clone https://github.com/your-username/AWS-SWAG-Portfolio.git
   cd AWS-SWAG-Portfolio
   ```

2. Run local web server:
   ```bash
   python -m http.server 3000
   ```
   Open `http://localhost:3000` in your browser.

---

## ☁️ Deploy to AWS Amplify Hosting

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In AWS Console > **AWS Amplify**, click **Host web app**, connect your GitHub repo and select `main` branch.
3. AWS Amplify automatically reads [`amplify.yml`](file:///c:/Users/patil/Downloads/AntigravityProjects/AWS-SWAG-Portfolio/amplify.yml) and deploys within 60 seconds with global CloudFront edge delivery and free SSL/HTTPS!

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
