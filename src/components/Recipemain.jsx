import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import './Recipemain.css'
import images from './images/images.png';

function Recipemain() {
    const navigate = useNavigate()

    const[Email,setemail] = useState("");
    const[Password,setpassword] = useState("");
    const[error,seterror] = useState("");

    const goToLogin = () => {
    navigate('/Recipelogin');
  };

    function handleSubmit(e) {
        e.preventDefault()
        if(Email === "" || Password === ""){
            seterror("login fail")
        }else{
            seterror("")
            axios.post('http://localhost:3000/register',{"Email":Email,"Password":Password})
            .then((res) => {alert(res.data.message)
                navigate("/Recipelogin")
            }  )
        }
    }
    return(
        <div>
        <div className="navbar1">

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
                    <button type='submit' onClick={goToLogin}>Login</button>
                </div>
          </div><br></br>

          <form onSubmit={handleSubmit}>
            <h1>Join RecipeShare!</h1>
            <h4>Create your account to get started</h4>
            <label>Email</label><br></br>
            <input className='fun' type="text" placeholder='email or username' value={Email} onChange={(e) =>setemail(e.target.value)}/><br></br>
            <p>{error}</p>
            <label>Password</label><br></br>
            <input className='fun' type="password" placeholder='password'value={Password} onChange={(e) =>setpassword(e.target.value)}></input><br></br>
            <p>{error}</p>
            <label>Confirm Password</label><br></br>
            <input className='fun' type="password" placeholder='confirm password'></input><br></br><br></br>
            <button type="submit">Sign Up</button><br></br>
            <p>Already have an account?<a href="">Login</a></p>


          </form><br></br><br></br>

          <div className='footer'>
            
          </div>

          </div>

        

        
    )
}

export default Recipemain;