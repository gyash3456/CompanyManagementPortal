import React, { useEffect } from 'react';

import pic from './../assets/mlelogo.png'
import { useState } from 'react'
import axios from 'axios';
import './Forget.css';

function Forget() {
  const initialValues = { email: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]= useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const [msg,setMsg]=useState('')

 


  const handleSubmit= async(e)=>{
    console.log(typeof(formValues));
    e.preventDefault();

    // const apiUrl = "api/auth/forgot";
    // apiUrl  = `${apiUrl}?username=${(formValues)}`
    // const res = await axios.post(apiUrl);

    axios.post(`api/auth/forgot?username=${formValues}`)
    .then(function (response) {
        setMsg(response.data)

    })



  }

  // const validate=(value)=>{
  //   const errors={};
  //   if(!value.email){
  //     errors.email="Email is required";
  //   }
  // }

 
  return (
    <form  >
      
      <div className='dialoguebox-wrapper1'>

        <div className='dialoguebox'>
          <div className='logo'>
        <div className='logofor'>
            <img className='logoforget' src={pic} /></div></div>

          <div className='label'>
            
            <h4 className='dialoguebox-labelforget'>Forget Password?</h4>
          </div>



          <div className="input-icons">


            <i className=" align-middle fa fa-user icon fa-lg mt-7"></i>
            <input className="input-field" placeholder='Enter Email' type="email" name="email"value={formValues.email} onChange={(e)=> setFormValues(e.target.value)}></input>
            <p>{formErrors.email}</p>

            <br />

           

          </div>

          <div><button  className="btn btn-primary" onClick={handleSubmit}>Reset</button>
          <div>{msg}</div>
          </div>


        </div>




      </div>
    </form>
  )
}

export default Forget