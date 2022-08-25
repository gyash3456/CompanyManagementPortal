import React from 'react'
import './EmployeeDetail.css';
import pic1 from './../assets/edit.svg';
import pic2 from './../assets/delete-icon.svg';
import pic3 from './../assets/search.svg';
import pic4 from './../assets/addusersvg.svg';

const data = [
    { s_no: "1", employee_id: "1111", name: "Anom", email: "kd@gmail.com", phone: +91223363636, designation: "Software Engineer", action: "" },
    { s_no: "2", employee_id: "1111", name: "Anom", email: "kd@gmail.com", phone: +91223363636, designation: "Software Engineer", action: "" },
    { s_no: "3", employee_id: "1111", name: "Anom", email: "kd@gmail.com", phone: +91223363636, designation: "Software Engineer", action: "" },
]

function EmployeeDetail() {
    return (
        <div className='emp-main'>
            <div className='emp-head'><p>Employee Details</p></div>

            <div className='emp-search-adduser'>
                <div className='emp-search'>
                    <span className='emp-search-icon'><img src={pic3} /></span>
                    <input placeholder='search user'></input>


                </div>

                <div className='emp-adduser'>

                    <span className='emp-search-icon'><img src={pic4} /></span>
                    <button className='emp-adduserbtn'>Add User</button>
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
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td >{val.s_no}</td>
                                <td>{val.employee_id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>{val.designation}</td>
                                <td><img src={pic1} /> <img src={pic2} /> </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default EmployeeDetail;