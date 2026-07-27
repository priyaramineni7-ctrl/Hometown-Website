import { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { serif } from "@/lib/fonts";
import { NAV_LINKS } from "@/data/nav";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const goToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        const match = NAV_LINKS.find((link) => link.href === `#${topMost.target.id}`);
        if (match) setActiveSection(match.label);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.04)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top bar */}
        <div className="h-16 flex items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <MapPin size={13} className="text-primary flex-shrink-0" />
              <span className="text-base font-semibold tracking-tight" style={serif}>
                <em>Ashburn · Brambleton</em>
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground leading-none pl-5">
              Loudoun County, Virginia
            </p>
          </div>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(link.label);
                    goToSection(link.href);
                  }}
                  className={`text-[11px] uppercase tracking-widest transition-colors font-medium ${
                    activeSection === link.label
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://www.loudoun.gov/3055/Report-an-Issue"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 border border-primary text-primary text-[11px] font-semibold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            311 Services
          </a>

          <button
            className="lg:hidden text-foreground"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-border px-6 pb-6 pt-4 flex flex-col gap-4 bg-background">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(l.label);
                setMenuOpen(false);
                requestAnimationFrame(() => requestAnimationFrame(() => goToSection(l.href)));
              }}
              className="text-left text-sm text-foreground/70 uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
