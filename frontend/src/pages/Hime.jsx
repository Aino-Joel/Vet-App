import React from 'react'
import Blog from '../components/Blog'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'


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
