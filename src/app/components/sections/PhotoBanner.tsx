import { SectionEyebrow } from "@/app/components/shared/SectionEyebrow";
import { serif } from "@/lib/fonts";

export function PhotoBanner() {
  return (
    <section
      className="relative overflow-hidden border-t border-border"
      style={{ height: "50vh", minHeight: "320px" }}
    >
      <img
        src="https://images.unsplash.com/photo-1503432697506-6986abec65ca?w=1600&h=700&fit=crop&auto=format"
        alt="People gathered on an urban street in the evening"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <SectionEyebrow className="mb-4">Ashburn · Brambleton</SectionEyebrow>
          <h2 className="text-4xl lg:text-6xl text-foreground" style={serif}>
            <em>This is our city.</em>
          </h2>
        </div>
      </div>
    </section>
  );
}
