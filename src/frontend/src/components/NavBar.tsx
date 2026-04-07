import { useState } from "react";

const links = [
  { label: "For Students", href: "#students" },
  { label: "For Publishers", href: "#publishers" },
  { label: "Join Waitlist", href: "#waitlist" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border"
      data-ocid="nav"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-semibold tracking-tight text-foreground text-lg"
          aria-label="ScholarMkt — scroll to top"
        >
          Scholar<span className="text-gold font-light">Mkt</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                type="button"
                onClick={() => scrollTo(l.href)}
                className="text-sm font-body font-lighter text-muted-foreground hover:text-foreground transition-smooth"
                data-ocid={`nav-link-${l.href.replace("#", "")}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-muted-foreground hover:text-foreground transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <title>{menuOpen ? "Close menu" : "Open menu"}</title>
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              type="button"
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-smooth text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
