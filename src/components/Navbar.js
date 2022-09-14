import React from 'react';
import './Navbar.css'
import pic from './../assets/mlename.png';
import pic2 from './../assets/person-circle.svg';
import {useParams,useNavigate} from "react-router-dom";



function Navbar() {
  const navigate= useNavigate();
  const{role}=useParams();
  let enable;
  if(role=='admin'){
   enable='block';
  }
  else{
    enable ='none';
  }
  const logout=()=>{
    localStorage.clear();
    
    navigate("/");

  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
  <img src={pic} class="navbar-brand"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto mb-2mb-lg-0">
    <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Personal
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/landingpage/personalinfo">Personal Information</a>
          <a class="dropdown-item" href="#">Pay Slip</a>
          <a class="dropdown-item" href="#">Employee Referral Program</a>
          <a class="dropdown-item" href="/landingpage/reimbursement">Reimbursement</a>
          <a class="dropdown-item" href="#">Feedback</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Leave</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Company Info
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/landingpage/ethicspolicies">Ethics and policies</a>
          <a class="dropdown-item" href="/landingpage/socialmedia">Social Media Campaign</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/landingpage/hiring">Hiring</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src= {pic2} class="rounded-circle" alt="Avatar"  />
        </a>
        <div class="dropdown-menu user-logo" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Name</a>
          <a class="dropdown-item" href="/landingpage/changepassword">Change Password</a>
          <a class="dropdown-item" href="/landingpage/admin/employeedetails"style={{display:`${enable}`}}>Employee Details</a>
          <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
        </div>
      </li>
     
      
    </ul>
    

    {/* <div class="dropdown1">
    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" bg-color="transparent">
    <img src= {pic2} class="rounded-circle" alt="Avatar"  />
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Name</a></li>
      <li><a href="#">Change Password</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </div>  */}
  
  </div>
</nav>
    </div>
  )
}

export default Navbar
