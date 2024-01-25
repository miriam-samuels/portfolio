import { useState, useEffect } from 'react'
import { useMain } from '../../services'
export function ThemePick(props) {
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