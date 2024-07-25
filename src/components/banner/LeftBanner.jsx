import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Media from './Media';
import { Modal, Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LeftBanner = () => {
  const [open, setOpen] = useState(false);
 

  return (
    <div className="w-full xl:w-1/2 flex flex-col gap-8 sm:gap-20 font-black px-2 sm:px-4 md:mt-20 sm:mt-80">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tuhina Rout</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-white md:block hidden">
          a{' '}
          <Typewriter
            words={['Web Developer.', 'Java Developer.']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm sm:text-base leading-6 text-white" style={{ fontWeight: '500' }}>
          I am a passionate full-stack web developer with a strong skill set in design and problem-solving.
          Proficient in HTML5, CSS, JavaScript,Core Java. I strive to create visually appealing and interactive 
          user interfaces with a disciplined approach. I am excellent in writing clean code and optimizing
          performance. I am adept at collaborating in team environments. 
        </p>
        <div>
          {/* <button onClick={handleOpen}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            />
            <span
              className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
            >
              View Resume
            </span>
          </button> */}
        </div>
      </div>

      <Media />

   
    </div>
  );
};

export default LeftBanner;
