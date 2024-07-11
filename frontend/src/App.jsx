import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './Components/Header'
import Footers from './Components/Footers'
//import Farmvisit from './pages/Farmvisit'
import Urgentcare from'./pages/Urgentcare'
import Vetclinic from './pages/Vetclinic'
import Videovisit from './pages/Videovisit'
import Appointment from './pages/Appointment'
import Createpost from './pages/Createpost'
import Blog from './Components/Blog'
import Posts from './Components/Posts'
import Sidebar  from './Components/Sidebar'
import Hime from './pages/Hime'
import Post from './Components/Post'
import Single from './pages/Single'
//import Singlepost from './Components/Single'
import { useAuthContext } from './hooks/useAuthContext';
import ChatPage from './pages/chatPage'
import Rating from './pages/Rating'
import Doctor from './pages/Doctor'
import './Docprofile.css'
import './App.css'
import Booking from './pages/Booking'




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
  <Route path="/blog" element = {<Blog/>}/>
  <Route path="/posts" element = {<Posts/>}/>
  <Route path="/sidebar" element = {<Sidebar/>}/>
   <Route path="/hime" element = {<Hime/>}/>
   <Route path="/post" element = {<Post/>}/>
   <Route path="/single" element = {<Single/>}/>
   <Route path="/singlepost" element = {<Singlepost/>}/>
  <Route path="/rating" element= {<Rating/>}/>
  <Route path="/doctor" element= {<Doctor/>}/>
  <Route path="/booking" element= {<Booking/>}/>
  
  
  
  
  
  
  
  
  

</Routes>
<Footers/>
</BrowserRouter>
  )
}


   export default App
