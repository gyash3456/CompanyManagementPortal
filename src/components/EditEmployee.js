import { useState,useEffect} from "react";
import axios from 'axios';
import React from "react";
import './EditEmployee.css';
import editpic from './../assets/edit1.svg';
import {useParams} from "react-router-dom";
// import pic from './../assets/MicrosoftTeams-image.png'


function EditEmployee() {
    

    const initialObject={id:"",firstname:"",email:"",gender:"",phone:"",address:"",adharno:"",pancard:"",dob:"",designation:"",joiningdate:"",bankname:"",bloodgroup:"",accountno:"",ifsc:""};
    const [resObject,setResObject]=useState(initialObject);
    const [disabled, setDisabled] = useState(true);
    const [message,setMessage]=useState("");
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState(""); 
//   const [gender, setGender] = useState("");
//   const [phone,setPhone] = useState("")
//   const [address, setAddress] = useState("");
//   const [adharno, setAadharno] = useState("");
//   const [pancard, setPancard] = useState("");
//   const [dob, setDOB] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [joiningdate, setJoiningdate] = useState("");
//   const [bankname, setBankname] = useState("");
//   const [bloodgroup, setBloodgrup] = useState("");
//   const [accountno, setAccountno] = useState("");
//   const [ifsc, setIFSC] = useState("");
//   const [message , setMessage] = useState("");
const {id}=useParams();
  useEffect(() => {
    axios.get(`/landingpage/admin/${id}`)
    .then(res =>{
    //   console.log(res)
    //   setResObject(...resObject,firstname:`${res.data.firstName}`);
    //   console.log(resObject.name);
    const newFormData = { ...resObject };

    newFormData.firstname = `${res.data.firstName}`;
    setResObject(newFormData);
    })
    .catch(err=>{
      console.log(err)
    })
  },[resObject])

  let handleSubmit = async (e) => {

    e.preventDefault();
    let res = await fetch("/landingpage/admin/", {
        headers:{
            "Content-Type":"application/json"
          },
        method: "POST",
        body: JSON.stringify({
            id:resObject.id,
          name: resObject.firstname,
          email: resObject.email,
          gender: resObject.gender,
          phone: resObject.phone,
          address: resObject.address,
          adharno: resObject.adharno,
          pancard: resObject.pancard,
          dob: resObject.dob,
          designation: resObject.designation,
          joiningdate: resObject.joiningdate,
          bankname: resObject.bankname,
          bloodgroup: resObject.bloodgroup,
          accountno: resObject.accountno,
          ifsc: resObject.ifsc,
          
        }),
      }).then(()=>{


      })
      
    //   let resJson = await res.json();
//       if (res.status === 200) {
//         setId("");
//         setName("");
//         setEmail("");
//         setGender("");
//         setPhone("");
//         setAddress("");
//         setAadharno("");
//         setPancard("");
//         setDOB("");
//         setDesignation("");
//         setJoiningdate("");
//         setBankname("");
//         setBloodgrup("");
//         setAccountno("");
//         setIFSC("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
  };

  const edit = (event) => {
    setDisabled(!disabled);
  }

  return (
    <div>
    <div class="textempedit" >
            <p class="empdet">
        Employee Details
        </p>
<div className="Edit">
        <button className="Editbtn"  onClick={edit}>{disabled ? <span>Edit Details</span>: <span>Cancel</span> } <img className="editimg" src={editpic} /></button>
        </div>
        </div>
    <div className="Appadminedit">
        <div className="detailsedit">
      <form  className="formedit" onSubmit={handleSubmit}>
       
        <table className="tableeditdetail">
            <tr>
                <td className="lableemployee">Employee ID :</td>
                <td><input
          type="text"
          disabled={disabled}
          value={resObject.id}
          placeholder="EmployeeID"
          onChange={(e) => setResObject.id(e.target.value)}
        /></td>
                <td className="lableemployee">Employee Name :</td>
                <td> <input
          type="text"
          value={resObject.firstname}
          placeholder="Name"
          onChange={(e) => setResObject.name(e.target.value)}
          disabled={disabled}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Employee Email :</td>
                <td><input
          type="email"
          value={resObject.email}
          placeholder="Email"
          onChange={(e) => setResObject.email(e.target.value)}
          disabled={disabled}
        /></td>
                <td className="lableemployee">Employee Gender :</td>
                <td><select class="mychoice" id="SelectUserChoice">
      <option disabled={disabled} value="dontUseMe">-Select a value-</option>
      <option disabled={disabled}value="myoption1">Male</option>
      <option disabled={disabled}value="myoption2">Female</option>
      <option disabled={disabled} value="myoption3">Others</option>
      onChange={(e) => setResObject.gender(e.target.value)}
      
    </select></td>
            </tr>
            <tr>
                <td className="lableemployee">Employee Phone :</td>
                <td> <input
          type="text"
          value={resObject.phone}
          placeholder="Phone"
          onChange={(e) => setResObject.phone(e.target.value)}
          disabled={disabled}

        /></td>
                <td className="lableemployee">Employee Address :</td>
                <td><input
          type="text"
          value={resObject.address}
          placeholder="Address"
          onChange={(e) => setResObject.address(e.target.value)}
          disabled={disabled}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Aadhar No.:</td>
                <td> <input
          type="text"
          value={resObject.adharno}
          placeholder="Adhar no"
          onChange={(e) => setResObject.adharno(e.target.value)}
          disabled={disabled}
        /></td>
                <td className="lableemployee">Pan Card No :</td>
                <td> <input
          type="text"
          value={resObject.pancard}
          placeholder="Pancard No"
          onChange={(e) => setResObject.pancard(e.target.value)}
          disabled={disabled}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Employee DOB :</td>
                <td> <input
          type="date"
          value={resObject.dob}
          placeholder="DOB"
          onChange={(e) => setResObject.dob(e.target.value)}
          disabled={disabled}
        /></td>
                <td className="lableemployee">Designation :</td>
                <td><input
          type="text"
          value={resObject.designation}
          placeholder="Designation"
          onChange={(e) => setResObject.designation(e.target.value)}
          disabled={disabled}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Joining Date :</td>
                <td><input
          type="text"
          value={resObject.joiningdate}
          placeholder="Joining Date"
          onChange={(e) => setResObject.joiningdate(e.target.value)}
          disabled={disabled}
        /></td>
                <td className="lableemployee">Bank Name :</td>
                <td><input
          type="text"
          value={resObject.bankname}
          placeholder="Bank No"
          onChange={(e) => setResObject.bankname(e.target.value)}
          disabled={disabled}
        /></td>
            </tr>
            <tr>
                <td className="lableemployee">Blood Group :</td>
                <td><select class="mychoice" id="SelectUserChoice">
      <option disabled={disabled} value="dontUseMe">-Select a value-</option>
      <option disabled={disabled} value="1">A+</option>
      <option disabled={disabled}value="2">A-</option>
      <option disabled={disabled} value="3">AB+</option>
      <option disabled={disabled} value="4">AB-</option>
      <option disabled={disabled}value="5">B+</option>
      <option disabled={disabled} value="6">B-</option>
      <option disabled={disabled}value="7">O+</option>
      <option disabled={disabled} value="8">O-</option>
      
      onChange={(e) => setResObject.bloodgrup(e.target.value)}
      disabled={disabled}
    </select></td>
                <td className="lableemployee">Profile Photo :</td>
                <td><input className="photo"
                disabled={disabled}
                type="file" id="myFile" name ="filename"></input></td>
            </tr>
            <tr>
                <td className="lableemployee">Account No :</td>
                <td><input
          type="text"
          value={resObject.accountno}
          placeholder="Account No."
          onChange={(e) => setResObject.accountno(e.target.value)}
          disabled={disabled}
        /></td>
                <td className="lableemployee">IFSC Code :</td>
                <td> <input
          type="text"
          value={resObject.ifsc}
          placeholder="IFSC"
          onChange={(e) => setResObject.ifsc(e.target.value)}
          disabled={disabled}
        /></td>
            </tr>
        </table>
        <div className="editbutton"> <button className="Editsubmit" type="submit">SAVE</button></div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      </div>
    </div>
    </div>
    
  );
}

export default EditEmployee;