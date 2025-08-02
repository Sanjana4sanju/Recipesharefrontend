
import { useEffect, useState } from "react";
import axios from "axios";
import "./User.css";

function User() {
  const[usercount,setusercount] = useState(0)
  const [getusers, setgetusers] = useState([]);
  const[search,setsearch] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3000/usersearch?search="+ search).then((res) => {
      setgetusers(res.data)
    })

  },[search])
  useEffect(() => {
    axios.get("http://localhost:3000/getusers").then((res) => {
      console.log("API Response:", res.data);
      console.log("User count:", res.data.usercount);
      setgetusers(res.data.users);
      setusercount(res.data.usercount)
    });
  }, []);

  const searchtext = (e) => {
    setsearch(e.target.value)
  }

  const handleuser= ((id) => {
    axios.put('http://localhost:3000/userapprove/' + id).then((res) => {
   let index =   getusers.findIndex((user) => {return user._id == id})
      getusers[index].Active = true
      setgetusers([...getusers])
    })
  })
  return (
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
            <h2 className="sectiontitle">User Management</h2>
            <div className="sect sec1">
              <h3>Active Users</h3>
              <h1>{usercount}</h1>
            </div>
            <div className="sect sec2">
              <h3>Suspended Users</h3>
              <h1>123</h1>
            </div>
            <div className="sect sec3">
              <h3>New Users</h3>
              <h1>456</h1>
            </div>
          </div>

          <input
            className="searchbox"
            type="text"
            placeholder="🔍 Search for recipes,ingredients or cuisines.."
          onChange={searchtext} value={search}/><button type='submit'>Search</button><br></br>
          <div className="managesec">
            <h3>All Users</h3>

            <table>
              <tr>
                <th>User</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              {getusers?getusers.map((users, i) => {
                return(
                <tr key={i}>
                  <td>USR001</td>

                  <td>Alice</td>
                  <td>{users.Email}</td>
                  <td>{users.Active?<p>Active</p>:<p>Notactive</p>}</td>
                  <td>
                    <button>Edit</button>
                   {!users.Active?<button type='submit' onClick={(() => handleuser(users._id))}>Active</button>:<p>Useractive</p>}
                  </td>
                </tr>
              )}):(<p>No users found</p>)}

              <tr>
                <td>USR002 </td>
                <td>Bob Johnson</td>
                <td>bobjohn@gmail.com</td>
                <td>Suspended</td>
                <td>
                  <button>Edit</button>
                   
                </td>
              </tr>
              <tr>
                <td>USR003</td>
                <td>Carol White</td>
                <td>carolwhite@gmail.com</td>
                <td>Active</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
              <tr>
                <td>USR004</td>
                <td>David Bob</td>
                <td>davidBob@gmail.com</td>
                <td>Suspended</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default User;
