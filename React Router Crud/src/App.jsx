import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './Mycrud1/View'
import Edit from './Mycrud1/Edit'
import Add from './Mycrud1/Add'
import Viewed from './Mycrud2/Viewed'
import Added from './Mycrud2/Added'
import Updated from './Mycrud2/Updated'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<View/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Viewed/>}/>
          <Route path='/added' element={<Added/>}/>
          <Route path='/updated' element={<Updated/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
