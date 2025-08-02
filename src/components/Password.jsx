import { Navigate } from 'react-router-dom'
import './Password.css'
import images from './images/images.png'
import axios from 'axios'
import { useState } from 'react'


function Password() {
    const[Email,setEmail] = useState('')

    const handlepsw = async (e) => {
        e.preventDefault()
    await axios.post('http://localhost:3000/forgotpassword',{Email}).then((res) => {
        alert('reset email sent to your mail')
        setEmail(" ")
    
    })
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
                                            <button type='submit'>Signup</button>
                                        </div>
                                  </div><br></br>
            <form className='forgotform'>
                <h2>Forgot Password</h2>
                <label>Enter Email</label>
                <input className='forgotpsw' type='text' placeholder='enter your email'value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                <button className='sbtform' type='submit' onClick={handlepsw}>Submit</button>
            </form>

        </div>
    )
}
export default Password;