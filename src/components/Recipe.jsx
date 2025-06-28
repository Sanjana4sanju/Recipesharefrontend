import { useNavigate } from 'react-router-dom';
import './Recipe.css'
import axios from 'axios'
import images from './images/images.png'
import { useState } from 'react';

function Recipe() {

    const navigate = useNavigate()

    const[Recipetitle,setrecipetitle] = useState("")
    const[description,setdescription] = useState("")
    const[ingredients,setingredients] = useState("")
    const[instructions,setinstructions] = useState("")
    const[Recipeimage,setRecipeimage] = useState()
    const[category,setcategory] = useState("")

    function Recipesubmit(e) {
      e.preventDefault()
      console.log(Recipeimage)
      let formdata = new FormData()
      formdata.append('Recipetitle',Recipetitle)
      formdata.append('Shortdescription',description)
      formdata.append('Ingredients',ingredients)
      formdata.append('Instructions',instructions)
      formdata.append('Recipeimage',Recipeimage)
      formdata.append('Category',category)

      

      
      let token = localStorage.getItem('token')
      axios.post('http://localhost:3000/recipe',formdata,{headers:{Authorization:`Bearer ${token}`,'Content-Type':'multipart/form-data'}})
      .then((res) => {
       
            alert('recipe added')

           setrecipetitle("");
    setdescription("");
    setingredients("");
    setinstructions("");
    setcategory("");
  })
  
} 
            
      
    


     const goToSignup = () => {
    navigate('/Recipemain');
  };
   const goToLogin = () => {
    navigate('/Recipelogin');
  };
   const goToHome = () => {
    navigate('/Recipehome');
  };
   const goToabout = () => {
    navigate('/Recipeaboutus');
  };
   const goTocontact = () => {
    navigate('/Recipecontact');
  };

    return(
        <div>
             <div className="navbar5">
                                                
                                                            <div className='logo'>
                                                                <img src={images} alt='recipe'/>
                                                            </div>
                                                            
                                                                <ul>
                                                                    
                                                                    <li onClick={goToHome}>Home</li>
                                                                    <li>Recipes</li>
                                                                    <li onClick={goToabout}>About Us</li>
                                                                    <li onClick={goTocontact}>Contact</li>
                                                                </ul>
                                                                <div className='login'>
                                                                    <button type='submit' onClick={goToLogin}>Login</button>
                                                                    <button type='submit' onClick={goToSignup}>Signup</button>
                                                                </div>
                                                          </div><br></br>

                                                          <form className='rec' onSubmit={Recipesubmit} >
                                                            <h2>Share Your Culinary Masterpiece</h2>
                                                            <h6>Fill out the form below to add your amazing recipe to Recipeshare</h6>
                                                            <label>Recipe Title</label>
                                                            <input type="text" placeholder='Recipe' value={Recipetitle} onChange={(e) =>setrecipetitle(e.target.value)}/><br></br>
                                                            <label>Short Description</label><br></br>
                                                            <textarea name="description"  rows="6" cols="60" value={description}onChange={(e) =>setdescription(e.target.value)}>

                                                </textarea><br></br>
                                                <label>Ingredients(one per line)</label><br></br>
                                                 <textarea name="ingredients"  rows="6" cols="60" value={ingredients}onChange={(e) =>setingredients(e.target.value)}>

                                                </textarea><br></br>
                                                <label>Instructions</label>
                                                 <textarea name="instructions"  rows="6" cols="60" value={instructions}onChange={(e) =>setinstructions(e.target.value)}>

                                                </textarea><br></br>
                                                <label>Recipeimage</label>
                                                <input type='file' src='' alt='submit'onChange={(e) => setRecipeimage(e.target.files[0])} width='50' height='50'/>
                                                <label>Category/Cuisine</label>
                                                 <textarea name="category"  rows="6" cols="60" value={category}onChange={(e) =>setcategory(e.target.value)}>

                                                </textarea><br></br>
                                                 <button className='sub' type="submit">Submit</button>
                                                 

                                                          </form>
                                                          <div className='footer'>
            
          </div>
            

        </div>
    )
  }
  

export default Recipe