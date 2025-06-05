import  {  useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const View = () => {

    const [record, setRecord] = useState([]);
    
    const navigate=useNavigate()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("users")) || [];
        setRecord(data)
    }, [])

    const handleDelete = (id) => {
        const deleteRec = record.filter((data) => data.id != id)
        setRecord(deleteRec)
        localStorage.setItem("users", JSON.stringify(deleteRec))
        alert("Record Deleted")
    }

    return (
        <div align="center">
            <h1>View Courses</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((val, index) => {
                            const { id, name, email, password, gender } = val;
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{gender}</td>
                                        <td>
                                            <button onClick={()=>navigate('/edit', {state:val})}>Edit</button>
                                            <button onClick={() => handleDelete(id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                         })
                    }
                </tbody>
            </table>
            <br />
            <Link to={'/add'}>Add</Link>
        </div>
    )
}
export default View
