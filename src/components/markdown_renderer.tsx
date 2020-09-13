import rehypePrism from "@mapbox/rehype-prism";
import React from "react";
import rehype2react from "rehype-react";
import parse from "remark-parse";
import remark2rehype from "remark-rehype";
import unified from "unified";

type MarkdownRendererProps = {
  markdown: string;
};

const MarkdownRenderer: React.FunctionComponent<MarkdownRendererProps> = ({
  markdown,
}) => (
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
        .processSync(markdown).result
    }
  </>
);

export default MarkdownRenderer;
