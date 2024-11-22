import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  startYear: number;
  endYear: number;
  description: ReactNode; // This could be a string, but opted to use ReactNode for flexibility and prettier formatting
  image: string;
  color: string;
  url: string;
};

const TimelineEntry = (props: Props) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 items-center">
      <div className="flex flex-col gap-2">
        <Link
          to={props.url}
          target="_blank"
          className="text-3xl font-bold text-center tracking-tight sm:text-left"
          style={{ color: props.color }}
        >
          {props.title}
        </Link>
        <p className="text-xl text-gray-400 text-center sm:text-left">
          {props.startYear}-{props.endYear}
        </p>
        <div className="text-base/7">{props.description}</div>
      </div>

      <Link to={props.url} target="_blank" className="w-60 shrink-0">
        <img
          className="opacity-80"
          src={props.image}
          alt={`${props.title} Logo`}
        />
      </Link>
    </div>
  );
};

export default TimelineEntry;
