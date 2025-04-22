import React, { useEffect, useState } from 'react'
import Todo from './Todo'


const AppTodo = () => {

  let [todolist, setTodoList] = useState([]);

  let getTodo = () => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then((data) => {
        setTodoList(data.todos);
        console.log(data)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <div>
      <Todo
        todolistdata={todolist}
      />
    </div>
  )
}

export default AppTodo;
