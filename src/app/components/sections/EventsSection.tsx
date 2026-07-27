import { CalendarDays, Clock, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/app/components/shared/SectionEyebrow";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { EVENTS, type EventItem } from "@/data/events";
import { serif } from "@/lib/fonts";

function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="bg-card group cursor-pointer hover:bg-background transition-colors duration-300 flex flex-col">
      <div className="relative overflow-hidden bg-secondary" style={{ aspectRatio: "16/10" }}>
        <img
          src={event.img}
          alt={event.alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-background/90 backdrop-blur text-[9px] uppercase tracking-widest text-primary font-semibold px-2 py-1">
            {event.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-primary font-semibold tabular-nums">
            {event.date.month} {event.date.day}
          </span>
          <span className="text-border">·</span>
          <span className="text-[10px] text-muted-foreground">{event.day}</span>
        </div>
        <h3
          className="text-base text-foreground leading-snug group-hover:text-primary transition-colors"
          style={serif}
        >
          {event.title}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground mt-auto pt-2">
          <MapPin size={11} className="flex-shrink-0" />
          <span className="text-[11px] font-light">{event.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={11} className="flex-shrink-0" />
          <span className="text-[11px] font-light">{event.time}</span>
        </div>
      </div>
    </div>
  );
}

export function EventsSection() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <SectionEyebrow className="mb-3">Events Calendar</SectionEyebrow>
        <SectionHeading className="mb-12">
          Upcoming in Ashburn &amp; Brambleton
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {EVENTS.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://brambletonhoa.com/211/Event-Information"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border px-8 py-3 text-[11px] uppercase tracking-widest text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-colors"
          >
            See full events calendar <CalendarDays size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
