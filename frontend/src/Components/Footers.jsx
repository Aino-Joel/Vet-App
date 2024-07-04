import React from 'react'
import { Footer } from 'flowbite-react'
import { Link} from 'react-router-dom';
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsDribbble} from 'react-icons/bs'

function Footers() {
  return (
   <Footer container className='border border-t-8 border-teal-500'>
   <div className='w-full max-w-7xl mx-auto'>
    <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
      <div className='mt-5'>
      <Link to="/home" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
  <span className='px-2 py-1 bg-gradient-to-r from-green-800 via-green-500 to-green-300 rounded-lg text-white'>
        FarmVet
        </span>  
        Connect
    </Link>
      </div>
<div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
  <div>
  <Footer.Title title='About'/>
  <Footer.LinkGroup col>
    <Footer.Link href = 'https://www.youtube.com/' target='blank' rel='noopener noreferrer'>
        100 JS projects
    </Footer.Link>
  <Footer.Link href = '/about' target='blank' rel='noopener noreferrer'>
      GROUP.A Project
    </Footer.Link>
  </Footer.LinkGroup>
  </div>
  <div>
  <Footer.Title title='Follow Us'/>
  <Footer.LinkGroup col>
    <Footer.Link href = 'https://www.github.com/' target='blank' rel='noopener noreferrer'>
        Github
    </Footer.Link>
  <Footer.Link href = '/#' target='blank'>
     Discord
    </Footer.Link>
  </Footer.LinkGroup>
  </div>
  <div>
  <Footer.Title title='Legal'/>
  <Footer.LinkGroup col>
    <Footer.Link href = ' #'>
        Privacy policy
    </Footer.Link>
  <Footer.Link href = '#' >
      Terms &amp; Conditions
    </Footer.Link>
  </Footer.LinkGroup>
  </div>

</div>

    </div>
    <Footer.Divider/>
    <div className='w-full sm:flex sm:items-center sm:justify-between'>
      <Footer.Copyright href='#' by="Group Project" year={new Date().getFullYear()}/>
    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
      <Footer.Icon href='#' icon={BsFacebook}/>
      <Footer.Icon href='#' icon={BsInstagram}/>
      <Footer.Icon href='#' icon={BsTwitter}/>
      <Footer.Icon href='#' icon={BsGithub}/>
      <Footer.Icon href='#' icon={BsDribbble}/>
      
    </div>
    
    </div>
   </div>
   
   </Footer>
 
 
 
   );
}

export default Footers
