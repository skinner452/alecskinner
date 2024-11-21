import ReactImage from "../images/react.png";

import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <p className="text-5xl text-center font-bold">Projects</p>
      <div className="flex flex-col gap-10">
        <ProjectItem
          title="alecskinner.com"
          description="Personal website built with React and Tailwind CSS"
          tags={["React", "Typescript", "Tailwind CSS"]}
          image={ReactImage}
          link="/"
        />
      </div>
    </div>
  );
};

export default Projects;
