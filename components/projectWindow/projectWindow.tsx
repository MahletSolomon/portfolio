'use client';
import React, { useState } from 'react'
import image from './img.png'
import Image from 'next/image'
import downArrow from './angle-down.svg';
import upArrow from './angle-up.svg';
import left from "./angle-left.svg";
import right from "./angle-right.svg"

const ProjectWindow = () => {
  const tags = ["MySQL", "React.js", "Socket.io"];
    const [expanded, setExpanded] = useState(false);
  
  return (
    <div
      className={`w-[968px] h-[512px] grid  ${
        expanded ? "flex-col px-8 pb-0" : "grid-rows-[auto_1fr] "
      }  border border-[#d9d9d9] overflow-hidden`}
    >
      <div
        className={`w-full h-full flex flex-col pb-4 px-5 space-y-[-14px] ${
          expanded ? "h-full" : "h-12"
        }`}
      >
        {expanded && (
          <div className="pt-0 h-full w-full">
            <div className="w-full h-full flex justify-center items-center space-x-4 px-5  border bg-white border-[#d9d9d9] rounded-[14px] rounded-t-none border-t-0 ">
              <button className="w-fit h-fit hover:cursor-pointer">
                <Image src={left} className="w-7 h-7" alt="" />
              </button>
              <div className="w-full h-full flex">
                <Image
                  src={image}
                  alt="img"
                  className={`w-full transition-all duration-300 object-contain`}
                />
              </div>
              <button className="w-fit h-fit hover:cursor-pointer">
                <Image src={right} className="w-7 h-7" alt="" />
              </button>
            </div>
          </div>
        )}
        {!expanded && (
          <div className="w-full h-full flex">
            <Image
              src={image}
              alt="img"
              className={`w-full transition-all duration-300 object-cover blur-sm`}
            />
          </div>
        )}
        <div className="w-full h-fit flex justify-center">
          <div
            className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-400 bg-opacity-30 backdrop-blur-md z-30 hover:cursor-pointer hover:bg-opacity-50 transition-all duration-300"
            onClick={() => setExpanded(!expanded)}
          >
            <Image src={expanded ? upArrow : downArrow} alt="arrow" />
          </div>
        </div>
      </div>

      {!expanded && (
        <div className="grid grid-rows-[1fr_auto] border border-t-[#d9d9d9] rounded-[28px] p-5 bg-white">
          <p>
            Kerr is a freelancing platform connecting digital artists and
            designers with clients. It offers tools for project management,
            secure payments, and seamless communication, making it easy for
            freelancers to showcase their work and collaborate professionally
            with clients.
          </p>

          <div className=" flex justify-between items-end mt-auto transition-all duration-300">
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
        </div>
      )}
    </div>
  );
}

export default ProjectWindow