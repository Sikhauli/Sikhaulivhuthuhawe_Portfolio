import { ArrowUpRight, Github, Linkedin, Mail } from "../components/Icons";

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell contact-inner">
        <div className="section-kicker" data-reveal><span>05</span><span className="kicker-line" /><span>THE NEXT THING</span></div>
        <div className="contact-layout">
          <div data-reveal><h2 id="contact-title">Have a real problem<br />worth <span className="accent">solving?</span></h2><p className="contact-copy">I’m always glad to talk about useful products, thoughtful engineering and teams that care about the details.</p><a className="button button--primary contact-cta" href="mailto:sikhaulivl@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></div>
          <div className="contact-links" data-reveal>
            <a href="mailto:sikhaulivl@gmail.com"><span className="contact-link-icon"><Mail size={18} /></span><span><small>EMAIL</small><strong>sikhaulivl@gmail.com</strong></span><ArrowUpRight size={16} /></a>
            <a href="https://github.com/Sikhauli" target="_blank" rel="noreferrer noopener"><span className="contact-link-icon"><Github size={18} /></span><span><small>GITHUB</small><strong>github.com/Sikhauli</strong></span><ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener"><span className="contact-link-icon"><Linkedin size={18} /></span><span><small>LINKEDIN</small><strong>Connect professionally</strong></span><ArrowUpRight size={16} /></a>
          </div>
        </div>
        <footer className="footer"><a href="#home" className="footer-brand"><span>VS</span> VHUTHUHAWE SIKHAULI</a><span>DESIGNED WITH INTENTION · BUILT WITH CARE</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
      </div>
    </section>
  );
}