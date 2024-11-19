import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TextPage from "./pages/TextPage";
import TitleUpdater from "./components/TitleUpdater";
import BackButton from "./components/BackButton";

const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const MyProjects = lazy(() => import("./pages/MyProjects"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <div className="flex flex-col gap-10 min-h-screen bg-slate-800 text-white p-10">
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
        <BackButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
