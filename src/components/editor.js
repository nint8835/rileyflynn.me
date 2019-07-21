import React from "react";

import EditorTopBar from "./editor_top_bar";
import editorStyles from "./styles/editor.module.css";

require("./styles/material-palenight.css");

export default ({ children, title }) => (
  <div className={editorStyles.editor}>
    <EditorTopBar title={title} />
    <div className={editorStyles.editorContent}>{process.env.DRONE_COMMIT_LINK}{process.env.DRONE_COMMIT}<br/>{children}</div>
  </div>
);
