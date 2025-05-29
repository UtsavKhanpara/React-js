// Header.jsx
import React from 'react';
import './Header.css';
import { FaUserInjured } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaUserInjured className="logo-icon" />
        <span>Patient Records</span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Patients</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Header;
