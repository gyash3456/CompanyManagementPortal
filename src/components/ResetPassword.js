import React, { useEffect } from 'react'
import './login.css'
import pic from './../assets/mlelogo.png'
import { useState } from 'react'

function ResetPassword() {
  const initialValues = { password: "", confirmPassword: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]= useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  useEffect(()=>{
    // console.log(formErrors)
    if (Object.keys(formErrors).length ===0 && isSubmit) {
      // console.log(formErrors)
     
    }
  },[formErrors])


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormValues({...formValues,[name]:value});
    // setFormValues({...formValues,name:value});
    // console.log(formValues);
    // console.log(e.target);
    
  }

  const handleSubmit=(e)=>{
    console.log("in handleSubmit")
    e.preventDefault();
    setFormErrors(validate(formValues));
    // console.log(formErrors);
    setIsSubmit(true); 
  }
  

  const validate=(values)=>{
    const errors={};
    const regexpassword=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    if(!values.password){
      errors.password="Password is required";
    }

    else if(!(regexpassword.test(values.password))){
      errors.password="Password should contain special characters";
     }
    else if(values.password.length<4){
     errors.password="Password is too short";
    }
    else if(values.password.length>10){
      errors.password="Password cannot exceed more than 10 characters";
     }
    
     if (values.password != values.confirmPassword) {
      errors.confirmPassword="Password is not matched";
     }
     

    return errors;
  }
  return (
    <form onSubmit={handleSubmit} >
      
      <div className='dialoguebox-wrapper'>

        <div className='dialoguebox'>

          <div className='label'>
            <img src={pic} />
            <h4 className='dialoguebox-label'>Employee Portal Login</h4>
          </div>



          <div className="input-icons">


            <i className=" align-middle fa fa-user icon fa-lg mt-7"></i>
            <input className="input-field" placeholder='Enter new password' type="password" name="password"value={formValues.password} onChange={handleChange}></input>
            <p>{formErrors.password}</p>

            <br />

            <i className="fa fa-lock icon fa-lg"></i>
            <input className='input-field' type="password"placeholder='Confirm new password'name="confirmPassword"value={formValues.confirmpassword} onChange={handleChange}></input>
            <p>{formErrors.confirmPassword}</p>

          </div>

          <div><button  className="btn btn-primary">Login</button></div>


        </div>




      </div>
    </form>
  )
}

export default ResetPassword
