import React, { FunctionComponent, useState } from "react";
import unified from "unified";
import parse from "remark-parse";
import rehypePrism from "@mapbox/rehype-prism";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
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
        <>
          {
            unified()
              .use(parse)
              .use(remark2rehype)
              .use(rehypePrism)
              .use(rehype2react, {
                createElement: React.createElement,
              })
              // @ts-ignore
              .processSync(editorCode).result
          }
        </>
      </SplitEditor>
    </Page>
  );
};

export default PlaygroundPage;
