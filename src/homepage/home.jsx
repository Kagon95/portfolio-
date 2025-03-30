import React from 'react';
import './home.css'; 

const Home = () => {
  return (
    <div className="app">
      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">Welcome to my Portfolio</a>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* --- Home Content --- */}
      <div className="home-section" id="home">
        <div className="home-content">
          <h1>Clyde Rexter R Flores</h1>
          <h2>IT student</h2>
          <p>Hi, I'm Clyde Rexter Flores, an IT student passionate about Games and Game Development.</p>
        </div>
      </div>
      
      {/* --- My Skills Section --- */}
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-card"><span>HTML</span></div>
          <div className="skill-card"><span>CSS</span></div>
          <div className="skill-card"><span>JavaScript</span></div>
          <div className="skill-card"><span>React</span></div>
        </div>
      </div>

      {/* --- Contact Me Section --- */}
      <div className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>📞 09451754818</p>
            <p>📧 clydef491gmail.com</p>
          </div>
          <div className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
