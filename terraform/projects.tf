resource "gatsby_text_link" "itunesrichpresence" {
  label = "GitHub"
  url   = "https://github.com/nint8835/iTunesRichPresence"
}

resource "gatsby_text_link" "chainmail" {
  label = "GitHub"
  url   = "https://github.com/Chainmail-Project/Chainmail"
}

resource "gatsby_text_link" "schooltracker" {
  label = "GitHub"
  url   = "https://github.com/nint8835/SchoolTracker"
}

resource "gatsby_text_link" "jigsaw" {
  label = "GitHub"
  url   = "https://github.com/nint8835/jigsaw"
}

resource "gatsby_text_link" "jigsaw_docs" {
  label = "Docs"
  url   = "https://jigsaw.readthedocs.io/en/latest/"
}

resource "gatsby_text_link" "parsley" {
  label = "GitHub"
  url   = "https://github.com/nint8835/parsley"
}

resource "gatsby_text_link" "parsley_docs" {
  label = "Docs"
  url   = "https://pkg.go.dev/github.com/nint8835/parsley"
}

resource "gatsby_text_link" "borik" {
  label = "GitHub"
  url   = "https://github.com/fogo-sh/borik"
}

resource "gatsby_text_link" "terraform_provider_gatsby" {
  label = "GitHub (terraform-provider-gatsby)"
  url   = "https://github.com/nint8835/terraform-provider-gatsby"
}

resource "gatsby_text_link" "gatsby_transformer_terraform" {
  label = "GitHub (gatsby-transformer-terraform)"
  url   = "https://github.com/nint8835/gatsby-transformer-terraform"
}

resource "gatsby_text_link" "nintbotfordiscord" {
  label = "GitHub"
  url   = "https://github.com/nint8835/NintbotForDiscord"
}

resource "gatsby_text_link" "automata" {
  label = "GitHub"
  url   = "https://github.com/MUNComputerScienceSociety/Automata"
}

locals {
  projects = {
    itunesrichpresence = {
      name        = "iTunesRichPresence"
      description = "Utilizes the iTunes COM interface and Discord's RPC and Rich Presence APIs to share various pieces of information about the currently played music with other Discord users."
      links       = gatsby_text_link.itunesrichpresence.contents
    },
    chainmail = {
      name        = "Chainmail"
      description = "Wraps around the vanilla Minecraft server, intercepting output and injecting input in order to add simple plugin support."
      links       = gatsby_text_link.chainmail.contents
    }
    schooltracker = {
      name        = "SchoolTracker"
      description = "Scrapes the NLESD Status Central website to keep track of the status for various schools, tweeting out whenever one updates."
      links       = gatsby_text_link.schooltracker.contents
    }
    jigsaw = {
      name        = "Jigsaw"
      description = "Easy to use library for adding plugin functionality to Python projects. Used to provide plugin functionality to Chainmail and NintbotForDiscord."
      links       = "${gatsby_text_link.jigsaw.contents} ${gatsby_text_link.jigsaw_docs.contents}"
    }
    parsley = {
      name        = "Parsley"
      description = "Command parsing library for discordgo."
      links       = "${gatsby_text_link.parsley.contents} ${gatsby_text_link.parsley_docs.contents}"
    }
    borik = {
      name        = "Borik"
      description = "Image manipulation-focused Discord bot based on ImageMagick."
      links       = gatsby_text_link.borik.contents
    }
    terraform_gatsby = {
      name        = "terraform-provider-gatsby & gatsby-transformer-terraform"
      description = "Terraform provider and Gatsby plugin to allow writing content for Gatsby-based sites using Terraform."
      links       = "${gatsby_text_link.terraform_provider_gatsby.contents} ${gatsby_text_link.gatsby_transformer_terraform.contents}"

    }
    nintbotfordiscord = {
      name        = "NintbotForDiscord"
      description = "One of the very first modular bot frameworks for Discord."
      links       = gatsby_text_link.nintbotfordiscord.contents
    }
    automata = {
      name        = "Automata"
      description = "Discord bot responsible for managing the MUN Computer Science Society Discord server, providing a variety of services including identity verification."
      links       = gatsby_text_link.automata.contents
    }
  }
}

resource "gatsby_text_image" "project_image" {
  for_each = local.projects

  alt_text = each.value.name
  path     = "/images/projects/${each.value.name}.png"
}

resource "gatsby_text_heading" "project_heading" {
  for_each = local.projects

  text  = each.value.name
  level = 2
}

resource "gatsby_text_list" "project_entry" {
  for_each = local.projects

  separator = "\n\n"
  prefix    = ""
  items = [
    gatsby_text_image.project_image[each.key].contents,
    gatsby_text_heading.project_heading[each.key].contents,
    each.value.description,
    each.value.links
  ]
}

resource "gatsby_text_list" "projects_list" {
  separator = "\n\n${gatsby_text_horizontal_rule.horizontal_rule.contents}\n\n"
  prefix    = ""
  items     = [for project in gatsby_text_list.project_entry : project.contents]
}

resource "gatsby_page" "projects" {
  frontmatter = {
    weight      = 1
    path        = "/projects"
    title       = "projects"
    description = "A selected collection of the projects I've worked on"
    hidden      = false
  }
  contents = gatsby_text_list.projects_list.contents
}
