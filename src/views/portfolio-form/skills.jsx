import { useState } from 'react'
import { useMain } from '../../services'

export function Skills(props) {
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
