import images from './images/images.png'
import './Recipepage3.css'
import pan from './images/pan.jpg'
import { useNavigate } from 'react-router-dom'

function Recipepage3() {

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
            <div className="navbar8">
                                                
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
                                                          <div className='mainbox2'>
                                                                                                        
                                                                                                                                            <div className='image3'>
                                                                                                                                                <div className='recipe3'>
                                                                                                                                                <img src={pan} alt='cake'/>
                                                                                                                                                </div>
                                                                                                                                                <div className='text'>
                                                                                                                                                <h3>Fluffy Pancakes</h3>
                                                                                                                                                <p>A fiery and flavorful chicken curry simmered in a rich, aromatic blend of spices.
                                                                                                                                                </p>
                                                                                                                                                <p>⏲️ Prep time  ⌛Cook: 1hr 30min </p>
                                                                                                                                                <p>Submitted By: <b>Atheena Joseph</b></p>
                                                                                                                                                </div>
                                                                                                                                                </div>
                                                                                                                                                                                   <h4>📌 Ingredients</h4>
                                                                                                                                                                                   <p>1 cup all-purpose flour<br></br>
                                                                                                                                                                                     2 tablespoons sugar<br></br>
                                                                                                                                                                                     1 tablespoon baking powder<br></br>
                                                                                                                                                                                     1/4 teaspoon salt<br></br>
                                                                                                                                                                                     1 cup milk (preferably whole milk)<br></br>
                                                                                                                                                                                     1 large egg<br></br>
                                                                                                                                                                                     2 tablespoons melted butter (plus more for cooking)<br></br>
                                                                                                                                                                                     1 teaspoon vanilla extract (optional)</p>

                                                                                                                                                                                      <h4>📖Instructions</h4>
                                                                                                                                                                                      <p>In a large bowl, whisk together the flour, sugar, baking powder, and salt.<br></br>
                                                                                                                                                                                        In another bowl, whisk the milk, egg, melted butter, and vanilla extract (if using).<br></br>
                                                                                                                                                                                        Pour the wet ingredients into the dry ingredients.<br></br>
                                                                                                                                                                                        Gently stir until just combined—do not overmix (a few lumps are okay).<br></br>
                                                                                                                                                                                        Let the batter rest for 5–10 minutes to activate the baking powder.<br></br>
                                                                                                                                                                                        Heat a non-stick pan or griddle over medium heat and lightly grease with butter.<br></br>
                                                                                                                                                                                        Pour about 1/4 cup of batter for each pancake onto the pan.<br></br>
                                                                                                                                                                                        Cook until bubbles form on the surface and the edges look set (about 2–3 minutes).<br></br>
                                                                                                                                                                                        Flip and cook the other side until golden brown (another 1–2 minutes).<br></br>
                                                                                                                                                                                        Repeat with the remaining batter, greasing the pan as needed.<br></br>
                                                                                                                                                                                        Serve warm with butter, syrup, fruits, or toppings of choice.</p>

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
export default Recipepage3