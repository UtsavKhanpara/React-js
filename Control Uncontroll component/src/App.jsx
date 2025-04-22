import React, { useState } from 'react'

const App = () => {

  const[name,setName]=useState();
  const[age,setAge]=useState();
  const[email,setEmail]=useState();
  const[number,setNumber]=useState();  
  const[date,setDate]=useState();
  const[password,setPassword]=useState();

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(number);
    console.log(date);
    console.log(password);
  }


  return (
    <div align="center">
      <h1>Controll Component Example</h1>

      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Enter Name:</td>
              <td><input type="text" value={name} onChange={(e)=>setName(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Enter Age:</td>
              <td><input type="number" value={age} onChange={(e)=>setAge(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Enter Email:</td>
              <td><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Enter Phone Number:</td>
              <td><input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Enter Date:</td>
              <td><input type="date" value={date} onChange={(e)=>setDate(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Enter Password:</td>
              <td><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td><input type="submit" /></td>
            </tr>
          </tbody>
        </table>
      </form>

    </div>
  )
}

export default App
