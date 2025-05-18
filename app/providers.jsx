'use client';
import { Fragment, useEffect, useRef} from 'react';
export function Providers({ children }) {
  const cursorRef = useRef()

  // glowing cursor
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      cursorRef.current.setAttribute("style", "top: " + (e.pageY - -3) + "px; left :" + (e.pageX - -3) + "px")
      // 10 perfect center
    })
    document.addEventListener('click', () => {
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        cursorRef.current.classList.remove("expand");
      }, 500);
    })
  }, []);


  return (
    <Fragment>
      {children}
      <div className="cursor" ref={cursorRef}></div>
    </Fragment>
  );
}
