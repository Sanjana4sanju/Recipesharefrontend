
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Admin.css'
import { useParams } from 'react-router-dom'
import {PieChart,Pie,Cell,Legend,Tooltip} from 'recharts'

function Admin() {

  const {id} = useParams()

  const[usercount,setusercount] = useState()
  const[recipecount,setrecipecount] = useState()
  
  const[recipeshow,setrecipeshow] = useState([])
  const[editIndex,seteditindex] = useState(null)
  const[editedrecipe,seteditedrecipe] = useState([])
  const[approvedcount,setapprovedcount] = useState()
  const[pendingcount,setpendingcount] = useState()
  const[piechart,setpiechart] = useState()

  const handleEdit = (recipe, index) => {
  seteditindex(index);
  seteditedrecipe({ ...recipe }); 
};

const handleChange = (e) => {

  if(e.target.name == "Status")  {
      if(e.target.value == "Approved") {
        seteditedrecipe({...editedrecipe,Approved:true})
      } else {
        seteditedrecipe({...editedrecipe,Approved:false})
      }
  } else{
    seteditedrecipe({ ...editedrecipe, [e.target.name]: e.target.value });
  }
  
};

const handleUpdate = async () => {
  try {
     await axios.put(`http://localhost:3000/updaterecipe/${editedrecipe._id}`, editedrecipe);
    const updatedList = [...recipeshow]
    updatedList[editIndex] = {...editedrecipe}
    setrecipeshow(updatedList)
    seteditindex(null)
    alert("Recipe updated!");
    seteditindex(null);
    
  } catch (error) {
    console.error("Update failed", error);
  }
};
  useEffect(() => {
    axios.get('http://localhost:3000/getdashboardcount').then((res) => {
       setusercount(res.data.usercount)
       setrecipecount(res.data.recipecount)
       setrecipeshow(res.data.recipeshow)
       setapprovedcount(res.data.approvedcount)
       setpendingcount(res.data.pendingcount)
    })

  },[])

  useEffect(() => {
    axios.get('http://localhost:3000/piechartdata').then((res) => {
      setpiechart(res.data)
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
                                            <h1>{approvedcount}</h1>
                                        </div>
                                        <div className='sec sec4'>
                                            <h3>Pending for Review</h3>
                                            <h1>{pendingcount}</h1>
                                        </div>
                                        

                                    </div>
                                   
                                    
                                     <div className='user'>
                                        <div className='growth'>
                                        <h3>Recipe Distribution</h3>
                                        <PieChart width={200} height={160} ><Pie data={piechart} dataKey="total" nameKey="_id"  cx='50%' cy='50%' outerRadius={60} label>
                                        {piechart && piechart.map((e,i) => {
                                           return <Cell fill={['red','blue','green'][i%3]}></Cell>
                                          })}</Pie><Legend></Legend><Tooltip></Tooltip></PieChart>
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
  {recipeshow.map((recipe,i) => {
    return(
      <tr key={i}>
    <td>
      {editIndex === i ? (
        <input name="Recipetitle" value={editedrecipe.Recipetitle} onChange={handleChange}/>
      ):(
      recipe.Recipetitle
      )}</td>
    <td>
      {editIndex === i ? (
        <input
          name="Author"
          value={editedrecipe.Author || ''}
          onChange={handleChange}
        />
      ):(recipe.Author || 'Alice Smith'
      )}</td>
    <td>
      {editIndex === i ? (
        <select name="Status" value={editedrecipe.Status || 'Pending'} onChange={handleChange}><option>Approved</option>
        <option>Pending</option></select>
      ):( recipe.Status || 'Approved' )}</td>
    <td>{editIndex === i ? (
        <button onClick={(() => {handleUpdate(recipe)})}>Save</button>
      ) : (
        <button onClick={() => handleEdit(recipe, i)}>Edit</button>
      )}
    </td>
    
    
  </tr>

    )
  })}
  
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