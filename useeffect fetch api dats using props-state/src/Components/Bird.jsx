import React from 'react';

const Bird = ({ birddata }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "32px" }}>Bird API</h1>

      <table
        border={1}
        style={{
          borderCollapse: "collapse",
          width: "90%",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={thStyle}>Id</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Species</th>
            <th style={thStyle}>Family</th>
            <th style={thStyle}>Habitat</th>
            <th style={thStyle}>Place Found</th>
            <th style={thStyle}>Wingspan (cm)</th>
          </tr>
        </thead>
        <tbody>
          {
            birddata.map((bird, index) => (
              <tr key={index} style={{ textAlign: "center", backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff" }}>
                <td style={tdStyle}>{bird.id}</td>
                <td style={tdStyle}>{bird.name}</td>
                <td style={tdStyle}>{bird.species}</td>
                <td style={tdStyle}>{bird.family}</td>
                <td style={tdStyle}>{bird.habitat}</td>
                <td style={tdStyle}>{bird.place_of_found}</td>
                <td style={tdStyle}>{bird.wingspan_cm}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "14px",
  fontSize: "16px"
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  fontSize: "15px"
};

export default Bird;
