import React, { useEffect } from 'react';
import './StarBackground.css';

const StarBackground = () => {

  useEffect(() => {
    const starContainer = document.getElementById('star-container');

    // Create stars
    for (let i = 0; i < 25; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = '2px';
      star.style.height = '2px';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      starContainer.appendChild(star);
    }
    

    // Handle mouse movement
    document.addEventListener('mousemove', function(event) {
      const x = event.clientX;
      const y = event.clientY;
      
      document.querySelectorAll('.star').forEach(star => {
        const starX = star.offsetLeft;
        const starY = star.offsetTop;

        const dx = x - starX;
        const dy = y - starY;

        const distance = Math.sqrt(dx * dx + dy * dy);

        star.style.transform = `translate(${dx / distance * 5}px, ${dy / distance * 5}px)`;
      });
    });
  }, []);

  return (
    <div id="star-container"></div>
  );
};

export default StarBackground;
