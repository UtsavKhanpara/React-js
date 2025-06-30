import React, { useState } from 'react'

const Add = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div align="center">
      <h1>ADD USER</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
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
              <td>Password:-</td>
              <td><input type="number" placeholder='Enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Add
