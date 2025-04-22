import { useEffect, useState } from "react";
import Recipi from "./Recipi";
import Userposts from "./Userposts";
import Dog from "./Dog";
import Students from "./Students";
import Settimer from "./Settimer";
import Tvdata from "./Tvdata";


function App() {

  let [posts, setPosts] = useState([])

  let getpost = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        setPosts(data.products);
        console.log(data);
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getpost()
    })
  }, [])

  return (
    <>
      <Settimer />

      <Tvdata/>

      <h1 style={{
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "32px",
        color: "#333",
        fontFamily: "Arial, sans-serif"
      }}>My Product Api</h1>

      <table border={1} style={{
        width: "90%",
        margin: "auto",
        borderCollapse: "collapse",
        textAlign: "center",
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
        <thead>
          <tr style={{
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "18px",
            height: "50px"
          }}>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Id</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Title</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Description</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Category</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Dimensions</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((val, index) => {
              return (
                <tr key={index} style={{
                  backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                  transition: "background 0.3s ease-in-out"
                }}
                  onMouseOver={(e) => e.currentTarget.style.background = "#e3f2fd"}
                  onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? "#f8f9fa" : "#ffffff"}
                >
                  <td style={{ padding: "12px", border: "1px solid #ddd" }}>{val.id}</td>
                  <td style={{ padding: "12px", border: "1px solid #ddd" }}>{val.title}</td>
                  <td style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>{val.description}</td>
                  <td style={{ padding: "12px", border: "1px solid #ddd" }}>{val.category}</td>
                  <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                    <span style={{ display: "block", marginBottom: "4px" }}>Width: {val.dimensions.width}</span>
                    <span style={{ display: "block", marginBottom: "4px" }}>Height: {val.dimensions.height}</span>
                    <span>Depth: {val.dimensions.depth}</span>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <Recipi />

      <Userposts />

      <Dog />

      <Students />
    </>
  )
}

export default App;
