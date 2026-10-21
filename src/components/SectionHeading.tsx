interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ id, index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-kicker"><span>{index}</span><span className="kicker-line" /><span>{eyebrow}</span></div>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}