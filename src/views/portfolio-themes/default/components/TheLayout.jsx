function TheLayout({ children }) {
    return (
        <div className="cover">
            <div id="header ">
                <header>
                    <div className="header-links wow fadeInRight">
                        <ul>
                            <li><a href="#skills"><span className="rainbow-word">01.</span> skills</a></li>
                            <li><a href="#projects"><span className="rainbow-word">02.</span> projects</a></li>
                            <li><a href="#contact"><span className="rainbow-word">03.</span> contact</a></li>
                        </ul>
                        <a href="../Resume 2.pdf" target="_blank" download>
                            <button className="resume">
                                Resume
                            </button>
                        </a>

                        {/* <img src={IMAGE.LOGO} alt="Miriam" />  */}
                    </div>
                </header>
            </div>
            <main>
                {children}

            </main>
            <footer>

            </footer>
        </div>
    )
}

export default TheLayout