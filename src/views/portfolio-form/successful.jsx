import { useNavigate } from "react-router-dom";

export function AllSuccessful(props) {
   const navigate = useNavigate()
   const { user } = props;
   return (
       <section id="congrats-box">
           <div className='congrats-box form-box--con'>
               <div className='form-box text-center'>
                   <h2>🎉CONGRATULATIONS🎊</h2>
                   <h4>Now let's set up your Portfolio Site </h4>
                   <button className='rainbow-word' onClick={() => navigate(`/${user.username}`)} >continue</button>
               </div>
           </div>
       </section>
   )
}