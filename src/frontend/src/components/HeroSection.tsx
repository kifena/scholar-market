export default function HeroSection() {
  const scrollToWaitlist = () => {
    const el = document.querySelector("#waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStudents = () => {
    const el = document.querySelector("#students");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="bg-hero min-h-[92vh] flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden"
      data-ocid="hero"
    >
      {/* Subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px rule-gold" />

      <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.25em] text-hero-muted font-body font-lighter">
          The Academic Research Marketplace
        </p>

        {/* Main headline */}
        <h1 className="font-display leading-none tracking-tight">
          <span
            className="block text-[clamp(5rem,16vw,12rem)] text-lighter"
            style={{ color: "oklch(0.93 0.007 56.72)", fontWeight: 200 }}
          >
            Research
          </span>
          <span
            className="block text-[clamp(1.5rem,4vw,2.75rem)] font-lighter mt-2"
            style={{ color: "oklch(0.68 0.082 56.72)" }}
          >
            finally has a market.
          </span>
        </h1>

        {/* Gold rule */}
        <div className="w-24 rule-gold" />

        {/* Subheading */}
        <p className="max-w-2xl text-base md:text-lg leading-relaxed font-body font-lighter text-hero-muted">
          Students sell original academic papers. Publishers license unique
          research from top universities and transform it — via
          minimally-invasive AI — into newsletters, articles, posts, short-form
          content, or video scripts.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button
            type="button"
            onClick={scrollToWaitlist}
            className="px-8 py-3 border border-gold text-gold font-body font-lighter text-sm tracking-widest uppercase hover:bg-gold/10 transition-smooth"
            data-ocid="hero-cta"
          >
            Join the Waitlist
          </button>
          <button
            type="button"
            onClick={scrollToStudents}
            className="text-sm font-body font-lighter transition-smooth tracking-wide"
            style={{ color: "oklch(0.62 0.022 56.72)" }}
            data-ocid="hero-learn-more"
          >
            Learn how it works ↓
          </button>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px rule-gold" />
    </section>
  );
}
