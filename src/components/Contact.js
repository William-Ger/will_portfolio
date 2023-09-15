import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      
      <div className="contactDetails">
        <p>Phone: (630) 209-564</p>
        <p>Email: willgerstung@gmail.com</p>
        <p>
          LinkedIn: 
          <a href="https://www.linkedin.com/in/william-gerstung/" target="_blank" rel="noopener noreferrer">william-gerstung</a>
        </p>
        <p>
          GitHub: 
          <a href="https://github.com/William-Ger" target="_blank" rel="noopener noreferrer">William-Ger</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;

