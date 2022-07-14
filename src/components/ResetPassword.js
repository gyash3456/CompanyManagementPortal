import React, { useEffect } from 'react'
import './login.css'
import pic from './../assets/mlelogo.png'
import { useState } from 'react'

function ResetPassword() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]= useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  useEffect(()=>{
    console.log(formErrors)
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
    const regexusername=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
      errors.username="Username is required";
    }
    else if(!regexusername.test(values.username)){
      errors.username="This is not a valid email"; 
    }
    if(!values.password){
      errors.password="Password is required";
    }
    else if(!(regexpassword.test(values.password))){
      errors.password="Password should contain special characters"
     }
    else if(values.password.length<4){
     errors.password="Password is too short"
    }
    else if(values.password.length>10){
      errors.password="Password cannot exceed more than 10 characters"
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
            <input className="input-field" placeholder='Enter new password' type="text" name="username"value={formValues.username} onChange={handleChange}></input>
            <p>{formErrors.username}</p>

            <br />

            <i className="fa fa-lock icon fa-lg"></i>
            <input className='input-field' type="password"placeholder='Confirm new password'name="password"value={formValues.password} onChange={handleChange}></input>
            <p>{formErrors.password}</p>

          </div>

          <div className='forget'><u>Forgot Password?</u></div>

          <div><button  className="btn btn-primary">Login</button></div>


        </div>




      </div>
    </form>
  )
}

export default ResetPassword
