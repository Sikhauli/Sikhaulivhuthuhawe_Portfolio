import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="section section-shell" id="experience" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" index="04" eyebrow="THE WORK SO FAR" title="Experience earned by shipping." description="A steady progression from building features to owning systems and helping teams deliver." />
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-item" key={`${item.company}-${item.period}`} data-reveal>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <div className="timeline-title-row"><div><h3>{item.role}</h3><p className="timeline-company">{item.company} <span>·</span> {item.location}</p></div>{index === 0 && <span className="current-tag">CURRENT</span>}</div>
              <p className="timeline-summary">{item.summary}</p>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}