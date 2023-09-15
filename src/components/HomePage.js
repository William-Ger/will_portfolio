import React from 'react';
import './HomePage.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Short introduction about yourself.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>A brief overview of your projects.</p>
        </section>
      </main>
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
};


export default HomePage;
