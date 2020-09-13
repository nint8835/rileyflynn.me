import React, { FunctionComponent } from "react";
import EditorTopBar from "./editor_top_bar";
// @ts-ignore
import editorStyles from "./styles/editor.module.css";

require("./styles/material-palenight.css");

type EditorProps = {
  title: string;
  rawContents?: boolean;
  topBarButtons?: React.ReactNode[];
};

const Editor: FunctionComponent<EditorProps> = ({
  children,
  title,
  rawContents = false,
  topBarButtons = [],
}) => (
  <div className={editorStyles.editor}>
    <EditorTopBar title={title} buttons={topBarButtons} />
    <div
      className={(rawContents
        ? [editorStyles.editorContent, editorStyles.rawContent]
        : [editorStyles.editorContent]
      ).join(" ")}
    >
      {children}
    </div>
  </div>
);

export default Editor;
