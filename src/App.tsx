import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextPage from "./pages/TextPage";

const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const MyProjects = lazy(() => import("./pages/MyProjects"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-slate-800 text-white">
        <Suspense fallback={<TextPage text="Loading..." />}>
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
    </BrowserRouter>
  );
}

export default App;
