import React from 'react';

const RightBanner = () => {
  return (
    <div className="w-full xl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-full h-auto max-w-[500px] max-h-[620px] z-10"
        src={'/tahi.jpg'}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[250px] sm:w-[350px] h-[200px] sm:h-[300px] xl:w-[500px] xl:h-[500px] flex justify-center items-center bg-gray-800 opacity-50"></div>
    </div>
  );
}

export default RightBanner;
