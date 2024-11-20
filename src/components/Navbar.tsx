import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHamburgerPress = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // If we are on the home page, no need to show navbar since all links are present
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-slate-900 px-10">
      <div className="mx-auto max-w-5xl flex flex-row items-center justify-between">
        <Link to="/" className="font-semibold py-5">
          Alec Skinner
        </Link>

        <button className="text-3xl sm:hidden" onClick={onHamburgerPress}>
          =
        </button>

        <div className="hidden gap-8 font-extralight text-center py-5 sm:flex">
          {[
            {
              url: "/about-me",
              title: "About Me",
            },
            {
              url: "/my-projects",
              title: "My Projects",
            },
            {
              url: "/resources",
              title: "Resources",
            },
            {
              url: "/contact",
              title: "Contact",
            },
          ].map((link) => (
            <Link key={link.url} to={link.url} onClick={closeMenu}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-8 font-extralight text-center py-5 sm:hidden">
          <Link to="/about-me">About Me</Link>
          <Link to="/my-projects">My Projects</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );

  // return (
  //   <nav className="bg-slate-900 px-10">
  //     <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between">
  //       <Link to="/" className="font-semibold py-5">
  //         Alec Skinner
  //       </Link>

  //       <div className="flex flex-col sm:flex-row gap-8 font-extralight text-center py-5">
  //         <Link to="/about-me">About Me</Link>
  //         <Link to="/my-projects">My Projects</Link>
  //         <Link to="/resources">Resources</Link>
  //         <Link to="/contact">Contact</Link>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
