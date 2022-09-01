import React, { useEffect } from 'react'
import './login.css'
import pic from './../assets/mlelogo.png'
import { useState } from 'react'
import axios from 'axios';

function Forget() {
  const initialValues = { password: "", confirmPassword: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]= useState({});
  const [isSubmit,setIsSubmit]=useState(false);


  const handleSubmit= async()=>{
    console.log(formValues);debugger;
    const apiUrl = "api/auth/forgot-password";
    apiUrl  = `${apiUrl}?formValues=${(formValues)}`
    const res = await axios.post(apiUrl);

  }

 
  return (
    <form onSubmit={handleSubmit} >
      
      <div className='dialoguebox-wrapper'>

        <div className='dialoguebox'>
        <div className='logofor'>
            <img className='logoforget' src={pic} /></div>

          <div className='label'>
            
            <h4 className='dialoguebox-labelforget'>Forget Password?</h4>
          </div>



          <div className="input-icons">


            <i className=" align-middle fa fa-user icon fa-lg mt-7"></i>
            <input className="input-field" placeholder='Enter Email' type="email" name="email"value={formValues.email} onChange={(e)=> setFormValues(e.target.value)}></input>
            <p>{formErrors.email}</p>

            <br />

           

          </div>

          <div><button  className="btn btn-primary" onClick={handleSubmit}>Reset</button></div>


        </div>




      </div>
    </form>
  )
}

export default Forget