import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/page'

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Page description={frontmatter.description} path={frontmatter.path} title={frontmatter.title + '.md'}>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Page>
  )
}

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
`