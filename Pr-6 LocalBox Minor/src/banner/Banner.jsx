// Banner.jsx
import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <img
          src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611197.jpg"
          alt="Clinic"
          className="clinic-image"
        />
      </div>
      <div className="banner-right">
        <h2>Dr. Anjali Mehta</h2>
        <p><strong>Specialization:</strong> General Physician & Family Doctor</p>
        <p><strong>Clinic Name:</strong> HealthPlus Clinic</p>
        <p><strong>Address:</strong> 45 Wellness Street, New Delhi - 110001</p>
        <p><strong>Timings:</strong> Mon - Sat: 9:00 AM - 6:00 PM</p>
        <p><strong>Contact:</strong> +91 9876543210</p>
      </div>
    </div>
  );
};

export default Banner;
