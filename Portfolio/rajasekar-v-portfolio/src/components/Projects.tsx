import React from 'react';

const projectsData = [
    {
        title: 'Project One',
        description: 'Description of Project One, highlighting its features and technologies used.',
    },
    {
        title: 'Project Two',
        description: 'Description of Project Two, showcasing its unique aspects and functionalities.',
    },
    {
        title: 'Project Three',
        description: 'Description of Project Three, detailing the challenges faced and solutions implemented.',
    },
];

const Projects: React.FC = () => {
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projectsData.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;