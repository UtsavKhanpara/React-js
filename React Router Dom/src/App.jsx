import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/ab' element={<About/>}/>
              <Route path='/con' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
