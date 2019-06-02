import React from 'react'

import EditorTopBar from './editor_top_bar'
import editorStyles from './editor.module.css'

require('./material-palenight.css')

export default ({children, title}) => (
  <div className={editorStyles.editor}>
    <EditorTopBar title={title}/>
    <div className={editorStyles.editorContent}>
      {children}
    </div>
  </div>
)