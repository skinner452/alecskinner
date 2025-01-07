import { Link } from "react-router-dom";
import { TAG_COLORS } from "../constants/tags";

type Props = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

const ProjectItem = (props: Props) => {
  return (
    <Link
      to={props.link}
      target="_blank"
      className="flex flex-col sm:flex-row sm:gap-8 items-center bg-slate-700 rounded-xl p-4"
    >
      <img src={props.image} alt={props.title} className="w-24 h-24" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
          <p className="text-xl font-bold">{props.title}</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {props.tags.map((tag) => (
              <p
                key={tag}
                className={`${
                  TAG_COLORS[tag] ?? "bg-black"
                } text-white px-2 py-1 rounded`}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default ProjectItem;
