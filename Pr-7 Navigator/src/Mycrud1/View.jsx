import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

const View = () => {
    const [allrecord, setAllRecord] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("doctor")) || [];
        setAllRecord(data);
    }, [])

    const handleDelete = (id) => {
        const deletedata = allrecord.filter((data) => data.id !== id);
        setAllRecord(deletedata);
        localStorage.setItem("doctor", JSON.stringify(deletedata));
    }

    return (
        <div className="container">
            <h1>View Patient Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Diagnosis</th>
                        <th>BirthDate</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allrecord.map((val, index) => {
                            const { id, name, age, gender, diagnosis, birthdate, contact } = val;
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{gender}</td>
                                    <td>{diagnosis}</td>
                                    <td>{birthdate}</td>
                                    <td>{contact}</td>
                                    <td>
                                        <button onClick={() => navigate('/edit', { state: val })}>Edit</button>
                                        <button onClick={() => handleDelete(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/add" className="view-link">ADD</Link>
        </div>
    )
}

export default View;
