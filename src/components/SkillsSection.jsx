// SkillsPage.jsx

import React from 'react';
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaGitSquare,
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
// import ProgressBar from './ProgressBar';
 // Create ProgressBar.jsx separately
 import StarRating from "./StarRating";
import '../styles/SkillsSection.scss';

const SkillsPage = () => {
  const skillsData = [
    { icon: FaHtml5, name: 'HTML5', level: 90 },
    { icon: FaCss3, name: 'CSS3', level: 85 },
    { icon: DiJavascript1, name: 'JavaScript', level: 80 },
    { icon: FaReact, name: 'React', level: 75 },
    { icon: FaNodeJs, name: 'Node.js', level: 70 },
    { icon: FaDatabase, name: 'Database', level: 65 },
    { icon: FaJsSquare, name: 'ES6+', level: 80 },
    { icon: FaGitSquare, name: 'Git', level: 75 },
  ];

  return (
    <div className="skills-container">
      <div className="background-image"></div>
      <h2>Skills</h2>
      <div className="skill-categories">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-category">
            <skill.icon className="icon" />
            <h3>{skill.name}</h3>
            {/* <ProgressBar level={skill.level} */}
             <StarRating rating={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
