import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Footers from './components/Footers'
import Farmvisit from './pages/Farmvisit'
import Urgentcare from'./pages/Urgentcare'
import Vetclinic from './pages/Vetclinic'
import Videovisit from './pages/Videovisit'
import Appointment from './pages/Appointment'
import { useAuthContext } from './hooks/useAuthContext';
<<<<<<< HEAD
import { Toaster } from 'react-hot-toast'
=======
import ChatPage from './pages/chatPage'
>>>>>>> b786cd804407dbe05a93f7702082d87fc4efe329

function App() {

  const {user} = useAuthContext()

  return (
<BrowserRouter>
<<<<<<< HEAD
<Toaster
  position="top-center"
  reverseOrder={false}
/>
=======

>>>>>>> b786cd804407dbe05a93f7702082d87fc4efe329
<Header/>

<Routes>
  <Route path ="/" element = {<Home/>}/>
  <Route path ="/about" element = {<About/>}/>
  <Route path ="/projects" element = {<Projects/>}/>
  <Route path="/signin" element={!user ? <Signin /> : <Navigate to="/"/>} />
  <Route path ="/signup" element = {<Signup/>}/>
  <Route path ="/farmvisit" element = {<Farmvisit/>}/>
  <Route path ="/urgentcare" element = {<Urgentcare/>}/>
  <Route path ="/vetclinic" element = {<Vetclinic/>}/>
  <Route path ="/videovisit" element = {<Videovisit/>}/>
  <Route path="/appointment" element = {<Appointment/>}/>
  <Route path="/chats" element = {<ChatPage/>}/>
  
  
  
  
  
  
  
</Routes>
<Footers/>
</BrowserRouter>
  )
}

export default App
