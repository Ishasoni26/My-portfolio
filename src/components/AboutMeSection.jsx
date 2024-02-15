// AboutMe.jsx

import React from 'react';
import profileImage from '../Images/profile.png'; // Update with your profile image
import '../styles/AboutMe.scss'; // Add your styles

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="name">Your Name</h1>
        <p className="job-title">Web Developer</p>
      </div>

      <div className="bio-section">
        <h2>About Me</h2>
        <p>
          Welcome to my website! I'm a passionate web developer with a focus on creating engaging and user-friendly web experiences.
          With a background in [your field], I enjoy bringing ideas to life through code and problem-solving.
        </p>
        <p>
          I specialize in [your tech stack], and I'm always eager to learn and adapt to new technologies. My goal is to contribute to
          innovative projects and collaborate with like-minded individuals who share a passion for web development.
        </p>
      </div>

      <div className="interests-section">
        <h2>Interests</h2>
        <p>
          Besides coding, I have a keen interest in [your hobbies or interests]. In my free time, you can find me [doing something you enjoy].
        </p>
      </div>

      <div className="contact-section">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or would like to discuss a potential collaboration, feel free to reach out to me. I'm always open to
          connecting with fellow developers and industry professionals.
        </p>
        <ul>
          <li>Email: your.email@example.com</li>
          <li>LinkedIn: linkedin.com/in/yourusername</li>
          <li>GitHub: github.com/yourusername</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
