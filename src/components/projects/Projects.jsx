import React from 'react';
import ProjectsCard from './ProjectCard';
import Title from '../Title';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 py-8 md:px-10 md:py-16 lg:py-20 h-full z-40">
      <div className="flex justify-center items-center text-center mb-10">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
          <ProjectsCard
            title="Landing Page"
            des="The landing page typically includes elements like a navigation bar, hero section, features, testimonials, call-to-action buttons, and a footer."
            src={'./boot.jpg'}
            link="https://github.com/tuhinarout/Bootstrapwebpage"
          />
       
       
          <ProjectsCard
            title="Traveling WebPage"
            des="Traveling website using HTML, CSS, and JavaScript involves developing a visually appealing and functional web page that provides information about various travel destinations, services, and contact details"
            src={'./test.jpg'}
            link=""
          />
       
   
      </div>
    </section>
  );
};

export default Projects;
