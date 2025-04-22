import React, { useEffect, useState } from 'react';
import './instagram.css'; // Import CSS
import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
  const [record, setRecord] = useState([]);

  const getInstagram = () => {
    fetch(`https://mocki.io/v1/fc9295f9-15a9-4964-a453-264338d2a567`)
      .then(res => res.json())
      .then((data) => {
        setRecord(data);  
      }).catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getInstagram();
  }, []);

  return (
    <div className="instagram-container">
      <div className="welcome-message">
        <h2>Welcome to the Instagram Profiles Showcase! 🌟</h2>
        <p>Explore the fascinating Instagram profiles with insights, posts, and highlights. 📸✨</p>
      </div>
      
      <h1 className="instagram-title">
        <FaInstagram style={{ color: "red" }} /> 
        <a href="https://www.instagram.com/_theutsavkhanpara_/#" 
           style={{ textDecoration: "none", color: "#ff0000" }}>
           Instagram
        </a>
      </h1>
      
      <div className="card-wrapper">

        {
          record.map((val, index) => (
            <div key={index} className="card">
              <h2 className="username-row">
                <span className="username">{val.username}</span>
                {val.verified && <span className="verified-badge">✔</span>}
              </h2>
              <p>
                <img className="profile-img" src={val.profileImage} alt={`${val.username}'s profile`} />
              </p>

              <strong style={{ marginRight: "20px" }}>My Instagram Account Here</strong>
              <a href="https://www.instagram.com/_theutsavkhanpara_/#" style={{ color: "black", textDecoration: "none" }}><strong>CLICK HERE</strong></a>
              <br />
              <p><strong>Bio:</strong> {val.bio}</p>
              <p><strong>Age:</strong> {val.age} | <strong>Location:</strong> {val.location}</p>
              <p><strong>Followers:</strong> {val.instagramFollowers} || <strong>Following:</strong> {val.instagramFollowing}</p>
              <p><strong>Reels Views:</strong> {val.reelsView} | <strong>Story Views:</strong> {val.storiesView}</p>
              <p><strong>2FA:</strong> {val.twoFactorAuthentication ? 'Enabled' : 'Disabled'}</p>
              <p><strong>Business Account:</strong> {val.businessAccount ? 'Yes' : 'No'}</p>
              <p><strong>Tags:</strong></p>
              <div className="tags-wrapper">
                {val.tags.map((tag, i) => (
                  <span key={i} className="tag">#{tag}</span>
                ))}
              </div>

              <div className="card-section">
                <strong>Posts:</strong>
                {val.posts.map((p, i) => (
                  <div key={i} className="mini-card">
                    📸 {p.caption} | ❤️ {p.likes} | 💬 {p.comments} | 🔁 {p.shares} | 📅 {p.date}
                  </div>
                ))}
              </div>

              <div className="card-section">
                <strong>Highlights:</strong>
                {val.highlights.map((h, i) => (
                  <div key={i} className="mini-card">
                    ⭐ {h.title} ({h.posts} posts)
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Instagram;
