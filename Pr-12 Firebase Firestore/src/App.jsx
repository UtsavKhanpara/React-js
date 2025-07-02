import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToDo from "./pages/AddToDo";
import './style.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
