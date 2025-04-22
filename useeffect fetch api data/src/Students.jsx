import React, { useEffect, useState } from 'react';

const Students = () => {
    const [student, setStudent] = useState([]);

    const fetchStudents = () => {
        fetch('https://www.freetestapi.com/api/v1/students')
            .then(res => res.json())
            .then((stud) => {
                setStudent(stud);
                console.log(stud);
            });
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div align="center">
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>My Students API</h1>

            <table border={1} style={{
                width: "90%",
                margin: "auto",
                borderCollapse: "collapse",
                textAlign: "center",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
            }}>
                <thead>
                    <tr style={{
                        backgroundColor: "#28a745",
                        color: "white",
                        fontSize: "18px",
                        height: "40px"
                    }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Gender</th>
                        <th>Courses</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Street</th>
                        <th>Zip</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((stud, index) => (
                            <tr key={index}
                                style={{
                                    backgroundColor: index % 2 === 0 ? "#f8f9fa" : "white",
                                    transition: "background 0.3s"
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = "#d1ecf1"}
                                onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? "#f8f9fa" : "white"}
                            >
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.id}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.name}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                    <img src={stud.image} width="80px" height="80px" alt="student" style={{ borderRadius: "5px" }} />
                                </td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.gender}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>
                                    <ul style={{ paddingLeft: "20px", margin: 0 }}>
                                        {
                                            stud.courses.map((course, i) => (
                                                <li key={i}>{course}</li>
                                            ))
                                        }
                                    </ul>
                                </td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.address?.city}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.address?.country}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.address?.street}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.address?.zip}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.email}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.phone}</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{stud.gpa}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Students;
