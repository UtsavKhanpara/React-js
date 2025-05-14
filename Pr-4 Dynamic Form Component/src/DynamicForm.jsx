import React, { useState } from 'react';
import './DynamicForm.css';

const DynamicForm = () => {
  const [input, setInput] = useState([
    { id:"", name: '', email: '', salary: '' }
  ]);

  const addInput = () => {
    setInput([...input, { id:Math.floor(Math.random()*10000), name: '', email: '', salary: '' }]);
  };

  const removeInput = (id) => {
    setInput(input.filter(item => item.id !== id));
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedInputs = input.map(item =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setInput(updatedInputs);
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", input);

    setInput([{
        id: "",
        name:"",
        email:"",
        salary:""
    }])
  };

  return (
    <div className="tbl-main" align="center">
      <h1>React - Add & Delete Table Rows Dynamically</h1>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th>
              <button className='addBtn' onClick={addInput}>+</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {input.map((item, index) => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={item.name}
                  onChange={(e) => handleInputChange(e, item.id)}
                />
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email ID"
                  value={item.email}
                  onChange={(e) => handleInputChange(e, item.id)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="salary"
                  placeholder="Enter Your Salary"
                  value={item.salary}
                  onChange={(e) => handleInputChange(e, item.id)}
                />
              </td>
              <td>
                {index > 0 && (
                  <button className="removeBtn" onClick={() => removeInput(item.id)}>X</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button className="submitBtn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DynamicForm;
