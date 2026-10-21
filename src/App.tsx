import { lazy, Suspense } from "react";
import SiteHeader from "./components/SiteHeader";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import { useScrollReveal } from "./hooks/useScrollReveal";

const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionFallback() {
  return <div className="section-loading" aria-hidden="true" />;
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}><Projects /></Suspense>
        <div className="section-divider" />
        <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
        <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
      </main>
    </>
  );
}