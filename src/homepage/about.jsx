import React from 'react';
import './about.css';
import Header from './header';
import Skills from './skills';
import Contact from './contact';
import Footer from './footer';

const Home = () => {
  return (
    <div className="app">
      <Header />

      <div className="home-section" id="home">
        <div className="home-content">
          <h1>Clyde Rexter R Flores</h1>
          <img src="/pro.jpg" alt="Clyde Rexter Flores" className="profile-pic" />
          <p>
            Hello! I'm <strong>Clyde Rexter R Flores</strong>, an enthusiastic IT student with a passion 
            </p>
            <p>for game development,  software engineering, and creative problem-solving.
          </p>
        </div>
      </div>

      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
