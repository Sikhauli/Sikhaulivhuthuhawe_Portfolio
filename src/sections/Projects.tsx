import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import { ArrowUpRight, Code2, ExternalLink } from "../components/Icons";

export default function Projects() {
  return (
    <section className="section section-shell" id="projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" index="03" eyebrow="SELECTED WORK" title="Built for the messy middle of real work." description="A few systems and products shaped around practical workflows, clear interfaces and dependable delivery." />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className={`project-card${project.featured ? " project-card--featured" : ""}`} key={project.name} data-reveal style={{ transitionDelay: `${(index % 3) * 65}ms` }}>
            <div className="project-card-head">
              <span className="project-category">{project.category}</span>
              {project.featured && <span className="featured-flag"><span /> FEATURED</span>}
            </div>
            <div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
            <p className="project-description">{project.description}</p>
            <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="project-footer">
              <a href={project.demoUrl} target={project.demoUrl.startsWith("http") ? "_blank" : undefined} rel={project.demoUrl.startsWith("http") ? "noreferrer noopener" : undefined} aria-label={`Live demo for ${project.name}`}>Live demo <ExternalLink size={14} /></a>
              <a href={project.sourceUrl} target="_blank" rel="noreferrer noopener" aria-label={`Source code for ${project.name}`}><Code2 size={15} /> Source code</a>
            </div>
          </article>
        ))}
      </div>
      <div className="projects-note" data-reveal><span className="note-mark">↳</span><p>Some client work is private or still evolving. Ask me about the technical decisions and delivery challenges behind it.</p><a href="#contact">Let’s talk <ArrowUpRight size={15} /></a></div>
    </section>
  );
}