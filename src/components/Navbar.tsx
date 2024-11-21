import { useCallback, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../constants/navigation";

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
          {NAV_ITEMS.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
              key={item.url}
              to={item.url}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-8 font-extralight text-center py-5 sm:hidden">
          {NAV_ITEMS.map((link) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : ""
              }
              key={link.url}
              to={link.url}
              onClick={closeMenu}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
