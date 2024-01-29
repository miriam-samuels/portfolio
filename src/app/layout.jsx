

import React from "react"; 
import * as IMAGE from '../constants/images'
import '../styles/index.scss'
import Image from "next/image";
export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <div className="cover">
               <div id="header">
                  <header>
                     <Image src={IMAGE.LOGO}  width={80}  alt="logo"/>
                     {/* <img src={IMAGE.LOGO} alt="Miriam" /> */}

                     <div className="header-links wow fadeInRight">
                        <ul>
                           <li><a href="#skills"><span className="rainbow-word">01.</span> skills</a></li>
                           <li><a href="#workplace"><span className="rainbow-word">02.</span> Workplace</a></li>
                           <li><a href="#projects"><span className="rainbow-word">03.</span> Projects</a></li>
                           {/* <li><a href="#contact"><span className="rainbow-word">04.</span> contact</a></li> */}
                        </ul>
                        <a href="https://docs.google.com/document/d/1HEV3CLgTW5QedkdYt6t3pJK8MmSVUk0_frrQUA6ovdU/edit?usp=sharing" target="_blank">
                           <button className="resume">
                              Resume
                           </button>
                        </a>
                     </div>
                  </header>
               </div>
               <main>
                  {children}

               </main>
               <footer>

               </footer>
            </div>
         </body>
      </html>
   )
}

export const metadata = {
   title: 'Miriam Medo | Software Engineer',
   description: 'Miriam Medo Portfolio Site',
};