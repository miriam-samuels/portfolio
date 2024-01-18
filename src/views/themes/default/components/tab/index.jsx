import React, { useState } from 'react'
import './index.css'

function Tab({ head, body, className, direction = 'horizontal' }) {
   const [tab, setTab] = useState(0)

   return (
      <div id='tab'>
         <div className={`tab ${className && className} ${direction}`}>
            <div className='tab-heading'>
               {
                  head.map((item, idx) => (
                     <div key={idx} className={`tab-item ${tab === idx && 'active'}`} onClick={() => setTab(idx)}>
                        {item}
                     </div>
                  ))
               }
            </div>
            <div className='tab-content'>
               {body?.length > 0 && body[tab]}
            </div>
         </div>
      </div>
   )
}

export default Tab
