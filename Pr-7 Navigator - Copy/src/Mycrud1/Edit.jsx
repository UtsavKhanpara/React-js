import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './style.css'

const Edit = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [formInput, setFormInput] = useState({
        name: "",
        age: "",
        gender: "",
        diagnosis: "",
        birthdate: "",
        contact: ""
    })

    const [allrecord, setAllRecord] = useState([]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("doctor")) || [];
        setAllRecord(data);

        if (location.state) {
            setFormInput(location.state);
        }
    }, [location])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = allrecord.map((item) =>
            item.id === formInput.id ? formInput : item
        )
        setAllRecord(updatedData)
        localStorage.setItem("doctor", JSON.stringify(updatedData))
        navigate('/')
    }

    return (
        <div className="container">
            <h1>Edit Patient Data</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name='name' value={formInput.name} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td><input type="number" name='age' value={formInput.age} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>
                                <label><input type="radio" name='gender' value="male" checked={formInput.gender === "male"} onChange={handleChange} /> Male</label>
                                <label style={{ marginLeft: "15px" }}><input type="radio" name='gender' value="female" checked={formInput.gender === "female"} onChange={handleChange} /> Female</label>
                            </td>
                        </tr>
                        <tr>
                            <td>Diagnosis:</td>
                            <td><input type="text" name='diagnosis' value={formInput.diagnosis} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>BirthDate:</td>
                            <td><input type="date" name='birthdate' value={formInput.birthdate} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>Contact:</td>
                            <td><input type="number" name='contact' value={formInput.contact} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center"><input type="submit" value="UPDATE" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Link to="/" className="view-link">VIEW</Link>
        </div>
    )
}

export default Edit;
