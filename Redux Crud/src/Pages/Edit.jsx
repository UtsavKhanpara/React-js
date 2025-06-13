import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { EDIT_USER } from '../Redux/Action/CrudAction';

const Edit = () => {

    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [id, setId] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setId(location.state.id); // 👈 Add this
        setName(location.state.name);
        setemail(location.state.email);
        setpassword(location.state.password);
    }, [location.state]);


    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: id, // 👈 Use the same ID
            name,
            email,
            password
        }


        if (!name || !email || !password) {
            alert("all Filed Requir")
            return false
        }

        dispatch(EDIT_USER(obj));
        navigate('/view')
        setName("");
        setemail("");
        setpassword("");

    }

    return (
        <div align="center">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name:-</td>
                            <td><input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Email:-</td>
                            <td><input type="email" value={email} placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Password:-</td>
                            <td><input type="password" value={password} placeholder='Enter Password' onChange={(e) => setpassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Edit" /></td>
                        </tr>
                    </thead>
                </table>
            </form>
            <br />
            <Link to={'/view'}>View</Link>
        </div>
    )
}

export default Edit
