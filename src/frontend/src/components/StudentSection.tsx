const benefits = [
  {
    id: "upload",
    label: "Upload your paper",
    description:
      "Submit your completed research with relevant keywords and tags. Any discipline, any institution.",
  },
  {
    id: "curation",
    label: "Expert curation",
    description:
      "Our editorial team reviews every submission for originality and academic merit before it reaches publishers.",
  },
  {
    id: "discovery",
    label: "Publishers discover you",
    description:
      "Your work is matched to publishers based on niche and topic — no cold outreach, no agents.",
  },
  {
    id: "earn",
    label: "Earn on every license",
    description:
      "Receive payment each time a publisher licenses your research. Your intellectual labor finally has a price tag.",
  },
];

export default function StudentSection() {
  return (
    <section
      id="students"
      className="bg-muted/40 py-24 px-6 section-divider"
      data-ocid="students-section"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-body font-lighter mb-6">
          For Students
        </p>

        {/* Headline */}
        <h2 className="font-display font-lighter text-[clamp(1.6rem,4vw,2.8rem)] leading-snug text-foreground max-w-3xl mb-4">
          Finally get recognized <span className="text-gold">&amp; paid</span>{" "}
          for all the intellectual labor you've done for free in school.
        </h2>

        <div className="rule-gold w-16 mb-12" />

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {benefits.map((b, i) => (
            <div key={b.id} className="flex gap-5 items-start">
              <span
                className="shrink-0 w-8 h-8 flex items-center justify-center border border-gold text-gold text-xs font-body font-lighter tracking-wide"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display font-medium text-foreground text-base mb-1">
                  {b.label}
                </p>
                <p className="font-body font-lighter text-sm text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
