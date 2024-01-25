import { useState, Fragment } from 'react'
import { useMain } from '../../services'

export function Projects(props) {
   const { setUser, isLoading } = useMain()
   const { setSteps, user, setuser, steps } = props;
   const [projects, setProjects] = useState([])
   const [pjt, setPjt] = useState({
      name: "",
      description: "",
      previewLink: "",
   })

   const addProject = (e) => {
      e.preventDefault()
      setProjects([
         pjt,
         ...projects,
      ])
      setPjt({
         name: "",
         description: "",
         previewLink: "",
      })
   }
   const handleChange = (e, idx) => {
      setPjt({ ...pjt, [e.target.name]: e.target.value })
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
                  <div className=''>
                     {
                        projects?.map((p) => (
                           <div>
                              <div><b>Name: </b> {p.name}</div>
                              <div><b>Preview: </b> {p.previewLink}</div>
                              <div><b>Description: </b> {p.description}</div>
                              <br />
                           </div>
                        ))
                     }
                  </div>
                  <div>

                     <div className='input-group'>
                        <label htmlFor="">Project Name</label>
                        <input type='text' value={pjt.name} name='name' onChange={handleChange} />
                     </div><br />
                     <div className='input-group'>
                        <label htmlFor="">Preview Link</label>
                        <input placeholder='drop your github here if no live preview link' value={pjt.previewLink} type='url' name='previewLink' onChange={handleChange} />
                     </div><br />
                     <div className='input-group'>
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="description" value={pjt.description} placeholder='eg: A project to that cast spells to take you to an alternate multiverse' rows={3} onChange={handleChange} />
                     </div>
                  </div>
                  <div>
                     <button type='button' className='rainbow-word text-right' name='soft' onClick={addProject}>add Entry</button>
                  </div>
                  <hr />
                  <div className='text-center'>
                     <button type='submit' className='rainbow-word'>{isLoading?.status ? isLoading?.message : "save & continue"}</button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}