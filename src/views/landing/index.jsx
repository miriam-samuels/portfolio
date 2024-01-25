import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../services/auth'
import './index.scss'
function Landing() {
   const { currentUser } = useAuth()
   const navigate = useNavigate()
   const [email, setEmail] = useState("")

   useEffect(() => {
      if (currentUser) navigate("/setup", { replace: true })
   }, [])

   const handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem('userMail', email);
      navigate('/setup', { replace: true })
   }
   return (
      <div className="landing">
         <div className="is-boxed has-animations lights-off">
            <div className="body-wrap boxed-container">
               <header className="site-header">
                  <div className="container">
                     <div className="site-header-inner">
                        <div className="brand header-brand">
                           <h1 className="m-0">
                              <img className="header-logo-image" src={process.env.PUBLIC_URL + "/asset/logo.png"} alt="Logo" />
                           </h1>
                        </div>
                     </div>
                  </div>
               </header>

               <main>
                  <section className="hero">
                     <div className="container">
                        <div className="hero-inner">
                           <div className="hero-copy">
                              <h1 className="hero-title mt-0">Land that dream job.</h1>
                              <p className="hero-paragraph">Forget design headaches, focus on your hustle. Stunning portfolio sites, made easy with Portfolio Builder.</p>
                              <form onSubmit={handleSubmit} className="hero-cta">
                                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' name="email" id="email" required />
                                 <button className="button button-primary" type="submit">begin</button>
                              </form>
                           </div>
                           <div className="hero-figure anime-element">
                              <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                                 <rect width="528" height="396" style={{ fill: 'transparent' }} />
                              </svg>
                              <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                              <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                              <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                              <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                              <div className="hero-figure-box hero-figure-box-05">
                                 <img src={process.env.PUBLIC_URL + "/asset/landing/hero.svg"} alt="Logo" />
                              </div>
                              {/* <div className="hero-figure-box hero-figure-box-06"></div> */}
                              <div className="hero-figure-box hero-figure-box-07"></div>
                              <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                              <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                              <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                           </div>
                        </div>
                     </div>
                  </section>

                  <section className="cta section">
                     <div className="container-sm">
                        <div className="cta-inner section-inner">
                           <div className="cta-header text-center">
                              <h2 className="section-title mt-0">Showcase Your Best Self</h2>
                              <p className="section-paragraph">Portfolio Builder crafts a webpage that screams your talent.Stop blending in, start standing out.</p>
                              <div className="cta-cta">
                                 <button className="button button-primary" type='button' onClick={handleSubmit}>Let's Go</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </main>

               <footer className="site-footer has-top-divider">
                  <div className="container">
                     <div className="site-footer-inner">
                        <div className="brand footer-brand">
                           <a href="#">
                              {/* <img className="asset-light" src="/public/asset/landing/logo-light.svg" alt="Logo" /> */}
                              {/* <img className="asset-dark" src="/public/asset/landing/logo-dark.svg" alt="Logo" /> */}
                           </a>
                        </div>
                        <ul className="footer-links list-reset">
                           <li>
                              <a href="#">Contact</a>
                           </li>
                           <li>
                              <a href="#">About us</a>
                           </li>
                           <li>
                              <a href="#">FAQ's</a>
                           </li>
                           <li>
                              <a href="#">Support</a>
                           </li>
                        </ul>
                        <ul className="footer-social-links list-reset">
                           <li>
                              <a href="#">
                                 <span className="screen-reader-text">Facebook</span>
                                 <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <span className="screen-reader-text">Twitter</span>
                                 <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF" />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <span className="screen-reader-text">Google</span>
                                 <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFF" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                        <div className="footer-copyright">&copy; 2018 Switch, all rights reserved</div>
                     </div>
                  </div>
               </footer>
            </div>
         </div>
      </div>
   )
}

export default Landing