
import React from 'react';
import { Calendar, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="1.jpeg" 
              alt="Profile" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-portfolio-dark mb-6">
              Full Stack Developer & UI/UX Enthusiast
            </h3>
            
            <p className="text-portfolio-gray mb-6">
              I'm a passionate developer with 5 years of experience building web applications. 
              I specialize in JavaScript, React, and Node.js. My goal is to create beautiful, 
              functional, and user-friendly applications that solve real-world problems.
            </p>
            
            <p className="text-portfolio-gray mb-8">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting 
              with new frameworks and libraries. I'm always eager to learn new technologies and 
              improve my skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Calendar size={20} className="text-portfolio-blue mr-3" />
                <span>Born: August 13, 2005</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-portfolio-blue mr-3" />
                <span>Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-portfolio-blue mr-3" />
                <span>neeljoshi136@gmail.com</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
