import React, { Fragment } from 'react'
import * as IMAGE from '../../constants/images'
import "./index.scss";
import Image from 'next/image';

function FolderCard(props) {
  return (
    <div className="folder-card wow slideInUp">
      <div className="card--actions">
      <Image src={IMAGE.FOLDER}  width={30}  alt="folder"/>
        <div>
          {
            props?.data?.github &&
            <a href={props?.data?.github} aria-label="GitHub" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          }
          {
            props?.data?.website &&
            <a href={props?.data?.website} aria-label="Website" target="_blank" rel="noreferrer" style={{marginLeft:'10px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          }
        </div>

        {/* */}
      </div>
      <div className="card--body">
        <h3>{props?.data.name}</h3>
        <p>{props?.data.description}</p>
        <div>
          {
            props?.data?.skills?.map((item, idx) => (
              <Fragment key={idx}>
                <span>{item}</span>•
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FolderCard