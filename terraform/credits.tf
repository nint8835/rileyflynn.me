resource "gatsby_text_link" "vs_code" {
  url   = "https://github.com/microsoft/vscode/"
  label = "VS Code"
}

resource "gatsby_text_link" "vs_code_license" {
  url   = "https://github.com/microsoft/vscode/blob/master/LICENSE.txt"
  label = "here"
}

resource "gatsby_text_link" "monokai_pro" {
  url   = "https://monokai.pro/"
  label = "Monokai Pro"
}

resource "gatsby_text_link" "monokai_tmtheme" {
  url   = "https://tmtheme-editor.herokuapp.com/#!/editor/theme/Monokai"
  label = "The tmTheme editor Monokai example"
}

resource "gatsby_text_link" "tmtheme_converter" {
  url   = "https://bitwiser.in/monaco-themes/"
  label = "this tmTheme to Monaco converter"
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
    monokai = {
      description  = "Colour scheme for this website was taken from ${gatsby_text_link.monokai_pro.contents}. It's a fantastic theme, go give them your money if you use VS Code or Sublime Text"
      copyright    = "2017 – 2021 Monokai"
      license_link = null
    },
    monaco_theme = {
      description  = "Theme for Monaco Editor was based off ${gatsby_text_link.monokai_tmtheme.contents}, updated with Monokai Pro's colours, and converted using ${gatsby_text_link.tmtheme_converter.contents}"
      copyright    = null
      license_link = null
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

  code = each.value.copyright != null ? "Copyright (c) ${ each.value.copyright }" : ""
}

resource "gatsby_text_list" "credits_subitems_list" {
  for_each = local.credits

  prefix = "  - "
  items = concat(
    each.value.copyright != null ? [gatsby_text_code.credits_copyright[each.key].contents] : [],
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
