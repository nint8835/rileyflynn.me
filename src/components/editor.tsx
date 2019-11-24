import React, { FunctionComponent } from "react";

import EditorTopBar from "./editor_top_bar";
// @ts-ignore
import editorStyles from "./styles/editor.module.css";

require("./styles/material-palenight.css");

type EditorProps = {
  title: string;
};

const Editor: FunctionComponent<EditorProps> = ({ children, title }) => (
  <div className={editorStyles.editor}>
    <EditorTopBar title={title} />
    <div className={editorStyles.editorContent}>{children}</div>
  </div>
);

export default Editor;
