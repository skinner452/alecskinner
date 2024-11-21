import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: string;
  link: string;
};

const ResourceItem = (props: Props) => {
  return (
    <Link
      className="flex flex-col gap-4 items-center"
      to={props.link}
      target="_blank"
    >
      <img src={props.image} alt="Resume" className="h-48" />
      <p className="text-center text-3xl font-extralight">{props.title}</p>
    </Link>
  );
};

export default ResourceItem;
