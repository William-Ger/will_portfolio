// ContactForm.js
// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Importing the CSS file

const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nMessage: ${message}`);
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container">
            <h2>Reach out to me</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
