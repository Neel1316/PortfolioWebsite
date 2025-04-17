
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'Mumabi,Maharashtra',
    period: 'January 2021 - Present',
    description: [
      'Lead the frontend development team in building responsive web applications.',
      'Implemented modern JavaScript frameworks like React and Redux for scalable applications.',
      'Improved website performance by 40% through code optimization and lazy loading.',
      'Collaborated with UX designers to create intuitive user interfaces.'
    ]
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Developer',
    company: 'WebSolutions Ltd.',
    location: 'Banglore, India',
    period: 'June 2018 - December 2020',
    description: [
      'Developed full-stack web applications using MERN stack (MongoDB, Express, React, Node.js).',
      'Created RESTful APIs for mobile and web applications.',
      'Implemented authentication systems and database migrations.',
      'Worked in an agile development environment with daily stand-ups and sprint planning.'
    ]
  },
  {
    id: 3,
    type: 'work',
    title: 'Junior Web Developer',
    company: 'Creative Digital Agency',
    location: 'Pune, Maharashtra',
    period: 'March 2016 - May 2018',
    description: [
      'Built responsive websites using HTML, CSS, and JavaScript.',
      'Maintained and updated existing client websites.',
      'Collaborated with the design team to implement pixel-perfect designs.',
      'Learned and implemented new technologies like React and Node.js.'
    ]
  },
  {
    id: 4,
    type: 'education',
    title: 'Master of Computer Science',
    company: 'Stanford University',
    location: 'Ahemdabad, Gujrat',
    period: '2014 - 2016',
    description: [
      'Specialized in Web Technologies and Applications.',
      'GPA: 3.8/4.0',
      'Relevant coursework: Advanced Algorithms, Database Systems, Web Development, Cloud Computing.',
      'Thesis: "Optimizing Frontend Performance in Progressive Web Applications"'
    ]
  },
  {
    id: 5,
    type: 'education',
    title: 'Bachelor of Science in Information Technology',
    company: 'TCET',
    location: 'Mumbai, Maharashtra',
    period: '2010 - 2014',
    description: [
      'GPA: 3.7/4.0',
      'Relevant coursework: Data Structures, Operating Systems, Software Engineering, Web Programming.',
      'President of the Web Development Club.',
      'Participated in various hackathons and coding competitions.'
    ]
  }
];

const ExperienceItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const isWorkExperience = item.type === 'work';
  
  return (
    <div className={`relative flex md:contents ${isEven ? '' : 'flex-row-reverse'}`}>
      <div className={`col-start-1 col-end-2 mr-10 md:mx-auto relative ${isEven ? 'md:text-right' : ''}`}>
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-portfolio-blue pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-portfolio-blue shadow text-center">
          <div className="flex items-center justify-center h-full">
            {isWorkExperience ? 
              <Briefcase size={12} className="text-white" /> : 
              <GraduationCap size={12} className="text-white" />
            }
          </div>
        </div>
      </div>
      
      <div className={`bg-white rounded-lg shadow-md p-6 my-4 ml-10 md:ml-0 ${isEven ? 'md:mr-10' : 'md:ml-10'} w-full max-w-md transform hover:translate-y-[-5px] transition-transform`}>
        <div className={`flex ${isWorkExperience ? 'text-portfolio-blue' : 'text-green-600'} mb-1 text-sm font-medium`}>
          <span>{item.period}</span>
        </div>
        <h3 className="text-xl font-bold text-portfolio-dark mb-1">{item.title}</h3>
        <div className="mb-4">
          <span className="font-medium text-portfolio-gray">{item.company}</span>
          <span className="mx-2 text-portfolio-gray">•</span>
          <span className="text-portfolio-gray">{item.location}</span>
        </div>
        <ul className="list-disc text-portfolio-gray ml-5 space-y-1">
          {item.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Experience & Education</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career in technology.
          </p>
        </div>
        
        <div className="relative border-l-2 border-portfolio-blue md:border-none mx-auto max-w-4xl">
          <div className="flex flex-col md:grid grid-cols-9">
            <div className="col-span-4">
              {experiences
                .filter((_, idx) => idx % 2 === 0)
                .map((experience, idx) => (
                  <ExperienceItem key={experience.id} item={experience} index={idx * 2} />
                ))
              }
            </div>
            <div className="hidden md:block col-span-1 h-full w-6 flex items-center justify-center">
              <div className="h-full w-0.5 bg-portfolio-blue pointer-events-none"></div>
            </div>
            <div className="col-span-4">
              {experiences
                .filter((_, idx) => idx % 2 !== 0)
                .map((experience, idx) => (
                  <ExperienceItem key={experience.id} item={experience} index={idx * 2 + 1} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
