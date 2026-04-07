const formats = [
  "Newsletter",
  "Magazine Article",
  "Blog Post",
  "Short-Form Content",
  "Video Script",
  "Social Thread",
];

const steps = [
  {
    id: "recommendations",
    label: "Curated recommendations",
    description:
      "Papers are pushed to you based on your publication's niche and topic — no sifting through irrelevant work.",
  },
  {
    id: "license",
    label: "License with one click",
    description:
      "Purchase the rights to a student's research. Transparent pricing, clear terms, no negotiation.",
  },
  {
    id: "transform",
    label: "Transform via AI",
    description:
      "Our minimally-invasive AI adapts the research into whichever format you need — preserving academic integrity.",
  },
];

export default function PublisherSection() {
  return (
    <section
      id="publishers"
      className="bg-background py-24 px-6 section-divider"
      data-ocid="publishers-section"
    >
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-body font-lighter mb-6">
          For Publishers
        </p>

        {/* Headline */}
        <h2 className="font-display font-lighter text-[clamp(1.6rem,4vw,2.8rem)] leading-snug text-foreground max-w-3xl mb-3">
          Gain immediate access to{" "}
          <span className="text-gold">already completed</span>, unique research
          by students from top universities.
        </h2>

        <p className="font-body font-lighter text-muted-foreground text-base mb-4 max-w-xl">
          Transform it into any format you need with our minimally-invasive AI.
        </p>

        <div className="rule-gold w-16 mb-12" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="flex flex-col gap-10">
            {steps.map((s, i) => (
              <div key={s.id} className="flex gap-5 items-start">
                <span
                  className="shrink-0 w-8 h-8 flex items-center justify-center border border-border text-muted-foreground text-xs font-body font-lighter tracking-wide"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display font-medium text-foreground text-base mb-1">
                    {s.label}
                  </p>
                  <p className="font-body font-lighter text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Format pills + quote */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body font-lighter mb-5">
              Output formats
            </p>
            <div className="flex flex-wrap gap-3">
              {formats.map((f) => (
                <span
                  key={f}
                  className="px-4 py-2 border border-border bg-card text-sm font-body font-lighter text-foreground tracking-wide"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-10 p-6 border border-gold/30 bg-muted/30">
              <p className="font-display font-lighter text-sm text-foreground leading-relaxed">
                "The same research that earned a student a grade now powers your
                next publication — curated, licensed, and ready to publish."
              </p>
              <p className="mt-3 text-xs text-muted-foreground font-body font-lighter tracking-wide uppercase">
                ScholarMkt Editorial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
