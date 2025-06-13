import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './view.css'

const View = () => {

    let [allrecord, setAllrecord] = useState([]);
    let [filterdata, setFilterdata] = useState([]);
    let [shortings, setShortings] = useState({ name: true });
    let [searchField, setSearchField] = useState({
        name: "",
        age: "",
        gender: "",
        diagnosis: "",
        birthdate: "",
        contact: ""
    })

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('users')) || []
        setAllrecord(data)
        setFilterdata(data)
    }, [])

    useEffect(() => {
        let fdata = [...allrecord];
        fdata = allrecord.filter((val) =>
            val.name.toLowerCase().includes(searchField.name.toLowerCase())
        )
        setFilterdata(fdata)
    }, [searchField, allrecord])

    let searchinput = (event) => {
        let { name, value } = event.target;
        setSearchField({
            ...searchField,
            [name]: value
        })
    }

    let deleteuser = (id) => {
        let deleteuser = allrecord.filter((val) => val.id !== id)
        setAllrecord(deleteuser)
        localStorage.setItem('users', JSON.stringify(deleteuser))
    }

    let shorting = (name) => {
        let shortdata = [...allrecord].sort((a, b) => {
            let nameA = a.name.toLowerCase()
            let nameB = b.name.toLowerCase()
            if (nameA > nameB) return shortings ? 1 : -1;
            if (nameA < nameB) return shortings ? -1 : 1;
        });
        setAllrecord(shortdata)
        localStorage.setItem("users", JSON.stringify(shortdata))
        setShortings(!shortings)
    }

    let edituser = (id) => {
        let single = allrecord.find(val => val.id === id);
        navigator(`/edit/${id}`)
    }

    let navigator = useNavigate()

    return (
        <div className="view-wrapper">
            <h1 className="view-title">👨‍⚕️ Patient Records</h1>

            <div className="search-bar">
                <input
                    type="text"
                    name='name'
                    placeholder='🔍 Search by name...'
                    onChange={searchinput}
                    value={searchField.name}
                    className="search-input"
                />
                <Link to="/" className="add-btn">➕ Add New</Link>
            </div>

            <div className="table-wrapper">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className="clickable" onClick={() => shorting('name')}>Name ⬍</th>
                            <th>Gender</th>
                            <th>Diagnosis</th>
                            <th>Birth Date</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(filterdata.length === 0 ? allrecord : filterdata).map((val, i) => {
                            let { id, name, gender, diagnosis, birthdate, contact } = val
                            return (
                                <tr key={i}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{gender}</td>
                                    <td>{diagnosis}</td>
                                    <td>{birthdate}</td>
                                    <td>{contact}</td>
                                    <td>
                                        <button className="btn delete" onClick={() => deleteuser(id)}>🗑 Delete</button>
                                        <button className="btn edit" onClick={() => edituser(id)}>✏️ Edit</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View
