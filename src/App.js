import { useRef, useEffect } from 'react';
import Landing from './views/landing';
import './styles/index.css';
import './index.css';

function App() {
  const cursorRef = useRef()

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      cursorRef.current.setAttribute("style", "top: " + (e.pageY - -3) + "px; left :" + (e.pageX - -3) + "px")
      // 10 perfect center
    })
    document.addEventListener('click', e => {
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        cursorRef.current.classList.remove("expand");
      }, 500);
    })
  }, []);
  return (
    <div id="app">
      <Landing />
      <div className="cursor" ref={cursorRef}>
        {/* <img src={IMAGES.MATRIX} alt=""/> */}
      </div>
    </div>
  );
}

export default App;
