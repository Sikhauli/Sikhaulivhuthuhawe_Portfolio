import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="section section-shell" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" index="02" eyebrow="TOOLS I REACH FOR" title="Practical range. Solid fundamentals." description="The right tool depends on the constraints, the team and the job to be done." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.category} data-reveal style={{ transitionDelay: `${index * 55}ms` }}>
            <div className="skill-group-top"><span className="mono-index">0{index + 1}</span><h3>{group.category}</h3></div>
            <div className="skill-chips">{group.items.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}