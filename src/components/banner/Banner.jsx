import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import StarsCanvas from '../Stars';

const Banner = () => {
  return (
    <section
      id="home"
      className="z-30 mt-12 lg:mt-1 px-4 sm:px-10 w-full pt-4 sm:pt-1  pb-20 flex flex-col gap-10 xl:gap-0 xl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
       {/* <StarsCanvas/> */}
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;
