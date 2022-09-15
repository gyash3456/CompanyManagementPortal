// import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import './Employeeadd.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const EmployeeAdd=()=> {

  const [id, setId] = useState("");
  const [lastname,setLastname]= useState("");
  const[password,setPassword]= useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [gender, setGender] = useState("");
  const [phone,setPhone] = useState("")
  const [address, setAddress] = useState("");
  const [adharno, setAadharno] = useState("");
  const [pancard, setPancard] = useState("");
  const [dob, setDOB] = useState("");
  const [designation, setDesignation] = useState("");
  const [joiningdate, setJoiningdate] = useState("");
  const [bankname, setBankname] = useState("");
  const [bloodgroup, setBloodgrup] = useState("");
  const [accountno, setAccountno] = useState("");
  const [ifsc, setIFSC] = useState("");
  const [message , setMessage] = useState("");
  const navigate=useNavigate();

  useEffect(()=>{},[message]);

  let handleSubmit = async (e) => {
    e.preventDefault();

    
      let res = await fetch("/landingpage/admin/", {
        headers:{
            "Content-Type":"application/json"
          },
        method: "POST",

        body: JSON.stringify({
            emp_id:id,
            first_name: name,
          email: email,
          gender: gender,
          mobile: phone,
          address: address,
          aadhar: adharno,
          pan_no: pancard,
          date_of_birth: dob,
          designation: designation,
          joining_date: joiningdate,
          bank_name: bankname,
          blood_group: bloodgroup,
          account_no: accountno,
          ifsc_code: ifsc,
          lastName:lastname,
          password:password

          
        }),
      }).then(function(response){
        console.log(response.data);
            if(response.status==201){
              setId("");
              setName("");
              setEmail("");
              setGender("");
              setPhone("");
              setAddress("");
              setAadharno(0);
              setPancard("");
              setDOB("");
              setDesignation("");
              setJoiningdate("");
              setBankname("");
              setBloodgrup("");
              setAccountno("");
              setIFSC("");
              setPassword("");
              setLastname("");
              // setMessage("User successfully created");
              toast.success("User successfully created",{autoClose:2000,position:"top-center"})
              setTimeout(()=>{navigate("/landingpage/admin/employeedetails")},3000)
            }
           else if(response.status==404){
              setMessage("Make sure email is unique");
           }
            // setMessage(response);
            console.log(response.status);
        //  resJson = await res.json();
      }).catch(function(error){
            setMessage("Some internal error");
      })
    
  };

  return (
    <>
    <div className="emp-add">
      <Navbar></Navbar>
    <div class="textempadd" >
            <p class="empdet">
        Employee Details
        </p>
        </div>
    <div className="Appadmin">
        <div className="details">
      <form  className="formadd" onSubmit={handleSubmit}>
       

        <table className="tableadddetail">
            <tr>
                
                <td className="lableemployee"><p>Employee Name <sup>*</sup>:</p></td>
                <td> <input
          type="text"
          value={name}
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        /></td>
         <td className="lableemployee">Employee Phone :</td>
                <td> <input
          type="text"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        /></td>
        
            </tr>
            
            <tr>
                <td className="lableemployee"><p>Employee Email <sup>*</sup> :</p></td>
                <td><input
          type="email"
          value={email}
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /></td>
        <td className="lableemployee"><p>Password <sup>*</sup> :</p></td>
                <td> <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        /></td>
              
            </tr>
            <tr>
            <td className="lableemployee">Employee Gender :</td>
                <td><select class="mychoice" value={gender}id="SelectUserChoice"onChange={(e) => setGender(e.target.value)}>
      <option value="dontUseMe">-Select a value-</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
      
    </select></td>
               
                <td className="lableemployee">Employee Address :</td>
                <td><input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Aadhar No.:</td>
                <td> <input
          type="text"
          value={adharno}
          placeholder="Adhar no"
          onChange={(e) => setAadharno(e.target.value)}
        /></td>
                <td className="lableemployee">Pan Card No :</td>
                <td> <input
          type="text"
          value={pancard}
          placeholder="Pancard No"
          onChange={(e) => setPancard(e.target.value)}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Employee DOB :</td>
                <td> <input
          type="date"
          value={dob}
          placeholder="DOB"
          onChange={(e) => setDOB(e.target.value)}
        /></td>
                <td className="lableemployee">Designation :</td>
                <td><input
          type="text"
          value={designation}
          placeholder="Designation"
          onChange={(e) => setDesignation(e.target.value)}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Joining Date :</td>
                <td><input
          type="text"
          value={joiningdate}
          placeholder="Joining Date"
          onChange={(e) => setJoiningdate(e.target.value)}
        /></td>
                <td className="lableemployee">Bank Name :</td>
                <td><input
          type="text"
          value={bankname}
          placeholder="Bank No"
          onChange={(e) => setBankname(e.target.value)}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Blood Group :</td>
                <td><select class="mychoice" id="SelectUserChoice"value={bloodgroup} onChange={(e) => setBloodgrup(e.target.value)}>
      <option value="dontUseMe">-Select a value-</option>
      <option value={"A+"}></option>
      <option value={"A-"}>A-</option>
      <option value={"AB+"}>AB+</option>
      <option value={"AB-"}>AB-</option>
      <option value={"B+"}>B+</option>
      <option value={"B-"}>B-</option>
      <option value={"O+"}>O+</option>
      <option value={"O-"}>O-</option>
      
      
    </select></td>
                <td className="lableemployee">Profile Photo :</td>
                <td><input className="photo"
                type="file" id="myFile" name ="filename"></input></td>
            </tr>
            <tr>
                <td className="lableemployee">Account No :</td>
                <td><input
          type="text"
          value={accountno}
          placeholder="Account No."
          onChange={(e) => setAccountno(e.target.value)}
        /></td>
                <td className="lableemployee">IFSC Code :</td>
                <td> <input
          type="text"
          value={ifsc}
          placeholder="IFSC"
          onChange={(e) => setIFSC(e.target.value)}
        /></td>
            </tr>
        </table>
        <div className="addbutton"> <button className="Addsubmit" type="submit">SUBMIT</button></div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      </div>
    </div>
    <Footer></Footer>
    </div>
    <ToastContainer/>
    </>
  );
}

export default EmployeeAdd;