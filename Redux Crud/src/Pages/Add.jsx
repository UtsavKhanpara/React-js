import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_USER } from '../Redux/Action/CrudAction';

const Add = () => {

    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch=useDispatch()
    const navigate=useNavigate();
    

    const handleSubmit=(e)=>{
        e.preventDefault();

        let obj={
            id:Math.floor(Math.random()*10000),
            name:name,
            email:email,
            password:password
        }

        
        if(!name || !email || !password){
            alert("all Filed Requir")
            return false
        }

        dispatch(ADD_USER(obj));
        navigate('/view')
        setName("");
        setemail("");
        setpassword("");

    }

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name:-</td>
                            <td><input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Email:-</td>
                            <td><input type="email" value={email} placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Password:-</td>
                            <td><input type="password" value={password} placeholder='Enter Password' onChange={(e)=>setpassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="ADD" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <br />
            <Link to={'/view'}>View</Link>
        </div>
    )
}

export default Add
