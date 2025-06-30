import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { delete_user } from '../Redux/Action/CrudAction'

const View = () => {

    let record = useSelector(state => state.crud.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div align="center">
            <h1>View USer</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val, index) => {
                            return (
                                <>
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.age}</td>
                                        <td>{val.gender}</td>
                                        <td>{val.city}</td>
                                        <td>{val.country}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            <button onClick={() => navigate('/edit', { state: val })}>Edit</button>
                                            <button onClick={() => dispatch(delete_user(val.id))}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr />
            <Link to={'/'}>Add</Link>
        </div>
    )
}

export default View
