import React, { useEffect, useState } from 'react';

const Dog = () => {
    const [doggy, setDogs] = useState([]);

    const pexelsDogImages = [
        "https://images.pexels.com/photos/4587992/pexels-photo-4587992.jpeg",
        "https://images.pexels.com/photos/5731861/pexels-photo-5731861.jpeg",
        "https://images.pexels.com/photos/7210757/pexels-photo-7210757.jpeg",
        "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
        "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        "https://images.pexels.com/photos/4588060/pexels-photo-4588060.jpeg",
        "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
        "https://images.pexels.com/photos/1108098/pexels-photo-1108098.jpeg",
        "https://images.pexels.com/photos/14440674/pexels-photo-14440674.jpeg"
    ];

    const myDog = () => {
        fetch('https://www.freetestapi.com/api/v1/dogs')
            .then(res => res.json())
            .then((dogs) => {
                setDogs(dogs);
            });
    };

    useEffect(() => {
        myDog();
    }, []);

    return (
        <div align="center" style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>My Dog API with Real Images</h1>

            <table border={1} style={{
                width: "90%",
                margin: "auto",
                borderCollapse: "collapse",
                textAlign: "center",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        fontSize: "18px",
                        height: "40px"
                    }}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Colors</th>
                        <th>Lifespan</th>
                        <th>Origin</th>
                        <th>Size</th>
                        <th>Temperament</th>
                    </tr>
                </thead>
                <tbody>
                    {doggy.map((dog, index) => (
                        <tr key={index} style={{
                            backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
                            transition: "background 0.3s"
                        }}
                            onMouseOver={(e) => e.currentTarget.style.background = "#d4edda"}
                            onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? "#f8f9fa" : "white"}
                        >
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{dog.id}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{dog.name}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <img
                                    src={pexelsDogImages[index % pexelsDogImages.length]}
                                    width="100px"
                                    style={{ borderRadius: "8px", objectFit: "cover" }}
                                    alt={dog.name}
                                />
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                                    {dog.colors?.map((color, i) => (
                                        <li key={i} style={{
                                            textAlign: "center",
                                            fontSize: "15px",
                                            padding: "5px",
                                            display: "inline-block",
                                            backgroundColor: "lightblue",
                                            borderRadius: "5px",
                                            margin: "5px",
                                            paddingLeft: "10px",
                                            paddingRight: "10px"
                                        }}>{color}</li>
                                    ))}
                                </ul>
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{dog.lifespan}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{dog.origin}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{dog.size}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{dog.temperament}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dog;
