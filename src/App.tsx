import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextPage from "./pages/TextPage";
import TitleUpdater from "./components/TitleUpdater";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const MyProjects = lazy(() => import("./pages/MyProjects"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      {/* Automatically updates the tab title based on the route name */}
      <TitleUpdater />

      <div className="flex flex-col min-h-screen bg-slate-800 text-white">
        <Navbar />

        <div className="p-10 flex-grow flex">
          <div className="max-w-5xl mx-auto flex-grow flex">
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/my-projects" element={<MyProjects />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<TextPage text="Not Found" />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
