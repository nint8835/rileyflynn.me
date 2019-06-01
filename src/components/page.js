import React from 'react'

import Head from './head'
import Editor from './editor'
import Sidebar from './sidebar'
import pageStyles from './page.module.css'

export default ({children, location, description, path}) => (
  <div className={pageStyles.page}>
    <Head location={location} description={description} path={path}/>
    <Sidebar/>
    <Editor location={location}>
      {children}
    </Editor>
  </div>
)