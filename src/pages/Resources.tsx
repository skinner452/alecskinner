import ResourceItem from "../components/ResourceItem";
import ResumeImage from "../images/resume.png";
import GitHubImage from "../images/github.png";

const Resources = () => {
  return (
    <div className="flex flex-col gap-20 w-full">
      <p className="text-5xl text-center font-bold">Resources</p>

      <div className="flex flex-col sm:flex-row gap-20 justify-center">
        <ResourceItem title="Resume" image={ResumeImage} link={"/Resume.pdf"} />
        <ResourceItem
          title="GitHub"
          image={GitHubImage}
          link={"https://github.com/skinner452"}
        />
      </div>
    </div>
  );
};

export default Resources;
