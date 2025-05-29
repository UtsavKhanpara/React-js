import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/ab'}>About</Link>
      <Link to={'/con'}>Contact</Link>

    </div>
  )
}

export default Contact
