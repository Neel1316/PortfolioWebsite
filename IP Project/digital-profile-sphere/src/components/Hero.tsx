
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center bg-gradient-to-br from-white to-blue-50">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <p className="text-portfolio-blue font-semibold mb-4 animate-fade-in">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-dark mb-6 animate-slide-right">
            Arneel
          </h1>
          <h2 className="text-2xl md:text-3xl text-portfolio-gray mb-8 animate-slide-right" style={{ animationDelay: '0.1s' }}>
            Full Stack Developer
          </h2>
          <p className="text-lg text-portfolio-gray max-w-2xl mb-10 animate-slide-right" style={{ animationDelay: '0.2s' }}>
            I build modern, responsive web applications with a focus on user experience.
            Passionate about clean code and innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-right" style={{ animationDelay: '0.3s' }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-portfolio-gray hover:text-portfolio-blue transition-colors animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
