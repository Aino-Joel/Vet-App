// import React from 'react';

import * as React from 'react';
import Rating from '@mui/material/Rating';



function Profile(){
    const header = {
        photo: 'https://via.placeholder.com/150',
        fullName: 'Jauhara Kiti',
        specification: 'General Veterinary'
    }
return( 
    <Profile />
)
    
    
}

export default function RatingSize() {
  return (
    <div className="header-design ">
         <h1>Rating</h1>
        <hr></hr>
        <img src='https://via.placeholder.com/150'></img>
        <h3>Dr. Jauharah Kiti</h3>
        <h5>General Veterinary</h5>
        

   
      
      <Rating name="size-large" defaultValue={2} size="large"  />
  

    <p>What did the doctor help you with?</p>
    

    </div>
  );
}


