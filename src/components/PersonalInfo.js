import React from 'react' ;
import './PersonalInfo.css';
import pic from './../assets/MicrosoftTeams-image.png';
import Navbar from './Navbar';
import Footer from './Footer';

function PersonalInfo() {
 return(
    <>
    <Navbar/>
    <div class="MainEmp">
        <div class="text" >
            <p class="para">
        Employee Information
        </p>
        </div>

        <div class="PersonalBox">
            
<table class="tableinfo">
                <tr className='perinfo'>
                  <td className='infodata'>
                       <span> Employee ID :</span>  
                       <span>XXXXX</span>                 
                   </td>
                    
                  <td class="rightside">
                       <span>Employee Name :</span>
                       <span>XXXXX</span> 
                    
                   </td>
                </tr>
                <tr className='perinfo'>
                  <td className='infodata'>
                       <span>Employee Email : </span> 
                       <span>XXXXX</span>
                   </td>
                   <td class="rightside">
                       <span> Employee Gender :</span>
                       <span>XXXXX</span>
                   </td>
                   
                </tr>
                <tr className='perinfo'>
                   <td className='infodata'>
                     <span> Employee DOB :</span>
                       <span>XXXXX</span>
                   </td>
                   
                   <td class="rightside">
                       <span>Employee Phone :</span> 
                    
                        <span>XXXXX</span>
                   </td>
                </tr>
                <tr className='perinfo'>
                   <td className='infodata'>
                        <span>Employee Aadhar :</span>
                        <span>XXXXX</span>
                   </td>
                   
                   <td class="rightside">
                       <span> Employee Pan :</span>
                       <span> XXXXX</span>
                   </td>
                   
                </tr>
                <tr className='perinfo'>
                  <td className='infodata'>
                      <span> Employee Address :</span>
                    <span>XXXXX</span>
                   </td>
                </tr>
           </table>
            <div class="image">
            <img class="imageemp" src={ pic}></img>
            </div>
        </div>
    </div>
    </>

    
  
 )
}

export default PersonalInfo
