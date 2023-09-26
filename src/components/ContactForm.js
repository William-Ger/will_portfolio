import React, { useState } from 'react';
import './ContactForm.css'; // Importing the CSS file

const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // To manage the form submission status

    const formEndpoint = "https://formspree.io/f/mnqkgkay"; // replace with your Formspree endpoint

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }), // send the email and message as JSON
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Error sending message! Please try again.');
            }
        } catch (error) {
            setStatus('Error sending message! Please try again.');
        }
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
            {status && <p>{status}</p>} {/* Display the form submission status */}
        </div>
    );
};

export default ContactForm;
