import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Events from "@/components/Events";
import Pillars from "@/components/Pillars";
import Guides from "@/components/Guides";
import Profiles from "@/components/Profiles";
import CommunityCTA from "@/components/CommunityCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Events />
        <Pillars />
        <Guides />
        <Profiles />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
