import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div align="center">
      <h1>View User</h1>
      <table border={2} cellPadding="5px" cellSpacing="5px">
        <thead>
            <tr>
                <th></th>
            </tr>
        </thead>
      </table>
      <hr />
      <Link to={'/'}>ADD</Link>
    </div>
  )
}

export default View
