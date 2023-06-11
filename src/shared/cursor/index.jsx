import { useRef, useEffect } from 'react';

function Cursor() {
    const cursorRef = useRef()
    useEffect(() => {
        if (cursorRef.current) {
            document.addEventListener('mousemove', e => {
                // cursorRef.current.setAttribute("style", "top: " + (e.pageY - -15) + "px; left :" + (e.pageX - 1) + "px")
                // 10 perfect center
            })
            // document.addEventListener('click', e => {
            //     cursorRef.current.classList.add("expand");
            //     setTimeout(() => {
            //         cursorRef.current.classList.remove("expand");
            //     }, 500);
            // })
        }

    }, [])



    return (
        <div className="cursor" ref={cursorRef}>

        </div>
    )
}

export default Cursor