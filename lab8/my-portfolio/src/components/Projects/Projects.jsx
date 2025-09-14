import { useState } from 'react';
import { Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  
  // Get unique technologies
  const technologies = ['all', ...new Set(
    projects.flatMap(project => project.technologies)
  )];
  
  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(filter)
      );
  
  // Show only featured or all
  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.filter(project => project.featured);
  
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>
        
        <div className="projects-controls">
          <div className="filter-wrapper">
            <Filter size={20} />
            <select 
              className="filter-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {technologies.map(tech => (
                <option key={tech} value={tech}>
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <button 
            className="show-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Featured' : 'Show All Projects'}
          </button>
        </div>
        
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {displayedProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for this technology.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;