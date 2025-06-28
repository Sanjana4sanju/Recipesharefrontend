import images from './images/images.png'
import './Recipepage2.css'
import chicken from './images/chicken.jpeg'
import { useNavigate } from 'react-router-dom'

function Recipepage2() {

     const navigate = useNavigate()

    const goToHome = () => {
        navigate('/Recipehome')
    }
    const goToRecipe = () => {
        navigate('/Recipe')
    }
    const goToAbout = () => {
        navigate('/Recipeaboutus')
    }
    const goTocontact = () => {
        navigate('/Recipecontact')
    }
    return(
        <div>
             <div className="navbar7">
                                    
                                                <div className='logo'>
                                                    <img src={images} alt='recipe'/>
                                                </div>
                                                
                                                    <ul>
                                                        
                                                        <li onClick={goToHome}>Home</li>
                                                        <li onClick={goToRecipe}>Recipes</li>
                                                        <li onClick={goToAbout}>About Us</li>
                                                        <li onClick={goTocontact}>Contact</li>
                                                    </ul>
                                                    <div className='login'>
                                                        <button type='submit'>Home</button>
                                                        <button type='submit'>Signup</button>
                                                    </div>
                                              </div><br></br>

                                              <div className='mainbox1'>
                                              
                                                                                  <div className='image2'>
                                                                                      <div className='recipe2'>
                                                                                      <img src={chicken} alt='chicken'/>
                                                                                      </div>
                                                                                      <div className='text'>
                                                                                      <h3>Spicy Chicken Curry</h3>
                                                                                      <p>A fiery and flavorful chicken curry simmered in a rich, aromatic blend of spices.
                                                                                      </p>
                                                                                      <p>⏲️ Prep time  ⌛Cook: 1hr 30min </p>
                                                                                      <p>Submitted By: <b>Atheena Joseph</b></p>
                                                                                      </div>
                                                                                      </div>
                                                                                      <h4>📌 Ingredients</h4>
                                                                                      <p>500g chicken (bone-in or boneless, cut into pieces)<br></br>
                                                                                         2 tablespoons oil (vegetable or mustard oil)<br></br>
                                                                                         2 onions, finely chopped<br></br>
                                                                                         2 tomatoes, chopped or pureed<br></br>
                                                                                         1 tablespoon ginger-garlic paste<br></br>
                                                                                         2–3 green chilies, slit<br></br>
                                                                                         1 teaspoon turmeric powder<br></br>
                                                                                         1 teaspoon red chili powder (adjust to taste)<br></br>
                                                                                         1 teaspoon coriander powder<br></br>
                                                                                         1/2 teaspoon cumin powder<br></br>
                                                                                         1/2 teaspoon garam masala<br></br>
                                                                                         Salt to taste<br></br>
                                                                                         Fresh coriander leaves for garnish<br></br>
                                                                                         Fresh coriander leaves for garnish</p>

                                                                                         <h4>📖Instructions</h4>
                                                                                         <p>Heat oil in a pan over medium heat.<br></br>
                                                                                           Add chopped onions and sauté until golden brown.<br></br>
                                                                                           Add ginger-garlic paste and green chilies; cook until the raw smell disappears.<br></br>
                                                                                           Add chopped or pureed tomatoes and cook until the oil separates.<br></br>
                                                                                           Add turmeric, red chili powder, coriander powder, and cumin powder; mix well.<br></br>
                                                                                           Add chicken pieces and stir to coat them in the masala.<br></br>
                                                                                           Cook for 5–7 minutes until the chicken starts to brown.<br></br>
                                                                                           Add salt and a splash of water to prevent burning; stir well.<br></br>
                                                                                           Cover and simmer on low heat for 15–20 minutes or until chicken is cooked through.<br></br>
                                                                                           Add garam masala and cook uncovered for another 2–3 minutes.<br></br>
                                                                                           Garnish with chopped fresh coriander leaves.<br></br>
                                                                                           Serve hot with rice, roti, or naan.</p>

                                                                                           <h4>Comments</h4>
                                                                                            <div className='comments'>
                                        <textarea placeholder='comment' rows='8' cols='100'></textarea>
                                        <button type='submit'>Post</button>
                                    </div>
                                                                                      </div>
                                                                                       <div className='footer'>
            
          </div>
                                              

        </div>
    )
}
export default Recipepage2