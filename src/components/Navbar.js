import React from 'react';
import './Navbar.css'
import pic from './../assets/mlename.png';
import pic2 from './../assets/person-circle.svg';


function Navbar() {
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
          <a class="dropdown-item" href="#">Personal Information</a>
          <a class="dropdown-item" href="#">Pay Slip</a>
          <a class="dropdown-item" href="#">Employee Referral Program</a>
          <a class="dropdown-item" href="#">Reimbursement</a>
          <a class="dropdown-item" href="#">Fedback</a>
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
          <a class="dropdown-item" href="#">Ethics and policies</a>
          <a class="dropdown-item" href="#">Social Media Campaign</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hiring</a>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src= {pic2} class="rounded-circle" alt="Avatar"  />

{/* <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style="width: 150px;"
  alt="Avatar" /> */}
        </a>
        <div class="dropdown-menu user-logo" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Name</a>
          <a class="dropdown-item" href="#">Change Password</a>
          <a class="dropdown-item" href="#">Logout</a>
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
