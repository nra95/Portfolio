import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Critical thinking', level: 70 },
    { name: 'Creativity', level: 75 },
    { name: 'Collaboration', level: 85 },
    { name: 'Communication', level: 90 },
    { name: 'Information literacy', level: 85 },
    { name: 'Media literacy', level: 80 },
    { name: 'Technology literacy', level: 85 },
    { name: 'Flexibility', level: 85 },
    { name: 'Leadership', level: 65 },
    { name: 'Initiative', level: 75 },
    { name: 'Productivity', level: 90 },
    { name: 'Social skills', level: 85 },
  ];


  return (
    <div className="skills">
      <h2 className="skillshead">21st Century Skills</h2>
      <ul style={{ listStyleType: 'none' }}> 
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="progress">
              <div
                className="progress-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;