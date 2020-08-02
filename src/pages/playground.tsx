import React, { FunctionComponent, useState } from "react";
import Page from "../components/page";
import MonacoEditor from "../components/monaco_editor";
import SplitEditor from "../components/split_editor";

type PageProps = {};

const PlaygroundPage: FunctionComponent<PageProps> = ({}) => {
  const [editorCode, setEditorCode] = useState<string>("");
  return (
    <Page
      description={"Hello world"}
      path={"playground"}
      title={editorCode}
      excludeEditor
    >
      <SplitEditor
        titles={["playground.tf", "Preview"]}
        rawContents={[true, false]}
      >
        <MonacoEditor setContents={setEditorCode} />
        <div>{editorCode}</div>
      </SplitEditor>
    </Page>
  );
};

export default PlaygroundPage;
