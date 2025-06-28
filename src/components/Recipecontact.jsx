import { useNavigate } from 'react-router-dom';
import './Recipecontact.css'
import images from './images/images.png'

function Recipecontact() {

    const navigate = useNavigate()

    const goToSignup = () => {
    navigate('/Recipemain');
  };

   const goToLogin = () => {
    navigate('/Recipelogin');
  };
   const goToabout = () => {
    navigate('/Recipeaboutus');
  };
   const goToHome = () => {
    navigate('/Recipehome');
  };
  const goToRecipe = () => {
    navigate('/Recipe');
  };
    return(
        <div>
            <div className="navbar4">
                                    
                                                <div className='logo'>
                                                    <img src={images} alt='recipe'/>
                                                </div>
                                                
                                                    <ul>
                                                        
                                                        <li onClick={goToHome}>Home</li>
                                                        <li onClick={goToRecipe}>Recipes</li>
                                                        <li onClick={goToabout}>About Us</li>
                                                        <li>Contact</li>
                                                    </ul>
                                                    <div className='login'>
                                                        <button type='submit' onClick={goToLogin}>Login</button>
                                                        <button type='submit' onClick={goToSignup}>Signup</button>
                                                    </div>
                                              </div><br></br>

                                              <form className='contact'>
                                                <h2>Contact Us</h2>
                                                <input type="text" placeholder='FullName'/><br></br><br></br>
                                                <input type="text" placeholder='Email'/><br></br><br></br>
                                                <input type="number" placeholder='phonenumber'/><br></br><br></br>
                                                <textarea name="message" placeholder='Enter your message...' rows="10" cols="40">

                                                </textarea><br></br>
                                                <button type='submit'>Submit</button>
                                              </form>

                                               <div className='footer'>
            
          </div>

        </div>
    )
}
export default Recipecontact