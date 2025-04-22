import React from 'react';

const Post = ({ postdata }) => {
  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Post API</h1>

      <table border={1} style={{
        borderCollapse: "collapse",
        width: "95%",  // Increased width
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ padding: "12px" }}>Id</th>
            <th style={{ padding: "12px" }}>Title</th>
            <th style={{ padding: "12px" }}>Body</th>
            <th style={{ padding: "12px" }}>Tags</th>
            <th style={{ padding: "12px" }}>Reactions</th>
            <th style={{ padding: "12px" }}>Views</th>
          </tr>
        </thead>
        <tbody>
          {postdata.map((post, index) => {
            return (
              <tr key={index} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{post.id}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", fontWeight: "bold" }}>{post.title}</td>
                <td style={{
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                  maxWidth: "500px", // Allowing more space for longer text
                  wordWrap: "break-word"
                }}>{post.body}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {post.tags.map((tag, i) => (
                      <li key={i} style={{ fontWeight: "bold", color: "purple" }}>#{tag}</li>
                    ))}
                  </ul>
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", fontSize: "16px" }}>
                  👍 {post.reactions.likes} &nbsp;&nbsp; 👎 {post.reactions.dislikes}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{post.views}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Post;
