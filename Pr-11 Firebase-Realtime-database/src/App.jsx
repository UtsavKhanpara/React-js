import { BrowserRouter, Route, Routes } from "react-router-dom"
import './style.css';
import Add from "./pages/Add"


function App() {

  return (
    <BrowserRouter>
      <h1>Firebase Realtime Database</h1>
      <Routes>
        <Route path="/" element={<Add />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
