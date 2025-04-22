import React from 'react';

const Quotes = ({ quotes }) => {
  console.log(quotes);

  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Quotes Api</h1>

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
            <th style={{ padding: "12px" }}>Author</th>
            <th style={{ padding: "12px" }}>Quote</th>
          </tr>
        </thead>
        <tbody>
          {
            quotes.map((q, i) => (
              <tr key={i} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{q.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{q.author}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{q.quote}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Quotes;
