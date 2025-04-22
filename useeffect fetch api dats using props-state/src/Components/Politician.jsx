import React from 'react';

const Politician = ({ politicsdata }) => {
  return (
    <div align="center" style={{ padding: '30px', backgroundColor: '#f2f2f2' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>🏛️ My Politician API</h1>

      <table
        border={1}
        cellPadding={10}
        style={{
          borderCollapse: 'collapse',
          width: '95%',
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <thead style={{ backgroundColor: '#007BFF', color: 'white' }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Country</th>
            <th>Party</th>
            <th>Position</th>
            <th>Years in Office</th>
            <th>Image</th>
            <th>Biography</th>
          </tr>
        </thead>
        <tbody>
          {politicsdata.map((p, i) => (
            <tr key={i} style={{ textAlign: 'center' }}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.dob}</td>
              <td>{p.country}</td>
              <td>{p.party}</td>
              <td>{p.position}</td>
              <td>{p.years_in_office}</td>
              <td>
                <img
                  src={p.image}
                  alt={p.name}
                  width={200}
                  height={250}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </td>
              <td style={{ textAlign: 'left' }}>{p.biography.slice(0, 100)}...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Politician;
