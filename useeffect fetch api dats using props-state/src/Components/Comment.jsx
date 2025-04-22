import React from 'react';

const Comment = ({ cmt }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Comment Api</h1>

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
            <th style={{ padding: "12px" }}>User</th>
            <th style={{ padding: "12px" }}>Body</th>
            <th style={{ padding: "12px" }}>Likes</th>
            <th style={{ padding: "12px" }}>PostId</th>
          </tr>
        </thead>
        <tbody>
          {
            cmt.map((c, i) => (
              <tr key={i} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {c.user.fullName} ({c.user.username})
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.body}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.likes}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{c.postId}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Comment;
