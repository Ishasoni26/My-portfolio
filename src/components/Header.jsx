// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">I<span className='logo1'>sha</span></div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
      <button className="cta-button">Contact Us</button>
    </header>
  );
};

export default Header;
