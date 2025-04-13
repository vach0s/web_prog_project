import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 80 },
    { name: 'TypeScript', percentage: 75 },
    { name: 'Bootstrap', percentage: 85 }
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 80 },
    { name: 'Express.js', percentage: 75 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'SQL', percentage: 65 },
    { name: 'Python', percentage: 60 },
    { name: 'RESTful APIs', percentage: 85 }
  ];

  const otherSkills = [
    'Git & GitHub',
    'Responsive Design',
    'UI/UX Design',
    'Problem Solving',
    'Testing',
    'Performance Optimization',
    'Agile/Scrum',
    'Team Collaboration'
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-intro">
          <p>
            Here are my technical skills and areas of expertise. I'm constantly learning 
            and improving my knowledge in various technologies.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-column">
            <h3 className="skills-category-title">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-column">
            <h3 className="skills-category-title">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="other-skills">
          <h3 className="skills-category-title">Other Skills</h3>
          <div className="other-skills-grid">
            {otherSkills.map((skill, index) => (
              <div className="other-skill-item" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 