# ==============================================================================
# AUTOMATED ASSET UPLOAD TO S3 WITH CORRECT MIME TYPES & ETAGS
# ==============================================================================

locals {
  root_dir = "${path.module}/.."

  # MIME type mappings for accurate browser rendering and zero-latency caching
  mime_types = {
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".yml"  = "text/yaml"
    ".md"   = "text/markdown"
  }

  # Scan static files from project root
  site_files = fileset(local.root_dir, "{index.html,css/**,js/**,assets/**}")
}

resource "aws_s3_object" "site_assets" {
  for_each = local.site_files

  bucket = aws_s3_bucket.portfolio.id
  key    = each.value
  source = "${local.root_dir}/${each.value}"
  etag   = filemd5("${local.root_dir}/${each.value}")

  content_type = lookup(
    local.mime_types,
    regex("\\.[^.]+$", each.value),
    "binary/octet-stream"
  )

  depends_on = [
    aws_s3_bucket.portfolio,
    aws_s3_bucket_public_access_block.portfolio_block_public
  ]
}
