"use client";
import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import left from "./angle-left.svg";
import right from "./angle-right.svg";



interface Project {
  image:StaticImageData[];
  description:string;
  title:string; 
}

const ProjectCard: React.FC<Project> = ({ image, description, title }) => {
  const [expanded, setExpanded] = useState(false);
  const tags = ["MySQL", "React.js", "Socket.io"];
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? image.length - 1 : prevIndex - 1
      );
    };

  const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === image.length - 1 ? 0 : prevIndex + 1
      );
    };

  return (
    <div className="w-[689px] h-[378px]  bg-[#ffffff] border border-[#d9d9d9] rounded-[49px] grid grid-rows-[auto_1fr_auto] space-y-6 ">
      {/* Image Section */}
      <div
        className={`h-full w-full flex justify-center items-center ${
          expanded ? "py-10 px-3" : "rounded-t-[49px]"
        } overflow-hidden bg-blend-lumi transition-all duration-300`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {expanded && (
          <button
            className="w-fit h-fit hover:cursor-pointer"
            onClick={handlePrev}
          >
            <Image src={left} className="w-7 h-7" alt="" />
          </button>
        )}

        {image.length > 0 && (
          <Image
            src={image[currentIndex]}
            alt={`image ${currentIndex + 1}`}
            className={`w-full h-full ${
              expanded ? "blur-none" : "blur-sm"
            } transition-all duration-300 object-cover`}
          />
        )}

        {expanded && (
          <button
            className="w-fit h-fit hover:cursor-pointer"
            onClick={handleNext}
          >
            <Image src={right} className="w-7 h-7" alt="" />
          </button>
        )}
      </div>

      {/* Description Section */}
      {!expanded && (
        <div className="px-8 py-2 transition-all duration-300 ease-in-out text-gray-400">
          <p>{title}</p>
        </div>
      )}

      {/* Tags Section */}
      {!expanded && (
        <div className="p-8 flex justify-between items-end mt-auto transition-all duration-300">
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

export default ProjectCard;
