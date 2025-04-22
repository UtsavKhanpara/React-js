import React from 'react';

const Currency = ({ currencydata }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>💱 My Currency API</h1>

      <table border={1} style={{
        borderCollapse: "collapse",
        width: "85%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Description</th>
            <th style={{ padding: "12px" }}>Code</th>
            <th style={{ padding: "12px" }}>Symbol</th>
            <th style={{ padding: "12px" }}>Exchange Rate</th>
            <th style={{ padding: "12px" }}>Countries</th>
            <th style={{ padding: "12px" }}>Subunits</th>
          </tr>
        </thead>
        <tbody>
          {
            currencydata.map((c, i) => (
              <tr key={i} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.name}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.description}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.code}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.symbol}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.exchange_rate}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {c.countries.map((country, index) => (
                      <li key={index}>🌍 {country}</li>
                    ))}
                  </ul>
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.subunits}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Currency;
