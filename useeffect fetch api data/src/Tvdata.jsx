import React, { useEffect, useState } from 'react'

const Tvdata = () => {

    let [lcdtv, setLcdTv] = useState([]);

    let ledTv = () => {
        fetch(`https://fakestoreapi.in/api/products?page=2`)
            .then(res => res.json())
            .then((tvdata) => {
                setLcdTv(tvdata.products)
                console.log(tvdata.products);
            })
    }

    useEffect(() => {
        ledTv();
    }, [])

    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "#f2f9ff",
            padding: "20px",
            fontFamily: "Segoe UI, sans-serif"
        }}>
            <h1 style={{
                textAlign: "center",
                color: "#2c3e50",
                fontSize: "32px",
                marginBottom: "30px",
                textShadow: "1px 1px 2px #ccc"
            }}>My Electronics Gadget Api</h1>

            <table border={1} style={{
                width: "95%",
                margin: "auto",
                borderCollapse: "collapse",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)"
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        fontSize: "16px",
                        height: "50px"
                    }}>
                        <th>id</th>
                        <th>title</th>
                        <th>brand</th>
                        <th>category</th>
                        <th>image</th>
                        <th>model</th>
                        <th>color</th>
                        <th>discount</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lcdtv.map((lcd, index) => {
                            return (
                                <tr
                                    key={index}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                                        transition: "background 0.3s"
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = "#d1ecf1"}
                                    onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? "#f8f9fa" : "#ffffff"}
                                >
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.id}</td>
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.title}</td>
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.brand}</td>
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.category}</td>
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6"
                                    }}>
                                        <img src={lcd.image} width={200} height={150} style={{
                                            borderRadius: "8px",
                                            objectFit: "cover",
                                            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
                                        }} />
                                    </td>
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.model}</td>
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.color}</td>

                                    
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.discount}</td>
                                    <td style={{
                                        padding: "10px",
                                        border: "1px solid #dee2e6",
                                        fontSize: "15px"
                                    }}>{lcd.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tvdata;
