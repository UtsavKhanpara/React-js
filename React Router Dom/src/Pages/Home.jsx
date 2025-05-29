import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const data={
    color:["Red","Blue","Orange","skyblue"]
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/ab'} state={data}>About</Link>
      <Link to={'/con'}>Contact</Link>
    </div>
  )
}

export default Home
