import React from "react"

import Page from '../components/page'

export default (props) => (
  <Page location='props-test.js'>
    <p>
      <code>
        {JSON.stringify(props, null, 2)}
      </code>
    </p>
  </Page>
)