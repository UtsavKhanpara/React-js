import React from 'react'

const Todo = ({tododata}) => {
    console.log(tododata);
    
  return (
    <div align="Center">
      <h1>Todo Data</h1>

      <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                tododata.map((todo,index)=>{
                    return(
                        <>  
                           <tr key={index}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td>{todo.email}</td>
                            <td>{todo.phone}</td>
                           </tr>
                        </>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Todo
