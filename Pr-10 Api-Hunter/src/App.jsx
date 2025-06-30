import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import FetchApi from "./pages/FetchApi"
import AxiosApi from "./pages/AxiosApi"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/axios" element={<AxiosApi/>}/>
        <Route path="/fetch" element={<FetchApi/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
