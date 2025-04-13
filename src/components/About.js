import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-frame">
              {/* Add your image here */}
              <div className="placeholder-about-image"></div>
            </div>
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate web developer with a strong focus on creating clean, 
              user-friendly websites. I enjoy solving complex problems and learning 
              new technologies to improve my skills.
            </p>
            <p>
              With experience in both frontend and backend development, I strive to 
              build applications that are not only functional but also provide an 
              exceptional user experience.
            </p>
            <div className="about-details">
              <div className="about-details-item">
                <h4>Name:</h4>
                <p>Vaibhav Kumar</p>
              </div>
              <div className="about-details-item">
                <h4>Email:</h4>
                <p>vaibhav27k@gmail.com</p>
              </div>
              <div className="about-details-item">
                <h4>Location:</h4>
                <p>Vellore, India</p>
              </div>
              <div className="about-details-item">
                <h4>Education:</h4>
                <p>B.Tech in Computer Science and Engineering,VIT Vellore</p>
              </div>
            </div>
            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#" className="btn btn-outline">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 