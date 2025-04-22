import React from 'react';

const Cat = ({ catdata }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>🐱 My Cat Api</h1>

      <table border={1} style={{
        borderCollapse: "collapse",
        width: "80%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "12px" }}>Id</th>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Description</th>
            <th style={{ padding: "12px" }}>Origin</th>
            <th style={{ padding: "12px" }}>Temperament</th>
            <th style={{ padding: "12px" }}>Colors</th>
          </tr>
        </thead>
        <tbody>
          {
            catdata.map((cat, index) => (
              <tr key={index} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{cat.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{cat.name}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {cat.description.slice(0, 230)}...
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{cat.origin}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{cat.temperament}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {cat.colors.map((c, i) => (
                      <li key={i}>🎨 {c}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cat;
