import { async } from '@firebase/util'
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useMain } from '../../services'
import { useAuth } from '../../services/auth'
import '../../styles/portfolio-form/index.scss'
function PortfolioForm() {
    const { currentUser } = useAuth()
    const [steps, setSteps] = useState(6)

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
        </main>
    )
}

export default PortfolioForm

function SignUp(props) {
    const { signUp } = useAuth()
    const { isLoading } = useMain()

    const { valueChange, user, setSteps } = props;


    const register = async (e) => {
        e.preventDefault()
        //register user
        const res = await signUp(user.email, user.password, user.siteId)
        if (res?.status) {
            setSteps(2)
            localStorage.setItem('step', 2)
        }
    }
    return (
        <section id="signup">
            <div className='signup form-box--con'>
                <form className='form-box' onSubmit={register}>
                    <div>
                        <p>Welcome to your portfolio builder</p>
                        <p>let's take you on an adventure</p><br />
                        <div>
                            <div className='form-group'>
                                <input placeholder='type in your mail' type="email" name="email" id="email" value={user?.email} onChange={valueChange} />
                            </div>
                        </div>
                        <div>
                            <div className='form-group'>
                                <input placeholder='type in your password' type="password" name="password" id="password" value={user?.password} onChange={valueChange} />
                            </div>
                        </div>
                        <div>
                            <div className='form-group'>
                                <input placeholder='Your portfolio id ' type="text" name="siteId" id="siteId" value={user?.siteId} onChange={valueChange} />
                            </div>
                        </div>
                        <div className='text-center'><br />

                            <button type='submit' className='rainbow-word'>{isLoading?.status ? isLoading?.message : "continue"}</button>

                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

function SuccessfulSignUp(props) {
    const { setSteps } = props;
    return (
        <section id="congrats-box">
            <div className='congrats-box form-box--con'>
                <div className='form-box text-center'>
                    <h2>🎉CONGRATULATIONS🎊</h2>
                    <h4>Now let's set up your Portfolio Site </h4>
                    <button className='rainbow-word' onClick={() => setSteps(prev => prev + 1)} >continue</button>
                </div>
            </div>
        </section>
    )
}

function PersonalInfo(props) {
    const { setUser, isLoading } = useMain()
    const { steps, setSteps, user, setuser } = props


    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //update user
        const res = await setUser(user)
        if (res?.status) {
            localStorage.setItem('step', steps + 1)
            setSteps(current => current + 1)
        }
    }
    return (
        <section id='personal-info'>
            <div className='personal-info form-box--con'>
                <form className='form-box text-center' onSubmit={handleSubmit}>
                    <h2 className='heading'>Personal Information</h2>
                    <div className='flex-input-group text-left'>
                        <div className='input-group'>
                            <label htmlFor="">First Name</label>
                            <input type="text" name="first_name" id="firstName" onChange={handleChange} value={user.firstName} required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" name="last_name" id="lastName" onChange={handleChange} value={user.lastName} required />
                        </div>
                    </div>
                    <div className='flex-input-group text-left'>
                        <div className='input-group'>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="email" onChange={handleChange} value={user.email} required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" name="phone" id="phone" onChange={handleChange} value={user.phone} required />
                        </div>
                    </div>
                    <div className='flex-input-group text-left'>
                        <div className='input-group'>
                            <label htmlFor="">Github URL</label>
                            <input type="url" name="github" id="github" onChange={handleChange} value={user.github} />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="">LinkedIn URL</label>
                            <input type="url" name="linkedin" id="linkedin" onChange={handleChange} value={user.linkedin} />
                        </div>
                    </div>
                    <div className='flex-input-group text-left'>
                        <div className='input-group'>
                            <label htmlFor="">Twitter URL</label>
                            <input type="tel" name="twitter" id="twitter" onChange={handleChange} value={user.twitter} />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="">Medium URL</label>
                            <input type="url" name="medium" id="medium" onChange={handleChange} value={user.medium} />
                        </div>
                    </div><br />
                    <div>
                        <button type="submit" className='rainbow-word'>{isLoading?.status ? isLoading?.message : "continue"}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

function Objectives(props) {
    const { setUser, isLoading } = useMain()
    const { steps, setSteps, setuser, user } = props


    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await setUser(user)
        if (res?.status) {
            localStorage.setItem('step', steps + 1)
            setSteps(current => current + 1)
        }
    }
    return (
        <section id='objectives'>
            <div className='objectives form-box--con'>
                <form className='form-box text-center' onSubmit={handleSubmit}>
                    <h2 className='heading'>Objectives</h2>
                    <div className='text-left'><br />
                        <div className='input-group'>
                            <label htmlFor="">Tagline (Describe what you do in one sentence)</label>
                            <textarea name="tagline" id="tagline" placeholder='eg: I design experiences that makes people lives easier ' value={user?.tagline} onChange={handleChange} />
                        </div><br />
                        <div className='input-group'>
                            <label htmlFor="">Describe yourself and what you do in more words</label>
                            <textarea placeholder='Describe yourself and what you do in more words' name="objective" id="objective" rows={6} value={user?.objective} onChange={handleChange} />
                        </div><br />
                        <div className='text-center'>
                            <button type='submit' className='rainbow-word'>{isLoading?.status ? isLoading?.message : "continue"}</button>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}

function Skills(props) {
    const { setUser, isLoading } = useMain()
    const { steps, setSteps, user, setuser } = props
    const [skills, setSkills] = useState({
        hard: [],
        soft: [],
        interests: [],
    })

    const addSkill = (e) => {
        e.preventDefault()
        const target = e.target.name
        const newVal = [...skills[target], ""]
        setSkills({ ...skills, [target]: newVal })
    }

    const removeSkill = (e, index) => {
        e.preventDefault()
        const target = e.target.name
        const edited = skills[target].filter((s, idx) => idx !== index)
        setSkills({ ...skills, [target]: [...edited] })
    }


    const handleChange = (e, idx) => {
        const target = e.target.name;
        const val = e.target.value;
        let targetArr = skills[target]
        let index = 0
        while (index < targetArr.length) {
            targetArr[idx] = val
            if (index === idx) {
                setSkills({ ...skills, [target]: targetArr });
                break;
            }
            index++;
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setuser({ ...user, skills })
        const res = await setUser({ ...user, skills })
        if (res?.status) {
            localStorage.setItem('step', steps + 1)
            setSteps(current => current + 1)
        }
    }
    return (
        <section id='skills'>
            <div className='theme-pick form-box--con'>
                <form className='form-box text-center' onSubmit={handleSubmit}>
                    <h2 className='heading'>Skills & Interest</h2>
                    <div className='text-left'>
                        <div>
                            <div className='flex-heading '>
                                <h4>Hard</h4>
                                <div>

                                    <button className='rainbow-word add-skill' name='hard' onClick={addSkill}>+</button>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    {
                                        skills?.hard?.map((skill, index) => (
                                            <li key={index}>
                                                <input placeholder='enter skill' defaultValue={skill} name='hard' onChange={(e) => handleChange(e, index)} />
                                                <button name="hard" onClick={(e) => removeSkill(e, index)}>x</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='flex-heading'>
                                <h4>Soft</h4>
                                <div>
                                    <button className='rainbow-word add-skill' name='soft' onClick={addSkill}>+</button>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    {
                                        skills?.soft?.map((skill, index) => (
                                            <li key={index}>
                                                <input placeholder='enter skill' defaultValue={skill} name='soft' onChange={(e) => handleChange(e, index)} />
                                                <button name="soft" onClick={(e) => removeSkill(e, index)}>x</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='flex-heading'>
                                <h4>Interest</h4>
                                <div>
                                    <button className='rainbow-word add-skill' name='interests' onClick={addSkill}>+</button>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    {
                                        skills?.interests?.map((skill, index) => (
                                            <li key={index}>
                                                <input placeholder='enter skill' defaultValue={skill} name='interests' onChange={(e) => handleChange(e, index)} />
                                                <button name="interests" onClick={(e) => removeSkill(e, index)}>x</button       >
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div> <br />
                    <div className='text-center'>
                        <button type='submit' className='rainbow-word'>{isLoading?.status ? isLoading?.message : "continue"}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

function Experience(props) {
    const { setUser, isLoading } = useMain()
    const { setSteps, user, setuser, steps } = props;
    const [contribution, setContribution] = useState("")
    const [exp, setExp] = useState([{
        title: "",
        organization: "",
        startDate: "",
        endDate: "",
        isPresent: false,
        contributions: []
    }])

    const addExp = (e) => {
        e.preventDefault()
        setExp([
            {
                title: "",
                organization: "",
                startDate: "",
                endDate: "",
                isPresent: false,
                contributions: []
            },
            ...exp,
        ])
    }
    const handleChange = (e, idx) => {
        let newArr = exp;
        let index = 0
        while (index < exp.length) {
            newArr[idx] = { ...newArr[idx], [e.target.name]: e.target.value }
            if (index === idx) {
                setExp(newArr);
                break;
            }
            index++;
        }
    }

    const addContribution = (e, idx) => {
        e.preventDefault()
        let newArr = exp;
        let index = 0
        while (index < exp.length) {
            newArr[idx] = { ...newArr[idx], contributions: [...newArr[idx].contributions, contribution] }
            if (index === idx) {
                setExp(newArr);
                setContribution('')
                break;
            }
            index++;
        }

        console.log(exp);
    }

    const removeContribution = (e, idx, ctrIdx) => {
        e.preventDefault()
        let newArr = exp;
        let index = 0
        while (index < exp.length) {
            if (index === idx) {
                newArr[idx] = { ...newArr[idx], contributions: newArr[idx].contributions.filter((c, indx) => indx != ctrIdx) }
                setExp(newArr);
                break;
            }
            index++;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setuser({ ...user, exp })
        const res = await setUser({ ...user, experience: exp })
        if (res?.status) {
            localStorage.setItem('step', steps + 1)
            setSteps(current => current + 1)
        }
    }
    return (
        <section id='projects'>
            <div className='projects form-box--con'>
                <form className='form-box text-center' onSubmit={handleSubmit}>
                    <h2 className='heading'>Experience</h2>
                    <div className='text-left'>
                        <div className='flex-heading'>
                            <h4></h4>
                            <div>
                                <button type='button' className='rainbow-word' name='soft' onClick={addExp}>add</button>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {
                                    exp?.map((ex, index) => (
                                        <Fragment key={index}>
                                            <li>
                                                <div className='input-group'>
                                                    <label htmlFor="">Title</label>
                                                    <input type='text' defaultValue={ex.title} name='title' onChange={(e) => handleChange(e, index)} />
                                                </div><br />
                                                <div className='input-group'>
                                                    <label htmlFor="">Organization</label>
                                                    <input type='text' defaultValue={ex.organization} name='organization' onChange={(e) => handleChange(e, index)} />
                                                </div><br />
                                                <div className='dates'>
                                                    <div className='input-group'>
                                                        <label htmlFor="">Start Date</label>
                                                        <input type='date' defaultValue={ex.startDate} name='startDate' onChange={(e) => handleChange(e, index)} />
                                                    </div>
                                                    <div className='input-group'>
                                                        <label htmlFor="">End Date</label>
                                                        <input readOnly={ex.isPresent} type='date' defaultValue={ex.endDate} name='endDate' onChange={(e) => handleChange(e, index)} />
                                                    </div>
                                                </div>
                                                <div className='input-group checkbox' >
                                                    <input type='checkbox' defaultValue={ex.isPresent} name='isPresent' onChange={(e) => handleChange(e, index)} />
                                                    <label htmlFor="">Present Role</label>
                                                </div><br />
                                                <div>
                                                    <div className='flex-heading '>
                                                        <h4>Contributions</h4>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            {
                                                                ex?.contributions?.map((ctr, indx) => (
                                                                    <div key={indx}>
                                                                        {ctr}
                                                                        <button onClick={(e) => removeContribution(e, index, indx)}>x</button>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className='input-group ctr'>
                                                        <input placeholder='enter skill' value={contribution} name='contribution' onChange={(e) => setContribution(e.target.value)} />
                                                        <button className='rainbow-word add-skill' name='hard' type='button' onClick={(e) => addContribution(e, index)}>Save</button>
                                                    </div>

                                                </div>
                                            </li>
                                            <hr />
                                        </Fragment>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='rainbow-word'>{isLoading?.status ? isLoading?.message : "continue"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

function Projects(props) {
    const { setUser, isLoading } = useMain()
    const { setSteps, user, setuser, steps } = props;
    const [projects, setProjects] = useState([{
        name: "",
        description: "",
        previewLink: "",
    }])

    const addProject = (e) => {
        e.preventDefault()
        setProjects([
            {
                name: "",
                description: "",
                previewLink: "",
            },
            ...projects,
        ])
    }
    const handleChange = (e, idx) => {
        let newArr = projects;
        let index = 0
        while (index < projects.length) {
            newArr[idx] = { ...newArr[idx], [e.target.name]: e.target.value }
            if (index === idx) {
                setProjects(newArr);
                break;
            }
            index++;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setuser({ ...user, projects })
        const res = await setUser({ ...user, projects })
        if (res?.status) {
            localStorage.setItem('step', steps + 1)
            setSteps(current => current + 1)
        }
    }
    return (
        <section id='projects'>
            <div className='projects form-box--con'>
                <form className='form-box text-center' onSubmit={handleSubmit}>
                    <h2 className='heading'>Projects</h2>
                    <div className='text-left'>
                        <div className='flex-heading'>
                            <h4></h4>
                            <div>
                                <button type='button' className='rainbow-word' name='soft' onClick={addProject}>add</button>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {
                                    projects?.map((project, index) => (
                                        <Fragment key={index}>
                                            <li>
                                                <div className='input-group'>
                                                    <label htmlFor="">Project Name</label>
                                                    <input type='text' defaultValue={project.name} name='name' onChange={(e) => handleChange(e, index)} />
                                                </div><br />
                                                <div className='input-group'>
                                                    <label htmlFor="">Preview Link</label>
                                                    <input placeholder='drop your github here if no live preview link' defaultValue={project.previewLink} type='url' name='previewLink' onChange={(e) => handleChange(e, index)} />
                                                </div><br />
                                                <div className='input-group'>
                                                    <label htmlFor="">Description</label>
                                                    <textarea name="description" id="description" placeholder='eg: A project to that cast spells to take you to an alternate multiverse' rows={3} />
                                                </div><br />
                                            </li>
                                            <hr />
                                        </Fragment>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='rainbow-word'>{isLoading?.status ? isLoading?.message : "continue"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

function ThemePick(props) {
    const { getThemes } = useMain()

    const [isLoading, setIsLoading] = useState(false)
    const [themes, setThemes] = useState([])
    const { steps, setSteps, user, setuser } = props

    useEffect(() => {
        getAllThemes()
    }, [])

    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const getAllThemes = async () => {
        setIsLoading(true)
        const res = await getThemes()
        if (res?.status) {
            setThemes(res?.data)
        }
        setIsLoading(false)
    }
    return (
        <section id='theme-pick'>
            <div className='theme-pick form-box--con'>
                <div className='form-box text-center'>
                    <h4>Let's pick a theme that best suits your pesonality</h4>
                    <div className='themes-box'>
                        {
                            !isLoading && themes?.map((theme) => (
                                <figure key={theme.id}>
                                    <img src={theme?.image} alt="theme" />
                                    <figcaption>
                                        <div>
                                            <input type="radio" name="theme" value={theme.name} onChange={handleChange} />
                                            {theme.name}
                                        </div>
                                    </figcaption>
                                </figure>
                            ))
                        }
                        {isLoading && <h2 className='rainbow-worf'> Loading Themes.....</h2>}
                    </div>
                    <hr />
                    <div className='text-center'>
                        <button type='submit' className='rainbow-word'>continue</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function AllSuccessful(props) {
    const { setSteps } = props;
    return (
        <section id="congrats-box">
            <div className='congrats-box form-box--con'>
                <div className='form-box text-center'>
                    <h2>🎉CONGRATULATIONS🎊</h2>
                    <h4>Now let's set up your Portfolio Site </h4>
                    <button className='rainbow-word' onClick={() => setSteps(prev => prev + 1)} >continue</button>
                </div>
            </div>
        </section>
    )
}