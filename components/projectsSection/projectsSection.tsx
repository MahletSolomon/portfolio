import React from 'react'
import img1 from './img.png'
import img2 from './ii.png'
import img3 from './imgg.png'
import img4 from './imggg.png'
import img5 from './imm.png'
import img6 from './lmi.png'
import img7 from './ll.png'

import ProjectCard from '../projectCard/projectCard'
import ProjectCard2 from '../projectCard2/projectCard'

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
          "Kerr is a freelancing platform connecting digital artists and designers with clients. It offers tools for project management, secure payments, and seamless communication, making it easy for freelancers to showcase their work and collaborate professionally with clients.",
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
    ];
  return (
    <div className='min-h-screen w-full bg-white flex flex-col'>
        <h1>Projects</h1>
        <div className='flex flex-col space-y-8 justify-center items-center '>
            {projects.map((p)=>{
                return(
                    <ProjectCard2
                    key={p.id}
                    image={p.images[0]}
                    description={p.description}
                    title={p.title}
                    tags = {p.tags}
                    />
                )
            })}
        </div>

    </div>
  )
}

export default ProjectSection