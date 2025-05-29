import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="clinic-footer">
      <div className="footer-grid">

        <div className="footer-section">
          <h3>About Us</h3>
          <p>HealthyLife Clinic is dedicated to providing quality and compassionate healthcare to every patient. Our mission is to promote wellness and improve lives through personalized medical attention.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Add Patient</a></li>
            <li><a href="#">Patient Records</a></li>
            <li><a href="#">Appointments</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 123 Health Street, MedCity</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@healthylifeclinic.com</p>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
          <p>Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HealthyLife Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
