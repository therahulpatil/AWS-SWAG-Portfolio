variable "aws_region" {
  description = "The AWS region to deploy infrastructure in"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Name identifier for the portfolio project resources"
  type        = string
  default     = "rahul-patil-portfolio"
}

variable "environment" {
  description = "Deployment environment (e.g., prod, dev, stage)"
  type        = string
  default     = "prod"
}

variable "domain_name" {
  description = "Custom domain name managed in AWS Route 53"
  type        = string
  default     = "therahulpatil.in"
}

variable "enable_custom_domain" {
  description = "Whether to provision ACM certificate, Route 53 DNS records, and CloudFront custom domain aliases"
  type        = bool
  default     = true
}

variable "enable_amplify" {
  description = "Whether to provision an AWS Amplify App in addition to / instead of S3 + CloudFront"
  type        = bool
  default     = false
}

variable "github_repository" {
  description = "GitHub repository URL for AWS Amplify source connection"
  type        = string
  default     = "https://github.com/therahulpatil/AWS-SWAG-Portfolio"
}

variable "github_access_token" {
  description = "Personal access token (PAT) for GitHub to connect AWS Amplify"
  type        = string
  default     = ""
  sensitive   = true
}

variable "tags" {
  description = "Common resource tags applied to all AWS infrastructure"
  type        = map(string)
  default = {
    Project     = "AWS-SWAG-Portfolio"
    Owner       = "Rahul Patil"
    Role        = "DevOps Engineer Associate"
    Company     = "HeapTrace Technologies"
    ManagedBy   = "Terraform"
    Environment = "Production"
    Domain      = "therahulpatil.in"
  }
}
