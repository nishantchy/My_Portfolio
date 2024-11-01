import { AboutSection } from "@/components/AboutSection";
import WhatsApp from "@/components/Animations/WhatsApp";
import Contact from "@/components/ContactMe";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { MessageSection } from "@/components/Message";
import { MyWorks } from "@/components/MyWorks";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";

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
