# ==============================================================================
# OPTIONAL: AWS AMPLIFY APP RESOURCE VIA TERRAFORM
# Set `enable_amplify = true` in terraform.tfvars to provision this resource
# ==============================================================================

resource "aws_amplify_app" "portfolio" {
  count = var.enable_amplify ? 1 : 0

  name       = var.project_name
  repository = var.github_repository

  # Optional GitHub access token for private repos or automated webhook sync
  access_token = var.github_access_token != "" ? var.github_access_token : null

  # Build specification for static portfolio
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        build:
          commands: []
      artifacts:
        baseDirectory: .
        files:
          - '**/*'
      cache:
        paths: []
  EOT

  # Custom rewrite rules for Single Page Application navigation
  custom_rule {
    source = "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>"
    status = "200"
    target = "/index.html"
  }

  environment_variables = {
    ENV = var.environment
  }

  tags = var.tags
}

resource "aws_amplify_branch" "main" {
  count = var.enable_amplify ? 1 : 0

  app_id      = aws_amplify_app.portfolio[0].id
  branch_name = "main"

  enable_auto_build = true
  stage             = "PRODUCTION"

  tags = var.tags
}


# Custom Domain Association for AWS Amplify
resource "aws_amplify_domain_association" "domain" {
  count = var.enable_amplify && var.enable_custom_domain ? 1 : 0

  app_id      = aws_amplify_app.portfolio[0].id
  domain_name = var.domain_name

  # Apex domain: therahulpatil.in
  sub_domain {
    branch_name = aws_amplify_branch.main[0].branch_name
    prefix      = ""
  }

  # Subdomain: www.therahulpatil.in
  sub_domain {
    branch_name = aws_amplify_branch.main[0].branch_name
    prefix      = "www"
  }
}
