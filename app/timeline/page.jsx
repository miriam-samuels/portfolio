"use client";
import React, { Fragment } from 'react'
import TheLayout from '../../shared/layout/TheLayout'
import WindowCard from '../../shared/window-card/WindowCard'
import ImageGallery from '@/shared/gallery';

export default function Timeline() {


    return (
        <TheLayout>
            <Fragment>
                <section id='career-timeline'>
                    <div className="adventures-content">
                        {/* <div className="adventures-header">
                            <h1 className="adventures-title">
                                Career Timeline
                            </h1>
                            <p className="adventures-subtitle">
                                I've been fortunate to travel and work on incredible projects with amazing people. <span className="wave-icon">👋</span>
                            </p>
                        </div>
                        <div className="adventures-divider"></div>

                        <div className="timeline-year">
                            <h2>2018</h2>
                        </div> */}


                        <div className="header">
                            <h1>My Career Journey</h1>
                            <h2>Let's embark on a journey of Pixels, Payloads, and Performance 😉</h2>
                        </div>
                        <div className="adventures-divider"></div>

                        <div className="timeline">
                            <div className="container right">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        TakeTrips
                                        <span className="date">Oct 2024 - Present</span>
                                    </h2>
                                    <h3>Full Stack Developer  (TravelTech)</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Integrated and presented data from GDSs, NDCs, and OTAs to deliver unified, reliable flight offers.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Built an alternate date feature to help users find the most affordable travel options.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Built and integrated APIs for search, booking, issuance, and flight management.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Held review sessions to ensure our codebase met the quality standards while providing feedback for the team's improvement.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/taketrip.png',
                                                ]}
                                                site={["https://taketrips.co"]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">Node</span>
                                        <span className="skill">Loopback</span>
                                        <span className="skill">MongoDb</span>
                                        <span className="skill">Redis</span>
                                        <span className="skill">React</span>
                                        <span className="skill">Redux Toolkit</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Kyzzen
                                        <span className="date">Apr 2022 - Jan 2025</span>
                                    </h2>
                                    <h3>Full Stack Developer (Web3)</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Worked with a team of 7 including designers, product managers and engineers to develop a suite of tools. This increased user engagement by 100% and reinforced our vision to be a one-stop Crypto platform</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/kyzzen.png',
                                                ]}
                                                site={["https://kyzzen.io"]}

                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Developed and deployed scalable microservices using Golang, Kubernetes, and Docker, increasing system scalability by 40% and reducing deployment time.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Implemented bulk transaction operations, enabling users to process multiple actions simultaneously and reducing execution time by 30%.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Built a Telegram bot that enabled users to interact with out AI, platform resources and receive real-time NFT updates, increasing engagement by 20%.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Converted Figma designs into fully functional and responsive React pages, improving user experience and interface consistency.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Contributed to our NFT launch platform by building the interface alongside features for wallet whitelisting and user shortlisting for Kyzzen No Sekai NFTs.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/kns.png',
                                                ]}
                                                site={["https://no-sekai.vercel.app/"]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Kyzzen No Sekai Alternate Design  —  I really liked the manga theme so I decided to keep it. </span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/kns2.png',
                                                ]}
                                                site={["https://kns-iota.vercel.app/"]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">React</span>
                                        <span className="skill">Tailwind</span>
                                        <span className="skill">GraphQL</span>
                                        <span className="skill">Golang</span>
                                        <span className="skill">Kubernetes</span>
                                        <span className="skill">Docker</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Value Driver
                                        <span className="date">Jun 2022 - Dec 2024</span>
                                    </h2>
                                    <h3>Front-end Developer (FinTech)</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Developed Parallex Bank's Corporate Internet Banking platform.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Translated designs to Angular code and integrating RESTful APIs for features like Transfers, Bulk Payments, and Audit Trails, boosting client transaction efficiency by 40%.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Implemented robust security measures and compliance protocols like anti-clickjacking, CSP, XSS injection etc. that reduced potential vulnerabilities by 60%.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Collaborated with a team of 4 on end-to-end and component testing, resulting in a 40% reduction in bug reports and improving overall platform stability and load time.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/parallex.png',
                                                ]}
                                                site={["https://www.parallexbank.com/"]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="skills">
                                        <span className="skill">Angular</span>
                                        <span className="skill">RESTful APIs</span>
                                        <span className="skill">Security</span>
                                        <span className="skill">Banking</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Co-organizer
                                        <span className="date">Nov 2022 - Jan 2025</span>
                                    </h2>
                                    <h3>Google Developer Group Akure</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">We organized DevFest Akure, I/O extended, and IWD events.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/gdg3.jpg',
                                                    '/cert/gdg4.jpg',
                                                    '/cert/gdg5.jpg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Ancored events and handled panel sessions.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/gdg1.jpg',
                                                    '/cert/gdg2.jpg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">We grew a vibrant community of over 1500 developers.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/gdg6.jpg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">Community Building</span>
                                        <span className="skill">Event Organization</span>
                                        <span className="skill">Leadership</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Cholatrek — Juripass
                                        <span className="date">Jan 2023 - Aug 2024</span>
                                    </h2>
                                    <h3>Frontend Team Lead (LawTech)</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Led the development of an Agile solution to streamline case filing and affidavit processing, reducing processing time by 70% and enhancing staff efficiency.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Reviewed and approved code through structured PR processes, upholding clean code practices and reducing post-release bugs by 40%.</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Collaborated with a team of 8 on end-to-end testing for product releases resulting in a 15% reduction in post-release defects.</span>
                                        </div>

                                        <ImageGallery
                                            images={[
                                                '/site/juripass.png',
                                            ]}
                                            site={["https://juripass.io/"]}
                                            direction="horizontal"
                                            thumbnailSize="medium"
                                        />

                                    </div>

                                    <div className="skills">
                                        <span className="skill">Team Leadership</span>
                                        <span className="skill">Agile</span>
                                        <span className="skill">React</span>
                                        <span className="skill">Redux Toolkit</span>
                                        <span className="skill">Testing</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Cholatrek

                                        <span className="date">Sep 2020 - Jan 2023</span>
                                    </h2>
                                    <h3>Tech Educator (EduTech)</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Mentored 10+ interns on React (100% skill improvement)</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Facilitated interactive panels with industry experts</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/th7.jpeg',
                                                    '/cert/th6.jpeg',
                                                    '/cert/th5.jpeg',
                                                    '/cert/th4.jpeg',
                                                    '/cert/th3.jpeg',
                                                    '/cert/th2.jpeg',
                                                    '/cert/th1.jpeg',
                                                    '/cert/th8.jpeg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>

                                    </div>
                                    <div className="skills">
                                        <span className="skill">Teaching</span>
                                        <span className="skill">Mentoring</span>
                                        <span className="skill">React</span>
                                        <span className="skill">Event Planning</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Banklingo
                                        <span className="date">Aug 2021 - Mar 2022</span>
                                    </h2>
                                    <h3>Frontend Developer (FinTech)</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Worked on our Core Banking Application andwas often outsourced to other financial apps</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Implemented tiering system within core Internet banking software</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Enhanced security protocols to limit access based on account size</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Reduced potential fraud incidents by 40%</span>
                                        </div>

                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/banklingo.png',
                                                    '/site/mm.png',
                                                ]}
                                                site={[
                                                    'https://www.banklingo.app/',
                                                    'https://miniemoney.netlify.app/',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">React</span>
                                        <span className="skill">Redux Toolkit</span>
                                        <span className="skill">CSS</span>
                                        <span className="skill">RESTful APIs</span>
                                        <span className="skill">Banking Software</span>
                                        <span className="skill">Security</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Biz 301
                                        <span className="date">Apr 2021 - Jul 2021</span>
                                    </h2>
                                    <h3>Frontend Intern</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">I learnt Angular for this job and boy was I happy</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Handled the front end of facility management for BIZ301 software</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Created tools for entrepreneurs to track business branches, bills, and resources</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Implemented designs and Integrated RESTful APIs</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/biz301.png',
                                                ]}
                                                site={["https://www.biz301.com/"]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">Angular</span>
                                        <span className="skill">CSS</span>
                                        <span className="skill">RESTful APIs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Freelancing Period
                                        <span className="date">Jan 2020</span>
                                    </h2>
                                    <h3>Working gigs and making clients happy</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">some of the public sites I have permision to share</span>
                                        </div>
                                        <div className="achievement">

                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/bd.png',
                                                    '/site/oo.png',
                                                    '/site/isheda.png'
                                                ]}
                                                site={[
                                                    'https://babasiledaniel.com/',
                                                    'https://mideosunyomi.com/',
                                                    'https://isheda.com/'
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">React</span>
                                        <span className="skill">CSS</span>
                                        <span className="skill">RESTful APIs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Nutriture (HealthTech)
                                        <span className="date">Jul 2020 - Dec 2020</span>
                                    </h2>
                                    <h3>Frontend Intern</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">This was a learning experience. I got to work in a startup</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Converted Figma designs into dynamic React components</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Integrated RESTful APIs</span>
                                        </div>
                                        <div className="achievement">

                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/nutriture.png',
                                                ]}
                                                site={[
                                                    'https://nutriture.netlify.app/',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">React</span>
                                        <span className="skill">CSS</span>
                                        <span className="skill">RESTful APIs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Instructor
                                        <span className="date">May 2019</span>
                                    </h2>
                                    <h3>GDSC FUTA</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Became an instructor, teaching was starting to be my thing</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Led coding sessions and collaborative projects</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">After lesson pictures with fellow instructors and students (Family)</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/gdsc1.jpg',
                                                    '/cert/gdsc2.jpg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Applied to be GDSC lead but got rejected ( I totally see why now ) </span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Became a Core GDSC Team member ( our girl is growing )</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/gdsc.jpg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Some sites built while teaching</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/spa.png',
                                                    '/site/mi.png'
                                                ]}
                                                site={[
                                                    'https://spa-beauty.netlify.app/',
                                                    'https://miboards.netlify.app/'
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">HTML</span>
                                        <span className="skill">CSS</span>
                                        <span className="skill">Vanilla Javascript</span>
                                        <span className="skill">P5.js Artistic Coding</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Budding Interest In IOT
                                        <span className="date">Jan 2019</span>
                                    </h2>
                                    <h3>TME Education</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Participated in TME IOT bootcamp</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/tme.png',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Became an Instructor at TME Education</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/tme1.jpg',
                                                    '/cert/tme2.jpg',
                                                    '/cert/tme3.jpg',
                                                    '/cert/tme4.jpg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Went for Outreach to Rural areas</span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/tme5.jpg',
                                                    '/cert/tme6.jpg',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="skills">
                                        <span className="skill">Arduino</span>
                                        <span className="skill">Auto Cad</span>
                                        <span className="skill">P5 Artistic Coding</span>
                                    </div>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="connector"></div>
                                <div className="content">
                                    <h2>
                                        Fresher
                                        <span className="date">Jan 2018</span>
                                    </h2>
                                    <h3>Trying to figure out computing</h3>
                                    <div className="achievements">
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Started studying Computer Science at FUTA </span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Started taking courses on SoloLearn (HTML, CSS, JS) </span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/cert/html.png',
                                                    '/cert/css.png',
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Joined Google Developers Student Club (GDSC FUTA) </span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <span className="achievement-text">Put web developement into pratical use ( yes, they look horrible but at that time it was the most magical thing I ever saw) </span>
                                        </div>
                                        <div className="achievement">
                                            <span className="achievement-marker">▹</span>
                                            <ImageGallery
                                                images={[
                                                    '/site/s.png',
                                                    '/site/u.png',
                                                    '/site/a.png',
                                                    '/site/crm.png'
                                                ]}
                                                site={[
                                                    'https://social-media-webpage.netlify.app/',
                                                    'https://ustore.netlify.app/',
                                                    'https://soko1.netlify.app/',
                                                    'https://simple-crm.netlify.app'
                                                ]}
                                                direction="horizontal"
                                                thumbnailSize="medium"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="timeline-end">
                                <div className="end-marker">✓</div>
                                <h3>6+ Years of Professional Experience</h3>
                                <p>From education to engineering leadership, Miriam has built a diverse career with expertise in frontend (React, Angular), backend (Node.js, Golang), and cloud technologies.</p>
                            </div>
                        </div>

                    </div>
                </section>

            </Fragment>
        </TheLayout>

    )
}

