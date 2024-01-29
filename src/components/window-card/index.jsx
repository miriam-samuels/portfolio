import React from 'react'
import './index.scss'

function WindowCard(props) {
  return (
    <div className={`window-card wow slideInUp ${props.className}`}  >
        <div className="card--heading">
             <div className="card--actions">
                 <span></span>
                 <span></span>
                 <span></span>
             </div>
             <div className="card--title">
               <h5>{props.title}</h5>
             </div>
        </div>
        <div className="card--body">
            {props.children}
        </div>
    </div>
  )
}

export default WindowCard