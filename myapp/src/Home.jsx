
import React from "react";
import "./Home.css"; // Import the CSS file

const Home = ({ a, mul, colors, shoes }) => {
  return (
    <div className="home-container">
      <div className="card">
        <h1>A Value: <span className="highlight">{a}</span></h1>
        <h2>Multiplication Value: <span className="highlight">{mul()}</span></h2>
      </div>

      <div className="card">
        <h2>Available Colors 🎨</h2>
        <ul className="color-list">
          {colors.map((val, index) => (
            <li key={index} className="color-item" style={{ color: val }}>
              {val}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Shoe Brands 👟</h2>
        <ul className="shoes-list">
          {shoes.map((val, index) => (
            <li key={index} className="shoes-item">{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

