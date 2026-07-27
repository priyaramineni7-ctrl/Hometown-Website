import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/app/components/shared/SectionEyebrow";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { PARK_SPOTS, type ParkItem } from "@/data/parks";
import { serif } from "@/lib/fonts";

function ParkRow({ park }: { park: ParkItem }) {
  return (
    <div className="flex items-center justify-between py-4 group cursor-pointer hover:bg-background/40 px-4 -mx-4 transition-colors gap-6">
      <div>
        <p
          className="text-sm font-medium text-foreground group-hover:text-primary transition-colors"
          style={serif}
        >
          {park.name}
        </p>
        <p className="text-[11px] text-muted-foreground font-light">{park.type}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <span className="text-xs text-primary font-semibold tabular-nums">{park.miles}</span>
      </div>
    </div>
  );
}

export function ParksSection() {
  return (
    <section className="border-t border-b border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-center">
          {/* Left: copy */}
          <div>
            <SectionEyebrow className="mb-3">Parks &amp; Trails</SectionEyebrow>
            <SectionHeading className="mb-5 leading-tight">
              40+ miles of trails.
              <br />
              <em className="text-muted-foreground">Right outside your door.</em>
            </SectionHeading>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Brambleton and Ashburn's trail network is one of the most extensive in
              Northern Virginia — connecting neighborhoods, parks, and the legendary
              W&amp;OD Trail without touching a single road.
            </p>
            <button className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-widest text-primary font-semibold hover:gap-3 transition-all">
              Trail map &amp; park guide <ArrowUpRight size={12} />
            </button>
          </div>

          {/* Right: park list */}
          <div className="divide-y divide-border">
            {PARK_SPOTS.map((p) => (
              <ParkRow key={p.name} park={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
