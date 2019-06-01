import React from "react"

import Page from '../components/page'

export default (props) => (
  <Page location='props-test.js' path='/props-test'>
    {JSON.stringify(props, null, 2)}
  </Page>
)