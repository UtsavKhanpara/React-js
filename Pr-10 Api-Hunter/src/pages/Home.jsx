import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div align="center">
        <Link to={`/axios`}><h1>AXIOS</h1></Link>
        <Link to={`/fetch`}><h1>FETCH</h1></Link>
    </div>
  )
}

export default Home