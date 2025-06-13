import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DELETE_USER } from '../Redux/Action/CrudAction'

const View = () => {

    const record = useSelector(state => state.crud.users)
    const dispatch = useDispatch()
    const navigate=useNavigate();
    return (
        <div align="center">
            <h1>View User</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            <button onClick={() => navigate('/edit', { state: val })}>Edit</button>
                                            <button onClick={() => dispatch(DELETE_USER(val.id))}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            <br />
            <Link to={'/'}>Add</Link>
        </div>
    )
}

export default View
