    import React, { useState } from 'react'

    const Todolist = () => {

        const [name, setName] = useState("");
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [update, setUpdate] = useState("");
        const [record, setRecord] = useState([]);

        const handleSubmit = (e) => {
            e.preventDefault();

            if (!name || !password || !email) {
                alert("ALL FILED REQUIRE TO FILL");
                return false;
            }

            if (update) {
                const updateRecord = record.map((data) => {
                    return data.id === update ? { id: update, name: name, email: email, password: password, status: "Deactive" } : data
                })
                setRecord(updateRecord);
                alert("Record Succsesfully Updated");
                setName("");
                setEmail("");
                setPassword("");
                setUpdate("");
                return false;
            } else {
                const ifdup = record.some((data) => data.name === name || data.email === email || data.password === password)
                if (ifdup) {
                    alert("Record Already Exits");
                    return false;
                }
            }

            let newRecord = [...record, { id: Math.floor(Math.random() * 102808202), name: name, email: email, password: password, status: "Active" }]
            setRecord(newRecord);
            alert("Record Sucsessfully Added");
            setName("");
            setEmail("");
            setPassword("");
        }

        const handleUpdate = (id) => {
            const update = record.find((data) => data.id === id)
            setName(update.name);
            setEmail(update.email);
            setPassword(update.password);
            setUpdate(id);
        }

        const handleDelete = (id) => {
            const deletedata = record.filter((data) => data.id != id)
            setRecord(deletedata);
            alert("Record Sucssesfully Deleted");
        }

        const toggleStatus = (id) => {
            const status = record.map((data) => data.id === id ? { ...data, status: data.status === "Active" ? "Deactive" : "Active" } : data)
            setRecord(status)
        }




        return (
            <div align="center">
                <h1>Todo Record Data</h1>
                <form onSubmit={handleSubmit}>
                    <label>Enter Name:-</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <br /><br />
                    <label>Enter Password:-</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br /><br />
                    <label>Enter Email:-</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br /><br />
                    {
                        update ? <button type='submit'>Update</button> : <button type='submit'>Add</button>
                    }
                </form>
                <h3>View Record</h3>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map((r, index) => {
                                return (
                                    <>
                                        <tr key={r.id}>
                                            <td>{index + 1}</td>
                                            <td>{r.name}</td>
                                            <td>{r.email}</td>
                                            <td>{r.password}</td>

                                            <td>
                                                <button onClick={() => handleUpdate(r.id)}>Edit</button>
                                                <button onClick={() => handleDelete(r.id)}>Delete</button>
                                            </td>
                                            <td style={{ color: r.status === "Active" ? "green" : "red", cursor: "pointer" }} onClick={() => toggleStatus(r.id)}>{r.status}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br /><br />
                <button onClick={() => {
                    setRecord([])
                    alert("All Record Deleted")
                }}>Remove All Record  </button>
            </div>
        )
    }

    export default Todolist
