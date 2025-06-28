import { useNavigate, useParams } from 'react-router-dom'
import images from './images/images.png'
import chicken from './images/chicken.jpeg'
import veg from './images/veg.jpg'
import pan from './images/pan.jpg'
import person from './images/person.jpg'
import './Profile.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const navigate = useNavigate()

    const[profile,setprofile] = useState()

    

    const goToHome = () => {
        navigate('/Recipehome')
    }

    const goToRecipe = () => {
        navigate('/Recipe')
    }

    const goToabout = () => {
        navigate('/Recipeaboutus')
    }

    const goTocontact = () => {
        navigate('/Recipecontact')
    }
    useEffect(() => {
        axios.get('http://localhost:3000/getprofile' ,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then((res) => {
         setprofile(res.data)
        })
    })
    return (
        
              <div>
                        <div className="navbar4">
                                                
                                                            <div className='logo'>
                                                                <img src={images} alt='recipe'/>
                                                            </div>
                                                            
                                                                <ul>
                                                                    
                                                                    <li onClick={goToHome}>Home</li>
                                                                    <li onClick={goToRecipe}>Recipes</li>
                                                                    <li onClick={goToabout}>About Us</li>
                                                                    <li onClick={goTocontact}>Contact</li>
                                                                </ul>
                                                                <div className='login'>
                                                                    <button type='submit'>Login</button>
                                                                    <button type='submit'>Signup</button>
                                                                </div>
                                                          </div><br></br>
                                                          <div className='profilediv'>
                                                            <div className='profilecard'>
                        
                                                                <img id="img1" src={person} alt="person"></img>
                                                                 <div className='profileinfo'>
                                                                <h5>{profile?.Email}</h5>
                                                                <p>Food enthusiast and cook</p>
                                                                <button type='submit'>Edit profile</button>
                                                            </div>
                                                          </div>
                                                           <div className='headings'>
                                                            <h4>My Shared Recipes</h4>
                                                            <h4>My Saved Recipes</h4>
                                                          </div>
                                                           <div className='container1'>
                                                            <div className='section section1'>
                                                                
                                                                <img src={chicken} alt='chicken'/>
                                                                <h3>Spicy chicken Curry </h3>
                            <p>A flavourful and Aromatic indian chicken curry.
                           </p>
                            <button type='submit'>View Recipe</button>
                                                            </div>
                                                            <div className='section section2'>
                                                                <img src={veg} alt='vegetable'/>
                                                                <h3> Vegetable stir fry</h3>
                            <p>Healthy stir-fried vegetables with a savoury sauce.
                           </p>
                            <button type='submit'>View Recipe</button>
                                                            </div>
                                                            <div className='section section3'>
                                                                <img src={pan} alt='pancake'/>
                                                                <h3> Fluffy pancakes</h3>
                            <p>Perfect for a weekend breakfast and brunch.
                           </p>
                            <button type='submit'>View Recipe</button>
                                                            </div>
                                                            
                                                          </div>
                                                          
                                                          </div>
                                                          <div className='footer'>
                         
                        

          </div>

                                                         
                                                         

        </div>
    )
}
export default Profile