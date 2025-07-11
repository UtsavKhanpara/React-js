import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoomList from './pages/RoomList';
import RoomDetails from './pages/RoomDetails';
import ReservationForm from './pages/Reservation';
import ReservationList from './pages/ReservationList';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AppNavbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/reservations" element={<PrivateRoute><ReservationList /></PrivateRoute>} />
        <Route path="/reserve" element={<PrivateRoute><ReservationForm /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
