import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Welcome to my Portfolio</a>
        <ul className="nav-menu">
          <li><a href="#home">About</a></li>
          <li><a href="#skills">Skills</a></li>  {}
          <li><a href="#contact">Contact</a></li>  {}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
