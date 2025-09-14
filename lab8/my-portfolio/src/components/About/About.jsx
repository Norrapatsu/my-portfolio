import { Code, Palette, Zap, Heart, Download, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, color: '#3b82f6' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, color: '#10b981' },
    { name: 'Performance Optimization', icon: <Zap size={24} />, color: '#f59e0b' },
    { name: 'Problem Solving', icon: <Heart size={24} />, color: '#ef4444' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <h3 className="about-subtitle">{personalInfo.title}</h3>
            <p className="about-description">
              {personalInfo.bio}
            </p>
            <p className="about-description">
              I specialize in building responsive web applications using modern JavaScript frameworks. 
              My passion lies in creating intuitive user interfaces that provide exceptional user experiences 
              while maintaining clean, efficient code.
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div 
                    className="skill-icon"
                    style={{ backgroundColor: skill.color + '20', color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                <Download size={18} />
                Download Resume
              </a>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={18} />
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60" 
                alt={personalInfo.name}
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;