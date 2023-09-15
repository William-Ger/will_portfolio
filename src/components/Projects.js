import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

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
    </div>
  );
}

export default Projects;
