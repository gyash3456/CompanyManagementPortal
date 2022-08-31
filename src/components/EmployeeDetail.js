import React from 'react';
import { useState, useEffect } from 'react';
import {Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmployeeDetail.css';
import pic1 from './../assets/edit.svg';
import pic2 from './../assets/delete-icon.svg';
import pic3 from './../assets/search.svg';
import pic4 from './../assets/addusersvg.svg';
import Navbar from './Navbar';
import Footer from './Footer';

// const data = [
//     { s_no: "1", employee_id: "1111", name: "Anom", email: "kd@gmail.com", phone: +91223363636, designation: "Software Engineer", action: "" },
//     { s_no: "2", employee_id: "1111", name: "Anom", email: "kd@gmail.com", phone: +91223363636, designation: "Software Engineer", action: "" },
//     { s_no: "3", employee_id: "1111", name: "Anom", email: "kd@gmail.com", phone: +91223363636, designation: "Software Engineer", action: "" },
// ]

function EmployeeDetail() {
    const [userDetails,setUserDetails]=useState([]);
    const [message,setMessage]= useState([]);
    const [searchTerm,setSearchTerm]= useState("");
    const navigate= useNavigate();

    useEffect(()=>{
            axios.get('/landingpage/admin/').then(function(response){
            setUserDetails(response.data);
            // console.log(response.data);
            console.log(userDetails);
            
                // const data= await response.json;
        // console.log(data );
        }).catch(function(error){
            console.log(error);
        }
        
    )},[message]);

    const deleteUser=(userid)=>{
        axios.delete(`/landingpage/admin/${userid}`)
        .then(function(response){
            console.log(response.status)
            setMessage("User deleted successfully")

        }).catch(function(err){
            setMessage("Some internal error")
            console.log(err);
        })
    }
    const getUser=(userid)=>{
        // axios.get(`/landingpage/admin/${userid}`)
        // .then(function(response){
        //     console.log(response.status)
        //     setMessage("User fetched successfully")

        // }).catch(function(err){
        //     setMessage("Some internal error")
        //     console.log(err);
        // })
        navigate(`/landingpage/admin/${userid}`)
    }

    return (
        <>
        <Navbar/>
        <div className='emp-main'>
            <div className='emp-head'><p>Employee Details</p></div>

            <div className='emp-search-adduser'>
                <div className='emp-search'>
                    <span className='emp-search-icon'><img className='' src={pic3} /></span>
                    <input placeholder='search user' onChange={(e)=>{
                        setSearchTerm(e.target.value)
                    }}></input>


                </div>

                <div className='emp-adduser'>

                    <span className='emp-search-icon'><img className='' src={pic4} /></span>
                    <button className='emp-adduserbtn'><Link to='/landingpage/admin/addemployee'>Add User</Link></button>
                </div>

            </div>
            <div className='emp-app'>
                <table className='main-table'>
                    <tr className='table-header'>

                        <th>S.No</th>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Designation</th>
                        <th>Action</th>
                    </tr>
                    {userDetails.filter((val)=>{
                        if(val==''){
                            return val;
                        }
                        else if( val.first_name !=null &&val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            console.log(val);
                            return val;
                            
                        }
                    })
                    .map((val, key) => {
                        return (
                            <tr key={key}>
                                <td >{key+1}</td>
                                <td>{val.emp_id}</td>
                                <td>{val.first_name}</td>
                                <td>{val.email}</td>
                                <td>{val.mobile}</td>
                                <td>{val.designation}</td>
                                <td><button className="emp-btn" onClick={()=>getUser(val.emp_id)}><img className='emp-edit-img' src={pic1} /></button>
                                 <button className="emp-btn"onClick={()=>deleteUser(val.emp_id)}>
                                <img className='emp-delete-img' src={pic2} />
                                </button> 
                                </td>
                            </tr>
                        )
                    })}
                </table>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default EmployeeDetail;