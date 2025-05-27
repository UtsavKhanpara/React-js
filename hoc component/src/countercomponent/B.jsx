import React from 'react'
import Counter from './Counter'


const B= ({no,inc,dec,res}) => {
  return (
    <div align="center">
      <h1>Component B</h1>
      <h2>Counter App</h2>
      <h3>Count:{no}</h3>
      <button onClick={inc}>+</button>
     <button disabled={no==0} onClick={dec}>-</button>
      <button disabled={no==0} onClick={res}>Reset</button>
    </div>
  )
}

export default Counter(B); 
