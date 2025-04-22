import React from 'react'

const Cart = ({ cartsdata }) => {

  return (
    <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Cart API</h1>

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
            <th style={{ padding: "12px" }}>Products</th>
            <th style={{ padding: "12px" }}>Total</th>
            <th style={{ padding: "12px" }}>Total Products</th>
            <th style={{ padding: "12px" }}>Total Quantity</th>
            <th style={{ padding: "12px" }}>Discounted Total</th>
          </tr>
        </thead>
        <tbody>
          {
            cartsdata.map((cart, index) => {
              return (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{cart.id}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    <ul style={{ padding: "0", margin: "0" }}>
                      {
                        cart.products.map((product, i) => (
                          <li key={i} style={{
                            listStyle: "none",
                            padding: "4px 0",
                            color: "#555"
                          }}>
                            {product.title}
                          </li>
                        ))
                      }
                    </ul>
                  </td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>${cart.total}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{cart.totalProducts}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{cart.totalQuantity}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>${cart.discountedTotal}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cart
