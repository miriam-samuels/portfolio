import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../../services/auth'
import './index.scss'
import { SignUp, SuccessfulSignUp } from './sign-up'
import { PersonalInfo } from './personal-info'
import { Objectives } from './objectives'
import { Skills } from './skills'
import { Experience } from './experience'
import { Projects } from './projects'
import { ThemePick } from './theme-pick'
import { AllSuccessful } from './successful'
function PortfolioForm() {
    const { currentUser } = useAuth()
    const [steps, setSteps] = useState(8)

    const [user, setuser] = useState({
        email: localStorage.getItem('userMail') || "",
        password: "",
        username: localStorage.getItem('siteId'),
        siteId: localStorage.getItem('siteId'),
        first_name: "",
        last_name: "",
        email: localStorage.getItem('userMail'),
        phone: "",
        github: "",
        linkedin: "",
        twitter: "",
        medium: "",
        tagline: "",
        objective: "",
    })

    useEffect(() => {
        if (currentUser) {
            // const pos = localStorage.getItem('step')
            // setSteps(+pos)
        }
    }, [currentUser])

    const valueChange = (e) => {
        setuser(
            { ...user, [e.target.name]: e.target.value }
        )
    }
    return (
        <main id='portfolio-form'>
            {
                steps < 2 &&
                <SignUp
                    valueChange={valueChange}
                    user={user}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            {
                steps === 2 &&
                <SuccessfulSignUp
                    setSteps={setSteps}
                />
            }
            {
                steps === 3 &&
                <PersonalInfo
                    user={user}
                    setuser={setuser}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            {
                steps === 4 &&
                <Objectives
                    user={user}
                    setuser={setuser}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            {
                steps === 5 &&
                <Skills
                    user={user}
                    setuser={setuser}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            {
                steps === 6 &&
                <Experience
                    user={user}
                    setuser={setuser}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            {
                steps === 7 &&
                <Projects
                    user={user}
                    setuser={setuser}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            {
                steps === 8 &&
                <ThemePick
                    user={user}
                    setuser={setuser}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            {
                steps === 9 &&
                <AllSuccessful
                    user={user}
                    setuser={setuser}
                    steps={steps}
                    setSteps={setSteps}
                />
            }
        </main>
    )
}

export default PortfolioForm
