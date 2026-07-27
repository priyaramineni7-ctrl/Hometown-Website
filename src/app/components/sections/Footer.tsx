import { MapPin, Music2 } from "lucide-react";
import { serif } from "@/lib/fonts";

const EXPLORE_LINKS = [
  "News & Updates",
  "Events Calendar",
  "Eat & Drink",
  "Parks & Trails",
  "Getting Around",
];

const RESOURCE_LINKS = [
  "Loudoun County Gov.",
  "LCPS Schools",
  "WMATA Silver Line",
  "Brambleton HOA",
  "Dulles Airport",
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={13} className="text-primary" />
              <span className="text-sm font-semibold" style={serif}>
                <em>Ashburn · Brambleton</em>
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-xs">
              Your community guide for Ashburn and Brambleton, Virginia.
              Events, local news, parks, dining, transit, and city services — all in one place.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {EXPLORE_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground font-light transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-4">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {RESOURCE_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground font-light transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground font-light">
            © 2026 Ashburn · Brambleton Community Guide. Not affiliated with Loudoun County Government.
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Music2 size={11} className="text-primary" />
            <span className="font-light">Made with pride by your neighbors.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
