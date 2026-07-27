import { UtensilsCrossed } from "lucide-react";
import { SectionEyebrow } from "@/app/components/shared/SectionEyebrow";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { EAT_DRINK, type RestaurantItem } from "@/data/eatDrink";
import { serif } from "@/lib/fonts";

function RestaurantRow({ place, index }: { place: RestaurantItem; index: number }) {
  return (
    <div className="py-6 group cursor-pointer hover:bg-secondary/40 px-4 -mx-4 transition-colors flex items-start gap-5">
      <span className="text-[10px] text-muted-foreground tabular-nums pt-1 w-4 flex-shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3
              className="text-base font-medium text-foreground group-hover:text-primary transition-colors"
              style={serif}
            >
              {place.name}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                {place.type}
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-[10px] text-muted-foreground">{place.neighborhood}</span>
            </div>
          </div>
          <UtensilsCrossed
            size={13}
            className="text-muted-foreground flex-shrink-0 mt-1 group-hover:text-primary transition-colors"
          />
        </div>
        <p className="text-xs text-muted-foreground font-light leading-relaxed mt-2">
          {place.note}
        </p>
      </div>
    </div>
  );
}

export function EatDrinkSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Left sticky column */}
        <div className="lg:sticky lg:top-24">
          <SectionEyebrow className="mb-3">Eat &amp; Drink</SectionEyebrow>
          <SectionHeading className="mb-5 leading-tight">
            The local
            <br />
            <em>food scene</em>
          </SectionHeading>
          <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
            Ashburn's restaurant scene has grown from suburban strip malls to a genuinely
            diverse culinary destination — with acclaimed chefs, independent breweries,
            and a weekly farmers market that anchors community life.
          </p>
          <div className="relative overflow-hidden bg-secondary" style={{ aspectRatio: "4/5" }}>
            <img
              src="https://images.unsplash.com/photo-1514425263458-109317cc1321?w=600&h=750&fit=crop&auto=format"
              alt="People walking through an outdoor market"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right restaurant list */}
        <div className="divide-y divide-border">
          {EAT_DRINK.map((place, i) => (
            <RestaurantRow key={place.name} place={place} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
