import React from 'react'
import Todo from './Todo'
import Todolist from './Todolist'
import Todos from './Todos'

const App = () => {
  return (
    <div>
      <Todos/>
      <br /><br /><br /><br /><br /><br />
      <Todolist/>
      <br /><br /><br /><br /><br /><br />
      <Todo/>
    </div>
  )
}

export default App
