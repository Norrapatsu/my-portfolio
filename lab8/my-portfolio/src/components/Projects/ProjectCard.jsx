import { ExternalLink, Github, Star } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label="View on GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        {project.featured && (
          <div className="featured-badge">
            <Star size={14} />
            Featured
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;