import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    I am Rajasekar V, a passionate developer with expertise in building dynamic and responsive web applications.
                </p>
                <a href="#projects" className="cta-button">View My Projects</a>
            </div>
        </section>
    );
};

export default Hero;