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

type ErrorResponse = {
  error: string;
};
type APIResponse = {
  container: {
    Id: string;
    Warnings: string[];
  };
  status: number;
  stderr: string;
  stdout: string;
};

const PlaygroundPage: FunctionComponent<PageProps> = ({}) => {
  const width = useWindowWidth();
  const [markdownOutput, setMarkdownOutput] = useState<string>("");
  const [editorCode, setEditorCode] = useState<string>("");

  const processTF = async () => {
    const resp = await fetch("http://localhost:9000/process", {
      method: "POST",
      body: JSON.stringify({ code: editorCode }),
      headers: { "Content-Type": "application/json" },
    });
    const json: ErrorResponse | APIResponse = await resp.json();

    let error;
    if ("error" in json) {
      error = json.error;
    } else if (json.stderr !== "") {
      error = json.stderr;
    }
    if (error !== undefined) {
      setMarkdownOutput(`\`\`\`markdown\n${error}\n\`\`\``);
    } else {
      setMarkdownOutput((json as APIResponse).stdout);
    }
  };

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
            topBarButtons={[<TopBarButton icon={Play} onClick={processTF} />]}
          >
            <MonacoEditor setContents={setEditorCode} />
          </Editor>
          <Editor title={"Preview"}>
            <MarkdownRenderer markdown={markdownOutput} />
          </Editor>
        </SplitEditor>
      )}
    </Page>
  );
};

export default PlaygroundPage;
