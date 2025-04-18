"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Tags from "../tags/tags";



interface Project {
  image:StaticImageData;
  description:string;
  title:string; 
  tags: string[];
  onClick: ()=>void;
}

const ProjectCard: React.FC<Project> = ({ image, description, title, tags, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`w-[689px] h-[378px]  bg-[#ffffff] border border-[#d9d9d9] space-y-0 relative 
       
      `}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={`h-full w-full relative`} onClick={onClick}>
        <div
          className={`h-full w-full flex justify-center items-center  ${
            expanded ? "p-0" : "py-4 px-3"
          }  transition-all duration-300`}
        >
          <div className="relative h-full w-full">
            <Image
              src={image}
              alt={`image`}
              layout="fill"
              objectFit="cover"
              className={`transition-all duration-300 ${
                expanded ? "" : "blur-none"
              }`}
            />
          </div>
        </div>
        {expanded && (
          <div className="absolute inset-0 bg-black opacity-50 transition-all duration-300 pointer-events-none" />
        )}
      </div>
      {expanded && (
        <div
          className={`w-full flex-col pt-2 border border-[#d9d9d9] rounded-xl border-b-0 border-l-0 border-r-0 absolute bottom-0 transition-transform ease-in-out duration-500 ${
            expanded ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="px-5 py-2 transition-all duration-300 ease-in-out text-white">
            <p>{title}</p>
          </div>
          <div className="flex items-center p-3 px-5">
            <Tags tags={tags} expandable={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
