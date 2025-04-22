import React, { useEffect, useState } from 'react'

const Userposts = () => {
    let [users, setUSers] = useState([]);

    let postUser = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((user) => {
                setUSers(user.posts)
                console.log(user);
            })
    }

    useEffect(() => {
        postUser();
    }, []);

    return (
        <div align="center" style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>My PostUser API</h1>

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
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Tags</th>
                        <th>Reactions</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((value, indexs) => {
                            return (
                                <tr key={indexs} style={{
                                    backgroundColor: indexs % 2 === 0 ? "#f8f9fa" : "white",
                                    transition: "background 0.3s"
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.background = "#d4edda"}
                                    onMouseOut={(e) => e.currentTarget.style.background = indexs % 2 === 0 ? "#f8f9fa" : "white"}
                                >
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{value.id}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{value.title}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>{value.body}</td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                                            {
                                                value.tags.map((tags, index) => {
                                                    return (
                                                        <li key={index} style={{
                                                            textAlign: "center",
                                                            fontSize: "15px",
                                                            padding: "5px",
                                                            display: "inline-block",
                                                            backgroundColor: "gray",
                                                            borderRadius: "1px",
                                                            margin: "5px",
                                                            paddingLeft: "10px",
                                                            paddingRight: "10px"
                                                        }}>{tags}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd", color: "#28a745", fontWeight: "bold" }}>
                                        👍 {value.reactions.likes} / 👎 {value.reactions.dislikes}
                                    </td>
                                    <td style={{ padding: "10px", border: "1px solid #ddd", fontWeight: "bold", color: "#007bff" }}>
                                        👁️ {value.views}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Userposts
