import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to include this line
import './HomePage.css';
import StarBackground from './starbackground'; 

function HomePage() {
  return (
    <div className="homepage">
      <StarBackground /> 
      <div className="nameContainer">
        <h1 className="initial">William Gerstung</h1>
        </div>
        <div className="welcomeContainer">
        <p>Welcome to my portfolio!</p>
      </div>
      <div className="aboutButton">
        <Link to="/about">About Me</Link>
      </div>
    </div>
  );
}

export default HomePage;

