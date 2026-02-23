import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <p>&copy; {new Date().getFullYear()} Rajasekar V. All rights reserved.</p>
                <ul>
                    <li><a href="https://github.com/rajasekarv" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/rajasekarv" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com/rajasekarv" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;