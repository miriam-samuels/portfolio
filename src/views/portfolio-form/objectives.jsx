import { useMain } from '../../services'

export function Objectives(props) {
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