import React from 'react';

const Product = ({ pr }) => {
  console.log(pr);

  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Product API</h1>

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
            <th style={{ padding: "12px" }}>Product Id</th>
            <th style={{ padding: "12px" }}>Product Title</th>
            <th style={{ padding: "12px" }}>Brand</th>
            <th style={{ padding: "12px" }}>Category</th>
            <th style={{ padding: "12px" }}>Description</th>
            <th style={{ padding: "12px" }}>Image</th>
            <th style={{ padding: "12px" }}>Price</th>
            <th style={{ padding: "12px" }}>Reviews</th>
          </tr>
        </thead>
        <tbody>
          {
            pr.map((product, index) => {
              return (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{product.id}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{product.title}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{product.brand}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{product.category}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{product.description.slice(0, 10)}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    <img src={product.thumbnail} width={100} alt={product.title} />
                  </td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>${product.price}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "left" }}>
                    <div style={{
                      maxHeight: "150px",
                      overflowY: "auto",
                      padding: "8px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "8px",
                      border: "1px solid #ccc"
                    }}>
                      {
                        product.reviews.map((r, i) => (
                          <div key={i} style={{
                            backgroundColor: "#fff",
                            marginBottom: "10px",
                            padding: "10px",
                            borderRadius: "6px",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            fontSize: "14px"
                          }}>
                            <p><strong>{r.reviewerName}</strong> ({r.reviewerEmail})</p>
                            <p style={{ margin: "5px 0" }}>{r.comment}</p>
                            <p style={{ color: "#888", marginBottom: "0" }}>⭐ {r.rating} | 📅 {r.date}</p>
                          </div>
                        ))
                      }
                    </div>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Product;
