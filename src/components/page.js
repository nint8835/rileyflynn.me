import React from "react"

import Editor from './editor'
import Sidebar from './sidebar'
import pageStyles from './page.module.css'

export default ({children, location}) => (
  <div className={pageStyles.page}>
    <title>{location} - rileyflynn.me</title>
    <Sidebar/>
    <Editor location={location}>
      {children}
    </Editor>
  </div>
)