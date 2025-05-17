import Link from 'next/link'
import TooltipPortal from '../tooltip'
import './index.scss'
function TheLayout({ children }) {

    const navLinks = [
        { title: "Home", path: '/', },
        { title: "Career", path: '/timeline', tooltip: 'Take a peek at my career timeline to see all the exciting adventures I’ve been on!' },
        { title: "Projects", path: '/timeline', }
    ]
    return (
        <div id='layout' className="cover">
            <div id="header">
                <header>
                    <img src={'/images/logo.png'} alt="Miriam" />

                    <div className="header-links wow fadeInRight">
                        <ul>
                            {
                                navLinks.map((nav, indx) => (
                                    <li key={nav.title}>
                                        <Link href={nav.path}>
                                            <span className="rainbow-word">0{indx + 1}. </span>
                                            {nav.title}
                                        </Link>
                                    </li>
                                ))
                            }
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
        </div>
    )
}

export default TheLayout