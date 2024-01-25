import { useState, Fragment } from 'react'
import { useMain } from '../../services'

export function Experience(props) {
   const { setUser, isLoading } = useMain()
   const { setSteps, user, setuser, steps } = props;
   const [contribution, setContribution] = useState("")
   const [exp, setExp] = useState([])
   const [expEntry, setExpEntry] = useState({
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      isPresent: false,
      contributions: []
   })

   const addExp = (e) => {
      e.preventDefault()
      setExp([...exp, expEntry])
      setExpEntry({
         title: "",
         organization: "",
         startDate: "",
         endDate: "",
         isPresent: false,
         contributions: []
      })
   }
   const handleChange = (e) => {
      setExpEntry({ ...expEntry, [e.target.name]: e.target.value })
   }

   const addContribution = () => {
      setExpEntry({ ...expEntry, contributions: [...expEntry.contributions, contribution] })
   }

   const removeContribution = (e, idx) => {
      e.preventDefault()
      setExpEntry({ ...expEntry, contributions: expEntry.contributions?.filter((c, indx) => indx != idx) })
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
                        <button type='button' className='rainbow-word' name='soft' onClick={addExp}>add Entry</button>
                     </div>
                  </div>
                  <div>
                        {
                           exp?.map((ex, index) => (
                              <Fragment key={index}>
                                    <div>Title : {ex.title} </div>
                                    <div>Organisation : {ex.organization} </div>
                                    <div>Date: {ex.startDate} - {ex.isPresent ? 'Present' : ex.endDate} </div>
                              </Fragment>
                           ))
                        }
                     <div>
                        <div className='input-group'>
                           <label htmlFor="">Title</label>
                           <input type='text' defaultValue={exp.title} name='title' onChange={handleChange} />
                        </div><br />
                        <div className='input-group'>
                           <label htmlFor="">Organization</label>
                           <input type='text' defaultValue={exp.organization} name='organization' onChange={handleChange} />
                        </div><br />
                        <div className='dates'>
                           <div className='input-group'>
                              <label htmlFor="">Start Date</label>
                              <input type='date' defaultValue={exp.startDate} name='startDate' onChange={handleChange} />
                           </div>
                           <div className='input-group'>
                              <label htmlFor="">End Date</label>
                              <input readOnly={exp.isPresent} type='date' defaultValue={exp.endDate} name='endDate' onChange={handleChange} />
                           </div>
                        </div>
                        <div className='input-group checkbox' >
                           <input type='checkbox' defaultValue={exp.isPresent} name='isPresent' onChange={handleChange} />
                           <label htmlFor="">Present Role</label>
                        </div><br />
                        <div>
                           <div className='flex-heading '>
                              <h4>Contributions</h4>
                           </div>
                           <div>
                              <div>
                                 {
                                    expEntry?.contributions?.map((ctr, indx) => (
                                       <div key={indx}>
                                          {ctr}
                                          <button onClick={(e) => removeContribution(e, indx)}>x</button>
                                       </div>
                                    ))
                                 }
                              </div>
                           </div>
                           <div className='input-group ctr'>
                              <input placeholder='enter contribution' value={contribution} name='contribution' onChange={(e) => setContribution(e.target.value)} />
                              <button className='rainbow-word add-skill' name='hard' type='button' onClick={addContribution}>add contribution</button>
                           </div>

                        </div>
                     </div>
                  </div>
                  <div className='text-center'>
                     <button type='submit' className='rainbow-word'>{isLoading?.status ? isLoading?.message : "save and continue"}</button>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}