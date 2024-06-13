
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput, } from 'flowbite-react'

function Signin() {
 
  return (
    <div className='min-h-screen mt-20'>
   <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
    <div className='flex-1'>
  
    <p className='text-3xl font-extrabold mt-5 text-center bg-gradient-to-r from-green-800 via-green-400 to-blue-600 text-transparent bg-clip-text shadow-lg py-2 rounded-lg'>
        SIGN IN
      </p>
    <div className='flex space-x-4 mt-5'>
        <Button>As a Farmer</Button>
        <Button>As a Veterinary Doctor</Button>
      </div>
    
    </div>
    <div className='flex-1'>
      <form className='flex flex-col gap-4' >
        <div >
           <Label value='Your Email'/>
            <TextInput type='email ' placeholder='name@company.com' id='email'/>   
        </div>
        <div >
           <Label value='Your Password'/>
            <TextInput type='password ' placeholder='Password' id='password'/>   
        </div>
        <Button className='bg-gradient-to-r from-green-800 via-green-500 to-green-300'  type='submit' >
Sign in
        </Button>
       
      </form>
      <div className='flex gap-2 text-sm mt-5'>
        <span> Don't have an account?</span>
        <Link to='/signup' className='text-blue-500' >
          Sign Up
        </Link>
      </div>
   
    </div>
    </div>  
    </div>
  )
}

export default Signin
