import React, { useState } from 'react'
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !company || !phone || !message) {
      alert("Please fill all the fields");
      return false;
    }

    const db = getDatabase(app);
    const id = Math.floor(Math.random() * 1000000);

    set(ref(db, `users/${id}`), {
      name: name,
      email: email,
      company: company,
      phone: phone,
      message: message
    })
    alert('Data Added Successfilly');
  }

  return (
    <div align="center">
      <div className="container">
        <div className="left">
          <h3>Sample Company</h3>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div className="right">
          <h2>Email Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
            <div className="row">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Add