import CodeImage from "../images/code.png";

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
          image={CodeImage}
          link="/"
        />

        <ProjectItem
          title="LastFM Stats for Tidbyt"
          description="App built for Tidbyt that displays a user's listening stats from LastFM"
          tags={["Starlark"]}
          image={CodeImage}
          link="https://github.com/skinner452/community/tree/main/apps/lastfmstats"
        />
      </div>
    </div>
  );
};

export default Projects;