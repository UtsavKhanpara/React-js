import React from 'react';
const View = ({ record, handleDelete, handleUpdate }) => {
  return (
    <div className="view-container">
      <h1>Patient Records</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Diagnosis</th>
            <th>Birth Date</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {record.map((val, index) => {
            const { id, name, age, gender, diagnosis, birthdate, contact } = val;
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{diagnosis}</td>
                <td>{birthdate}</td>
                <td>{contact}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleUpdate(id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default View;
