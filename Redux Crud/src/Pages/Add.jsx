import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Add = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div align="center">
      <h1>ADD USER</h1>
      <form onSubmit={handleSubmit}>
        <table border={1} cellPadding="5px" cellSpacing="5px">
          <tbody>
            <tr>
              <td>Name:-</td>
              <td><input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Email:-</td>
              <td><input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Phone:-</td>
              <td><input type="number" maxLength={10} placeholder='Enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} /></td>
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
