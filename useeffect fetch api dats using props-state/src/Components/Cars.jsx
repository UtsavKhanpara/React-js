import React from 'react';

const carImages = [
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg",
    "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
    "https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg",
    "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
    "https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg",
    "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
    "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg",
    "https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg",
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg",
    "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg"
];

const Cars = ({ cars }) => {
    return (
        <div align="center" style={{ backgroundColor: "#f9f9f9", padding: "30px" }}>
            <h1 style={{ marginBottom: "20px", color: "#333" }}>Cars Api</h1>

            <table
                border={1}
                style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    overflow: "hidden"
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Make</th>
                        <th style={thStyle}>Model</th>
                        <th style={thStyle}>Image</th>
                        <th style={thStyle}>Year</th>
                        <th style={thStyle}>Color</th>
                        <th style={thStyle}>Price</th>
                        <th style={thStyle}>Fuel Type</th>
                        <th style={thStyle}>Transmission</th>
                        <th style={thStyle}>Engine</th>
                        <th style={thStyle}>Horsepower</th>
                        <th style={thStyle}>Features</th>
                        <th style={thStyle}>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map((car, index) => (
                            <tr key={index} style={{ textAlign: "center" }}>
                                <td style={tdStyle}>{car.id}</td>
                                <td style={tdStyle}>{car.make}</td>
                                <td style={tdStyle}>{car.model}</td>
                                <td style={tdStyle}>
                                    <img
                                        src={carImages[index % carImages.length]}
                                        width={100}
                                        height={60}
                                        alt="Car"
                                        style={{ borderRadius: "1px", objectFit: "cover" }}
                                    />
                                </td>
                                <td style={tdStyle}>{car.year}</td>
                                <td style={tdStyle}>{car.color}</td>
                                <td style={tdStyle}>${car.price}</td>
                                <td style={tdStyle}>{car.fuelType}</td>
                                <td style={tdStyle}>{car.transmission}</td>
                                <td style={tdStyle}>{car.engine}</td>
                                <td style={tdStyle}>{car.horsepower} HP</td>
                                <td style={tdStyle}>
                                    <ul style={{ paddingLeft: "16px", textAlign: "left", margin: 0 }}>
                                        {
                                            car.features.map((f, i) => (
                                                <li key={i}>{f}</li>
                                            ))
                                        }
                                    </ul>
                                </td>
                                <td style={tdStyle}>{car.owners}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

const thStyle = {
    padding: "12px"
};

const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd"
};

export default Cars;
