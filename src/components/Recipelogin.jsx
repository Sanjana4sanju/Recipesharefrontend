import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Recipelogin.css'
import images from './images/images.png';
import { Link } from 'react-router-dom';


function Recipelogin() {
    const navigate = useNavigate()

     const[Email,setemail] = useState("");
        const[Password,setpassword] = useState("");
        const[error,seterror] = useState("")

        const goToSignup = () => {
    navigate('/Recipemain');
  };

        function handleSubmit(e) {
        e.preventDefault()
        if(Email === "" || Password === ""){
            seterror("login fail")
        }else{
            seterror("")
            axios.post('http://localhost:3000/Login',{Email,Password})
            .then((res) => {
                localStorage.setItem("token",res.data.token)
                navigate("/Recipehome")
            }  )
        }
    }
    return(
        <div>
            <div className="navbar2">
            
                        <div className='logo'>
                            <img src={images} alt='recipe'/>
                        </div>
                        
                            <ul>
                                
                                <li>Home</li>
                                <li>Recipes</li>
                                <li>About Us</li>
                                <li>Contact</li>
                            </ul>
                            <div className='login'>
                                <button type='submit'>Home</button>
                                <button type='submit' onClick={goToSignup}>Signup</button>
                            </div>
                      </div><br></br>
            
                      <form onSubmit={handleSubmit}>
                        <h1>Join RecipeShare!</h1>
                        <label>Email</label><br></br>
                        <input className='new' type="text" placeholder='email' value={Email} onChange={(e) =>setemail(e.target.value)} /><br></br><br></br>
                        <p>{error}</p>
                        <label>Password</label><br></br>
                        <input className='new' type="password" placeholder='password' value={Password} onChange={(e) =>setpassword(e.target.value)}></input><br></br><br></br>
                        <p>{error}</p>
                         <button type="submit">Login</button><br></br>
                         <Link to=''>Forgot Password?</Link>
                         </form> <br></br>

                         <div className='footer'>
            
          </div>

        </div>
    )
}
export default Recipelogin;