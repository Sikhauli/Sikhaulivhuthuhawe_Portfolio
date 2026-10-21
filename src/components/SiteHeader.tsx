import { useState } from "react";
import { Menu, X } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Vhuthuhawe Sikhauli home"><span className="brand-mark">VS</span><span className="brand-name">VHUTHUHAWE SIKHAULI<small>FULL STACK DEVELOPER</small></span></a>
        <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link, index) => <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{link.label}</a>)}
          <a className="nav-contact" href="mailto:sikhaulivl@gmail.com" onClick={() => setMenuOpen(false)}>Let’s talk <span>↗</span></a>
        </nav>
        <button className="mobile-menu" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </header>
  );
}