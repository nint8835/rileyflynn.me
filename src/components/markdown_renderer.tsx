import React from "react";
import unified from "unified";
import parse from "remark-parse";
import rehypePrism from "@mapbox/rehype-prism";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";

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
