'use client'
import React, { useState, useEffect } from "react";
import img1 from "./img.png";
import img2 from "./ii.png";
import img3 from "./imgg.png";
import img4 from "./imggg.png";
import img5 from "./imm.png";
import img6 from "./lmi.png";
import img7 from "./ll.png";

import ProjectCard from "../projectCard/projectCard";
import PopUp from "../popUp/popUp";
import ProjectWindow from "../projectWindow/projectWindow";
import { StaticImageData } from "next/image";

interface Project {
  images: StaticImageData[];
  title: string;
  description: string;
  tags: string[];
}

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      images: [img1, img2],
      description:
        "Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients.",
      title: "Kerr Freelancing Platform",
      tags: ["MySQL", "React.js", "Socket.io"],
    },
    {
      id: 2,
      images: [img3, img4],
      description:
        "Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients. Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients. Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients. Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients. Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients. Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients.",
      title: "Kerr Freelancing Platform",
      tags: ["MySQL", "Node.js", "Assembly", "Python"],
    },
    {
      id: 3,
      images: [img5, img6, img7],
      description:
        "Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients.",
      title: "Kerr Freelancing Platform",
      tags: ["Socket.io", "Node.js", "Assembly", "Python", "OOP", "java"],
    },
    {
      id: 1,
      images: [img2],
      description:
        "Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients.",
      title: "Kerr Freelancing Platform",
      tags: ["MySQL", "React.js", "Socket.io"],
    },
  ];


  const [openPopup, setOpenPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      console.log("Selected project has changed:", selectedProject);
    }
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setOpenPopup(true);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-white flex flex-col">
        <h1>Projects</h1>
        <div className="flex flex-col space-y-8 justify-center items-center ">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              image={p.images[0]}
              description={p.description}
              title={p.title}
              tags={p.tags}
              onClick={() =>
                openProject({
                  images: p.images,
                  description: p.description,
                  title: p.title,
                  tags: p.tags,
                })
              }
            />
          ))}
        </div>
      </div>

      {openPopup && selectedProject ? (
        <div className="bg-black">
          <PopUp
            state={openPopup}
            setState={setOpenPopup}
            height={"fit-content"}
            width={"fit-content"}
          >
            <ProjectWindow project={selectedProject} />
          </PopUp>
        </div>
      ) : null}
    </>
  );
};

export default ProjectSection;
