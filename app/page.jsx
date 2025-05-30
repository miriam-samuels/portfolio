"use client";
import React, { Fragment, useState } from 'react'
import FolderCard from '../shared/folder-card/FolderCard'
import * as DATALIST from '../shared/datalist'
import TheLayout from '../shared/layout/TheLayout'
import WindowCard from '../shared/window-card/WindowCard'
import Tab from '../shared/tab'
import Link from 'next/link';

function Landing() {
  return (
    <TheLayout>
      <section id="hero">
        <div className="hero wow fadeInDown" data-wow-duration="1.5s">
          <div className="hero-text">
            <h5>HI THERE 👋🏾, I'M</h5>
            <h1>Miriam Medo,</h1>
            <h2>I bring ideas to life.</h2>
            <p>
             As a software engineer and tech educator, I am passionate about building high-quality software that solves real-world problems, I’m product-driven, goal-oriented, and committed to delivering my best in everything I build.
            </p>
            <hr />
            <div>
              <b><i>Welcome to my <span className="rainbow-word">Multiverse</span></i></b>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="skills wow fadeIn" data-wow-delay="0.6s">
          <div className="general--heading">
            <span className="rainbow-word">01.</span>
            <h2>Skills {"&"} Interests</h2>
            <hr />
          </div>
          <div className="skills--body">
            <WindowCard title="Interests" className="grid-item1">
              <div>
                <span style={{ display: "block", marginBottom: "20px" }}>Teaching</span>
                <span style={{ display: "block", marginBottom: "20px" }}>Community Building</span>
                <span style={{ display: "block", marginBottom: "20px" }}>Tennis</span>
                <span style={{ display: "block", marginBottom: "20px" }}>Video Games</span>
              </div>
            </WindowCard>

            <WindowCard title="Hard Skills" className="grid-item2">
              <div className="hard-skill">
                <h5 className="primary">Frontend Technologies</h5>
                <span>React (Typescript/ Javascript)</span>
                <span>Angular</span>
                <span>Redux Toolkit</span>
                <span>React Query</span>
                <span>Tailwind</span>
              </div>
              <div className="hard-skill">
                <h5 className="primary">Backend Technologies</h5>
                <span>Node</span>
                <span>Golang</span>
                <span>Loopback</span>
                 <span>Postgres</span>
                <span>mySql</span>
                <span>Redis</span>
                <span>Docker</span>
                <span>Kubernetes</span>
              </div>
              {/* <div className="hard-skill">
                <h5>Others</h5>
                   <span>Postgres</span>
                <span>mySql</span>
                <span>Redis</span>
                <span>Docker</span>
                <span>Kubernetes</span>
              </div> */}
            </WindowCard>

            <WindowCard title="Soft Skills" className="grid-item3">
              <div>
                <span style={{ display: "block", marginBottom: "20px" }}>Public Speaking</span>
                <span style={{ display: "block", marginBottom: "20px" }}>Leadership</span>
                <span style={{ display: "block", marginBottom: "20px" }}>Communication</span>
                <span style={{ display: "block", marginBottom: "20px" }}>Quick Adaptability</span>
                <span style={{ display: "block", marginBottom: "20px" }}>Problem Solving</span>
              </div>
            </WindowCard>
          </div>
        </div>
      </section>

      <section id="workplace">
        <div className="workplace wow fadeIn" data-wow-delay="0.4s">
          <div className="general--heading">
            <span className="rainbow-word">02.</span>
            <h2>Where I've Worked</h2>
            <hr />
          </div>
          <div className="workplace--body">
            <Tab
              head={[ 'Taketrips','Kyzzen','Cholatrek', 'ValueDriver', 'Nidcom']}
              body={[ <Exp5/>,<Exp2 />,<Exp3 />, <Exp1 />, <Exp4 />]}
            />
          </div>
          <div className="view-btn">
            <Link href={'/timeline'}>
              <button className="view-more">
                View Career Timeline
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="projects wow fadeIn" data-wow-delay=".3s">
          <div className="general--heading">
            <span className="rainbow-word">03.</span>
            <h2>Projects I've Worked On</h2>
            <hr />
          </div>
          <div className="projects--body">
            {DATALIST?.featuredProjects?.slice(0, 3)?.map((item, index) => (
              <FolderCard key={index} data={item} />
            ))}
          </div>
          <div className="view-btn">
            <Link href={'/projects'}>
              <button className="view-more">
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact">
          <div className="general--heading">
            <span className="rainbow-word">04.</span>
            <h2>Contact Me</h2>
            <hr />
          </div>
          <div className="contact--body">
            <div>
              <h1>GET IN TOUCH</h1>
              <br />
              <div className="contact-me-horizontal">
                <ul>
                  <li title="@miriam-samuels">
                    <a href="https://github.com/miriam-samuels" aria-label="GitHub" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </li>
                  <li title="@miriam.medo">
                    <a href="https://www.instagram.com/miriam.medo" aria-label="Instagram" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                        <title>Instagram</title>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </li>
                  <li title="@your_fave_techy">
                    <a href="https://twitter.com/miriam_medo" aria-label="Twitter" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                        <title>Twitter</title>
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li title="Miriam Medo">
                    <a href="https://www.linkedin.com/in/miriam-medo-655385174/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                        <title>LinkedIn</title>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </li>
                  <li title="medomiriam@gmail.com">
                    <a href="mailto: medomiriam@gmail.com" aria-label="Email" target="_blank" rel="noreferrer">
                      <img src={'/images/email.png'} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <br />
            </div>
            <div>
              <img src={'/images/workspace.svg'} alt="contact" />
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="contact-me">
          <ul>
            <li title="@miriam-samuels">
              <a href="https://github.com/miriam-samuels" aria-label="GitHub" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li title="@medo.miriam">
              <a href="https://www.instagram.com/miriam.medo" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <title>Instagram</title>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </li>
            <li title="@medo_miriam">
              <a href="https://twitter.com/miriam_medo" aria-label="Twitter" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                  <title>Twitter</title>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
            <li title="Miriam Medo">
              <a href="https://www.linkedin.com/in/miriam-medo-655385174/" aria-label="Linkedin" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#c1cbf3eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
            <li title="medomiriam@gmail.com">
              <a href="mailto: medomiriam@gmail.com" aria-label="Email" target="_blank" rel="noreferrer">
                <img src={'/images/email.png'} alt="" />
              </a>
            </li>
            <li>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </TheLayout>
  );
}

