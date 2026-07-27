import { sans } from "@/lib/fonts";
import { NavBar } from "@/app/components/sections/NavBar";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { TickerBar } from "@/app/components/sections/TickerBar";
import { NewsSection } from "@/app/components/sections/NewsSection";
import { EventsSection } from "@/app/components/sections/EventsSection";
import { EatDrinkSection } from "@/app/components/sections/EatDrinkSection";
import { ParksSection } from "@/app/components/sections/ParksSection";
import { CityServicesSection } from "@/app/components/sections/CityServicesSection";
import { PhotoBanner } from "@/app/components/sections/PhotoBanner";
import { Footer } from "@/app/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={sans}>
      <NavBar />
      <HeroSection />
      <TickerBar />
      <NewsSection />
      <EventsSection />
      <EatDrinkSection />
      <ParksSection />
      <CityServicesSection />
      <PhotoBanner />
      <Footer />
    </div>
  );
}
