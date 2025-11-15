import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  company: string;
  title: string;
  startYear: number;
  endYear: number | null; // Use null for ongoing
  description: ReactNode; // This could be a string, but opted to use ReactNode for flexibility and prettier formatting
  image: string;
  color: string;
  url: string;
};

const TimelineEntry = (props: Props) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-8">
      <div className="flex flex-col gap-2 flex-1">
        <Link
          to={props.url}
          target="_blank"
          className="text-3xl font-bold text-center tracking-tight sm:text-left hover:underline"
          style={{ color: props.color }}
        >
          {props.company}
        </Link>
        <p className="text-sm font-bold text-center sm:text-left text-center" style={{ color: props.color }}>
          {props.title}
        </p>
        <p className="text-xl text-gray-400 text-center sm:text-left">
          {props.startYear} - {props.endYear ?? "Present"}
        </p>
        <div className="text-base/7">{props.description}</div>
      </div>

      <Link to={props.url} target="_blank" className="w-60 mt-8 mx-auto">
        <img
          className="opacity-80 w-full"
          src={props.image}
          alt={`${props.title} Logo`}
        />
      </Link>
    </div>
  );
};

export default TimelineEntry;
