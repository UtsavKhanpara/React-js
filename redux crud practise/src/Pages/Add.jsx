import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add_user } from '../Redux/Action/CrudAction';


const Add = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !gender || !city || !country || !phone || !password) {
            alert("Please fill all the fields");
            return;
        }
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name,
            age,
            gender,
            city,
            country,
            phone,
            password
        }
        dispatch(add_user(obj));
        navigate('/view');
    }
    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Name:-</td>
                            <td><input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Age:-</td>
                            <td><input type="number" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Gender:-</td>
                            <td>
                                <input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />Male
                                <input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />Female
                            </td>
                        </tr>
                        <tr>
                            <td>City:-</td>
                            <td>
                                <select value={city} onChange={(e) => setCity(e.target.value)}>
                                    <option value="">--- select city ---</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Ahemdabad">Ahemdabad</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Morbi">Morbi</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Country:-</td>
                            <td>
                                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                                    <option value="">--- select Country ---</option>
                                    <option value="India">India</option>
                                    <option value="Usa">Usa</option>
                                    <option value="Africa">Africa</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Malesia">Malesia</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Phone:-</td>
                            <td><input type="number" maxLength={10} placeholder='Enter Phone' value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Password:-</td>
                            <td><input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Add" /></td>
                        </tr>
                    </thead>
                </table>
                <hr />
                <Link to={'/view'}>View</Link>
            </form>
        </div>
    )
}

export default Add
