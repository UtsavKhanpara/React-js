import React, { useState } from 'react'

const Todo = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [update, setUpdate] = useState("");
  const [record, setRecord] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //all filed require to fill

    if (!name || !email || !password) {
      alert("ALL FILED REQUIRE TO FILL")
      return false;
    }

    //(if)update id
    //(else) duplicate record not add

    if (update) {
      const updateRecord = record.map((data) => {
        return data.id === update ?
          { id: update, name: name, email: email, password: password, status: "Active" } : data
      })
      setRecord(updateRecord)
      setName("");
      setEmail("");
      setPassword("");
      setUpdate("");
      alert("Record Updated")
      return false;
    } else {
      let ifdup = record.some((data) => data.name === name || data.email === email || data.password === password)
      if (ifdup) {
        alert("Record Already Exits");
        setName("");
        setEmail("");
        setPassword("");
        return false;
      }

    }

    //new Record added end old record copy

    let newRecord = [...record, { id: Math.floor(Math.random() * 10000), name: name, email: email, password: password, status: "Active" }]
    setRecord(newRecord)
    setName("");
    setEmail("");
    setPassword("");
    alert("Record Added")
  }


  //update function 

  const handleUpdate = (id) => {
    const update = record.find((data) => data.id === id)
    setUpdate(id);
    setName(update.name);
    setEmail(update.email)
    setPassword(update.password)
  }

  //delete function

  const handleDelete = (id) => {
    const deletedata = record.filter((data) => data.id != id)
    setRecord(deletedata)
    alert("Record Deleted")
  }


  //Active Deactive Function
  const toggleStatus = (id) => {
    const status = record.map((data) => data.id === id ? { ...data, status: data.status === "Active" ? "Deactive" : "Active" }
      : data
    );
    setRecord(status);
  };

  //html content
  return (
    <div align="center">
      <h1>Todo List Data</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        {
          update ? <button type='submit'>Update</button> : <button type='submit'>Add</button>
        }
      </form>
      <h2>All Record</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Status</th>
            <th>Action</th>
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
                    <td>{r.password}</td>
                    <td
                      style={{ color: r.status === "Active" ? "green" : "red", cursor: "pointer" }}
                      onClick={() => toggleStatus(r.id)}
                    >
                      {r.status}
                    </td>
                    <td>
                      <button onClick={() => handleUpdate(r.id)}>Edit</button>
                      <button onClick={() => handleDelete(r.id)}>Delete</button>
                    </td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
      <br />
      <button onClick={() => {

        setRecord([]);
        alert("All Records Removed")
      }
      }
      >Remove All</button>
    </div>
  )
}

export default Todo
