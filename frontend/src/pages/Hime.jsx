import React from 'react'
import Blog from '../Components/Blog'
import Sidebar from '../Components/Sidebar'
import Posts from '../Components/Posts'


function Hime() {
  return (
   <>
   
    <Blog/>
    <div className="home">
    <Posts/>
    
    </div>
    </>
  )
}

export default Hime
