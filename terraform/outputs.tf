# ==============================================================================
# TERRAFORM OUTPUTS
# ==============================================================================

output "website_url" {
  description = "Primary live HTTPS website URL"
  value       = var.enable_custom_domain ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.cdn.domain_name}"
}

output "custom_domain_apex_url" {
  description = "Apex domain HTTPS URL"
  value       = var.enable_custom_domain ? "https://${var.domain_name}" : "Custom domain disabled"
}

output "custom_domain_www_url" {
  description = "WWW subdomain HTTPS URL"
  value       = var.enable_custom_domain ? "https://www.${var.domain_name}" : "Custom domain disabled"
}

output "cloudfront_domain_name" {
  description = "Direct CloudFront distribution domain"
  value       = aws_cloudfront_distribution.cdn.domain_name
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.cdn.id
}

output "s3_bucket_name" {
  description = "Name of the S3 bucket storing static assets"
  value       = aws_s3_bucket.portfolio.id
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.portfolio.arn
}

output "acm_certificate_arn" {
  description = "ARN of the validated ACM SSL/TLS certificate"
  value       = var.enable_custom_domain ? aws_acm_certificate_validation.cert[0].certificate_arn : "Custom domain disabled"
}

output "route53_hosted_zone_id" {
  description = "Route 53 hosted zone ID for therahulpatil.in"
  value       = var.enable_custom_domain ? data.aws_route53_zone.primary[0].zone_id : "Custom domain disabled"
}

output "amplify_app_id" {
  description = "ID of the AWS Amplify App (if enable_amplify is true)"
  value       = var.enable_amplify ? aws_amplify_app.portfolio[0].id : "N/A (S3 + CloudFront active)"
}
