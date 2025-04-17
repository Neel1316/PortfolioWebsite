
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    liveLink: '#',
    codeLink: '#',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Firebase', 'Material-UI', 'Context API'],
    liveLink: '#',
    codeLink: '#',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A real-time weather application with location search, forecast data, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    liveLink: '#',
    codeLink: '#',
    category: 'frontend'
  },
  {
    id: 4,
    title: 'RESTful API Service',
    description: 'A robust RESTful API for user management, authentication, and data processing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    liveLink: '#',
    codeLink: '#',
    category: 'backend'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    liveLink: '#',
    codeLink: '#',
    category: 'frontend'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'A real-time chat application with message encryption, file sharing, and user presence detection.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
    category: 'fullstack'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-portfolio-dark bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.liveLink} 
            className="bg-white p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors duration-300"
            title="View Live"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={project.codeLink} 
            className="bg-white p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors duration-300"
            title="View Code"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
        <p className="text-portfolio-gray mb-4">{project.description}</p>
        <div className="flex flex-wrap mb-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="skill-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is designed with care and built with modern technologies.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full shadow p-1 space-x-1">
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-portfolio-blue text-white' : 'text-portfolio-gray hover:text-portfolio-blue'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'frontend' ? 'bg-portfolio-blue text-white' : 'text-portfolio-gray hover:text-portfolio-blue'}`}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'backend' ? 'bg-portfolio-blue text-white' : 'text-portfolio-gray hover:text-portfolio-blue'}`}
              onClick={() => setFilter('backend')}
            >
              Backend
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'fullstack' ? 'bg-portfolio-blue text-white' : 'text-portfolio-gray hover:text-portfolio-blue'}`}
              onClick={() => setFilter('fullstack')}
            >
              Full Stack
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
