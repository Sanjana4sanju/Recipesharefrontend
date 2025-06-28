import './Recipepage1.css'
import spa from './images/spa.jpg'
import axios from 'axios'
import images from './images/images.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Recipepage1() {

    const navigate = useNavigate()

    const [recdetails,setrecdetails] = useState()
    const[comments,setcomments] = useState([])
    const[text,settext] = useState("")
    const[saved,setsaved] = useState(false)

    const {id} = useParams()

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

    const handlepost =() => {
     axios.post(`http://localhost:3000/comments/`+ id,{comment:text},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then(()=> {
      window.location.reload()
      
     })
    }

    const savepost = () => {
        axios.post('http://localhost:3000/saverecipes/' + id, null,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then(() => {
         setsaved(true)
        })
    }

    const savetext = (e) => {
   e.preventDefault()
   settext(e.target.value)
    }
    useEffect(() => {
      axios.get('http://localhost:3000/recipeshow/'+ id,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}).then((res) => {
         console.log(res.data)
         setrecdetails(res.data)
         setsaved(res.data.saved)

      })
    },[])

     useEffect(()=> {
        axios.get(`http://localhost:3000/comments/`+ id).then((res) => {
            console.log(id)
            setcomments(res.data)
        })


    },[])


    if(!recdetails){
        return(
            <div>Loading..</div>
        )
    }
   
   

    return(
        <div>
            <div className="navbar6">
                        
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

                                  <div className='mainbox'>

                                    

                                    <div className='image1'>
                                        <div className='recipe1'>
                                        <img src={'http://localhost:3000/uploads/photos/' + recdetails.Recipeimage} alt='spagetti'/>
                                        </div>
                                        <div className='text'>
                                        <h3>{recdetails.Recipetitle}</h3>
                                        <p>A classic Italian Pasta dish with a rich,slow-cooked meat sauce,perfect for a comforting
                                            family meal.
                                        </p>
                                        <p>⏲️ Prep time  ⌛Cook: 1hr 30min </p>
                                        <p>Submitted By: <b>{recdetails.User?.Email}</b></p>
                                        {saved ?<button type='submit' disabled>Saved</button>:<button type='submit'onClick={savepost}>Save</button>}
                                        </div>

                                         
                                    </div>
                                    <h4>📌 Ingredients</h4>
                                    <p style={{whiteSpace:"pre-wrap"}}>{recdetails.Ingredients}

                                    </p>
                                    <h4>📖Instructions</h4>
                                    <p style={{whiteSpace:"pre-wrap"}}>{recdetails.Instructions}
                                    </p>
                                    <h4>Comments</h4>
                                    <div className='comments'>
                                    
                                        <textarea placeholder='comment'value={text} onChange={savetext} rows='8' cols='100'></textarea>
                                        <button type='submit'onClick={handlepost}>Post</button>
                                        
                                        {comments.map((c, i) => (
                                         <p key={i}><strong>{c.User?.Email}:</strong> {c.comment}</p>
                                           ))}
                                    </div>


                                   

                                  </div>
                                   <div className='footer'>
            
          </div>

        </div>
    )
}
export default Recipepage1