import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SignalStrip from "@/components/SignalStrip";
import Work from "@/components/Work";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SignalStrip />
      <Work />
      <About />
      <Footer />
    </main>
  );
}
