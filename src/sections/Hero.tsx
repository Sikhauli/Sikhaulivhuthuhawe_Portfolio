import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "../components/Icons";
import { IconLink } from "../components/Icons";
import { lazy, Suspense } from "react";

const ThreeHero = lazy(() => import("../components/ThreeHero"));

export default function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <Suspense fallback={<div className="hero-art hero-art--fallback" aria-hidden="true"><div className="fallback-orbit" /><div className="fallback-orbit fallback-orbit--inner" /><span>VS</span></div>}><ThreeHero /></Suspense>
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> OPEN TO SELECT OPPORTUNITIES</div>
        <p className="hero-overline">FULL STACK SOFTWARE DEVELOPER <span>·</span> SOUTH AFRICA</p>
        <h1 id="hero-title">I build systems<br />that <span className="accent">move work forward.</span></h1>
        <p className="hero-summary">I’m Vhuthuhawe Sikhauli — a full stack developer building secure, scalable web and mobile products for real business workflows.</p>
        <div className="hero-location"><MapPin size={15} strokeWidth={1.7} /> Centurion, Gauteng <span className="location-separator">/</span> Available for remote, Hybrid and Office work </div>
        <div className="hero-actions">
          <a className="button button--primary" href="#projects">Explore selected work <ArrowDownRight size={17} /></a>
          <a className="button button--quiet" href="/Vhuthuhawe-Sikhauli-CV.pdf" download>Download CV <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-socials" aria-label="Social links">
          <IconLink href="https://github.com/Sikhauli" label="GitHub profile"><Github size={18} /></IconLink>
          <IconLink href="https://www.linkedin.com/" label="LinkedIn profile"><Linkedin size={18} /></IconLink>
          <IconLink href="mailto:sikhaulivl@gmail.com" label="Send email" external={false}><Mail size={18} /></IconLink>
          <span className="social-caption">LET’S BUILD SOMETHING USEFUL</span>
        </div>
      </div>
      <div className="hero-index"><span>01 / 06</span><span className="index-rule" /><span>PRODUCT-MINDED ENGINEERING</span></div>
    </section>
  );
}