import React, { Fragment, useEffect, useState } from 'react'
import FolderCard from './components/FolderCard'
import * as IMAGE from './components/images'
import * as DATALIST from './components/datalist'
import TheLayout from './components/TheLayout'
import WindowCard from './components/WindowCard'
import '../../../styles/themes/default/index.scss'
import { useLocation } from 'react-router-dom'
import { useMain } from '../../../services'
function Default() {
    const { getUser } = useMain()
    const location = useLocation()
    const [view, setView] = useState(6)
    const [userSite, setUserSite] = useState()
    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        const site = await getUser("siteId", location.pathname.split("/")[1])
        setUserSite(site)
    }

    if (userSite) {
        return (
            <TheLayout>
                <Fragment>
                    <section id="hero">
                        <div className="hero wow fadeInDown " data-wow-duration="1s">
                            <div className="hero-text">
                                <h5>HI THERE 👋🏾 , I'M </h5>
                                <h1>{userSite?.first_name} {userSite?.last_name}</h1>
                                <h2>{userSite?.tagline}</h2>
                                <p>
                                    {userSite?.objective}
                                </p>
                                <hr />
                                <div>
                                    <b><i>welcome to my <span className="rainbow-word">multiverse</span></i></b>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="skills">
                        <div className="skills wow fadeIn" data-wow-delay=".5s">
                            <div className="general--heading">
                                <span className="rainbow-word">01.</span>
                                <h2>Skills {"&"} Interests</h2>
                                <hr />
                            </div>
                            <div className="skills--body">
                                <WindowCard title="Major Interests" className="grid-item1">
                                    <Fragment>
                                        <div>
                                            {
                                                userSite?.skills?.interest?.map((item, index) => (
                                                    <span key={index} style={{ display: "block", marginBottom: "20px" }}>• {item}</span>

                                                ))
                                            }
                                        </div>
                                    </Fragment>
                                </WindowCard>
                                <WindowCard title="Hard Skills" className="grid-item2">
                                    <Fragment>
                                        <div className="hard-skill">
                                            <h5 className="primary">Primary Technologies</h5>
                                            {
                                                userSite?.skills?.hard?.map((item, index) => (
                                                    <span key={index}>{item}</span>

                                                ))
                                            }
                                        </div>
                                    </Fragment>
                                </WindowCard>
                                <WindowCard title="Soft Skills" className="grid-item3">
                                    <Fragment>
                                        <div>
                                            {
                                                userSite?.skills?.soft?.map((item, index) => (
                                                    <span key={index} style={{ display: "block", marginBottom: "20px" }}>• {item}</span>

                                                ))
                                            }
                                        </div>
                                    </Fragment>
                                </WindowCard>
                            </div>
                        </div>
                    </section>
                    <section id="projects">
                        <div className="projects wow fadeIn" data-wow-delay=".5s">
                            <div className="general--heading">
                                <span className="rainbow-word">02.</span>
                                <h2>Featured Projects</h2>
                                <hr />
                            </div>
                            <div className="projects--body"> 
                                {
                                    userSite?.projects?.slice(0, view)?.map((item, index) => (
                                        <FolderCard key={index}>
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                            {/* <div>
                                    <span>React</span>•
                                    <span>Redux</span>•
                                    <span>SCSS</span>•
                                    <span>Graphql</span>•
                                </div> */}
                                        </FolderCard>
                                    ))
                                }


                            </div>
                            <div className="view-btn">
                                {
                                    view > 6 &&
                                    <button className="view-more" onClick={() => setView(current => current - 3)}>
                                        View Less
                                    </button>
                                }
                                {
                                    view < DATALIST?.featuredProjects?.length &&
                                    <button className="view-more" onClick={() => setView(current => current + 3)}>
                                        View More
                                    </button>
                                }

                            </div>

                        </div>
                    </section>
                    {/* <section id="experience">
                    <div className="experience">
                        <div className="general--heading">
                            <span className="rainbow-word">03.</span>
                            <h2>Work Experience</h2>
                            <hr />
                        </div>
                    </div>
                </section> */}
                    <section id="contact">
                        <div className="contact">
                            <div className="general--heading">
                                <span className="rainbow-word">03.</span>
                                <h2>Contact Me</h2>
                                <hr />
                            </div>
                            <div className="contact--body">
                                <div>
                                    <h1>GET IN TOUCH</h1>
                                    <p>Hello there , you can pop me a mail using {userSite?.email}</p>
                                    <div className="contact-me-horizontal">
                                        <ul>
                                            <li title="@miriam-samuels">
                                                <a href="https://github.com/miriam-samuels" aria-label="GitHub" target="_blank" rel="noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                </a>
                                            </li>
                                            <li title="@medo_miriam">
                                                <a href="https://www.instagram.com/medo_miriam" aria-label="Instagram" target="_blank" rel="noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li title="@your_fave_techy">
                                                <a href="https://twitter.com/bricks_nd_codes" aria-label="Twitter" target="_blank" rel="noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li title="Miriam Medo">
                                                <a href="https://www.linkedin.com/in/miriam-medo-655385174/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li title="medomiriam@gmail.com">
                                                <a href="mailto: medomiriam@gmail.com" aria-label="Email" target="_blank" rel="noreferrer">
                                                    <img src={IMAGE.MAIL} alt="" />
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <br />
                                    {/*   <br />
                                <br />
                                <br />
                                <br />
                                <div className="human wow fadeIn" data-wow-delay=".5s">
                                    <div className="head"><span></span> <span></span></div>
                                    <div className="body"></div>
                                    <div className="legs"></div>
                                </div> */}

                                    {/* <h3 className="wow slideInLeft" data-wow-delay=".5s">See Ya, off to work I go ------x</h3> */}
                                    {/* <h1 className="girl wow slideInLeft" data-wow-delay=".5s">🏃🏾‍♀️</h1> */}
                                </div>
                                <div>
                                    {/* <img src={IMAGE.CONTACT} alt="contact" /> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        <div className="contact-me">
                            <ul>
                                {/* <li>
                           hello world
                           <img src={IMAGE.FOLDER}/>
                        </li> */}
                                <li title="@miriam-samuels">
                                    <a href="https://github.com/miriam-samuels" aria-label="GitHub" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </li>
                                <li title="@medo_miriam">
                                    <a href="https://www.instagram.com/medo_miriam" aria-label="Instagram" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </a>
                                </li>
                                <li title="@your_fave_techy">
                                    <a href="https://twitter.com/bricks_nd_codes" aria-label="Twitter" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li title="Miriam Medo">
                                    <a href="https://www.linkedin.com/in/miriam-medo-655385174/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </a>
                                </li>
                                <li title={`${userSite?.email}`}>
                                    <a href={`mailto: ${userSite?.email}`} aria-label="Email" target="_blank" rel="noreferrer">
                                        <img src={IMAGE.MAIL} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <hr />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Fragment>
            </TheLayout>

        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default Default