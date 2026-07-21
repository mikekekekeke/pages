import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowWePartner from "@/components/HowWePartner";
import MeetFrip from "@/components/MeetFrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MeetFrip />
        <HowWePartner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}