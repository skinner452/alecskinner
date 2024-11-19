import { Link, useLocation } from "react-router-dom";

const BackButton = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Link to={"/"} className="text-center text-3xl">
      &larr; Back
    </Link>
  );
};

export default BackButton;
