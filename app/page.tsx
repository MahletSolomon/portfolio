import ProjectCard from "@/components/projectCard/projectCard";
import ProjectCard2 from "@/components/projectCard2/projectCard";
import ProjectsWindow from "@/components/projectsSection/projectsWindow";
import ProjectWindow from "@/components/projectWindow/projectWindow";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen p-10">
      {/* <ProjectWindow /> */}
      <ProjectsWindow/>
    </div>
  );
}
