variable "name" {
  type = string
  description = "Name"
}

variable "domain" {
  type = string
  description = "Domain"
}

variable "image" {
  type = string
  description = "Docker image"
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
