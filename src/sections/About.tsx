import SectionHeading from "../components/SectionHeading";
import { ArrowUpRight } from "../components/Icons";

export default function About() {
  return (
    <section className="section section-shell" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" index="01" eyebrow="A LITTLE CONTEXT" title="Engineering with the whole system in mind." description="I care about what happens before the first component and after the last deploy." />
      <div className="about-layout">
        <p className="about-lead" data-reveal>Good software is more than a working screen. It is a dependable system that helps people do their work with less friction.</p>
        <div className="about-body" data-reveal>
          <p>I work across frontend, backend and mobile, connecting thoughtful interfaces to APIs, data models and operational workflows. I like understanding the problem end to end before choosing the simplest architecture that fits.</p>
          <p>I take ownership from discovery through delivery, collaborate directly with clients, and pay attention to access control, maintainability and the realities of production.</p>
          <p>I also enjoy helping other developers grow through clear code reviews, shared context and practical mentorship.</p>
          <a className="text-link" href="#experience">More about my approach <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}