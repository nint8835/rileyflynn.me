import React from "react"

import EditorTopBar from './editor_top_bar'
import editorStyles from './editor.module.css'

export default ({children, location}) => (
  <div className={editorStyles.editor}>
    <EditorTopBar location={location}/>
    <div className={editorStyles.editorContent}>
    {children}
    </div>
  </div>
)