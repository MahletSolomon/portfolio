"use client";
import React, { useEffect, useState } from "react";
import image from "./img.png";
import Image, { StaticImageData } from "next/image";
import downArrow from "./angle-down.svg";
import upArrow from "./angle-up.svg";
import left from "./angle-left.svg";
import right from "./angle-right.svg";
import Tags from "../tags/tags";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  images: StaticImageData[];
  title: string;
  description: string;
  tags: string[];
}

interface ProjectDetailProps {
  project: Project;
}

const ProjectWindow: React.FC<ProjectDetailProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [image, setImage] = useState(0)

  // useEffect (()=>{
  //   setImage(image)
  // }, [image])

  const scrollImage = () => {

  }
  return (
    <div
      className={`relative max-h-full max-w-4xl w-[999px] h-[494px] bg-[#fcfcfc]  border border-[#d9d9d9] overflow-hidden`}
    >
      <div
        className={`w-full   flex flex-col ${
          expanded ? "h-full w-full p-6 pt-0" : ""
        }`}
      >
        {expanded ? (
          <div className="h-full w-full  flex flex-col overflow-hidden">
            <div className="w-full h-full flex justify-center items-center space-x-4 px-5 border bg-white border-[#d9d9d9] rounded-[14px] rounded-t-none border-t-0 overflow-hidden">
              <button
                className="w-fit h-fit hover:cursor-pointer hover:scale-110 hover:opacity-80 transition-transform duration-300"
                disabled={project.images.length < 2}
                onClick={() =>
                  setImage((prev) =>
                    prev === 0 ? project.images.length - 1 : prev - 1
                  )
                }
              >
                <Image src={left} className="w-6 h-6" alt="Previous" />
              </button>
              <AnimatePresence mode="wait">
                <motion.div
                  key={image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex justify-center items-center"
                >
                  <div>
                    <Image
                      src={project.images[image]}
                      alt="img"
                      className="w-full max-h-[420px] transition-all duration-300 object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                className="w-fit h-fit hover:cursor-pointer hover:scale-110 hover:opacity-80 transition-transform duration-300"
                disabled={project.images.length < 2}
                onClick={() =>
                  setImage((prev) =>
                    prev === project.images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <Image src={right} className="w-6 h-6" alt="Next" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-12 flex">
            <Image
              src={project.images[0]}
              alt="img"
              className={`w-full transition-all duration-300 object-cover blur-sm`}
            />
          </div>
        )}
      </div>

      {/* <div className="w-full h-fit flex justify-center -mt-4"> */}
      <div
        className={`absolute left-1/2 -translate-x-1/2  z-40 
             w-9 h-9 flex items-center justify-center 
             bg-white bg-opacity-20 backdrop-blur-md 
             border border-[#d9d9d9] rounded-full shadow-md
             hover:cursor-pointer hover:bg-opacity-40 
             transition-all duration-300 animate-bounce-slow ${
               expanded ? "bottom-0" : " top-8"
             }`}
        onClick={() => setExpanded(!expanded)}
      >
        <Image src={expanded ? upArrow : downArrow} alt="arrow" />
      </div>
      {/* </div> */}

      {/* Description and Tags Section */}
      {!expanded && (
        <div className="flex flex-col h-[calc(100%-48px)] border border-t-[#d9d9d9] rounded-[28px] rounded-b-none p-5 pb-0 bg-white ">
          <div className="flex-1 min-h-0 overflow-y-auto pr-2 scrollbar-fade">
            <p className="text-black">{project.description}</p>
          </div>
          <div className="flex items-center py-3 h-10">
            <Tags tags={project.tags} />
          </div>
          {/* <div className="pt-2  flex justify-between items-end "> */}

          {/* <div className="flex flex-wrap gap-2 ">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="w-fit h-fit px-5 border border-[#d9d9d9]"
                >
                  <p className="text-black text-[11px]">{tag}</p>
                </div>
              ))}
            </div> */}

          {/* <div>
              <p className="text-[#aaaaaa]">&lt;/&gt;</p>
            </div> */}
          {/* </div> */}
        </div>
      )}

      {/* {!expanded && (
        <div className="absolute bottom-0 flex  justify-between items-end ">
          <div className="flex flex-wrap gap-2 ">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className="w-fit h-fit px-5 border border-[#d9d9d9]"
              >
                <p className="text-black text-[11px]">{tag}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[#aaaaaa]">&lt;/&gt;</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProjectWindow;
