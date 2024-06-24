import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABout</span>
        <img className="headerimg"src='https://flowbite.com/docs/images/carousel/carousel-1.svg'/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Categories</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Life</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Categories</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Life</li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar
