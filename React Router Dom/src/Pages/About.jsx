import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {

 const location=useLocation()
 console.log(location.state);

 
  return (
    <div>
      <h1>About Page</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/ab'}>About</Link>
      <Link to={'/con'}>Contact</Link>

    </div>
  )
}

export default About
