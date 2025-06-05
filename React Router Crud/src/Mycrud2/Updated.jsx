import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Updated = () => {

  const [doctorname, setDoctorName] = useState("");
  const [age, setAge] = useState("");
  const [degree, setDegree] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("doctor")) || [])

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setDoctorName(location?.state?.doctorname)
    setAge(location?.state?.age)
    setDegree(location?.state?.degree)
  }, [location?.state])

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateRecord = record.map((val) => {
      if (val.id === location?.state?.id) {
        val.doctorname = doctorname
        val.age = age
        val.degree = degree
      }
      return val;
    })
    setRecord(updateRecord)
    localStorage.setItem("doctor", JSON.stringify(updateRecord))
    navigate('/');
  }

  return (
    <div align="Center">
      <h1>Edit Doctor Record</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead>
            <tr>
              <td>Doctor Name:-</td>
              <td><input type="text" placeholder='Enter Doctor Name' value={doctorname} onChange={(e) => setDoctorName(e.target.value)} /></td>
            </tr>
            <tr>
              <td>Doctor Degree:-</td>
              <td>
                <select value={degree} onChange={(e) => setDegree(e.target.value)}>
                  <option value=""> ---Selected Doctor Degree ---</option>
                  <option value="PHD">PHD</option>
                  <option value="MD">MD</option>
                  <option value="B.H.M.S">B.H.M.S</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Age:-</td>
              <td><input type="number" placeholder='Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)} /></td>
            </tr>

            <input type="submit" value="Add" />
          </thead>
        </table>
      </form>
      <Link to={'/'}>View</Link>
    </div>
  )
}

export default Updated
