import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './Mycrud1/View'
import Edit from './Mycrud1/Edit'
import Add from './Mycrud1/Add'
import Header from './Mycrud1/Header'
import Footer from './Mycrud1/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<View/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

     

    </div>
  )
}

export default App
