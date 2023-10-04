import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';
import { Link } from 'react-router-dom';
import StarBackground from './starbackground'; 

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/William-Ger/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching the repos', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="projects">
      <StarBackground /> 
      <h1>My Projects</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            : {repo.description}
          </li>
        ))}
      </ul>
      <div className="buttonContainer">
        <div className="contactButton">
          <Link to="/contact">Contact Me</Link>
        </div>
        <div className="apiButton">  {/* New button for API Page */}
          <Link to="/api">Check API</Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
