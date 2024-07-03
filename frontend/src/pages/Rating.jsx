import React from 'react'
import Docprofile from '../components/Docprofile'
import CheckboxList from '../components/Feedback'
import Review from '../components/Review'
import DoctorSelection from '../components/Choosedoctor/Selectdoc'
import Submitbutton from '../components/SubmitButton'

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
