import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './edit.css'

const Edit = () => {
  let { editid } = useParams()
  let [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('users')) || [])

  let [formInput, setFormInput] = useState({
    name: "",
    age: "",
    gender: "",
    diagnosis: "",
    birthdate: "",
    contact: ""
  })

  useEffect(() => {
    if (editid) {
      let single = allrecord.find(val => val.id == editid)
      setFormInput(single)
    }
  }, [editid, allrecord])

  let navigator = useNavigate()

  let changeInput = (event) => {
    let { name, value } = event.target
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    if (editid) {
      let updated = allrecord.map(val => {
        if (val.id == editid) {
          return { ...val, ...formInput }
        }
        return val
      })

      setAllrecord(updated)
      localStorage.setItem("users", JSON.stringify(updated))
      alert("Updated Successfully")
    }
    navigator('/view')
  }

  return (
    <div className='form-wrapper'>
      <div className='form-card'>
        <h1 className='form-title'>✏️ Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input type="text" name='name' onChange={changeInput} value={formInput.name} required />
          </div>

          <div className='form-group'>
            <label>Age</label>
            <input type="number" name='age' onChange={changeInput} value={formInput.age} required />
          </div>

          <div className='form-group'>
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input type="radio" name='gender' value="male" onChange={changeInput} checked={formInput.gender === "male"} />
                Male
              </label>
              <label>
                <input type="radio" name='gender' value="female" onChange={changeInput} checked={formInput.gender === "female"} />
                Female
              </label>
            </div>
          </div>

          <div className='form-group'>
            <label>Diagnosis</label>
            <select name="diagnosis" onChange={changeInput} value={formInput.diagnosis} required>
              <option value="">-- Select --</option>
              <option value="Cancer">Cancer</option>
              <option value="Malaria">Malaria</option>
              <option value="Typhoid">Typhoid</option>
              <option value="Dengue">Dengue</option>
            </select>
          </div>

          <div className='form-group'>
            <label>Birthdate</label>
            <input type="date" name='birthdate' onChange={changeInput} value={formInput.birthdate} required />
          </div>

          <div className='form-group'>
            <label>Contact</label>
            <input type="number" name='contact' onChange={changeInput} value={formInput.contact} required />
          </div>

          <div className="form-actions">
            <input type="submit" value="Update" className="submit-btn" />
            <Link to="/view" className="link-btn">📋 View Records</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit
