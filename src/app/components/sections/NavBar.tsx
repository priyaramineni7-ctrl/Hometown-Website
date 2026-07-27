import { useState, useEffect } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { serif } from "@/lib/fonts";
import { NAV_LINKS } from "@/data/nav";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("News");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
              <li key={link}>
                <button
                  onClick={() => setActiveSection(link)}
                  className={`text-[11px] uppercase tracking-widest transition-colors font-medium ${
                    activeSection === link
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 border border-primary text-primary text-[11px] font-semibold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors">
            311 Services
          </button>

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
            <button
              key={l}
              onClick={() => {
                setActiveSection(l);
                setMenuOpen(false);
              }}
              className="text-left text-sm text-foreground/70 uppercase tracking-widest"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
