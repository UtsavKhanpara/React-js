import React from 'react'
import './assets/css/Employdata.css';

const Employdata = ({employ}) => {
  return (
    <div align="center">

        <h1>Employ Data</h1>

        <table border={1}>
            <thead>
                <tr>
                    <th>Sr no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Post</th>
                    <th>Salary</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {
                    employ.map((val,i)=>{
                        return(
                            <>
                                <tr>
                                    <td> {val.empid} </td>
                                    <td> {val.empname} </td>
                                    <td> {val.empemail} </td>
                                    <td> {val.empphone} </td>
                                    <td> {val.empaddress.country} </td>
                                    <td> {val.empaddress.state} </td>
                                    <td> {val.empaddress.city} </td>
                                    <td> {val.empaddress.area} </td>
                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>


      
    </div>
  )
}

export default Employdata
