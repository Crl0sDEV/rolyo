import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import LocationMap from "@/components/sections/LocationMap";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <Navbar />

      <Hero />
      <About />
      <Services />
      <LocationMap />
      <CTA/>

      <Footer />

    </main>
  );
}