import React from 'react';
import './Hiring.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Hiring(){
    

    return(
        <>
        <Navbar/>
        <div className='MainEmp' >
            <div className='texthir'>
                <p className='hiring'>
                    On Going Hiring

                </p>

            </div>
            <div className='hiringtable'>
               <table className='tablehiri'>
                <tr className='trhead'>
                    <th>
                         S.No.
                    </th>
                    <th>
                        Job Title
                    </th>
                    <th>
                        Experience
                    </th>
                    <th>
                        No. of openings
                    </th>
                    <th>
                         Referral link:
                    </th>
                </tr>

                
                <tr className='trdata'>
                     <td>1</td>
                     <td>Python </td>
                     <td>5years</td>
                     <td>9</td>
                     {/* <button value={group.name} onClick={props.handleClickGroup}>
                      Refer here
                    </button>     */}
                    <td>
                    <button className='refer' onclick>Refer Here</button>
                    </td>
                </tr>
                <tr className='trdata'>
                     <td>2</td>
                     <td>Java </td>
                     <td>3years</td>
                     <td>5</td>
                     {/* <button value={group.name} onClick={props.handleClickGroup}>
                      Refer here
                    </button>     */}
                    <td>
                    <button className='refer' onclick>Refer Here</button>
                    </td>
                </tr>
                <tr className='trdata'>
                     <td>3</td>
                     <td>React </td>
                     <td>5years</td>
                     <td>5</td>
                     {/* <button value={group.name} onClick={props.handleClickGroup}>
                      Refer here
                    </button>     */}
                    <td>
                    <button className='refer' onclick>Refer Here</button>
                    </td>
                </tr>
                <tr className='trdata'>
                     <td>4</td>
                     <td>Fullstack </td>
                     <td>6years</td>
                     <td>5</td>
                     {/* <button value={group.name} onClick={props.handleClickGroup}>
                      Refer here
                    </button>     */}
                    <td>
                    <button className='refer' onclick>Refer Here</button>
                    </td>
                </tr>
                <tr className='trdata'>
                     <td>5</td>
                     <td>Pega </td>
                     <td>8years</td>
                     <td>5</td>
                     {/* <button value={group.name} onClick={props.handleClickGroup}>
                      Refer here
                    </button>     */}
                    <td>
                    <button className='refer' onclick>Refer Here</button>
                    </td>
                </tr>
                
               </table>
            </div>    
             
        </div>
        <Footer />
</>
    )
}

export default Hiring