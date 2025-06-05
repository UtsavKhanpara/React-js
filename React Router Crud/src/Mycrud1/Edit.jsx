import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {


    const navigate=useNavigate();
    const location=useLocation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || [])

    useEffect(()=>{
        setName(location?.state?.name)
        setEmail(location?.state?.email)
        setPassword(location?.state?.password)
        setGender(location?.state?.gender)
    },[location?.state])

    const handleSubmit=(e)=>{
        e.preventDefault();

      let updateRec=record.map((data)=>{
        if(data.id === location?.state?.id){
            data.name = name
            data.password = password
            data.email = email
            data.gender = gender
        }
        return val;
      })
      setRecord(updateRec)
      localStorage.setItem("users",JSON.stringify(updateRec))
      alert("Record Updated")
      navigate('/');
    }
    return (
        <div align="center">
            <form onSubmit={handleSubmit}>
                <h1>Edit Courses</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name:-</td>
                            <td>
                                <input type="text"
                                    placeholder='Enter Your Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:-</td>
                            <td>
                                <input type="email"
                                    placeholder='Enter Your Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:-</td>
                            <td>
                                <input type="number"
                                    placeholder='Enter your Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Gender:-</td>
                            <td>
                                <input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />Male
                                <input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />female
                            </td>
                        </tr>
                        <input type="submit" value="Edit" />
                    </thead>
                </table>
            </form>
            <br />
            <Link to={'/'}>View</Link>
        </div>
    )
}

export default Edit
