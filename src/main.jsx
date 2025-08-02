import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import Recipemain from './components/Recipemain.jsx';
import Recipehome from './components/Recipehome.jsx';
import Recipelogin from './components/Recipelogin.jsx';
import Recipeaboutus from './components/Recipeaboutus.jsx';
import Recipecontact from './components/Recipecontact.jsx';
import Recipe from './components/Recipe.jsx';
import Recipepage1 from './components/Recipepage1.jsx';
import Recipepage2 from './components/Recipepage2.jsx';
import Recipepage3 from './components/Recipepage3.jsx';
import Profile from './components/Profile.jsx';
import Admin from './components/Admin.jsx'
import User from './components/User.jsx'
import Recipeman from './components/Recipeman.jsx'
import Moderation from './components/Moderation.jsx'
import Category from './components/Category.jsx'
import Password from './components/Password.jsx';
import Reset from './components/Reset.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='Recipemain' element={<Recipemain/>}/>
      <Route path='Recipehome' element={<Recipehome/>}/>
      <Route path='Recipelogin' element={<Recipelogin/>}/>
      <Route path='Recipeaboutus' element={<Recipeaboutus/>}/>
      <Route path='Recipecontact' element={<Recipecontact/>}/>
      <Route path='Recipe' element={<Recipe/>}/>
      <Route path='Recipepage/:id' element={<Recipepage1/>}/>
      <Route path='Recipepage2' element={<Recipepage2/>}/>
      <Route path='Recipepage3' element={<Recipepage3/>}/>
      <Route path='Profile' element={<Profile/>}/>
      <Route path='Admin' element={<Admin/>}/>
      <Route path='User' element={<User/>}/>
      <Route path='Recipeman' element={<Recipeman/>}/>
      <Route path='Moderation' element={<Moderation/>}/>
      <Route path='Category' element={<Category/>}/>
      <Route path='Password' element={<Password/>}/>
      <Route path='Reset' element={<Reset/>}/>
    </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
