import React from 'react';

const Airpot = ({ airpotdata }) => {
    return (
        <div
            align="center"
            style={{
                padding: "30px",
                backgroundColor: "#f9f9f9", // light, clean background
                minHeight: "100vh"
            }}
        >
            <h1 style={{ color: "#2c3e50", marginBottom: "20px" }}>🛫 My Airport API</h1>

            <table
                border={1}
                cellPadding={10}
                style={{
                    borderCollapse: "collapse",
                    width: "90%",
                    backgroundColor: "#ffffff", // white table background
                    boxShadow: "0px 0px 8px rgba(0,0,0,0.1)"
                }}
            >
                <thead style={{ backgroundColor: "#4CAF50", color: "white" }}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Country</th>
                        <th style={{ width: "250px" }}>Terminals</th>
                        <th style={{ width: "200px" }}>Airlines</th>
                        <th style={{ width: "200px" }}>Services</th>
                        <th style={{ width: "180px" }}>Contact Info</th>
                    </tr>
                </thead>

                <tbody>
                    {airpotdata.map((airpot, index) => (
                        <tr key={index}>
                            <td>{airpot.id}</td>
                            <td>{airpot.name}</td>
                            <td>
                                <strong>Latitude:</strong> {airpot.location.latitude}<br />
                                <strong>Longitude:</strong> {airpot.location.longitude}
                            </td>
                            <td>{airpot.country}</td>

                            {/* Terminals */}
                            <td>
                                <table border={1} cellPadding={5} style={{ width: "100%", backgroundColor: "#f0f0f0" }}>
                                    <thead>
                                        <tr>
                                            <th>Terminal</th>
                                            <th>Gate</th>
                                            <th>Airlines</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {airpot.terminals.map((terminal, i) =>
                                            terminal.gates.map((gate, j) => (
                                                <tr key={`${i}-${j}`}>
                                                    <td>{terminal.name}</td>
                                                    <td>{gate.gate_number}</td>
                                                    <td>{gate.airlines.join(' --- ')}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </td>

                            {/* Airlines */}
                            <td>
                                <table border={1} cellPadding={5} style={{ width: "100%", textAlign: "center", backgroundColor: "#f0f0f0" }}>
                                    <thead>
                                        <tr>
                                            <th>Airline</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {airpot.airlines.map((airline, i) => (
                                            <tr key={i}>
                                                <td>✈️ {airline}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>

                            {/* Services */}
                            <td>
                                <table border={1} cellPadding={5} style={{ width: "100%", textAlign: "center", backgroundColor: "#f0f0f0" }}>
                                    <thead>
                                        <tr>
                                            <th>Service</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {airpot.services.map((service, i) => (
                                            <tr key={i}>
                                                <td>🔹 {service}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>

                            {/* Contact Info */}
                            <td style={{ textAlign: "center", fontSize: "14px", backgroundColor: "#fefefe" }}>
                                📞 <strong>Phone:</strong><br /> {airpot.contact_info.phone}<br />
                                📧 <strong>Email:</strong><br /> {airpot.contact_info.email}<br />
                                🌐 <strong>Website:</strong><br />
                                <a href={airpot.contact_info.website} target="_blank" rel="noopener noreferrer">
                                    {airpot.contact_info.website}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Airpot;
