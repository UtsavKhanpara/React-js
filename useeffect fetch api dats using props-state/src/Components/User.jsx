import React from 'react';
const User = ({ users }) => {
    console.log(users);
    return (
        <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
            <h1 style={{ marginBottom: "20px", color: "#333" }}>User Data API</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px"
            }}>
                {users.map((u, index) => (
                    <div key={index} style={{
                        backgroundColor: "#fff",
                        width: "280px",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        textAlign: "center"
                    }}>
                        <img src={u.image} alt={u.username} width={80} height={80}
                            style={{ borderRadius: "50%", border: "2px solid #4CAF50" }} />

                        <h3 style={{ color: "#333", margin: "10px 0" }}>{u.username} ⭐</h3>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>👤 Name:</strong> {u.firstName}
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>⚥ Gender:</strong> {u.gender}
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>💼 Role:</strong> {u.role}
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>💇‍♂️ Hair:</strong> {u.hair.color} / {u.hair.type}
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>👁️ Eye Color:</strong> {u.eyeColor}
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>📧 Email:</strong> {u.email}
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>📏 Height:</strong> {u.height} cm
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>⚖️ Weight:</strong> {u.weight} kg
                        </p>
                        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                            <strong>📞 Phone:</strong> {u.phone}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
