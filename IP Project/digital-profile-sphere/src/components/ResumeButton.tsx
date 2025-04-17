
import React from 'react';
import { FileDown } from 'lucide-react';

const ResumeButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-20">
      <a 
        href="/resume.pdf" 
        download="Arneel.pdf"
        className="flex items-center gap-2 bg-portfolio-blue text-white py-3 px-6 rounded-full shadow-lg hover:bg-portfolio-darkBlue transition-colors duration-300"
      >
        <FileDown size={20} />
        <span className="font-medium">Download Resume</span>
      </a>
    </div>
  );
};

export default ResumeButton;
