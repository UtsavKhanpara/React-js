import React from 'react'

const Recipi = ({ food }) => {
    // Helper to pick an emoji for ingredients
    const ingredientEmojis = ['🥕', '🍅', '🧄', '🧅', '🥦', '🍄', '🌶️', '🥬', '🫑', '🧀'];

    return (
        <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
            <h1 style={{ marginBottom: "20px", color: "#333" }}>🍽️ Recipi API</h1>

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
                        <th style={{ padding: "12px" }}>🆔 Id</th>
                        <th style={{ padding: "12px" }}>📛 Name</th>
                        <th style={{ padding: "12px" }}>🖼️ Image</th>
                        <th style={{ padding: "12px" }}>🍳 Cuisine</th>
                        <th style={{ padding: "12px" }}>🥗 Ingredients</th>
                        <th style={{ padding: "12px" }}>🎯 Difficulty</th>
                        <th style={{ padding: "12px" }}>⏱️ Prep Time (min)</th>
                        <th style={{ padding: "12px" }}>⭐ Rating</th>
                        <th style={{ padding: "12px" }}>👨‍👩‍👧‍👦 Servings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        food.map((val, index) => {
                            return (
                                <tr key={index} style={{ textAlign: "center" }}>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.id}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>🍽️ {val.name}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                        <img src={val.image} width="100" alt={val.name} />
                                    </td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>🌍 {val.cuisine}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                        <ul style={{ listStyle: "none", padding: 0 }}>
                                            {val.ingredients.map((ing, i) => (
                                                <li key={i}>{ingredientEmojis[i % ingredientEmojis.length]} {ing}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>🔥 {val.difficulty}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>⏰ {val.prepTimeMinutes}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>⭐ {val.rating}</td>
                                    <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>👥 {val.servings}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Recipi
