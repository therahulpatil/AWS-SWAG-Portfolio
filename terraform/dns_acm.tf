# ==============================================================================
# AWS ROUTE 53 & AWS CERTIFICATE MANAGER (ACM) - SSL/TLS HTTPS CONFIGURATION
# Domain: therahulpatil.in & www.therahulpatil.in
# ==============================================================================

# ACM Certificates for CloudFront MUST be provisioned in us-east-1
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
  default_tags {
    tags = var.tags
  }
}

# 1. Lookup existing Route 53 Hosted Zone for therahulpatil.in
data "aws_route53_zone" "primary" {
  count        = var.enable_custom_domain ? 1 : 0
  name         = var.domain_name
  private_zone = false
}

# 2. Request Public SSL/TLS Certificate in AWS Certificate Manager (ACM)
resource "aws_acm_certificate" "cert" {
  count                     = var.enable_custom_domain ? 1 : 0
  provider                  = aws.us_east_1
  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]
  validation_method         = "DNS"

  tags = merge(var.tags, {
    Name = "${var.project_name}-acm-cert"
  })

  lifecycle {
    create_before_destroy = true
  }
}

# 3. Create DNS CNAME Validation Records in Route 53
resource "aws_route53_record" "cert_validation" {
  for_each = var.enable_custom_domain ? {
    for dvo in aws_acm_certificate.cert[0].domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  } : {}

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.primary[0].zone_id
}

# 4. Validate ACM Certificate using Route 53 DNS Records
resource "aws_acm_certificate_validation" "cert" {
  count                   = var.enable_custom_domain ? 1 : 0
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.cert[0].arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

# 5. Route 53 Apex Record: therahulpatil.in -> CloudFront (IPv4 A Record)
resource "aws_route53_record" "apex_a" {
  count   = var.enable_custom_domain ? 1 : 0
  zone_id = data.aws_route53_zone.primary[0].zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# 6. Route 53 Apex Record: therahulpatil.in -> CloudFront (IPv6 AAAA Record)
resource "aws_route53_record" "apex_aaaa" {
  count   = var.enable_custom_domain ? 1 : 0
  zone_id = data.aws_route53_zone.primary[0].zone_id
  name    = var.domain_name
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# 7. Route 53 Subdomain Record: www.therahulpatil.in -> CloudFront (IPv4 A Record)
resource "aws_route53_record" "www_a" {
  count   = var.enable_custom_domain ? 1 : 0
  zone_id = data.aws_route53_zone.primary[0].zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# 8. Route 53 Subdomain Record: www.therahulpatil.in -> CloudFront (IPv6 AAAA Record)
resource "aws_route53_record" "www_aaaa" {
  count   = var.enable_custom_domain ? 1 : 0
  zone_id = data.aws_route53_zone.primary[0].zone_id
  name    = "www.${var.domain_name}"
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}
