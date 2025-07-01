
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Admin.css'

function Admin() {

  const[usercount,setusercount] = useState()
  const[recipecount,setrecipecount] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/getdashboardcount').then((res) => {
       setusercount(res.data.usercount)
       setrecipecount(res.data.recipecount)
    })

  },[])
    return(
        <div>

            <div className="navbar10">
                        
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
                                         <h2>Welcome,Admin!</h2>
                                        <div className='sec sec1'>
                                            <h3>Total Users</h3>
                                            <h1>{usercount}</h1>
                                        </div>
                                        <div className='sec sec2'>
                                            <h3>Total Recipes</h3>
                                            <h1>{recipecount}</h1>
                                        </div>
                                        <div className='sec sec3'>
                                            <h3>Recipes approved</h3>
                                            <h1>5,500</h1>
                                        </div>
                                        <div className='sec sec4'>
                                            <h3>Pending for Review</h3>
                                            <h1>128</h1>
                                        </div>
                                        

                                    </div>
                                   
                                    
                                     <div className='user'>
                                        <div className='growth'>
                                        <h3>User growth Over time</h3>
                                        </div>
                                        <div className='activity'>
                                          <h3 id='action'>Recent Activity</h3>  
                                        </div>
                                    </div>
                                    <p>Quick Actions</p>
                                    <div className='manage'>
                                    
                                    <button type='submit'id='green'>🍴Manage Recipes</button>
                                    <button type='submit'id='violet'>🧑‍🤝‍🧑Manage users</button>
                                    <button type='submit'id='red'>🏳️Review Flagged Content</button>
                                    <div className='managesec'>
                                        <h3>Recent Recipes</h3>

                                        <table>
  <tr>
    <th>Recipe Name</th>
    <th>Author</th>
    <th>Status</th>
    <th>Access</th>
  </tr>
  <tr>
    <td>Classic Lassagna</td>
    <td>Alice Smith</td>
    <td>Approved</td>
    <td><button>Edit</button></td>
  </tr>
  <tr>
    <td>Chicken Alfredo pizza </td>
    <td>Bob Johnson</td>
    <td>Pending</td>
    <td><button>Edit</button></td>
  </tr>
  <tr>
    <td>Healthy Quinoa Salad</td>
    <td>Carol White</td>
    <td>Approved</td>
    <td><button>Edit</button></td>
  </tr>
  <tr>
    <td>Chocolate Chip Cookies</td>
    <td>David Bob</td>
    <td>Pending</td>
    <td><button>Edit</button></td>
  </tr>
 
</table>
                                    </div>
                                    </div>
                                    </div>
                                
                                    </div>
                                    <div className='footer'>
                         
                        

          </div>

                                    
                                    
        </div>
    )
}
export default Admin