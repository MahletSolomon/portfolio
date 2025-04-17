"use client";
import React, { useState } from "react";

interface TagsList {
    tags: string[];
}

const Tags:React.FC<TagsList> = ({tags}) => {
  const [expanded, setExpanded] = useState(true);


  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="w-full px-8 py-4 relative">
      <div className=" flex justify-between items-center">
        <div
          className={`flex flex-wrap gap-y-2 gap-x-4 overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {tags.map((t, index) => (
            <div
              key={index}
              className="h-fit px-5 border border-[#d9d9d9] shrink-0 whitespace-nowrap"
            >
              <p className="text-[#dddddd] text-[11px]">{t}</p>
            </div>
          ))}
        </div>
        <button
          onClick={toggleExpanded}
          className={`hover:cursor-pointer transition-all duration-300 ${
            expanded ? "" : "absolute left-8"
          }`}
          aria-label={expanded ? "Collapse tags" : "Expand tags"}
        >
          <p className="text-[#aaaaaa]">&lt;/&gt;</p>
        </button>
      </div>
    </div>
  );
};

export default Tags;
