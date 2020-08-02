import { graphql, Link, StaticQuery } from "gatsby";
import React, { FunctionComponent } from "react";
// @ts-ignore
import sidebarStyles from "./styles/sidebar.module.css";


const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___weight], order: ASC }
      filter: { frontmatter: { hidden: { ne: "true" } } }
    ) {
      nodes {
        frontmatter {
          path
          title
        }
      }
    }
  }
`;

type SidebarProps = {};

type RemarkNode = {
  allMarkdownRemark: {
    nodes: Array<{
      frontmatter: {
        path: string;
        title: string;
      };
    }>;
  };
};

const Sidebar: FunctionComponent<SidebarProps> = () => (
  <StaticQuery
    query={pageQuery}
    render={(data: RemarkNode) => (
      <div className={sidebarStyles.sidebar}>
        <div className={sidebarStyles.header}>RILEYFLYNN.ME</div>
        <div className={sidebarStyles.items}>
          {data.allMarkdownRemark.nodes.map((node) => (
            <Link
              to={node.frontmatter.path}
              key={node.frontmatter.path}
              className={sidebarStyles.pageLink}
              activeClassName={sidebarStyles.selectedPageLink}
            >
              {node.frontmatter.title + ".tf"}
            </Link>
          ))}
          <Link
            to={"/playground/"}
            className={sidebarStyles.pageLink}
            activeClassName={sidebarStyles.selectedPageLink}
          >
            playground.tf
          </Link>
        </div>
      </div>
    )}
  />
);

export default Sidebar;