export default Landing

const Exp1 = () => {
    return (
        <div>
            <div>
                <h3 className='workplace_heading'>Front End Engineer</h3>
                <p>2022 - 2024</p>
            </div>
            <div>
                <ul className='custom'>
                    <li>Collaborated with a cross-functional team to develop a Corporate Internet Banking platform for Parallex Bank with the following features: Transfer( intrabank and interbank), Cheque, Lending, Payroll, Bulk Payments, Account statements and Audit Trail.</li>
                    <li>Collaborated with team members on end-to-end and component testing, resulting in a 40% reduction in bug reports and improving overall platform stability and load time.</li>
                </ul>
            </div>
        </div>
    )
}

const Exp2 = () => {
    return (
        <div>
            <div>
                <h3 className='workplace_heading'>Full Stack Engineer</h3>
                <p>2022 - 2025</p>
            </div>
            <div>
                <ul className='custom'>
                    <li>Collaborated with a multidisciplinary team to develop a suite of tools, including NFT news aggregation, tracking NFT loan offers, mint and events calendar, and raffles aggregator. These tools increased Kyzzen's value proposition and user engagement by 50% and supported our vision to be a one-stop NFT platform.</li>
                    <li>Worked with backend engineers and designers to Implement bulk operations feature, allowing users to process multiple transactions simultaneously, leading to a 30% increase in overall transaction volume and reducing processing time by 50%.</li>
                    <li>Took part in multiple code review sessions to ensure that the code being developed met the necessary quality standards while also providing feedback for the improvement of the team.</li>
                </ul>
            </div>
        </div>
    )
}

const Exp3 = () => {
    return (
        <div>
            <div>
                <h3 className='workplace_heading'>Front End Team Lead</h3>
                <p>2020 - 2024</p>
            </div>
            <div>
                <ul className='custom'>
                    <li>Collaborated with cross-functional teams to translate design into functional code,  integrate APIs and manage state, improving system performance and efficiency.</li>
                    <li>Performed comprehensive code reviews with team members, ensuring adherence to company quality standards and resulting in a significant decrease in code errors and bugs.</li>
                    <li>Collaboration with team members on end-to-end testing for product releases resulted in a 15% reduction in post-release defects and an enhanced user experience.</li>
                    <li>Developed and implemented a comprehensive front-end web development curriculum and course content, resulting in a significant increase in student enrollment and completion rates.</li>
                    <li>Mentored a team of interns in React.js fundamentals, resulting in a 100% improvement in their coding skills and ability to contribute to real-world projects.</li>
                    <li>Organised and facilitated a career guidance session for aspiring tech professionals, providing guidance on industry trends, job search strategies, and networking opportunities. </li>
                </ul>
            </div>
        </div>
    )

}

const Exp4 = () => {
    return (
        <div>
            <div>
                <h3 className='workplace_heading'>Front End Engineer</h3>
                <p>2021 - 2022</p>
            </div>
            <div>
                <ul className='custom'>
                    <li>Introduced a tiering system to our Internet banking platform to reduce risks of large-scale fraud and thefts from customer accounts</li>
                    <li>Worked on the optimisation (added new features, bug fixes, code refactoring) of the core Internet banking platform</li>
                    <li>Collaborated with backend engineer to build a multi-tenant CMMS application to oversee the operations of corporate customers</li>
                    <li>Wrote modern, performant, and robust code for a diverse set of clients that met both functional and non-functional requirements.</li>
                </ul>
            </div>
        </div>
    )
}

const Exp5 = () => {
    return (
        <div>
            <div>
                <h3 className='workplace_heading'>Full Stack Engineer</h3>
                <p>2024 - Present</p>
            </div>
            <div>
                <ul className='custom'>
                    <li>Integrated and presented data from GDSs, NDCs, and OTAs to deliver unified, reliable flight offers.</li>
                    <li>Built and integrated APIs for search, booking, issuance, and flight management.</li>
                    <li>Held review sessions to ensure our codebase met the quality standards while providing feedback for the team's improvement.</li>
                    <li>Wrote modern, performant, and robust code for a diverse set of clients that met both functional and non-functional requirements.</li>
                </ul>
            </div>
        </div>
    )
}