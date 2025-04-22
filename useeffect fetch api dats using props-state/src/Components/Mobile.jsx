import React from 'react'

const Mobile = ({ mb }) => {
    return (
        <div align="center">
            <h1>My Mobile Api</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {mb.map((m, i) => (
                        <tr key={i}>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>
                                {m.data ? JSON.stringify(m.data) : "No Data"}
                            </td> 
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Mobile
