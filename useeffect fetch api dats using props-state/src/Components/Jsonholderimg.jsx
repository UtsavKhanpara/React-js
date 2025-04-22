import React from 'react';

const Jsonholderimg = ({ imgdata }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ color: "#333", marginBottom: "20px" }}>20 Image Records (Link Only)</h1>

      <table
        border={1}
        style={{
          borderCollapse: "collapse",
          width: "85%",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "12px" }}>Id</th>
            <th style={{ padding: "12px" }}>Title</th>
            <th style={{ padding: "12px" }}>Thumbnail Link</th>
            <th style={{ padding: "12px" }}>Image Link</th>
          </tr>
        </thead>
        <tbody>
          {
            imgdata.map((val, index) => {
              if (index < 20) {
                return (
                  <tr key={index} style={{ textAlign: "center" }}>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.id}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.title}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                      <a href={val.thumbnailUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "underline" }}>
                        {val.thumbnailUrl}
                      </a>
                    </td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                      <a href={val.url} target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "underline" }}>
                        {val.url}
                      </a>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Jsonholderimg;
