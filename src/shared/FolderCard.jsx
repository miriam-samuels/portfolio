import React from 'react'
import * as IMAGE from './images'

function FolderCard(props) {
  return (
    <div className="folder-card wow slideInUp">
      <div className="card--actions">
        <img src={IMAGE.FOLDER} />
      </div>
      <div className="card--body">
        {props.children}
      </div>
    </div>
  )
}

export default FolderCard