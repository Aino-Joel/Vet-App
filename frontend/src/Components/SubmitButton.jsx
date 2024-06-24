
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Submitbutton() {
  return (
    <div className='button-container'>
    <Button variant="contained"
    sx={{
      backgroundColor: 'black',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      fontWeight: 'bold',
      marginTop: '10px',   
      textAlign:'center',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#0056b3',
       
      },
    }}>
      Submit
    </Button>
    </div>
  );
}

