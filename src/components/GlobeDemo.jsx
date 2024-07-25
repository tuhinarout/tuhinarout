import React from "react";
import Globe from "./magicui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex h-[300px] md:h-[500px] lg:h-[800px] w-full max-w-full bg-background px-4 sm:px-6 md:px-10 pb-10 pt-4 md:pb-16 md:pt-8 md:shadow-xl overflow-hidden">
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
