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

const initialTerraform = `resource "gatsby_text_link" "terraform_provider_gatsby" {
  url = "https://github.com/nint8835/terraform-provider-gatsby"
  label = "terraform-provider-gatsby"
}

resource "gatsby_text_link" "terraform" {
  url = "https://terraform.io"
  label = "Terraform"
}

resource "gatsby_text_list" "contents" {
  prefix = ""
  items = [
    "Welcome to the \${gatsby_text_link.terraform_provider_gatsby.contents} playground!",
    "",
    "The contents of this site are written in \${gatsby_text_link.terraform.contents} using a custom Terraform provider, terraform-provider-gatsby.",
    "This playground provides an easy way to play around with this provider.",
    "Just edit the code in the left pane, and press the run button in the top bar.",
    "The value of the output 'contents' will be rendered in the preview pane."
  ]
}

output "contents" {
  value = gatsby_text_list.contents.contents
}
`;
const initialMarkdown = `Welcome to the [terraform-provider-gatsby](https://github.com/nint8835/terraform-provider-gatsby) playground!

The contents of this site are written in [Terraform](https://terraform.io) using a custom Terraform provider, terraform-provider-gatsby.
This playground provides an easy way to play around with this provider. Just edit the code in the left pane, and press the run button in the top bar. The value of the output 'contents' will be rendered in the preview pane.
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
  const [markdownOutput, setMarkdownOutput] = useState<string>(initialMarkdown);
  const [editorCode, setEditorCode] = useState<string>(initialTerraform);

  const processTF = async () => {
    setMarkdownOutput("*Processing...*");
    try {
      const resp = await fetch("/process", {
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
    } catch {
      setMarkdownOutput(
        "A network error occurred while attempting to communicate with the terraform-gatsby-service backend."
      );
    }
  };

  return (
    <Page
      description={"Playground for terraform-provider-gatsby"}
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
            <MonacoEditor
              setContents={setEditorCode}
              initialContents={initialTerraform}
            />
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
