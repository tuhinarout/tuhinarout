import React, { useEffect, useState } from "react";
import Particles from "./magicui/Particles";
import Banner from "./banner/Banner";

const ParticlesDemo = () => {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="bg-black h-[50%]">
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg bg-background md:shadow-xl">
        <div className="bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-sm text-transparent dark:from-white dark:to-slate-900/10 w-full h-full flex items-center justify-center">
          <Banner />
        </div>
        <Particles
          className="absolute inset-0"
          quantity={200}
          ease={80}
          color={color}
          refresh
        />
      </div>
    </div>
  );
};

export default ParticlesDemo;
