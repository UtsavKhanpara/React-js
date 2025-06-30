import React, { useContext } from 'react'
import { countercontext } from './Counter'

const Count = () => {

  const {no,inc}=useContext(countercontext)
  return (
    <div align="center">
      <h1>Counter App:-</h1>
      <h1>Counter:-{no}</h1>
      <button onClick={inc}>++</button>
    </div>
  )
}

export default Count
