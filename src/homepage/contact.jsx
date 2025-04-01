import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch with me</h3>
          <p><i className="fas fa-phone"></i> 09451754818</p>
          <p><i className="fas fa-envelope"></i> clydef491@gmail.com</p>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;