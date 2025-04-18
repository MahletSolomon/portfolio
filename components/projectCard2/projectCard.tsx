"use client";
import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

interface Project {
  image: StaticImageData;
  description: string;
  title: string;
  tags: string[];
}

const ProjectCard2: React.FC<Project> = ({ image, description, title, tags }) => {
  
  const [expanded, setExpanded] = useState(false);

  const openProject = () => {

  }

  return (
    <div 
    className="w-[623px] h-[380px] grid grid-rows-[auto_1fr_auto] space-y-6  border border[#AEAEAE] hover:cursor-pointer hover:shadow-md"
    onClick={openProject}
    >
      <div className="w-full h-24">
        <Image src={image} alt="imge" className="h-full object-cover" />
      </div>

      {!expanded && (
        <div className="px-4 py-2 transition-all duration-300 ease-in-out text-gray-400">
          <p>
            {title}
          </p>
        </div>
      )}

      {!expanded && (
        <div className="p-4 flex justify-between items-end mt-auto transition-all duration-300">
          <div className="flex space-x-5">
            {tags.map((t, index) => (
              <div
                key={index}
                className="w-fit h-fit px-5 border border-[#d9d9d9]"
              >
                <p className="text-[#aaaaaa] text-[11px]">{t}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[#aaaaaa]">&lt;/&gt;</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard2;
