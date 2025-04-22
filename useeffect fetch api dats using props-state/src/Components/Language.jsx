import React from 'react';

const Language = ({ landata }) => {
    return (
        <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
            <h1 style={{ marginBottom: "20px", color: "#333" }}>🗣️ My Language API</h1>

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
                        <th style={{ padding: "12px" }}>ID</th>
                        <th style={{ padding: "12px" }}>Name</th>
                        <th style={{ padding: "12px" }}>Speakers</th>
                        <th style={{ padding: "12px" }}>Region</th>
                        <th style={{ padding: "12px" }}>Script</th>
                        <th style={{ padding: "12px" }}>Family</th>
                        <th style={{ padding: "12px" }}>Notes</th>
                        <th style={{ padding: "12px" }}>Official Status</th>
                        <th style={{ padding: "12px" }}>Dialects</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        landata.map((l, i) => (
                            <tr key={i} style={{ textAlign: "center" }}>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{l.id}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{l.name}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{l.speakers}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{l.region}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{l.script}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{l.family}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "left" }}>{l.notes}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{l.officialStatus}</td>
                                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {
                                            l.dialects.map((d, i) => (
                                                <li key={i}>🔤 {d}</li>
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

export default Language;
