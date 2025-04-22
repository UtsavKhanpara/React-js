import React, { useEffect, useState } from 'react'

const Settimer = () => {

    let [Count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(Count + 1);
        }, 1000);
    })

    return (
        <>
            <div style={{
                width: "350px",
                margin: "100px auto",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                backgroundColor: "#ffffff",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                transition: "transform 0.3s",
                transform: "skew(0.8)"
            }}>
                <h1 style={{
                    color: "#343a40",
                    marginBottom: "20px",
                    fontSize: "28px"
                }}>Timing App</h1>

                <h1 style={{
                    fontSize: "40px",
                    color: "skyblue",
                    marginTop: "10px"
                }}>Count: {Count}</h1>
            </div>
        </>
    )
}

export default Settimer
