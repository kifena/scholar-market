export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const links = [
    { label: "For Students", href: "#students" },
    { label: "For Publishers", href: "#publishers" },
    { label: "Waitlist", href: "#waitlist" },
  ];

  const scroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <p className="font-display font-semibold text-foreground tracking-tight">
          Scholar<span className="text-gold font-light">Mkt</span>
        </p>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <button
                type="button"
                onClick={() => scroll(l.href)}
                className="text-xs uppercase tracking-widest font-body font-lighter text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Copyright + caffeine */}
        <p className="text-xs font-body font-lighter text-muted-foreground text-center md:text-right">
          © {year}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-smooth"
          >
            Built with love using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
