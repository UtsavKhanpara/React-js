import React from 'react';

const Tv = ({ tv }) => {
  console.log(tv);

  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Electronics API</h1>

      <table
        border={1}
        style={{
          borderCollapse: "collapse",
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Title</th>
            <th style={{ padding: "12px" }}>Image</th>
            <th style={{ padding: "12px" }}>Price</th>
            <th style={{ padding: "12px" }}>Brand</th>
            <th style={{ padding: "12px" }}>Model</th>
            <th style={{ padding: "12px" }}>Color</th>
            <th style={{ padding: "12px" }}>Category</th>
            <th style={{ padding: "12px" }}>Discount</th>
          </tr>
        </thead>
        <tbody>
          {tv.map((val, index) => {
            return (
              <tr key={index} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.title}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <img src={val.image} width={140} alt={val.title} />
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.price}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.brand}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.model}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.color}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.category}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.discount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tv;
