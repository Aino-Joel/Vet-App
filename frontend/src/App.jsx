import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Footers from './components/Footers'
import ApplyDoctor from './pages/ApplyDoctor'
import Urgentcare from'./pages/Urgentcare'
import Vetclinic from './pages/Vetclinic'
import Videovisit from './pages/videovisit'
import Appointment from './pages/Appointment'
import Createpost from './pages/Createpost'
import Singlepost from './components/Singlepost'
import { useAuthContext } from './hooks/useAuthContext';
import ChatPage from './pages/chatPage'
import Rating from './pages/Rating'
import Doctor from './pages/Doctor'
import './Docprofile.css'
import './App.css'
import Booking from './pages/Booking'
import Chatpage from './pages/chatPage'
import Blogs from './pages/Blogs'
import Blogpost from './pages/Blogpost'

function App() {

  const {user} = useAuthContext()

  return (
<BrowserRouter>

<Header/>

<Routes>
  <Route path ="/" element = {<Home/>}/>
  <Route path ="/about" element = {<About/>}/>
  <Route path ="/projects" element = {<Projects/>}/>
  <Route path="/signin" element={!user ? <Signin /> : <Navigate to="/"/>} />
  <Route path ="/signup" element = {<Signup/>}/>
  <Route path ="/apply" element = {<ApplyDoctor/>}/>
  <Route path ="/urgentcare" element = {<Urgentcare/>}/>
  <Route path ="/vetclinic" element = {<Vetclinic/>}/>
  <Route path ="/videovisit" element = {<Videovisit/>}/>
  <Route path="/appointment" element = {<Appointment/>}/>
    
  <Route path ="/Videovisit" element = {<Videovisit/>}/>
 
  <Route path="/chats" element = {<ChatPage/>}/>
  <Route path="/createpost" element = {<Createpost/>}/>
  <Route path="/rating" element= {<Rating/>}/>
  <Route path="/doctor" element= {<Doctor/>}/>
  <Route path="/booking" element= {<Booking/>}/>
  <Route path="/chatpage" element={<ChatPage/>}/>
  <Route path="/blogs" element={<Blogs/>}/>
  <Route path="/blogpost" element={<Blogpost/>} />
  
  
  
  
  
  
  

</Routes>
<Footers/>
</BrowserRouter>
  )
}


   export default App
