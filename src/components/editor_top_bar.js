import React from "react"

import editorStyles from './editor.module.css'

export default ({location}) => (
  <div className={editorStyles.topBar}>{location}</div>
)