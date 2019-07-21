import React from "react";

import Head from "./head";
import Editor from "./editor";
import Sidebar from "./sidebar";
import pageStyles from "./styles/page.module.css";

export default ({ children, title, description, path }) => (
  <div className={pageStyles.page}>
    <Head title={title} description={description} path={path} />
    <Sidebar />
    <Editor title={title}>{children}</Editor>
  </div>
);
