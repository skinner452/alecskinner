import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TitleUpdater from "./components/TitleUpdater";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Projects = lazy(() => import("./pages/Projects"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Fundraiser = lazy(() => import("./pages/Fundraiser"));

function App() {
  return (
    <BrowserRouter>
      {/* Automatically updates the tab title based on the route name */}
      <TitleUpdater />
      <Layout />
    </BrowserRouter>
  );
}

const Layout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/fundraiser");

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbar ? <Navbar /> : null}

      <div className="p-10 flex-grow flex">
        <div className="max-w-5xl w-full mx-auto flex-grow flex">
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/my-projects" element={<Projects />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/fundraiser" element={<Fundraiser />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
