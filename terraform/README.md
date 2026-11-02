# 🏗️ Terraform Infrastructure as Code: AWS Portfolio & Custom Domain Deployment

Enterprise-grade Terraform modules engineered by **Rahul Patil** (DevOps Engineer Associate at **HeapTrace Technologies**) to deploy this portfolio to Amazon Web Services with **Route 53 DNS**, **AWS Certificate Manager (ACM) SSL/TLS**, and **CloudFront CDN** with zero public S3 bucket exposure.

---

## 🏛️ Architecture Overview

```
                                [ End Users Worldwide ]
                                           │
                        https://therahulpatil.in & www.therahulpatil.in
                                           │
                                           ▼
                       ┌────────────────────────────────────────┐
                       │           AWS Route 53 DNS             │
                       │   - Hosted Zone: therahulpatil.in      │
                       │   - Apex 'A' & 'AAAA' Alias Records    │
                       │   - 'www' 'A' & 'AAAA' Alias Records   │
                       │   - CNAME DNS Validation for ACM Cert  │
                       └───────────────────┬────────────────────┘
                                           │
                                    (HTTPS Port 443)
                                           ▼
                       ┌────────────────────────────────────────┐
                       │   Amazon CloudFront CDN Distribution    │
                       │   - Custom Domain: therahulpatil.in    │
                       │   - AWS Certificate Manager (ACM) SSL  │
                       │   - Global Edge Caching (450+ PoPs)     │
                       │   - TLSv1.2_2021 Security Policy       │
                       │   - Gzip & Brotli Auto-Compression      │
                       │   - Strict Security Headers (HSTS, CSP) │
                       │   - Custom 403/404 SPA Error Rewrites   │
                       └───────────────────┬────────────────────┘
                                           │
                        Origin Access Control (OAC - SigV4)
                                           │
                                           ▼
                       ┌────────────────────────────────────────┐
                       │          Amazon S3 Bucket              │
                       │   - 100% Block All Public Access       │
                       │   - Server-Side Encryption (AES256)    │
                       │   - Bucket Versioning Enabled          │
                       │   - Exclusive OAC Read Policy          │
                       │   - Automated Asset Sync with MIME     │
                       └────────────────────────────────────────┘
```

---

## 📁 File Structure

```
terraform/
├── main.tf                  # S3 Bucket, CloudFront OAC, CDN Distribution, Security Headers & Policies
├── dns_acm.tf               # Route 53 Zone lookup, ACM Certificate, DNS validation & Alias A/AAAA records
├── s3_upload.tf             # Automated S3 file upload with MIME type mapping and MD5 etags
├── amplify.tf               # Alternative/optional AWS Amplify App & Custom Domain Terraform resource
├── variables.tf             # Configurable input variables (domain_name = "therahulpatil.in", region, tags)
├── outputs.tf               # Live website URL, CloudFront ID, ACM ARN, and Route 53 Zone ID
├── terraform.tfvars.example  # Example variable definitions
└── README.md                # Deployment walkthrough & verification guide
```

---

## 🚀 Quick Deployment Guide

### Prerequisites
1. **AWS CLI** configured with administrator or deployment credentials:
   ```bash
   aws configure
   ```
2. **Terraform CLI** (v1.5.0 or higher) installed. Verify with:
   ```bash
   terraform version
   ```
3. Existing **Route 53 Hosted Zone** for `therahulpatil.in`.

### 1. Initialize Working Directory
Navigate into the `terraform` folder and initialize the required AWS and Random providers:
```bash
cd terraform
terraform init
```

### 2. Configure Variables
Copy the example variables file:
```bash
cp terraform.tfvars.example terraform.tfvars
```
Verify `domain_name = "therahulpatil.in"` and `enable_custom_domain = true`.

### 3. Review Execution Plan
Run a dry-run plan to inspect the resources that will be provisioned:
```bash
terraform plan
```

### 4. Deploy Infrastructure
Apply the configuration to provision the S3 bucket, request & validate the ACM SSL certificate, configure Route 53 alias records, and deploy CloudFront:
```bash
terraform apply -auto-approve
```

---

## 📊 Deployment Outputs

Upon completion, Terraform will output your live custom domain URL:
```text
Apply complete! Resources: 20 added, 0 changed, 0 destroyed.

Outputs:

acm_certificate_arn    = "arn:aws:acm:us-east-1:XXXXXXXXXXXX:certificate/xxxx-xxxx-xxxx"
cloudfront_domain_name = "d111111abcdef8.cloudfront.net"
custom_domain_apex_url = "https://therahulpatil.in"
custom_domain_www_url  = "https://www.therahulpatil.in"
route53_hosted_zone_id = "Z0123456789ABCDEF"
s3_bucket_name         = "rahul-patil-portfolio-prod-xyz123"
website_url            = "https://therahulpatil.in"
```

You can now open **`https://therahulpatil.in`** in any web browser with secure HTTPS!

---

## 🛡️ DevSecOps & Security Hardening Highlights

1. **Automated ACM DNS Validation**:
   - Requests a public SSL/TLS certificate for both `therahulpatil.in` and `www.therahulpatil.in`.
   - Automatically populates the DNS CNAME validation records into the Route 53 hosted zone.
   - Waits for AWS validation (`aws_acm_certificate_validation`) before attaching to CloudFront.

2. **Defense-in-Depth (Zero Public S3 Access)**:
   - S3 bucket public access is 100% blocked via `aws_s3_bucket_public_access_block`.
   - Direct access to the S3 bucket returns `403 Access Denied`.
   - Access is restricted exclusively to the CloudFront distribution via **Origin Access Control (OAC)** with Signature Version 4 (`sigv4`).

3. **Modern TLS & Security Response Headers**:
   - Minimum TLS Protocol: `TLSv1.2_2021` with `sni-only`.
   - `Strict-Transport-Security` (HSTS): Enforces 1-year HTTPS preload.
   - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing attacks.
   - `X-Frame-Options: SAMEORIGIN`: Prevents clickjacking.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Protects referrer leakage.

---

## 🧹 Clean Teardown

To destroy all provisioned AWS resources when finished:
```bash
terraform destroy -auto-approve
```
