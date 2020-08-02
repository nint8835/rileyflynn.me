import React, { FunctionComponent } from "react";

import Editor from "./editor";
// @ts-ignore
import editorStyles from "./styles/editor.module.css";

type SplitEditorProps = {
  children: React.ReactNode[];
  titles: string[];
  rawContents: boolean[];
};

const SplitEditor: FunctionComponent<SplitEditorProps> = ({
  children,
  titles,
  rawContents
}) => (
  <div className={editorStyles.splitEditor}>
    {children.map((child, index) => (
      <Editor title={titles[index]} rawContents={rawContents[index]}>{child}</Editor>
    ))}
  </div>
);

export default SplitEditor;
