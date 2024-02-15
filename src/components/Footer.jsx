// Inside Footer.jsx

import React from 'react';
import "../styles/Footer.scss"; 
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import your SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect with Me</h4>
          <div className="social-icons">
            <FaTwitter className='twitter' />
            <FaLinkedin className='linkedin' />
            <FaGithub className='github' />
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to my newsletter for updates and new projects.</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 