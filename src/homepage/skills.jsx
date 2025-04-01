import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
} from 'react-icons/fa';
import './Skills.css';
import { FaJava } from 'react-icons/fa6';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
    { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
    { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} /> },
    { name: 'React', icon: <FaReact style={{ color: '#61DBFB' }} /> },
    { name: 'Java', icon: <FaJava style={{ color: '#5382A1' }} /> }
  ];
  
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;