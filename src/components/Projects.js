import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: 'placeholder.jpg',
      description: 'A fully responsive e-commerce website with product listings, cart functionality, and checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Task Manager App',
      category: 'app',
      image: 'placeholder.jpg',
      description: 'A task management application with features like task creation, categorization, due dates, and reminders.',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      image: 'placeholder.jpg',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      category: 'web',
      image: 'placeholder.jpg',
      description: 'A content management system for blogs with features like post creation, comments, and user authentication.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'app',
      image: 'placeholder.jpg',
      description: 'A fitness tracking application that allows users to log workouts, track progress, and set fitness goals.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      image: 'placeholder.jpg',
      description: 'A personal portfolio website to showcase skills, projects, and professional experience.',
      technologies: ['React', 'CSS', 'JavaScript'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-intro">
          <p>
            Here are some of the projects I've worked on. Each project represents different 
            skills and challenges I've tackled.
          </p>
        </div>

        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
            onClick={() => setFilter('app')}
          >
            App Development
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className="placeholder-project-image"></div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 