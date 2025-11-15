import GithubImage from "../images/github.png";

import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <p className="text-5xl text-center font-bold">Projects</p>
      <div className="flex flex-col gap-10">
        <ProjectItem
          title="Feathered Friends"
          description="A active/idle game about attracting birds and collecting feathers"
          tags={["React", "Typescript", "Tailwind CSS"]}
          image={GithubImage}
          link="https://github.com/skinner452/feathered-friends"
        />
        
        <ProjectItem
          title="FlexCharts API"
          description="Simple REST API to handle database operations for FlexCharts"
          tags={[
            "Node.js",
            "Express",
            "Typescript",
            "MySQL",
            "Lambda",
            "API Gateway",
            "Cognito",
          ]}
          image={GithubImage}
          link="https://github.com/skinner452/flex-charts-api"
        />

        <ProjectItem
          title="FlexCharts Mobile"
          description="Mobile app to track and visualize workout data"
          tags={["React Native", "Typescript", "Cognito"]}
          image={GithubImage}
          link="https://github.com/skinner452/flex-charts-mobile"
        />

        <ProjectItem
          title="alecskinner.com"
          description="Personal website built with React and Tailwind CSS"
          tags={["React", "Typescript", "Tailwind CSS", "Amplify"]}
          image={GithubImage}
          link="https://github.com/skinner452/alecskinner"
        />

        <ProjectItem
          title="LastFM Stats for Tidbyt"
          description="App built for Tidbyt that displays a user's listening stats from LastFM"
          tags={["Starlark"]}
          image={GithubImage}
          link="https://github.com/skinner452/community/tree/main/apps/lastfmstats"
        />
      </div>
    </div>
  );
};

export default Projects;
