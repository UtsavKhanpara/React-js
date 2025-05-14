import React from 'react'

const Crud = () => {
  return (
    <div align="center">
      <h1>Crud Operations</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your Name:- </label>
        <input type="text" />
        <label>Enter Your Email:- </label>
        <input type="text" />
      </form>
    </div>
  )
}

export default Crud
