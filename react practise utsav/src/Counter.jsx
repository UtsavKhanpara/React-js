import React from 'react'

const Counter = ({no,increment,decrement,reset}) => {
  return (
    <div align="Center">
      <h1>Counter App</h1>
      <h2>Count:{no}</h2>
      <button onClick={()=> increment()}>+</button>
      <button disabled={no==0} onClick={()=> decrement()}>-</button>
      <button disabled={no==0} onClick={()=> reset()}>Reset</button>
    </div>
  )
}

export default Counter
