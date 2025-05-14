import React, { useState } from 'react'

const Todos = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[update, setUpdate] = useState("");
  const[record,setRecord]=useState(JSON.parse (localStorage.getItem("users")) || []);

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div align="center">
      <h1>Todo List Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:- </label>
        <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName( e.target.value )} />
        <br /><br />
        <label>Enter Email:- </label>
        <input type="email" placeholder='Enter Your email' value={email} onChange={(e)=>setEmail( e.target.value )} />
        <br /><br />
        <label>Enter Password:- </label>
        <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword( e.target.value )} />
        <br /><br />
        {
          update ? <button type='submit'>Update</button> : <button type='submit'>Add</button>
        }
      </form>
      <h2>All Record View Table</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
       <tbody>
        {
          record.map((item,index)=>{
            const{id,name,email,password}=item;
            return(
              <>
                <tr key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>
                    <button onClick={()=>handleUpdate(id)}>Edit</button>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                  </td>
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

export default Todos
