import React from 'react';

const Actress = ({ actressdata }) => {
    return (
        <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
            <h1 style={{ marginBottom: "20px", color: "#333" }}>Actress API</h1>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px"
            }}>
                {actressdata.map((a, i) => (
                    <div key={i} style={{
                        backgroundColor: "#fff",
                        width: "280px",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        textAlign: "center"
                    }}>
                        <img
                            src={a.image}
                            alt={a.name}
                            width={160}
                            height={240}
                            style={{
                                objectFit: "cover",
                                borderRadius: "1px",
                                marginBottom: "12px",
                                backgroundColor: "#f1f1f1"
                            }}
                        />

                        <h3 style={{ color: "#333", margin: "10px 0" }}>{a.name} 🎬</h3>
                        <p style={text}><strong>🆔 ID:</strong> {a.id}</p>
                        <p style={text}><strong>🎂 Birth Year:</strong> {a.birth_year}</p>
                        <p style={text}><strong>🌍 Nationality:</strong> {a.nationality}</p>
                        <p style={text}><strong>🎥 Movie:</strong> {a.most_famous_movies}</p>
                        <p style={text}><strong>🏆 Awards:</strong> {a.awards}</p>
                        <p style={text}><strong>📝 Bio:</strong> {a.biography.slice(0, 50)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const text = {
    margin: "5px 0",
    fontSize: "14px",
    color: "#666"
};

export default Actress;
