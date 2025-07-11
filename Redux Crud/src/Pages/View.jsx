import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div align="center">
      <h1>VIEW USER</h1>
      <table border={1} cellPadding="5px" cellSpacing="5pc">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
      </table>
      <hr />
      <Link to={'/'}>ADD</Link>
    </div>
  )
}

export default View
