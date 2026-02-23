export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}