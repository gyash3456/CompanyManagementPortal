import React from 'react'
import Navbar from '../components/Navbar';
import '../components/EmployeeReimbursement.css';
import Footer from './Footer';

export default function EmployeeReimbursement() {
  return (
    <>
        <Navbar/>

        <div className='EmpReimb-Main'>

            <div className='emp-head'>
                <p> Reimbursement Status </p>
            </div>

            <div className='ApplyStatusBtn'>
                <div className='Apply'>
                    <button className='ApplyBtn'>Apply</button>
                    <button className='StatusBtn'>Status</button>
                </div>
            </div>

            <div className='reimb-table'>
               <table className='table-reimb'>
                <tr className='trhead'>
                    <th className='sn'> S.N. </th>
                    <th> ITEM </th>
                    <th> AMOUNT </th>
                    <th> DATE </th>
                    <th> STATUS </th>
                </tr>

                
                <tr className='trdata'>
                    <td>1</td>
                    <td>XXXXXX </td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>Approved/Pending</td>
                </tr>
                <tr className='trdata'>
                     <td>2</td>
                     <td>XXXXXX</td>
                     <td>XXXXXX</td>
                     <td>XXXXXX</td>
                    <td>Approved/Pending</td>
                </tr>
                <tr className='trdata'>
                    <td>3</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>Approved/Pending</td>
                </tr>
                <tr className='trdata'>
                    <td>4</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>Approved/Pending</td>
                </tr>
                <tr className='trdata'>
                    <td>5</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>XXXXXX</td>
                    <td>Approved/Pending</td>
                </tr>
                
               </table>
            </div>    

        </div>
        <Footer/>   
    </>
  )
}