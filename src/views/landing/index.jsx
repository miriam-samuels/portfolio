import React, { Fragment } from 'react'
import * as IMAGE from '../../shared/images'
import TheLayout from '../../shared/TheLayout'
function Landing() {
    return (
        <TheLayout>
            <Fragment>
                <section id="hero">
                    <div className="hero">
                        <div className="hero-text">
                            <h3>👋🏾 Hello, I'm </h3>
                            <h1>Miriam Medo</h1>
                            <h1>Software Engineer</h1>
                            <p>
                                I am a goal-oriented team player that is enthusiastic about technology, education, community building, growth, and problem-solving. I combine my interest for technology and problem solving with teaching and volunteering at communities and organizations.
                            </p>
                            <hr/>
                            <div className="hero-contact">
                                <img src={IMAGE.LINKEDIN} alt="" />
                                <img src={IMAGE.GMAIL} alt="" />
                                <img src={IMAGE.TWITTER} alt="" />
                            </div>
                        </div>
                    </div>
                    <img src={IMAGE.ORBITAL} alt="" className="orbital hero-orbital" />
                </section>
            </Fragment>
        </TheLayout>

    )
}

export default Landing