import React, { useState } from 'react'

const Crud = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [courses, setCourses] = useState([]);
  const [update, setUpdate] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || [])

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter(course => course !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !gender || !age || courses.length === 0) {
      alert("All Fields Required");
      return;
    }

    if (update) {
      const updateRecord = record.map((item) => {
        return item.id === update
          ? { id: update, name, email, password, phone, gender, age, courses }
          : item;
      });
      localStorage.setItem("users", JSON.stringify(updateRecord));
      setRecord(updateRecord);
      alert("Record Updated");
      setUpdate(""); // Reset the update state
    } else {
      let ifdup = record.some(
        (data) =>
          data.name === name ||
          data.age === age ||
          data.email === email ||
          data.password === password ||
          data.phone === phone
      );
      if (ifdup) {
        alert("Record Already Exists");
        return;
      }

      let newRecord = [
        ...record,
        { id: Math.floor(Math.random() * 10000), name, email, password, phone, gender, age, courses },
      ];
      localStorage.setItem("users", JSON.stringify(newRecord));
      setRecord(newRecord);
      alert("Record Added");
    }

    // Reset all form fields
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setGender("");
    setAge("");
    setCourses([]);

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  };

  const handleUpdate = (id) => {
    const update = record.find((data) => data.id === id)
    setName(update.name)
    setEmail(update.email)
    setAge(update.age)
    setPassword(update.password)
    setPhone(update.phone)
    setGender(update.gender)
    setCourses(update.courses || []);
    setUpdate(id)

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = update.courses.includes(checkbox.value);
    });
  }

  const handleDelete = (id) => {
    const deletedata = record.filter((data) => data.id != id)
    localStorage.setItem("users", JSON.stringify(deletedata))
    setRecord(deletedata)
    alert("Record Deleted")
  }
  return (
    <div align="center">
      <h1>React Crud Operaion with LocalStorage</h1>
      <form onSubmit={handleSubmit}>
        <table border={1} style={{ width: "200px" }}>
          <tr>
            <td>Name:-</td>
            <td><input type="text" value={name} placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Age:-</td>
            <td><input type="number" value={age} placeholder='Enter Your Age' onChange={(e) => setAge(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Email:-</td>
            <td><input type="email" value={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Password:-</td>
            <td><input type="password" value={password} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Gender:-</td>
            <td><input type="radio" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />Male
              <input type="radio" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />Female
            </td>
          </tr>
          <tr>
            <td>Phone:-</td>
            <td><input type="tel" value={phone} placeholder='Enter Your Phone' onChange={(e) => setPhone(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Courses:</td>
            <td>
              <label><input type="checkbox" value="Java" onChange={handleCourseChange} /> Java</label>
              <label><input type="checkbox" value="React" onChange={handleCourseChange} /> React</label>
              <label><input type="checkbox" value="Node.js" onChange={handleCourseChange} /> Node.js</label>
              <label><input type="checkbox" value="Python" onChange={handleCourseChange} /> Python</label>
              <label><input type="checkbox" value="Angular" onChange={handleCourseChange} /> Angular</label>
            </td>
          </tr>
        </table>
        <br />
        {
          update ? <button>Update</button> : <button>Add</button>
        }
      </form>
      <h2>All Record view</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Courses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val, index) => {
              const { id, name, email, age, phone, password, gender, courses } = val;
              return (
                <>
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{gender}</td>
                    <td>{phone}</td>
                    <td>{courses.join("  ,  ")}</td>
                    <td>
                      <button onClick={() => handleUpdate(id)}>Edit</button>
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
      <button onClick={() => {
        setRecord([]);
        localStorage.removeItem("users")
        alert("All Record Removed")
      }}>Remove All Task</button>
    </div>
  )
}
export default Crud;
