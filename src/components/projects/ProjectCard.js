import React from 'react';
import { BsGithub } from "react-icons/bs";
import './Project.css'
const ProjectsCard = ({ title, des, src, link }) => {
  return (
    <div className="w-full p-4 xl:max-h-px-10 h-auto xl:py-10 rounded-lg flex flex-col group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000 border-radius">
      <div className="w-full h-60 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="project"
          style={{ objectFit: 'contain', aspectRatio: '3/4' }}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between text-white">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={link} target='_blank' rel="noopener noreferrer">
                  <BsGithub />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-white">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
