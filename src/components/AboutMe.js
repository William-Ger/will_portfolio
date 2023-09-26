import React from 'react';
import './AboutMe.css';
import StarBackground from './starbackground'; 

function AboutMe() {
  return (
    <div className="aboutMe">
      <StarBackground /> 
      <h1>About Me</h1>
      <p>
      Recent graduate from The University of Iowa, with a degree in business analytics and information systems. I have interests in machine learning and leveraging the capabilities
      of LLMs. I enjoy working on side projects and creating tools from data. Please take a look at my <a href="https://willgerstung.com/projects">projects</a> to see my skills and capabilites.
      </p>
    </div>
  );
}

export default AboutMe;
