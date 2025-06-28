import './User.css'

function User() {
    return(
        <div>
            <div className="navbar11">
                        
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
                                         <h2 className='sectiontitle'>User Management</h2>
                                        <div className='sect sec1'>
                                            <h3>Active Users</h3>
                                            <h1>11,890</h1>
                                        </div>
                                        <div className='sect sec2'>
                                            <h3>Suspended Users</h3>
                                            <h1>123</h1>
                                        </div>
                                        <div className='sect sec3'>
                                            <h3>New Users</h3>
                                            <h1>456</h1>
                                        </div>
                                        
                                        </div>
                                        
                                          <input className='search' type ='text' placeholder='🔍 Search for recipes,ingredients or cuisines..'/> 
                                          <div className='managesec'>
                                        <h3>All Users</h3>

                                        <table>
  <tr>
    <th>User</th>
    <th>Name</th>
    <th>Email</th>
    <th>Status</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>USR001</td>
    <td>John Doe</td>
    <td>john.doe@gmail.com</td>
    <td>Active</td>
    <td><button>Edit</button></td>
  </tr>
  <tr>
    <td>USR002 </td>
    <td>Bob Johnson</td>
    <td>bobjohn@gmail.com</td>
    <td>Suspended</td>
    <td><button>Edit</button></td>
  </tr>
  <tr>
    <td>USR003</td>
    <td>Carol White</td>
    <td>carolwhite@gmail.com</td>
    <td>Active</td>
    <td><button>Edit</button></td>
  </tr>
  <tr>
    <td>USR004</td>
    <td>David Bob</td>
    <td>davidBob@gmail.com</td>
    <td>Suspended</td>
    <td><button>Edit</button></td>
  </tr>
 
</table>
</div> 
                                        
                                        
                                        
                                        </div>
                                        
                                        </div>
                                        <div className='footer'>
                         
                        

          </div>

        </div>
    )
}
export default User