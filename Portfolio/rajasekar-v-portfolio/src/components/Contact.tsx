import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div>
                <h3>Or reach me at:</h3>
                <p>Email: rajasekar@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
        </section>
    );
};

export default Contact;