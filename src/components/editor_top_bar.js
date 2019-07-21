import React from "react";

import editorStyles from "./styles/editor.module.css";

export default ({ title }) => (
  <div className={editorStyles.topBar}>{title}</div>
);
