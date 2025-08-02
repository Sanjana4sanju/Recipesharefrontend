import './Reset.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import images from './images/images.png'

function Reset() {
     const [newPassword, setNewPassword] = useState('');
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/resetpassword', {
        token,
        newPassword,
      });
      alert(res.data.message);
    } catch (err) {
      alert('Password reset failed');
    }
  };

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
                                              <form className='resetform'>
                                                <h2>Reset password</h2>
                                                <label>New Password</label>
                                                <input className='resetpsw' type='password' placeholder='enter new password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
                                                <label>Re-type new password</label>
                                                <input className='resetpsw' type='password' placeholder='retype new password'></input>
                                                <button onClick={handleSubmit} className='resetbtn' type='submit'>Submit</button>
                                              </form>

        </div>
    )
}
export default Reset;