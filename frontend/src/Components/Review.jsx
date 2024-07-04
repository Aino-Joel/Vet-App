import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    
      <div className='review'>
        
        <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={4}
          placeholder="Leave a review"
        />
      </div>
      
      
    
  );
}
