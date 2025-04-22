import React, { useState } from 'react'

const Crud = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Plz All Filed Fill To Require");
      return false;
    }

    if (update) {
      const updateRecord = record.map((data) => {
        return data.id === update ? { id: update, name: name, email: email } : data;
      })
      setRecord(updateRecord);
      localStorage.setItem(`users`, JSON.stringify(updateRecord));
      alert("Record Updated");
    } else {
      const isDuplicate = record.some((data) => data.email ===  email || data.name === name);
      if (isDuplicate) {
        alert("Record Already Exists")
      }
      setName("");
      setEmail("");
      setUpdate("");
    } 

      let newRecord = [...record, { id: Math.floor(Math.random() * 100000), name: name, email: email }]
      setRecord(newRecord);
      localStorage.setItem(`users`, JSON.stringify(newRecord));
      alert("Record Added")




  }

  const handleUpdate = (id) => {
    const update = record.find((data) => data.id === id)
    setUpdate(id);
    setEmail(update.email);
    setName(update.name);
  }

  const handleDelete = (id) => {
    const deletedata = record.filter((data) => data.id != id)
    setRecord(deletedata);
    localStorage.setItem(`users`, JSON.stringify(deletedata));
    alert("Record Deleted")
  }

  return (
    <div align="center">
      <h1>Crud Operations</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        {
          update ? <button type='submit'>Update</button> : <button type='submit'>Add</button>
        }
      </form>
      <h3>All Records</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((r, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{r.name}</td>
                    <td>{r.email}</td>
                    <td>
                      <button onClick={() => handleUpdate(r.id)}>Edit</button> || <button onClick={() => handleDelete(r.id)}>Delete</button>
                    </td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Crud
