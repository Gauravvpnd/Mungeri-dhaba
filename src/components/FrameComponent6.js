import React from 'react';
import './FrameComponent6.css';
import logo from '../pages/Group-89.png'

const FrameComponent6 = () => {
  return (
    <div className="footer-container">
      <div className="footer-background"></div>
      <div className="footer-content">
        <div className="question">Do you have any questions?</div>
        <div className="search-bar">
          <div className="search-icon"></div>
          <input type="text" className="search-input" placeholder="anything" />
        </div>
        <div className="logo-container">
          <div className="logo">
            <img src={logo} width={90} alt="Mungeri Dhaba Logo" />
            <div className="logo-text">mungeri dhaba</div>
          </div>
          <div className="address">
            Shanti Chowk, Jamnagar,<br />
            Near KIIT Square, Bhubneswar, Orissa, 728192
          </div>
          <div className="website">www.mungeridhaba.in</div>
        </div>
        <div className="contact-info">
          Contact us :<br />
          +91 8232373289<br />
          +91 2323898293
        </div>
        <div className="social-icons-container">
          <div className="social-icons"></div>
        </div>
      </div>
    </div>
  );
}

export default FrameComponent6;