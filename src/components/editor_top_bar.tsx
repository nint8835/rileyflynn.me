import React, { FunctionComponent } from "react";

import editorStyles from "./styles/editor.module.css";

type TopBarProps = {
  title: string;
};

const EditorTopBar: FunctionComponent<TopBarProps> = ({ title }) => (
  <div className={editorStyles.topBar}>{title}</div>
);

export default EditorTopBar;
