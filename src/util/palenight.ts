import type { editor } from "monaco-editor/esm/vs/editor/editor.api";

// Generated from https://github.com/equinusocio/material-theme/blob/master/schemes/Material-Theme-Palenight.tmTheme
// using https://bitwiser.in/monaco-themes/
const PalenightTheme: editor.IStandaloneThemeData = {
  base: "vs-dark",
  inherit: true,
  rules: [
    {
      foreground: "676e95",
      fontStyle: "italic",
      token: "comment",
    },
    {
      foreground: "676e95",
      fontStyle: "italic",
      token: "punctuation.definition.comment",
    },
    {
      foreground: "959dcb",
      token: "variable",
    },
    {
      foreground: "959dcb",
      token: "string constant.other.placeholder",
    },
    {
      foreground: "ffffff",
      token: "constant.other.color",
    },
    {
      foreground: "ffffff",
      background: "ff5370",
      token: "invalid",
    },
    {
      foreground: "ffffff",
      background: "ff5370",
      token: "invalid.illegal",
    },
    {
      foreground: "ffffff",
      background: "ff5370",
      token: "invalid.broken",
    },
    {
      foreground: "ffffff",
      background: "c3e88d",
      token: "invalid.unimplemented",
    },
    {
      foreground: "ffffff",
      background: "c792ea",
      token: "invalid.deprecated",
    },
    {
      foreground: "c792ea",
      token: "keyword",
    },
    {
      foreground: "c792ea",
      token: "storage.type",
    },
    {
      foreground: "c792ea",
      token: "storage.modifier",
    },
    {
      fontStyle: "italic",
      token: "storage.type",
    },
    {
      fontStyle: "italic",
      token: "keyword.control",
    },
    {
      foreground: "89ddff",
      token: "keyword.operator",
    },
    {
      foreground: "89ddff",
      token: "constant.other.color",
    },
    {
      foreground: "89ddff",
      token: "punctuation",
    },
    {
      foreground: "89ddff",
      token: "meta.tag",
    },
    {
      foreground: "89ddff",
      token: "punctuation.definition.tag",
    },
    {
      foreground: "89ddff",
      token: "punctuation.separator.inheritance.php",
    },
    {
      foreground: "89ddff",
      token: "punctuation.definition.tag.html",
    },
    {
      foreground: "89ddff",
      token: "punctuation.definition.tag.begin.html",
    },
    {
      foreground: "89ddff",
      token: "punctuation.definition.tag.end.html",
    },
    {
      foreground: "89ddff",
      token: "punctuation.section.embedded",
    },
    {
      foreground: "89ddff",
      token: "keyword.other.template",
    },
    {
      foreground: "89ddff",
      token: "keyword.other.substitution",
    },
    {
      foreground: "f07178",
      token: "entity.name.tag",
    },
    {
      foreground: "f07178",
      token: "meta.tag.sgml",
    },
    {
      foreground: "f07178",
      token: "markup.deleted.git_gutter",
    },
    {
      foreground: "82aaff",
      token: "entity.name.function",
    },
    {
      foreground: "82aaff",
      token: "meta.function-call",
    },
    {
      foreground: "82aaff",
      token: "variable.function",
    },
    {
      foreground: "82aaff",
      token: "support.function",
    },
    {
      foreground: "82aaff",
      token: "keyword.other.special-method",
    },
    {
      foreground: "82aaff",
      token: "meta.block-level",
    },
    {
      foreground: "f07178",
      token: "support.other.variable",
    },
    {
      foreground: "f07178",
      token: "string.other.link",
    },
    {
      foreground: "f78c6c",
      token: "constant.numeric",
    },
    {
      foreground: "f78c6c",
      token: "constant.language",
    },
    {
      foreground: "f78c6c",
      token: "support.constant",
    },
    {
      foreground: "f78c6c",
      token: "constant.character",
    },
    {
      foreground: "f78c6c",
      token: "variable.parameter",
    },
    {
      foreground: "f78c6c",
      token: "keyword.other.unit",
    },
    {
      foreground: "c3e88d",
      fontStyle: "normal",
      token: "string",
    },
    {
      foreground: "c3e88d",
      fontStyle: "normal",
      token: "constant.other.symbol",
    },
    {
      foreground: "c3e88d",
      fontStyle: "normal",
      token: "constant.other.key",
    },
    {
      foreground: "c3e88d",
      fontStyle: "normal",
      token: "entity.other.inherited-class",
    },
    {
      foreground: "c3e88d",
      fontStyle: "normal",
      token: "markup.heading",
    },
    {
      foreground: "c3e88d",
      fontStyle: "normal",
      token: "markup.inserted.git_gutter",
    },
    {
      foreground: "c3e88d",
      fontStyle: "normal",
      token:
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
    },
    {
      foreground: "ffcb6b",
      token: "entity.name.class",
    },
    {
      foreground: "ffcb6b",
      token: "entity.name.type.class",
    },
    {
      foreground: "ffcb6b",
      token: "support.type",
    },
    {
      foreground: "ffcb6b",
      token: "support.class",
    },
    {
      foreground: "ffcb6b",
      token: "support.other.namespace.use.php",
    },
    {
      foreground: "ffcb6b",
      token: "meta.use.php",
    },
    {
      foreground: "ffcb6b",
      token: "support.other.namespace.php",
    },
    {
      foreground: "ffcb6b",
      token: "markup.changed.git_gutter",
    },
    {
      foreground: "ffcb6b",
      token: "support.type.sys-types",
    },
    {
      foreground: "b2ccd6",
      token: "source.css support.type",
    },
    {
      foreground: "b2ccd6",
      token: "source.sass support.type",
    },
    {
      foreground: "b2ccd6",
      token: "source.scss support.type",
    },
    {
      foreground: "b2ccd6",
      token: "source.less support.type",
    },
    {
      foreground: "b2ccd6",
      token: "source.stylus support.type",
    },
    {
      foreground: "ff5370",
      token: "entity.name.module.js",
    },
    {
      foreground: "ff5370",
      token: "variable.import.parameter.js",
    },
    {
      foreground: "ff5370",
      token: "variable.other.class.js",
    },
    {
      foreground: "ff5370",
      fontStyle: "italic",
      token: "variable.language",
    },
    {
      foreground: "82aaff",
      token: "entity.name.method.js",
    },
    {
      foreground: "82aaff",
      token: "meta.class-method.js entity.name.function.js",
    },
    {
      foreground: "82aaff",
      token: "variable.function.constructor",
    },
    {
      foreground: "c792ea",
      token: "entity.other.attribute-name",
    },
    {
      foreground: "ffcb6b",
      fontStyle: "italic",
      token: "text.html.basic entity.other.attribute-name.html",
    },
    {
      foreground: "ffcb6b",
      fontStyle: "italic",
      token: "text.html.basic entity.other.attribute-name",
    },
    {
      foreground: "ffcb6b",
      token: "entity.other.attribute-name.class",
    },
    {
      foreground: "82aaff",
      token: "source.sass keyword.control",
    },
    {
      foreground: "c3e88d",
      token: "markup.inserted",
    },
    {
      foreground: "ff5370",
      token: "markup.deleted",
    },
    {
      foreground: "c792ea",
      token: "markup.changed",
    },
    {
      foreground: "89ddff",
      token: "string.regexp",
    },
    {
      foreground: "89ddff",
      token: "constant.character.escape",
    },
    {
      fontStyle: "underline",
      token: "*url*",
    },
    {
      fontStyle: "underline",
      token: "*link*",
    },
    {
      fontStyle: "underline",
      token: "*uri*",
    },
    {
      foreground: "c17e70",
      token: "constant.numeric.line-number.find-in-files - match",
    },
    {
      foreground: "c3e88d",
      token: "entity.name.filename.find-in-files",
    },
    {
      foreground: "82aaff",
      fontStyle: "italic",
      token: "tag.decorator.js entity.name.tag.js",
    },
    {
      foreground: "82aaff",
      fontStyle: "italic",
      token: "tag.decorator.js punctuation.definition.tag.js",
    },
    {
      foreground: "ff5370",
      fontStyle: "italic",
      token: "source.js constant.other.object.key.js string.unquoted.label.js",
    },
    {
      foreground: "c3e88d",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "c3e88d",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "c792ea",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "c792ea",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "f07178",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "f07178",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "82aaff",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "82aaff",
      token:
        "source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "c17e70",
      token:
        "source.json meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "c17e70",
      token:
        "source.json meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "ff5370",
      token:
        "source.json meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "ff5370",
      token:
        "source.json meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "f78c6c",
      token:
        "source.json meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "f78c6c",
      token:
        "source.json meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "ffcb6b",
      token:
        "source.json meta meta.structure.dictionary.json string.quoted.double.json - meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "ffcb6b",
      token:
        "source.json meta meta.structure.dictionary.json punctuation.definition.string - meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "c792ea",
      token:
        "source.json meta.structure.dictionary.json string.quoted.double.json - meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json",
    },
    {
      foreground: "c792ea",
      token:
        "source.json meta.structure.dictionary.json punctuation.definition.string - meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string",
    },
    {
      foreground: "959dcb",
      token: "text.html.markdown",
    },
    {
      foreground: "959dcb",
      token: "punctuation.definition.list_item.markdown",
    },
    {
      foreground: "c792ea",
      token: "text.html.markdown markup.raw.inline",
    },
    {
      foreground: "4e5579",
      token: "text.html.markdown punctuation.definition.raw.markdown",
    },
    {
      foreground: "c3e88d",
      token: "markdown.heading",
    },
    {
      foreground: "c3e88d",
      token: "markup.heading | markup.heading entity.name",
    },
    {
      foreground: "c3e88d",
      token: "markup.heading.markdown punctuation.definition.heading.markdown",
    },
    {
      foreground: "f07178",
      fontStyle: "italic",
      token: "markup.italic",
    },
    {
      foreground: "f07178",
      fontStyle: "bold",
      token: "markup.bold",
    },
    {
      foreground: "f07178",
      fontStyle: "bold",
      token: "markup.bold string",
    },
    {
      fontStyle: "bold italic",
      token: "markup.bold markup.italic",
    },
    {
      fontStyle: "bold italic",
      token: "markup.italic markup.bold",
    },
    {
      fontStyle: "bold italic",
      token: "markup.quote markup.bold",
    },
    {
      fontStyle: "bold italic",
      token: "markup.bold markup.italic string",
    },
    {
      fontStyle: "bold italic",
      token: "markup.italic markup.bold string",
    },
    {
      fontStyle: "bold italic",
      token: "markup.quote markup.bold string",
    },
    {
      foreground: "f78c6c",
      fontStyle: "underline",
      token: "markup.underline",
    },
    {
      fontStyle: "strike",
      token: "markup.strike",
    },
    {
      foreground: "4e5579",
      background: "4e5579",
      token: "markup.quote punctuation.definition.blockquote.markdown",
    },
    {
      fontStyle: "italic",
      token: "markup.quote",
    },
    {
      foreground: "82aaff",
      token: "string.other.link.title.markdown",
    },
    {
      foreground: "c792ea",
      token: "string.other.link.description.title.markdown",
    },
    {
      foreground: "ffcb6b",
      token: "constant.other.reference.link.markdown",
    },
    {
      foreground: "c792ea",
      token: "markup.raw.block",
    },
    {
      background: "00000030",
      token: "markup.raw.block.fenced.markdown",
    },
    {
      background: "00000030",
      token: "punctuation.definition.fenced.markdown",
    },
    {
      foreground: "959dcb",
      token: "markup.raw.block.fenced.markdown",
    },
    {
      foreground: "959dcb",
      token: "variable.language.fenced.markdown",
    },
    {
      foreground: "959dcb",
      token: "punctuation.section.class.end",
    },
    {
      foreground: "4e5579",
      token: "variable.language.fenced.markdown",
    },
    {
      foreground: "676e95",
      token: "text.html.markdown punctuation.definition",
    },
    {
      foreground: "89ddff",
      token: "text.html.markdown meta.disable-markdown punctuation.definition",
    },
    {
      foreground: "4e5579",
      background: "00000030",
      fontStyle: "bold",
      token: "meta.separator",
    },
    {
      foreground: "959dcb",
      token: "markup.table",
    },
    {
      foreground: "ffffff",
      background: "82aaff",
      token: "acejump.label.blue",
    },
    {
      foreground: "ffffff",
      background: "c3e88d",
      token: "acejump.label.green",
    },
    {
      foreground: "ffffff",
      background: "f78c6c",
      token: "acejump.label.orange",
    },
    {
      foreground: "ffffff",
      background: "c792ea",
      token: "acejump.label.purple",
    },
    {
      foreground: "ffcb6b",
      token: "sublimelinter.mark.warning",
    },
    {
      foreground: "ffffff",
      token: "sublimelinter.gutter-mark",
    },
    {
      foreground: "ff5370",
      token: "sublimelinter.mark.error",
    },
    {
      background: "c17e70",
      token: "sublimelinter.annotations",
    },
    {
      foreground: "4e5579",
      token: "markup.ignored.git_gutter",
    },
    {
      foreground: "4e5579",
      token: "markup.untracked.git_gutter",
    },
    {
      foreground: "c3e88d",
      token: "markup.inserted.git_gutter",
    },
    {
      foreground: "ffcb6b",
      token: "markup.changed.git_gutter",
    },
    {
      foreground: "ff5370",
      token: "markup.deleted.git_gutter",
    },
    {
      foreground: "b2ccd64c",
      token: "brackethighlighter.default",
    },
    {
      foreground: "89ddff4c",
      token: "brackethighlighter.curly",
    },
    {
      foreground: "89ddff4c",
      token: "brackethighlighter.round",
    },
    {
      foreground: "89ddff4c",
      token: "brackethighlighter.square",
    },
    {
      foreground: "89ddff4c",
      token: "brackethighlighter.angle",
    },
    {
      foreground: "89ddff4c",
      token: "brackethighlighter.tag",
    },
    {
      foreground: "c792ea4c",
      token: "brackethighlighter.c_define",
    },
    {
      foreground: "89ddff4c",
      token: "brackethighlighter.quote",
    },
    {
      foreground: "ff53704c",
      token: "brackethighlighter.unmatched",
    },
  ],
  colors: {
    "editor.foreground": "#959DCB",
    "editor.background": "#292D3E",
    "editor.selectionBackground": "#717CB440",
    "editor.lineHighlightBackground": "#00000030",
    "editorCursor.foreground": "#FFCC00",
    "editorWhitespace.foreground": "#4E5579",
    "editorIndentGuide.background": "#4E557980",
    "editorIndentGuide.activeBackground": "#828ED5",
    "editor.selectionHighlightBorder": "#717CB440",
  },
};

export default PalenightTheme;
