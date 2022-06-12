import * as IMAGE from "./images"
function TheLayout({ children }) {
    return (
        <div className="cover">
            <header>
                <section id="header">
                    <div className="logo">
                        <img src={IMAGE.LOGO} alt="Miriam" />
                    </div>
                </section>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default TheLayout