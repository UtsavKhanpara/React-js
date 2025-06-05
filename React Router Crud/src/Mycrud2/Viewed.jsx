import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Viewed = () => {

    const[record,setRecord]=useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        let data=JSON.parse(localStorage.getItem("doctor")) || []
        setRecord(data)
    },[]);

    const handleDelete=(id)=>{
        const deleteData=record.filter((data)=>data.id != id)
        setRecord(deleteData)
        localStorage.setItem("doctor",JSON.stringify(deleteData))
    }


  return (
    <div align="center">
        <h1>View Doctor Record</h1>
      <table border={1}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Doctor Name</th>
                     <th>Degree</th>
                    <th>Age</th>
                   
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((val,index)=>{
                        const{id,doctorname,degree,age}=val;
                        return(
                            <>
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{doctorname}</td>
                                     <td>{degree}</td>
                                    <td>{age}</td>
                                   
                                    <td>
                                        <button onClick={()=>navigate('/updated',{state:val})}>Edit</button>
                                        <button onClick={()=>handleDelete(id)}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
      </table>
      <br />
      <Link to={'added'}>Add</Link>
    </div>
  )
}

export default Viewed
