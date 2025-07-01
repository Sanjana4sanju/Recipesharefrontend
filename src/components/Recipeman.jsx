import { useEffect, useState } from 'react'
import axios from 'axios'
import './Recipeman.css'

function Recipeman() {
    const[recipecount,setrecipecount] = useState([])
    const[search,setsearch] = useState()
    useEffect(() => {
    axios.get('http://localhost:3000/getrecipecount?search='+search).then((res) => {
      setrecipecount(res.data)
    })
    },[search])
    useEffect(() => {
       axios.get('http://localhost:3000/getrecipecount').then((res) => {
      setrecipecount(res.data)
    })

    },[])
    const searchtext = (e) => {
       setsearch(e.target.value)
    }
    return(
        <div>
            <div className="navbar12">
                        
                                    <div className='logo'>
                                        <h3>Admin Dashboard</h3>
                                        
                                    </div>
                                    
                                        <ul>
                                            
                                            <li>Dashboard</li>
                                            <li>Users</li>
                                            <li>Recipes</li>
                                            <li>Settings</li>
                                        </ul>
                                        <div className='login'>
                                            <button type='submit'>Logout</button>
                                        
                                        </div>
                                  </div>
                                  <div className='mainsection'>
                                
                                  <div className='navigation'>
                                    <h4>Navigation</h4>
                                    <h6> 📈Dashboard</h6>
                                    <h6> 🧑‍🤝‍🧑User management</h6>
                                    <h6> 🍴Recipe management</h6>
                                    <h6> 🗄️Category management</h6>
                                    <h6> 🧻Moderation queue</h6>
                                    </div>
                                    <div className='contentwrapper'>
                                    <div className='usersection'>
                                         <h2>Recipe management</h2>
                                        <div className='sec sec1'>
                                            <h3>Total Recipes</h3>
                                            <h1>5,678</h1>
                                        </div>
                                        <div className='sec sec2'>
                                            <h3>Published Recipes</h3>
                                            <h1>5,500</h1>
                                        </div>
                                        <div className='sec sec3'>
                                            <h3>Drafts</h3>
                                            <h1>50</h1>
                                        </div>
                                        <div className='sec sec4'>
                                            <h3>Pending for Review</h3>
                                            <h1>128</h1>
                                        </div>
                                        

                                    </div>
                                    <input
            className="search"
            type="text"
            placeholder="🔍 Search for recipes,ingredients or cuisines.."
          onChange={searchtext} value={search}/>
          <div className="managesec">
            <h3>All Recipes</h3>

            <table>
              <tr>
                <th>Recipetitle</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              {recipecount.map((Recipe,i) => {
                return(
                 <tr key={i}>
                <td>{Recipe.Recipetitle}</td>
                <td>Bob Johnson</td>
                <td>Main course</td>
                <td>Active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>

              )})}
             
              <tr>
                <td>Classic Tiramisu</td>
                <td>Carol White</td>
                <td>Dessert</td>
                <td>Active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              <tr>
                <td>Vegan lentil soup</td>
                <td>David Bob</td>
                <td>Soup</td>
                <td>Pending</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              <tr>
                <td>Garlic parmisan chicken</td>
                <td>David Bob</td>
                <td>Main course</td>
                <td>Active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              </table>
                                    </div>
                                    </div>

        </div>
        </div>
    )
}
export default Recipeman