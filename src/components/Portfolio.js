import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
        try {
          const response = await fetch('https://api.github.com/users/William-Ger/repos');
          const data = await response.json();
          console.log(data);
          setProjects(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching the GitHub projects', error);
          setLoading(false);
        }
      };
    
      fetchProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
      }    

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
            <div>
            {projects.map((project) => (
        <div key={project.id} className="portfolio-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.homepage ? <a href={project.homepage} target="_blank" rel="noopener noreferrer">Project Homepage</a> : null}
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
