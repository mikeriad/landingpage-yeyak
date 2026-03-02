import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { MissionSection } from "./components/MissionSection";
import { StorySection } from "./components/StorySection";
import { TimelineSection } from "./components/TimelineSection";
import { PartnersSection } from "./components/PartnersSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        color: "#2D2D3F",
        lineHeight: 1.7,
        background: "#fff",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Nav />
      <main>
        <Hero />
        <MissionSection />
        <StorySection />
        <TimelineSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
