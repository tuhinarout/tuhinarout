import React from 'react';
import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",

  "java",

  "html5",
  "css3",

  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex w-full max-w-[32rem] items-center justify-center overflow-hidden px-6 sm:px-12 md:px-24 mb-16 pb-8 pt-8 mt-8 xl:mt-0">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
