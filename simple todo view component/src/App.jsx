import { useState } from "react";
import Todo from "./Todo";

const App = () => {
  let [todolist] = useState([
    { id: 1, name: "utsav", email: "utsavkhanpara@gmail.com", age: 20 },
    { id: 2, name: "Mituuu", email: "Mituu@gmail.com", age: 21 },
    { id: 3, name: "amit", email: "amit@gmail.com", age: 25 },
    { id: 4, name: "neha", email: "neha@gmail.com", age: 21 },
    { id: 5, name: "priya", email: "priya@gmail.com", age: 23 },
    { id: 6, name: "vikas", email: "vikas@gmail.com", age: 24 },
    { id: 7, name: "anita", email: "anita@gmail.com", age: 26 },
    { id: 8, name: "rohit", email: "rohit@gmail.com", age: 27 },
    { id: 9, name: "sneha", email: "sneha@gmail.com", age: 22 },
    { id: 10, name: "karan", email: "karan@gmail.com", age: 28 },
  ]);

  return (
    <>
      <h1 style={{textAlign:"center"}}>Heii That's My Project</h1>
      <Todo data={todolist} />
    </>
  );
};

export default App;
