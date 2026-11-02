# ==============================================================================
# TERRAFORM OUTPUTS
# ==============================================================================

output "s3_bucket_name" {
  description = "Name of the S3 bucket storing static assets"
  value       = aws_s3_bucket.portfolio.id
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.portfolio.arn
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.cdn.id
}

output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.cdn.domain_name
}

output "website_url" {
  description = "Live HTTPS URL to access Rahul Patil's Portfolio"
  value       = "https://${aws_cloudfront_distribution.cdn.domain_name}"
}

output "amplify_app_id" {
  description = "ID of the AWS Amplify App (if enable_amplify is true)"
  value       = var.enable_amplify ? aws_amplify_app.portfolio[0].id : "N/A (S3 + CloudFront active)"
}

output "amplify_default_domain" {
  description = "Default domain for AWS Amplify (if enable_amplify is true)"
  value       = var.enable_amplify ? "https://main.${aws_amplify_app.portfolio[0].default_domain}" : "N/A (S3 + CloudFront active)"
}
