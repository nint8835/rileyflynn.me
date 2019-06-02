import React from 'react'

import editorStyles from './editor.module.css'

export default ({title}) => (
  <div className={editorStyles.topBar}>{title}</div>
)