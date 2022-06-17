import React, { Fragment } from 'react'
import * as IMAGE from '../../shared/images'
import TheLayout from '../../shared/TheLayout'
import WindowCard from '../../shared/WindowCard'
function Landing() {
    return (
        <TheLayout>
            <Fragment>
                <section id="hero">
                    <div className="hero">
                        <div className="hero-text">
                            <h5>HI THERE 👋🏾 , I'M </h5>
                            <h1>Miriam Medo</h1>
                            <h1>I build scalable products</h1>
                            <p>
                                I am a goal-oriented software engineer team player that is enthusiastic about technology, education, community building, growth, and problem-solving. I combine my interest for technology and problem solving with teaching and volunteering at communities and organizations.
                            </p>
                            <hr />
                            <div>
                                <b><i>welcome to my <span className="rainbow-word">multiverse</span></i></b>
                            </div>
                           
                        </div>
                    </div>
                    {/* <img src={IMAGE.ORBITAL} alt="" className="orbital hero-orbital" /> */}
                </section>
                <section id="skills">
                    <div className="skills">
                        <div className="skills--heading">
                            <h1>Skills {"&"} Interests</h1>
                        </div>
                        <div className="skills--body">
                            <WindowCard />
                        </div>
                    </div>
                </section>
            </Fragment>
        </TheLayout>

    )
}

export default Landing