import { useMain } from '../../services'


export function PersonalInfo(props) {
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