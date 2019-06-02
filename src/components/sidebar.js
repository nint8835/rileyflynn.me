import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import sidebarStyles from './sidebar.module.css'

const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          path
          title
        }
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <div className={sidebarStyles.sidebar}>
        <div className={sidebarStyles.header}>RILEYFLYNN.ME</div>
        <div className={sidebarStyles.items}>
          {data.allMarkdownRemark.nodes.map(
            (node) => (
              <Link
                to={node.path}
                className={sidebarStyles.pageLink}
                activeClassName={sidebarStyles.selectedPageLink}>
                  {node.frontmatter.title + '.md'}
              </Link>
            )
          )}
        </div>
      </div>
    )
  }/>
)
