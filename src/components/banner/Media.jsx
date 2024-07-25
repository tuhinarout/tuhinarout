import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IconCloudDemo } from '../IconCloudDemo';

const Media = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:flex-row xl:gap-12 justify-between items-center w-full md:-mt-24">
      <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
        <h2 className="text-white uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/tuhinarout" target='_blank' rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/tuhina-rout-75670a300/" target='_blank' rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full xl:w-auto flex justify-center mt-8 xl:mt-0">
        <IconCloudDemo />
      </div>
    </div>
  );
}

export default Media;
