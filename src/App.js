import './styles/index.css';
import Landing from './views/landing';
import { useRef } from 'react';
// function sketch(p) {

//   let xoff1 = 0;
//   let inc = 0.01;
//   // p is a reference to the p3 instance this sketch is attached to
//   p.setup = function () {
//     p.createCanvas(p.displayWidth, p.displayHeight);
//     // p.background(0,0,0,0);
//     // setInterval(() => {
//     //   p.clear()
//     // }, 3000);

//   }

//   p.draw = function () {

//   }
//   // p.noLoop()
// }

function App() {
  // create a reference to the container in which the p3 instance should place the canvas
  // const p5ContainerRef = useRef();
  const cursorRef = useRef()
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
  // useEffect(() => {
  //   // On component creation, instantiate a p3 object with the sketch and container reference 
  //   // const p5Instance = new p5(sketch, p5ContainerRef.current);

  //   // On component destruction, delete the p3 instance
  //   return () => {
  //     p5Instance.remove();
  //   }
  // }, []);
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
