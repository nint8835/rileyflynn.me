import React from "react";

import EditorTopBar from "./editor_top_bar";
import editorStyles from "./styles/editor.module.css";

require("./styles/material-palenight.css");

export default ({ children, title }) => (
  <div className={editorStyles.editor}>
    <EditorTopBar title={title} />
    <div className={editorStyles.editorContent}><br/>{children}</div>
  </div>
);
