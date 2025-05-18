"use client";
import React, { Fragment, useEffect, useRef } from 'react';
import TheLayout from '../../shared/layout/TheLayout';
import ImageGallery from '@/shared/gallery';

// Import SCSS modules
import style from './timeline.module.scss';



// Timeline Item Component
const TimelineItem = ({ data}) => {
    const classes = [
        style.container,
        style[data.position], // e.g., style.right or style.left
    ].filter(Boolean).join(' ');
    return (
        <div className={classes} id={data.id}>
            <div className={style.connector}></div>
            <div className={style.content}>
                <h2>
                    {data.company}
                    <span className={style.date}>{data.date}</span>
                </h2>
                <h3>{data.title}</h3>
                <div className={style.achievements}>
                    {data.achievements.map((achievement, index) => (
                        <div className={style.achievement} key={`${data.id}-achievement-${index}`}>
                            {typeof achievement === 'string' ? (
                                <>
                                    <span className={style.achievement_marker}>▹</span>
                                    <span className={style.achievement_text}>{achievement}</span>
                                </>
                            ) : achievement.type === 'gallery' ? (
                                <>
                                    <span className={style.achievement_marker}>▹</span>
                                    <ImageGallery
                                        images={achievement.images}
                                        site={achievement.sites || []}
                                        direction="horizontal"
                                        thumbnailSize="medium"
                                    />
                                </>
                            ) : null}
                        </div>
                    ))}
                </div>
                {data.skills.length > 0 && (
                    <div className={style.skills}>
                        {data.skills.map((skill, index) => (
                            <span className={style.skill} key={`${data.id}-skill-${index}`}>{skill}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// Timeline End Component
const TimelineEnd = () => (
    <div className={style.timeline_end}>
        <div className={style.end_marker}>✓</div>
        <h3>6+ Years of Professional Experience</h3>
        <p>From education to engineering leadership, Miriam has built a diverse career with expertise in frontend (React, Angular), backend (Node.js, Golang), and cloud technologies.</p>
    </div>
);

// Timeline Component with Intersection Observer
const Timeline = () => {
    return (
        <div className={style.timeline}>
            {timelineData.map((item) => (
                <TimelineItem key={item.id} data={item} />
            ))}
            <TimelineEnd />
        </div>
    );
};

// Main Career Timeline Page Component
export default function CareerTimeline() {
    return (
        <TheLayout>
            <section id={style.career_timeline}>
                <div className={style.adventures_content}>
                    <div className={style.header}>
                        <h1>My Career Journey</h1>
                        <h2>Let's embark on a journey of Pixels, Payloads, and Performance 🔶</h2>
                    </div>
                    <div className={style.adventures_divider}></div>
                    <Timeline />
                </div>
            </section>
        </TheLayout>
    );
}

// Timeline data structure
const timelineData = [
    {
        id: 'taketrips',
        position: 'right',
        company: 'TakeTrips',
        date: 'Oct 2024 - Present',
        title: 'Full Stack Engineer (TravelTech)',
        achievements: [
            'Integrated and presented data from GDSs, NDCs, and OTAs to deliver unified, reliable flight offers.',
            'Built an alternate date feature to help users find the most affordable travel options.',
            'Built and integrated APIs for search, booking, issuance, and flight management.',
            'Held review sessions to ensure our codebase met the quality standards while providing feedback for the team\'s improvement.',
            {
                type: 'gallery',
                images: ['/site/taketrip.png'],
                sites: ['https://taketrips.co']
            }
        ],
        skills: ['Node', 'Loopback', 'MongoDb', 'Redis', 'React', 'Redux Toolkit']
    },
    {
        id: 'kyzzen',
        position: 'left',
        company: 'Kyzzen',
        date: 'Apr 2022 - Jan 2025',
        title: 'Full Stack Engineer',
        achievements: [
            'Worked with a team of 7 including designers, product managers and engineers to develop a suite of tools. This increased user engagement by 100% and reinforced our vision to be a one-stop Crypto platform',
            {
                type: 'gallery',
                images: ['/site/kyzzen.png'],
                sites: ['https://kyzzen.io']
            },
            'Developed and deployed scalable microservices using Golang, Kubernetes, and Docker, increasing system scalability by 40% and reducing deployment time.',
            'Implemented bulk transaction operations, enabling users to process multiple actions simultaneously and reducing execution time by 30%.',
            'Built a Telegram bot that enabled users to interact with out AI, platform resources and receive real-time NFT updates, increasing engagement by 20%.',
            'Converted Figma designs into fully functional and responsive React pages, improving user experience and interface consistency.',
            'Contributed to our NFT launch platform by building the interface alongside features for wallet whitelisting and user shortlisting for Kyzzen No Sekai NFTs.',
            {
                type: 'gallery',
                images: ['/site/kns.png'],
                sites: ['https://no-sekai.vercel.app/']
            },
            'Kyzzen No Sekai Alternate Design  —  I really liked the manga theme so I decided to keep it.',
            {
                type: 'gallery',
                images: ['/site/kns2.png'],
                sites: ['https://kns-iota.vercel.app/']
            }
        ],
        skills: ['React', 'Tailwind', 'GraphQL', 'Golang', 'Kubernetes', 'Docker']
    },
    {
        id: 'valuedriver',
        position: 'right',
        company: 'Value Driver',
        date: 'Jun 2022 - Dec 2024',
        title: 'Front End Developer (FinTech)',
        achievements: [
            'Developed Parallex Bank\'s Corporate Internet Banking platform.',
            'Translated designs to Angular code and integrating RESTful APIs for features like Transfers, Bulk Payments, and Audit Trails, boosting client transaction efficiency by 40%.',
            'Implemented robust security measures and compliance protocols like anti-clickjacking, CSP, XSS injection etc. that reduced potential vulnerabilities by 60%.',
            'Collaborated with a team of 4 on end-to-end and component testing, resulting in a 40% reduction in bug reports and improving overall platform stability and load time.',
            {
                type: 'gallery',
                images: ['/site/parallex.png'],
                sites: ['https://www.parallexbank.com/']
            }
        ],
        skills: ['Angular', 'RESTful APIs', 'Security', 'Banking']
    },
    {
        id: 'gdg-organizer',
        position: 'left',
        company: 'Co-organizer',
        date: 'Nov 2022 - Jan 2025',
        title: 'Google Developer Group Akure',
        achievements: [
            'We organized DevFest Akure, I/O extended, and IWD events.',
            {
                type: 'gallery',
                images: ['/cert/gdg3.jpg', '/cert/gdg4.jpg', '/cert/gdg5.jpg']
            },
            'Ancored events and handled panel sessions.',
            {
                type: 'gallery',
                images: ['/cert/gdg1.jpg', '/cert/gdg2.jpg']
            },
            'We grew a vibrant community of over 1500 developers.',
            {
                type: 'gallery',
                images: ['/cert/gdg6.jpg']
            }
        ],
        skills: ['Community Building', 'Event Organization', 'Leadership']
    },
    {
        id: 'juripass',
        position: 'right',
        company: 'Cholatrek — Juripass',
        date: 'Jan 2023 - Aug 2024',
        title: 'Front End Team Lead (LawTech)',
        achievements: [
            'Led the development of an Agile solution to streamline case filing and affidavit processing, reducing processing time by 70% and enhancing staff efficiency.',
            'Reviewed and approved code through structured PR processes, upholding clean code practices and reducing post-release bugs by 40%.',
            'Collaborated with a team of 8 on end-to-end testing for product releases resulting in a 15% reduction in post-release defects.',
            {
                type: 'gallery',
                images: ['/site/juripass.png'],
                sites: ['https://juripass.io/']
            }
        ],
        skills: ['Team Leadership', 'Agile', 'React', 'Redux Toolkit', 'Testing']
    },
    {
        id: 'cholatrek-educator',
        position: 'left',
        company: 'Cholatrek',
        date: 'Sep 2020 - Jan 2023',
        title: 'Tech Educator (EduTech)',
        achievements: [
            'Mentored 10+ interns on React (100% skill improvement)',
            'Facilitated interactive panels with industry experts',
            {
                type: 'gallery',
                images: ['/cert/th7.jpeg', '/cert/th6.jpeg', '/cert/th5.jpeg', '/cert/th4.jpeg', '/cert/th3.jpeg', '/cert/th2.jpeg', '/cert/th1.jpeg', '/cert/th8.jpeg']
            }
        ],
        skills: ['Teaching', 'Mentoring', 'React', 'Event Planning']
    },
    {
        id: 'banklingo',
        position: 'right',
        company: 'Banklingo',
        date: 'Aug 2021 - Mar 2022',
        title: 'Front End Developer (FinTech)',
        achievements: [
            'Worked on our Core Banking Application andwas often outsourced to other financial apps',
            'Implemented tiering system within core Internet banking software',
            'Enhanced security protocols to limit access based on account size',
            'Reduced potential fraud incidents by 40%',
            {
                type: 'gallery',
                images: ['/site/banklingo.png', '/site/mm.png'],
                sites: ['https://www.banklingo.app/', 'https://miniemoney.netlify.app/']
            }
        ],
        skills: ['React', 'Redux Toolkit', 'CSS', 'RESTful APIs', 'Banking Software', 'Security']
    },
    {
        id: 'biz301',
        position: 'left',
        company: 'Biz 301',
        date: 'Apr 2021 - Jul 2021',
        title: 'Front End Intern',
        achievements: [
            'I learnt Angular for this job and boy was I happy',
            'Handled the front end of facility management for BIZ301 software',
            'Created tools for entrepreneurs to track business branches, bills, and resources',
            'Implemented designs and Integrated RESTful APIs',
            {
                type: 'gallery',
                images: ['/site/biz301.png'],
                sites: ['https://www.biz301.com/']
            }
        ],
        skills: ['Angular', 'CSS', 'RESTful APIs']
    },
    {
        id: 'freelancing',
        position: 'right',
        company: 'Freelancing Period',
        date: 'Jan 2020',
        title: 'Working gigs and making clients happy',
        achievements: [
            'some of the public sites I have permision to share',
            {
                type: 'gallery',
                images: ['/site/bd.png', '/site/oo.png', '/site/isheda.png'],
                sites: ['https://babasiledaniel.com/', 'https://mideosunyomi.com/', 'https://isheda.com/']
            }
        ],
        skills: ['React', 'CSS', 'RESTful APIs']
    },
    {
        id: 'nutriture',
        position: 'left',
        company: 'Nutriture (HealthTech)',
        date: 'Jul 2020 - Dec 2020',
        title: 'Front End Intern',
        achievements: [
            'This was a learning experience. I got to work in a startup',
            'Converted Figma designs into dynamic React components',
            'Integrated RESTful APIs',
            {
                type: 'gallery',
                images: ['/site/nutriture.png'],
                sites: ['https://nutriture.netlify.app/']
            }
        ],
        skills: ['React', 'CSS', 'RESTful APIs']
    },
    {
        id: 'gdsc-instructor',
        position: 'right',
        company: 'Front End Instructor',
        date: 'May 2019',
        title: 'GDSC FUTA',
        achievements: [
            'Became an instructor, teaching was starting to be my thing',
            'Led coding sessions and collaborative projects',
            'After lesson pictures with fellow instructors and students (Family)',
            {
                type: 'gallery',
                images: ['/cert/gdsc1.jpg', '/cert/gdsc2.jpg']
            },
            'Applied to be GDSC lead but got rejected ( I totally see why now )',
            'Became a Core GDSC Team member ( our girl is growing )',
            {
                type: 'gallery',
                images: ['/cert/gdsc.jpg']
            },
            'Some sites built while teaching',
            {
                type: 'gallery',
                images: ['/site/spa.png', '/site/mi.png'],
                sites: ['https://spa-beauty.netlify.app/', 'https://miboards.netlify.app/']
            }
        ],
        skills: ['HTML', 'CSS', 'Vanilla Javascript', 'P5.js Artistic Coding']
    },
    {
        id: 'tme-education',
        position: 'left',
        company: 'Budding Interest In IOT',
        date: 'Jan 2019',
        title: 'TME Education',
        achievements: [
            'Participated in TME IOT bootcamp',
            {
                type: 'gallery',
                images: ['/cert/tme.png']
            },
            'Became an Instructor at TME Education',
            {
                type: 'gallery',
                images: ['/cert/tme1.jpg', '/cert/tme2.jpg', '/cert/tme3.jpg', '/cert/tme4.jpg']
            },
            'Went for Outreach to Rural areas',
            {
                type: 'gallery',
                images: ['/cert/tme5.jpg', '/cert/tme6.jpg']
            }
        ],
        skills: ['Arduino', 'Auto Cad', 'P5 Artistic Coding']
    },
    {
        id: 'fresher',
        position: 'right',
        company: 'Fresher',
        date: 'Jan 2018',
        title: 'Trying to figure out computing',
        achievements: [
            'Started studying Computer Science at FUTA',
            'Started taking courses on SoloLearn (HTML, CSS, JS)',
            {
                type: 'gallery',
                images: ['/cert/html.png', '/cert/css.png']
            },
            'Joined Google Developers Student Club (GDSC FUTA)',
            'Put web developement into pratical use ( yes, they look horrible but at that time it was the most magical thing I ever saw)',
            {
                type: 'gallery',
                images: ['/site/s.png', '/site/u.png', '/site/a.png', '/site/crm.png'],
                sites: ['https://social-media-webpage.netlify.app/', 'https://ustore.netlify.app/', 'https://soko1.netlify.app/', 'https://simple-crm.netlify.app']
            }
        ],
        skills: []
    },
];