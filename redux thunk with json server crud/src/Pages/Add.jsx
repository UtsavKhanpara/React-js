import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Add = () => {

    const[forminput,setFormInput]=useState({
        name:"",
        email:"",
        phone:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const changeinput=(e)=>{
        const{name,value}=e.target;
        setFormInput({
            ...forminput,
            [name]:value
        })
    }

  return (
    <div align="center">
        <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <table border={2} cellPadding="5px" cellSpacing="5px">
            <tbody>
                <tr>
                    <td>Name:-</td>
                    <td><input type="text" placeholder='Enter Name' value={forminput.name} onChange={changeinput} /></td>
                </tr>
                 <tr>
                    <td>Email:-</td>
                    <td><input type="email" placeholder='Enter Email' value={forminput.email} onChange={changeinput} /></td>
                </tr>
                 <tr>
                    <td>Phone:-</td>
                    <td><input type="number" placeholder='Enter Phone' value={forminput.phone} onChange={changeinput} /></td>
                </tr>
            </tbody>
        </table>
      </form>
      <hr />
      <Link to={'/view'}>VIEW</Link>
    </div>
  )
}

export default Add
