"use client";
import React, { useState } from "react";

interface TagsList {
    tags: string[];
    expandable: boolean;
}

const Tags:React.FC<TagsList> = ({tags, expandable=false}) => {
  const [expanded, setExpanded] = useState(expandable);


  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="w-full h-full ">
      <div className=" flex h-full justify-between items-center">
        {expanded && (
          <div
            className={`flex flex-wrap gap-x-4 overflow-hidden transition-all duration-300  ${
              expanded ? " opacity-100" : "opacity-0"
            }`}
          >
            {tags.map((t, index) => (
              <div
                key={index}
                className="h-fit px-5 border border-[#aaaaaa] shrink-0 whitespace-nowrap"
              >
                <p className="text-[#999999] text-[11px]">{t}</p>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={toggleExpanded}
          className={`hover:cursor-pointer transition-all duration-300  ${
            expanded ? "" : ""
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
