import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';

const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="wow animate__animated animate__fadeInDown" style={styles.header}>
        <h1>Utsav's Animated React Website</h1>
        <nav style={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section id="home" className="wow animate__animated animate__zoomIn" style={styles.banner}>
        <h2>Welcome to My World</h2>
        <p>Explore React + Animation powered smooth web experiences</p>
      </section>

      {/* About */}
      <section id="about" className="wow animate__animated animate__fadeInLeft" style={styles.section}>
        <h2>About Me</h2>
        <p>I’m Utsav, a frontend developer passionate about building interactive and responsive websites. I use modern tools like ReactJS, Tailwind, Bootstrap, and animation libraries.</p>
      </section>

      {/* Services */}
      <section id="services" className="wow animate__animated animate__slideInUp" style={styles.section}>
        <h2>Our Services</h2>
        <div style={styles.cardContainer}>
          {["Web Design", "UI/UX", "React Apps"].map((service, i) => (
            <div key={i} className="wow animate__animated animate__zoomIn" data-wow-delay={`${i * 0.3}s`} style={styles.card}>
              <h3>{service}</h3>
              <p>Professional {service.toLowerCase()} services with modern trends and smooth performance.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="wow animate__animated animate__fadeInRight" style={styles.section}>
        <h2>Portfolio</h2>
        <p>Here are some of my featured projects.</p>
        <div style={styles.cardContainer}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="wow animate__animated animate__zoomIn" style={styles.card}>
              <h3>Project {item}</h3>
              <p>This is a showcase of React + CSS + Animation powered interface.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="wow animate__animated animate__bounceInUp" style={styles.section}>
        <h2>Testimonials</h2>
        <p>"Working with Utsav was an amazing experience! Our website looks great and performs well." – Client</p>
      </section>

      {/* Contact */}
      <section id="contact" className="wow animate__animated animate__fadeInUp" style={styles.section}>
        <h2>Contact Me</h2>
        <p>Email: <strong>utsav@example.com</strong> | Phone: <strong>+91 99999 99999</strong></p>
      </section>

      {/* Footer */}
      <footer className="wow animate__animated animate__fadeInUp" style={styles.footer}>
        <p>© 2025 Utsav Inc. | Designed with ❤️ using React & WOW.js</p>
      </footer>

    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 999
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '10px',
    flexWrap: 'wrap'
  },
  banner: {
    backgroundColor: '#e9ecef',
    padding: '80px 20px',
    textAlign: 'center'
  },
  section: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px'
  },
  card: {
    width: '280px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px',
    textAlign: 'center'
  }
};
export default App;
