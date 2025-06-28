import { useNavigate } from 'react-router-dom';
import './Recipeaboutus.css'
import images from './images/images.png'

function Recipeaboutus() {

    const navigate = useNavigate()

    const goToSignup = () => {
    navigate('/Recipemain');
  };

   const goToLogin = () => {
    navigate('/Recipelogin');
  };

  const goToHome = () => {
    navigate('/Recipehome');
  };
  const goToRecipe = () => {
    navigate('/Recipe');
  };
  const goTocontact = () => {
    navigate('/Recipecontact');
  };
    return(
        <div>
            <div className="navbar3">
                        
                                    <div className='logo'>
                                        <img src={images} alt='recipe'/>
                                    </div>
                                    
                                        <ul>
                                            
                                            <li onClick={goToHome}>Home</li>
                                            <li onClick={goToRecipe}>Recipes</li>
                                            <li>About Us</li>
                                            <li onClick={goTocontact}>Contact</li>
                                        </ul>
                                        <div className='login'>
                                            <button type='submit' onClick={goToLogin}>Login</button>
                                            <button type='submit' onClick={goToSignup}>Signup</button>
                                        </div>
                                  </div><br></br>

                                  <h1>About Us</h1>
                                  <p>Welcome to <b>Recipeshare</b> – your go-to destination for discovering and sharing delicious recipes from around 
                                     the world!</p>


                                  <p>At Recipeshare, we believe that great food brings people together. Whether you're a seasoned chef, a home 
                                    cook, or someone just starting out in the kitchen, our platform offers a space to explore new flavors, share 
                                    your own creations, and connect with a community that loves 
                                    food as much as you do.</p> 


                                  <p>From quick weeknight dinners to gourmet feasts and global cuisines, Recipeshare is packed with diverse 
                                    recipes to suit every taste and occasion. Our easy-to-follow instructions, user-submitted tips, and step-by-
                                    step photos make cooking enjoyable and accessible for everyone.</p> 

                                    <p>But Recipeshare is more than just a recipe database — it’s a space for sharing, learning, and connecting. We 
                                        encourage users to upload their favorite recipes, share cooking tips, leave reviews, and inspire others. 
                                        Every recipe tells a story, and by contributing your own, you help build a global table where everyone is welcome.</p>


                                  <p>Join us as we celebrate the joy of cooking, one recipe at a time.</p>   

                                  <div className='address'>
                                    Contact Us

                                    📍 Address:
                                      Recipeshare HQ
                                      123 Culinary Lane
                                      Flavor Town, CA 90210
                                      United States

                                    📧 Email:
                                        support@recipeshare.com
                                    </div>  
                        
                                  
            
                                     <div className='footer1'>
                        
                      </div>

        </div>
    )
}

export default Recipeaboutus