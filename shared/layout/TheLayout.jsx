import Link from 'next/link';
import styles from './layout.module.scss';
import { useState, useEffect } from 'react';
import Loader from '../loader/loader';
import { usePathname } from 'next/navigation';

const Layout = ({children }) => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState('/');

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Career', path: '/timeline/' },
        { title: 'Projects', path: '/projects/' }
    ];

    useEffect(() => {
        setLoading(pathname)
    }, [pathname])

    useEffect(() => {
        // Check if we're on mobile
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuOpen && !e.target.closest(`.${styles.headerLinks}`) &&
                !e.target.closest(`.${styles.hamburgerMenu}`)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    // Toggle menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.layout + ' cover'}>
          
            <div className={styles.header}>

                <header>
                    <img src="/images/logo.png" alt="Miriam" className={styles.logo} />

                    <div className={`${styles.headerLinks}`}>
                        {/* Hamburger Menu for Mobile */}
                        <div
                            className={`${styles.hamburgerMenu} ${menuOpen ? styles.open : ''}`}
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={styles.nav}>
                            {navLinks.map((nav, index) => (
                                <Link href={nav.path} className={styles.navLink} key={nav.path} onClick={() => {
                                    if (loading === nav.path) {
                                        return
                                    }
                                    setLoading(nav.path)
                                }}>
                                    <span className={styles.navNumber}>0{index + 1}. </span>
                                    {nav.title}
                                </Link>
                            ))}
                            <button>
                                <Link rel="noopener noreferrer" href="https://docs.google.com/document/d/1HEV3CLgTW5QedkdYt6t3pJK8MmSVUk0_frrQUA6ovdU/edit?usp=sharing" target="_blank">
                                    Resume
                                </Link>
                            </button>
                        </nav>

                        {/* Mobile Navigation Overlay */}
                        {isMobile && (
                            <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}>
                                {navLinks.map((nav, index) => (
                                    <Link
                                        href={nav.path}
                                        className={styles.navLink}
                                        key={nav.path}
                                        onClick={() => {
                                            setMenuOpen(false)
                                            setLoading(true)
                                            const timer = setTimeout(() => {
                                                setLoading(false);
                                            }, 1000);

                                            return () => clearTimeout(timer);
                                        }}

                                    >
                                        <span className={styles.navNumber}>0{index + 1}. </span>
                                        {nav.title}
                                    </Link>
                                ))}
                                <button>
                                    <Link
                                        rel="noopener noreferrer"
                                        href="https://docs.google.com/document/d/1HEV3CLgTW5QedkdYt6t3pJK8MmSVUk0_frrQUA6ovdU/edit?usp=sharing"
                                        target="_blank"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Resume
                                    </Link>
                                </button>
                            </div>
                        )}
                    </div>
                </header>
            </div>

            <main className={styles.main}>
                {children}
            </main>
            <Loader isLoading={pathname !== loading} />
        </div>
    );
};

export default Layout;