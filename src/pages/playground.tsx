import { Play } from "@primer/octicons-react";
import { useWindowWidth } from "@react-hook/window-size";
import React, { FunctionComponent, useState } from "react";
import Editor from "../components/editor";
import MarkdownRenderer from "../components/markdown_renderer";
import MonacoEditor from "../components/monaco_editor";
import Page from "../components/page";
import SplitEditor from "../components/split_editor";
import TopBarButton from "../components/top_bar_button";

const mobileMessage = `### Sorry!
The \`terraform-provider-gatsby\` playground is not available on mobile.
Come back on a device with a larger screen to experience it and all of it's wonder.
`;

type PageProps = {};

const PlaygroundPage: FunctionComponent<PageProps> = ({}) => {
  const width = useWindowWidth();
  const [editorCode, setEditorCode] = useState<string>("");
  return (
    <Page
      description={"Hello world"}
      path={"playground"}
      title={"playground.tf"}
      excludeEditor={width > 768}
    >
      {width <= 768 ? (
        <MarkdownRenderer markdown={mobileMessage} />
      ) : (
        <SplitEditor>
          <Editor
            title={"playground.tf"}
            rawContents
            topBarButtons={[<TopBarButton icon={Play} onClick={() => {}} />]}
          >
            <MonacoEditor setContents={setEditorCode} />
          </Editor>
          <Editor title={"Preview"}>
            <MarkdownRenderer markdown={editorCode} />
          </Editor>
        </SplitEditor>
      )}
    </Page>
  );
};

export default PlaygroundPage;
