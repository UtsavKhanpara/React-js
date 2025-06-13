import React from 'react';
import './Style.css'; // ✅ CSS included

const Footer = () => {
  return (
    <footer className="clinic-footer">
      <div className="footer-container">
        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>General Checkup</li>
            <li>Dental Care</li>
            <li>Eye Care</li>
            <li>Child Health</li>
          </ul>
        </div>

        {/* Contact with icons */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><i className="fas fa-envelope"></i> care@clinic.com</p>
          <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Health St., Surat</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Add Patient</li>
            <li>View Records</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-copy">© 2025 Clinic Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
