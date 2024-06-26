variable "name" {
  type = string
  description = "Name"
}

variable "domain" {
  type = string
  description = "Domain"
}

variable "managed-zone" {
  type = string
  description = "Managed zone"
}

variable "image" {
  type = string
  description = "Docker image"
}

variable "ssl-certificate" {
  type = string
  description = "SSL certificate"
}

variable "region" {
  type = string
  description = "GCP region"
}

variable "environment-variables" {
  type = map(string)
  default = {}
  description = "Environment"
  sensitive = true
}

variable "secrets" {
  type = set(string)
  default = []
  description = "Secrets"
  sensitive = true
}

variable "resource-pool-bucket" {
  type = string
  description = "Resource pool bucket name"
}

variable "override-domain" {
  type = string
  description = "Override domain"
  default = ""
}
