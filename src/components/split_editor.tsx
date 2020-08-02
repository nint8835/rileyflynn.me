import React, { FunctionComponent } from "react";
// @ts-ignore
import editorStyles from "./styles/editor.module.css";

type SplitEditorProps = {};

const SplitEditor: FunctionComponent<SplitEditorProps> = ({ children }) => (
  <div className={editorStyles.splitEditor}>{children}</div>
);

export default SplitEditor;
