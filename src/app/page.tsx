import WhatsApp from "@/components/Animations/WhatsApp";
import Contact from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/updates/AboutSection";
import { MessageSection } from "@/components/updates/MessageSection";
import { MyWorks } from "@/components/updates/MyWorks";
import { Skills } from "@/components/updates/Skills";
import { Testimonials } from "@/components/updates/Testimonials";

export default function Home() {
  return (
    <div className="relative bg-slate-950 font-Cinzel">
      <HeroSection />
      <AboutSection />
      <MessageSection />
      <MyWorks />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  );
}
