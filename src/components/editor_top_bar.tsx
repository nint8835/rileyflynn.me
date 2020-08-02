import React, { FunctionComponent } from "react";
// @ts-ignore
import editorStyles from "./styles/editor.module.css";

type TopBarProps = {
  title: string;
  buttons: React.ReactNode[];
};

const EditorTopBar: FunctionComponent<TopBarProps> = ({ title, buttons }) => (
  <div className={editorStyles.topBar}>
    {title}
    <div>{buttons}</div>
  </div>
);

export default EditorTopBar;
