resource "gatsby_text_link" "colab_link" {
  url   = "https://www.colabsoftware.com"
  label = "CoLab Software"
}

locals {
  links = {
    GitHub   = "https://github.com/nint8835"
    LinkedIn = "https://www.linkedin.com/in/nint8835"
    Twitter  = "https://twitter.com/BootlegJohn"
    Email    = "mailto:riley@rileyflynn.me"
  }
}

resource "gatsby_text_link" "link_list_link" {
  for_each = local.links

  url   = each.value
  label = each.key
}

resource "gatsby_text_heading" "link_list_header" {
  text  = "Links"
  level = 3
}

resource "gatsby_text_list" "link_list" {
  items = [for link in gatsby_text_link.link_list_link : link.contents]
}

resource "gatsby_text_list" "index_md" {
  prefix = ""
  items = [
    "Hi! I'm Riley. I'm a Full Stack Developer for ${gatsby_text_link.colab_link.contents}",
    "",
    gatsby_text_heading.link_list_header.contents,
    "",
    gatsby_text_list.link_list.contents
  ]
}

resource "gatsby_page" "demo_page" {
  contents = gatsby_text_list.index_md.contents
  frontmatter = {
    path        = "/"
    weight      = 0
    title       = "index"
    description = "Full Stack Developer for CoLab Software"
    hidden      = false
  }
}
