import React from "react";

const Todo = ({ data }) => {
  return (
    <>
      <div align="center">
        <h1>Todo App</h1>

        <table
          border={1}
          style={{
            color: "white",
            backgroundColor: "black",
            border: "1px solid white",
            margin: "20px",
            width: "80%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <td style={{ padding: "12px", fontSize: "18px", backgroundColor: "gray" }}>Id</td>
              <td style={{ padding: "12px", fontSize: "18px", backgroundColor: "gray" }}>Name</td>
              <td style={{ padding: "12px", fontSize: "18px", backgroundColor: "gray" }}>Email</td>
              <td style={{ padding: "12px", fontSize: "18px", backgroundColor: "gray" }}>Age</td>
            </tr>
          </thead>
          <tbody>
            {data.map((val, i) => (
              <tr key={i}>
                <td style={{ padding: "10px", fontSize: "16px", border: "1px solid white" }}>{val.id}</td>
                <td style={{ padding: "10px", fontSize: "16px", border: "1px solid white" }}>{val.name}</td>
                <td style={{ padding: "10px", fontSize: "16px", border: "1px solid white" }}>{val.email}</td>
                <td style={{ padding: "10px", fontSize: "16px", border: "1px solid white" }}>{val.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
