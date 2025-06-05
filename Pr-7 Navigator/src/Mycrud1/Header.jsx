import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css'; // ✅ Ensure CSS is imported

const Header = () => {
  return (
    <header className="clinic-header">
      <div className="header-container">
        <h2 className="logo">🏥 Clinic Manager</h2>
        <nav>
          <Link className="nav-link" to="/">Edit</Link>
          <Link className="nav-link" to="/view">View</Link>
          <Link className="nav-link" to="/add">Add Patient</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
