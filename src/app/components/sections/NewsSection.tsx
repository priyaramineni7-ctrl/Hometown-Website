import { ArrowUpRight, Clock } from "lucide-react";
import { SectionEyebrow } from "@/app/components/shared/SectionEyebrow";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { NEWS, type NewsItem } from "@/data/news";
import { serif } from "@/lib/fonts";

function NewsArticle({ item }: { item: NewsItem }) {
  return (
    <article className="flex items-start gap-6 py-5 group cursor-pointer hover:bg-secondary/40 px-4 -mx-4 transition-colors">
      <span className="flex-shrink-0 text-[10px] uppercase tracking-widest text-primary font-semibold border border-primary/30 px-2 py-1 mt-0.5">
        {item.tag}
      </span>
      <div className="flex-1 min-w-0">
        <p
          className="text-base lg:text-lg text-foreground leading-snug group-hover:text-primary/90 transition-colors"
          style={serif}
        >
          {item.headline}
        </p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-1.5 text-muted-foreground mt-1">
        <Clock size={11} />
        <span className="text-[11px] whitespace-nowrap">{item.time}</span>
      </div>
    </article>
  );
}

export function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="flex items-end justify-between mb-10">
        <div>
          <SectionEyebrow className="mb-3">Local News</SectionEyebrow>
          <SectionHeading>What's happening</SectionHeading>
        </div>
        <a
          href="#"
          className="hidden sm:flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          All stories <ArrowUpRight size={12} />
        </a>
      </div>
      <div className="divide-y divide-border">
        {NEWS.map((item, i) => (
          <NewsArticle key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
