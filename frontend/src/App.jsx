import Docprofile from './Components/Docprofile'
import CheckboxList from './Components/Feedback';
import Submitbutton from './Components/SubmitButton';
import Review from './Components/Review';

import DoctorSelection from './Components/Choosedoctor/Selectdoc';

import './Docprofile.css'

import './App.css'

function App(){
  
     
  return (
    <div>
     
    
       <Docprofile />
      <CheckboxList />
      <Review />
     <Submitbutton /> 

  <DoctorSelection />  


     </div>
  )
}


   export default App
