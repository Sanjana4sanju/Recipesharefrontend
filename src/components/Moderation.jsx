import { useEffect, useState } from 'react';
import axios from 'axios';
import './Moderation.css';

function Moderation() {



    const[reports,setreports] = useState([]);
    const[reportcount,setreportcount] = useState();
  

    useEffect(() => {
      axios.get(`http://localhost:3000/getreports`).then((res) => {
         setreports(res.data)
         
      })
    },[])

    useEffect(() => {
      axios.get('http://localhost:3000/getreportscount').then((res) => {
       setreportcount(res.data)
      })
    },[])

    const delrecipe = (id) => {
        axios.delete('http://localhost:3000/deletereports/' + id).then((res) => {
            alert("deleted recipe")
        })
    }
    const delreport = (id) => {
        axios.delete('http://localhost:3000/deleterecipe/' + id).then(() => {
            alert("deleted report")
        })
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
            <h2 className="sectiontitle">Moderation Queue</h2>
            <div className="sect sec1">
              <h3>  <table>Total flagged items </table></h3>
              <h1>{reportcount}</h1>
            </div>
            <div className="sect sec2">
              <h3>Flags today</h3>
              <h1>12</h1>
            </div>
            <div className="sect sec3">
              <h3>Resolved flags(last 7 days)</h3>
              <h1>45</h1>
            </div>
          </div>
          <input
            className="searchbox"
            type="text"
            placeholder="🔍 Search for recipes,ingredients or cuisines.."
          /><button type='submit'>Search</button><br></br><br></br>
        
        <div className="managesec">
            <h3>Flagged Items</h3>

            <table>
              <tr>
                <th>Item</th>
                <th>Message</th>
                <th>Reported by</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
              {reports.map((report) => {
                return(
                <tr>
                <td>{report.Recipe.Recipetitle}</td>
                <td>{report.Message}</td>
                <td>{report.User.Email}</td>
                <td>{report.createdAt}</td>
                <td><button type='submit' onClick={(() => {delrecipe(report._id)})}>DeleteRecipe</button><button type='submit' onClick={(() => {delreport(report._id)})}>Deletereport</button></td>

                </tr>
              )})}
              
                <tr>
                <td>"This recipe is terrible"</td>
                <td>Comment</td>
                <td>Offensive language</td>
                <td></td>
                <td></td>
        
                
                </tr>
                <tr>
                <td>"Chefmaster"</td>
                <td>Userprofile</td>
                <td>Impersonation</td>
                <td></td>

                <td></td>
                </tr>
                <tr>
                <td>"Quick 5-minute Breakfast"</td>
                <td>Recipe</td>
                <td>Misleading title</td>
                <td></td>
                <td></td>
        
                <td></td>
                </tr>
              </table>

        </div>
        </div>
        </div>
        <div className="footer"></div>
        
        </div>
    )
}

export default Moderation;