import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Added = () => {

    const[doctorname,setDoctorName]=useState("");
    const[age,setAge]=useState("");
    const[degree,setDegree]=useState("");
    const[record,setRecord]=useState(JSON.parse(localStorage.getItem("doctor")) || [] )

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!doctorname || !age || !degree){
            alert("all Filed Require")
            return false;
        }

        let obj={
            id:Math.floor(Math.random()*100000),
            doctorname:doctorname,
            age:age,
            degree:degree
        }

        let newRecord=[...record,obj]
        setRecord(newRecord)
        localStorage.setItem("doctor",JSON.stringify(newRecord))
        navigate('/');
    }


  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <h1>Add Doctor Information</h1>
        <table border={1}>
            <thead>
                <tr>
                    <td>Doctor Name:-</td>
                    <td><input type="text" placeholder='Enter Doctor Name' value={doctorname} onChange={(e)=>setDoctorName(e.target.value)} /></td>
                </tr>
                 <tr>
                    <td>Doctor Degree:-</td>
                    <td>
                        <select value={degree} onChange={(e)=>setDegree(e.target.value)}>
                            <option value=""> ---Selected Doctor Degree ---</option>
                            <option value="PHD">PHD</option>
                            <option value="MD">MD</option>
                            <option value="B.H.M.S">B.H.M.S</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Age:-</td>
                    <td><input type="number" placeholder='Enter Your Age' value={age} onChange={(e)=>setAge(e.target.value)} /></td>
                </tr>
               
                <input type="submit" value="Add" />
            </thead>
        </table>
      </form>
     <Link to={'/'}>View</Link>
    </div>
  )
}

export default Added
