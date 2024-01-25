import { useMain } from '../../services'
import { useAuth } from '../../services/auth'

export function SignUp(props) {
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

export function SuccessfulSignUp(props) {
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