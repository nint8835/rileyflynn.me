import React, { FunctionComponent } from "react";

import Head from "./head";
import Editor from "./editor";
import Sidebar from "./sidebar";
// @ts-ignore
import pageStyles from "./styles/page.module.css";
import BottomBar from "./bottom_bar";

type PageProps = {
  title: string;
  description: string;
  path: string;
  excludeEditor?: boolean;
};

const Page: FunctionComponent<PageProps> = ({
  children,
  title,
  description,
  path,
  excludeEditor = false,
}) => (
  <div className={pageStyles.page}>
    <Head title={title} description={description} path={path} />
    <Sidebar />
    {excludeEditor ? children : <Editor title={title}>{children}</Editor>}
    <BottomBar />
  </div>
);

export default Page;
