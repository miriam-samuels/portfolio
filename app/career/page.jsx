import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './career.scss'

const CareerPage = () => {
    return (
        <div className="career-container">
            <div className="header">
                <h1>My Career Journey</h1>
                <p className="subtitle">Let's embark on a journey of Pixels, Payloads, and Performance 🔶</p>
            </div>

            <div className="timeline">
                {/* TakeTrips */}
                <div className="career-card">
                    <div className="date-star">
                        <div className="date">Oct 2024 - Present</div>
                        <div className="star-rating">★ 5</div>
                    </div>
                    <div className="card-content">
                        <h2>TakeTrips</h2>
                        <h3>Full Stack Developer (TravelTech)</h3>
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
                                <div className="site-visit">
                                    <span>🌐 Visit site</span>
                                    <div className="site-thumbnail">
                                        <Image src="/site/taketrip.png" alt="TakeTrips website" width={120} height={80} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <span className="skill">Node</span>
                            <span className="skill">Loopback</span>
                            <span className="skill">MongoDB</span>
                            <span className="skill">Redis</span>
                            <span className="skill">React</span>
                            <span className="skill">Redux Toolkit</span>
                        </div>
                        <div className="read-more">
                            <Link href="#" className="read-more-link">Read more →</Link>
                        </div>
                    </div>
                </div>

                {/* Kyzzen */}
                <div className="career-card">
                    <div className="date-star">
                        <div className="date">Apr 2022 - Jun 2024</div>
                        <div className="star-rating">★ 4</div>
                    </div>
                    <div className="card-content">
                        <h2>Kyzzen</h2>
                        <h3>Full Stack Developer (Web3)</h3>
                        <div className="achievements">
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <span className="achievement-text">Worked with a team of 7 including designers, product managers and engineers to develop a suite of tools. This increased user engagement by 160% and reinforced our vision to be a one-stop Crypto platform.</span>
                            </div>
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <div className="site-visit">
                                    <span>🌐 Visit site</span>
                                    <div className="site-thumbnail">
                                        <Image src="/site/kyzzen.png" alt="Kyzzen website" width={120} height={80} />
                                    </div>
                                </div>
                            </div>
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <span className="achievement-text">Developed and deployed scalable microservices using Golang, Kubernetes, and Docker, increasing system scalability by 43% and reducing deployment time.</span>
                            </div>
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <span className="achievement-text">Implemented bulk transaction operations, enabling users to process multiple actions simultaneously and reducing execution time by 30%.</span>
                            </div>
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <span className="achievement-text">Built a Telegram bot that enabled users to interact with our AI platform resources and receive real-time NFT updates, increasing engagement by 20%.</span>
                            </div>
                        </div>
                        <div className="skills">
                            <span className="skill">React</span>
                            <span className="skill">Node.js</span>
                            <span className="skill">Golang</span>
                            <span className="skill">Docker</span>
                            <span className="skill">Kubernetes</span>
                            <span className="skill">Web3</span>
                        </div>
                        <div className="read-more">
                            <Link href="#" className="read-more-link">Read more →</Link>
                        </div>
                    </div>
                </div>

                {/* Add more positions as needed */}
                <div className="career-card">
                    <div className="date-star">
                        <div className="date">Jan 2020 - Mar 2022</div>
                        <div className="star-rating">★ 4</div>
                    </div>
                    <div className="card-content">
                        <h2>TechNova</h2>
                        <h3>Frontend Developer</h3>
                        <div className="achievements">
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <span className="achievement-text">Architected and implemented responsive UI components using React, reducing load times by 35%.</span>
                            </div>
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <span className="achievement-text">Collaborated with UX designers to create intuitive interfaces that increased user engagement metrics by 28%.</span>
                            </div>
                            <div className="achievement">
                                <span className="achievement-marker">▹</span>
                                <span className="achievement-text">Led the migration from legacy CSS to Tailwind, improving developer productivity and UI consistency.</span>
                            </div>
                        </div>
                        <div className="skills">
                            <span className="skill">React</span>
                            <span className="skill">TypeScript</span>
                            <span className="skill">Tailwind</span>
                            <span className="skill">Redux</span>
                            <span className="skill">Jest</span>
                        </div>
                        <div className="read-more">
                            <Link href="#" className="read-more-link">Read more →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerPage;