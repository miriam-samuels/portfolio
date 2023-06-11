import React, { useState, useEffect } from 'react'
import * as IMAGES from './components/images'
import '../../styles/landing/index.css'
import { useNavigate } from 'react-router-dom'
import Cursor from '../../shared/cursor'
import { useAuth } from '../../services/firebase/auth'
function Landing() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState(null)

  useEffect(() => {
    if (currentUser) navigate("/setup", { replace: true })
  }, [])

  return (
    <main id='landing'>
      <section id='header'>
        <div className='header' title='header'>
          <nav></nav>
          <div className='hero-con'>
            <div className="hero wow fadeInDown " data-wow-duration="1s">
              <div className="hero-text">
                <h2>Let's work on showcasing your best side</h2>
                <p>
                  We work together to position you in the right spot career-wise for employers to notice
                </p>
                <hr />
                <div className='join'>
                  <input type="email" defaultValue="" onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' name="email" id="email" />
                  <button onClick={() => { localStorage.setItem('userMail', email); navigate('/setup', { replace: true }) }}>Sign up to begin</button>
                </div>
              </div>
              <div className='hero-img'>
                <img src={IMAGES.HERO} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cursor />
    </main>
  )
}

export default Landing