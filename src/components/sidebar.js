import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import sidebarStyles from './sidebar.module.css'

const pageQuery = graphql`
  query {
    allSitePage {
      nodes {
        path
        component
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
          {data.allSitePage.nodes.map(
            (node) => ( node.path !== '/dev-404-page/' && node.path !== '/offline-plugin-app-shell-fallback/' ? (
              <Link
                to={node.path}
                className={sidebarStyles.pageLink}
                activeClassName={sidebarStyles.selectedPageLink}>
                  {node.component.substr(node.component.lastIndexOf('/') + 1)}
              </Link>
            ) : null
          ))}
        </div>
      </div>
    )
  }/>
)
