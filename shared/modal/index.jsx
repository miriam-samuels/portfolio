import React from 'react';
import './index.scss';
import { createPortal } from 'react-dom';
import useClose from '../..//hooks/useClose';

function Modal(props) {
  const { heading, sub, children, show, img, type, size, hide, className } = props;
  const ref = useClose(hide);
  if (show) {
    return (
      <>
        {createPortal(
          <div id="modal" className={className}>
            <div className="modal-container">
              <div className="modal-box"></div>
              <div className={`modal ${size ? size : ''}`} ref={ref}>
                <button className="modal-close_btn" onClick={hide}>
                  x
                </button>
                
                <div className='modal-body'>
                  <div className="modal-head">
                    {img && <img src={img} alt="modal image" />}
            
                    {heading && <h4 className="modal-heading">{heading}</h4>}
                    {sub && <p className="modal-sub">{sub}</p>}
                  </div>
                  <div className="modal-content">{children}</div>
                </div>

              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    );
  } else {
    return <></>;
  }
}

export default Modal;
