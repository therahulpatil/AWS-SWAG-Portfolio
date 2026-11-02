# ☁️ Rahul Patil | AWS Cloud Architect & DevSecOps Portfolio

[![AWS Amplify](https://img.shields.io/badge/AWS-Amplify_Hosting-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![AWS Solutions Architect](https://img.shields.io/badge/AWS_Certified-Solutions_Architect_Associate-FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/verification)
[![AWS Cloud Practitioner](https://img.shields.io/badge/AWS_Certified-Cloud_Practitioner-00F0FF?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/verification)
[![Terraform](https://img.shields.io/badge/IaC-Terraform_v1.5+-7B42BC?logo=terraform&logoColor=white)](terraform/)
[![Current Role](https://img.shields.io/badge/Role-DevOps_Associate_%40_HeapTrace-10B981)](https://www.linkedin.com/in/patilrahulprafulla)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?logo=google-chrome&logoColor=white)](https://developers.google.com/web/tools/lighthouse)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-patilrahulprafulla-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/patilrahulprafulla)

Personal cloud portfolio of **Rahul Patil**, DevOps Engineer Associate at **HeapTrace Technologies**, 2x AWS Certified Solutions Architect, and DevSecOps practitioner (CDAC PGCP ITISS). Built for the **AWS Portfolio Challenge**, featuring production-grade cloud architectures, automated DevSecOps pipelines, automated Terraform IaC deployment, and an interactive **AWS CloudShell v2.0 Terminal** with synthesized Web Audio sound and CI/CD simulation.

---

## 🎖️ Official AWS Certifications

| Certification | Level | Validity | Verification ID | Verify |
| :--- | :---: | :---: | :---: | :---: |
| **AWS Certified Solutions Architect – Associate** | Associate | Oct 2026 – Oct 2029 | `5b5a1c7f6a824de5a661e9149a0c18fd` | [Verify on CertMetrics](https://cp.certmetrics.com/amazon/en/public/verify/credential/5b5a1c7f6a824de5a661e9149a0c18fd) |
| **AWS Certified Cloud Practitioner** | Foundational | Feb 2026 – Oct 2029 | `c49b3418666a41818f74795c50633cff` | [Verify on CertMetrics](https://cp.certmetrics.com/amazon/en/public/verify/credential/c49b3418666a41818f74795c50633cff) |

---

## 🛠️ Featured Engineering Projects

1. **[SecureDevOps: Automated CI/CD and Security Compliance Pipeline for Cloud Applications](https://github.com/Sec-DO/Automated-CI-CD-and-Security-Compliance-Pipeline-for-Cloud-Applications)**
   - *Platform*: AWS Cloud, DevOps, Security | *Duration*: 1 Month (CDAC PGCP ITISS)
   - *Architecture*: Terraform IaC provisioning, Jenkins multibranch CI/CD, SonarQube SAST, OWASP ZAP DAST, Trivy container layer auditing, Docker deployment, and Prometheus + Grafana real-time observability.
2. **Secure AWS VPC Architecture for Web Application Deployment**
   - *Architecture*: Multi-tier public/private subnets (10.0.0.0/16), Bastion Host for hardened SSH ingress, NAT Gateway for outbound update traffic, Security Groups, and NACLs.
3. **AWS CloudShell Interactive Portfolio & Terraform Deployment**
   - *Architecture*: AWS Amplify continuous hosting & Amazon S3 + CloudFront OAC provisioned via Terraform, zero-dependency Web Audio API terminal emulator, canvas matrix rain.

---

## ⚡ The Creative Feature: Interactive AWS CloudShell

Visitors receive a visible hint (`[💡 Hint: CloudShell (~)]` in the navbar and floating bottom-right pill) or can press **`~`** to launch the terminal:
- `help`: Lists all commands.
- `whoami`: Reveals Rahul's role at HeapTrace Technologies, CDAC ITISS education, and DevSecOps ethos.
- `certs`: Displays official AWS Certification IDs and verification links.
- `superpowers`: Displays technical skills with ASCII radar meters.
- `projects`: Inventory of engineering projects with `goto <id>` quick jump.
- `story`: Unfolds Rahul's journey and milestones.
- `sudo deploy`: Simulates an automated DevSecOps AWS deployment with sound & confetti!
- `matrix`: Drops full-screen cyberpunk digital rain.

---

## 🏗️ Deploy via Terraform (Option 1)

This project includes complete, production-grade **Terraform Infrastructure as Code (IaC)** in the [`terraform/`](terraform/) directory:

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform plan
terraform apply -auto-approve
```

Provisions:
- Private Amazon S3 bucket with all public access blocked.
- CloudFront Origin Access Control (OAC) with SigV4 signing.
- Global CloudFront distribution with HTTPS, Gzip/Brotli compression, and custom error rewrites.
- Response headers policy for HSTS, X-Content-Type-Options, X-Frame-Options, and Referrer-Policy.
- Automated static file uploads with accurate MIME types.

---

## ☁️ Deploy via AWS Amplify Hosting (Option 2)

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In AWS Console > **AWS Amplify**, click **Host web app**, connect your GitHub repo and select `main` branch.
3. AWS Amplify automatically reads [`amplify.yml`](amplify.yml) and deploys within 60 seconds with global CloudFront edge delivery and free SSL/HTTPS!

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
