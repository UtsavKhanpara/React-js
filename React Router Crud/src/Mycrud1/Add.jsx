import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("");
    const[record,setRecord]=useState(JSON.parse(localStorage.getItem("users")) || [] )

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!name || !email || !password || !gender){
            alert("All Filed Require To Fill");
            return false;
        }

        let obj={
            id:Math.floor(Math.random()*100000),
            name:name,
            email:email,
            password:password,
            gender:gender
        }

        let newRecord=[...record,obj]
        setRecord(newRecord)
        localStorage.setItem("users",JSON.stringify(newRecord))
        navigate('/')
    }


    
  return (
    <div align="Center">
        <form onSubmit={handleSubmit}>
            <h1>Add Courses</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Name:-</td>
                        <td>
                            <input type="text"
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Email:-</td>
                        <td>
                            <input type="email"
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password:-</td>
                        <td>
                            <input type="number"
                            placeholder='Enter your Password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Gender:-</td>
                        <td>
                            <input type="radio" value="male" checked={gender === "male"} onChange={(e)=>setGender(e.target.value)} />Male
                            <input type="radio" value="female" checked={gender === "female"}  onChange={(e)=>setGender(e.target.value)}/>female
                        </td>
                    </tr>
                    <input type="submit" value="Add" />
                </thead>
            </table>
        </form>
        <br />
        <Link to={'/'}>View</Link>
    </div>
  )
}

export default Add
