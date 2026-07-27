import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/app/components/shared/SectionEyebrow";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { QUICK_LINKS, type ServiceItem } from "@/data/cityServices";

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <a
      href="#"
      className="bg-card p-7 group hover:bg-secondary transition-colors flex items-start gap-4"
    >
      <div className="w-9 h-9 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:text-primary text-muted-foreground transition-colors">
        <Icon size={15} />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {service.label}
        </p>
        <p className="text-[11px] text-muted-foreground font-light mt-0.5 leading-relaxed">
          {service.sub}
        </p>
      </div>
      <ArrowUpRight
        size={13}
        className="text-muted-foreground ml-auto flex-shrink-0 group-hover:text-primary transition-colors mt-0.5"
      />
    </a>
  );
}

export function CityServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <SectionEyebrow className="mb-3">City Services</SectionEyebrow>
      <SectionHeading className="mb-12">We work for you.</SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {QUICK_LINKS.map((service) => (
          <ServiceCard key={service.label} service={service} />
        ))}
      </div>
    </section>
  );
}
