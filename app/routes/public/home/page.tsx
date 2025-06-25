import HeroSection from "./sections/hero-section";
import PopularSection from "./sections/popular-section";
import ServicesSection from "./sections/services-section";
import HighlightsSection from "./sections/highlights-section";
import NewsletterSection from "./sections/newsletter-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <PopularSection className="bg-accent text-accent-foreground" />
      <NewsletterSection />
      <ServicesSection className="bg-accent text-accent-foreground" />
    </>
  );
}
