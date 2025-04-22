import React from 'react';

const Todo = ({ todolistdata }) => {
    console.log(todolistdata);

    return (
        <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
            <h1 style={{ marginBottom: "20px", color: "#333" }}>✅ My Todo API</h1>

            <table style={{
                borderCollapse: "collapse",
                width: "80%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden"
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: "#4CAF50",
                        color: "white"
                    }}>
                        <th style={{ padding: "12px" }}>🆔 Id</th>
                        <th style={{ padding: "12px" }}>📝 Todo</th>
                        <th style={{ padding: "12px" }}>✅ Completed</th>
                        <th style={{ padding: "12px" }}>👤 User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todolistdata.map((val, index) => (
                            <tr
                                key={index}
                                style={{
                                    textAlign: "center",
                                    transition: "background-color 0.3s ease",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f1f1f1"}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = "white"}
                            >
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.id}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.todo}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                    {
                                        val.completed
                                            ? <span style={{ color: "green", fontWeight: "bold" }}>✅ True</span>
                                            : <span style={{ color: "red", fontWeight: "bold" }}>❌ False</span>
                                    }
                                </td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{val.userId}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todo;
