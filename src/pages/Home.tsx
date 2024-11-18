import { Link } from "react-router-dom";
import MaineImage from "../images/maine.jpg";

const Home = () => {
  return (
    <div className="container max-w-4xl m-auto grid grid-cols-3 gap-10">
      <div className="col-span-2 my-auto">
        <h2 className="text-7xl font-semibold text-white tracking-tight">
          Hi, I'm Alec Skinner
        </h2>

        <p className="mt-8 text-xl/8 font-medium text-gray-300">
          I am a <b>Full Stack Engineer</b> with <b>8 years</b> of experience
          building scalable and user-friendly applications. I specialize in
          React, React Native, and Go, with a passion for turning ideas into
          impactful digital solutions.
        </p>

        <div className="mt-10 flex gap-x-10 text-base/7 font-semibold">
          <Link to={"/about-me"}>
            About me <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to={"/my-projects"}>
            My Projects <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to={"/resources"}>
            Resources <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to={"/contact"}>
            Contact <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="my-auto">
        <img
          className="opacity-80"
          src={MaineImage}
          alt="Alec on the coast of Maine"
        />
      </div>
    </div>
  );
};

export default Home;