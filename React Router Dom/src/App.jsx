import React from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Demo</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link> 
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
