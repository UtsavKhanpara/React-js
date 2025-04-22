import React from 'react';

const Book = ({ bookdata }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>📚 My Book API</h1>

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
            <th style={{ padding: "12px" }}>Title</th>
            <th style={{ padding: "12px" }}>Description</th>
            <th style={{ padding: "12px" }}>Author</th>
            <th style={{ padding: "12px" }}>Publication Year</th>
            <th style={{ padding: "12px" }}>📖 Genre</th>
          </tr>
        </thead>
        <tbody>
          {
            bookdata.map((val, index) => (
              <tr key={index} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.title}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "left" }}>
                  {val.description}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.author}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.publication_year}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {
                      val.genre.map((g, i) => (
                        <li key={i}>📗 {g}</li>
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

export default Book;
