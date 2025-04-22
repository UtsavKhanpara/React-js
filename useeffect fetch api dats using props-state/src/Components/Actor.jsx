import React from 'react';

const Actor = ({ actordata }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>🎬 My Actor API</h1>

      <table border={1} style={{
        borderCollapse: "collapse",
        width: "90%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "12px" }}>Id</th>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Image</th>
            <th style={{ padding: "12px" }}>Biography</th>
            <th style={{ padding: "12px" }}>Birth Year</th>
            <th style={{ padding: "12px" }}>Death Year</th>
            <th style={{ padding: "12px" }}>Nationality</th>
            <th style={{ padding: "12px" }}>🏆 Awards</th>
          </tr>
        </thead>
        <tbody>
          {
            actordata.map((a, i) => (
              <tr key={i} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.name}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <img src={a.image} alt={a.name} width="120" style={{ borderRadius: "8px" }} />
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "left" }}>{a.biography}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.birth_year}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.death_year || "—"}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.nationality}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {
                      a.awards.map((award, index) => (
                        <li key={index}>🏅 {award}</li>
                      ))
                    }
                  </ul>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Actor;
