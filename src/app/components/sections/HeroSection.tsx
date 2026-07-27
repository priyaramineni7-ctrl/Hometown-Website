import type React from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/common/ImageWithFallback";
import heroImage from "@/imports/image.png";
import { serif } from "@/lib/fonts";

interface SnapshotCardProps {
  label: string;
  children: React.ReactNode;
}

function HeroSnapshotCard({ label, children }: SnapshotCardProps) {
  return (
    <div className="bg-card border border-border p-5">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-medium">
        {label}
      </p>
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[3fr_2fr] gap-12 items-end">
        {/* Left: headline + hero image */}
        <div className="flex flex-row gap-4 items-end">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-6">
              Official Community Guide
            </p>
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-foreground mb-7"
              style={serif}
            >
              Live it.
              <br />
              <em className="text-primary">Love it.</em>
              <br />
              <span className="text-foreground/25">Loudoun.</span>
            </h1>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
              Your guide to everything happening in Ashburn and Brambleton —
              events, local eats, trails, transit, and the people who make this
              place worth coming home to.
            </p>
          </div>
          <div className="w-96 xl:w-[28rem] shrink-0">
            <ImageWithFallback
              src={heroImage}
              alt="Evening view of a local Brambleton venue with warm lights"
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right: live snapshot */}
        <div className="flex flex-col gap-3">
          <HeroSnapshotCard label="Happening now">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-sm font-medium text-foreground leading-snug">
                  Loudoun County Fair · All this week
                </p>
                <p className="text-xs text-muted-foreground font-light mt-0.5">
                  Loudoun County Fairgrounds · Rides, livestock, live music
                </p>
              </div>
            </div>
          </HeroSnapshotCard>

          <HeroSnapshotCard label="This weekend">
            <div className="flex flex-col gap-2.5">
              {[
                { t: "Farmers Market",        s: "Brambleton Town Center · Sat 8am" },
                { t: "Movies at Town Center",  s: "Brambleton Lawn · Fri at dusk" },
                { t: "Trivia Night",           s: "Lost Rhino Brewing · Thu 7pm" },
              ].map(({ t, s }) => (
                <div key={t} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-foreground">{t}</p>
                    <p className="text-[11px] text-muted-foreground font-light">{s}</p>
                  </div>
                  <ChevronRight size={12} className="text-muted-foreground flex-shrink-0" />
                </div>
              ))}
            </div>
          </HeroSnapshotCard>

          <div className="bg-primary p-5 flex items-center justify-between group cursor-pointer hover:bg-primary/90 transition-colors">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-primary-foreground/60 font-medium mb-0.5">
                Full calendar
              </p>
              <p className="text-sm font-semibold text-primary-foreground">
                View all upcoming events →
              </p>
            </div>
            <ArrowUpRight
              size={18}
              className="text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
