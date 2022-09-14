import React, { useEffect } from 'react'
import './login.css'
import axios from 'axios';
import pic from './../assets/mlelogo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const initialValues = { password: "", confirmPassword: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors]= useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const [token, setToken]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');
  // const [msg,setMsg]=useState('');
  const error = '';
  const navigate= useNavigate();

  useEffect(()=>{
    const url=window.location.href.split("/");;
    setToken(url[url.length - 1])
    
    if (Object.keys(formErrors).length ===0 && isSubmit) {
      // console.log(formErrors)
     
    }
  },[formErrors])


  // const handleChange=()=>{
    //console.log(password);
    // setFormValues({...formValues,name:value});
    // console.log(formValues);
    // console.log(e.target);
    
  // }

  const handleSubmit= async()=>{
    // console.log(typeof(token));
    // console.log(password);

    axios.post(`/api/auth/reset-password?token=${token}&password=${password}`).then((response)=>{

      alert(response.data)
    console.log("in handleSubmit")

    // console.log(formErrors);
    setIsSubmit(true); 
    navigate('/');

    }).catch((err)=>{
        console.log(err)
    })
    

  }
  

  const validate=(e)=>{
    e.preventDefault();
    const regexpassword=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!password){
      error= "Password is required";
    }

    else if(!(regexpassword.test(password))){
      error= "Password should contain special characters";
     }
    else if(password.length<4){
     error= "Password is too short";
    }
    else if(password.length>10){
      error= "Password cannot exceed more than 10 characters";
     }
    
    else if (password != confirmPassword) {
      error= "Password is not matched";
     }
    console.log(error)
    if(!error){
      handleSubmit();
    }
    setFormErrors(error);

  }
  return (
    <form onSubmit={validate} >
      
      <div className='dialoguebox-wrapper'>

        <div className='dialoguebox'>

          <div className='label'>
            <img src={pic} />
            <h4 className='dialoguebox-label'>Employee Portal Login</h4>
          </div>



          <div className="input-icons">


          <i className="fa fa-lock icon fa-lg"></i>
            <input className="input-field" placeholder='Enter new password' type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />

            <br />

            <i className="fa fa-lock icon fa-lg"></i>
            <input className='input-field' type="password"placeholder='Confirm new password' name="confirmPassword" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
            <p>{error}</p>

          </div>

          {/* <div><a  className="btn btn-primary"  href='/' onClick={handleSubmit}>Reset</a></div> */}
          <div><button className="btn btn-primary" onClick={handleSubmit}>Reset</button></div>
          {/* <div>{msg}</div> */}


        </div>




      </div>
    </form>
  )
}

export default ResetPassword
