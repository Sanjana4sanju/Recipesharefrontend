import { useEffect,useState } from 'react'
import './Category.css'
import axios from 'axios'

function Category() {
    const[category,setcategory] = useState([])
    const[categorycount,setcategorycount] = useState()
    const[countarray,setcountarray] = useState([])
    const[popcategory,setpopcataegory] = useState()
    const[searchcat,setsearchcat] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/getcategory`).then((res) => {
            setcategory(res.data.categories)
            setcategorycount(res.data.count)
            setcountarray(res.data.countarray)
            let biggestindex = res.data.countarray.indexOf(Math.max(...res.data.countarray))
            setpopcataegory(res.data.categories[biggestindex])
        })

    },[])

    useEffect(() => {
      axios.get('http://localhost:3000/getcategory?search='+searchcat).then((res) => {
        setsearchcat(res.data.Category)
      })
    },[searchcat])

    const searchcate = (e) => {
    setsearchcat(e.target.value)
    }

   
    return(
        <div>
            <div className="navbar11">
        <div className="logo">
          <h3>Admin Dashboard</h3>
        </div>

        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Recipes</li>
          <li>Settings</li>
        </ul>
        <div className="login">
          <button type="submit">Logout</button>
        </div>
      </div>
      <div className="mainsection">
        <div className="navigation">
          <h4>Navigation</h4>
          <h6> 📈Dashboard</h6>
          <h6> 🧑‍🤝‍🧑User management</h6>
          <h6> 🍴Recipe management</h6>
          <h6> 🗄️Category management</h6>
          <h6> 🧻Moderation queue</h6>
        </div>
        <div className="contentwrapper">
          <div className="usersection">
            <h2 className="sectiontitle">Category Management</h2>
            <div className="sect sec1">
              <h3>  <table>Total Categories </table></h3>
              <h1>{categorycount}</h1>
            </div>
            <div className="sect sec2">
              <h5>Most Popular Category</h5>
              <h3>{popcategory}</h3>
            
            </div>
            <div className="sect sec3">
              <h5>Recently Added</h5>
              <h3>Desserts</h3>
            </div>
          </div>
          <h3>Add New Category</h3>
          <input
            className="searchbox" 
            type="text"
            placeholder="🔍 e.g.Soups & stew"
          /><button type='submit'>Add Category</button><br></br><br></br>

          <div className="managesec">
            <h3>Existing Categories</h3>

             <input
            className="searchbox" onChange={searchcate} value={searchcat}
            type="text"
            placeholder="🔍 e.g.Soups & stew"
          /><button type='submit'>search</button><br></br>

            <table>
              <tr>
                <th>Category Name</th>
                <th>Number of recipes</th>
                <th>Actions</th>
              </tr>
              {category.map((categories,idx) => {
                return(
                <tr>
                    <td>{categories}</td>
                    <td>{countarray[idx]}</td>
                    <td></td>
                </tr>
                
              )})}

              </table>
              </div>


        </div>
        </div>
         <div className="footer"></div>
        </div>
    )
}
export default Category