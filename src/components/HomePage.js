import React from 'react';
import './HomePage.css';
import StarBackground from './starbackground'; 

function HomePage() {
  return (
    <div className="homepage">
      <StarBackground /> 
      <div className="nameContainer">
        <h1 className="initial">William Gerstung</h1>
      </div>
    </div>
  );
}

export default HomePage;

