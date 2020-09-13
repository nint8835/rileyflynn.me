import { graphql } from "gatsby";
import React, { FunctionComponent } from "react";
import Page from "../components/page";

type TemplateProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        path: string;
        title: string;
        description: string;
      };
      html: string;
    };
  };
};

const Template: FunctionComponent<TemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Page
      description={frontmatter.description}
      path={frontmatter.path}
      title={frontmatter.title + ".tf"}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        description
        path
        title
      }
    }
  }
`;
