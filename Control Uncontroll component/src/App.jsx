import React, { useState } from 'react';
const App = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
   const obj={
    ...input,
    [name]:value
   }
   setInput(obj)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", input);
  };

  return (
    <div align="center">
      <h1>Form Data</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:- </label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={handleChange}
          value={input.name}
        />
        <br /><br />
        <label>Enter Email:- </label>
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={input.email}
        />
        <br /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default App;
