resource "gatsby_text_link" "issf" {
  label = "ISSF"
  url   = "https://github.com/toobigtoignore/issf"
}

resource "gatsby_text_list" "mun_contract_tasks" {
  items = [
    "Rewrote site's search functionality to be more reliable and to return more relevant results",
    "Discovered and resolved a number of security issues",
    "Cleaned and wrote documentation for all backend code to make it easier for future developers to work with it",
    "Added native PDF generation to the site, so PDF reports would be more accessible to people without the software or knowledge required",
    "Fixed many bugs all over the site"
  ]
}

resource "gatsby_text_list" "mun_contract_tech" {
  items = [
    "Docker",
    "Django",
    "Postgres"
  ]
}

resource "gatsby_text_list" "hickmans_tasks" {
  items = [
    "Handled the check-in process for incoming customers",
    "Performed a number of simple maintenance tasks for customers (topping up windshield wash, retorquing lug nuts, refilling air in tires, etc.)",
    "Acted as tech support for customers, assisting them with tasks such as programming favourites into their radios, pairing their phones with their infotainment system, etc.",
    "Managed the fleet of service loaners in the absence of the main service cashier",
    "Assisted service staff with the migration to a new iPad-based check-in system",
  ]
}

locals {
  roles = {
    colab_fulltime = {
      role        = "Full Stack Developer"
      duration    = "September 2019 - Present"
      description = "Responsible for working on many aspects of CoLab, a cloud-based design review and issue tracking platform."
    },
    colab_internship = {
      role        = "Full Stack Development Intern"
      duration    = "April 2019 - September 2019"
      description = "Responsible for working on many aspects of CoLab, a cloud-based design review and issue tracking platform."
    },
    mun_parttime = {
      role        = "System Administrator & Software Developer"
      duration    = "January 2019 - April 2019"
      description = "Responsible for handling the day-to-day technical management of ${gatsby_text_link.issf.contents} for Too Big To Ignore."
    },
    mun_contract = {
      role        = "Software Developer"
      duration    = "December 2018 - January 2019"
      description = <<EOL
Worked as a contracted software developer over the Christmas break working on the backend of ${gatsby_text_link.issf.contents} for Too Big To Ignore.

Performed a number of tasks such as:

${gatsby_text_list.mun_contract_tasks.contents}

Technologies used:

${gatsby_text_list.mun_contract_tech.contents}
      EOL
    },
    hickmans = {
      role        = "Service Valet",
      duration    = "May 2017 - August 2017, April 2018 - August 2018"
      description = <<EOL
Worked as a summer employee to perform a variety of tasks, such as:

${gatsby_text_list.hickmans_tasks.contents}
        EOL
    }
  }
}

resource "gatsby_text_bold" "role_title" {
  for_each = local.roles

  text = each.value.role
}

resource "gatsby_text_italic" "role_duration" {
  for_each = local.roles

  text = each.value.duration
}

resource "gatsby_text_list" "role_subtitle" {
  for_each = local.roles

  separator = " - "
  prefix    = ""

  items = [
    gatsby_text_bold.role_title[each.key].contents,
    gatsby_text_italic.role_duration[each.key].contents
  ]
}

resource "gatsby_text_image" "colab" {
  alt_text = "CoLab Software"
  path     = "/images/work/colab-software.png"
}

resource "gatsby_text_image" "mun" {
  alt_text = "Memorial University of Newfoundland"
  path     = "/images/work/memorial-university-of-newfoundland.png"
}

resource "gatsby_text_image" "hickmans" {
  alt_text = "Hickman Chevrolet Cadillac"
  path     = "/images/work/hickman-chevrolet-cadillac.jpg"
}

resource "gatsby_text_heading" "colab" {
  level = 2
  text  = "CoLab Software"
}

resource "gatsby_text_heading" "mun" {
  level = 2
  text  = "Memorial University of Newfoundland"
}

resource "gatsby_text_heading" "hickmans" {
  level = 2
  text  = "Hickman Chevrolet Cadillac"
}

resource "gatsby_text_list" "work_contents" {
  separator = "\n\n"
  prefix    = ""
  items = [
    gatsby_text_image.colab.contents,
    gatsby_text_heading.colab.contents,
    gatsby_text_list.role_subtitle["colab_fulltime"].contents,
    local.roles.colab_fulltime.description,
    gatsby_text_horizontal_rule.horizontal_rule.contents,
    gatsby_text_list.role_subtitle["colab_internship"].contents,
    local.roles.colab_internship.description,
    gatsby_text_horizontal_rule.horizontal_rule.contents,
    gatsby_text_image.mun.contents,
    gatsby_text_heading.mun.contents,
    gatsby_text_list.role_subtitle["mun_parttime"].contents,
    local.roles.mun_parttime.description,
    gatsby_text_horizontal_rule.horizontal_rule.contents,
    gatsby_text_list.role_subtitle["mun_contract"].contents,
    local.roles.mun_contract.description,
    gatsby_text_horizontal_rule.horizontal_rule.contents,
    gatsby_text_image.hickmans.contents,
    gatsby_text_heading.hickmans.contents,
    gatsby_text_list.role_subtitle["hickmans"].contents,
    local.roles.hickmans.description
  ]
}

resource "gatsby_page" "work" {
  contents = gatsby_text_list.work_contents.contents
  frontmatter = {
    path        = "/work"
    title       = "work"
    weight      = 3
    description = "My past and current work experience."
    hidden      = false
  }
}
