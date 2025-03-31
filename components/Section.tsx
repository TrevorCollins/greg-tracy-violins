interface SectionProps {
  header: string;
  children: React.ReactNode;
}

const Section = ({ header, children }: SectionProps) => {
  return (
    <section className="section">
      <h2 className="header">{header}</h2>
      <div className="content">{children}</div>
    </section>
  );
};

export default Section;
