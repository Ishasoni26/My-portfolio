import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss'; // You can define your CSS styles in this file
import img from "../Images/profile.png"

function Home() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section className="intro-section">
          <p>I am a web developer passionate about creating amazing web experiences.</p>
          <img src={img} alt="Your Name" />
        </section>
        <section className="projects-section">
          <h2>Featured Projects</h2>
          <div className="project-list">
            {/* Render your featured projects here */}
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>Connect with me:</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Add more social links as needed */}
        </div>
      </footer>
    </div>
  );
}

export default Home;


