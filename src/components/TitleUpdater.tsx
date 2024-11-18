import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the first path name, technically the second path since location.pathname starts with a slash
    const pathName = location.pathname.split("/")?.[1];

    let title = "Alec Skinner";
    if (pathName) {
      // Replace dashes with spaces
      let prettyPathName = pathName.replaceAll("-", " ");

      // Capitalize the first letter of each word
      prettyPathName = prettyPathName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Append the pretty path name to the title
      title += ` | ${prettyPathName}`;
    }

    console.log(title);

    // Set the document title
    document.title = title;
  }, [location]);

  return null;
};

export default TitleUpdater;
