

import { useState, useEffect } from "react";
import axios from 'axios'
import React from "react";
import './EditEmployee.css';
import editpic from './../assets/edit1.svg';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import pic from './../assets/MicrosoftTeams-image.png'


function EditEmployee() {


  const initialObject = { id:"", first_name: "", email: "", gender: "", mobile: "", address: "", aadhar:"", pan_no: "", date_of_birth: "", designation: "", joining_date: "", bank_name: "", blood_group: "", account_no: "", ifsc_code: "", password: "" };
  const [resObject, setResObject] = useState(initialObject);
  const [disabled, setDisabled] = useState(true);
  const [enableBorder,setEnableBorder]= useState();
  const [message, setMessage] = useState("");

  const { id } = useParams();
  useEffect(() => {
    axios.get(`/landingpage/admin/${id}`)
      .then(res => {

        const newFormData = { ...resObject };

        newFormData.id = `${res.data.id}`;
        newFormData.first_name = `${res.data.first_name}`;
        newFormData.email = `${res.data.email}`;
        newFormData.gender = `${res.data.gender}`;
        newFormData.mobile = `${res.data.mobile}`;
        newFormData.address = `${res.data.address}`;
        newFormData.aadhar = `${res.data.aadhar}`;
        newFormData.pan_no = `${res.data.pan_no}`;
        newFormData.date_of_birth = `${res.data.date_of_birth}`;
        newFormData.designation = `${res.data.designation}`;
        newFormData.joining_date = `${res.data.joining_date}`;
        newFormData.bank_name = `${res.data.bank_name}`;
        newFormData.blood_group = `${res.data.blood_group}`;
        newFormData.account_no = `${res.data.account_no}`;
        newFormData.ifsc_code = `${res.data.ifsc_code}`;
        newFormData.password = `${res.data.password}`
        setResObject(newFormData);

      })
      .catch(err => {
        console.log(err)
      })


  }, [enableBorder])

  const handleFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...resObject }
    newFormData[fieldName] = fieldValue;
    setResObject(newFormData);

  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(`/landingpage/admin/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify({
        id: resObject.id,
        first_name: resObject.first_name,
        email: resObject.email,
        gender: resObject.gender,
        mobile: resObject.mobile,
        address: resObject.address,
        aadhar: resObject.aadhar,
        pan_no: resObject.pan_no,
        date_of_birth: resObject.date_of_birth,
        designation: resObject.designation,
        joining_date: resObject.joining_date,
        bank_name: resObject.bank_name,
        blood_group: resObject.blood_group,
        account_no: resObject.account_no,
        ifsc_code: resObject.ifsc_code,
        password: resObject.password

      }),
    }).then((resp) => {
      console.log(resp);
      edit();

      toast.success("Employee Details Updated Successfully",{autoClose:2000,position:"top-center"})
    }).catch((err) => {
      console.log(err);
      toast.error("Employee Details Updated Successfully",{autoClose:2000,position:"top-center"})

    }

    )
  };


  const edit = (event) => {
    setDisabled(!disabled);
    if(disabled){
      
      setEnableBorder("1px solid black");
    }else{
      setEnableBorder("none");
    }
    
  }

  return (
    <div>
      <Navbar/>
      <div class="textempedit" >
        <p class="empdet">
          Employee Details
        </p>
        
      </div>
      <div className="Appadminedit-container">
      <div className="Edit">
          <button className="Editbtn" onClick={edit}>{disabled ? <span>Edit Details <img className="editimg" src={editpic} /></span> : <span>Cancel</span>} </button>
        </div>
      <div className="Appadminedit">
        <div className="detailsedit">


          <form className="formedit" onSubmit={handleSubmit}>

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
                  name="first_name"
                  value={resObject.first_name}
                  placeholder="Name"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
              </tr>
              <tr>
                <td className="lableemployee">Employee Email :</td>
                <td><input
                  type="email"
                  name="email"
                  value={resObject.email}
                  placeholder="Email"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
                <td className="lableemployee">Employee Gender :</td>
                <td><select class="mychoice" id="SelectUserChoice" name= "gender"onChange={handleFormChange}value={resObject.gender} disabled={disabled}>
                  <option disabled={disabled} value="dontUseMe">-Select a value-</option>
                  <option disabled={disabled} value="male">Male</option>
                  <option disabled={disabled} value="female">Female</option>
                  <option disabled={disabled} value="others">Others</option>
                  

                </select></td>
              </tr>
              <tr>
                <td className="lableemployee">Employee mobile :</td>
                <td> <input
                  type="text"
                  name="mobile"
                  value={resObject.mobile}
                  placeholder="mobile"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}

                /></td>
                <td className="lableemployee">Employee Address :</td>
                <td><input
                  type="text"
                  name="address"
                  value={resObject.address}
                  placeholder="Address"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
              </tr>
              <tr>
                <td className="lableemployee">Aadhar No.:</td>
                <td> <input
                  type="number"
                  name="aadhar"
                  value={resObject.aadhar}
                  placeholder="Adhar no"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
                <td className="lableemployee">Pan Card No :</td>
                <td> <input
                  type="text"
                  name="pan_no"
                  value={resObject.pan_no}
                  placeholder="pan_no No"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
              </tr>
              <tr>
                <td className="lableemployee">Employee date_of_birth :</td>
                <td> <input
                  type="date"
                  name="date_of_birth"
                  value={resObject.date_of_birth}
                  placeholder="date_of_birth"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
                <td className="lableemployee">Designation :</td>
                <td><input
                  type="text"
                  name="designation"
                  value={resObject.designation}
                  placeholder="Designation"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
              </tr>
              <tr>
                <td className="lableemployee">Joining Date :</td>
                <td><input
                  type="text"
                  name="joining_date"
                  value={resObject.joining_date}
                  placeholder="Joining Date"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
                <td className="lableemployee">Bank Name :</td>
                <td><input
                  type="text"
                  name="bank_name"
                  value={resObject.bank_name}
                  placeholder="Bank No"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
              </tr>
              <tr>
                <td className="lableemployee">Blood Group :</td>
                <td><select class="mychoice" id="SelectUserChoice" name="blood_group" value={resObject.blood_group}onChange={handleFormChange} disabled={disabled}>
                  <option disabled={disabled} value="dontUseMe">-Select a value-</option>
                  <option disabled={disabled} value="A+">A+</option>
                  <option disabled={disabled} value="A-">A-</option>
                  <option disabled={disabled} value="AB+">AB+</option>
                  <option disabled={disabled} value="AB-">AB-</option>
                  <option disabled={disabled} value="B+">B+</option>
                  <option disabled={disabled} value="B-">B-</option>
                  <option disabled={disabled} value="O+">O+</option>
                  <option disabled={disabled} value="O-">O-</option>

                 
                  disabled={disabled}
                </select></td>
                <td className="lableemployee">Profile Photo :</td>
                <td><input className="photo"
                  disabled={disabled}
                  type="file" id="myFile" name="filename"></input></td>
              </tr>
              <tr>
                <td className="lableemployee">Account No :</td>
                <td><input
                  type="text"
                  name="account_no"
                  value={resObject.account_no}
                  placeholder="Account No."
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
                <td className="lableemployee">ifsc_code Code :</td>
                <td> <input
                  type="text"
                  name="ifsc_code"
                  value={resObject.ifsc_code}
                  placeholder="ifsc_code"
                  onChange={handleFormChange}
                  disabled={disabled}
                  style={{borderBottom:enableBorder}}
                /></td>
              </tr>
            </table>
            <div className="editbutton"> <button className="Editsubmit" type="submit">SAVE</button></div>
            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </div>
        </div>
      </div>
      <ToastContainer/>
      <Footer/>
    </div>

  );
}

export default EditEmployee;