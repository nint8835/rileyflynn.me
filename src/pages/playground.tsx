import React, { FunctionComponent } from "react";
import Page from "../components/page";
import MonacoEditor from "../components/monaco_editor";

type PageProps = {};

const PlaygroundPage: FunctionComponent<PageProps> = ({}) => {
  return (
    <Page
      description={"Hello world"}
      path={"playground"}
      title={"playground.tf"}
    >
      <MonacoEditor />
    </Page>
  );
};

export default PlaygroundPage;
