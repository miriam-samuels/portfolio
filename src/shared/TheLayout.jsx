function TheLayout({ children }) {
    return (
        <div className="cover">
            <div id="header ">
                <header>
                    <div className="header-links wow fadeInRight">
                        <ul>
                            <li><span className="rainbow-word">01.</span> skills</li>
                            <li><span className="rainbow-word">02.</span> projects</li>
                            <li><span className="rainbow-word">03.</span> contact</li>
                        </ul>
                        <button className="resume">
                            Resume
                        </button>
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