import React, { useEffect, useState } from 'react';

const Recipi = () => {

  let [foods, setFoods] = useState([]);

  let food = () => {
    fetch('https://dummyjson.com/recipes?sortBy=name&order=asc')
      .then(res => res.json())
      .then((r) => {
        setFoods(r.recipes)
        console.log(r);
      })
  }

  useEffect(() => {
    food();
  }, []) 
  

  return (
    <div align="center">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>My Recipe Api</h1>

      <table border={1} style={{
        width: "90%",
        margin: "auto",
        borderCollapse: "collapse",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
      }}>
        <thead>
          <tr style={{
            backgroundColor: "#28a745",
            color: "white",
            fontSize: "18px",
            height: "40px"
          }}>
            <th>Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Ingredients</th>
            <th>Cuisine</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {
            foods.map((f, i) => {
              return (
                <tr key={i} style={{
                  backgroundColor: i % 2 === 0 ? "#f8f9fa" : "white",
                  transition: "background 0.3s"
                }}
                  onMouseOver={(e) => e.currentTarget.style.background = "#d1ecf1"}
                  onMouseOut={(e) => e.currentTarget.style.background = i % 2 === 0 ? "#f8f9fa" : "white"}
                >
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{f.id}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{f.name}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    <img src={f.image} width="80px" height="80px" style={{ borderRadius: "5px" }} />
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{f.ingredients.join(", ")}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{f.cuisine}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{f.difficulty}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Recipi;
