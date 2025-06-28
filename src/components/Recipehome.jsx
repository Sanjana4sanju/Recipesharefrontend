import './Recipehome.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import images from './images/images.png'
import spa from './images/spa.jpg'
import chicken from './images/chicken.jpeg'
import veg from './images/veg.jpg'
import pan from './images/pan.jpg'
import beef from './images/beef.webp'
import pizza from './images/pizza.jpeg'
import sushi from './images/sushi.webp'
import quinoa from './images/quinoa.jpg'
import { useEffect, useState } from 'react'


function Recipehome() {

    const navigate = useNavigate()
    const[recipeshow,setrecipeshow] = useState([])

     const goToRecipe = () => {
    navigate('/Recipe');
  };

   const goToabout = () => {
    navigate('/Recipeaboutus');
  };

   const goTocontact = () => {
    navigate('/Recipecontact');
  };

  const goToRecipe1 = () => {
    navigate('/Recipepage1')
  }
  const goToRecipe2 = () => {
    navigate('/Recipepage2')
  }
  const goToRecipe3 = () => {
    navigate('/Recipepage3')
  }
  useEffect(() => {
     axios.get('http://localhost:3000/recipeshow').then((res) => {
      console.log(res.data)
      setrecipeshow(res.data)
     })
  },[])
    return(
        
            <div>
                    <div className="navbar">
            
                        <div className='logo'>
                            <img src={images} alt='recipe'/>
                        </div>
                        
                            <ul>
                                
                                <li>Home</li>
                                <li onClick={goToRecipe}>Recipes</li>
                                <li onClick={goToabout}>About Us</li>
                                <li onClick={goTocontact}>Contact</li>
                            </ul>
                            <div className='login'>
                                <button type='submit'>Login</button>
                                <button type='submit'>Signup</button>
                            </div>
                      </div>
                      <div className='heading'>
                      <h1>Explore Our Delicious Recipies</h1>
                      <button type='submit'>Add your recipes</button> <br></br>
                      
                      </div><br></br>
                      <input className='search' type ='text' placeholder='Search for recipes,ingredients or cuisines..       🔍'/>

                      <div className='container'>
                        {recipeshow.map((recipe) => {
                           return(
                            <div className='box'>
                              <img src={"http://localhost:3000/uploads/photos/"+ recipe.Recipeimage}/>
                              <h3>{recipe.Recipetitle}</h3>
                              <p>{recipe.Shortdescription}</p>
                              <Link to={'/Recipepage/'+ recipe._id}>view Recipe</Link>
                              </div>
                           )
                        })}
                        <div className='box1 box'>
                            <img src={spa} alt='spagetti'/>
                            <h3>Spaghetti Bolognese </h3>
                            <p>A classic italian pasta dish with a rich meat 
                                sauce.
                            </p>
                            <button type='submit' onClick={goToRecipe1}>View Recipe</button>
                        </div>
                        <div className='box2 box'>
                            <img src={chicken} alt='chicken'/>
                            <h3>Spicy chicken Curry </h3>
                            <p>A flavourful and Aromatic indian chicken curry.
                           </p>
                            <button type='submit' onClick={goToRecipe2}>View Recipe</button>
                        </div>
                        <div className='box3 box'>
                            <img src={veg} alt='veg'/>
                            <h3> Vegetable stir fry</h3>
                            <p>Healthy stir-fried vegetables with a savoury sauce.
                           </p>
                            <button type='submit'>View Recipe</button>
                        </div>
                        <div className='box4 box'>
                            <img src={pan} alt='pancake'/>
                            <h3> Fluffy pancakes</h3>
                            <p>Perfect for a weekend breakfast and brunch.
                           </p>
                            <button type='submit' onClick={goToRecipe3}>View Recipe</button>
                        </div>
                        <div className='box5 box'>
                            <img src={beef} alt='beef'/>
                            <h3>Authentic Beef Tacos</h3>
                            <p>Mexican tacos with seasoned beef and
                                toppings.
                           </p>
                            <button type='submit'>View Recipe</button>
                        </div>
                        <div className='box6 box'>
                            <img src={pizza} alt='pizza'/>
                            <h3>Pepporoni pizza </h3>
                            <p>Classic pizza,perfect for a family
                              dinner.
                           </p>
                            <button type='submit'>View Recipe</button>
                        </div>
                         <div className='box7 box'>
                            <img src={sushi} alt='sushi'/>
                            <h3>Fresh Sushi Rolls </h3>
                            <p>Delicious and beautiful sushi rolls at 
                              home.
                           </p>
                            <button type='submit'>View Recipe</button>
                        </div>
                        <div className='box8 box'>
                            <img src={quinoa} alt='quinoa'/>
                            <h3>Healthy quinoa Salad </h3>
                            <p>A refreshing and protein-packed salad
                              
                           </p>
                            <button type='submit'>View Recipe</button>
                        </div>

                      </div><br></br>
                      <div className='footer'>
                         
                        

          </div>
                      
        </div>
    )
}
export default Recipehome;