resource "gatsby_text_link" "vs_code" {
  url   = "https://github.com/microsoft/vscode/"
  label = "VS Code"
}

resource "gatsby_text_link" "vs_code_license" {
  url   = "https://github.com/microsoft/vscode/blob/master/LICENSE.txt"
  label = "here"
}

resource "gatsby_text_link" "material_palenight" {
  url   = "https://github.com/whizkydee/vscode-material-palenight-theme"
  label = "vscode-material-palenight-theme"
}

resource "gatsby_text_link" "material_palenight_license" {
  url   = "https://github.com/whizkydee/vscode-material-palenight-theme/blob/master/license.md"
  label = "here"
}

resource "gatsby_text_link" "palenight_tmtheme" {
  url   = "https://github.com/equinusocio/material-theme"
  label = "Material Theme for Sublime Text"
}

resource "gatsby_text_link" "tmtheme_converter" {
  url   = "https://bitwiser.in/monaco-themes/"
  label = "this tmTheme to Monaco converter"
}

resource "gatsby_text_link" "palenight_tmtheme_license" {
  url   = "https://github.com/equinusocio/material-theme/blob/master/LICENSE.md"
  label = "here"
}

resource "gatsby_text_link" "prismjs" {
  url   = "https://github.com/PrismJS/prism/"
  label = "PrismJS"
}

resource "gatsby_text_link" "prismjs_license" {
  url   = "https://github.com/PrismJS/prism/blob/master/LICENSE"
  label = "here"
}

resource "gatsby_text_link" "dank_mono" {
  url   = "https://dank.sh"
  label = "Dank Mono"
}

locals {
  credits = {
    css = {
      description  = "Large quantities of the CSS for this site came from ${gatsby_text_link.vs_code.contents}"
      copyright    = "2015 - present Microsoft Corporation"
      license_link = gatsby_text_link.vs_code_license.contents
    },
    palenight = {
      description  = "Colour scheme for this website was taken from ${gatsby_text_link.material_palenight.contents}"
      copyright    = "2017-present Olaolu Olawuyi"
      license_link = gatsby_text_link.material_palenight_license.contents
    },
    monaco_theme = {
      description  = "Theme for Monaco Editor was taken from ${gatsby_text_link.palenight_tmtheme.contents} and converted using ${gatsby_text_link.tmtheme_converter.contents}"
      copyright    = "2016 Mattia Astorino"
      license_link = gatsby_text_link.palenight_tmtheme_license.contents
    }
    prismjs = {
      description  = "Syntax highlighting scheme base was taken from ${gatsby_text_link.prismjs.contents}"
      copyright    = "2012 Lea Verou"
      license_link = gatsby_text_link.prismjs_license.contents
    },
    dank_mono = {
      description  = "Font used site-wide is ${gatsby_text_link.dank_mono.contents}"
      copyright    = "2018 Grazil Ltd"
      license_link = null
    }
  }
}

resource "gatsby_text_code" "credits_copyright" {
  for_each = local.credits

  code = "Copyright (c) ${each.value.copyright}"
}

resource "gatsby_text_list" "credits_subitems_list" {
  for_each = local.credits

  prefix = "  - "
  items = concat(
    [gatsby_text_code.credits_copyright[each.key].contents],
    each.value.license_link != null ? ["License available ${each.value.license_link}"] : []
  )

}

resource "gatsby_text_list" "credits_list" {
  items = [for key, value in local.credits : "${value.description}\n${gatsby_text_list.credits_subitems_list[key].contents}"]
}

resource "gatsby_page" "credits" {
  contents = gatsby_text_list.credits_list.contents
  frontmatter = {
    path        = "/credits"
    weight      = 100
    hidden      = true
    title       = "credits"
    description = "Credits to all of the things incorporated to make this site"
  }
}
