import React from 'react'
import Docprofile from '../Components/Docprofile'
import CheckboxList from '../Components/Feedback'
import Review from '../Components/Review'
import DoctorSelection from '../Components/Choosedoctor/Selectdoc'
import Submitbutton from '../Components/SubmitButton'

function Rating() {
  return (
    <div>
       <Docprofile />
      <CheckboxList />
      <Review />
     <Submitbutton /> 

    </div>
  )
}

export default Rating
