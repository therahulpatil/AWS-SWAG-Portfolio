# 🏗️ Terraform Infrastructure as Code: AWS Portfolio Deployment

Enterprise-grade Terraform modules engineered by **Rahul Patil** (DevOps Engineer Associate at **HeapTrace Technologies**) to deploy this portfolio to Amazon Web Services with high availability, security headers, and zero public S3 bucket exposure.

---

## 🏛️ Architecture Overview

```
                                [ End Users Worldwide ]
                                           │
                                    (HTTPS Port 443)
                                           ▼
                       ┌────────────────────────────────────────┐
                       │   Amazon CloudFront CDN Distribution    │
                       │   - Global Edge Caching (450+ PoPs)     │
                       │   - Managed SSL/TLS Certificate         │
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
├── s3_upload.tf             # Automated S3 file upload with MIME type mapping and MD5 etags
├── amplify.tf               # Alternative/optional AWS Amplify App Terraform resource
├── variables.tf             # Configurable input variables (region, project_name, tags)
├── outputs.tf               # Live website URL, CloudFront ID, and S3 Bucket ARN
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
*(Optional)* Customize `aws_region` or `project_name` in `terraform.tfvars`.

### 3. Review Execution Plan
Run a dry-run plan to inspect the resources that will be provisioned:
```bash
terraform plan
```

### 4. Deploy Infrastructure
Apply the configuration to provision the S3 bucket, CloudFront distribution, security policies, and automatically upload all website files:
```bash
terraform apply -auto-approve
```

---

## 📊 Deployment Outputs

Upon completion, Terraform will output your live URL:
```text
Apply complete! Resources: 14 added, 0 changed, 0 destroyed.

Outputs:

cloudfront_distribution_id = "E2XXXXXXXEXAMPLE"
cloudfront_domain_name     = "d111111abcdef8.cloudfront.net"
s3_bucket_arn              = "arn:aws:s3:::rahul-patil-portfolio-prod-xyz123"
s3_bucket_name             = "rahul-patil-portfolio-prod-xyz123"
website_url                = "https://d111111abcdef8.cloudfront.net"
```

You can now open the **`website_url`** in any web browser to see your live portfolio!

---

## 🛡️ DevSecOps & Security Hardening Highlights

1. **Defense-in-Depth (Zero Public S3 Access)**:
   - S3 bucket public access is 100% blocked via `aws_s3_bucket_public_access_block`.
   - Direct access to the S3 bucket returns `403 Access Denied`.
   - Access is restricted exclusively to the CloudFront distribution via **Origin Access Control (OAC)** with Signature Version 4 (`sigv4`).

2. **Hardened Security Response Headers**:
   - `Strict-Transport-Security` (HSTS): Enforces 1-year HTTPS preload.
   - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing attacks.
   - `X-Frame-Options: SAMEORIGIN`: Prevents clickjacking.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Protects referrer leakage.

3. **Continuous Asset Sync**:
   - `s3_upload.tf` calculates MD5 file hashes (`filemd5`) so only modified files are uploaded on subsequent `terraform apply` executions.

---

## 🧹 Clean Teardown

To destroy all provisioned AWS resources when finished:
```bash
terraform destroy -auto-approve
```
