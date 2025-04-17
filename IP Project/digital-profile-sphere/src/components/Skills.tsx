
import React from 'react';
import { Code, Server, Database, Layout, Palette, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout size={48} className="text-portfolio-blue mb-4" />,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3/SASS', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Redux', level: 80 },
      { name: 'Tailwind CSS', level: 75 },
    ]
  },
  {
    title: 'Backend Development',
    icon: <Server size={48} className="text-portfolio-blue mb-4" />,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'REST API Design', level: 85 },
      { name: 'GraphQL', level: 70 },
      { name: 'Python', level: 75 },
      { name: 'PHP', level: 65 },
    ]
  },
  {
    title: 'Database',
    icon: <Database size={48} className="text-portfolio-blue mb-4" />,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'Redis', level: 65 },
    ]
  },
  {
    title: 'UI/UX Design',
    icon: <Palette size={48} className="text-portfolio-blue mb-4" />,
    skills: [
      { name: 'Figma', level: 75 },
      { name: 'Adobe XD', level: 70 },
      { name: 'Responsive Design', level: 90 },
      { name: 'User Testing', level: 75 },
      { name: 'Wireframing', level: 85 },
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: <Terminal size={48} className="text-portfolio-blue mb-4" />,
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'AWS', level: 65 },
      { name: 'Jest/Testing', level: 80 },
      { name: 'Webpack', level: 75 },
    ]
  },
  {
    title: 'Programming Languages',
    icon: <Code size={48} className="text-portfolio-blue mb-4" />,
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 65 },
      { name: 'C#', level: 60 },
    ]
  }
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-portfolio-gray">{name}</span>
        <span className="text-sm font-medium text-portfolio-blue">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-portfolio-blue h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:translate-y-[-5px]">
      <div className="text-center mb-6">
        {category.icon}
        <h3 className="text-xl font-bold text-portfolio-dark">{category.title}</h3>
      </div>
      
      <div>
        {category.skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="text-portfolio-gray max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my career. Here's a comprehensive overview of my technical capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
