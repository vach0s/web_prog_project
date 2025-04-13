import React from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Vaibhav!</span></h1>
            <h2>I'm a <span className="typing">Web Developer</span></h2>
            <p>Passionate about creating beautiful and functional websites with clean code.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            {/* Replace placeholder with actual image */}
            <img src={profileImage} alt="Your Name" className="profile-image" />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 